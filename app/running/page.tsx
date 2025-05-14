// app/running/page.tsx
'use client'
import { useState, useEffect, useMemo } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'
import { useTheme } from 'next-themes'

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

type Activity = {
    id: number
    name: string
    distance: number
    moving_time: number
    elapsed_time: number
    total_elevation_gain: number
    start_date: string
    average_speed: number
    max_speed: number
    average_heartrate?: number
    max_heartrate?: number
    type: string
}

export default function RunningPage() {
    const [activities, setActivities] = useState<Activity[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Only show the UI after first render to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        async function fetchActivities() {
            try {
                const res = await fetch('/api/strava/activities')
                if (!res.ok) {
                    const errorData = await res.json()
                    throw new Error(
                        errorData.error || 'Failed to fetch activities'
                    )
                }

                const data = await res.json()
                // Filter only running activities
                const runningActivities = data.filter(
                    (activity: Activity) => activity.type === 'Run'
                )
                setActivities(runningActivities)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchActivities()
    }, [])

    if (loading)
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        )

    if (error)
        return (
            <div className="bg-background-light dark:bg-background-dark p-4 rounded-md border border-red-500/50 text-foreground my-4">
                Error loading activities: {error}
            </div>
        )

    if (activities.length === 0)
        return (
            <div className="text-center my-8 text-foreground">
                No running activities found.
            </div>
        )

    // Prepare data for charts
    const recentActivities = activities.slice(0, 10).reverse()

    // Determine theme-specific colors
    const isDarkMode = mounted && (resolvedTheme === 'dark' || theme === 'dark')
    const gridLineColor = isDarkMode
        ? 'rgba(75, 85, 99, 0.3)'
        : 'rgba(209, 213, 219, 0.5)'

    const distanceData = {
        labels: recentActivities.map((a) =>
            new Date(a.start_date).toLocaleDateString()
        ),
        datasets: [
            {
                label: 'Distance (km)',
                data: recentActivities.map((a) =>
                    (a.distance / 1000).toFixed(2)
                ),
                borderColor: isDarkMode
                    ? 'rgb(96, 165, 250)'
                    : 'rgb(53, 162, 235)', // Adjust for dark mode
                backgroundColor: isDarkMode
                    ? 'rgba(96, 165, 250, 0.5)'
                    : 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    const paceData = {
        labels: recentActivities.map((a) =>
            new Date(a.start_date).toLocaleDateString()
        ),
        datasets: [
            {
                label: 'Pace (min/km)',
                data: recentActivities.map((a) =>
                    (a.moving_time / 60 / (a.distance / 1000)).toFixed(2)
                ),
                borderColor: isDarkMode
                    ? 'rgb(248, 113, 113)'
                    : 'rgb(255, 99, 132)', // Adjust for dark mode
                backgroundColor: isDarkMode
                    ? 'rgba(248, 113, 113, 0.5)'
                    : 'rgba(255, 99, 132, 0.5)',
            },
        ],
    }

    // Common chart options with theme-aware colors
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: isDarkMode ? '#F8FAFC' : '#1A365D', // Use theme foreground colors
                },
            },
            title: { display: false },
        },
        scales: {
            y: {
                ticks: { color: isDarkMode ? '#F8FAFC' : '#1A365D' },
                grid: {
                    color: gridLineColor,
                },
            },
            x: {
                ticks: { color: isDarkMode ? '#F8FAFC' : '#1A365D' },
                grid: {
                    color: gridLineColor,
                },
            },
        },
    }

    // Calculate statistics
    const totalDistance =
        activities.reduce((sum, a) => sum + a.distance, 0) / 1000
    const totalTime =
        activities.reduce((sum, a) => sum + a.moving_time, 0) / 3600
    const avgPace =
        activities.reduce(
            (sum, a) => sum + a.moving_time / 60 / (a.distance / 1000),
            0
        ) / activities.length

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto mt-32">
            <h1 className="text-3xl font-bold mb-6 text-foreground">
                My Running Journey
            </h1>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg shadow border border-secondary/20">
                    <h3 className="text-lg font-semibold text-foreground">
                        Total Distance
                    </h3>
                    <p className="text-2xl font-bold text-foreground">
                        {totalDistance.toFixed(1)} km
                    </p>
                </div>
                <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg shadow border border-secondary/20">
                    <h3 className="text-lg font-semibold text-foreground">
                        Total Time
                    </h3>
                    <p className="text-2xl font-bold text-foreground">
                        {totalTime.toFixed(1)} hours
                    </p>
                </div>
                <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg shadow border border-secondary/20">
                    <h3 className="text-lg font-semibold text-foreground">
                        Average Pace
                    </h3>
                    <p className="text-2xl font-bold text-foreground">
                        {avgPace.toFixed(2)} min/km
                    </p>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg shadow border border-secondary/20">
                    <h2 className="text-xl font-bold mb-4 text-foreground">
                        Recent Distances
                    </h2>
                    <Line data={distanceData} options={chartOptions} />
                </div>

                <div className="bg-background-light dark:bg-background-dark p-4 rounded-lg shadow border border-secondary/20">
                    <h2 className="text-xl font-bold mb-4 text-foreground">
                        Recent Pace
                    </h2>
                    <Line
                        data={paceData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: { position: 'top' as const },
                                title: { display: false },
                            },
                            scales: {
                                y: {
                                    ticks: {
                                        color: isDarkMode
                                            ? '#F8FAFC'
                                            : '#1A365D',
                                    },
                                    grid: {
                                        color: gridLineColor,
                                    },
                                },
                                x: {
                                    ticks: {
                                        color: isDarkMode
                                            ? '#F8FAFC'
                                            : '#1A365D',
                                    },
                                    grid: {
                                        color: gridLineColor,
                                    },
                                },
                            },
                        }}
                    />
                </div>
            </div>

            {/* Activity List */}
            <h2 className="text-2xl font-bold mb-4 text-foreground">
                Recent Runs
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {activities.slice(0, 9).map((activity) => (
                    <div
                        key={activity.id}
                        className="bg-background-light dark:bg-background-dark border border-secondary/20 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                    >
                        <h3 className="font-bold text-lg truncate text-foreground">
                            {activity.name}
                        </h3>
                        <p className="text-foreground/70 mb-2">
                            {new Date(activity.start_date).toLocaleDateString()}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                                <p className="font-semibold text-foreground">
                                    Distance
                                </p>
                                <p className="text-foreground/80">
                                    {(activity.distance / 1000).toFixed(2)} km
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">
                                    Time
                                </p>
                                <p className="text-foreground/80">
                                    {Math.floor(activity.moving_time / 60)} min
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">
                                    Pace
                                </p>
                                <p className="text-foreground/80">
                                    {(
                                        activity.moving_time /
                                        60 /
                                        (activity.distance / 1000)
                                    ).toFixed(2)}{' '}
                                    min/km
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">
                                    Elevation
                                </p>
                                <p className="text-foreground/80">
                                    {activity.total_elevation_gain} m
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

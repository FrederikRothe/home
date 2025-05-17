// app/api/strava/activities/route.ts
import { NextResponse } from 'next/server';
import { getValidStravaAccessToken } from '@/lib/token-service';

export async function GET() {
  try {
    // Get a valid access token (auto-refreshes if needed)
    const accessToken = await getValidStravaAccessToken();
    
    if (!accessToken) {
      return NextResponse.json(
        { error: 'Unable to get a valid access token' },
        { status: 500 }
      );
    }
    
    // Fetch activities with valid token
    const response = await fetch('https://www.strava.com/api/v3/athlete/activities?per_page=30', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `API returned ${response.status}`);
    }
    
    const activities = await response.json();
    return NextResponse.json(activities);
  } catch (error: any) {
    console.error('Error fetching Strava activities:', error.message);
    return NextResponse.json(
      { error: 'Failed to fetch activities' },
      { status: 500 }
    );
  }
}
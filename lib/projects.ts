export interface Project {
    title: string
    description: string
    tags: string[]
    link: string
    image: string
}

export const PROJECTS: Project[] = [
    {
        title: "Less Extension",
        description: "As a part of my MSc. thesis project my thesis partner and I have developed a browser extension that is designed to help users manage their impulsive buying behaviour online. We've gathered the interventions strategy leveraging modern LLMs and Sentence Transformers to categorize advice.",
        tags: ["Browser Extension", "AI / LLM"],
        link: "https://lessextension.com",
        image: "/less.jpg"
    },
    {
        title: "SliceOnTheGo",
        description: "",
        tags: ["3D-print", "Raspberry Pi", "Webapp"],
        link: "https://sliceonthego-webapp.vercel.app/",
        image: "/sliceonthego.jpg"
    }
]

export const LESS_EXTENSION_PROJECT = PROJECTS[0]
export const SLICEONTHEGO_PROJECT = PROJECTS[1]

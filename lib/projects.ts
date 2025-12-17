export interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        title: "SliceOnTheGo",
        description: "A plug-and-print solution that enables primary school teachers to easily delegate student print jobs to a set of 3D printers; no slicing required.",
        tags: ["Raspberry Pie", "Next.js", "Python", "3D-Printing", "PrusaSlicer"],
        link: "https://sliceonthego-webapp.vercel.app/",
        image: "/images/slice-on-the-go.png"
    },
    {
        title: "Less Extension",
        description: "As a part of my MSc. thesis project my thesis partner and I have developed a browser extension that is designed to help users manage their impulsive buying behaviour online. We've gathered the interventions strategy leveraging modern LLMs and Sentence Transformers to catagorize advice.",
        tags: ["Browser Extension", "LLMs", "AI", "MSc Thesis"],
        link: "https://lessextension.com",
        image: "/images/less-extension.png"
    },
];

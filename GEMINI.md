# Project Overview: Astro Blog

This project is a modern, performance-oriented personal website and blog built with **Astro (v5.x)**. It leverages **MDX** for content, **React** for interactive components, and **Tailwind CSS 4** for styling.

## 🛠 Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Content:** Markdown & [MDX](https://mdxjs.com/) via Astro Content Collections
- **UI Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Type Checking:** TypeScript

## 📂 Project Structure

- `src/pages/`: Contains the routing logic. Files like `index.astro`, `about.astro`, and `blog/[...slug].astro` define the site's structure.
- `src/content/`: Houses the blog posts. Managed via `src/content.config.ts` which defines the schema for post frontmatter.
- `src/layouts/`: Common page wrappers, such as `BlogPost.astro`.
- `src/components/`: Reusable Astro and React components (e.g., `Header`, `Footer`, `BaseHead`).
- `src/styles/`: Global CSS configurations and Tailwind directives.
- `src/consts.ts`: Centralized site metadata (Title, Description).
- `public/`: Static assets like fonts and favicons.

## 🚀 Key Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `localhost:4321` |
| `npm run build` | Builds the production-ready site to the `dist/` folder |
| `npm run preview` | Previews the production build locally |
| `npm run astro ...` | Runs various Astro CLI commands (e.g., `astro check`) |

## 📝 Development Conventions

- **Content Management:** New blog posts should be added to `src/content/blog/`. Ensure they include the required frontmatter: `title`, `description`, `pubDate`, and optionally `heroImage` and `updatedDate`.
- **Styling:** Tailwind CSS 4 is integrated via Vite. Prefer utility classes for styling. Global styles and CSS variables are located in `src/styles/global.css`.
- **Components:** Use `.astro` components by default. Use React (`.jsx`/`.tsx`) only when client-side interactivity is required, and remember to use the appropriate `client:*` directive.
- **Metadata:** Update `src/consts.ts` to change the site-wide title and description.
- **Type Safety:** The project uses TypeScript. Run `npm run astro check` to validate types and Astro-specific syntax.

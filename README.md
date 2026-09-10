# PGUARD website

React and TypeScript website built with Vite.

## Development

- Install dependencies: `npm ci`
- Start the development server: `npm run dev`
- Build for production: `npm run build`
- Check Thai and English rendering: `npm run check:translations`
- Format source and configuration: `npm run format`
- Check formatting: `npm run format:check`

## Where to make changes

| Location                                         | Responsibility                                                                                           |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `src/pages/`                                     | Page composition and page-specific text, including Business and Guard workflow data.                     |
| `src/routes/AppRoutes.tsx`                       | Route definitions.                                                                                       |
| `src/components/`                                | Shared UI and self-contained sections.                                                                   |
| `src/components/WorkflowSection.tsx`             | Business and Guard workflow markup and visibility observer.                                              |
| `src/components/Phone*/`                         | Phone previews with their associated styles and assets.                                                  |
| `src/hooks/`                                     | Home, Features, and brand-intro animation lifecycles and cleanup.                                        |
| `src/data/`                                      | Shared feature data.                                                                                     |
| `src/LanguageContext.tsx`, `src/locales/en.json` | Language selection and translations.                                                                     |
| `src/styles.css`                                 | Global stylesheet entry point; import order matters.                                                     |
| `src/styles/core/`                               | Base rules, navigation, landing sections, shared layouts, footer, brand intro, and responsive overrides. |
| `src/styles/pages/`                              | Page headers, documents, shared workflow, Business/Guard, and responsive overrides.                      |
| `src/styles/home.css`                            | Home-specific overrides.                                                                                 |
| `public/`                                        | Static images, document samples, and videos.                                                             |
| `scripts/`                                       | Project validation commands.                                                                             |

## Organization decisions

Extract code when it has an independent responsibility or is shared. Small components and page-specific arrays can stay with their page; a separate file for every heading or list makes navigation harder.

Business and Guard share a workflow component because their markup and IntersectionObserver lifecycle were duplicated. Page-specific steps and translated descriptions remain on each page. Animation hooks retain their original selectors, timing, event listeners, and cleanup.

The large core and page stylesheets are now ordered import manifests. Their extracted rules remain in the original cascade order, including responsive and reduced-motion overrides. Component-specific CSS is grouped in `src/components/styles/`; phone preview CSS lives in each preview directory under `styles/`. Avoid moving override rules across imports without checking all breakpoints.

Phone previews already have their own component directories. They remain grouped because each preview represents a coherent screen. Documents keeps its content and selection state together. Further splitting should follow a concrete reuse or maintenance need.

## Validation and limits

The reorganization was checked with the production build, rendering of all six pages with navigation and footer in both languages, storage fallback checks, and formatting checks. The generated CSS hash matched the build before the split. Server rendering does not exercise browser animations, mobile navigation, or scrolling; inspect these in the browser when changing animation behavior.

Generated `dist/` and installed `node_modules/` are not source files and are ignored by Git and the formatter. Keep public asset names stable unless all references are updated.

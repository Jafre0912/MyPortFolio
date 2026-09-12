# Jafre Alam — Portfolio

A personal portfolio rebuilt with React, TypeScript, Tailwind CSS, and Vite.

## Architecture

```
src/
├── App.tsx                 # Route definitions only
├── main.tsx                # App entry point
├── data/                   # Single source of truth for content
│   ├── site.ts             # Name, bio, contact info, socials
│   ├── projects.ts         # Project list
│   └── skills.ts           # Skill groups
├── types/                  # Shared TypeScript types
├── components/
│   ├── layout/              # Navbar, Footer, page shell
│   ├── ui/                  # Small reusable primitives (Button, Tag, SectionHeading)
│   └── sections/             # Larger composed sections (Hero, Stack, WorkList)
└── pages/                    # One file per route, composed from sections
```

Content lives entirely in `src/data/` — updating your bio, adding a project, or
changing contact info never requires touching a component file. This mirrors
the same "single source of truth" principle used for API layers: the data and
its presentation are kept separate on purpose.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Updating content

- **Bio / contact / resume link** → `src/data/site.ts`
- **Projects** → `src/data/projects.ts`
- **Skills** → `src/data/skills.ts`

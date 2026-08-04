# Siddharth Kumar Rai Portfolio

A scalable Next.js App Router portfolio with a Matt Deitke-inspired two-column layout. The left column is a fixed profile panel and the right column scrolls independently with the content sections.

## Build this project

1. Install dependencies.

```bash
npm install
```

2. Start the dev server.

```bash
npm run dev
```

3. Open http://localhost:3000

## File map

Edit these files to manage the whole site:

- [app/page.tsx](app/page.tsx) for the two-column shell
- [app/layout.tsx](app/layout.tsx) for metadata and fonts
- [app/globals.css](app/globals.css) for the visual system
- [components/LeftColumn.tsx](components/LeftColumn.tsx) for the profile panel
- [components/RightColumn.tsx](components/RightColumn.tsx) for the scroll area composition
- [components/IntroSection.tsx](components/IntroSection.tsx) for the headline and intro copy
- [components/ProjectsSection.tsx](components/ProjectsSection.tsx) and [components/ProjectCard.tsx](components/ProjectCard.tsx) for project rendering
- [components/SoftwareSection.tsx](components/SoftwareSection.tsx) for skills and pinned repos
- [components/SocialLinks.tsx](components/SocialLinks.tsx) for social buttons
- [data/profile.ts](data/profile.ts) for your name, bio, and links
- [data/projects.ts](data/projects.ts) for project content
- [data/software.ts](data/software.ts) for skill groups and repo cards

## How to add content

Add a new project by adding one object to `data/projects.ts`. The UI reads the array automatically, so you do not need to touch the component code.

Add a new software group or repo in `data/software.ts`. Because the view is data-driven, the layout stays the same as the content grows.

## Structure

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  LeftColumn.tsx
  RightColumn.tsx
  IntroSection.tsx
  ProjectsSection.tsx
  ProjectCard.tsx
  SoftwareSection.tsx
  SocialLinks.tsx
data/
  profile.ts
  projects.ts
  software.ts
lib/
  github.ts
public/
  avatar.jpg
  resume.pdf
  projects/skillslms.png
```

## Notes

- The right column is the only scrollable pane.
- The left column stays fixed and never scrolls.
- The content is managed through typed data files so the portfolio is easy to extend later.

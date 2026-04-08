# Wall Calendar 

A polished, interactive React wall calendar component built for the TakeUforward SWE Internship Frontend Challenge.

## Features

- **Wall Calendar Aesthetic** — Paper-textured parchment background, hanging holes, stacked page shadows, and ruled notebook lines.
- **Hand-crafted SVG scenes** — Each of the 12 months has a unique inline SVG illustration (snow, roses, spring meadow, rainy umbrella, sunflowers, sailboat, beach, wheat field, autumn trees, Halloween pumpkins, northern lights, Christmas tree).
- **Day Range Selector** — Click once for start, click again for end. Hover preview of range before confirming. Visual states: start, end, in-between, and single-day.
- **Integrated Notes Panel** — Two tabs: *Date Note* (attached to selected date/range) and *Month Memo* (free general notes for the month). Both persist via `localStorage`.
- **Holiday Markers** — Indian public holidays marked with an orange dot; tooltip on hover.
- **Month Navigation** — Prev/next buttons with a subtle 3D page-flip animation (`perspective + rotateX`).
- **Auto Theme** — Each month gets a matching color theme (palette + emoji label) applied to the image panel and accent colors.
- **Responsive Design** — Side-by-side layout on desktop (≥701px); stacked vertical layout on mobile (≤700px).

## Tech Stack

- React 18 (Create React App)
- Pure CSS (no CSS-in-JS, no Tailwind)
- `localStorage` for notes persistence
- Zero external dependencies beyond React itself

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open http://localhost:3000
```

## Build for Production

```bash
npm run build
```

The output will be in the `build/` folder — ready to deploy to Vercel, Netlify, or GitHub Pages.

## Deploy to Vercel

```bash
npx vercel --prod
```

## Project Structure

```
src/
├── components/
│   ├── WallCalendar.js   # Root component — state, navigation, holidays
│   ├── WallCalendar.css
│   ├── MonthImage.js     # Left panel: SVG art + month quote + nav
│   ├── MonthImage.css
│   ├── CalendarGrid.js   # 7×6 day grid with range logic
│   ├── CalendarGrid.css
│   ├── NotesPanel.js     # Tabbed notes area
│   └── NotesPanel.css
├── App.js
├── index.js
└── index.css             # Global tokens + keyframe animations
```

## Design Decisions

- **No backend / database** — All state lives in React + `localStorage` as required.
- **Inline SVG art** — Avoids any image asset dependencies; each scene is hand-crafted with SVG primitives.
- **CSS custom properties** — All color tokens are CSS variables so theme switching is a single `setProperty` call.
- **Parchment texture** — Achieved with `repeating-linear-gradient` for ruled lines and layered `box-shadow` for the stacked-pages effect — no image assets needed.

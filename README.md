# Git page test

- INFO Single React app configured for GitHub Pages
- NOTES Uses Adobe Spectrum and React Aria

## Tech Stack

- React 19 + TypeScript
- Vite 7 (plugin-react-swc)
- Adobe Spectrum Web Components, React Aria
- Storybook 10, Vitest 4

## Requirements

- Node 18+
- pnpm

## Installation

```bash
pnpm install
```

## Development

```bash
pnpm run dev
```
Runs at `http://localhost:5173`

## Build

```bash
pnpm run build
```
Outputs to `dist/`

## Testing

```bash
pnpm run test
pnpm run test:ui
```

## Storybook

```bash
pnpm run storybook
pnpm run build-storybook
```

## GitHub Pages Deployment

- CONFIG Vite base set to `/gh-page-test/` in `vite.config.ts`
- WORKFLOW `.github/workflows/deploy.yml` publishes `dist/` to Pages
- TRIGGER Push to `main` builds and deploys automatically
- URL `https://dariuszsikorski.github.io/gh-page-test/`

## Project Structure

```
gh-page-test/
├── apps/
│   └── artifacter/      # Main app source
├── public/              # Static assets
├── .storybook/          # Storybook config
└── dist/                # Build output
```

## License

Private experimental project

## Author

Dariusz Sikorski (dariuszsikorski.pl)

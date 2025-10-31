# Artifacter App

React application showcasing Adobe Spectrum components and AI-powered UI experiments.

## Tech Stack

- **React 19** + TypeScript
- **Vite 7** - Build tool
- **React Aria** - Accessibility primitives
- **Adobe Spectrum Web Components** - UI components
- **Storybook 10** - Component development
- **Vitest** - Testing framework

## Installation

```bash
pnpm install
```

## Development

```bash
pnpm run dev
```

App runs at `http://localhost:5173`

## Build

```bash
pnpm run build
```

Outputs to `dist/` folder.

## Testing

```bash
pnpm run test        # Run tests
pnpm run test:ui     # Visual test UI
```

## Storybook

```bash
pnpm run storybook   # Development
pnpm run build-storybook  # Build static
```

## Deployment

This project is configured for GitHub Pages deployment with automatic builds on push to main branch.

**Live Demo:** `https://USERNAME.github.io/gh-page-test/`

## Project Structure

```
gh-page-test/
├── apps/
│   └── artifacter/      # Main application
├── public/              # Static assets
├── .storybook/          # Storybook configuration
└── dist/                # Build output
```

## License

Private experimental project.

## Author

Dariusz Sikorski (dariuszsikorski.pl)

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    // Note: per-app setup is handled in project-specific configs (e.g., Storybook project below)
    css: {
      include: []
    },
    server: {
      deps: {
        inline: [/@adobe\/react-spectrum/, /@react-spectrum\//]
      }
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'apps/chat/tests/', '**/*.test.ts', '**/*.test.tsx', '**/*.mock.ts', '**/dist/'],
      statements: 80,
      branches: 75,
      functions: 80,
      lines: 80
    },
    include: ['**/*.test.ts', '**/*.test.tsx'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, 'apps/artifacter/.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['apps/artifacter/.storybook/vitest.setup.ts']
      }
    }]
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, 'apps/shared'),
      '@': path.resolve(__dirname, 'apps/chat/src'),
      // Mock CSS imports
      '\\.(css|less|scss|sass)$': path.resolve(__dirname, 'apps/chat/tests/styleMock.ts')
    }
  },
  esbuild: {
    loader: 'tsx',
    include: /.*\.[tj]sx?$/,
    exclude: []
  },
  assetsInclude: ['**/*.css'],
  css: false
});
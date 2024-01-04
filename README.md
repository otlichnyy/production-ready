# Nextjs Production Ready Boilerplate (Page Router)

## Features

- **Next.js and React:**
  - Server-side rendering and routing with Next.js.
  - React and ReactDOM for building the user interface.
  - React Redux and @reduxjs/toolkit for state management.

- **UI Components:**
  - Ant Design (`antd`) for a comprehensive set of UI components.
  - Ant Design Icons (`@ant-design/icons`) for using icons within the application.

- **Development and Build Scripts:**
  - Development script (`npm run dev`).
  - Build script for production (`npm run build`).
  - Start script for the production server (`npm start`).
  - Code linting with Next.js (`npm run lint`) and TypeScript type-checking (`npm run build-types`).
  - Jest for testing with configurations for test execution and watch mode (`npm test`, `npm run test:watch`).
  - SVGR for converting SVGs to React components (`npm run svgr`).
  - Bundle analyzer scripts for analyzing production bundle size (`npm run analyze`, `npm run analyze:server`, `npm run analyze:browser`).

- **Code Quality and Style:**
  - ESLint for static code analysis with configurations for Next.js (`eslint`, `eslint-config-next`).
  - Prettier for code formatting (`npm run prettier`).
  - Husky and lint-staged for running scripts on pre-commit (`npm run lint-staged`).
  - Commitizen and conventional commits for standardized commit messages (`npm run commit`).

- **Testing:**
  - Cypress for end-to-end testing (`npm run cypress:open`, `npm run cypress:run`).
  - Start-server-and-test for coordinating starting the server and running tests (`npm run cypress:test`).

- **TypeScript:**
  - TypeScript for static typing in both development and build processes.

- **Environment Configuration:**
  - Dotenv for managing environment variables.

- **Dependency Management:**
  - npm-force-resolutions for forcing dependency resolutions (`npm run preinstall`).
  - Resolutions set for `minimist` to a specific version.

## Getting Started
```bash
git clone <REPO NAME.git>
```

### Installation
```bash
npm install
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

# MPowerBoards

Interactive physical boards that turn real power-grid simulations into real-time, hands-on visualizations for classrooms and research. Built with [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/).

🌐 **Live site:** https://michaelboateng.github.io/mpowerboards/

## Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`      | Installs dependencies                        |
| `npm run dev`      | Starts local dev server at `localhost:4321`  |
| `npm run build`    | Builds the production site to `./dist/`      |
| `npm run preview`  | Previews the build locally, before deploying |
| `npm run check`    | Checks the project for errors                |
| `npm run fix`      | Runs ESLint and formats code with Prettier   |

## Project structure

Everything lives on a single page, `src/pages/index.astro`, built from widgets in `src/components/widgets/`. Site-wide settings (name, URL, base path) are in `src/config.yaml`; nav and footer links are in `src/navigation.ts`; brand images live in `src/assets/images/mpb/`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yaml`, which builds the site and publishes it to GitHub Pages. In the repo's **Settings → Pages**, set the source to **GitHub Actions**.

## License

Based on the [AstroWind](https://github.com/arthelokyo/astrowind) template, MIT licensed — see [LICENSE](./LICENSE.md).

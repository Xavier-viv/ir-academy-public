# IR Academy Public Website

Public GitHub Pages build of the IR Academy source website.

## Public scope

- Dashboard
- Earnings Library
- Listening
- Knowledge Base
- Company Profiles
- Daily Check-in interface
- Disclosure calendar

The page structure and visual system are shared with the private IR Academy source. The public build replaces the local API with a read-only static data snapshot; write actions and local synchronization remain private.

## Deployment

GitHub Pages deploys the prebuilt static files from `site/` through `.github/workflows/deploy-pages.yml`.

Public URL:

https://xavier-viv.github.io/ir-academy-public/

## Updating information

Rebuild the public snapshot and site in the private IR workspace, copy the resulting `dist/pages/` files into `site/`, then commit and push. This refreshes information without changing the page structure.

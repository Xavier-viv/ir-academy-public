# IR Academy Public Monitor

Mobile-first, read-only disclosure calendar for seven listed footwear and apparel peers.

## Public scope

- Previous disclosed round and next expected/official round
- Announcement date, Beijing time where available, and days before/after today
- Official IR or clearly labeled market-calendar source links
- Seven-company profiles

The public site intentionally excludes internal learning-library content, transcripts, translations, vocabulary review, processing queues, local paths, and administrative actions.

## Deployment

GitHub Pages deploys the prebuilt static files from site/ through .github/workflows/deploy-pages.yml.

Public URL after Pages is enabled:

https://xavier-viv.github.io/ir-academy-public/

## Updating the calendar

Rebuild the sanitized public monitor in the private IR workspace, copy the resulting dist/pages/ files into site/, then commit and push.

# KP Muhurat + GuruAgasthiya Combined Web 2.46

This package is built from the uploaded Web 2.46 `index.html`, original `guruagasthiya.html`, icons, and manifest.

## Fix in Web 2.46
- Keeps the KP Muhurat tabs and calculation source unchanged, apart from the visible version label and service-worker registration/cache behavior.
- Keeps GuruAgasthiya V3.3.1 as a separate embedded page in the GuruAgasthiya tab.
- Refreshes the embedded GuruAgasthiya page when the tab is first opened, with a build query to avoid stale cached HTML.
- Updates the service worker cache name and uses network-first loading for HTML so older cached dashboard content is less likely to appear after deployment.

## GitHub Pages deployment
Upload all files in this folder to the repository root, side by side. `index.html`, `guruagasthiya.html`, `sw.js`, `manifest.webmanifest`, and both icon PNGs must all be at the root. After deployment, open the site in Chrome and refresh. If an older installed PWA remains, close it and open the GitHub Pages URL in Chrome again so the new service worker can activate.

## Validation note
The package can be checked for ZIP integrity and JavaScript syntax. This change does not claim exact timing parity with the original GuruAgasthiya APK or Windows KP Muhurat V1.5.11; that still requires side-by-side tests with identical inputs.


Mobile layout repair (2.46): restores the GuruAgasthiya base layout primitives, hides inactive panels, normalizes form controls and compact timing cards on phones. KP calculation functions were not intentionally changed.


## Web 2.49 chart display update
- Updated the South Indian chart colors, cell spacing, Lagna highlight, and center text sizing to match the supplied reference screenshot.
- Display-only CSS changes; no astronomy, planetary position, transition, or Muhurtham selection functions were edited.
- JavaScript syntax and ZIP integrity should be checked before deployment; visual verification on a physical Android device remains recommended.

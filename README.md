# GuruAgasthiya Standalone Web 1.2

This package opens directly into the standalone GuruAgasthiya interface (no KP Muhurat dashboard).

## Included
- Chart, Timings and Tools navigation retained.
- Chart display preferences: Language (English only / Tamil only / English + Tamil) and Chart Colour (Scientific mono / Classic / High contrast).
- Preferences are saved locally in the browser.
- Chart colour preferences affect chart presentation only; astronomical calculations and timing logic are not modified.
- PWA manifest and app icons.

## Deploy
Upload the contents of this folder to the root of your GitHub Pages repository. Ensure `index.html` and `manifest.webmanifest` are at the repository root.

## Validation
Inline JavaScript syntax checks passed (8 executable inline scripts). JSON data blocks were parsed separately. ZIP integrity was checked after packaging. Full Android interaction testing is still required on the target device.

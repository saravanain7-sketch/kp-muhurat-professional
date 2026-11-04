# GuruAgasthiya Web 7.7

This package upgrades the standalone GuruAgasthiya Web 1.10 app using the `assets/index.html` application bundled in the user-supplied GuruAgasthiya 7.7 APK.

- GuruAgasthiya 7.7 HTML application is the main `index.html`.
- KP Muhurat has not been integrated; the APK source contains no KP Muhurat references.
- PWA manifest, existing GuruAgasthiya app icons, and a versioned service worker are included for GitHub Pages installation and cache refresh.
- The APK's application HTML is retained; the only web-wrapper additions are the manifest link and service-worker registration.

## Deploy
Extract the ZIP and upload all five files (`index.html`, `manifest.webmanifest`, `sw.js`, both icon PNGs) to the GitHub Pages repository root, replacing the previous version. Keep all files together.

# GuruAgasthiya — Standalone Web App

This build removes the KP Muhurat application shell. The root `index.html` is the standalone GuruAgasthiya application, retaining its Chart, Timings and Tools navigation, date/place controls, Muhurtham alarm/calendar features, and existing astrology tools.

## Deployment
Upload every file in this folder to the root of your GitHub Pages repository. `index.html` must be at the repository root. Open the Pages URL in Chrome on Android and refresh. If an older installed PWA remains, close it and reopen the site so the new service worker can activate.

## Layout
Phones open in Mobile view by default, with the Chart / Timings / Tools jump navigation and two-column Tools cards. The header display control can still switch to Desktop view.

## Scope
The GuruAgasthiya HTML/JavaScript calculation implementation is retained from the uploaded source. This packaging change replaces the KP Muhurat entry page with the GuruAgasthiya page; it does not independently establish timing parity with another APK or reference application.

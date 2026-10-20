# KP Muhurat + GuruAgasthiya — Combined Web 2.42

## Important
This is the combined website package, not the standalone GuruAgasthiya package. `index.html` is the KP Muhurat app and contains a GuruAgasthiya navigation section with an iframe pointing to `./guruagasthiya.html`. Keep both HTML files in the repository root, side by side.

## Deploy to GitHub Pages
1. Back up the current repository before replacing files.
2. Upload all files from this folder directly into the repository root (not the ZIP itself and not a nested folder).
3. Ensure `index.html`, `guruagasthiya.html`, `manifest.webmanifest`, `kp-icon-192.png`, and `kp-icon-512.png` appear at the root.
4. Commit the changes, then wait for Pages to publish.
5. On Android Chrome, open the site and hard-refresh/reload; if a previous PWA cache persists, clear the site's storage/cache before retesting.

## Validation caveat
The KP calculation scripts and GuruAgasthiya calculation page were retained from the supplied files; only the displayed Web version string and service-worker registration query in the KP index were updated. Exact timing parity with the original Windows/APK implementations has not been established by this package build.

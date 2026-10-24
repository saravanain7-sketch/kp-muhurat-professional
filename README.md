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


## Web 2.53 synchronization repair
- GuruAgasthiya receives the shared Data-tab date, start time, latitude, longitude, and UTC offset on iframe load and when fields change.
- Results recalculate when a Data field is committed or the main Show button is pressed.
- The embedded GuruAgasthiya view remains timing-focused; duplicate input fields and extra tools remain hidden.
- Changes are limited to context synchronization and cache versioning; astronomy and Muhurtham calculation functions were not intentionally changed.
- Exact timing parity has not been independently verified; compare identical inputs against the reference application before relying on timing output.


## Web 2.54 duplicate-input visibility fix
- Corrects the CSS selector so GuruAgasthiya's duplicate Date/Start time/Place/coordinates/UTC/Ayanamsa form is hidden when embedded. The shared KP Muhurat Data tab remains the single source of input.
- Keeps the existing timing results and calculation logic. This is a presentation-only fix plus service-worker cache invalidation.


## Web 2.55 professional mobile UI refresh
- Uses the uploaded GuruAgasthiya astrology logo in the main app and embedded tool header.
- Adds a professional Home dashboard as the landing view and compact mobile quick navigation.
- Refines mobile spacing, cards, sticky tabs, and bottom safe-area handling.
- Changes are limited to HTML/CSS/navigation and cache versioning; KP astronomy and Muhurtham calculation functions were not edited.
- The source ZIP should be deployed with all files at the repository root.


## Web 2.57 — Matching shortcut-card interface
- Added a responsive two-column shortcut grid beneath the existing KP Muhurat Data form, matching the approved GuruAgasthiya card style.
- Shortcuts open existing Results, Chart, Muhurtham, Analysis, GuruAgasthiya, and Home sections.
- Updated the visible build label and service-worker cache namespace.
- Only markup, CSS, version text, and cache name were changed; KP astronomy, transition, selection, and timing code were not intentionally modified.


## Web 2.61 — English-only display and navigation cleanup
- Replaced the Home dashboard with compact, responsive shortcut cards modeled on the approved reference layout.
- Added quick location/time-window information and an Edit Event Data action.
- Kept existing KP Muhurat calculation, transition, selection, and timing JavaScript unchanged.
- Hid GuruAgasthiya Tamil helper translations in the embedded display; underlying astronomy and timing functions were not changed.
- Updated the service-worker cache name to invalidate the older 2.57 interface.
- Validation: see the accompanying package; JavaScript syntax and ZIP integrity are checked before deployment.


Web 2.61 update: horizontal 11-section navigation in the requested order: Data, Results, Muhurtham, Chart, Analysis, Lost & Found, Cuspal Chart, Date-wise Muhurtham, Horse Race, GMP Prasnam, and Chandra Muhurtham. UI/navigation only; KP calculation functions were not intentionally edited.


Web 2.61 UI fix: when opening Lost & Found, Cuspal Chart, Date-wise Muhurtham, Horse Race, GMP Prasnam, or Chandra Muhurtham from the main tabs, the embedded GuruAgasthiya banner and Show timings card are hidden so the selected tool is the first visible content. Calculation logic is unchanged.


## Web 2.67 — GuruAgasthiya APK source audit and integration verification
- Inspected the supplied `GuruAgasthiya-3.3.1.apk`; its main application UI and astronomy scripts are contained in `assets/index.html`.
- The embedded `guruagasthiya.html` retains the same 116,424-character astronomy library script as the APK. The main GuruAgasthiya tool script differs from the APK original because the web version adds shared KP Data-tab context handling and English-only embedded presentation adjustments.
- Kept the embedded GuruAgasthiya iframe and shared context bridge: KP date, start time, location, latitude, longitude, UTC offset, and KP ayanamsa are sent from the main Data tab. When requested, the embedded tool recalculates on receipt.
- Kept the existing KP Muhurat calculation and timing-selection code unchanged in this packaging update. Updated the visible build label and service-worker cache namespace only.
- JavaScript syntax checks passed for every executable inline script in the APK HTML, embedded GuruAgasthiya page, and KP Muhurat page.
- ZIP integrity check passed.
- Timing parity remains to be verified by running the APK and web app with identical date, time, coordinates, timezone, and ayanamsa; source inspection alone cannot prove output parity.


Web 2.67: removed the logo image from the top header only. Bottom navigation icons (Home, Chart, Notifications, Settings) remain. No calculation logic was intentionally changed.


Web 2.67 branding update: the existing gold astrology logo is shown in the KP Muhurat header and retained as the PWA/app icon. Calculation logic is unchanged.


## Web 2.68 — High-resolution gold astrology icon
- Replaced `kp-icon-192.png` and `kp-icon-512.png` with the supplied high-resolution gold astrology emblem.
- The existing header and manifest already reference these assets, so the same emblem is used in the header, favicon, and installable app icon.
- Updated the service-worker cache version to `kp-muhurat-combined-v2-68` so browsers can refresh cached assets.
- No astronomical calculation functions were intentionally changed.

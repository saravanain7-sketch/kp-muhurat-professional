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


## Web 2.69 — Mobile app installation
- Added a prominent Install app button to the Home screen, using the existing PWA install prompt when supported by the browser.
- If the browser does not provide an install prompt, the button explains the Android Chrome menu path: Install app / Add to Home screen.
- Kept the existing web manifest and high-resolution app icons. This installs the website as a PWA; it does not provide a standalone APK file.
- Updated service-worker cache version to refresh the new Home screen install control.
- No KP astronomy or Muhurtham calculation functions were intentionally changed.


## Web 2.70 — Installation button fallback improvement
- The Install app button uses the browser's native PWA install prompt when the browser fires `beforeinstallprompt`.
- When that event is not available, a readable in-page installation guide is shown instead of a JavaScript alert.
- Detects standalone/PWA mode and hides the install button after the app is installed.
- Updated the service-worker cache name and script query to Web 2.70.
- No KP astronomy, Muhurtham selection, transition, or timing functions were intentionally changed.
- This remains a PWA installation, not an APK download.


## Web 2.71 — Install button beside Show
- Added a second Install app button beside the Show button in the Data form, while retaining the Home screen install button.
- Both buttons use the same native PWA install prompt when Chrome provides it, and share the same fallback guidance otherwise.
- Updated the service-worker cache namespace to `kp-muhurat-combined-v2-71`.
- No KP astronomy, transition, selection, or Muhurtham calculation functions were intentionally changed.


## Web 2.72 — Remove installation prompts after install
- Removed the Install app button and helper text from the Home dashboard.
- Removed the duplicate Install app button beside Show on the Data tab.
- Removed the install-help dialog and install-button event handlers.
- Kept the gold astrology logo in the app header and retained PWA manifest/icons/service worker for the already-installed app.
- Updated the visible version and service-worker cache namespace to Web 2.72.
- No KP astronomy, calculation, transition, or Muhurtham-selection functions were intentionally changed.


## Web 2.73 — GuruAgasthiya 4.7 integration
- Replaced the embedded GuruAgasthiya 3.3-era web module with the supplied GuruAgasthiya 4.7 APK's `assets/index.html`.
- Retains the v4.7 interface and its English/Tamil labels and tools from the supplied APK.
- Keeps the KP Muhurat Data tab as the shared source for date, start time, latitude, longitude, timezone, and KP ayanamsa when GuruAgasthiya is embedded.
- Hides duplicate GuruAgasthiya date/location controls in the embedded view; the full v4.7 form remains available when the HTML is opened standalone.
- Bumped service-worker cache namespace to refresh the new embedded page.
- No KP Muhurat calculation source in `index.html` was intentionally changed.
- Static syntax and ZIP integrity checks are recorded with this package; live timing parity and visual testing on Android are still required.


## Web 2.74 — GuruAgasthiya 4.7 dashboard shortcuts
- Updated the visible app version to Web 2.74 and the embedded GuruAgasthiya label to V4.7.
- Added Home dashboard shortcut cards for all 12 tools shown in the supplied screenshot: Live transit chart, Lost & Found, Cuspal chart, Date-range muhurtham, Horse race, GMP Prasnam, Birth chart, Astrocartography, Lottery rules, Money manifestation, Cricket wicket, and Chandra muhurtham.
- Added Tamil labels to each shortcut. Each shortcut opens the embedded GuruAgasthiya page and activates the corresponding existing tool button.
- Bumped the service-worker cache name to v2-74 to reduce stale-version issues after deployment.
- No KP Muhurat calculation functions or GuruAgasthiya tool calculation functions were intentionally modified.


## GuruAgasthiya 5.9 integration
- Replaced the integrated GuruAgasthiya page with the HTML interface bundled in the supplied GuruAgasthiya-5.0.apk.
- Preserved the KP Muhurat shared Data-tab bridge for date/time/location synchronization.
- Updated the visible web version to 2.75 and bumped the service-worker cache.
- The APK itself is not redistributed as the web app; this ZIP contains the integrated web interface.


## GuruAgasthiya 5.9 update
The embedded GuruAgasthiya page is sourced from `assets/index.html` in the supplied `GuruAgasthiya-5.9.apk`. A shared-context bridge synchronizes the KP Muhurat Data tab date, time, latitude, longitude, timezone and ayanamsa. KP Muhurat calculation code was not intentionally modified.


## Web 2.77 — GuruAgasthiya reference layout

- Adjusted the GuruAgasthiya embedded view to use the supplied mobile/desktop layout with its own Chart, Timings, and Tools interface.
- Hides the duplicate KP header/top navigation only while GuruAgasthiya is open; keeps the four-item KP bottom navigation available.
- Preserves GuruAgasthiya English/Tamil content and the shared KP event-context bridge. No astronomical calculation functions were changed.
- Updated the service-worker cache namespace to Web 2.77.


## Web 2.78 — Embedded mobile layout lock
- Fixes GuruAgasthiya opening in a saved Desktop layout inside the KP Muhurat mobile app, which caused the right side of the screen to be cut off.
- When embedded, forces GuruAgasthiya to the responsive mobile layout and restores the normal device viewport width. Standalone GuruAgasthiya retains its own Mobile/Desktop selector.
- Keeps English and Tamil labels/tools and the shared KP Data-tab context bridge.
- This is a presentation/layout and cache-version update only; no astronomical calculation, transition, timing, or Muhurtham-selection functions were intentionally changed.


## Web 2.79 — Mobile scrolling and blank-tool fix
- Forces the embedded GuruAgasthiya page to use Mobile layout even if Desktop mode was previously saved. Standalone GuruAgasthiya still respects its saved view preference.
- Ensures the Home dashboard and additional-tool cards are not clipped by a fixed height or hidden overflow.
- Makes shortcut-card navigation wait for the iframe to be ready and activates the requested existing tool.
- Updates service-worker cache version to `kp-muhurat-combined-v2-79`.
- No KP astronomy, transition, selection, or Muhurtham calculation functions were intentionally changed.


## Web 2.80 — embedded mobile layout and cache repair
- Cache-busts the embedded GuruAgasthiya iframe URL so the updated HTML is requested instead of a stale iframe document.
- Adds a stronger embedded-only mobile layout guard and width/height overrides to prevent desktop sidebar layout and clipped/blank tool panels inside the parent app.
- Bumps the service-worker cache namespace.
- No astrology, KP transition, or Muhurtham calculation functions were intentionally changed.
- Must be deployed with every file at repository root; verify on Android after clearing the old installed app/site cache if needed.


## Web 2.81 — embedded Tools grid and mobile layout repair
- Forces the embedded GuruAgasthiya page to remain in mobile layout and restores a two-column Tools card grid.
- Removes conflicting large minimum heights from the iframe so the view fits the available phone screen and can scroll normally.
- Cache namespace and iframe query updated to 2.81.
- Only layout, iframe sizing, and cache versioning were changed; KP Muhurat astronomy and timing calculations were not intentionally modified.
- Please test the deployed page on Android, including opening multiple tool cards; source checks cannot replace device testing.

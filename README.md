# GuruAgasthiya Standalone v3.4

This is the standalone GuruAgasthiya app, separate from KP Muhurat.

## Changes
- Restored the standalone date, time, place, latitude, longitude, UTC offset and ayanamsa form.
- Restored the standalone tool buttons and panels (Lost & Found, Cuspal Chart, Date-range Muhurtham, Horse Race, GMP Prasnam, Chandra Muhurtham and About).
- Limited the compact timing-only presentation and duplicate-input hiding to embedded mode only.
- Set Coimbatore as the default place using latitude 11.000000, longitude 76.9666667, UTC offset +5.5.
- Used the supplied gold astrological-wheel icon in the page header and app icons.
- No astronomy or Muhurtham calculation functions were intentionally changed.

## Deploy
Upload the files in this folder to a separate GitHub repository. Keep `guruagasthiya.html`, `manifest.webmanifest`, `sw.js`, `kp-icon-192.png`, and `kp-icon-512.png` at repository root. Enable GitHub Pages for `main` / root, then open `guruagasthiya.html` at the deployed site.

Note: Visual verification on a phone and side-by-side calculation regression tests are still recommended.


## Web 2.56 interface update
- English-only display: Tamil translation spans are hidden; core calculation logic was not edited.
- Tool shortcuts are presented as two-column cards matching the supplied reference style.
- Shortcut labels are Lost & Found, Cuspal Chart, Muhurtham, Horse Race, GMP Prasnam, and Chandra Muhurtham.
- About is hidden from the shortcut grid.

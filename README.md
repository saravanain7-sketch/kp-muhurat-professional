# KP Muhurat + GuruAgasthiya Combined Web 2.44

This package preserves the KP Muhurat main app and embeds the full available GuruAgasthiya V3.3.1 HTML tool in the GuruAgasthiya tab.

Changes in 2.44:
- Replaced the misleading “KP Muhurat / Muhurtham Dashboard” heading inside the embedded GuruAgasthiya page with a GuruAgasthiya V3.3 professional header.
- Kept the date, time, place, coordinates, UTC offset and ayanamsa controls.
- Kept the original GuruAgasthiya module buttons and their source handlers: Lost & Found, Cuspal Chart, Date-range Muhurtham, Horse Race, GMP Prasnam, Chandra Muhurtham and About; the original main timing and alarm controls remain.
- The KP Muhurat calculation JavaScript was not intentionally changed; only the outer version label was updated.

Deploy all files directly to the GitHub Pages repository root. Keep `index.html` and `guruagasthiya.html` side by side. Clear browser cache after deployment if an old version is still shown.

Validation: ZIP integrity and JavaScript syntax checks are required after packaging. This does not establish exact timing parity with the original APK; that requires side-by-side regression tests using identical inputs.

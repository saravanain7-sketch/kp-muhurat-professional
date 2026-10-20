# KP Muhurat + GuruAgasthiya — Combined Web 2.43

This package keeps the KP Muhurat application and restores the full GuruAgasthiya tool inside its own navigation tab.

## Important deployment steps
1. Extract this ZIP.
2. Upload every file in this folder directly into the GitHub repository root, replacing the old files.
3. Confirm `index.html` and `guruagasthiya.html` are side by side in the repository root.
4. Commit changes and wait for GitHub Pages to publish.
5. On Android Chrome, open the site, then clear site data/cache if the old UI remains.

## Changes in Web 2.43
- Kept KP Muhurat tabs and calculation code.
- Removed the leftover timing-first CSS overrides from the GuruAgasthiya page that hid its chart, alarm, lost-and-found, cusp, range, race, Guru/GMP, Chandra Muhurtham and explanatory sections.
- Hid the extra KP dashboard landing section that could appear instead of the selected tool.
- Made GuruAgasthiya tab use the available screen space on mobile.

## Validation caveat
This is a source/layout correction; exact timing parity against the original APK and Windows KP Muhurat V1.5.11 still requires identical-input regression testing.

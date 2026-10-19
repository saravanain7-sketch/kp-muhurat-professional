# KP Muhurat Web 2.37 — Professional Muhurtham Dashboard

## Changes
- Replaced the GuruAgasthiya-style heading with a branded, professional KP Muhurat dashboard.
- Reduced visible inputs to date, start time and place, with an optional location action. Coordinate/ayanamsa fields remain in the DOM for existing calculations but are hidden from the simple view.
- Default view is the existing rule-based passing Muhurtham timings (`MODE='rul'`); no rule or astronomical function was changed.
- Removed non-timing tools from the visible dashboard, including lost-and-found, race, prasnam, charts and explanatory sections. Their existing source remains hidden rather than deleted.
- Added responsive two-column timing cards on desktop and one-column cards on mobile.
- Updated PWA metadata and service-worker cache version.

## Validation scope
- Main KP calculation script content is unchanged except version text in page chrome.
- GuruAgasthiya astronomical/timing functions are retained; only the initial display mode and CSS/presentation metadata changed.
- ZIP integrity and JavaScript syntax checks should be run before deployment. Exact parity against the Windows reference still requires a regression run using the established fixture.

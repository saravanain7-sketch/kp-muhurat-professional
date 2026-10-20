# GuruAgasthiya Professional Muhurtham — Web 2.40

## Scope
This package is a presentation redesign based on the supplied GuruAgasthiya V3.3.1 extracted HTML/source and the Web 2.39 project. The GuruAgasthiya calculation JavaScript was preserved byte-for-byte; the new stylesheet only changes visual presentation.

## Calculation functions identified in the extracted source
- `buildTable`, `findSeg`: build/find the 249 KP sub-lord segments.
- `ayanamsa`, `sidAsc`, `compute`: ayanamsa, sidereal ascendant and transition timing scan/refinement.
- `sidLon`, `planets`, `inSign`, `lordsOf`: planetary longitude and sign/lord helpers.
- `drawChart`, `initChart`, `setChartTime`: chart display and selected-time updates.
- `buildGmp`, `evalTransit`, `buildAna`, `evalRules`: GMP and transit/rule analysis.
- `lostFound`, `placidusCusps`, `cuspBuild`, `cuspRefresh`: lost-and-found and cusp tools.
- `rangeEval`, `rangeRun`, `rangeShow`: range-based analysis.
- `raceAnalyse`, `raceRun`, `initRace`: horse-race analysis.
- `gpMoonSegs`, `gpRun`, `initGp`: Guru/GMP-related timing functions.
- `cmEval`, `cmRun`, `initCm`: Chandra Muhurtham.
- Additional helpers cover alarms, date/time formatting, location, timezone conversion, planetary roles, retrograde checks and display.

## Validation limits
The source contains these identifiable functions, but that does not prove every internal APK/native routine has been recovered. This build does not claim exact output parity until it is tested against the original GuruAgasthiya V3.3.1 app using identical dates, locations, timezone and ayanamsa settings. No reference times are hardcoded.

## Change safety
- JavaScript calculation blocks in `guruagasthiya.html` were not modified.
- Only HTML metadata and an appended CSS presentation layer were changed.
- The original APK is retained in the package as the provided reference file.

# KP Muhurat Web 2.35 — GuruAgasthiya Source Comparison & Validation

## Scope of this build
- KP Muhurat Web 2.35 is based on the user-uploaded current KP Muhurat source. The existing KP calculation, transition generation, event-rule selection, and analysis code were not intentionally changed. Only branding, compact responsive CSS, a link to a separate tool, manifest metadata, and service-worker cache version were updated.
- The five visible KP tabs remain in this order: Data → Results → Muhurtham → Chart → Analysis. GuruAgasthiya is a separate `guruagasthiya.html` page opened from Data, not a sixth tab.
- The supplied KP gold-on-navy logo is used in the KP header and both PWA icon sizes. GuruAgasthiya source photos/portraits were removed; its independent calculations and non-photo interface remain.

## Source-level comparison

| Area | KP Muhurat Web (V1.5.11 reconstruction) | GuruAgasthiya V3.3.1 extracted source |
|---|---|---|
| Main purpose | Generate and select Muhurats according to the KP Muhurat event rules, then show selected times, transition schedule, chart and Analysis. | Show when the transit ascendant passes through the 249 KP sub-lord divisions, with additional independent views/tools. |
| Astronomical implementation | Uses the existing KP Muhurat browser calculation stack and its live transition/analysis pipeline. | Bundles its own astronomy/ephemeris implementation and ascendant calculation (`sidAsc` in the extracted source). |
| KP division handling | Uses the KP sub-lord/transition information already produced by the existing engine for its schedule and selection. | Contains a dedicated 249-division KP table and computes ascendant passage timings for those divisions. |
| Selection logic | Event-specific selection and Badhaka/Maraka checks drive the chosen Muhurat list. The displayed schedule is not a replacement selection engine. | Separate logic for its own date-range Muhurtham, GMP Prasnam, Chandra Muhurtham, lost-and-found, cusp and horse-race tools. |
| Inputs | Date/time range, place coordinates and directions, timezone, and selected event. | Date/start time, place, decimal latitude/longitude, UTC offset in hours and KP or Lahiri ayanamsa. |
| Output/timing contract | Intended to match Windows KP Muhurat V1.5.11 selection and timing behavior. | Its own 249-division passage times and tool-specific rule outputs. |

## Algorithm details found in the extracted GuruAgasthiya source
- Its `buildTable()` constructs KP divisions from the 27 nakshatras using the Vimshottari weights (total 120 years), then splits any division at 30-degree sign boundaries. The resulting `SEGS` table is used to label each of the 249 divisions.
- Its `sidAsc()` computes a sidereal ascendant from a GMST-based angle, latitude/longitude and an internal ayanamsa formula. The KP option uses `23.760833 + c × 1.396944` degrees; the Lahiri option uses `23.853056 + c × 1.396944`, where `c` is centuries from J2000 in that source.
- Its `compute()` scans forward in 20,000-millisecond increments, detects passage across a segment boundary, then performs 18 binary-refinement iterations. Its display formatter presents local clock time to whole seconds.
- KP Muhurat, by contrast, runs its existing transition/analysis pipeline and applies the event-specific KP Muhurat selection gate to decide which intervals become chosen Muhurats. It is not simply a list of all 249 ascendant divisions. The Guru page's additional tools apply their own rule sets.

## Timing-parity caution
The source files demonstrate different calculation pipelines and different decision purposes. The source-level scan/refinement details above identify plausible causes of timing differences, but they do not establish which engine is more accurate or quantify an actual offset. No claim of exact GuruAgasthiya-to-Windows parity is made in this build. Exact parity must be checked with identical date, local start time, coordinates, timezone, ayanamsa and applicable rule settings, comparing each transition boundary and selected result against Windows V1.5.11. The Windows reference timestamps must remain validation fixtures only and must not be inserted into live selection.

## Validation performed
- JavaScript syntax checks: all inline scripts in `index.html` and `guruagasthiya.html` extracted and checked with Node.js.
- UI source comparison: KP Muhurat inline scripts were compared before/after after normalizing only the service-worker version query; calculation scripts were unchanged.
- ZIP integrity: tested after packaging.
- Asset checks: both icon files and the GuruAgasthiya page are present in the package; GuruAgasthiya page contains no `<img>` tags or embedded `data:image` photos.

## Not claimed as verified
A live browser run against the Windows executable was not performed in this build environment. After deployment, use the same regression fixture/settings in Windows V1.5.11 and compare every selected time and transition boundary before declaring timing parity.

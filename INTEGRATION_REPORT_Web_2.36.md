# KP Muhurat Web 2.36 — GuruAgasthiya Integration Report

## Changes
- Added GuruAgasthiya to the main navigation after Analysis.
- Embedded `guruagasthiya.html` in a responsive iframe panel.
- Retained a link to open the GuruAgasthiya tool separately.
- Removed the duplicate GuruAgasthiya card from the Data page; navigation is now the primary entry point.
- Updated app title and service-worker cache key to Web 2.36.

## Calculation preservation
The KP Muhurat calculation-related JavaScript blocks were not modified for this integration. The existing GuruAgasthiya tool is loaded as a separate document, isolated from the KP Muhurat page's JavaScript scope. No timing offset or hardcoded Muhurat time was introduced.

## Validation
- ZIP integrity checked after packaging.
- Static checks confirm the new nav button and matching section exist.
- JavaScript calculation blocks in `index.html` are unchanged from Web 2.35.
- Live browser regression and exact timing parity have not been run in this environment.

## APK note
The supplied `GuruAgasthiya-3.3.1.apk` is an Android package, not a web module that can be directly embedded inside a PWA. This package integrates the supplied extracted HTML functionality. Creating one native APK that combines both apps requires the KP Muhurat Android project source, GuruAgasthiya source/module, and Android build/signing configuration.

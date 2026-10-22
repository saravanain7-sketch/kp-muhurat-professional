# GuruAgasthiya Standalone v3.9.1 — Professional Shared-Data UI

- Professional compact mobile navigation: Data → Lost & Found → Cuspal chart → Muhurtham → Horse race → GMP Prasnam → Chandra Muhurtham.
- Data is the single input source; date/time/location/coordinates/UTC offset/ayanamsa are reused by the tool tabs.
- Repeated date/time/location fields are hidden in tool tabs, while tool-specific options such as number of horses and Chandra display filter remain available.
- Tabs open the relevant tool and trigger its existing calculation using shared Data values.
- Removed About, the initial prompt, and alarm panel from the visible UI.
- Calculation source is based on the original standalone v3.4 file; time source for Lost & Found, Cuspal chart and GMP Prasnam now follows Data. Please regression-test astronomy timings before replacing production.

Deploy all files to the repository root and open the deployed page in an incognito tab after GitHub Pages finishes.

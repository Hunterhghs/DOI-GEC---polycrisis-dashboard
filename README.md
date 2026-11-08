# 21st Century Observatory: Global Economic Convergence, Diffusion of Innovations & Green Transition vs. Polycrisis (Human Exposure)

An interactive macroeconomic, technological, and Earth-system dashboard examining the defining tug-of-war of the 21st century (2000–2050):
- **Force I (Prosperity & Adaptation Engine):** Global Economic Convergence (GEC), Diffusion of Innovations (DOI / Rogers S-Curves & Global South Leapfrogging), and the Exponential Green Transition (Wright's Law learning curves in Solar PV, Li-ion Batteries, and EVs).
- **Force II (Compounding Risk Engine):** Polycrisis Human Exposure — lethal wet-bulb heat stress, planetary boundaries transgression, armed conflict surge, forced displacement, acute food/water insecurity, and sovereign debt distress.

---

## Key Interactive Modules

1. **Executive Tug-of-War & Timeline Scrubber (2000–2025)**
   - Scrub or animate year-by-year from `2000` to `2025` to inspect the dynamic balance between the **Convergence, DOI & Green Transition Index** and the **Polycrisis Human Exposure Index**.
   - 8 reactive KPI scorecards tracking Global South GDP (PPP) share, extreme poverty (`<$2.15/day`), Solar PV module cost (`$/W`), global internet & clean capacity (`GW`), surface warming anomaly (`+°C`), lethal heat exposed population, forcibly displaced people (`UNHCR`), and active state-based armed conflicts (`UCDP`).

2. **Interactive World Map (Geospatial Observatory)**
   - D3.js + TopoJSON Natural Earth world map with pan/zoom (`+`, `-`, `Reset`), 3 overlay modes (*Choropleth + Population Bubbles*, *Polygons Only*, *Polycrisis Hotspots*), and 7 switchable geospatial layers:
     1. *Net Resilience Balance (`Convergence Score - Polycrisis Exposure`)*
     2. *Convergence, DOI & Green Transition Score (`0–100`)*
     3. *Polycrisis Human Exposure Index (`0–100`)*
     4. *GDP per Capita PPP Growth Multiple (`2000 → 2025`)*
     5. *Clean Electricity Share (`%`)*
     6. *Digital Leapfrog Adoption (`%`)*
     7. *Lethal Heat Stress Exposure (`Days/Year >35°C HI`)*
   - Includes a live **Selected Geospatial Dossier** side panel and dynamic **Top 5 / Bottom 5** rankings for whichever layer is active.

3. **Overview of Nations (52-Country Strategic Atlas & Head-to-Head Comparator)**
   - **5 Interactive Archetype Filter Cards** summarizing population, nation count, average convergence score, and average polycrisis risk across *Fast Convergers & Green Giants*, *High-Exposure Leapfroggers*, *Climate Frontline Convergers*, *Resilient Tech Leaders*, and *Polycrisis Trap Risk*.
   - **Head-to-Head 3-Nation Comparator**: Compare any 3 nations side-by-side via overlapping 7-axis radar footprints and multi-indicator bar charts (with quick presets for *Demographic Giants*, *Global South Leapfroggers*, *East Africa vs. Fragility*, and *OECD Transitions*).
   - **52-Nation Dossier Cards Grid**: Searchable, filterable, sortable cards featuring flag, dual progress bars, 4-metric mini-grid, tailored 1-sentence strategic synthesis note, **"Pin to 3-Nation Compare"**, and **"7-Axis Radar Profile"**.

2. **Global Economic Convergence (GEC) & The Inequality Paradox**
   - Tracks the rise of Emerging Markets & Developing Economies (EMDEs) from `43.2%` (2000) to `61.1%` (2025) of World GDP (PPP) and the expansion of the global middle class to `4.50 billion` people.
   - Visualizes the transition of the global daily income distribution from a bimodal **"Twin Peaks"** world in 2000 to a unimodal converged distribution by 2025.
   - Contrasts falling **between-country inequality** (population-weighted Gini `0.574 → 0.415`) against rising **within-country top-10% income share** (`46.2% → 52.2%`).

3. **Diffusion of Innovations (DOI) & The Green Transition**
   - Interactive **Rogers S-Curves** (2000–2025) for mobile subscriptions, Global South internet penetration, digital payments (`UPI / PIX / M-Pesa`), solar + wind electricity share, and EV share of new car sales.
   - **Wright's Law Learning Curves**: Toggle between Solar PV cost collapse (`$4.88/W → $0.105/W`) vs. cumulative GW installed, and Li-ion battery pack cost collapse (`$1,850/kWh → $99/kWh`) vs. EV adoption.
   - **Collapse of the North–South Technology Lag (1840s–2020s)**: Compares 12 historical technologies, demonstrating how the developing-world adoption lag shrank from 50+ years (railways, electricity grids, landlines) to zero or negative leapfrog lead (mobile money, solar+storage).

4. **Polycrisis & Human Exposure Observatory**
   - Multi-hazard human exposure tracker: Lethal heat stress (`2.52B people`), forced displacement (`125.4M`), and IPC Phase 3+ acute food insecurity (`298M`).
   - **Planetary Boundaries Radar Chart**: Compares 2000 vs. 2025 status across all 9 Stockholm Resilience Centre Earth-system processes.
   - **Interactive Systems Cascade Map**: Hover over crisis and solution nodes to inspect amplifying polycrisis feedback loops (`+`) vs. mitigating green/digital feedbacks (`-`).

5. **42-Country Convergence vs. Polycrisis Matrix Explorer**
   - Interactive 4-Quadrant Bubble Plot mapping 42 economies (85% of world population) across five 21st-century archetypes: *Fast Converger / Green Giant*, *High-Exposure Leapfrogger*, *Climate Frontline Converger*, *Resilient Tech Leader*, and *Polycrisis Trap Risk*.
   - Searchable, sortable table with region filters, **CSV export**, and a click-to-open **Country Diagnostic Modal** featuring a 7-axis radar chart.

6. **2025–2050 Scenario Simulator & Policy Lab**
   - 4 preset macro-scenarios (*The Uneven Race*, *Solar-Digital Convergence*, *Fragmented Fortress World*, *Compounding Polycrisis*) + 4 interactive structural sliders projecting global trajectories to 2050.

---

## Deployment (Zero-Build Static Web App)

This project is architected as a zero-dependency, standards-compliant static web application (`index.html`, `css/styles.css`, `js/data.js`, `js/charts.js`, `js/app.js`) so it deploys instantaneously on any static hosting provider:

### Option A: GitHub Pages
1. Go to your repository on GitHub: `https://github.com/Hunterhghs/DOI-GEC---polycrisis-dashboard`
2. Navigate to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then click **Save**.

### Option B: Vercel / Netlify / Cloudflare Pages
- Import the GitHub repository directly. No build command is needed; set the output/publish directory to `.` (root).

### Local Preview
```bash
python3 -m http.server 8080
# Open http://localhost:8080
```


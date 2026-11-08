/**
 * 21st Century Observatory: Global Economic Convergence, Diffusion of Innovations
 * & Green Transition vs. Polycrisis (Human Exposure)
 *
 * Empirical Data & Analytical Models (2000–2025 Historical & 2026–2050 Scenarios)
 * Sources synthesized: World Bank WDI, IMF WEO (PPP), Our World in Data, IEA,
 * IRENA, BNEF, ITU, UNHCR, UCDP/PRIO, EM-DAT, IPCC AR6, Stockholm Resilience Centre.
 */

window.DASHBOARD_DATA = {
  meta: {
    title: "The 21st Century Tug-of-War",
    subtitle: "Global Economic Convergence, Diffusion of Innovations & Green Transition vs. Polycrisis Human Exposure",
    lastUpdated: "2026 Edition (2000–2025 Empirical Series + 2050 Projections)",
    years: [
      2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
      2020, 2021, 2022, 2023, 2024, 2025
    ]
  },

  // ============================================================================
  // 1. GLOBAL TIME SERIES (2000 - 2025) - 26 annual observations
  // ============================================================================
  timeSeries: {
    // Composite Index (2000 = 100) measuring Global Convergence + Tech Diffusion + Clean Energy Transition
    convergenceTransitionIndex: [
      100.0, 103.2, 106.8, 111.4, 116.9, 122.8, 129.4, 136.5, 142.1, 146.8,
      154.2, 161.9, 169.5, 177.8, 186.4, 195.8, 205.6, 216.4, 227.9, 239.5,
      246.2, 261.8, 276.4, 292.5, 309.8, 328.4
    ],
    // Composite Index (2000 = 100) measuring Polycrisis Human Exposure (Climate, Conflict, Displacement, Food/Water, Debt)
    polycrisisExposureIndex: [
      100.0, 101.4, 103.1, 105.2, 106.8, 109.5, 111.2, 113.8, 118.4, 121.0,
      125.6, 129.8, 133.4, 138.9, 146.2, 154.8, 162.1, 169.5, 176.4, 183.2,
      204.5, 211.8, 226.4, 238.9, 249.6, 258.2
    ],

    // --- ECONOMIC CONVERGENCE INDICATORS ---
    // Share of Global GDP (PPP, %) produced by Emerging Markets & Developing Economies (IMF WEO)
    emdeGdpPppShare: [
      43.2, 43.8, 44.6, 45.7, 46.9, 48.2, 49.6, 51.0, 52.3, 53.8,
      54.9, 55.8, 56.5, 57.1, 57.6, 57.9, 58.3, 58.7, 59.1, 59.4,
      59.7, 59.9, 60.2, 60.5, 60.8, 61.1
    ],
    // Global Extreme Poverty Rate (% living below $2.15/day, 2017 PPP - World Bank)
    extremePovertyRate: [
      29.2, 28.1, 26.8, 25.4, 23.7, 21.9, 20.4, 18.9, 17.8, 16.9,
      15.7, 14.2, 13.1, 11.9, 11.1, 10.4, 9.9, 9.4, 9.0, 8.7,
      9.6, 9.1, 8.9, 8.7, 8.5, 8.3
    ],
    // Global Middle & Consumer Class Population (Billions spending >$12/day PPP - Brookings/World Data Lab)
    globalMiddleClassBillions: [
      1.52, 1.58, 1.65, 1.74, 1.85, 1.97, 2.11, 2.26, 2.38, 2.47,
      2.62, 2.78, 2.94, 3.10, 3.26, 3.41, 3.56, 3.71, 3.86, 4.01,
      3.92, 4.05, 4.16, 4.27, 4.38, 4.50
    ],
    // Between-Country Global Inequality (Population-weighted Gini coefficient between countries)
    betweenCountryGini: [
      0.574, 0.571, 0.566, 0.559, 0.552, 0.543, 0.534, 0.523, 0.512, 0.501,
      0.491, 0.482, 0.474, 0.466, 0.459, 0.453, 0.448, 0.443, 0.438, 0.434,
      0.436, 0.431, 0.427, 0.423, 0.419, 0.415
    ],
    // Within-Country Average Top 10% Income Share (%, population-weighted - World Inequality Database)
    withinCountryTop10Share: [
      46.2, 46.5, 46.8, 47.2, 47.6, 48.0, 48.4, 48.9, 48.7, 48.5,
      48.8, 49.1, 49.4, 49.6, 49.9, 50.1, 50.3, 50.5, 50.7, 50.8,
      51.4, 51.6, 51.8, 51.9, 52.1, 52.2
    ],
    // Global South Average GDP per Capita PPP as % of High-Income OECD Average
    emdeToOecdIncomeRatio: [
      14.8, 15.2, 15.7, 16.4, 17.2, 18.1, 19.2, 20.4, 21.5, 22.8,
      23.9, 24.9, 25.8, 26.6, 27.3, 27.9, 28.5, 29.1, 29.7, 30.3,
      30.8, 31.2, 31.7, 32.3, 32.9, 33.6
    ],

    // --- DIFFUSION OF INNOVATIONS & GREEN TRANSITION INDICATORS ---
    // Global Internet Penetration (% of world population - ITU)
    internetPenetration: [
      6.7, 8.1, 10.6, 12.3, 14.1, 15.8, 17.6, 20.6, 23.1, 25.8,
      28.9, 31.8, 34.9, 37.9, 40.7, 43.8, 46.9, 49.7, 53.2, 56.7,
      60.8, 63.7, 65.7, 67.4, 69.2, 71.0
    ],
    // Global Smartphone / Mobile Broadband Subscriptions per 100 people
    smartphoneAdoption: [
      0.0, 0.0, 0.1, 0.2, 0.5, 1.2, 2.4, 4.5, 7.8, 12.4,
      18.6, 26.4, 34.8, 43.2, 51.5, 58.9, 65.2, 70.4, 74.8, 78.5,
      81.2, 83.6, 85.4, 87.1, 88.6, 90.1
    ],
    // Solar PV Module Cost ($/Watt, 2024 real USD - IRENA / Our World in Data)
    solarPvCostPerWatt: [
      4.88, 4.52, 4.10, 3.78, 3.62, 3.85, 4.02, 3.74, 3.45, 2.48,
      2.05, 1.48, 0.98, 0.82, 0.72, 0.61, 0.49, 0.39, 0.31, 0.26,
      0.23, 0.24, 0.23, 0.16, 0.12, 0.105
    ],
    // Lithium-Ion Battery Pack Price ($/kWh, 2024 real USD - BNEF)
    batteryPackCostPerKwh: [
      1850, 1710, 1580, 1460, 1350, 1260, 1180, 1110, 1040, 980,
      915, 760, 640, 545, 480, 355, 278, 214, 176, 154,
      138, 131, 142, 128, 111, 99
    ],
    // Cumulative Global Solar + Wind Installed Capacity (GW - IRENA/IEA)
    solarWindCapacityGw: [
      19, 25, 33, 41, 50, 62, 78, 98, 129, 172,
      228, 305, 389, 476, 578, 708, 849, 1012, 1189, 1388,
      1668, 1962, 2304, 2815, 3420, 4110
    ],
    // Global EV Share of New Passenger Vehicle Sales (% - IEA)
    evShareNewSales: [
      0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.02, 0.03, 0.04,
      0.06, 0.11, 0.21, 0.34, 0.51, 0.82, 1.12, 1.68, 2.54, 2.82,
      4.41, 8.75, 14.1, 18.0, 20.8, 23.6
    ],
    // Clean Energy Investment vs Fossil Fuel Supply Investment Ratio (Clean / Fossil)
    cleanToFossilInvestmentRatio: [
      0.18, 0.19, 0.21, 0.23, 0.26, 0.31, 0.37, 0.44, 0.51, 0.58,
      0.66, 0.72, 0.76, 0.81, 0.88, 1.02, 1.14, 1.21, 1.29, 1.38,
      1.52, 1.64, 1.76, 1.89, 2.02, 2.15
    ],

    // --- POLYCRISIS & HUMAN EXPOSURE INDICATORS ---
    // Global Surface Temperature Anomaly (°C above 1850-1900 pre-industrial baseline - Copernicus/WMO)
    tempAnomalyCelsius: [
      0.62, 0.76, 0.83, 0.84, 0.76, 0.89, 0.85, 0.86, 0.74, 0.86,
      0.93, 0.81, 0.85, 0.89, 0.96, 1.12, 1.26, 1.17, 1.09, 1.21,
      1.27, 1.11, 1.16, 1.48, 1.55, 1.52
    ],
    // Population Exposed to >20 Days/Year of Dangerous Heat Stress (Wet-Bulb / Lethal Heat Threshold, Billions)
    heatExposedPopulationBillions: [
      1.18, 1.22, 1.28, 1.31, 1.29, 1.36, 1.38, 1.42, 1.39, 1.46,
      1.54, 1.51, 1.56, 1.61, 1.68, 1.82, 1.94, 1.89, 1.86, 1.98,
      2.06, 1.99, 2.08, 2.34, 2.48, 2.52
    ],
    // Forcibly Displaced People Worldwide (Millions - UNHCR: Refugees, IDPs, Asylum Seekers)
    forciblyDisplacedMillions: [
      38.0, 38.2, 37.8, 35.9, 36.7, 37.5, 39.8, 42.7, 42.0, 43.3,
      43.7, 42.5, 45.2, 51.2, 59.5, 65.3, 65.6, 68.5, 70.8, 79.5,
      82.4, 89.3, 108.4, 117.3, 122.6, 125.4
    ],
    // Active State-Based Armed Conflicts Worldwide (Count - UCDP/PRIO)
    activeStateConflicts: [
      37, 36, 33, 31, 32, 33, 34, 35, 37, 36,
      31, 37, 33, 35, 41, 52, 51, 50, 52, 55,
      56, 54, 56, 59, 61, 60
    ],
    // Acute Food Insecurity (Millions in IPC/CH Phase 3+ Crisis or Worse - Global Network Against Food Crises / FAO)
    acuteFoodInsecurityMillions: [
      94, 96, 98, 95, 97, 99, 101, 106, 118, 115,
      108, 112, 109, 106, 104, 105, 108, 124, 113, 135,
      155, 193, 258, 282, 295, 298
    ],
    // Low-Income Country External Debt Service as % of Government Revenue (IMF/World Bank)
    licDebtServiceShareRevenue: [
      12.4, 11.8, 11.2, 10.5, 9.6, 8.4, 6.8, 6.1, 5.9, 6.2,
      5.8, 6.0, 6.4, 7.1, 7.9, 9.2, 10.4, 11.2, 12.1, 12.9,
      14.3, 14.8, 15.6, 16.8, 17.4, 17.9
    ],
    // Trade-Restrictive Policy Interventions Introduced Annually (Global Trade Alert)
    tradeRestrictionsCount: [
      180, 195, 210, 225, 240, 260, 280, 310, 420, 680,
      640, 690, 740, 810, 890, 960, 1040, 1180, 1490, 1680,
      2450, 2610, 2980, 3240, 3480, 3620
    ]
  },

  // ============================================================================
  // 2. GLOBAL INCOME DISTRIBUTION SHIFT (2000 vs 2012 vs 2025)
  // Daily Income / Consumption per Capita in 2017 PPP USD (Log Scale Bins)
  // Demonstrates the transition from a bimodal ("twin peaks") world in 2000
  // to a single converged middle-income bulge in 2025.
  // ============================================================================
  incomeDistribution: {
    bins: [
      "$1/day", "$1.5", "$2.15\n(Pov Line)", "$3.5", "$6", "$10",
      "$15\n(Middle)", "$25", "$40", "$65\n(High)", "$100", "$160+"
    ],
    // Population share (% of world population in each log-income bracket)
    share2000: [8.4, 11.2, 13.8, 14.5, 11.8, 8.2, 6.4, 6.8, 7.5, 6.2, 3.6, 1.6],
    share2012: [3.2, 6.4, 9.8, 14.2, 16.4, 13.5, 9.8, 7.9, 7.6, 6.1, 3.4, 1.7],
    share2025: [1.4, 3.1, 5.6, 10.4, 16.8, 18.4, 14.6, 10.2, 8.1, 6.0, 3.5, 1.9]
  },

  // ============================================================================
  // 3. DIFFUSION OF INNOVATIONS (ROGERS S-CURVES & LEAPFROGGING)
  // ============================================================================
  innovationDiffusion: {
    // Years taken from 5% adoption to 50% adoption globally vs in Emerging Economies
    compressionHistory: [
      { tech: "Steam Engine / Railways", era: "1840s", globalYearsTo50: 85, emdeLagYears: 62, category: "Industrial" },
      { tech: "Electricity Grid", era: "1890s", globalYearsTo50: 64, emdeLagYears: 48, category: "Energy" },
      { tech: "Automobiles", era: "1910s", globalYearsTo50: 58, emdeLagYears: 44, category: "Transport" },
      { tech: "Fixed Landline Phone", era: "1920s", globalYearsTo50: 52, emdeLagYears: 39, category: "Comms" },
      { tech: "Personal Computers", era: "1980s", globalYearsTo50: 28, emdeLagYears: 18, category: "Digital" },
      { tech: "Internet Access", era: "1995", globalYearsTo50: 21, emdeLagYears: 11, category: "Digital" },
      { tech: "Mobile Cellular", era: "1998", globalYearsTo50: 14, emdeLagYears: 6, category: "Comms" },
      { tech: "Smartphones", era: "2008", globalYearsTo50: 9, emdeLagYears: 4, category: "Digital" },
      { tech: "Instant Digital Payments (UPI/PIX/M-Pesa)", era: "2014", globalYearsTo50: 7, emdeLagYears: -2, category: "Leapfrog (EMDE Lead)" },
      { tech: "Solar PV + Distributed Storage", era: "2018", globalYearsTo50: 11, emdeLagYears: 1, category: "Green Transition" },
      { tech: "Electric Vehicles (2W/3W & Cars)", era: "2020", globalYearsTo50: 9, emdeLagYears: 0, category: "Green Transition" },
      { tech: "Generative AI Tools", era: "2023", globalYearsTo50: 4, emdeLagYears: 1, category: "Digital" }
    ],

    // 2000-2025 Adoption S-Curves (% of relevant global / regional market or population)
    sCurves: {
      years: [2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024, 2025],
      series: {
        mobileGlobal: {
          label: "Mobile Cellular Subscriptions (% Pop)",
          color: "#38bdf8",
          data: [12.1, 18.4, 27.6, 41.8, 59.7, 76.6, 88.5, 96.8, 99.7, 104.2, 106.5, 108.1, 110.4, 111.5]
        },
        internetEmde: {
          label: "Internet Penetration in Global South (%)",
          color: "#818cf8",
          data: [2.1, 3.8, 6.4, 9.8, 14.7, 21.2, 28.9, 36.4, 43.8, 51.2, 58.6, 63.4, 67.1, 69.0]
        },
        digitalPaymentsEmde: {
          label: "Digital / Mobile Account Ownership in EMDEs (% Adults)",
          color: "#a78bfa",
          data: [18.0, 20.5, 23.4, 27.1, 32.0, 38.4, 46.2, 55.4, 63.1, 68.9, 73.5, 77.8, 81.4, 83.2]
        },
        solarWindShareElec: {
          label: "Solar + Wind Share of Global Electricity Generation (%)",
          color: "#10b981",
          data: [0.2, 0.3, 0.5, 0.8, 1.3, 2.0, 3.1, 4.4, 5.8, 7.6, 9.8, 12.4, 15.6, 17.5]
        },
        evShareGlobal: {
          label: "EV Share of Global New Car Sales (%)",
          color: "#34d399",
          data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.2, 0.5, 1.1, 2.5, 4.4, 14.1, 20.8, 23.6]
        },
        cleanCookingAccess: {
          label: "Access to Clean Cooking Fuels Globally (%)",
          color: "#fbbf24",
          data: [49.2, 50.8, 52.5, 54.3, 56.2, 58.4, 60.8, 63.4, 66.1, 68.9, 71.4, 73.6, 75.5, 76.4]
        }
      }
    },

    // Wright's Law Learning Curves (Cumulative Doublings vs Cost Decline)
    wrightsLaw: [
      {
        tech: "Solar PV Modules",
        learningRate: "24% cost drop per doubling",
        color: "#10b981",
        points: [
          { year: 2000, cumulativeGw: 1.4, costUsd: 4.88, unit: "$/W" },
          { year: 2005, cumulativeGw: 5.1, costUsd: 3.85, unit: "$/W" },
          { year: 2010, cumulativeGw: 40.3, costUsd: 2.05, unit: "$/W" },
          { year: 2015, cumulativeGw: 228, costUsd: 0.61, unit: "$/W" },
          { year: 2020, cumulativeGw: 714, costUsd: 0.23, unit: "$/W" },
          { year: 2025, cumulativeGw: 2260, costUsd: 0.105, unit: "$/W" }
        ]
      },
      {
        tech: "Li-Ion Battery Packs",
        learningRate: "20% cost drop per doubling",
        color: "#38bdf8",
        points: [
          { year: 2000, cumulativeGw: 0.5, costUsd: 1850, unit: "$/kWh" },
          { year: 2005, cumulativeGw: 2.2, costUsd: 1260, unit: "$/kWh" },
          { year: 2010, cumulativeGw: 14.0, costUsd: 915, unit: "$/kWh" },
          { year: 2015, cumulativeGw: 95.0, costUsd: 355, unit: "$/kWh" },
          { year: 2020, cumulativeGw: 540, costUsd: 138, unit: "$/kWh" },
          { year: 2025, cumulativeGw: 3450, costUsd: 99, unit: "$/kWh" }
        ]
      },
      {
        tech: "Offshore & Onshore Wind LCOE",
        learningRate: "15% cost drop per doubling",
        color: "#a78bfa",
        points: [
          { year: 2000, cumulativeGw: 17, costUsd: 158, unit: "$/MWh" },
          { year: 2005, cumulativeGw: 59, costUsd: 124, unit: "$/MWh" },
          { year: 2010, cumulativeGw: 198, costUsd: 102, unit: "$/MWh" },
          { year: 2015, cumulativeGw: 432, costUsd: 69, unit: "$/MWh" },
          { year: 2020, cumulativeGw: 743, costUsd: 43, unit: "$/MWh" },
          { year: 2025, cumulativeGw: 1180, costUsd: 33, unit: "$/MWh" }
        ]
      }
    ]
  },

  // ============================================================================
  // 4. POLYCRISIS & PLANETARY BOUNDARIES DATA
  // ============================================================================
  polycrisis: {
    // Stockholm Resilience Centre Planetary Boundaries (Normalized: Safe Boundary = 100)
    planetaryBoundaries: [
      { name: "Climate Change (CO₂ & Radiative Forcing)", status2000: 135, status2025: 198, safeThreshold: 100, unit: "425 ppm vs 350 ppm safe" },
      { name: "Biosphere Integrity (Genetic & Functional)", status2000: 180, status2025: 245, safeThreshold: 100, unit: ">100 E/MSY vs <10 safe" },
      { name: "Biogeochemical Flows (Nitrogen & Phosphorus)", status2000: 170, status2025: 230, safeThreshold: 100, unit: "190 Tg N/yr vs 62 safe" },
      { name: "Freshwater Change (Blue & Green Water)", status2000: 98, status2025: 152, safeThreshold: 100, unit: "18.2% transgression" },
      { name: "Land-System Change (Forest Cover)", status2000: 112, status2025: 142, safeThreshold: 100, unit: "60% remaining vs 75% safe" },
      { name: "Novel Entities (Plastics, PFAS, Synthetics)", status2000: 110, status2025: 215, safeThreshold: 100, unit: "High transgression" },
      { name: "Ocean Acidification (Aragonite Saturation)", status2000: 82, status2025: 97, safeThreshold: 100, unit: "Near boundary (2.80 Ω)" },
      { name: "Atmospheric Aerosol Loading", status2000: 78, status2025: 86, safeThreshold: 100, unit: "Regional transgression (South Asia)" },
      { name: "Stratospheric Ozone Depletion", status2000: 94, status2025: 68, safeThreshold: 100, unit: "Recovering (Montreal Protocol)" }
    ],

    // Multi-Hazard Human Exposure Breakdown by World Region (2025)
    regionalExposure: [
      {
        region: "South Asia",
        popBillions: 2.04,
        lethalHeatPopM: 940,
        waterStressPopM: 1120,
        foodInsecurePopM: 72,
        displacedPopM: 11.4,
        greenLeapfrogScore: 71,
        convergenceVelocity: 78
      },
      {
        region: "Sub-Saharan Africa",
        popBillions: 1.29,
        lethalHeatPopM: 460,
        waterStressPopM: 490,
        foodInsecurePopM: 148,
        displacedPopM: 45.2,
        greenLeapfrogScore: 48,
        convergenceVelocity: 52
      },
      {
        region: "East & SE Asia",
        popBillions: 2.36,
        lethalHeatPopM: 610,
        waterStressPopM: 780,
        foodInsecurePopM: 18,
        displacedPopM: 6.8,
        greenLeapfrogScore: 89,
        convergenceVelocity: 88
      },
      {
        region: "Middle East & North Africa",
        popBillions: 0.58,
        lethalHeatPopM: 285,
        waterStressPopM: 465,
        foodInsecurePopM: 41,
        displacedPopM: 28.6,
        greenLeapfrogScore: 59,
        convergenceVelocity: 56
      },
      {
        region: "Latin America & Caribbean",
        popBillions: 0.67,
        lethalHeatPopM: 135,
        waterStressPopM: 190,
        foodInsecurePopM: 16,
        displacedPopM: 21.4,
        greenLeapfrogScore: 74,
        convergenceVelocity: 63
      },
      {
        region: "OECD / High-Income West & Asia",
        popBillions: 1.18,
        lethalHeatPopM: 90,
        waterStressPopM: 210,
        foodInsecurePopM: 3,
        displacedPopM: 12.0,
        greenLeapfrogScore: 84,
        convergenceVelocity: 66
      }
    ],

    // Interactive Polycrisis Systemic Cascade Nodes & Amplifying/Mitigating Feedback Links
    cascadeNodes: [
      { id: "climate", label: "Warming (+1.52°C)\n& Extreme Weather", x: 140, y: 80, type: "crisis", severity: 92 },
      { id: "water_food", label: "Crop Yield Shocks\n& Water Stress", x: 380, y: 65, type: "crisis", severity: 86 },
      { id: "conflict", label: "State Conflict (60)\n& Geopolitical Blocs", x: 140, y: 230, type: "crisis", severity: 88 },
      { id: "displacement", label: "Forced Displacement\n(125.4M People)", x: 380, y: 230, type: "crisis", severity: 90 },
      { id: "debt", label: "Sovereign Debt Distress\n& Fiscal Squeeze", x: 620, y: 150, type: "crisis", severity: 81 },
      { id: "solar_ev", label: "Wright's Law Clean Tech\n(Solar $0.10/W, Batteries)", x: 140, y: 380, type: "solution", severity: 94 },
      { id: "digital_doi", label: "Digital Leapfrogging\n(DPI, AI, Early Warning)", x: 380, y: 380, type: "solution", severity: 89 },
      { id: "convergence", label: "Economic Convergence\n& Adaptive Capacity", x: 620, y: 340, type: "solution", severity: 85 }
    ],
    cascadeLinks: [
      { source: "climate", target: "water_food", effect: "amplifies", weight: "Strong (+)" },
      { source: "climate", target: "displacement", effect: "amplifies", weight: "Direct (+)" },
      { source: "water_food", target: "conflict", effect: "amplifies", weight: "Trigger (+)" },
      { source: "conflict", target: "displacement", effect: "amplifies", weight: "Primary (+)" },
      { source: "conflict", target: "debt", effect: "amplifies", weight: "Fiscal Shock (+)" },
      { source: "water_food", target: "debt", effect: "amplifies", weight: "Import Bill (+)" },
      { source: "debt", target: "convergence", effect: "dampens", weight: "Crowds Out (-)" },
      { source: "solar_ev", target: "climate", effect: "mitigates", weight: "Decarbonizes (-)" },
      { source: "solar_ev", target: "convergence", effect: "accelerates", weight: "Cheap Energy (+)" },
      { source: "digital_doi", target: "convergence", effect: "accelerates", weight: "Inclusion (+)" },
      { source: "digital_doi", target: "water_food", effect: "mitigates", weight: "Precision Ag (-)" },
      { source: "convergence", target: "displacement", effect: "mitigates", weight: "Resilience (-)" }
    ]
  },

  // ============================================================================
  // 5. COUNTRY MATRIX DATASET (42 Representative Countries Across All Regions)
  // Metrics:
  // - convergenceScore (0-100): Composite of GDP PPP growth (2000-2025), poverty reduction, HDI gain, tech & green transition speed
  // - polycrisisExposure (0-100): Composite of lethal heat days, extreme weather loss, water stress, conflict/displacement, debt burden
  // - gdpPpp2000, gdpPpp2025: GDP per capita PPP (constant 2021 international $)
  // - cleanElecShare2025: Renewables + Nuclear share of electricity (%)
  // - digitalAdoption2025: Composite internet + digital payments penetration (%)
  // - heatDays2025: Annual days of dangerous wet-bulb / extreme heat stress (>35°C HI)
  // - emissionsDecoupling: "Absolute", "Relative", or "Coupled"
  // ============================================================================
  countries: [
    // East & Southeast Asia
    { code: "CHN", name: "China", region: "East & SE Asia", popM: 1410, convergenceScore: 91, polycrisisExposure: 54, gdpPpp2000: 3450, gdpPpp2025: 25800, cleanElecShare2025: 38.5, digitalAdoption2025: 89, heatDays2025: 34, waterStress: 68, debtVulnerability: 38, conflictRisk: 22, archetype: "Fast Converger / Green Giant" },
    { code: "VNM", name: "Vietnam", region: "East & SE Asia", popM: 100, convergenceScore: 86, polycrisisExposure: 66, gdpPpp2000: 3120, gdpPpp2025: 15400, cleanElecShare2025: 42.0, digitalAdoption2025: 81, heatDays2025: 78, waterStress: 54, debtVulnerability: 32, conflictRisk: 18, archetype: "High-Exposure Leapfrogger" },
    { code: "IDN", name: "Indonesia", region: "East & SE Asia", popM: 281, convergenceScore: 77, polycrisisExposure: 68, gdpPpp2000: 5890, gdpPpp2025: 16200, cleanElecShare2025: 22.4, digitalAdoption2025: 76, heatDays2025: 92, waterStress: 58, debtVulnerability: 36, conflictRisk: 26, archetype: "High-Exposure Leapfrogger" },
    { code: "PHL", name: "Philippines", region: "East & SE Asia", popM: 118, convergenceScore: 73, polycrisisExposure: 79, gdpPpp2000: 4650, gdpPpp2025: 11800, cleanElecShare2025: 29.1, digitalAdoption2025: 74, heatDays2025: 96, waterStress: 61, debtVulnerability: 44, conflictRisk: 38, archetype: "Climate Frontline Converger" },
    { code: "THA", name: "Thailand", region: "East & SE Asia", popM: 71.8, convergenceScore: 74, polycrisisExposure: 61, gdpPpp2000: 10800, gdpPpp2025: 23400, cleanElecShare2025: 24.5, digitalAdoption2025: 86, heatDays2025: 88, waterStress: 62, debtVulnerability: 41, conflictRisk: 28, archetype: "High-Exposure Leapfrogger" },
    { code: "MYS", name: "Malaysia", region: "East & SE Asia", popM: 34.5, convergenceScore: 80, polycrisisExposure: 52, gdpPpp2000: 16100, gdpPpp2025: 37800, cleanElecShare2025: 26.0, digitalAdoption2025: 91, heatDays2025: 82, waterStress: 42, debtVulnerability: 39, conflictRisk: 16, archetype: "Fast Converger / Green Giant" },
    { code: "KOR", name: "South Korea", region: "OECD / High Income", popM: 51.7, convergenceScore: 88, polycrisisExposure: 36, gdpPpp2000: 24100, gdpPpp2025: 56200, cleanElecShare2025: 39.8, digitalAdoption2025: 97, heatDays2025: 18, waterStress: 59, debtVulnerability: 24, conflictRisk: 32, archetype: "Resilient Tech Leader" },
    { code: "JPN", name: "Japan", region: "OECD / High Income", popM: 124, convergenceScore: 68, polycrisisExposure: 39, gdpPpp2000: 38200, gdpPpp2025: 51400, cleanElecShare2025: 34.2, digitalAdoption2025: 92, heatDays2025: 24, waterStress: 44, debtVulnerability: 58, conflictRisk: 18, archetype: "Resilient Tech Leader" },

    // South Asia
    { code: "IND", name: "India", region: "South Asia", popM: 1442, convergenceScore: 84, polycrisisExposure: 77, gdpPpp2000: 2540, gdpPpp2025: 11150, cleanElecShare2025: 26.8, digitalAdoption2025: 82, heatDays2025: 108, waterStress: 86, debtVulnerability: 46, conflictRisk: 42, archetype: "High-Exposure Leapfrogger" },
    { code: "BGD", name: "Bangladesh", region: "South Asia", popM: 174, convergenceScore: 75, polycrisisExposure: 85, gdpPpp2000: 2180, gdpPpp2025: 9420, cleanElecShare2025: 9.4, digitalAdoption2025: 68, heatDays2025: 116, waterStress: 74, debtVulnerability: 58, conflictRisk: 48, archetype: "Climate Frontline Converger" },
    { code: "PAK", name: "Pakistan", region: "South Asia", popM: 245, convergenceScore: 49, polycrisisExposure: 89, gdpPpp2000: 3420, gdpPpp2025: 6350, cleanElecShare2025: 41.2, digitalAdoption2025: 54, heatDays2025: 124, waterStress: 92, debtVulnerability: 86, conflictRisk: 74, archetype: "Polycrisis Trap Risk" },
    { code: "LKA", name: "Sri Lanka", region: "South Asia", popM: 22.0, convergenceScore: 62, polycrisisExposure: 71, gdpPpp2000: 5600, gdpPpp2025: 14200, cleanElecShare2025: 52.0, digitalAdoption2025: 71, heatDays2025: 86, waterStress: 64, debtVulnerability: 82, conflictRisk: 36, archetype: "Climate Frontline Converger" },

    // Sub-Saharan Africa
    { code: "KEN", name: "Kenya", region: "Sub-Saharan Africa", popM: 56.2, convergenceScore: 72, polycrisisExposure: 70, gdpPpp2000: 2980, gdpPpp2025: 6580, cleanElecShare2025: 89.5, digitalAdoption2025: 79, heatDays2025: 54, waterStress: 68, debtVulnerability: 74, conflictRisk: 44, archetype: "High-Exposure Leapfrogger" },
    { code: "RWA", name: "Rwanda", region: "Sub-Saharan Africa", popM: 14.4, convergenceScore: 74, polycrisisExposure: 64, gdpPpp2000: 980, gdpPpp2025: 3480, cleanElecShare2025: 61.0, digitalAdoption2025: 69, heatDays2025: 32, waterStress: 58, debtVulnerability: 62, conflictRisk: 46, archetype: "High-Exposure Leapfrogger" },
    { code: "ETH", name: "Ethiopia", region: "Sub-Saharan Africa", popM: 129, convergenceScore: 58, polycrisisExposure: 84, gdpPpp2000: 820, gdpPpp2025: 3120, cleanElecShare2025: 96.0, digitalAdoption2025: 44, heatDays2025: 68, waterStress: 76, debtVulnerability: 81, conflictRisk: 79, archetype: "Polycrisis Trap Risk" },
    { code: "NGA", name: "Nigeria", region: "Sub-Saharan Africa", popM: 229, convergenceScore: 51, polycrisisExposure: 83, gdpPpp2000: 3450, gdpPpp2025: 6180, cleanElecShare2025: 24.0, digitalAdoption2025: 64, heatDays2025: 98, waterStress: 69, debtVulnerability: 76, conflictRisk: 78, archetype: "Polycrisis Trap Risk" },
    { code: "ZAF", name: "South Africa", region: "Sub-Saharan Africa", popM: 61.0, convergenceScore: 59, polycrisisExposure: 62, gdpPpp2000: 11200, gdpPpp2025: 15900, cleanElecShare2025: 21.5, digitalAdoption2025: 78, heatDays2025: 36, waterStress: 78, debtVulnerability: 66, conflictRisk: 41, archetype: "Resource Transitioner" },
    { code: "GHA", name: "Ghana", region: "Sub-Saharan Africa", popM: 34.6, convergenceScore: 63, polycrisisExposure: 72, gdpPpp2000: 2890, gdpPpp2025: 7450, cleanElecShare2025: 38.0, digitalAdoption2025: 74, heatDays2025: 94, waterStress: 56, debtVulnerability: 84, conflictRisk: 34, archetype: "Climate Frontline Converger" },
    { code: "SEN", name: "Senegal", region: "Sub-Saharan Africa", popM: 18.2, convergenceScore: 64, polycrisisExposure: 73, gdpPpp2000: 2650, gdpPpp2025: 4820, cleanElecShare2025: 34.0, digitalAdoption2025: 68, heatDays2025: 102, waterStress: 71, debtVulnerability: 68, conflictRisk: 38, archetype: "Climate Frontline Converger" },
    { code: "COD", name: "DR Congo", region: "Sub-Saharan Africa", popM: 105, convergenceScore: 36, polycrisisExposure: 91, gdpPpp2000: 890, gdpPpp2025: 1580, cleanElecShare2025: 98.0, digitalAdoption2025: 32, heatDays2025: 84, waterStress: 52, debtVulnerability: 74, conflictRisk: 92, archetype: "Polycrisis Trap Risk" },
    { code: "SDN", name: "Sudan", region: "Sub-Saharan Africa", popM: 49.4, convergenceScore: 24, polycrisisExposure: 96, gdpPpp2000: 2750, gdpPpp2025: 2450, cleanElecShare2025: 58.0, digitalAdoption2025: 34, heatDays2025: 138, waterStress: 91, debtVulnerability: 94, conflictRisk: 98, archetype: "Polycrisis Trap Risk" },

    // Middle East & North Africa
    { code: "MAR", name: "Morocco", region: "MENA", popM: 38.0, convergenceScore: 73, polycrisisExposure: 65, gdpPpp2000: 4680, gdpPpp2025: 10650, cleanElecShare2025: 44.5, digitalAdoption2025: 78, heatDays2025: 62, waterStress: 89, debtVulnerability: 54, conflictRisk: 29, archetype: "High-Exposure Leapfrogger" },
    { code: "EGY", name: "Egypt", region: "MENA", popM: 114, convergenceScore: 61, polycrisisExposure: 78, gdpPpp2000: 7850, gdpPpp2025: 17400, cleanElecShare2025: 18.2, digitalAdoption2025: 68, heatDays2025: 86, waterStress: 96, debtVulnerability: 85, conflictRisk: 54, archetype: "Polycrisis Trap Risk" },
    { code: "ARE", name: "United Arab Emirates", region: "MENA", popM: 10.2, convergenceScore: 81, polycrisisExposure: 55, gdpPpp2000: 78500, gdpPpp2025: 89400, cleanElecShare2025: 28.4, digitalAdoption2025: 98, heatDays2025: 132, waterStress: 98, debtVulnerability: 18, conflictRisk: 28, archetype: "Resource Transitioner" },
    { code: "SAU", name: "Saudi Arabia", region: "MENA", popM: 37.2, convergenceScore: 74, polycrisisExposure: 58, gdpPpp2000: 46200, gdpPpp2025: 64800, cleanElecShare2025: 11.5, digitalAdoption2025: 95, heatDays2025: 128, waterStress: 97, debtVulnerability: 22, conflictRisk: 38, archetype: "Resource Transitioner" },
    { code: "TUR", name: "Türkiye", region: "MENA", popM: 85.8, convergenceScore: 76, polycrisisExposure: 61, gdpPpp2000: 14800, gdpPpp2025: 39600, cleanElecShare2025: 44.2, digitalAdoption2025: 85, heatDays2025: 42, waterStress: 76, debtVulnerability: 64, conflictRisk: 49, archetype: "High-Exposure Leapfrogger" },
    { code: "YEM", name: "Yemen", region: "MENA", popM: 35.2, convergenceScore: 19, polycrisisExposure: 97, gdpPpp2000: 4120, gdpPpp2025: 1850, cleanElecShare2025: 26.0, digitalAdoption2025: 28, heatDays2025: 118, waterStress: 99, debtVulnerability: 95, conflictRisk: 97, archetype: "Polycrisis Trap Risk" },

    // Latin America & Caribbean
    { code: "BRA", name: "Brazil", region: "Latin America", popM: 217, convergenceScore: 78, polycrisisExposure: 53, gdpPpp2000: 12400, gdpPpp2025: 20800, cleanElecShare2025: 89.2, digitalAdoption2025: 88, heatDays2025: 64, waterStress: 44, debtVulnerability: 56, conflictRisk: 34, archetype: "Fast Converger / Green Giant" },
    { code: "CHL", name: "Chile", region: "Latin America", popM: 19.7, convergenceScore: 82, polycrisisExposure: 48, gdpPpp2000: 14900, gdpPpp2025: 31800, cleanElecShare2025: 68.4, digitalAdoption2025: 90, heatDays2025: 22, waterStress: 79, debtVulnerability: 38, conflictRisk: 22, archetype: "Fast Converger / Green Giant" },
    { code: "URY", name: "Uruguay", region: "Latin America", popM: 3.4, convergenceScore: 85, polycrisisExposure: 34, gdpPpp2000: 14200, gdpPpp2025: 32400, cleanElecShare2025: 96.5, digitalAdoption2025: 89, heatDays2025: 18, waterStress: 32, debtVulnerability: 36, conflictRisk: 14, archetype: "Fast Converger / Green Giant" },
    { code: "MEX", name: "Mexico", region: "Latin America", popM: 130, convergenceScore: 67, polycrisisExposure: 59, gdpPpp2000: 17800, gdpPpp2025: 24600, cleanElecShare2025: 27.5, digitalAdoption2025: 79, heatDays2025: 58, waterStress: 76, debtVulnerability: 48, conflictRisk: 52, archetype: "Resource Transitioner" },
    { code: "COL", name: "Colombia", region: "Latin America", popM: 52.3, convergenceScore: 71, polycrisisExposure: 61, gdpPpp2000: 9800, gdpPpp2025: 20400, cleanElecShare2025: 74.8, digitalAdoption2025: 78, heatDays2025: 56, waterStress: 39, debtVulnerability: 54, conflictRisk: 56, archetype: "High-Exposure Leapfrogger" },
    { code: "ARG", name: "Argentina", region: "Latin America", popM: 46.8, convergenceScore: 56, polycrisisExposure: 58, gdpPpp2000: 18900, gdpPpp2025: 26200, cleanElecShare2025: 42.1, digitalAdoption2025: 84, heatDays2025: 32, waterStress: 46, debtVulnerability: 89, conflictRisk: 28, archetype: "Resource Transitioner" },
    { code: "HTI", name: "Haiti", region: "Latin America", popM: 11.8, convergenceScore: 22, polycrisisExposure: 93, gdpPpp2000: 3250, gdpPpp2025: 2920, cleanElecShare2025: 21.0, digitalAdoption2025: 36, heatDays2025: 92, waterStress: 74, debtVulnerability: 82, conflictRisk: 94, archetype: "Polycrisis Trap Risk" },

    // OECD / High Income & Europe/Eurasia
    { code: "USA", name: "United States", region: "OECD / High Income", popM: 336, convergenceScore: 79, polycrisisExposure: 41, gdpPpp2000: 50200, gdpPpp2025: 78900, cleanElecShare2025: 43.8, digitalAdoption2025: 94, heatDays2025: 32, waterStress: 49, debtVulnerability: 48, conflictRisk: 26, archetype: "Resilient Tech Leader" },
    { code: "DEU", name: "Germany", region: "OECD / High Income", popM: 84.5, convergenceScore: 81, polycrisisExposure: 31, gdpPpp2000: 44800, gdpPpp2025: 64200, cleanElecShare2025: 61.4, digitalAdoption2025: 93, heatDays2025: 12, waterStress: 38, debtVulnerability: 26, conflictRisk: 18, archetype: "Resilient Tech Leader" },
    { code: "GBR", name: "United Kingdom", region: "OECD / High Income", popM: 68.3, convergenceScore: 80, polycrisisExposure: 30, gdpPpp2000: 40200, gdpPpp2025: 57600, cleanElecShare2025: 63.8, digitalAdoption2025: 95, heatDays2025: 8, waterStress: 34, debtVulnerability: 38, conflictRisk: 18, archetype: "Resilient Tech Leader" },
    { code: "FRA", name: "France", region: "OECD / High Income", popM: 68.4, convergenceScore: 82, polycrisisExposure: 32, gdpPpp2000: 41600, gdpPpp2025: 58400, cleanElecShare2025: 92.4, digitalAdoption2025: 93, heatDays2025: 16, waterStress: 42, debtVulnerability: 44, conflictRisk: 20, archetype: "Resilient Tech Leader" },
    { code: "NOR", name: "Norway", region: "OECD / High Income", popM: 5.5, convergenceScore: 92, polycrisisExposure: 18, gdpPpp2000: 61200, gdpPpp2025: 88600, cleanElecShare2025: 98.8, digitalAdoption2025: 99, heatDays2025: 2, waterStress: 14, debtVulnerability: 10, conflictRisk: 12, archetype: "Resilient Tech Leader" },
    { code: "POL", name: "Poland", region: "OECD / High Income", popM: 37.6, convergenceScore: 85, polycrisisExposure: 35, gdpPpp2000: 16400, gdpPpp2025: 47200, cleanElecShare2025: 31.2, digitalAdoption2025: 89, heatDays2025: 11, waterStress: 44, debtVulnerability: 32, conflictRisk: 28, archetype: "Fast Converger / Green Giant" },
    { code: "AUS", name: "Australia", region: "OECD / High Income", popM: 26.9, convergenceScore: 81, polycrisisExposure: 44, gdpPpp2000: 42800, gdpPpp2025: 65400, cleanElecShare2025: 41.6, digitalAdoption2025: 95, heatDays2025: 46, waterStress: 64, debtVulnerability: 24, conflictRisk: 14, archetype: "Resilient Tech Leader" },
    { code: "UKR", name: "Ukraine", region: "OECD / High Income", popM: 37.8, convergenceScore: 44, polycrisisExposure: 88, gdpPpp2000: 6800, gdpPpp2025: 14100, cleanElecShare2025: 64.0, digitalAdoption2025: 84, heatDays2025: 14, waterStress: 48, debtVulnerability: 91, conflictRisk: 99, archetype: "Polycrisis Trap Risk" }
  ],

  // ============================================================================
  // 6. 2025–2050 SCENARIO PRESETS & MODEL PARAMETERS
  // ============================================================================
  scenarios: {
    presets: {
      baseline: {
        name: "The Uneven Race (Current Trajectory)",
        description: "Solar, EVs, and digital infrastructure continue rapid diffusion, lifting most middle-income economies, but +2.4°C warming, sovereign debt squeezes, and regional conflicts trap ~1.4B people in high polycrisis exposure.",
        sliders: {
          doiVelocity: 68,       // Innovation & Green Diffusion Velocity (0-100)
          convergencePolicy: 55, // Global South Finance, Debt Relief & Convergence (0-100)
          climateAction: 52,     // Mitigation & Adaptation Infrastructure Speed (0-100)
          geopolitics: 42        // Geopolitical Cooperation vs Fragmentation (0-100)
        }
      },
      greenConvergence: {
        name: "Solar-Digital Convergence (Breakthrough Adaptation)",
        description: "Ultra-cheap solar+storage ($15/MWh), open digital public infrastructure, climate finance reform, and de-escalation allow Global South economies to leapfrog fossil lock-in and build deep climate resilience before 2040.",
        sliders: {
          doiVelocity: 92,
          convergencePolicy: 86,
          climateAction: 88,
          geopolitics: 80
        }
      },
      fragmentedFortress: {
        name: "Fragmented Fortress World (Bloc Rivalry)",
        description: "Tariff walls, critical mineral hoarding, and geopolitical rivalry slow clean-tech transfer to developing nations. Advanced economies adapt behind walls while low-income regions face worsening heat and fiscal crises.",
        sliders: {
          doiVelocity: 48,
          convergencePolicy: 30,
          climateAction: 44,
          geopolitics: 20
        }
      },
      runawayPolycrisis: {
        name: "Compounding Polycrisis (Tipping Points & Fragility)",
        description: "High warming (+2.9°C by 2050), synchronous breadbasket failures, sovereign defaults, and proliferating armed conflicts overwhelm adaptive capacity, reversing decades of global economic convergence.",
        sliders: {
          doiVelocity: 35,
          convergencePolicy: 22,
          climateAction: 20,
          geopolitics: 15
        }
      }
    },
    projectionYears: [2025, 2030, 2035, 2040, 2045, 2050]
  }
};


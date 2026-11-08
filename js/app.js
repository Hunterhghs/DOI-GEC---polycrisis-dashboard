/**
 * 21st Century Observatory — Main Interactive Controller
 * Handles Timeline Scrubber, KPI Reactivity, Country Explorer, Scenario Lab & Exports
 */

window.DashboardApp = (function () {
  let selectedYearIdx = 25; // 2025
  let playInterval = null;
  let currentRegionFilter = "ALL";
  let currentSortField = "convergenceScore";
  let currentSortAsc = false;

  // ==========================================================================
  // 1. UPDATE HERO TUG-OF-WAR & 8 KPI SCORECARDS FOR SELECTED YEAR
  // ==========================================================================
  function updateYearState(idx) {
    selectedYearIdx = Number(idx);
    const D = window.DASHBOARD_DATA;
    const year = D.meta.years[selectedYearIdx];
    const ts = D.timeSeries;

    // Update Scrubber UI
    const yearPill = document.getElementById("selectedYearPill");
    const yearSlider = document.getElementById("globalYearSlider");
    if (yearPill) yearPill.textContent = year;
    if (yearSlider && Number(yearSlider.value) !== selectedYearIdx) {
      yearSlider.value = selectedYearIdx;
    }

    // Update Hero Tug-of-War Banner
    const convScore = ts.convergenceTransitionIndex[selectedYearIdx];
    const polyScore = ts.polycrisisExposureIndex[selectedYearIdx];
    const netDiff = +(convScore - polyScore).toFixed(1);
    const convSharePct = +((convScore / (convScore + polyScore)) * 100).toFixed(1);

    setText("heroConvScore", convScore.toFixed(1));
    setText("heroPolyScore", polyScore.toFixed(1));
    setText("heroConvDelta", `+${(convScore - 100).toFixed(1)}% vs 2000`);
    setText("heroPolyDelta", `+${(polyScore - 100).toFixed(1)}% vs 2000`);

    const netBadge = document.getElementById("heroNetBadge");
    if (netBadge) {
      const sign = netDiff >= 0 ? "+" : "";
      netBadge.textContent = `${year} Net Balance: ${sign}${netDiff} pts (${convSharePct}% Convergence vs ${(100 - convSharePct).toFixed(1)}% Polycrisis)`;
      netBadge.style.borderColor = netDiff >= 35 ? "var(--conv-emerald)" : netDiff >= 0 ? "var(--conv-cyan)" : "var(--poly-crimson)";
    }

    const convBar = document.getElementById("tugBarConv");
    if (convBar) convBar.style.width = `${convSharePct}%`;

    // Update 8 KPI Cards dynamically for selected year
    // 1. EMDE Share of Global GDP (PPP)
    const emdeShare = ts.emdeGdpPppShare[selectedYearIdx];
    setText("kpiEmdeShare", `${emdeShare.toFixed(1)}%`);
    setText("kpiEmdeDelta", `+${(emdeShare - ts.emdeGdpPppShare[0]).toFixed(1)} pp since 2000`);
    setBarWidth("kpiBarEmde", emdeShare);

    // 2. Global Extreme Poverty Rate (<$2.15/day)
    const pov = ts.extremePovertyRate[selectedYearIdx];
    setText("kpiPoverty", `${pov.toFixed(1)}%`);
    setText("kpiPovertyDelta", `${(pov - ts.extremePovertyRate[0]).toFixed(1)} pp since 2000`);
    setBarWidth("kpiBarPoverty", Math.min(100, (pov / 35) * 100));

    // 3. Solar PV Module Cost ($/W) & Clean Capacity
    const solarCost = ts.solarPvCostPerWatt[selectedYearIdx];
    const dropPct = (((solarCost - ts.solarPvCostPerWatt[0]) / ts.solarPvCostPerWatt[0]) * 100).toFixed(0);
    setText("kpiSolarCost", `$${solarCost.toFixed(2)}/W`);
    setText("kpiSolarDelta", `${dropPct}% vs 2000 ($4.88/W)`);
    setBarWidth("kpiBarSolar", Math.max(8, 100 - (solarCost / 5) * 100));

    // 4. Global Internet & Digital Diffusion + Renewable GW
    const netPen = ts.internetPenetration[selectedYearIdx];
    const gw = ts.solarWindCapacityGw[selectedYearIdx];
    setText("kpiDigital", `${netPen.toFixed(1)}%`);
    setText("kpiDigitalDelta", `${gw.toLocaleString()} GW Solar+Wind`);
    setBarWidth("kpiBarDigital", netPen);

    // 5. Global Warming Anomaly (°C)
    const temp = ts.tempAnomalyCelsius[selectedYearIdx];
    setText("kpiTemp", `+${temp.toFixed(2)}°C`);
    setText("kpiTempDelta", `+${(temp - ts.tempAnomalyCelsius[0]).toFixed(2)}°C vs 2000`);
    setBarWidth("kpiBarTemp", Math.min(100, (temp / 2.0) * 100));

    // 6. Population Exposed to Dangerous Heat Stress (Billions)
    const heatPop = ts.heatExposedPopulationBillions[selectedYearIdx];
    setText("kpiHeatPop", `${heatPop.toFixed(2)}B`);
    setText("kpiHeatDelta", `+${(heatPop - ts.heatExposedPopulationBillions[0]).toFixed(2)}B people vs 2000`);
    setBarWidth("kpiBarHeat", Math.min(100, (heatPop / 3.2) * 100));

    // 7. Forcibly Displaced People (Millions - UNHCR)
    const disp = ts.forciblyDisplacedMillions[selectedYearIdx];
    setText("kpiDisplaced", `${disp.toFixed(1)}M`);
    setText("kpiDisplacedDelta", `+${(disp - ts.forciblyDisplacedMillions[0]).toFixed(1)}M vs 2000`);
    setBarWidth("kpiBarDisplaced", Math.min(100, (disp / 140) * 100));

    // 8. State-Based Armed Conflicts & Acute Food Insecurity
    const conf = ts.activeStateConflicts[selectedYearIdx];
    const food = ts.acuteFoodInsecurityMillions[selectedYearIdx];
    setText("kpiConflicts", `${conf} Wars`);
    setText("kpiConflictsDelta", `${food}M in Acute Food Crisis`);
    setBarWidth("kpiBarConflicts", Math.min(100, (conf / 70) * 100));

    // Update vertical year line on charts
    if (window.DashboardCharts) {
      window.DashboardCharts.setYearIndex(selectedYearIdx);
    }
  }

  function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  function setBarWidth(id, pct) {
    const el = document.getElementById(id);
    if (el) el.style.width = `${Math.max(4, Math.min(100, pct))}%`;
  }

  // ==========================================================================
  // 2. RENDER DIFFUSION COMPRESSION LIST (1840s - 2025)
  // ==========================================================================
  function renderCompressionList() {
    const container = document.getElementById("compressionListContainer");
    if (!container) return;
    const items = window.DASHBOARD_DATA.innovationDiffusion.compressionHistory;

    container.innerHTML = items
      .map((item) => {
        const globalWidth = Math.max(5, Math.round((item.globalYearsTo50 / 90) * 100));
        const lagWidth = Math.max(3, Math.round((Math.abs(item.emdeLagYears) / 90) * 100));
        const isLeapfrog = item.emdeLagYears <= 1;
        const lagText =
          item.emdeLagYears < 0
            ? `EMDE Lead (${Math.abs(item.emdeLagYears)}y ahead)`
            : item.emdeLagYears === 0
            ? "0 yr Lag (Simultaneous)"
            : `${item.emdeLagYears} yr South Lag`;

        return `
          <div class="compression-item">
            <div class="compression-tech-name">
              <span>${item.tech}</span>
              <span class="compression-era">${item.era}</span>
            </div>
            <div class="compression-bars">
              <div class="comp-bar-row" title="Years to 50% Global Adoption: ${item.globalYearsTo50} years">
                <div class="comp-bar-fill" style="width:${globalWidth}%; background: var(--conv-cyan);"></div>
                <span style="font-size:0.68rem; color:var(--text-secondary);">${item.globalYearsTo50}y to 50%</span>
              </div>
              <div class="comp-bar-row" title="Global South Adoption Lag: ${lagText}">
                <div class="comp-bar-fill" style="width:${lagWidth}%; background: ${isLeapfrog ? "var(--conv-emerald)" : "var(--poly-orange)"};"></div>
              </div>
            </div>
            <div class="comp-lag-badge" style="color: ${isLeapfrog ? "var(--conv-emerald)" : "var(--text-secondary)"};">
              ${lagText}
            </div>
          </div>
        `;
      })
      .join("");
  }

  // ==========================================================================
  // 3. COUNTRY MATRIX TABLE & DRILL-DOWN MODAL
  // ==========================================================================
  function getArchetypeClass(arch) {
    if (arch.includes("Green Giant")) return "arch-green";
    if (arch.includes("Leapfrogger")) return "arch-leap";
    if (arch.includes("Frontline")) return "arch-front";
    if (arch.includes("Trap")) return "arch-trap";
    return "arch-res";
  }

  function renderCountryTable() {
    const tbody = document.getElementById("countryTableBody");
    if (!tbody) return;
    const searchVal = (document.getElementById("countrySearchInput")?.value || "").toLowerCase().trim();

    let list = window.DASHBOARD_DATA.countries.filter((c) => {
      const matchesRegion = currentRegionFilter === "ALL" || c.region === currentRegionFilter;
      const matchesSearch =
        !searchVal ||
        c.name.toLowerCase().includes(searchVal) ||
        c.code.toLowerCase().includes(searchVal) ||
        c.archetype.toLowerCase().includes(searchVal);
      return matchesRegion && matchesSearch;
    });

    list.sort((a, b) => {
      const vA = a[currentSortField];
      const vB = b[currentSortField];
      if (typeof vA === "string") {
        return currentSortAsc ? vA.localeCompare(vB) : vB.localeCompare(vA);
      }
      return currentSortAsc ? vA - vB : vB - vA;
    });

    tbody.innerHTML = list
      .map((c) => {
        const netRes = c.convergenceScore - c.polycrisisExposure;
        const netColor = netRes >= 10 ? "var(--conv-emerald)" : netRes >= -10 ? "var(--conv-cyan)" : "var(--poly-crimson)";
        const gdpMultiple = (c.gdpPpp2025 / c.gdpPpp2000).toFixed(1);

        return `
          <tr data-code="${c.code}">
            <td>
              <strong>${c.name}</strong>
              <span style="font-family:var(--font-mono); font-size:0.68rem; color:var(--text-muted); margin-left:4px;">${c.code}</span>
            </td>
            <td style="color:var(--text-secondary);">${c.region}</td>
            <td><span class="archetype-pill ${getArchetypeClass(c.archetype)}">${c.archetype}</span></td>
            <td>
              <div class="score-bar-inline">
                <span style="color:var(--conv-emerald); width:24px;">${c.convergenceScore}</span>
                <div class="score-bar-track">
                  <div class="score-bar-fill" style="width:${c.convergenceScore}%; background:var(--conv-emerald);"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="score-bar-inline">
                <span style="color:var(--poly-crimson); width:24px;">${c.polycrisisExposure}</span>
                <div class="score-bar-track">
                  <div class="score-bar-fill" style="width:${c.polycrisisExposure}%; background:var(--poly-crimson);"></div>
                </div>
              </div>
            </td>
            <td style="font-family:var(--font-mono); font-weight:700; color:${netColor};">
              ${netRes >= 0 ? "+" : ""}${netRes}
            </td>
            <td style="font-family:var(--font-mono);">
              $${c.gdpPpp2025.toLocaleString()} <span style="color:var(--conv-emerald); font-size:0.7rem;">(${gdpMultiple}x)</span>
            </td>
            <td style="font-family:var(--font-mono);">${c.cleanElecShare2025}%</td>
            <td style="font-family:var(--font-mono);">${c.digitalAdoption2025}%</td>
            <td style="font-family:var(--font-mono); color:${c.heatDays2025 > 80 ? "var(--poly-crimson)" : "var(--text-secondary)"};">
              ${c.heatDays2025}d
            </td>
          </tr>
        `;
      })
      .join("");

    // Row click opens modal
    tbody.querySelectorAll("tr").forEach((row) => {
      row.addEventListener("click", () => {
        openCountryModal(row.getAttribute("data-code"));
      });
    });
  }

  function openCountryModal(code) {
    const country = window.DASHBOARD_DATA.countries.find((c) => c.code === code);
    if (!country) return;

    const modal = document.getElementById("countryModalBackdrop");
    if (!modal) return;

    const gdpGrowthPct = (((country.gdpPpp2025 - country.gdpPpp2000) / country.gdpPpp2000) * 100).toFixed(0);
    const netBalance = country.convergenceScore - country.polycrisisExposure;

    setText("modalCountryTitle", `${country.name} (${country.code})`);
    setText("modalCountrySubtitle", `${country.region} • Population: ${country.popM}M • Archetype: ${country.archetype}`);
    setText("modalConvScore", `${country.convergenceScore}/100`);
    setText("modalPolyScore", `${country.polycrisisExposure}/100`);
    setText("modalNetScore", `${netBalance >= 0 ? "+" : ""}${netBalance} pts`);
    setText("modalGdpTrajectory", `$${country.gdpPpp2000.toLocaleString()} (2000) → $${country.gdpPpp2025.toLocaleString()} (2025) [${gdpGrowthPct >= 0 ? "+" : ""}${gdpGrowthPct}%]`);
    setText("modalCleanElec", `${country.cleanElecShare2025}%`);
    setText("modalDigital", `${country.digitalAdoption2025}%`);
    setText("modalHeatDays", `${country.heatDays2025} days/yr`);
    setText("modalWaterStress", `${country.waterStress}/100`);
    setText("modalDebt", `${country.debtVulnerability}/100`);
    setText("modalConflict", `${country.conflictRisk}/100`);

    modal.classList.add("open");
    if (window.DashboardCharts) {
      window.DashboardCharts.renderCountryModalChart(country);
    }
  }

  // ==========================================================================
  // 4. 2025–2050 SCENARIO SIMULATOR CONTROLS
  // ==========================================================================
  function initScenarioSimulator() {
    const sliderIds = ["simSliderDoi", "simSliderConv", "simSliderClimate", "simSliderGeo"];
    const badgeIds = ["simValDoi", "simValConv", "simValClimate", "simValGeo"];

    function readSlidersAndUpdate() {
      const sliders = {
        doiVelocity: Number(document.getElementById("simSliderDoi")?.value || 68),
        convergencePolicy: Number(document.getElementById("simSliderConv")?.value || 55),
        climateAction: Number(document.getElementById("simSliderClimate")?.value || 52),
        geopolitics: Number(document.getElementById("simSliderGeo")?.value || 42)
      };

      setText("simValDoi", `${sliders.doiVelocity}/100`);
      setText("simValConv", `${sliders.convergencePolicy}/100`);
      setText("simValClimate", `${sliders.climateAction}/100`);
      setText("simValGeo", `${sliders.geopolitics}/100`);

      if (window.DashboardCharts) {
        const res = window.DashboardCharts.updateScenarioProjections(sliders);
        if (res) {
          setText("simOutWarming", `+${res.warming2050}°C`);
          setText("simOutClean", `${res.cleanShare2050}%`);
          setText("simOutExposed", `${res.exposedBillions2050}B`);
          setText("simOutPoverty", `${res.poverty2050}%`);
        }
      }
    }

    sliderIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", () => {
          document.querySelectorAll(".preset-btn").forEach((b) => b.classList.remove("active"));
          readSlidersAndUpdate();
        });
      }
    });

    // Preset scenario buttons
    document.querySelectorAll(".preset-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-preset");
        const preset = window.DASHBOARD_DATA.scenarios.presets[key];
        if (!preset) return;

        document.querySelectorAll(".preset-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        document.getElementById("simSliderDoi").value = preset.sliders.doiVelocity;
        document.getElementById("simSliderConv").value = preset.sliders.convergencePolicy;
        document.getElementById("simSliderClimate").value = preset.sliders.climateAction;
        document.getElementById("simSliderGeo").value = preset.sliders.geopolitics;

        setText("simPresetDescription", preset.description);
        readSlidersAndUpdate();
      });
    });

    readSlidersAndUpdate();
  }

  // ==========================================================================
  // 5. DATA EXPORT (CSV / JSON)
  // ==========================================================================
  function exportCountriesCsv() {
    const countries = window.DASHBOARD_DATA.countries;
    const headers = [
      "Code", "Country", "Region", "Population_M", "Archetype",
      "Convergence_DOI_Score", "Polycrisis_Exposure_Index",
      "GDP_PPP_2000", "GDP_PPP_2025", "Clean_Electricity_2025_Pct",
      "Digital_Adoption_2025_Pct", "Lethal_Heat_Days_2025",
      "Water_Stress_Score", "Debt_Vulnerability_Score", "Conflict_Risk_Score"
    ];

    const rows = countries.map((c) => [
      c.code, `"${c.name}"`, `"${c.region}"`, c.popM, `"${c.archetype}"`,
      c.convergenceScore, c.polycrisisExposure, c.gdpPpp2000, c.gdpPpp2025,
      c.cleanElecShare2025, c.digitalAdoption2025, c.heatDays2025,
      c.waterStress, c.debtVulnerability, c.conflictRisk
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "21st_century_convergence_vs_polycrisis_dataset.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ==========================================================================
  // 6. INITIALIZE EVENT LISTENERS
  // ==========================================================================
  function bindEvents() {
    // Global Year Scrubber
    const slider = document.getElementById("globalYearSlider");
    if (slider) {
      slider.addEventListener("input", (e) => {
        if (playInterval) stopTimelinePlayback();
        updateYearState(e.target.value);
      });
    }

    // Play / Pause Timeline Button
    const playBtn = document.getElementById("playTimelineBtn");
    if (playBtn) {
      playBtn.addEventListener("click", () => {
        if (playInterval) {
          stopTimelinePlayback();
        } else {
          if (selectedYearIdx >= 25) selectedYearIdx = 0;
          playBtn.innerHTML = "⏸ Pause";
          playInterval = setInterval(() => {
            if (selectedYearIdx < 25) {
              updateYearState(selectedYearIdx + 1);
            } else {
              stopTimelinePlayback();
            }
          }, 420);
        }
      });
    }

    function stopTimelinePlayback() {
      if (playInterval) {
        clearInterval(playInterval);
        playInterval = null;
      }
      const btn = document.getElementById("playTimelineBtn");
      if (btn) btn.innerHTML = "▶ Play 2000–2025";
    }

    // Navigation Tabs
    document.querySelectorAll(".nav-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-tab");
        document.querySelectorAll(".nav-tab-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const sections = document.querySelectorAll(".dashboard-section");
        if (target === "all") {
          sections.forEach((s) => s.classList.remove("hidden-section"));
        } else {
          sections.forEach((s) => {
            if (s.getAttribute("data-section") === target) {
              s.classList.remove("hidden-section");
            } else {
              s.classList.add("hidden-section");
            }
          });
        }
      });
    });

    // Chart Mode Toggle Chips
    document.querySelectorAll("[data-twin-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-twin-mode]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        window.DashboardCharts.updateTwinForceMode(btn.getAttribute("data-twin-mode"));
      });
    });

    document.querySelectorAll("[data-conv-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-conv-mode]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        window.DashboardCharts.updateConvergenceChartMode(btn.getAttribute("data-conv-mode"));
      });
    });

    document.querySelectorAll("[data-wright-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-wright-mode]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        window.DashboardCharts.updateWrightsLawMode(btn.getAttribute("data-wright-mode"));
      });
    });

    // Country Region Filter Pills
    document.querySelectorAll("[data-region-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-region-filter]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentRegionFilter = btn.getAttribute("data-region-filter");
        renderCountryTable();
        window.DashboardCharts.initCountryMatrixChart(currentRegionFilter);
      });
    });

    // Country Search Input
    const searchInput = document.getElementById("countrySearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", () => renderCountryTable());
    }

    // Country Table Sorting
    document.querySelectorAll("th[data-sort]").forEach((th) => {
      th.addEventListener("click", () => {
        const field = th.getAttribute("data-sort");
        if (currentSortField === field) {
          currentSortAsc = !currentSortAsc;
        } else {
          currentSortField = field;
          currentSortAsc = false;
        }
        renderCountryTable();
      });
    });

    // Theme Toggle
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        const root = document.documentElement;
        const isLight = root.getAttribute("data-theme") === "light";
        root.setAttribute("data-theme", isLight ? "dark" : "light");
        themeBtn.textContent = isLight ? "☀ Light Mode" : "☾ Dark Mode";
        window.DashboardCharts.refreshTheme();
      });
    }

    // Export CSV
    const exportBtn = document.getElementById("exportCsvBtn");
    if (exportBtn) {
      exportBtn.addEventListener("click", exportCountriesCsv);
    }

    // Methodology Modal
    const methBtn = document.getElementById("methodologyBtn");
    const methModal = document.getElementById("methodologyModalBackdrop");
    if (methBtn && methModal) {
      methBtn.addEventListener("click", () => methModal.classList.add("open"));
    }

    // Close Modals
    document.querySelectorAll(".modal-close-btn, .modal-backdrop").forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.target === el) {
          document.querySelectorAll(".modal-backdrop").forEach((m) => m.classList.remove("open"));
        }
      });
    });
  }

  return {
    init() {
      window.DashboardCharts.initAll();
      renderCompressionList();
      renderCountryTable();
      initScenarioSimulator();
      bindEvents();
      updateYearState(25);
    },
    openCountryModal
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  window.DashboardApp.init();
});

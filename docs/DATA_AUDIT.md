# TerraTwin Data Audit (Research-Aligned)

_Synchronized with `Copy of TerraTwin_FINAL_ALL_CRITICAL_HIGH_CORRECTED.xlsx` and `src/data/planetaryData.ts`._

## Provenance & Gate Rules

- **measured**: Directly reported from confirmed instruments or peer-reviewed studies at the named site under stated conditions.
- **modeled**: Regional/published topographic or qualitative mineralogical classification backed by confirmed literature.
- **incomplete (`null` / `NA`)**: Unestablished or non-comparable across scales/units/datums. Never replaced with zero or silently imputed.
- **ESI / IFS / RMHI Data Gate**: Because terrain RMS, polygon slope, harmonized air-vs-skin temperature, modal mineral wt%, and standardized water/ice wt% remain `NA/null` across the cross-planet matrix, composite numeric scoring returns `NA` until matched-scale, method-documented datasets are supplied.

## Verified Primary Citations & Measurements Retained

1. **Atacama Desert (Yungay Station & Composite Analog)**
   - McKay et al. (2003), `DOI:10.1089/153110703769016460`: Yungay station mean air temperature `16.5°C` (1995) and `16.6°C` (1996); observed extremes `37.9°C` and `−5.7°C` (Sep 1994–Sep 1998); `2.3 mm` rainfall event on `11 May 1997` with `65–85 h` liquid-water persistence beneath stones.
   - Cordero et al. (2014), `DOI:10.1039/C3PP50221J`: Peak dimensionless UV Index `20` at Chajnantor Plateau (`13 Jan 2013`, broken clouds) and `16` at Paranal Observatory (`9 Jan 2013`, cloudless).
   - USGS SIM 3326 / Hartley et al. (2005): Qualitative geology (evaporitic playa/salar, ignimbrite sheets, paleolake clay beds, nitrate-perchlorate regolith).
2. **Antarctica Dry Valleys (McMurdo)**
   - Bockheim et al. (2007), `DOI:10.1002/ppp.588`: Permafrost active-layer depths `<20 cm` (polar plateau), `20–45 cm` (inland), `45–70 cm` (coastal).
   - Kounaves et al. (2010), `DOI:10.1021/es9033606`: Natural perchlorate (`ClO₄⁻`) in soil and ice up to `1,100 µg/kg`.
   - USGS / Marchant et al. (2002): Beacon Supergroup sandstone, Ferrar Dolerite sills, cold desert regolith.
3. **Haughton Impact Structure (Devon Island)**
   - Osinski et al. (2005), `DOI:10.1111/j.1945-5100.2005.tb00145.x`: `~23 km` apparent diameter, `~16 km` estimated final rim diameter, impact-melt breccias, intra-crater lacustrine sediments.
   - Robertson & Mason (1975), `DOI:10.1038/255393a0`: Inner circular basin `~140 m` asl, annular ridge `~270 m` asl, regional plateau `~340–400 m` asl.
   - Imaging Spectroscopy (2020), `DOI:10.1029/2019JE006218`: Calcite, dolomite, gypsum, hydrated silica, and phyllosilicate lithologies (outcrop/sample areal abundances only).
4. **Death Valley (Badwater & Furnace Creek Basin)**
   - USGS OFR 93-272 (1993): Devil's Golf Course rough massive rock-salt unit `~95% NaCl`.
   - USGS OFR 84-743 / Bedinger et al. (1984): Furnace Creek Ranch annual precipitation `~50 mm/year`; Death Valley free-water-surface evaporation `>2,500 mm/year`.
   - USGS SIM 3084 / Workman et al. (2016) & USGS 3DEP: Park-wide relief endpoints `~−86 m` (Badwater Basin) to `~3,368 m` (Telescope Peak) as geographic context only; Desert Rock SURFRAD (Nevada) labeled as external radiation proxy.
5. **Iceland (Askja & Vikursandur)**
   - Geological Map of Iceland NI 1:250,000 / Gislason et al. (2002): Basaltic hotspot/rift volcanism, glacio-fluvial sandurs, subglacial palagonite tuff cones, pāhoehoe & ʻaʻā lavas.
6. **Hawaiʻi (Kīlauea & Mauna Kea Reference)**
   - Wright et al. (1975), `DOI:10.1093/petrology/16.1.110`: Whole-rock tholeiitic basalt chemical compositions (distinct from modal mineral wt%).
   - USGS I-2524 / Neal et al. (2019): Tholeiitic shield volcano, pāhoehoe & ʻaʻā flows, tephra cones, lava tubes (Thurston / Kazumura); Mauna Loa Observatory labeled as external radiation proxy.
7. **Canadian Arctic (Axel Heiberg & Lost Hammer Spring)**
   - Lay et al. (2013), `DOI:10.1128/AEM.00153-13` & Lay et al. (2022), `DOI:10.1038/s41396-022-01233-8`: Lost Hammer Spring discharge `~−5°C`, salinity `~24%`, bulk sulfate `10.0% (wt/wt)`, continuous permafrost up to `600 m`, regional mean annual air temp `~−15°C` (`<−40°C` winter).
   - GSC Map 1715A / Zent et al. (2010) & NOAA Eureka 10.5 m flux tower.

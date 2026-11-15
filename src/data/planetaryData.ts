import {
  ComparisonAxisScore,
  ComparisonResult,
  ComparisonWeights,
  DataQualityLevel,
  EarthAnalogSite,
  PlanetaryRegion,
  PlanetaryRegionId,
} from '../types/terratwin';
import heroEarthImg from '../assets/images/hero_planetary_earth_1794653803188.webp';
import moonMareImg from '../assets/images/moon_mare_surface_1794653805640.webp';
import marsJezeroImg from '../assets/images/mars_jezero_ridge_1794653804976.webp';
import analogAtacamaImg from '../assets/images/analog_atacama_desert_1794653805939.webp';
import analogAntarcticaImg from '../assets/images/analog_antarctica_valleys_1794653805708.webp';
import analogHaughtonImg from '../assets/images/analog_haughton_crater_1794653806549.webp';
import analogDeathValleyImg from '../assets/images/analog_death_valley_1794653807754.webp';
import analogIcelandImg from '../assets/images/analog_iceland_basalt_1794653807647.webp';
import analogHawaiiImg from '../assets/images/analog_hawaii_maunakea_1794653808859.webp';
import analogArcticImg from '../assets/images/analog_canadian_arctic_1794653809488.webp';

export const HERO_ASSETS = {
  earthOrbit: heroEarthImg,
  moonSurface: moonMareImg,
  marsSurface: marsJezeroImg,
};

export const PLANETARY_REGIONS: Record<PlanetaryRegionId, PlanetaryRegion> = {
  'moon-mare': {
    id: 'moon-mare',
    planet: 'moon',
    name: {
      en: 'Mare Tranquillitatis (Basaltic Maria)',
      ar: 'بحر السكون (السهول البازلتية القمرية)',
    },
    coordinatesLabel: '0.674° N, 23.473° E',
    missionContext: {
      en: 'Apollo 11 & Lunar Reconnaissance Orbiter LROC / Diviner Baseline',
      ar: 'مرجعية أبولو 11 ومستكشف القمر المداري LRO',
    },
    metrics: {
      meanTempC: null,
      tempMinC: -178,
      tempMaxC: 124,
      elevationM: null,
      meanSlopeDeg: null,
      roughnessIndexDeg: null,
      waterIcePct: null,
      atmosphericPressureKpa: 0,
      albedo: null,
    },
    metricQuality: {
      thermal: 'incomplete',
      elevation: 'incomplete',
      slope: 'incomplete',
      roughness: 'incomplete',
      waterIce: 'incomplete',
      mineralogy: 'modeled',
    },
    metricNotes: {
      waterIceNote: {
        en: 'Water/ice detections occur in selected lunar polar regions; no global or mare-wide wt% value is assigned without location-, depth-, and instrument-specific H2O-equivalent data.',
        ar: 'تحدث اكتشافات الجليد المائي في مناطق قطبية قمرية محددة؛ ولا تُعتمد نسبة وزنية عامة للبحار القمرية دون بيانات مكافئ H₂O محددة الموقع والعمق والأداة.',
      },
      elevationDatum: {
        en: 'Lunar global topographic extrema span −9.0 km to +10.7 km relative to the 1,737.4 km lunar reference radius (LOLA datum-specific; not directly comparable to local Earth MSL elevations).',
        ar: 'تمتد الحدود الطبوغرافية العالمية للقمر من −9.0 كم إلى +10.7 كم بالنسبة لنصف القطر المرجعي القمري 1,737.4 كم (مرجع LOLA؛ غير قابل للمقارنة المباشرة بارتفاعات سطح البحر الأرضية).',
      },
      nullFieldNote: {
        en: 'No universal lunar slope, site-polygon elevation, or centimeter-scale RMS roughness value is assigned in the research dataset (stored as null/NA). Surface atmospheric hydrology is null due to hard vacuum.',
        ar: 'لا تُعتمد قيمة رقمية عامة للانحدار القمري أو ارتفاع مضلع محدد أو خشونة السطح بالسنتيمتر في قاعدة البحث (تُحفظ كقيمة غير متوفرة/NA). الهيدرولوجيا السطحية فارغة بسبب الفراغ التام.',
      },
    },
    minerals: [
      { name: { en: 'Plagioclase Feldspar', ar: 'بلاجيوكليز فلسبار' }, formula: '(Ca,Na)(Al,Si)4O8', percentage: null },
      { name: { en: 'Clinopyroxene', ar: 'كلينوبيروكسين' }, formula: '(Ca,Mg,Fe)2Si2O6', percentage: null },
      { name: { en: 'Ilmenite (Qualitative Occurrence)', ar: 'إيلمنيت (وجود نوعي)' }, formula: 'FeTiO3', percentage: null },
      { name: { en: 'Olivine & Volcanic Glass', ar: 'أوليفين وزجاج بركاني' }, formula: '(Mg,Fe)2SiO4', percentage: null },
    ],
    geologicalFeatures: [
      { en: 'Basaltic mare units & flood lava plains', ar: 'وحدات البحار البازلتية وسهول الحمم الفيضية' },
      { en: 'Impact-gardened regolith and impact breccias', ar: 'تربة قمرية متفتتة وبريشيا تصادمية' },
      { en: 'Smooth mare basins vs high local blockiness near young craters (e.g., Tycho)', ar: 'أحواض بحار ملساء مقابل كتل صخرية عالية قرب الفوهات الحديثة (مثل تايكو)' },
    ],
    thermalProfile24h: [
      { hourOrSol: '00:00', tempC: -168 },
      { hourOrSol: '04:00', tempC: -178 },
      { hourOrSol: '08:00', tempC: -42 },
      { hourOrSol: '12:00', tempC: 121 },
      { hourOrSol: '16:00', tempC: 124 },
      { hourOrSol: '20:00', tempC: -129 },
    ],
    terrainProfile: [
      { distanceKm: 0, elevationM: -1820, landmark: { en: 'Basalt Plain', ar: 'سهل بازلتي' } },
      { distanceKm: 5, elevationM: -1910 },
      { distanceKm: 10, elevationM: -1740, landmark: { en: 'Wrinkle Ridge', ar: 'حافة التواء' } },
      { distanceKm: 15, elevationM: -1950 },
      { distanceKm: 20, elevationM: -2180, landmark: { en: 'Sinuous Rille', ar: 'أخدود حمم' } },
      { distanceKm: 25, elevationM: -1900 },
      { distanceKm: 30, elevationM: -1860 },
    ],
    adaptiveOverview: {
      explorer: {
        en: 'Dark volcanic plains formed billions of years ago when giant lava seas cooled on the Moon. Daylight equatorial surfaces can exceed +121°C while pre-dawn temperatures plunge near −178°C.',
        ar: 'سهول بركانية داكنة تشكلت قبل مليارات السنين عندما بردت بحار الحمم العملاقة على القمر. تتجاوز حرارة السطح الاستوائي نهارًا +121°م وتهبط قبل الفجر إلى نحو −178°م.',
      },
      student: {
        en: 'Lunar maria are basaltic basins containing plagioclase, pyroxene, olivine, and localized ilmenite (FeTiO3). Because the Moon lacks an atmosphere, equatorial temperatures swing roughly 300°C between day and night.',
        ar: 'البحار القمرية أحواض بازلتية تحوي البلاجيوكليز والبيروكسين والأوليفين والإيلمنيت الموضعي (FeTiO₃). وبسبب انعدام الغلاف الجوي، تتأرجح الحرارة الاستوائية بنحو 300°م بين النهار والليل.',
      },
      scientist: {
        en: 'Diviner lunar radiometry documents equatorial daytime maxima of ~387–397 K (+121°C to +124°C) and pre-dawn minima near 95 K (−178°C). Global lunar relief spans −9.0 km to +10.7 km (1,737.4 km radius), while Chang’E-4 LND recorded a lunar surface dose-equivalent rate of 1,369 µSv/day (1.369 mSv/day).',
        ar: 'توثق قياسات Diviner القمرية ذروة نهارية استوائية تبلغ ~387–397 كلفن (+121°م إلى +124°م) وحدًا أدنى قبل الفجر يقارب 95 كلفن (−178°م). تمتد التضاريس القمرية عالميًا من −9.0 كم إلى +10.7 كم، وسجل جهاز LND على تشانغ آه-4 معدل جرعة مكافئة 1,369 ميكروسيفرت/يوم (1.369 ملي سيفرت/يوم).',
      },
      pioneer: {
        en: 'Project screening targets for lunar base siting evaluate >80% annual solar illumination, <5° landing-zone slope (<2° construction footprint), >90% DTE line-of-sight, and FeTiO3 >8 wt% as a provisional ISRU screening hypothesis requiring site-specific mineralogical and beneficiation validation.',
        ar: 'تقيّم أهداف الفرز الأولية لقواعد القمر إضاءة شمسية سنوية >80%، وانحدار هبوط <5° (<2° للبناء)، ورؤية مباشرة للأرض >90%، وفرضية فرز أولي للإيلمنيت FeTiO₃ >8% بالوزن تتطلب تحققًا معدنيًا وهندسيًا خاصًا بالموقع.',
      },
    },
    recommendedAnalogs: ['hawaii', 'iceland', 'haughton'],
    sources: [
      {
        id: 'williams-2017-diviner',
        title: 'The global surface temperatures of the Moon as measured by the Diviner Lunar Radiometer Experiment',
        institution: 'Icarus 283, 300–325',
        year: 2017,
        identifier: 'DOI:10.1016/j.icarus.2016.08.012',
        verification: 'confirmed',
        supports: 'Equatorial daytime maximum of ~387–397 K (+121°C to +124°C) and pre-dawn minimum of ~95 K (−178°C) (zonal values, not single-coordinate site measurements).',
      },
      {
        id: 'nasa-moon-weather',
        title: 'Weather on the Moon — Lunar Surface Temperature Extremes',
        institution: 'NASA Science',
        year: 2024,
        identifier: 'https://science.nasa.gov/moon/weather-on-the-moon/',
        verification: 'confirmed',
        supports: 'Daylight equatorial surface temperatures exceeding +121°C and permanently shadowed polar craters below −246°C.',
      },
    ],
  },
  'moon-south-pole': {
    id: 'moon-south-pole',
    planet: 'moon',
    name: {
      en: 'Shackleton Rim & South Polar Highlands',
      ar: 'حافة شاكلتون والمرتفعات القطبية الجنوبية',
    },
    coordinatesLabel: '89.540° S, 129.780° E',
    missionContext: {
      en: 'Artemis Exploration Zone · LRO Diviner / LEND Polar Cold Traps',
      ar: 'منطقة استكشاف أرتميس · بيانات LRO Diviner وLEND للمصائد الباردة',
    },
    metrics: {
      meanTempC: null,
      tempMinC: -246,
      tempMaxC: null,
      elevationM: null,
      meanSlopeDeg: null,
      roughnessIndexDeg: null,
      waterIcePct: null,
      atmosphericPressureKpa: 0,
      albedo: null,
    },
    metricQuality: {
      thermal: 'incomplete',
      elevation: 'incomplete',
      slope: 'incomplete',
      roughness: 'incomplete',
      waterIce: 'incomplete',
      mineralogy: 'modeled',
    },
    metricNotes: {
      waterIceNote: {
        en: 'No universal polar wt% range is assigned: lunar polar water/ice detections are heterogeneous and depend on exact coordinates, depth interval, footprint, instrument (e.g., LRO LEND / LCROSS), and H2O-equivalent calibration. (>5 wt% at 1–2 m depth is a proposed screening target only.)',
        ar: 'لا تُعتمد نسبة وزنية قطبية عامة: اكتشافات الجليد القمري متباينة وتعتمد على الإحداثيات الدقيقة والعمق والبصمة المكانية والأداة ومعايرة مكافئ H₂O. (نسبة >5% بالوزن على عمق 1–2 م هي هدف فرز أولي مقترح فقط.)',
      },
      elevationDatum: {
        en: 'Referenced to 1,737.4 km lunar reference radius (LOLA global extrema −9.0 km to +10.7 km; no single site-polygon elevation assigned here).',
        ar: 'مقاس بالنسبة لنصف القطر المرجعي القمري 1,737.4 كم (المدى العالمي −9.0 كم إلى +10.7 كم؛ لا يُعتمد ارتفاع لمضلع محدد هنا).',
      },
      nullFieldNote: {
        en: 'Site-specific mean temperature, polygon elevation, slope, roughness, and bulk water wt% remain null/NA until coordinate-specific LOLA/Diviner/neutron datasets are supplied.',
        ar: 'متوسط الحرارة وارتفاع المضلع والانحدار والخشونة ونسبة الماء الوزنية تظل غير متوفرة (null/NA) لحين توفير بيانات LOLA/Diviner/النيوترونات الخاصة بالإحداثيات المحددة.',
      },
    },
    minerals: [
      { name: { en: 'Anorthositic Plagioclase', ar: 'بلاجيوكليز أنورثوسيتي' }, formula: 'CaAl2Si2O8', percentage: null },
      { name: { en: 'Orthopyroxene', ar: 'أورثوبيروكسين' }, formula: '(Mg,Fe)SiO3', percentage: null },
      { name: { en: 'Localized Polar Water Ice (PSR)', ar: 'جليد ماء قطبي موضعي (PSR)' }, formula: 'H2O(s)', percentage: null },
      { name: { en: 'Olivine & Impact Breccia', ar: 'أوليفين وبريشيا تصادمية' }, formula: '(Mg,Fe)2SiO4', percentage: null },
    ],
    geologicalFeatures: [
      { en: 'Anorthositic/feldspathic highland massif & impact breccias', ar: 'كتل المرتفعات الأنورثوسيتية والفلسباثية والبريشيا التصادمية' },
      { en: 'Deep permanently shadowed regions (PSRs) measured below −246°C', ar: 'مناطق دائمة الظل عميقة قِيست دون −246°م' },
      { en: 'High-relief crater rims requiring coordinate-specific LOLA raytracing', ar: 'حواف فوهات مرتفعة تتطلب تتبع أشعة LOLA خاصًا بالإحداثيات' },
    ],
    thermalProfile24h: [
      { hourOrSol: '00:00', tempC: -238 },
      { hourOrSol: '04:00', tempC: -246 },
      { hourOrSol: '08:00', tempC: -180 },
      { hourOrSol: '12:00', tempC: -110 },
      { hourOrSol: '16:00', tempC: -140 },
      { hourOrSol: '20:00', tempC: -215 },
    ],
    terrainProfile: [
      { distanceKm: 0, elevationM: 1180 },
      { distanceKm: 5, elevationM: 1460, landmark: { en: 'Shackleton Rim', ar: 'حافة شاكلتون' } },
      { distanceKm: 10, elevationM: -620 },
      { distanceKm: 15, elevationM: -2740, landmark: { en: 'PSR Cold Trap', ar: 'مصيدة الظل الدائم' } },
      { distanceKm: 20, elevationM: -940 },
      { distanceKm: 25, elevationM: 1290, landmark: { en: 'Connecting Ridge', ar: 'الحافة المتصلة' } },
      { distanceKm: 30, elevationM: 880 },
    ],
    adaptiveOverview: {
      explorer: {
        en: 'At the lunar South Pole, sunlight grazes crater rims while deep permanently shadowed floors stay colder than −246°C, trapping volatile water ice in selected cold traps.',
        ar: 'عند القطب الجنوبي للقمر، تلامس أشعة الشمس حواف الفوهات بينما تبقى القيعان دائمة الظل أبرد من −246°م، محتجزةً جليد الماء في مصائد باردة محددة.',
      },
      student: {
        en: 'Because the Moon’s axial tilt is small, deep polar craters never receive direct sunlight. NASA LRO Diviner measured permanently shadowed surfaces below −246°C, while orbital neutron spectroscopy and LCROSS detected heterogeneous water ice.',
        ar: 'بسبب صغر ميل محور القمر، لا تصل أشعة الشمس المباشرة إلى قيعان الفوهات القطبية العميقة. قاس جهاز Diviner درجات حرارة دون −246°م في الظل الدائم، ورصدت القياسات الطيفية والنيوترونية جليد ماء متباين التوزيع.',
      },
      scientist: {
        en: 'Permanently shadowed polar surfaces have been measured below −246°C by LRO Diviner (not a universal minimum). Polar water-ice abundance is location-, depth-, and instrument-dependent (e.g., LCROSS Cabeus plume vs LRO LEND neutron suppression); no blanket wt% range is valid across all polar coordinates.',
        ar: 'قِيسَت الأسطح القطبية دائمة الظل دون −246°م بواسطة LRO Diviner (وليست حدًا أدنى عالميًا). تتباين وفرة الجليد القطبي حسب الموقع والعمق والأداة؛ ولا تصح نسبة وزنية موحدة لكل الإحداثيات القطبية.',
      },
      pioneer: {
        en: 'Moon base screening targets include >80% annual illumination, >5 wt% H2O-equivalent ice at 1–2 m proposed investigation depth, >100 kPa bearing strength (>85% relative density), <5° landing slope (<2° construction footprint), and >90% DTE line-of-sight—all provisional design targets requiring coordinate-specific validation.',
        ar: 'تشمل أهداف الفرز الأولية لقاعدة قمرية إضاءة سنوية >80%، وجليدًا مكافئًا للماء >5% على عمق 1–2 م، وقدرة تحمل >100 كيلوباسكال (>85% كثافة نسبية)، وانحدار هبوط <5° (<2° للبناء)، ورؤية مباشرة للأرض >90%—وجميعها أهداف تصميم أولية تتطلب تحققًا خاصًا بالإحداثيات.',
      },
    },
    recommendedAnalogs: ['antarctica', 'haughton', 'canadian-arctic'],
    sources: [
      {
        id: 'colaprete-2010-lcross',
        title: 'Detection of Water in the LCROSS Ejecta Plume',
        institution: 'Science 330, 463–468',
        year: 2010,
        identifier: 'DOI:10.1126/science.1186986',
        verification: 'confirmed',
        supports: 'Localized polar impact plume detection at Cabeus crater; demonstrates heterogeneous polar water-ice occurrence rather than a universal lunar wt% range.',
      },
      {
        id: 'nasa-moon-weather-pole',
        title: 'Weather on the Moon — Permanently Shadowed Polar Regions',
        institution: 'NASA Science',
        year: 2024,
        identifier: 'https://science.nasa.gov/moon/weather-on-the-moon/',
        verification: 'confirmed',
        supports: 'Deep permanently shadowed polar surfaces measured below −246°C.',
      },
    ],
  },
  'mars-jezero': {
    id: 'mars-jezero',
    planet: 'mars',
    name: {
      en: 'Jezero Crater & Ancient River Delta',
      ar: 'فوهة جيزيرو ودلتا النهر القديمة',
    },
    coordinatesLabel: '18.380° N, 77.580° E',
    missionContext: {
      en: 'Mars 2020 Perseverance Rover · MRO CRISM & HiRISE Baseline',
      ar: 'مركبة المثابرة 2020 · قياسات CRISM وHiRISE المدارية',
    },
    metrics: {
      meanTempC: null,
      tempMinC: null,
      tempMaxC: null,
      elevationM: null,
      meanSlopeDeg: null,
      roughnessIndexDeg: null,
      waterIcePct: null,
      atmosphericPressureKpa: 0.65,
      albedo: null,
    },
    metricQuality: {
      thermal: 'incomplete',
      elevation: 'incomplete',
      slope: 'incomplete',
      roughness: 'incomplete',
      waterIce: 'incomplete',
      mineralogy: 'modeled',
    },
    metricNotes: {
      waterIceNote: {
        en: 'Water ice and hydrated minerals occur in selected Martian settings, but abundance is location-, depth-, and method-dependent; no universal wt% range is assigned in the research dataset.',
        ar: 'يوجد الجليد المائي والمعادن المائية في بيئات مريخية محددة، لكن الوفرة تعتمد على الموقع والعمق وطريقة القياس؛ ولا تُعتمد نسبة وزنية عامة في قاعدة البحث.',
      },
      elevationDatum: {
        en: 'Global Mars topography spans −8.2 km to +21.2 km relative to the Mars areoid (datum-specific; site-polygon MOLA elevation requires documented DEM product and datum metadata).',
        ar: 'تمتد تضاريس المريخ العالمية من −8.2 كم إلى +21.2 كم بالنسبة إلى مرجع Mars Areoid (تتطلب بيانات الارتفاع لمضلع محدد توثيق منتج MOLA والمرجع).',
      },
      nullFieldNote: {
        en: 'Per the Comparison Matrix, no universal numeric Martian temperature, slope, roughness, or water wt% range is assigned without a cited product, footprint, season, and local time (stored as null/NA).',
        ar: 'وفق مصفوفة المقارنة، لا تُعتمد قيم رقمية عامة للحرارة أو الانحدار أو الخشونة أو نسبة الماء على المريخ دون منتج وبصمة وموسم وتوقيت محلي موثق (تُحفظ كـ null/NA).',
      },
    },
    minerals: [
      { name: { en: 'Basaltic Plagioclase & Pyroxene', ar: 'بلاجيوكليز وبيروكسين بازلتي' }, formula: '(Ca,Na)(Al,Si)4O8', percentage: null },
      { name: { en: 'Fe/Mg Smectite Phyllosilicates', ar: 'فيلوسيليكات سمكتيت الحديد والمغنيسيوم' }, formula: 'Na0.3(Fe,Mg)2Si4O10(OH)2', percentage: null },
      { name: { en: 'Ferric Oxides & Hematite', ar: 'أكاسيد الحديديك والهيماتيت' }, formula: 'Fe2O3', percentage: null },
      { name: { en: 'Carbonates & Sulfates', ar: 'كربونات وكبريتات' }, formula: 'MgCO3 / CaSO4', percentage: null },
    ],
    geologicalFeatures: [
      { en: 'Basaltic volcanic terrains & aqueously altered igneous floor units', ar: 'تضاريس بركانية بازلتية ووحدات نارية متغيرة مائيًا' },
      { en: 'Sedimentary delta deposits with sulfates, carbonates & phyllosilicates', ar: 'رواسب دلتا رسوبية تحوي كبريتات وكربونات وفيلوسيليكات' },
      { en: 'Hummocky regolith, wind-scoured megaripples & blocky impact ejecta', ar: 'حطام صخري متموج وتموجات رملية ضخمة ومقذوفات تصادمية' },
    ],
    thermalProfile24h: [
      { hourOrSol: '00:00', tempC: -79 },
      { hourOrSol: '04:00', tempC: -90 },
      { hourOrSol: '08:00', tempC: -56 },
      { hourOrSol: '12:00', tempC: -4 },
      { hourOrSol: '16:00', tempC: 6 },
      { hourOrSol: '20:00', tempC: -52 },
    ],
    terrainProfile: [
      { distanceKm: 0, elevationM: -1880, landmark: { en: 'Crater Rim', ar: 'حافة الفوهة' } },
      { distanceKm: 5, elevationM: -2240, landmark: { en: 'Neretva Valley', ar: 'وادي نيريتفا' } },
      { distanceKm: 10, elevationM: -2360, landmark: { en: 'Delta Escarpment', ar: 'جرف الدلتا' } },
      { distanceKm: 15, elevationM: -2520, landmark: { en: 'Basalt Floor', ar: 'القاع البازلتي' } },
      { distanceKm: 20, elevationM: -2560 },
      { distanceKm: 25, elevationM: -2490 },
      { distanceKm: 30, elevationM: -2540 },
    ],
    adaptiveOverview: {
      explorer: {
        en: 'Over 3.5 billion years ago, a river carved channels into Jezero Crater and deposited a sedimentary delta—preserving clays, carbonates, and sulfates where ancient water once flowed.',
        ar: 'قبل أكثر من 3.5 مليار سنة، حفر نهر قديم قنوات داخل فوهة جيزيرو ورسب دلتا رسوبية تحفظ معادن الطين والكربونات والكبريتات التي تشكلت بفعل الماء القديم.',
      },
      student: {
        en: 'Jezero combines pyroxene-, olivine-, and plagioclase-bearing basaltic rocks with phyllosilicate clays, carbonates, and sulfates. Because Martian surface temperature varies strongly with latitude, season, local time, and thermal inertia, single universal numbers are avoided.',
        ar: 'تجمع فوهة جيزيرو بين الصخور البازلتية (البيروكسين والأوليفين والبلاجيوكليز) ومعادن الطين والكربونات والكبريتات. ولأن حرارة سطح المريخ تتغير بشدة حسب خط العرض والموسم والتوقيت المحلي والقصور الحراري، يُتجنب تعميم أرقام موحدة.',
      },
      scientist: {
        en: 'Perseverance core sampling confirms aqueously altered igneous floor units with void-filling sulfates and perchlorates alongside deltaic phyllosilicates and carbonates. Global Mars relief spans −8.2 km to +21.2 km relative to the Mars areoid; site-level numeric temperature, slope, and RMS roughness remain null/NA unless tied to a specific TES/THEMIS/MCS/HiRISE/MOLA product and polygon.',
        ar: 'تؤكد عينات Perseverance وجود وحدات نارية متغيرة بالماء تحوي كبريتات وبيركلورات مع فيلوسيليكات وكربونات الدلتا. تمتد تضاريس المريخ عالميًا من −8.2 كم إلى +21.2 كم بالنسبة لمرجع Areoid، بينما تظل الحرارة والانحدار والخشونة الرقمية غير متوفرة (null/NA) ما لم تُربط بمنتج ومضلع محددين.',
      },
      pioneer: {
        en: 'Surface mobility and ISRU planning across hummocky regolith, wind-scoured megaripples, and blocky ejecta require rover-specific slope limits, matched-baseline microtopography, and validated terramechanics rather than uncalibrated thresholds.',
        ar: 'يتطلب تخطيط الحركة واستغلال الموارد فوق الحطام المتموج والتموجات الريحية والمقذوفات الصخرية حدود انحدار خاصة بالمركبة وطوبوغرافيا دقيقة موحدة المقياس ونماذج ميكانيكا تربة معايرة.',
      },
    },
    recommendedAnalogs: ['atacama', 'iceland', 'death-valley', 'antarctica'],
    sources: [
      {
        id: 'farley-2022-jezero',
        title: 'Aqueously altered igneous rocks sampled on the floor of Jezero crater, Mars',
        institution: 'Science 377, eabo2196',
        year: 2022,
        identifier: 'DOI:10.1126/science.abo2196',
        verification: 'confirmed',
        supports: 'Crater floor igneous units altered by liquid water with sulfates and perchlorates in voids (qualitative mineralogical context).',
      },
    ],
  },
  'mars-gale': {
    id: 'mars-gale',
    planet: 'mars',
    name: {
      en: 'Gale Crater & Aeolis Mons (Mount Sharp)',
      ar: 'فوهة غيل وجبل أيوليس مونس (شارب)',
    },
    coordinatesLabel: '5.400° S, 137.800° E',
    missionContext: {
      en: 'MSL Curiosity Rover · RAD, SAM & CheMin In-Situ Telemetry',
      ar: 'مركبة كيوريوسيتي · قياسات RAD وSAM وCheMin الميدانية',
    },
    metrics: {
      meanTempC: null,
      tempMinC: null,
      tempMaxC: null,
      elevationM: null,
      meanSlopeDeg: null,
      roughnessIndexDeg: null,
      waterIcePct: null,
      atmosphericPressureKpa: 0.78,
      albedo: null,
    },
    metricQuality: {
      thermal: 'incomplete',
      elevation: 'incomplete',
      slope: 'incomplete',
      roughness: 'incomplete',
      waterIce: 'incomplete',
      mineralogy: 'modeled',
    },
    metricNotes: {
      waterIceNote: {
        en: 'Hydrated minerals and sulfates occur in Gale strata, but no single universal Mars water/ice wt% range is assigned in the research dataset.',
        ar: 'توجد معادن مائية وكبريتات في طبقات غيل، لكن لا تُعتمد نسبة وزنية عامة موحدة للماء أو الجليد في قاعدة البحث.',
      },
      elevationDatum: {
        en: 'Global Mars topography spans −8.2 km to +21.2 km relative to the Mars areoid (datum-specific).',
        ar: 'تمتد تضاريس المريخ العالمية من −8.2 كم إلى +21.2 كم بالنسبة إلى مرجع Mars Areoid.',
      },
      nullFieldNote: {
        en: 'Curiosity RAD measured a mission-period average GCR dose-equivalent rate of 0.64 ± 0.12 mSv/day (7 Aug 2012–1 Jun 2013; ≈234 ± 44 mSv/yr arithmetic annualization). Universal temperature, slope, roughness, and water wt% remain null/NA.',
        ar: 'قاس جهاز Curiosity RAD متوسط معدل جرعة إشعاعية مجرية 0.64 ± 0.12 ملي سيفرت/يوم (7 أغسطس 2012–1 يونيو 2013؛ أي ≈234 ± 44 ملي سيفرت/سنة حسابيًا). تظل قيم الحرارة والانحدار والخشونة ونسبة الماء فارغة (null/NA).',
      },
    },
    minerals: [
      { name: { en: 'Ca & Mg Sulfates (Gypsum / Anhydrite)', ar: 'كبريتات الكالسيوم والمغنيسيوم (جبس / أنهيدريت)' }, formula: 'CaSO4·2H2O', percentage: null },
      { name: { en: 'Basaltic Silicates & Phyllosilicates', ar: 'سيليكات بازلتية وفيلوسيليكات' }, formula: 'SiO2 / Al2O3', percentage: null },
      { name: { en: 'Ferric Oxides & Hematite', ar: 'أكاسيد الحديديك والهيماتيت' }, formula: 'Fe2O3', percentage: null },
      { name: { en: 'Perchlorate Salts (ClO4-)', ar: 'أملاح البيركلورات' }, formula: 'Mg(ClO4)2', percentage: null },
    ],
    geologicalFeatures: [
      { en: 'Layered sedimentary deposits & sulfate-bearing transition strata', ar: 'رواسب طبقية وطبقات تحول غنية بالكبريتات' },
      { en: 'Basaltic volcanic materials, ferric oxides & phyllosilicates', ar: 'مواد بركانية بازلتية وأكاسيد الحديديك وفيلوسيليكات' },
      { en: 'Hummocky regolith, wind-scoured megaripples & blocky impact ejecta', ar: 'حطام صخري متموج وتموجات رملية ضخمة ومقذوفات تصادمية' },
    ],
    thermalProfile24h: [
      { hourOrSol: '00:00', tempC: -74 },
      { hourOrSol: '04:00', tempC: -86 },
      { hourOrSol: '08:00', tempC: -44 },
      { hourOrSol: '12:00', tempC: 11 },
      { hourOrSol: '16:00', tempC: 17 },
      { hourOrSol: '20:00', tempC: -46 },
    ],
    terrainProfile: [
      { distanceKm: 0, elevationM: -4510, landmark: { en: 'Aeolis Palus', ar: 'سهل أيوليس' } },
      { distanceKm: 8, elevationM: -4460, landmark: { en: 'Sulfate Unit', ar: 'وحدة الكبريتات' } },
      { distanceKm: 16, elevationM: -3620 },
      { distanceKm: 24, elevationM: -1900 },
      { distanceKm: 32, elevationM: 480, landmark: { en: 'Mount Sharp', ar: 'جبل شارب' } },
      { distanceKm: 40, elevationM: -2400 },
      { distanceKm: 48, elevationM: -4350 },
    ],
    adaptiveOverview: {
      explorer: {
        en: 'Mount Sharp rises inside Gale Crater, preserving layered sedimentary rocks that record Mars shifting from ancient lakebeds to salty, sulfate-rich desert terrains.',
        ar: 'يرتفع جبل شارب داخل فوهة غيل، حافظًا طبقات صخرية رسوبية تسجل تحول المريخ من بحيرات قديمة إلى تضاريس صحراوية ملحية غنية بالكبريتات.',
      },
      student: {
        en: 'Curiosity documented lakebed mudstones transitioning into sulfate- and perchlorate-bearing strata—chemically analogous to evaporite basins like the Atacama Desert and Death Valley.',
        ar: 'وثّقت مركبة كيوريوسيتي انتقال الطين البحيري إلى طبقات غنية بالكبريتات والبيركلورات—وهو ما يماثل كيميائيًا أحواض المتبخرات مثل صحراء أتاكاما ووادي الموت.',
      },
      scientist: {
        en: 'Curiosity RAD measured an average GCR dose-equivalent rate of 0.64 ± 0.12 mSv/day between 7 Aug 2012 and 1 Jun 2013 (≈234 ± 44 mSv/year arithmetic annualization, not a separate annual observation). No universal temperature or slope range is assigned across variable Martian local times and terrains.',
        ar: 'قاس جهاز Curiosity RAD متوسط معدل جرعة إشعاعية مجرية 0.64 ± 0.12 ملي سيفرت/يوم بين 7 أغسطس 2012 و1 يونيو 2013 (≈234 ± 44 ملي سيفرت/سنة حسابيًا). ولا تُعتمد نطاقات حرارة أو انحدار عامة عبر التضاريس والأوقات المتغيرة.',
      },
      pioneer: {
        en: 'Surface radiation shielding (0.64 ± 0.12 mSv/day GCR baseline) and perchlorate/sulfate dust management are critical mission constraints validated through terrestrial hyper-arid analogs.',
        ar: 'تُعد الحماية من الإشعاع السطحي (خط أساس 0.64 ± 0.12 ملي سيفرت/يوم) وإدارة غبار البيركلورات والكبريتات قيودًا تشغيلية حاسمة تُختبر في النظائر الأرضية شديدة الجفاف.',
      },
    },
    recommendedAnalogs: ['atacama', 'death-valley', 'canadian-arctic'],
    sources: [
      {
        id: 'hassler-2014-rad',
        title: 'Mars’ Surface Radiation Environment Measured with the Mars Science Laboratory’s Curiosity Rover',
        institution: 'Science 343, 1244797 (Curiosity RAD)',
        year: 2014,
        identifier: 'DOI:10.1126/science.1244797',
        verification: 'confirmed',
        supports: 'Average GCR dose-equivalent rate of 0.64 ± 0.12 mSv/day on the Martian surface (7 Aug 2012–1 Jun 2013).',
      },
    ],
  },
};

export const EARTH_ANALOG_SITES: EarthAnalogSite[] = [
  {
    id: 'atacama',
    name: { en: 'Atacama Desert (Yungay Station & Composite Analog)', ar: 'صحراء أتاكاما (محطة يونغاي والنظير المركب)' },
    region: { en: 'Antofagasta Region', ar: 'إقليم أنتوفاغاستا' },
    country: { en: 'Chile', ar: 'تشيلي' },
    coordinates: { lat: -24.095, lng: -69.92, label: '24.095° S, 69.920° W' },
    category: 'hyper-arid',
    primaryTwin: 'mars',
    image: analogAtacamaImg,
    researchFocus: {
      en: 'Hyper-arid evaporitic playa (salar), nitrate-perchlorate regolith, Yungay air-temperature & rain-event observations, and high UV Index',
      ar: 'سبخات متبخرة شديدة الجفاف وحطام نترات-بيركلورات ورصد حرارة الهواء وأحداث المطر في يونغاي ومؤشر UV المرتفع',
    },
    geologyTags: [
      { en: 'Hyper-Arid Playa (Salar)', ar: 'سبخة شديدة الجفاف' },
      { en: 'Nitrate-Perchlorate Regolith', ar: 'حطام نترات وبيركلورات' },
      { en: 'Peak UVI 20 (Chajnantor)', ar: 'ذروة UV تبلغ 20' },
    ],
    adaptiveSummary: {
      explorer: {
        en: 'In Chile’s Atacama Desert, Yungay station recorded only a 2.3 mm rainfall event (11 May 1997) across a 4-year campaign, while high-altitude plateaus reached a peak UV Index of 20.',
        ar: 'في صحراء أتاكاما بتشيلي، سجلت محطة يونغاي حدث مطر وحيدًا بمقدار 2.3 ملم (11 مايو 1997) خلال حملة 4 سنوات، بينما بلغ مؤشر الأشعة فوق البنفسجية ذروته عند 20 في الهضاب المرتفعة.',
      },
      student: {
        en: 'At Yungay station (McKay et al., 2003), annual mean air temperatures were 16.5°C (1995) and 16.6°C (1996), with observed air extremes of 37.9°C and −5.7°C. After the 2.3 mm rain on 11 May 1997, liquid moisture beneath stones persisted for ~65–85 hours.',
        ar: 'في محطة يونغاي (McKay et al., 2003)، بلغ متوسط حرارة الهواء السنوي 16.5°م (1995) و16.6°م (1996) مع حدود مرصودة 37.9°م و−5.7°م. وبعد مطر 2.3 ملم في 11 مايو 1997، استمرت الرطوبة السائلة تحت الحجارة نحو 65–85 ساعة.',
      },
      scientist: {
        en: 'Measured Yungay station air temperatures: 16.5°C (1995) and 16.6°C (1996) means; 37.9°C max and −5.7°C min (Sep 1994–Sep 1998). Peak dimensionless UVI reached 20 at Chajnantor Plateau (13 Jan 2013, broken clouds) and 16 at Paranal (9 Jan 2013, cloudless). Site-polygon elevation, numeric RMS roughness, and bulk mineral wt% remain unestablished (null/NA).',
        ar: 'قياسات حرارة الهواء في يونغاي: متوسط 16.5°م (1995) و16.6°م (1996)، وذروة 37.9°م وأدنى −5.7°م (سبتمبر 1994–سبتمبر 1998). بلغ مؤشر UV اللابعدي ذروته 20 في هضبة تشاخنانتور (13 يناير 2013) و16 في بارانال (9 يناير 2013). تظل قيم الارتفاع المضلعي والخشونة الرقمية والنسب الوزنية للمعادن غير مثبتة (null/NA).',
      },
      pioneer: {
        en: 'Evaporitic salar, ignimbrite sheets, paleolake clays, and nitrate-perchlorate regolith provide qualitative geochemical analogs for Mars; regional slope summaries (0°–3° basin floors, 3°–8° fans, 15°–35° flanks) are held as provisional literature context only and excluded from quantitative scoring.',
        ar: 'توفر السبخات المتبخرة وصفائح الإغنمبريت وطين البحيرات القديمة وحطام النترات والبيركلورات نظيرًا جيوكيميائيًا نوعيًا للمريخ؛ بينما تُحفظ ملخصات الانحدار الإقليمية (0°–3° قيعان، 3°–8° مراوح، 15°–35° سفوح) كسياق وصفي مؤقت مستبعد من التقييم الكمي.',
      },
    },
    metrics: {
      meanTempC: 16.55,
      tempMinC: -5.7,
      tempMaxC: 37.9,
      elevationM: null,
      meanSlopeDeg: null,
      roughnessIndexDeg: null,
      waterIcePct: null,
      atmosphericPressureKpa: null,
      albedo: null,
    },
    metricQuality: {
      thermal: 'measured',
      elevation: 'incomplete',
      slope: 'incomplete',
      roughness: 'incomplete',
      waterIce: 'incomplete',
      mineralogy: 'incomplete',
    },
    missingDataNotes: {
      en: 'Elevation (composite analog without single polygon), numeric slope (provisional literature synthesis: basin floors 0°–3°, alluvial fans 3°–8°, flanks 15°–35°), numeric RMS roughness, and bulk mineral wt% are not established (null/NA). Measured station records: Yungay air temp 16.5°C (1995) / 16.6°C (1996), range −5.7°C to 37.9°C; 2.3 mm rain on 11 May 1997 (65–85 h under-stone moisture); Peak UVI 20 at Chajnantor (13 Jan 2013) & 16 at Paranal (9 Jan 2013).',
      ar: 'الارتفاع (نظير مركب بلا مضلع واحد)، والانحدار الرقمي (سياق أدبي مؤقت: القيعان 0°–3°، المراوح 3°–8°، السفوح 15°–35°)، والخشونة الرقمية، والنسب الوزنية للمعادن غير مثبتة (null/NA). السجلات المقيسة: حرارة هواء يونغاي 16.5°م (1995) و16.6°م (1996) بمدى −5.7°م إلى 37.9°م؛ حدث مطر 2.3 ملم في 11 مايو 1997 (رطوبة 65–85 ساعة تحت الحجارة)؛ وذروة UVI تبلغ 20 في تشاخنانتور (13 يناير 2013) و16 في بارانال (9 يناير 2013).',
    },
    minerals: [
      { name: { en: 'Evaporitic Halite & Nitrates (Qualitative)', ar: 'هاليت ونترات متبخرة (نوعي)' }, formula: 'NaCl / NaNO3', percentage: null },
      { name: { en: 'Gypsum & Anhydrite Sulfates (Qualitative)', ar: 'كبريتات الجبس والأنهيدريت (نوعي)' }, formula: 'CaSO4', percentage: null },
      { name: { en: 'Paleolake Clay Beds (Qualitative)', ar: 'طبقات طين البحيرات القديمة (نوعي)' }, formula: 'Phyllosilicates', percentage: null },
      { name: { en: 'Nitrate-Perchlorate Regolith (Qualitative)', ar: 'حطام نترات وبيركلورات (نوعي)' }, formula: 'ClO4-', percentage: null },
    ],
    geologicalFeatures: [
      { en: 'Hyper-arid evaporitic playa (salar) & nitrate-perchlorate regolith', ar: 'سبخة متبخرات شديدة الجفاف وحطام نترات وبيركلورات' },
      { en: 'Ignimbrite volcanic sheets & paleolake clay beds (USGS SIM 3326)', ar: 'صفائح إغنمبريت بركانية وطبقات طين بحيرية قديمة' },
      { en: 'Yungay rain event: 2.3 mm (11 May 1997) with 65–85 h under-stone liquid persistence', ar: 'حدث مطر يونغاي: 2.3 ملم (11 مايو 1997) وبقاء رطوبة سائلة 65–85 ساعة تحت الحجارة' },
    ],
    thermalProfile24h: [
      { hourOrSol: '00:00', tempC: 4.0 },
      { hourOrSol: '04:00', tempC: -5.7 },
      { hourOrSol: '08:00', tempC: 11.5 },
      { hourOrSol: '12:00', tempC: 29.0 },
      { hourOrSol: '16:00', tempC: 37.9 },
      { hourOrSol: '20:00', tempC: 14.0 },
    ],
    pioneerIsruNotes: {
      en: 'Yungay station observations (McKay et al., 2003) and high-UV Chajnantor/Paranal records (Cordero et al., 2014) anchor Mars life-detection instrument testing and UV radiation degradation trials.',
      ar: 'تُستخدم قياسات محطة يونغاي (McKay et al., 2003) وسجلات الأشعة فوق البنفسجية في تشاخنانتور وبارانال (Cordero et al., 2014) لمعايرة أجهزة الكشف عن الحياة واختبارات تحمل الأشعة فوق البنفسجية.',
    },
    sources: [
      {
        id: 'mckay-2003-atacama',
        title: 'Temperature and Moisture Conditions for Life in the Extreme Arid Region of the Atacama Desert: Four Years of Observations Including the El Niño of 1997–1998',
        institution: 'Astrobiology 3(2), 393–406',
        year: 2003,
        identifier: 'DOI:10.1089/153110703769016460',
        verification: 'confirmed',
        supports: 'Yungay station mean air temp 16.5°C (1995) & 16.6°C (1996), observed max 37.9°C & min −5.7°C (Sep 1994–Sep 1998); 2.3 mm rain event on 11 May 1997 with 65–85 h liquid moisture beneath stones.',
      },
      {
        id: 'cordero-2014-uv',
        title: "The world's highest levels of surface UV",
        institution: 'Photochemical & Photobiological Sciences 13, 70–81',
        year: 2014,
        identifier: 'DOI:10.1039/C3PP50221J',
        verification: 'confirmed',
        supports: 'Peak dimensionless UV Index (UVI) of 20 at Chajnantor Plateau on 13 January 2013 (broken clouds) and 16 at Paranal Observatory on 9 January 2013 (cloudless).',
      },
      {
        id: 'hartley-2005-atacama',
        title: 'USGS Scientific Investigations Map 3326 / Atacama Evaporitic & Ignimbrite Geology',
        institution: 'Geological Magazine / USGS',
        year: 2005,
        identifier: 'https://pubs.usgs.gov/',
        verification: 'confirmed',
        supports: 'Qualitative geological classification: hyper-arid evaporitic playa (salar), ignimbrite sheets, paleolake clay beds, nitrate-perchlorate regolith.',
      },
    ],
  },
  {
    id: 'antarctica',
    name: { en: 'Antarctica Dry Valleys (McMurdo)', ar: 'الوديان الجافة في القارة القطبية الجنوبية (ماكموردو)' },
    region: { en: 'Victoria Land', ar: 'أرض فيكتوريا' },
    country: { en: 'Antarctica', ar: 'أنتاركتيكا' },
    coordinates: { lat: -77.833, lng: 160.65, label: '77.833° S, 160.650° E' },
    category: 'polar-cryogenic',
    primaryTwin: 'mars',
    image: analogAntarcticaImg,
    researchFocus: {
      en: 'Permafrost active-layer depth zonation (<20 cm to 70 cm), trace soil/ice perchlorate (up to 1,100 µg/kg), and Beacon Supergroup / Ferrar Dolerite geology',
      ar: 'نطاقات عمق الطبقة النشطة للتربة الصقيعية (<20 سم إلى 70 سم) والبيركلورات النزرة (حتى 1,100 ميكروغرام/كغ) وجيولوجيا الدوليريت',
    },
    geologyTags: [
      { en: 'Cold Desert Regolith', ar: 'حطام صحراوي قطبي' },
      { en: 'Active Layer <20–70 cm', ar: 'طبقة نشطة <20–70 سم' },
      { en: 'Perchlorate ≤1,100 µg/kg', ar: 'بيركلورات ≤1,100 ميكروغرام/كغ' },
    ],
    adaptiveSummary: {
      explorer: {
        en: 'Antarctica’s McMurdo Dry Valleys preserve widespread permafrost with shallow seasonal active layers and natural perchlorate traces in cold hyper-arid soils and ice.',
        ar: 'تحفظ الوديان الجافة في ماكموردو بأنتاركتيكا تربة صقيعية واسعة الانتشار ذات طبقات نشطة موسمية ضحلة وآثار بيركلورات طبيعية في التربة والجليد.',
      },
      student: {
        en: 'Across >800 excavations (Bockheim et al., 2007), McMurdo Dry Valleys active-layer depths vary by climatic zone: <20 cm on the polar plateau, 20–45 cm in inland areas, and 45–70 cm in coastal valleys. Kounaves et al. (2010) detected natural perchlorate up to 1,100 µg/kg.',
        ar: 'عبر أكثر من 800 حفرية (Bockheim et al., 2007)، يتراوح عمق الطبقة النشطة في الوديان الجافة حسب المنطقة المناخية: <20 سم في الهضبة القطبية، و20–45 سم في المناطق الداخلية، و45–70 سم في المناطق الساحلية. ورصد Kounaves et al. (2010) بيركلورات طبيعية حتى 1,100 ميكروغرام/كغ.',
      },
      scientist: {
        en: 'Measured parameters: active-layer depths of <20 cm (polar plateau), 20–45 cm (inland within 60 km of McMurdo Sound), and 45–70 cm (coastal/eastern Wright & Taylor Valleys) per Bockheim et al. (2007); soil/ice ClO4− concentrations up to 1,100 µg/kg (not 0.05–0.5 wt%) per Kounaves et al. (2010). Harmonized elevation, slope, air temperature, and RMS roughness are not established (null/NA).',
        ar: 'المعايير المقيسة: عمق الطبقة النشطة <20 سم (الهضبة القطبية)، 20–45 سم (داخليًا)، و45–70 سم (ساحليًا) وفق Bockheim et al. (2007)؛ وتركيز ClO₄⁻ في التربة والجليد حتى 1,100 ميكروغرام/كغ (وليس 0.05–0.5% بالوزن) وفق Kounaves et al. (2010). تظل قيم الارتفاع والانحدار والحرارة الموحدة والخشونة غير مثبتة (null/NA).',
      },
      pioneer: {
        en: 'Active-layer depth zonation (<20 cm to 70 cm) and trace perchlorate chemistry (up to 1,100 µg/kg) guide shallow subsurface excavation and sample-handling protocols; do not conflate active-layer thickness with volumetric ground-ice wt%.',
        ar: 'توجّه نطاقات عمق الطبقة النشطة (<20 سم إلى 70 سم) وكيمياء البيركلورات النزرة (حتى 1,100 ميكروغرام/كغ) بروتوكولات الحفر الضحل ومعالجة العينات؛ مع عدم الخلط بين سمك الطبقة النشطة ونسبة الجليد الحجمية.',
      },
    },
    metrics: {
      meanTempC: null,
      tempMinC: null,
      tempMaxC: null,
      elevationM: null,
      meanSlopeDeg: null,
      roughnessIndexDeg: null,
      waterIcePct: null,
      atmosphericPressureKpa: null,
      albedo: null,
    },
    metricQuality: {
      thermal: 'incomplete',
      elevation: 'incomplete',
      slope: 'incomplete',
      roughness: 'incomplete',
      waterIce: 'incomplete',
      mineralogy: 'incomplete',
    },
    missingDataNotes: {
      en: 'Elevation, slope, harmonized AWS air temperature, numeric RMS roughness, and bulk mineral/ice wt% are not established (null/NA). Measured records retained: Active-layer depth <20 cm (polar plateau), 20–45 cm (inland), 45–70 cm (coastal) [Bockheim et al., 2007]; Perchlorate (ClO₄⁻) in soil & ice up to 1,100 µg/kg [Kounaves et al., 2010]; McMurdo LTER AWS 15-min solar radiation time series.',
      ar: 'الارتفاع، والانحدار، وحرارة الهواء الموحدة، والخشونة الرقمية، والنسب الوزنية للمعادن/الجليد غير مثبتة (null/NA). السجلات المقيسة المعتمدة: عمق الطبقة النشطة <20 سم (الهضبة القطبية)، 20–45 سم (داخلي)، 45–70 سم (ساحلي) [Bockheim et al., 2007]؛ البيركلورات (ClO₄⁻) حتى 1,100 ميكروغرام/كغ [Kounaves et al., 2010]؛ ورصد الإشعاع الشمسي كل 15 دقيقة في شبكة McMurdo LTER AWS.',
    },
    minerals: [
      { name: { en: 'Beacon Supergroup Sandstone (Qualitative)', ar: 'حجر رملي مجموعة بيكون (نوعي)' }, formula: 'SiO2', percentage: null },
      { name: { en: 'Ferrar Dolerite Sills (Qualitative)', ar: 'جدد الدوليريت الفيراري (نوعي)' }, formula: 'Plagioclase / Pyroxene', percentage: null },
      { name: { en: 'Natural Perchlorate (up to 1,100 µg/kg)', ar: 'بيركلورات طبيعية (حتى 1,100 ميكروغرام/كغ)' }, formula: 'ClO4-', percentage: null },
      { name: { en: 'Permafrost & Glacial Tills (Qualitative)', ar: 'تربة صقيعية وركام جليدي (نوعي)' }, formula: 'H2O(s)', percentage: null },
    ],
    geologicalFeatures: [
      { en: 'Hyper-arid cold desert regolith, Beacon Supergroup sandstone & Ferrar Dolerite sills', ar: 'حطام صحراوي بارد شديد الجفاف وحجر رملي بيكون وجدد دوليريت فيرار' },
      { en: 'Permafrost active-layer depth: <20 cm (plateau), 20–45 cm (inland), 45–70 cm (coastal)', ar: 'عمق الطبقة النشطة: <20 سم (الهضبة)، 20–45 سم (داخلي)، 45–70 سم (ساحلي)' },
      { en: 'Natural soil/ice perchlorate concentrations detected up to 1,100 µg/kg', ar: 'تركيزات بيركلورات طبيعية في التربة والجليد تصل إلى 1,100 ميكروغرام/كغ' },
    ],
    thermalProfile24h: [
      { hourOrSol: '00:00', tempC: -28 },
      { hourOrSol: '04:00', tempC: -32 },
      { hourOrSol: '08:00', tempC: -22 },
      { hourOrSol: '12:00', tempC: -13 },
      { hourOrSol: '16:00', tempC: -15 },
      { hourOrSol: '20:00', tempC: -24 },
    ],
    pioneerIsruNotes: {
      en: 'Active-layer depth measurements (Bockheim et al., 2007) distinguish seasonal thaw depth from bulk ground-ice wt%, guiding shallow subsurface drilling validation.',
      ar: 'تميّز قياسات عمق الطبقة النشطة (Bockheim et al., 2007) بين عمق الذوبان الموسمي ونسبة الجليد الوزنية الكلية، ما يوجّه اختبارات الحفر الضحل.',
    },
    sources: [
      {
        id: 'bockheim-2007-antarctica',
        title: 'Permafrost distribution and active-layer depths in the McMurdo Dry Valleys, Antarctica',
        institution: 'Permafrost and Periglacial Processes 18, 217–227',
        year: 2007,
        identifier: 'DOI:10.1002/ppp.588',
        verification: 'confirmed',
        supports: 'Active-layer depths mapped across >800 excavations: <20 cm polar plateau, 20–45 cm inland areas, 45–70 cm coastal/eastern Wright & Taylor Valleys.',
      },
      {
        id: 'kounaves-2010-perchlorate',
        title: 'Discovery of Natural Perchlorate in the Antarctic Dry Valleys and Its Global Implications',
        institution: 'Environmental Science & Technology 44(7), 2360–2364',
        year: 2010,
        identifier: 'DOI:10.1021/es9033606',
        verification: 'confirmed',
        supports: 'Natural perchlorate (ClO4−) detected in Antarctic Dry Valleys soil and ice samples up to 1,100 µg/kg.',
      },
      {
        id: 'marchant-2002-usgs',
        title: 'USGS Antarctic Geologic Map Series / McMurdo Dry Valleys Geomorphology',
        institution: 'USGS / Geomorphology',
        year: 2002,
        identifier: 'https://pubs.usgs.gov/',
        verification: 'confirmed',
        supports: 'Hyper-arid cold desert regolith, Beacon Supergroup sandstone bedrock, Ferrar Dolerite sills, and glacial tills.',
      },
    ],
  },
  {
    id: 'haughton',
    name: { en: 'Haughton Impact Structure (Devon Island)', ar: 'بنية هوتون التصادمية (جزيرة ديفون)' },
    region: { en: 'Devon Island, Nunavut', ar: 'جزيرة ديفون، نونافوت' },
    country: { en: 'Canada', ar: 'كندا' },
    coordinates: { lat: 75.383, lng: -89.667, label: '75.383° N, 89.667° W' },
    category: 'impact-crater',
    primaryTwin: 'both',
    image: analogHaughtonImg,
    researchFocus: {
      en: 'Complex impact structure (~23 km apparent diameter, ~16 km final rim), impact-melt breccias, lacustrine sediments & carbonate-sulfate-phyllosilicate lithologies',
      ar: 'بنية تصادمية معقدة (قطر ظاهري ~23 كم وحافة نهائية ~16 كم) وبريشيا انصهار تصادمي ورواسب بحيرية وليثولوجيا كربونات-كبريتات-فيلوسيليكات',
    },
    geologyTags: [
      { en: '~23 km Apparent / ~16 km Rim', ar: 'قطر ظاهري ~23 كم / حافة ~16 كم' },
      { en: 'Impact-Melt Breccias', ar: 'بريشيا انصهار تصادمي' },
      { en: 'Moon & Mars Ops', ar: 'عمليات القمر والمريخ' },
    ],
    adaptiveSummary: {
      explorer: {
        en: 'Haughton is a complex impact structure on Devon Island with an apparent diameter of ~23 km and an estimated final rim diameter of ~16 km, preserving impact-melt breccias and ancient lake sediments.',
        ar: 'هوتون بنية تصادمية معقدة في جزيرة ديفون بقطر ظاهري يبلغ ~23 كم وقطر حافة نهائية مقدّر بنحو ~16 كم، وتحتفظ ببريشيا الانصهار التصادمي ورواسب بحيرية قديمة.',
      },
      student: {
        en: 'Published topographic descriptions (Robertson & Mason, 1975) report an inner circular basin averaging ~140 m above sea level, an annular ridge averaging ~270 m, and a surrounding plateau of ~340–400 m. Osinski et al. (2005) distinguish the ~23 km apparent diameter from the ~16 km final rim.',
        ar: 'تذكر الأوصاف الطبوغرافية المنشورة (Robertson & Mason, 1975) أن متوسط ارتفاع الحوض الداخلي الدائري يبلغ نحو 140 م فوق سطح البحر، والحلقة المحيطة نحو 270 م، والهضبة الإقليمية 340–400 م. ويميّز Osinski et al. (2005) بين القطر الظاهري ~23 كم وقطر الحافة النهائية ~16 كم.',
      },
      scientist: {
        en: 'Complex impact structure in Lower Paleozoic sedimentary target rocks (~23 km apparent diameter; ~16 km estimated final rim; Osinski et al., 2005). Topographic descriptors: inner basin ~140 m asl, annular ridge ~270 m asl, regional plateau ~340–400 m asl (Robertson & Mason, 1975). Imaging spectroscopy (2020) identifies calcite, dolomite, gypsum, hydrated silica, and phyllosilicate lithologies (sample/outcrop areal abundances only, not bulk wt%). Slope, air temperature, RMS roughness, thaw depth/ice vol%, and radiation remain unestablished (null/NA).',
        ar: 'بنية تصادمية معقدة في صخور رسوبية من الباليوزوي السفلي (قطر ظاهري ~23 كم وحافة نهائية مقدرة ~16 كم؛ Osinski et al., 2005). الأوصاف الطبوغرافية: الحوض الداخلي ~140 م، الحلقة ~270 م، الهضبة ~340–400 م (Robertson & Mason, 1975). يكشف التحليل الطيفي (2020) عن الكالسيت والدولوميت والجبس والسيليكا المائية والفيلوسيليكات (وفرة مساحية للعينات فقط وليست نسبًا وزنية كلية). تظل قيم الانحدار والحرارة والخشونة والجليد والإشعاع غير مثبتة (null/NA).',
      },
      pioneer: {
        en: 'Impact-melt breccias, shatter cones, and intra-crater lacustrine sediments serve as qualitative lunar and Martian crater analogs; quantitative slope, roughness, and ground-ice scoring are withheld until traceable DEM and core/GPR datasets are supplied.',
        ar: 'تعمل بريشيا الانصهار التصادمي ومخاريط الصدمة والرواسب البحيرية داخل الفوهة كنظائر نوعية لفوهات القمر والمريخ؛ ويُحجب التقييم الكمي للانحدار والخشونة والجليد لحين توفير بيانات DEM وجسات موثقة.',
      },
    },
    metrics: {
      meanTempC: null,
      tempMinC: null,
      tempMaxC: null,
      elevationM: 140,
      meanSlopeDeg: null,
      roughnessIndexDeg: null,
      waterIcePct: null,
      atmosphericPressureKpa: null,
      albedo: null,
    },
    metricQuality: {
      thermal: 'incomplete',
      elevation: 'modeled',
      slope: 'incomplete',
      roughness: 'incomplete',
      waterIce: 'incomplete',
      mineralogy: 'incomplete',
    },
    missingDataNotes: {
      en: 'Elevation reflects published topographic descriptors (inner basin ~140 m asl, annular ridge ~270 m, regional plateau ~340–400 m; Robertson & Mason, 1975), not a DEM polygon extraction. Slope, station air temperature, numeric RMS roughness, bulk mineral wt% (sample/outcrop spectral areal abundances only), thaw depth / ground-ice vol%, and radiation are not established (null/NA).',
      ar: 'يعكس الارتفاع الأوصاف الطبوغرافية المنشورة (الحوض الداخلي ~140 م، الحلقة ~270 م، الهضبة ~340–400 م؛ Robertson & Mason, 1975) وليس استخلاص مضلع DEM. الانحدار وحرارة الهواء والخشونة الرقمية والنسب الوزنية للمعادن وعمق الذوبان/نسبة الجليد والإشعاع غير مثبتة (null/NA).',
    },
    minerals: [
      { name: { en: 'Calcite & Dolomite Carbonates (Qualitative)', ar: 'كربونات الكالسيت والدولوميت (نوعي)' }, formula: 'CaCO3 / CaMg(CO3)2', percentage: null },
      { name: { en: 'Gypsum Sulfates (Qualitative)', ar: 'كبريتات الجبس (نوعي)' }, formula: 'CaSO4·2H2O', percentage: null },
      { name: { en: 'Hydrated Silica (Qualitative)', ar: 'سيليكا مائية (نوعي)' }, formula: 'SiO2·nH2O', percentage: null },
      { name: { en: 'Phyllosilicate-Bearing Materials (Qualitative)', ar: 'مواد حاملة للفيلوسيليكات (نوعي)' }, formula: 'Phyllosilicates', percentage: null },
    ],
    geologicalFeatures: [
      { en: 'Complex impact structure: ~23 km apparent diameter, ~16 km estimated final rim diameter', ar: 'بنية تصادمية معقدة: قطر ظاهري ~23 كم وقطر حافة نهائية مقدّر ~16 كم' },
      { en: 'Impact-melt breccias/impactites & intra-crater lacustrine sediments in Lower Paleozoic strata', ar: 'بريشيا انصهار تصادمي ورواسب بحيرية داخل الفوهة في صخور الباليوزوي السفلي' },
      { en: 'Topography: ~140 m inner basin, ~270 m annular ridge, ~340–400 m regional plateau', ar: 'الطبوغرافيا: ~140 م الحوض الداخلي، ~270 م الحلقة، ~340–400 م الهضبة الإقليمية' },
    ],
    thermalProfile24h: [
      { hourOrSol: '00:00', tempC: -21 },
      { hourOrSol: '04:00', tempC: -23 },
      { hourOrSol: '08:00', tempC: -17 },
      { hourOrSol: '12:00', tempC: -10 },
      { hourOrSol: '16:00', tempC: -11 },
      { hourOrSol: '20:00', tempC: -18 },
    ],
    pioneerIsruNotes: {
      en: 'Qualitative terrain classes (impact-breccia blocks and lacustrine silt) support rover field testing; numeric RMHI scoring is disabled until matched-scale LiDAR microtopography is acquired.',
      ar: 'تدعم فئات التضاريس النوعية (كتل البريشيا التصادمية والغرين البحيري) التجارب الميدانية للمركبات؛ ويُعطّل حساب RMHI الرقمي لحين توفر قياسات LiDAR موحدة المقياس.',
    },
    sources: [
      {
        id: 'osinski-2005-haughton',
        title: 'Geological overview and cratering model for the Haughton impact structure, Devon Island, Canadian High Arctic',
        institution: 'Meteoritics & Planetary Science 40, 1759–1776',
        year: 2005,
        identifier: 'DOI:10.1111/j.1945-5100.2005.tb00145.x',
        verification: 'confirmed',
        supports: 'Complex impact structure with ~23 km apparent diameter and ~16 km estimated final rim diameter, impact-melt breccias, and intra-crater lacustrine sediments.',
      },
      {
        id: 'robertson-mason-1975',
        title: 'Shatter cones from Haughton Dome, Devon Island, Canada',
        institution: 'Nature 255, 393–394',
        year: 1975,
        identifier: 'DOI:10.1038/255393a0',
        verification: 'confirmed',
        supports: 'Published topographic descriptors: inner circular basin ~140 m asl, annular ridge ~270 m asl, regional plateau ~340–400 m asl.',
      },
      {
        id: 'haughton-spectroscopy-2020',
        title: 'Compositional heterogeneity of impact-melt rocks at Haughton Impact Structure (Imaging Spectroscopy)',
        institution: 'JGR Planets',
        year: 2020,
        identifier: 'DOI:10.1029/2019JE006218',
        verification: 'confirmed',
        supports: 'Presence of calcite, dolomite, gypsum, hydrated silica, and phyllosilicate-bearing materials (outcrop/sample areal abundances only).',
      },
    ],
  },
  {
    id: 'death-valley',
    name: { en: 'Death Valley (Badwater & Furnace Creek Basin)', ar: 'وادي الموت (حوض بادووتر وفيرنس كريك)' },
    region: { en: 'Mojave Desert, California', ar: 'صحراء موهافي، كاليفورنيا' },
    country: { en: 'United States', ar: 'الولايات المتحدة' },
    coordinates: { lat: 36.25, lng: -116.826, label: '36.250° N, 116.826° W' },
    category: 'evaporite-playa',
    primaryTwin: 'mars',
    image: analogDeathValleyImg,
    researchFocus: {
      en: 'Evaporite salt flats (~95% NaCl rock-salt unit at Devil’s Golf Course), Furnace Creek hydrology (~50 mm/yr rain, >2,500 mm/yr evaporation), and basaltic cinder cones (Ubehebe)',
      ar: 'السهول الملحية المتبخرة (~95% كلوريد الصوديوم في ملعب الشيطان) وهيدرولوجيا فيرنس كريك (~50 ملم/سنة مطر وتبخر >2,500 ملم/سنة) ومخروط أوبيهيب',
    },
    geologyTags: [
      { en: 'Massive Rock Salt (~95% NaCl)', ar: 'ملح صخري (~95% NaCl)' },
      { en: 'Precip ~50 mm / Evap >2,500 mm', ar: 'مطر ~50 ملم / تبخر >2,500 ملم' },
      { en: 'Rift & Maar Craters', ar: 'أخدود وفوهات بركانية' },
    ],
    adaptiveSummary: {
      explorer: {
        en: 'Death Valley spans extreme park-wide relief from Badwater Basin (~−86 m) to Telescope Peak (~3,368 m), pairing hyper-saline mudflats and jagged rock-salt crusts with basaltic cinder cones.',
        ar: 'يمتد التباين التضاريسي في وادي الموت من حوض بادووتر (~−86 م) إلى قمة تلسكوب (~3,368 م)، جامعًا بين المسطحات الطينية شديدة الملوحة وقشور الملح الخشنة والمخاريط البازلتية.',
      },
      student: {
        en: 'USGS reports ~50 mm/year average precipitation at Furnace Creek Ranch and >2,500 mm/year free-water-surface evaporation across Death Valley. At Devil’s Golf Course, the mapped massive rock-salt unit is ~95% sodium chloride (not a regional average for all playas).',
        ar: 'تذكر هيئة المسح الجيولوجي الأمريكية (USGS) أن متوسط الهطول في مزرعة فيرنس كريك يبلغ نحو 50 ملم/سنة بينما يتجاوز التبخر السطحي الحر 2,500 ملم/سنة. وفي ملعب الشيطان، تبلغ نسبة كلوريد الصوديوم ~95% في وحدة الملح الصخري الكتلي المحددة (وليست متوسطًا لكل السبخات).',
      },
      scientist: {
        en: 'Park-wide relief endpoints: Badwater Basin ~−86 m asl and Telescope Peak ~3,368 m asl (regional relief context only, not one analog polygon). Hydrologic context (USGS OFR 84-743): ~50 mm/yr precipitation at Furnace Creek Ranch; >2,500 mm/yr free-water-surface evaporation. Geology (USGS SIM 3084): active continental rift, hyper-saline mudflats, alluvial fans, Ubehebe cinder cones; USGS OFR 93-272 describes ~95% NaCl for the massive rock-salt unit and rough jagged surface qualitatively (RMS not established). Harmonized temperature, slope, and Death Valley-specific radiation remain unestablished (null/NA).',
        ar: 'حدود التضاريس على مستوى المنتزه: حوض بادووتر ~−86 م وقمة تلسكوب ~3,368 م (سياق تضاريسي إقليمي فقط). السياق الهيدرولوجي (USGS OFR 84-743): ~50 ملم/سنة مطر في فيرنس كريك وتبخر >2,500 ملم/سنة. الجيولوجيا: أخدود قاري نشط ومسطحات شديدة الملوحة ومراوح طميية ومخاريط أوبيهيب؛ ويصف تقرير USGS OFR 93-272 نحو 95% NaCl لوحدة الملح الصخري الكتلي وسطحه الخشن نوعيًا (دون قيمة RMS رقمية). تظل الحرارة الموحدة والانحدار والإشعاع الخاص بالوادي غير مثبتة (null/NA).',
      },
      pioneer: {
        en: 'Rough jagged rock-salt terrain (~95% NaCl unit) and hyper-arid evaporation rates (>2,500 mm/yr) support qualitative rover wheel-wear and saline-crust testing; Desert Rock SURFRAD (Nevada, 65 mi NW of Las Vegas) is an external radiation proxy only.',
        ar: 'تدعم تضاريس الملح الصخري الخشنة (~95% NaCl) ومعدلات التبخر المرتفعة (>2,500 ملم/سنة) اختبارات تآكل عجلات المركبات والقشور الملحية؛ وتُعد محطة Desert Rock SURFRAD في نيفادا مرجعًا بديلًا خارجيًا للإشعاع فقط.',
      },
    },
    metrics: {
      meanTempC: null,
      tempMinC: null,
      tempMaxC: null,
      elevationM: null,
      meanSlopeDeg: null,
      roughnessIndexDeg: null,
      waterIcePct: null,
      atmosphericPressureKpa: null,
      albedo: null,
    },
    metricQuality: {
      thermal: 'incomplete',
      elevation: 'incomplete',
      slope: 'incomplete',
      roughness: 'incomplete',
      waterIce: 'incomplete',
      mineralogy: 'incomplete',
    },
    missingDataNotes: {
      en: 'Park-wide relief endpoints (−86 m Badwater Basin to 3,368 m Telescope Peak) are geographic context only, not a single polygon elevation. Harmonized temperature, slope, numeric RMS roughness, bulk playa mineral wt% (only the Devil’s Golf Course massive rock-salt unit is reported at ~95% NaCl), and site-specific radiation (Desert Rock SURFRAD is in Nevada) are not established (null/NA). Hydrologic context: ~50 mm/yr precip at Furnace Creek Ranch; >2,500 mm/yr free-water evaporation.',
      ar: 'حدود التضاريس (−86 م بادووتر إلى 3,368 م قمة تلسكوب) هي سياق جغرافي عام وليست ارتفاع مضلع واحد. الحرارة الموحدة، والانحدار، والخشونة الرقمية، والنسب الوزنية العامة للسبخات (فقط وحدة الملح الصخري في ملعب الشيطان موصوفة بنحو 95% NaCl)، والإشعاع الموقعي (محطة Desert Rock في نيفادا) غير مثبتة (null/NA). السياق الهيدرولوجي: ~50 ملم/سنة أمطار في فيرنس كريك وتبخر >2,500 ملم/سنة.',
    },
    minerals: [
      { name: { en: 'Massive Rock-Salt Unit (~95% NaCl at Devil’s Golf Course)', ar: 'وحدة الملح الصخري (~95% NaCl في ملعب الشيطان)' }, formula: 'NaCl', percentage: null },
      { name: { en: 'Hyper-Saline Mudflat Evaporites (Qualitative)', ar: 'متبخرات المسطحات الطينية شديدة الملوحة (نوعي)' }, formula: 'Evaporites', percentage: null },
      { name: { en: 'Alluvial Fan Detritus (Qualitative)', ar: 'رواسب المراوح الطميية (نوعي)' }, formula: 'Silicates / Carbonates', percentage: null },
      { name: { en: 'Basaltic Cinder Cone Tephra (Ubehebe)', ar: 'رماد المخاريط البازلتية (أوبيهيب)' }, formula: 'Basaltic Tephra', percentage: null },
    ],
    geologicalFeatures: [
      { en: 'Active continental rift valley, hyper-saline mudflats & alluvial fan complexes (USGS SIM 3084)', ar: 'أخدود قاري نشط ومسطحات طينية شديدة الملوحة ومراوح طميية (USGS SIM 3084)' },
      { en: 'Devil’s Golf Course rough massive rock-salt unit (~95% NaCl; USGS OFR 93-272)', ar: 'وحدة الملح الصخري الخشنة في ملعب الشيطان (~95% NaCl؛ USGS OFR 93-272)' },
      { en: 'Furnace Creek hydrology: ~50 mm/yr precipitation; >2,500 mm/yr free-water evaporation', ar: 'هيدرولوجيا فيرنس كريك: ~50 ملم/سنة أمطار وتبخر سطحي >2,500 ملم/سنة' },
    ],
    thermalProfile24h: [
      { hourOrSol: '00:00', tempC: 19 },
      { hourOrSol: '04:00', tempC: 15 },
      { hourOrSol: '08:00', tempC: 24 },
      { hourOrSol: '12:00', tempC: 39 },
      { hourOrSol: '16:00', tempC: 44 },
      { hourOrSol: '20:00', tempC: 27 },
    ],
    pioneerIsruNotes: {
      en: 'USGS OFR 93-272 documents the rough, jagged massive-rock-salt surface (~95% NaCl) at Devil’s Golf Course for qualitative rover mobility and wheel-wear analogs.',
      ar: 'يوثق تقرير USGS OFR 93-272 السطح الخشن المسنن للملح الصخري (~95% NaCl) في ملعب الشيطان كنظير نوعي لاختبارات حركة المركبات وتآكل العجلات.',
    },
    sources: [
      {
        id: 'usgs-ofr-93-272',
        title: 'Quaternary geologic unit descriptions, Death Valley, California (Table 2)',
        institution: 'USGS Open-File Report 93-272',
        year: 1993,
        identifier: 'https://pubs.usgs.gov/of/1993/0272/report.pdf',
        verification: 'confirmed',
        supports: 'Describes Devil’s Golf Course as a rough, jagged massive rock-salt surface composed of approximately 95% sodium chloride.',
      },
      {
        id: 'bedinger-1984-usgs',
        title: 'Characterization of the Death Valley region, Nevada and California',
        institution: 'USGS Open-File Report 84-743',
        year: 1984,
        identifier: 'https://pubs.usgs.gov/of/1984/0743/report.pdf',
        verification: 'confirmed',
        supports: 'Furnace Creek Ranch annual average precipitation ~50 mm/year; Death Valley annual free-water-surface evaporation >2,500 mm/year.',
      },
      {
        id: 'workman-2016-usgs',
        title: 'Geologic Map of Death Valley National Park (USGS Scientific Investigations Map 3084)',
        institution: 'USGS',
        year: 2016,
        identifier: 'https://pubs.usgs.gov/',
        verification: 'confirmed',
        supports: 'Active continental rift valley, hyper-saline mudflats, alluvial fan complexes, and basaltic cinder cones (Ubehebe Crater).',
      },
    ],
  },
  {
    id: 'iceland',
    name: { en: 'Iceland (Askja & Vatnajökull Highlands)', ar: 'أيسلندا (مرتفعات أسكيا وفاتنايوكول)' },
    region: { en: 'Central Volcanic Rift', ar: 'الأخدود البركاني الأوسط' },
    country: { en: 'Iceland', ar: 'أيسلندا' },
    coordinates: { lat: 65.03, lng: -16.75, label: '65.030° N, 16.750° W' },
    category: 'volcanic-basalt',
    primaryTwin: 'both',
    image: analogIcelandImg,
    researchFocus: {
      en: 'Active basaltic hotspot/rift volcanism, glacio-fluvial sandurs, subglacial palagonite tuff cones, and pāhoehoe & ʻaʻā lava flows',
      ar: 'بركانية البقعة الساخنة والأخدود البازلتي وسهول الساندور الجليدية النهرية ومخاريط البالاغونيت وحمم باهويوهوي وآآ',
    },
    geologyTags: [
      { en: 'Basaltic Hotspot/Rift', ar: 'أخدود وبقعة ساخنة بازلتية' },
      { en: 'Glacio-Fluvial Sandurs', ar: 'سهول ساندور جليدية' },
      { en: 'Palagonite & Lava', ar: 'بالاغونيت وحمم بازلتية' },
    ],
    adaptiveSummary: {
      explorer: {
        en: 'Iceland’s Askja and Vikursandur regions combine active basaltic rift volcanism, glacio-fluvial sandur plains, subglacial palagonite tuff cones, and pāhoehoe and ʻaʻā lava fields.',
        ar: 'تجمع منطقتا أسكيا وفيكورساندور في أيسلندا بين البركانية البازلتية النشطة وسهول الساندور الجليدية النهرية ومخاريط البالاغونيت وحقول حمم باهويوهوي وآآ.',
      },
      student: {
        en: 'Mapped by the Geological Map of Iceland (NI 1:250,000; Gislason et al., 2002), Iceland’s basaltic sandurs and subglacial palagonite cones replicate Martian volcaniclastic and lunar mare basalt terrains qualitatively.',
        ar: 'وفق الخريطة الجيولوجية لأيسلندا (NI 1:250,000؛ Gislason et al., 2002)، تحاكي سهول الساندور البازلتية ومخاريط البالاغونيت تحت الجليدية التضاريس البركانية المريخية والبحار القمرية نوعيًا.',
      },
      scientist: {
        en: 'Askja and Vikursandur are separate analog locations mapped with basaltic hotspot/rift volcanism, glacio-fluvial sandurs, subglacial palagonite tuff cones, and pāhoehoe/ʻaʻā lavas (Gislason et al., 2002). Site-specific DEM elevation, slope, station air temperature (distinct from geothermal hotspots), numeric RMS roughness, modal mineral wt%, precipitation, and site radiation are not established (null/NA).',
        ar: 'تُعد أسكيا وفيكورساندور موقعين منفصلين يتميزان ببركانية بازلتية وسهول ساندور ومخاريط بالاعونيت وحمم باهويوهوي وآآ (Gislason et al., 2002). وتظل قيم الارتفاع الموقعي والانحدار وحرارة الهواء (مفصولة عن البؤر الحرارية الأرضية) والخشونة الرقمية والنسب الوزنية للمعادن والهطول والإشعاع الموقعي غير مثبتة (null/NA).',
      },
      pioneer: {
        en: 'Qualitative sandur, ʻaʻā, and pāhoehoe terrain classes support rover field trials (NASA SAND-E), while numeric ESI/IFS/RMHI scoring awaits separate site polygons, Iceland DEM extraction, and XRD mineralogy.',
        ar: 'تدعم فئات التضاريس النوعية (الساندور وحمم آآ وباهويوهوي) التجارب الميدانية للمركبات (NASA SAND-E)، بينما ينتظر التقييم الرقمي (ESI/IFS/RMHI) مضلعات منفصلة واستخلاص DEM أيسلندي وتحليل XRD.',
      },
    },
    metrics: {
      meanTempC: null,
      tempMinC: null,
      tempMaxC: null,
      elevationM: null,
      meanSlopeDeg: null,
      roughnessIndexDeg: null,
      waterIcePct: null,
      atmosphericPressureKpa: null,
      albedo: null,
    },
    metricQuality: {
      thermal: 'incomplete',
      elevation: 'incomplete',
      slope: 'incomplete',
      roughness: 'incomplete',
      waterIce: 'incomplete',
      mineralogy: 'incomplete',
    },
    missingDataNotes: {
      en: 'Askja and Vikursandur are distinct locations; combined site-specific elevation, slope, air temperature (separate from geothermal hotspots), numeric RMS roughness, modal mineral wt%, precipitation, and site-specific radiation are not established (null/NA). External proxy note: Icelandic Radiation Safety Authority monitors UV Index in Reykjavík (since 19 May 2022) and gamma radiation at four coastal/regional stations, not at Askja or Vikursandur.',
      ar: 'أسكيا وفيكورساندور موقعان منفصلان؛ لذا فإن الارتفاع والانحدار وحرارة الهواء (مفصولة عن البؤر الحرارية الأرضية) والخشونة الرقمية والنسب الوزنية للمعادن والهطول والإشعاع الموقعي غير مثبتة (null/NA). ملاحظة مرجعية: ترصد هيئة السلامة الإشعاعية الأيسلندية مؤشر UV في ريكيافيك (منذ 19 مايو 2022) وإشعاع غاما في 4 محطات خارجية، وليس في أسكيا أو فيكورساندور.',
    },
    minerals: [
      { name: { en: 'Tholeiitic Basalt Matrix (Qualitative)', ar: 'نسيج البازلت الثوليتي (نوعي)' }, formula: 'Basalt', percentage: null },
      { name: { en: 'Subglacial Palagonite Tuff (Qualitative)', ar: 'طف البالاغونيت تحت الجليدي (نوعي)' }, formula: 'Palagonite', percentage: null },
      { name: { en: 'Glacio-Fluvial Basaltic Sandur (Qualitative)', ar: 'رمال الساندور البازلتية الجليدية (نوعي)' }, formula: 'Volcaniclastic', percentage: null },
      { name: { en: 'Pāhoehoe & ʻAʻā Lavas (Qualitative)', ar: 'حمم باهويوهوي وآآ (نوعي)' }, formula: 'Mafic Silicates', percentage: null },
    ],
    geologicalFeatures: [
      { en: 'Active basaltic hotspot/rift volcanism & glacio-fluvial sandurs (NI 1:250,000)', ar: 'بركانية البقعة الساخنة والأخدود البازلتي وسهول الساندور الجليدية النهرية' },
      { en: 'Subglacial palagonite tuff cones', ar: 'مخاريط طف البالاغونيت تحت الجليدية' },
      { en: 'Pāhoehoe & ʻaʻā basaltic lava flow morphologies', ar: 'تدفقات حمم بازلتية من نوع باهويوهوي وآآ' },
    ],
    thermalProfile24h: [
      { hourOrSol: '00:00', tempC: -3 },
      { hourOrSol: '04:00', tempC: -4 },
      { hourOrSol: '08:00', tempC: -1 },
      { hourOrSol: '12:00', tempC: 4 },
      { hourOrSol: '16:00', tempC: 5 },
      { hourOrSol: '20:00', tempC: 0 },
    ],
    pioneerIsruNotes: {
      en: 'Qualitative basaltic sandur and lava terrain classes support rover autonomy trials; modal mineral wt% and RMS roughness remain unestablished pending site-specific XRD and LiDAR surveys.',
      ar: 'تدعم فئات الساندور البازلتي والحمم النوعية تجارب الملاحة الذاتية للمركبات؛ وتبقى النسب الوزنية للمعادن وخشونة RMS غير مثبتة لحين توفر مسوحات XRD وLiDAR موقعية.',
    },
    sources: [
      {
        id: 'gislason-2002-iceland',
        title: 'Geological Map of Iceland (NI 1:250,000) / Icelandic Basaltic Rift & Glacio-Fluvial Geology',
        institution: 'Icelandic Institute of Natural History (Náttúrufræðistofnun Íslands)',
        year: 2002,
        identifier: 'https://en.ni.is/',
        verification: 'confirmed',
        supports: 'Active basaltic hotspot/rift volcanism, glacio-fluvial sandurs, subglacial palagonite tuff cones, and pahoehoe & aa lava flows.',
      },
    ],
  },
  {
    id: 'hawaii',
    name: { en: 'Hawaiʻi (Kīlauea & Mauna Kea Reference)', ar: 'هاواي (كيلاويا ومرجع ماونا كيا)' },
    region: { en: 'Hawaiʻi Island', ar: 'جزيرة هاواي' },
    country: { en: 'United States', ar: 'الولايات المتحدة' },
    coordinates: { lat: 19.821, lng: -155.468, label: '19.821° N, 155.468° W' },
    category: 'volcanic-basalt',
    primaryTwin: 'both',
    image: analogHawaiiImg,
    researchFocus: {
      en: 'Active tholeiitic basaltic shield volcano, pāhoehoe & ʻaʻā lava flows, tephra/ash cones, lava tubes (Thurston/Kazumura), and whole-rock basalt chemistry',
      ar: 'بركان درعي بازلتي ثوليتي نشط وتدفقات حمم باهويوهوي وآآ ومخاريط رماد وأنابيب حمم (ثورستون/كازومورا) وكيمياء البازلت الكلية',
    },
    geologyTags: [
      { en: 'Tholeiitic Shield Basalt', ar: 'بازلت درعي ثوليتي' },
      { en: 'Lava Tubes & Tephra', ar: 'أنابيب حمم ورماد بركاني' },
      { en: 'Whole-Rock Chemistry', ar: 'تحليل كيميائي صخري كلي' },
    ],
    adaptiveSummary: {
      explorer: {
        en: 'Hawaiʻi’s basaltic shield volcanoes feature pāhoehoe and ʻaʻā lava flows, tephra cones, and subsurface basaltic lava tubes (such as Thurston and Kazumura) that model lunar and Martian volcanic terrains.',
        ar: 'تتميز براكين هاواي الدرعية البازلتية بتدفقات حمم باهويوهوي وآآ ومخاريط الرماد وأنابيب الحمم تحت السطحية (مثل ثورستون وكازومورا) التي تحاكي تضاريس القمر والمريخ البركانية.',
      },
      student: {
        en: 'Kīlauea lavas are tholeiitic basalts containing olivine, pyroxene, plagioclase, and Fe-Ti oxides (Wright et al., 1975). Note that whole-rock chemical oxide analyses differ from modal mineral weight percentages, and ambient air, active lava, and fumarole temperatures are distinct physical quantities.',
        ar: 'حمم كيلاويا هي بازلت ثوليتي يحوي الأوليفين والبيروكسين والبلاجيوكليز وأكاسيد الحديد والتيتانيوم (Wright et al., 1975). وتختلف التحاليل الكيميائية الكلية للأكاسيد عن النسب الوزنية للمعادن، كما تُفصل حرارة الهواء المحيط عن حرارة الحمم والفومارول.',
      },
      scientist: {
        en: 'Mapped geology (USGS I-2524 / Neal et al., 2019): active tholeiitic basaltic shield volcano, pāhoehoe/ʻaʻā flows, tephra cones, and basaltic lava tubes. Wright et al. (1975) report whole-rock chemical compositions and olivine control (no modal mineral wt% recipe). Mauna Loa Observatory (separate site) measures 285–450 nm spectral UV and solar/thermal radiation. Kīlauea polygon elevation, slope, harmonized temperature, numeric RMS roughness, and gauge precipitation remain unestablished (null/NA).',
        ar: 'الجيولوجيا الموثقة (USGS I-2524 / Neal et al., 2019): بركان درعي بازلتي ثوليتي نشط وحمم باهويوهوي/آآ ومخاريط رماد وأنابيب حمم. يوثق Wright et al. (1975) التركيب الكيميائي الكلي للصخور (دون نسب وزنية للمعادن). ويقيس مرصد ماونا لوا (موقع منفصل) الأشعة فوق البنفسجية 285–450 نانومتر. تظل قيم الارتفاع المضلعي والانحدار والحرارة الموحدة والخشونة الرقمية والهطول غير مثبتة (null/NA).',
      },
      pioneer: {
        en: 'Tholeiitic basaltic tephra and lava tubes provide qualitative analog environments for lunar/Martian regolith simulant testing and subsurface habitat studies; modal ilmenite wt% requires site-specific XRD before quantitative IFS evaluation.',
        ar: 'يوفر الرماد البازلتي الثوليتي وأنابيب الحمم بيئات نظيرة نوعية لاختبارات محاكيات التربة القمرية والمريخية والملاجئ تحت السطحية؛ ويتطلب حساب IFS الكمي قياس نسبة الإيلمنيت الوزنية عبر XRD.',
      },
    },
    metrics: {
      meanTempC: null,
      tempMinC: null,
      tempMaxC: null,
      elevationM: null,
      meanSlopeDeg: null,
      roughnessIndexDeg: null,
      waterIcePct: null,
      atmosphericPressureKpa: null,
      albedo: null,
    },
    metricQuality: {
      thermal: 'incomplete',
      elevation: 'incomplete',
      slope: 'incomplete',
      roughness: 'incomplete',
      waterIce: 'incomplete',
      mineralogy: 'incomplete',
    },
    missingDataNotes: {
      en: 'Defined Kīlauea polygon elevation, slope, harmonized temperature (air vs active lava vs fumarole), numeric RMS roughness, modal mineral wt% (Wright et al., 1975 provides whole-rock oxide chemistry only), and site gauge precipitation are not established (null/NA). External proxy note: NOAA Mauna Loa Observatory (285–450 nm UV spectroradiometer) is a separate site on Hawaiʻi Island, not Kīlauea.',
      ar: 'ارتفاع مضلع كيلاويا، والانحدار، والحرارة الموحدة (الهواء مقابل الحمم النشطة والفومارول)، والخشونة الرقمية، والنسب الوزنية للمعادن (يوفر Wright et al., 1975 كيمياء الأكاسيد الكلية فقط)، وهطول المحطة غير مثبتة (null/NA). ملاحظة مرجعية: مرصد ماونا لوا (مطياف UV 285–450 نانومتر) موقع منفصل في جزيرة هاواي وليس كيلاويا.',
    },
    minerals: [
      { name: { en: 'Plagioclase (Whole-Rock Basalt Phase, Qualitative)', ar: 'بلاجيوكليز (طور بازلتي كلي، نوعي)' }, formula: '(Ca,Na)(Al,Si)4O8', percentage: null },
      { name: { en: 'Pyroxene (Whole-Rock Basalt Phase, Qualitative)', ar: 'بيروكسين (طور بازلتي كلي، نوعي)' }, formula: '(Ca,Mg,Fe)2Si2O6', percentage: null },
      { name: { en: 'Olivine (Whole-Rock Basalt Phase, Qualitative)', ar: 'أوليفين (طور بازلتي كلي، نوعي)' }, formula: '(Mg,Fe)2SiO4', percentage: null },
      { name: { en: 'Fe-Ti Oxides (Whole-Rock Basalt Phase, Qualitative)', ar: 'أكاسيد الحديد والتيتانيوم (نوعي)' }, formula: 'FeTiO3 / Fe3O4', percentage: null },
    ],
    geologicalFeatures: [
      { en: 'Active tholeiitic basaltic shield volcano & tephra/ash cones (USGS I-2524 / Neal et al., 2019)', ar: 'بركان درعي بازلتي ثوليتي نشط ومخاريط رماد بركاني (USGS I-2524)' },
      { en: 'Pāhoehoe & ʻaʻā lava flows and subsurface basaltic lava tubes (Thurston / Kazumura)', ar: 'تدفقات حمم باهويوهوي وآآ وأنابيب حمم بازلتية (ثورستون / كازومورا)' },
      { en: 'Whole-rock tholeiitic basalt chemistry (Wright et al., 1975; modal wt% not assigned)', ar: 'كيمياء البازلت الثوليتي الكلية (Wright et al., 1975؛ دون نسب وزنية للمعادن)' },
    ],
    thermalProfile24h: [
      { hourOrSol: '00:00', tempC: 0 },
      { hourOrSol: '04:00', tempC: -2 },
      { hourOrSol: '08:00', tempC: 5 },
      { hourOrSol: '12:00', tempC: 13 },
      { hourOrSol: '16:00', tempC: 14 },
      { hourOrSol: '20:00', tempC: 4 },
    ],
    pioneerIsruNotes: {
      en: 'Tholeiitic basaltic flows and lava tubes support qualitative ISRU simulant and shelter analogs; quantitative ilmenite wt% cutoffs require location-specific mineralogical datasets.',
      ar: 'تدعم التدفقات البازلتية الثوليتية وأنابيب الحمم دراسات المحاكيات والملاجئ نوعيًا؛ وتتطلب عتبات الإيلمنيت الكمية بيانات معدنية خاصة بالموقع.',
    },
    sources: [
      {
        id: 'wright-1975-kilauea',
        title: 'Chemical compositions of Kilauea east-rift lava, 1968–1971',
        institution: 'Journal of Petrology 16(1), 110–133',
        year: 1975,
        identifier: 'DOI:10.1093/petrology/16.1.110',
        verification: 'confirmed',
        supports: 'Whole-rock chemical compositions and petrogenetic roles of olivine, pyroxene, plagioclase, and Fe-Ti oxides in Kīlauea tholeiitic lavas.',
      },
      {
        id: 'neal-2019-kilauea',
        title: 'The 2018 rift eruption and summit collapse of Kīlauea Volcano / USGS Geologic Map I-2524',
        institution: 'Science / USGS',
        year: 2019,
        identifier: 'https://pubs.usgs.gov/',
        verification: 'confirmed',
        supports: 'Active tholeiitic basaltic shield volcano, pahoehoe & aa lava flows, tephra cones, and basaltic lava tubes (Thurston / Kazumura).',
      },
    ],
  },
  {
    id: 'canadian-arctic',
    name: { en: 'Canadian Arctic (Axel Heiberg & Lost Hammer Spring)', ar: 'القطب الشمالي الكندي (أكسل هايبرغ ونبع لوست هامر)' },
    region: { en: 'Axel Heiberg Island & Eureka, Nunavut', ar: 'جزيرة أكسل هايبرغ ويوريكا، نونافوت' },
    country: { en: 'Canada', ar: 'كندا' },
    coordinates: { lat: 79.42, lng: -90.75, label: '79.420° N, 90.750° W' },
    category: 'polar-cryogenic',
    primaryTwin: 'mars',
    image: analogArcticImg,
    researchFocus: {
      en: 'Lost Hammer perennial hypersaline spring (~−5°C discharge, ~24% salinity, ~10.0% wt/wt bulk sulfate), permafrost up to 600 m, and Axel Heiberg climate context',
      ar: 'نبع لوست هامر الدائم شديد الملوحة (تصريف ~−5°م، ملوحة ~24%، كبريتات كلية ~10.0% وزن/وزن) وتربة صقيعية حتى 600 م وسياق مناخ أكسل هايبرغ',
    },
    geologyTags: [
      { en: 'Brine ~−5°C / ~24% Salinity', ar: 'محلول ~−5°م / ملوحة ~24%' },
      { en: 'Sulfate 10.0% (wt/wt)', ar: 'كبريتات 10.0% (وزن/وزن)' },
      { en: 'Permafrost ≤600 m', ar: 'تربة صقيعية ≤600 م' },
    ],
    adaptiveSummary: {
      explorer: {
        en: 'On Axel Heiberg Island in Canada’s High Arctic, Lost Hammer Spring discharges hypersaline brine at approximately −5°C with ~24% salinity through continuous permafrost up to 600 m thick.',
        ar: 'في جزيرة أكسل هايبرغ بالقطب الشمالي الكندي، يصرّف نبع لوست هامر محلولًا ملحيًا شديد الملوحة عند درجة تقارب −5°م وبملوحة ~24% عبر تربة صقيعية مستمرة يصل سمكها إلى 600 م.',
      },
      student: {
        en: 'Lay et al. (2013; corroborated 2022) report a regional mean annual air temperature of about −15°C (winter below −40°C) on Axel Heiberg Island, while Lost Hammer Spring discharges ~−5°C brine (~24% salinity) with 10.0% (wt/wt) bulk sulfate in the spring sediment/brine system.',
        ar: 'يذكر Lay et al. (2013؛ ومؤكد في 2022) أن متوسط حرارة الهواء السنوي الإقليمي يبلغ نحو −15°م (والشتاء دون −40°م) في جزيرة أكسل هايبرغ، بينما يصرّف نبع لوست هامر محلولًا عند ~−5°م (ملوحة ~24%) مع تركيز كبريتات كلي 10.0% (وزن/وزن) في نظام الرواسب والمحلول.',
      },
      scientist: {
        en: 'Site-specific measured observations (Lay et al., 2013, DOI:10.1128/AEM.00153-13; corroborated 2022, DOI:10.1038/s41396-022-01233-8): Lost Hammer Spring discharges at ~−5°C with ~24% salinity through continuous permafrost up to 600 m; bulk sulfate in the outlet sediment/brine system is 10.0% (wt/wt) (bulk chemistry, not modal mineral phase wt%). Regional air temperature is ~−15°C mean annual (<−40°C winter). Elevation, slope, numeric RMS roughness, and broadband albedo remain unestablished (null/NA).',
        ar: 'رصودات موقعية مقيسة (Lay et al., 2013؛ ومؤكدة في 2022): يصرّف نبع لوست هامر محلولًا عند ~−5°م بملوحة ~24% عبر تربة صقيعية مستمرة تصل إلى 600 م؛ وتبلغ الكبريتات الكلية في نظام المخرج 10.0% (وزن/وزن) (كيمياء كلية وليست نسب أطوار معدنية). متوسط حرارة الهواء الإقليمي ~−15°م سنويًا (<−40°م شتاءً). تظل قيم الارتفاع والانحدار والخشونة الرقمية والبياض غير مثبتة (null/NA).',
      },
      pioneer: {
        en: 'Sub-zero hypersaline brine (~−5°C, ~24% salinity) and deep permafrost (up to 600 m) provide a direct analog for Martian cryobrine hydrology and planetary-protection protocols; NOAA Eureka tower (10.5 m) measures shortwave/longwave radiation flux separately.',
        ar: 'يوفر المحلول الملحي دون الصفر (~−5°م، ملوحة ~24%) والتربة الصقيعية العميقة (حتى 600 م) نظيرًا مباشرًا لهيدرولوجيا المحاليل المريخية المتجمدة وبروتوكولات الحماية الكوكبية؛ ويقيس برج يوريكا (10.5 م) التدفق الإشعاعي القصير والطويل بشكل منفصل.',
      },
    },
    metrics: {
      meanTempC: -15.0,
      tempMinC: -40.0,
      tempMaxC: null,
      elevationM: null,
      meanSlopeDeg: null,
      roughnessIndexDeg: null,
      waterIcePct: null,
      atmosphericPressureKpa: null,
      albedo: null,
    },
    metricQuality: {
      thermal: 'modeled',
      elevation: 'incomplete',
      slope: 'incomplete',
      roughness: 'incomplete',
      waterIce: 'incomplete',
      mineralogy: 'incomplete',
    },
    missingDataNotes: {
      en: 'Elevation, slope, numeric RMS roughness (qualitative felsenmeer, patterned ground, and glacial mudflats only), modal mineral phase wt% (10.0% wt/wt is bulk sulfate in Lost Hammer sediment/brine), and broadband albedo are not established (null/NA). Verified observations: Lost Hammer brine ~−5°C, ~24% salinity, permafrost up to 600 m, bulk sulfate 10.0% (wt/wt); regional air temp ~−15°C mean (<−40°C winter); Eureka 10.5 m flux tower shortwave/longwave radiometers.',
      ar: 'الارتفاع، والانحدار، والخشونة الرقمية (وصف نوعي فقط لحقول الصخور والأرض المضلعة والسهول الطينية الجليدية)، والنسب الوزنية للأطوار المعدنية (10.0% وزن/وزن هي كبريتات كلية في رواسب ومحلول لوست هامر)، والبياض غير مثبتة (null/NA). الرصودات الموثقة: محلول لوست هامر ~−5°م، ملوحة ~24%، تربة صقيعية حتى 600 م، كبريتات كلية 10.0% (وزن/وزن)؛ حرارة الهواء الإقليمية ~−15°م (<−40°م شتاءً)؛ وبرج إشعاع يوريكا 10.5 م.',
    },
    minerals: [
      { name: { en: 'Bulk Sulfate in Lost Hammer System (10.0% wt/wt)', ar: 'كبريتات كلية في نظام لوست هامر (10.0% وزن/وزن)' }, formula: 'SO4^2- (bulk)', percentage: null },
      { name: { en: 'Evaporite Diapirs & Salt Terraces (Qualitative)', ar: 'قباب متبخرات ومصاطب ملحية (نوعي)' }, formula: 'CaSO4 / NaCl', percentage: null },
      { name: { en: 'Continuous Deep Permafrost (up to 600 m)', ar: 'تربة صقيعية مستمرة عميقة (حتى 600 م)' }, formula: 'H2O(s)', percentage: null },
      { name: { en: 'Glacial Till & Pingos (Qualitative)', ar: 'ركام جليدي وبينغو (نوعي)' }, formula: 'Sedimentary Matrix', percentage: null },
    ],
    geologicalFeatures: [
      { en: 'Continuous deep permafrost (up to 600 m), pingos, glacial till & evaporite diapirs (GSC Map 1715A)', ar: 'تربة صقيعية مستمرة عميقة (حتى 600 م) وبينغو وركام جليدي وقباب متبخرات' },
      { en: 'Lost Hammer Spring: ~−5°C perennial hypersaline discharge (~24% salinity; 10.0% wt/wt sulfate)', ar: 'نبع لوست هامر: تصريف ملحي دائم ~−5°م (ملوحة ~24%؛ كبريتات 10.0% وزن/وزن)' },
      { en: 'Eureka, Nunavut 10.5 m flux tower (upwelling/downwelling shortwave & longwave radiation)', ar: 'برج يوريكا الإشعاعي 10.5 م في نونافوت (إشعاع قصير وطويل الموجة)' },
    ],
    thermalProfile24h: [
      { hourOrSol: '00:00', tempC: -24 },
      { hourOrSol: '04:00', tempC: -26 },
      { hourOrSol: '08:00', tempC: -19 },
      { hourOrSol: '12:00', tempC: -12 },
      { hourOrSol: '16:00', tempC: -13 },
      { hourOrSol: '20:00', tempC: -20 },
    ],
    pioneerIsruNotes: {
      en: 'Lost Hammer Spring (~−5°C, ~24% salinity, 10.0% wt/wt sulfate, permafrost up to 600 m; Lay et al., 2013 & 2022) benchmarks cryogenic brine handling and planetary-protection sterilization.',
      ar: 'يُعد نبع لوست هامر (~−5°م، ملوحة ~24%، كبريتات 10.0% وزن/وزن، تربة صقيعية حتى 600 م؛ Lay et al., 2013 & 2022) معيارًا للتعامل مع المحاليل الملحية المتجمدة وتعقيم الحماية الكوكبية.',
    },
    sources: [
      {
        id: 'lay-2013-lost-hammer',
        title: 'Defining the Functional Potential and Active Community Members of a Sediment Microbial Community in a High-Arctic Hypersaline Subzero Spring',
        institution: 'Applied and Environmental Microbiology 79(12), 3637–3648',
        year: 2013,
        identifier: 'DOI:10.1128/AEM.00153-13',
        verification: 'confirmed',
        supports: 'Lost Hammer Spring ~−5°C discharge, ~24% salinity, permafrost up to 600 m, bulk sulfate 10.0% (wt/wt) in spring system, and Axel Heiberg mean annual air temp ~−15°C (winter <−40°C).',
      },
      {
        id: 'lay-2022-isme',
        title: 'Active microbial life in subzero hypersaline Lost Hammer Spring, Canadian High Arctic',
        institution: 'The ISME Journal',
        year: 2022,
        identifier: 'DOI:10.1038/s41396-022-01233-8',
        verification: 'confirmed',
        supports: 'Corroborates Lost Hammer Spring subzero (~−5°C) hypersaline (~24% salinity) discharge through thick continuous permafrost.',
      },
      {
        id: 'zent-2010-gsc',
        title: 'Geological Survey of Canada (GSC) Map 1715A / High Arctic Permafrost & Evaporite Diapirs',
        institution: 'Geological Survey of Canada / Planetary and Space Science',
        year: 2010,
        identifier: 'https://geoscan.nrcan.gc.ca/',
        verification: 'confirmed',
        supports: 'Continuous deep permafrost, sub-zero perennial hypersaline springs, pingos, glacial till, and evaporite diapirs.',
      },
      {
        id: 'noaa-eureka-tower',
        title: 'Eureka Tower Radiation Instruments (CM22 Shortwave & Eppley PIR Longwave Radiometers)',
        institution: 'NOAA Physical Sciences Laboratory',
        year: 2009,
        identifier: 'https://psl.noaa.gov/arctic/observatories/eureka/eureka_tower.html',
        verification: 'confirmed',
        supports: '10.5 m flux tower at Eureka, Nunavut measuring upwelling and downwelling shortwave (solar) and longwave (infrared) radiation flux (W/m²).',
      },
    ],
  },
];

export const DEFAULT_WEIGHTS: ComparisonWeights = {
  thermal: 0.2,
  elevation: 0.0,
  slope: 0.25,
  roughness: 0.2,
  waterIce: 0.15,
  mineralogy: 0.2,
};

const QUALITY_RANK: Record<DataQualityLevel, number> = {
  incomplete: 0,
  illustrative: 1,
  modeled: 2,
  measured: 3,
};

const RELIABLE_TIERS: DataQualityLevel[] = ['measured', 'modeled'];
const MIN_RELIABLE_AXES = 4;

/** An axis is only as trustworthy as its weakest side. */
function weakestQuality(a: DataQualityLevel, b: DataQualityLevel): DataQualityLevel {
  return QUALITY_RANK[a] <= QUALITY_RANK[b] ? a : b;
}

function computeNormalizedSimilarity(
  earthVal: number | null,
  planetVal: number | null,
  scaleRange: number
): number | null {
  if (earthVal === null || planetVal === null) return null;
  const diff = Math.abs(earthVal - planetVal);
  const score = Math.max(0, 100 * (1 - Math.min(1, diff / scaleRange)));
  return Math.round(score);
}

function normalizeToHundred(val: number | null, min: number, max: number): number | null {
  if (val === null) return null;
  const clamped = Math.max(min, Math.min(max, val));
  return Math.round(((clamped - min) / (max - min)) * 100);
}

export function calculateComparison(
  site: EarthAnalogSite,
  region: PlanetaryRegion,
  weights: ComparisonWeights = DEFAULT_WEIGHTS
): ComparisonResult {
  // Mineralogical overlap via chemical group matching (qualitative context only)
  const mineralGroups = [
    { key: 'plagioclase', terms: ['plagioclase', 'anorthositic'] },
    { key: 'pyroxene', terms: ['pyroxene', 'clinopyroxene', 'orthopyroxene', 'olivine'] },
    { key: 'iron', terms: ['iron', 'hematite', 'ferric', 'ilmenite', 'fe-ti'] },
    { key: 'sulfates', terms: ['sulfate', 'gypsum', 'anhydrite'] },
    { key: 'chlorides', terms: ['halite', 'perchlorate', 'nacl'] },
    { key: 'carbonates', terms: ['carbonate', 'dolomite', 'calcite'] },
    { key: 'clays', terms: ['clay', 'smectite', 'palagonite', 'phyllosilicate'] },
    { key: 'ice', terms: ['ice', 'h2o', 'permafrost'] },
  ];

  const siteMinText = site.minerals.map((m) => m.name.en.toLowerCase()).join(' ');
  const regionMinText = region.minerals.map((m) => m.name.en.toLowerCase()).join(' ');

  const matchedGroups = mineralGroups.filter(
    (g) =>
      g.terms.some((t) => siteMinText.includes(t)) &&
      g.terms.some((t) => regionMinText.includes(t))
  );

  const sharedMinerals = matchedGroups.map((g) => g.key);
  const possibleGroups = mineralGroups.filter(
    (g) =>
      g.terms.some((t) => siteMinText.includes(t)) ||
      g.terms.some((t) => regionMinText.includes(t))
  );

  const mineralogySim =
    possibleGroups.length > 0
      ? Math.round((matchedGroups.length / Math.max(2, possibleGroups.length)) * 100)
      : null;

  const thermalSim = computeNormalizedSimilarity(site.metrics.meanTempC, region.metrics.meanTempC, 120);
  const elevationSim = computeNormalizedSimilarity(site.metrics.elevationM, region.metrics.elevationM, 7000);
  const slopeSim = computeNormalizedSimilarity(site.metrics.meanSlopeDeg, region.metrics.meanSlopeDeg, 15);
  const roughnessSim = computeNormalizedSimilarity(
    site.metrics.roughnessIndexDeg,
    region.metrics.roughnessIndexDeg,
    12
  );
  const waterIceSim = computeNormalizedSimilarity(site.metrics.waterIcePct, region.metrics.waterIcePct, 6.5);

  const axes: ComparisonAxisScore[] = [
    {
      key: 'thermal',
      earthNormalized: normalizeToHundred(site.metrics.meanTempC, -160, 40),
      planetNormalized: normalizeToHundred(region.metrics.meanTempC, -160, 40),
      earthDisplay:
        site.metrics.meanTempC !== null
          ? { en: `${site.metrics.meanTempC.toFixed(1)} °C (air)`, ar: `${site.metrics.meanTempC.toFixed(1)} °م (هواء)` }
          : { en: 'NA (Not established)', ar: 'غير مثبت (NA)' },
      planetDisplay:
        region.metrics.meanTempC !== null
          ? { en: `${region.metrics.meanTempC.toFixed(1)} °C`, ar: `${region.metrics.meanTempC.toFixed(1)} °م` }
          : { en: 'NA (Location/time-specific)', ar: 'غير مثبت (خاص بالموقع/الوقت)' },
      similarityPct: thermalSim,
      quality: weakestQuality(site.metricQuality.thermal, region.metricQuality.thermal),
      deltaDisplay:
        site.metrics.meanTempC !== null && region.metrics.meanTempC !== null
          ? {
              en: `${site.metrics.meanTempC - region.metrics.meanTempC > 0 ? '+' : ''}${(
                site.metrics.meanTempC - region.metrics.meanTempC
              ).toFixed(1)} °C`,
              ar: `${site.metrics.meanTempC - region.metrics.meanTempC > 0 ? '+' : ''}${(
                site.metrics.meanTempC - region.metrics.meanTempC
              ).toFixed(1)} °م`,
            }
          : { en: 'NA (Incompatible / Unverified)', ar: 'غير متاح (NA)' },
      note: {
        en: 'Air temperature and planetary surface-skin temperature are distinct variables; excluded from numeric ESI until matched.',
        ar: 'حرارة الهواء وحرارة سطح الكوكب متغيران مختلفان؛ يُستبعدان من المؤشر الرقمي لحين التوحيد.',
      },
    },
    {
      key: 'elevation',
      earthNormalized: normalizeToHundred(site.metrics.elevationM, -5000, 4000),
      planetNormalized: normalizeToHundred(region.metrics.elevationM, -5000, 4000),
      earthDisplay:
        site.metrics.elevationM !== null
          ? { en: `~${site.metrics.elevationM.toLocaleString()} m asl (basin)`, ar: `~${site.metrics.elevationM.toLocaleString()} م (حوض)` }
          : { en: 'NA (No single polygon)', ar: 'غير مثبت (NA)' },
      planetDisplay:
        region.metrics.elevationM !== null
          ? { en: `${region.metrics.elevationM.toLocaleString()} m`, ar: `${region.metrics.elevationM.toLocaleString()} م` }
          : { en: 'NA (Global datum extrema only)', ar: 'غير مثبت (مدى عالمي فقط)' },
      similarityPct: elevationSim,
      quality: weakestQuality(site.metricQuality.elevation, region.metricQuality.elevation),
      deltaDisplay:
        site.metrics.elevationM !== null && region.metrics.elevationM !== null
          ? {
              en: `${site.metrics.elevationM - region.metrics.elevationM > 0 ? '+' : ''}${(
                site.metrics.elevationM - region.metrics.elevationM
              ).toLocaleString()} m`,
              ar: `${site.metrics.elevationM - region.metrics.elevationM > 0 ? '+' : ''}${(
                site.metrics.elevationM - region.metrics.elevationM
              ).toLocaleString()} م`,
            }
          : { en: 'NA (Datum-specific)', ar: 'غير متاح (NA)' },
      note: {
        en: 'Requires named site polygons and matched vertical datums (Earth MSL vs Moon 1,737.4 km radius / Mars areoid).',
        ar: 'يتطلب مضلعات مواقع محددة ومراجع رأسية متوافقة (سطح البحر الأرضي مقابل مرجع القمر والمريخ).',
      },
    },
    {
      key: 'slope',
      earthNormalized: normalizeToHundred(site.metrics.meanSlopeDeg, 0, 14),
      planetNormalized: normalizeToHundred(region.metrics.meanSlopeDeg, 0, 14),
      earthDisplay:
        site.metrics.meanSlopeDeg !== null
          ? { en: `${site.metrics.meanSlopeDeg.toFixed(1)}°`, ar: `${site.metrics.meanSlopeDeg.toFixed(1)}°` }
          : { en: 'NA (Not established)', ar: 'غير مثبت (NA)' },
      planetDisplay:
        region.metrics.meanSlopeDeg !== null
          ? { en: `${region.metrics.meanSlopeDeg.toFixed(1)}°`, ar: `${region.metrics.meanSlopeDeg.toFixed(1)}°` }
          : { en: 'NA (Scale-dependent)', ar: 'غير مثبت (حسب المقياس)' },
      similarityPct: slopeSim,
      quality: weakestQuality(site.metricQuality.slope, region.metricQuality.slope),
      deltaDisplay:
        site.metrics.meanSlopeDeg !== null && region.metrics.meanSlopeDeg !== null
          ? {
              en: `${site.metrics.meanSlopeDeg - region.metrics.meanSlopeDeg > 0 ? '+' : ''}${(
                site.metrics.meanSlopeDeg - region.metrics.meanSlopeDeg
              ).toFixed(1)}°`,
              ar: `${site.metrics.meanSlopeDeg - region.metrics.meanSlopeDeg > 0 ? '+' : ''}${(
                site.metrics.meanSlopeDeg - region.metrics.meanSlopeDeg
              ).toFixed(1)}°`,
            }
          : { en: 'NA (DEM polygon required)', ar: 'غير متاح (NA)' },
      note: {
        en: 'Ineligible for numeric ESI/RMHI until reproducibly derived from documented DEM tiles and matched polygons.',
        ar: 'غير مؤهل لحساب ESI/RMHI الرقمي لحين استخلاصه من شرائح DEM ومضلعات موثقة.',
      },
    },
    {
      key: 'roughness',
      earthNormalized: normalizeToHundred(site.metrics.roughnessIndexDeg, 0, 14),
      planetNormalized: normalizeToHundred(region.metrics.roughnessIndexDeg, 0, 14),
      earthDisplay:
        site.metrics.roughnessIndexDeg !== null
          ? { en: `${site.metrics.roughnessIndexDeg.toFixed(1)}° RMS`, ar: `${site.metrics.roughnessIndexDeg.toFixed(1)}° RMS` }
          : { en: 'NA (Qualitative only)', ar: 'غير مثبت (وصف نوعي فقط)' },
      planetDisplay:
        region.metrics.roughnessIndexDeg !== null
          ? { en: `${region.metrics.roughnessIndexDeg.toFixed(1)}° RMS`, ar: `${region.metrics.roughnessIndexDeg.toFixed(1)}° RMS` }
          : { en: 'NA (Qualitative terrain)', ar: 'غير مثبت (تضاريس نوعية)' },
      similarityPct: roughnessSim,
      quality: weakestQuality(site.metricQuality.roughness, region.metricQuality.roughness),
      deltaDisplay:
        site.metrics.roughnessIndexDeg !== null && region.metrics.roughnessIndexDeg !== null
          ? {
              en: `${site.metrics.roughnessIndexDeg - region.metrics.roughnessIndexDeg > 0 ? '+' : ''}${(
                site.metrics.roughnessIndexDeg - region.metrics.roughnessIndexDeg
              ).toFixed(1)}°`,
              ar: `${site.metrics.roughnessIndexDeg - region.metrics.roughnessIndexDeg > 0 ? '+' : ''}${(
                site.metrics.roughnessIndexDeg - region.metrics.roughnessIndexDeg
              ).toFixed(1)}°`,
            }
          : { en: 'NA (Disabled)', ar: 'معطّل (NA)' },
      note: {
        en: 'Terrain RMS is disabled across all 7 sites: no comparable verified centimeter-scale RMS dataset exists.',
        ar: 'تم تعطيل خشونة السطح الرقمية عبر المواقع السبعة لعدم توفر قياسات RMS سنتيمترية موثقة وموحدة المقياس.',
      },
    },
    {
      key: 'waterIce',
      earthNormalized: normalizeToHundred(site.metrics.waterIcePct, 0, 6),
      planetNormalized: normalizeToHundred(region.metrics.waterIcePct, 0, 6),
      earthDisplay:
        site.metrics.waterIcePct !== null
          ? { en: `${site.metrics.waterIcePct.toFixed(2)} wt%`, ar: `${site.metrics.waterIcePct.toFixed(2)} % وزن` }
          : { en: 'NA (Distinct variables)', ar: 'غير مثبت (متغيرات مختلفة)' },
      planetDisplay:
        region.metrics.waterIcePct !== null
          ? { en: `${region.metrics.waterIcePct.toFixed(2)} wt%`, ar: `${region.metrics.waterIcePct.toFixed(2)} % وزن` }
          : { en: 'NA (Location/depth-specific)', ar: 'غير مثبت (خاص بالموقع/العمق)' },
      similarityPct: waterIceSim,
      quality: weakestQuality(site.metricQuality.waterIce, region.metricQuality.waterIce),
      deltaDisplay:
        site.metrics.waterIcePct !== null && region.metrics.waterIcePct !== null
          ? {
              en: `${site.metrics.waterIcePct - region.metrics.waterIcePct > 0 ? '+' : ''}${(
                site.metrics.waterIcePct - region.metrics.waterIcePct
              ).toFixed(2)} %`,
              ar: `${site.metrics.waterIcePct - region.metrics.waterIcePct > 0 ? '+' : ''}${(
                site.metrics.waterIcePct - region.metrics.waterIcePct
              ).toFixed(2)} %`,
            }
          : { en: 'NA (Not interchangeable)', ar: 'غير قابل للمقارنة المباشرة (NA)' },
      note: region.metricNotes.waterIceNote,
    },
    {
      key: 'mineralogy',
      earthNormalized: mineralogySim,
      planetNormalized: 100,
      earthDisplay: {
        en: `${matchedGroups.length} shared classes (qualitative)`,
        ar: `${matchedGroups.length} فئات مشتركة (نوعي)`,
      },
      planetDisplay: {
        en: `${region.minerals.length} qualitative groups`,
        ar: `${region.minerals.length} مجموعات نوعية`,
      },
      similarityPct: mineralogySim,
      quality: weakestQuality(site.metricQuality.mineralogy, region.metricQuality.mineralogy),
      deltaDisplay: {
        en: `${matchedGroups.length} / ${possibleGroups.length} qualitative overlap`,
        ar: `${matchedGroups.length} / ${possibleGroups.length} تطابق نوعي`,
      },
      note: {
        en: 'Qualitative mineral class overlap only; numeric ESI/IFS mineral vectors are disabled until compatible wt% phase datasets exist.',
        ar: 'تطابق نوعي للفئات المعدنية فقط؛ المتجهات المعدنية الرقمية معطّلة لحين توفر بيانات أطوار وزنية متوافقة.',
      },
    },
  ];

  const missingAxes = axes.filter((a) => a.similarityPct === null).map((a) => a.key);
  const reliableAxes = axes.filter(
    (a) => a.similarityPct !== null && RELIABLE_TIERS.includes(a.quality)
  );
  const availableAxes = axes.filter((a) => a.similarityPct !== null);
  const verifiedAxisCount = reliableAxes.length;

  const weightedScore = (list: ComparisonAxisScore[]): number | null => {
    const total = list.reduce((acc, a) => acc + weights[a.key], 0);
    if (total <= 0) return null;
    const sum = list.reduce((acc, a) => acc + (a.similarityPct ?? 0) * weights[a.key], 0);
    return Math.round(sum / total);
  };

  let overallScore: number | null = null;
  let provisionalScore: number | null = null;
  let insufficiencyReason: { en: string; ar: string } | null = null;

  if (reliableAxes.length >= MIN_RELIABLE_AXES) {
    overallScore = weightedScore(reliableAxes);
  } else {
    provisionalScore = availableAxes.length >= 3 ? weightedScore(availableAxes) : null;
    insufficiencyReason = {
      en: `ESI / IFS / RMHI Data Gate (NA): On the current research dataset, no cross-planet dimension set meets the eligibility gate (${reliableAxes.length} of ${axes.length} axes sourced on both sides; requires >= ${MIN_RELIABLE_AXES} compatible, same-scale, same-unit axes). Terrain RMS, slope, harmonized temperature, quantitative modal mineral wt%, and standardized water/ice wt% remain NA/null, so numeric composite scoring returns NA.`,
      ar: `بوابة التحقق للخوارزميات ESI / IFS / RMHI (غير متاح NA): وفق بيانات البحث الحالية، لا يستوفي أي محور كوكبي مشترك شروط الحساب الرقمي (${reliableAxes.length} من ${axes.length} محاور موثقة من الجانبين؛ يتطلب ≥ ${MIN_RELIABLE_AXES} محاور متوافقة في الوحدة والمقياس). تظل قيم خشونة السطح والانحدار والحرارة الموحدة والنسب الوزنية للمعادن والماء غير مثبتة (NA/null)، لذا تُرجع النتيجة المركبة NA.`,
    };
  }

  const keySimilarities: { en: string; ar: string }[] = [];
  const keyDivergences: { en: string; ar: string }[] = [];

  if (matchedGroups.length >= 2) {
    keySimilarities.push({
      en: `Shared qualitative mineral/lithologic classes (${sharedMinerals.join(', ')}) indicate analogous geological processes.`,
      ar: `تشير الفئات المعدنية والليثولوجية المشتركة نوعيًا إلى عمليات جيولوجية متشابهة.`,
    });
  }
  if (slopeSim !== null && slopeSim >= 75) {
    keySimilarities.push({
      en: `Comparable terrain slope (${site.metrics.meanSlopeDeg}° vs ${region.metrics.meanSlopeDeg}°).`,
      ar: `تقارب في انحدار التضاريس (${site.metrics.meanSlopeDeg}° مقابل ${region.metrics.meanSlopeDeg}°).`,
    });
  }
  if (waterIceSim !== null && waterIceSim >= 75) {
    keySimilarities.push({
      en: `Aligned regolith moisture / water inventory (${site.metrics.waterIcePct}% vs ${region.metrics.waterIcePct}%).`,
      ar: `تقارب في مخزون الرطوبة أو الماء (${site.metrics.waterIcePct}% مقابل ${region.metrics.waterIcePct}%).`,
    });
  }
  if (keySimilarities.length === 0) {
    keySimilarities.push({
      en: `Provides qualitative lithologic and process similarity—not physical equivalence—for instrument and field protocol testing.`,
      ar: `يوفر تشابهًا جيولوجيًا ونوعيًا—وليس تكافؤًا فيزيائيًا مطلقًا—لاختبار الأجهزة وبروتوكولات العمل الميداني.`,
    });
  }

  keyDivergences.push({
    en: `Similarity is not equivalence: Earth gravity (1.0 g vs 0.166 g Moon / 0.38 g Mars), atmospheric shielding, and surface pressure cannot be replicated on Earth.`,
    ar: `التشابه ليس تكافؤًا مطلقًا: جاذبية الأرض (1.0 g مقابل 0.166 g على القمر و0.38 g على المريخ) والدرع الجوي والضغط السطحي لا يمكن محاكاتها على الأرض.`,
  });

  keyDivergences.push({
    en: `Radiation environment differs sharply: Chang’E-4 LND measured 1,369 µSv/day (1.369 mSv/day) on the Moon and Curiosity RAD measured 0.64 ± 0.12 mSv/day GCR on Mars, whereas Earth analogs record solar/UV station flux.`,
    ar: `تختلف البيئة الإشعاعية جذريًا: قاس Chang’E-4 LND معدل 1,369 ميكروسيفرت/يوم (1.369 ملي سيفرت/يوم) على القمر وقاس Curiosity RAD معدل 0.64 ± 0.12 ملي سيفرت/يوم على المريخ، بينما ترصد محطات الأرض الإشعاع الشمسي ومؤشر UV.`,
  });

  return {
    site,
    region,
    overallScore,
    provisionalScore,
    isReliable: overallScore !== null,
    verifiedAxisCount,
    totalAxisCount: axes.length,
    missingAxes,
    insufficiencyReason,
    axes,
    sharedMinerals,
    keySimilarities,
    keyDivergences,
  };
}

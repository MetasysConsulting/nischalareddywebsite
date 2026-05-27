// Portfolio data — sourced from resume + current portfolio + Arteryx update
export const PROFILE = {
  name: "Nischala Reddy Bujangari",
  shortName: "Nischala Reddy",
  title: "Senior Product Manager & Data / AI Consultant",
  email: "nischalareddybujangari@gmail.com",
  upwork: "https://www.upwork.com/freelancers/nischalareddy?mp_source=share",
  linkedin: "https://www.linkedin.com/in/nischala-reddy-bujangari-a09176148/",
  resumeUrl:
    "https://customer-assets.emergentagent.com/job_189b2589-456b-4085-8992-0a10c2997e90/artifacts/xli2ffyw_Nischala%20R.pdf",
  photo:
    "https://static.wixstatic.com/media/41241d_90e8b356c0fd4c7dbc14bb81db909574~mv2.jpg",
  location: "Vancouver, Canada · Permanent Resident",
  yearsExperience: 10,
  summary:
    "A results-driven product leader with 10+ years across Product Management, SaaS product development, Business Analysis, Data Analytics and GenAI-driven innovation. I translate complex business needs into shipped SaaS platforms, AI features, and analytics products for Healthcare, Finance, Retail & E-commerce, Media, HR-Tech, Digital Marketing and Supply Chain.",
};

export const METRICS = [
  { value: "10+", label: "Years of Product Experience" },
  { value: "7", label: "Industries Served" },
  { value: "20+", label: "Brands & Enterprise Clients" },
  { value: "40+", label: "Tools & Platforms Shipped" },
];

export const INDUSTRIES = [
  "Healthcare",
  "Finance",
  "Retail & E-commerce",
  "Media",
  "HR Tech",
  "Digital Marketing",
  "Supply Chain",
];

export const SERVICES = [
  {
    id: "ai-product",
    title: "AI Product Strategy",
    sub: "LLMs · RAG · Agents",
    bullets: [
      "End-to-end GenAI feature scoping and roadmap",
      "RAG pipeline design + vendor / model selection",
      "Evaluation frameworks and guardrails",
    ],
  },
  {
    id: "dashboards",
    title: "Dashboard & BI Build",
    sub: "Looker · Power BI · Tableau · Qlik",
    bullets: [
      "Executive dashboards with productized metrics",
      "Semantic layers, DAX/SQL automation",
      "A/B test and growth funnel reporting",
    ],
  },
  {
    id: "data-pipelines",
    title: "Data Pipelines & Platforms",
    sub: "Redshift · BigQuery · Snowflake · dbt",
    bullets: [
      "Ingestion → warehouse → activation pipelines",
      "Web scraping & 3rd-party data integration",
      "Data quality, lineage, and observability",
    ],
  },
  {
    id: "consulting",
    title: "Digital Adoption & CDAP Advisory",
    sub: "Roadmaps · Maturity · ROI",
    bullets: [
      "Digital Adoption Plans (DAP) with phased roadmap",
      "Maturity assessments and gap analysis",
      "CRM / ERP integration blueprints",
    ],
  },
];

export const CASE_STUDIES = [
  {
    id: "trials-guru",
    category: "AI / ML Product Development",
    title: "Trials Guru — Clinical Intelligence",
    problem:
      "Medical-affairs analysts spent days hunting through 1M+ trial documents to answer single therapeutic questions, delaying go/no-go decisions.",
    blurb:
      "Designed a GenAI + RAG product turning 30+ years of trial literature into a queryable knowledge layer — cut research turnaround by ~30%.",
    impact: ["RAG over 1M+ docs", "30% faster decisions", "Adopted by 4 product squads"],
    stack: ["GPT-4o", "RAG", "Vector DB", "Power BI", "Looker"],
    image:
      "https://static.prod-images.emergentagent.com/jobs/189b2589-456b-4085-8992-0a10c2997e90/images/210d4b39e97fadfb24a3fe0ae7d670e240c38210b3acf4cc3a8f4ac10da50203.png",
    size: "lg",
  },
  {
    id: "supply-chain",
    category: "Supply Chain & Shipping Analytics",
    title: "Shipping Data Products @ Arteryx",
    problem:
      "Planners and ops teams had no SKU-level shipping visibility or lane performance signals — exceptions surfaced days late.",
    blurb:
      "Productized shipping & supply-chain pipelines for the D&A org — SKU-level visibility, lane performance, and real-time exception alerts.",
    impact: ["Lane KPI suite", "Daily reconciliation", "Exception alerting"],
    stack: ["SQL", "Airflow", "Power BI", "Python", "AWS"],
    image:
      "https://images.unsplash.com/photo-1583857671904-a716bf4ee5d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHw0fHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMGxvZ2lzdGljcyUyMHN1bnNldHxlbnwwfHx8fDE3NzkwNTYxMjN8MA&ixlib=rb-4.1.0&q=85",
    size: "lg",
  },
  {
    id: "retail-hm",
    category: "Retail Analytics & Consulting",
    title: "H&M — Retail Insight & Workforce Analytics",
    problem:
      "Retail merchandising decisions were made on weekly aggregates with no predictive view of cohorts or store-level demand.",
    blurb:
      "Built predictive cohort models, A/B testing infrastructure, and segmentation playbooks that informed merchandising and workforce planning for global retail clients.",
    impact: ["28% top-funnel lift", "Predictive cohort modeling", "Retail KPI playbook"],
    stack: ["R", "Python", "Tableau", "SAS", "SQL"],
    image:
      "https://images.unsplash.com/photo-1774872781975-b1149a9cd24b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxyZXRhaWwlMjBmYXNoaW9uJTIwc3RvcmUlMjBhYnN0cmFjdHxlbnwwfHx8fDE3NzkwNTYxMjN8MA&ixlib=rb-4.1.0&q=85",
    size: "md",
  },
  {
    id: "cdap",
    category: "Consulting / CDAP",
    title: "CDAP Digital Adoption Program",
    problem:
      "SMB clients knew they needed to digitize but lacked clarity on where to start, what to fund, and how to sequence investments.",
    blurb:
      "Led discovery, maturity assessments, and phased Digital Adoption Plans for SMB clients under the Canada Digital Adoption Program.",
    impact: ["12 DAPs delivered", "20–30% projected ROI", "CRM / ERP blueprints"],
    stack: ["Aha!", "Jira", "Confluence", "Lucid"],
    image:
      "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHx3aGl0ZWJvYXJkJTIwc3RyYXRlZ3klMjBtZWV0aW5nfGVufDB8fHx8MTc3OTA1NjEyNHww&ixlib=rb-4.1.0&q=85",
    size: "md",
  },
  {
    id: "growth-aljazeera",
    category: "Data Analytics & Growth",
    title: "Al Jazeera — Product-Led Growth",
    problem:
      "Newsroom growth had plateaued — no behavioural analytics in place, no clear funnel, and acquisition cost was climbing.",
    blurb:
      "Owned growth and analytics for the digital newsroom — built referral loops, A/B testing, behavioural analytics, and SEO across web + apps.",
    impact: ["+35% acquisition", "+22% session", "−15% CAC"],
    stack: ["Amplitude", "Firebase", "Looker", "BigQuery", "GA4"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwc2NyZWVufGVufDB8fHx8MTc3OTA1NjEyM3ww&ixlib=rb-4.1.0&q=85",
    size: "md",
  },
  {
    id: "dashboards",
    category: "Dashboard Building",
    title: "Executive Dashboards (Looker · PowerBI · Tableau)",
    problem:
      "Leadership teams across pharma, media, fintech and retail were drowning in ad-hoc reports with no single source of truth.",
    blurb:
      "Designed and shipped 25+ executive and operations dashboards — semantic layers, DAX automation, and self-serve cuts that retired hundreds of one-off requests.",
    impact: ["25+ dashboards", "Self-serve adoption", "DAX automation"],
    stack: ["Looker", "Power BI", "Tableau", "Qlik", "DAX"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    size: "sm",
  },
  {
    id: "scraping",
    category: "Web Scraping & Data Pipelines",
    title: "Web Scraping & Ingestion Pipelines",
    problem:
      "Strategy teams needed competitive and market intelligence at daily cadence but data lived behind 50+ unstructured public sources.",
    blurb:
      "Built scraping + normalization pipelines feeding competitive intelligence and market data into Redshift / Supabase warehouses with schema-on-read.",
    impact: ["50+ sources", "Daily refresh", "Schema-on-read"],
    stack: ["Python", "Playwright", "Redshift", "Supabase", "Airflow"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    size: "sm",
  },
  {
    id: "ba-fintech",
    category: "Business Analysis",
    title: "Fintech ERP — Lease & Loan Management",
    problem:
      "A legacy ERP suite was bleeding defects and slowing every release of payments, lease booking and asset management modules.",
    blurb:
      "Owned full SDLC for Odessa's Lease & Loan Management ERP — BRDs, BPMNs, wireframes, financial QA automation. 40% defect reduction.",
    impact: ["40% fewer defects", "25% faster QA", "End-to-end SDLC"],
    stack: ["BRD", "BPMN", "Wireframes", "SQL", "Agile"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
    size: "sm",
  },
];

export const EXPERIENCE = [
  {
    range: "2025 — Present",
    company: "Arteryx",
    role: "Project Manager — Supply Chain Analytics (Data & Analytics org)",
    bullets: [
      "Lead the roadmap for shipping data products and supply chain analytics pipelines within the broader D&A organization.",
      "Productize ingestion → warehouse → activation flows for SKU-level visibility, lane performance and exception alerting consumed by planners and ops daily.",
      "Run cross-functional delivery with data engineering, data science, finance and operations — Agile/Scrum cadence, story-mapping, and OKR-aligned roadmaps.",
      "Define KPIs, exception thresholds, and executive reporting cadence; partnered with finance to tie supply-chain metrics to P&L impact.",
      "Champion data-product thinking — treating each pipeline as a versioned, SLA-backed product with documented contracts and consumers.",
    ],
  },
  {
    range: "2023 — 2025",
    company: "Amgen",
    role: "Product Manager — Analytics & Generative AI",
    bullets: [
      "Owned product roadmap for analytics & GenAI features powering medical-affairs and clinical-trial workflows.",
      "Spearheaded GenAI / LLM / RAG integration into Trials Guru and Lit Explorer — improving decision speed by ~30%.",
      "Led UI/UX wireframing, AI-feature enablement, and end-to-end agile delivery (SAFe) across multiple product squads.",
      "Built Looker and Power BI dashboards exposing pipeline health, model performance and user adoption.",
      "Partnered with data science, engineering, business and compliance — driving feature delivery from discovery to launch.",
      "Increased NPS by 20% in a quarter; reduced internal defect rates by 40% via release-readiness rituals.",
    ],
  },
  {
    range: "2022 — 2023",
    company: "Al Jazeera Media Network",
    role: "Digital Product Owner — Growth & Analytics",
    bullets: [
      "Owned product-led growth for the digital newsroom across web, iOS and Android — referral loops, onboarding, and SEO/Hreflang optimization.",
      "Stood up the analytics stack: Amplitude, Firebase, GA4, Looker, BigQuery — and built executive dashboards used in weekly C-suite reviews.",
      "Ran 40+ A/B experiments on headlines, surfacing, and feed personalisation; lifted acquisition 35%, session 22%, conversion 19%.",
      "Reduced CAC by 15% and grew target-region viewership 40% by re-architecting feed surfacing and notification taxonomy.",
      "Managed vendor relationships across YouTube, Google News, Meta and Twitter for distribution and SEO partnerships.",
    ],
  },
  {
    range: "2021 — 2022",
    company: "Ernst & Young — People Advisory Services",
    role: "Senior Consultant / Product Owner",
    bullets: [
      "Delivered retail and workforce-analytics engagements for H&M, Credit Suisse, Swiss Bank, and USAID.",
      "Built predictive cohort models, segmentation playbooks, and post-COVID productivity dashboards using R, Python, Tableau and SAS.",
      "Automated BI: DAX-based dashboards and SQL pipelines that retired hundreds of recurring ad-hoc requests.",
      "Led change management — comms plans, training, and adoption tracking for analytics rollouts.",
    ],
  },
  {
    range: "2019 — 2021",
    company: "Odessa Technologies",
    role: "Senior Business Analyst → Product Owner",
    bullets: [
      "Owned the SDLC for Lease & Loan Management ERP modules — payments, lease booking, asset management.",
      "Authored BRDs, BPMNs, user stories, and wireframes; partnered with engineering on design reviews and acceptance criteria.",
      "Designed and integrated analytics features within the ERP, including reporting cubes and lease-performance dashboards.",
      "Drove 40% defect reduction and 25% faster QA via test automation and regression tightening.",
      "Led API integration design across CRM/ERP boundaries and GTM enablement for new module launches.",
    ],
  },
  {
    range: "2017 — 2019",
    company: "Barclays",
    role: "Business Analyst — Workforce Analytics",
    bullets: [
      "Led workforce-analytics reporting and strategic recommendation cycles for a global retail-banking division.",
      "Built R / SPSS / SQL pipelines for headcount, attrition, and capacity-planning models.",
      "Designed wireframes and UI specs for internal analytics tools — ran pilot tests and adoption tracking.",
      "Partnered with HR leadership on workforce-planning recommendations that fed annual budgeting.",
    ],
  },
];

// Freelance / contract engagements — independent client work
export const FREELANCE = [
  {
    name: "Community Connect Labs",
    domain: "communityconnectlabs.com",
    industry: "Civic Tech · SaaS",
    logoUrl:
      "https://assets-global.website-files.com/5a18dcffca1ffe0001627dc8/5c96130d5469cc1bacbc7e77_ccl-logo_white.svg",
    logoInvert: false,
    logoOnDark: true,
    blurb:
      "Product discovery and roadmap for SMS-first outreach SaaS — feature scoping, user-journey mapping, and analytics instrumentation.",
  },
  {
    name: "Cook & Boardman",
    domain: "cookandboardman.com",
    industry: "Construction · Supply",
    logoUrl:
      "https://customer-assets.emergentagent.com/job_upwork-showcase-1/artifacts/48jh5tfb_Screenshot%202026-05-18%20at%204.52.27%E2%80%AFAM.png",
    blurb:
      "Sales-ops analytics and dashboard build — pipeline health, regional performance, and quoting velocity for the field team.",
  },
  {
    name: "Prepay Nation",
    domain: "prepaynation.com",
    industry: "Fintech · Telecom",
    logoUrl: "https://www.google.com/s2/favicons?domain=prepaynation.com&sz=128",
    blurb:
      "Product analytics, partner-portal UX, and reporting automation for cross-border airtime transfer flows.",
  },
  {
    name: "Innovative Analytics — CDAP",
    domain: "innovativeanalytics.ca",
    industry: "Consulting · CDAP",
    logoUrl: "https://www.google.com/s2/favicons?domain=innovativeanalytics.ca&sz=128",
    blurb:
      "Led 12+ Digital Adoption Plans under Canada Digital Adoption Program — gap analysis, ROI modeling, CRM/ERP blueprints.",
  },
  {
    name: "MediRate",
    domain: "medirate.net",
    industry: "Healthcare · Data",
    logoUrl: "https://www.google.com/s2/favicons?domain=medirate.net&sz=128",
    blurb:
      "Healthcare reimbursement data product — schema design, ingestion automation, and analyst-facing dashboards.",
  },
  {
    name: "Trusum Solutions",
    domain: "trusum.com",
    industry: "Tech Services",
    logoUrl: "https://trusum.com/apple-touch-icon.png",
    blurb:
      "Discovery & BA for a workforce-management SaaS — user stories, wireframes, and acceptance criteria across 3 modules.",
  },
  {
    name: "Timebox Solutions",
    domain: "timeboxsolutions.ca",
    industry: "SaaS · Productivity",
    logoUrl: "https://www.google.com/s2/favicons?domain=timeboxsolutions.ca&sz=128",
    blurb:
      "End-to-end product management for a B2B scheduling SaaS — onboarding, billing, and analytics instrumentation.",
  },
  {
    name: "Everstell",
    domain: "everstell.com",
    industry: "E-commerce · SaaS",
    logoUrl: "https://www.google.com/s2/favicons?domain=everstell.com&sz=128",
    blurb:
      "Storefront analytics + GenAI-assisted merchandising research — competitor scraping pipelines and Hex notebooks.",
  },
  {
    name: "Ebunch Marketing",
    domain: "ebunchmarketing.com",
    industry: "Digital Marketing",
    logoUrl: "https://www.google.com/s2/favicons?domain=ebunchmarketing.com&sz=128",
    blurb:
      "Marketing-ops dashboards (GA4, Looker, Mixpanel) and campaign performance attribution for multi-channel agencies.",
  },
  {
    name: "Designer Metals",
    domain: "designermetals.com",
    industry: "Manufacturing · Retail",
    logoUrl: "https://www.google.com/s2/favicons?domain=designermetals.com&sz=128",
    blurb:
      "Order-management product redesign and inventory analytics — built quoting workflow + reporting for ops team.",
  },
  {
    name: "Empire Sports",
    domain: "empiresports.co",
    industry: "E-commerce · Retail",
    logoUrl: "https://www.google.com/s2/favicons?domain=empiresports.co&sz=128",
    blurb:
      "Shopify analytics, GenAI product-description automation, and SEO/conversion dashboards.",
  },
];

export const SKILLS = [
  {
    group: "AI / GenAI (2025)",
    items: [
      "GPT-5 / GPT-4o",
      "Claude Sonnet 4.5",
      "Gemini 2.5 Pro",
      "RAG Pipelines",
      "MCP / Tool Use",
      "LangChain · LangGraph",
      "LlamaIndex",
      "Vector DBs (Pinecone, pgvector)",
      "Agentic Workflows",
      "Eval & Guardrails",
    ],
  },
  {
    group: "Modern Data Stack",
    items: [
      "Snowflake",
      "Databricks",
      "BigQuery",
      "Redshift",
      "dbt",
      "Fivetran · Airbyte",
      "Airflow · Dagster",
      "Kafka · Kinesis",
      "Supabase · Postgres",
      "AWS · GCP · Azure",
    ],
  },
  {
    group: "BI & Analytics",
    items: [
      "Looker",
      "Power BI",
      "Tableau",
      "Qlik",
      "Hex",
      "ThoughtSpot",
      "Amplitude",
      "Mixpanel",
      "GA4 · Firebase",
      "SQL · DAX · LookML",
    ],
  },
  {
    group: "Product & Delivery",
    items: [
      "Roadmapping (Aha! · ProductBoard)",
      "Jira · Linear · Confluence",
      "SAFe · Scrum · Kanban",
      "Discovery & OKRs",
      "PMP · CSM · SAFe Agilist",
      "Stakeholder Mgmt",
      "RICE / WSJF Prioritization",
      "Story Mapping",
    ],
  },
  {
    group: "Automation & Build",
    items: [
      "Python · Pandas · NumPy",
      "Cursor · Claude Code",
      "n8n · Zapier · Make",
      "Playwright (Scraping)",
      "Figma · FigJam",
      "Notion AI · Loom",
      "REST · GraphQL APIs",
      "Git · GitHub Actions",
    ],
  },
];

export const CLIENT_LOGOS = [
  { name: "H&M" },
  { name: "Amgen" },
  { name: "Al Jazeera" },
  { name: "Ernst & Young" },
  { name: "Barclays" },
  { name: "Credit Suisse" },
  { name: "Odessa" },
  { name: "USAID" },
  { name: "Arteryx" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Nischala's work was of high quality. They met all of my requirements and expectations, and they even went above and beyond to deliver a great product.",
    name: "Supreet Jain",
    role: "Prepaynation",
  },
  {
    quote:
      "Sharp product instincts paired with rare data fluency — she turned a fuzzy analytics brief into a shippable, measurable roadmap.",
    name: "Engagement Lead",
    role: "EY · People Advisory Services",
  },
];

export const EDUCATION = [
  {
    range: "2022 — 2023",
    school: "Douglas College, Vancouver",
    degree: "Post-Graduate Diploma — Project Management",
  },
  {
    range: "2017 — 2019",
    school: "Great Lakes Institute of Management",
    degree: "MBA · Dual Majors in Finance & Analytics",
  },
];

export const CERTS = ["PMP", "Certified Scrum Master (CSM)", "SAFe Agilist"];

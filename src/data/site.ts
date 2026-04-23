export const site = {
  name: "Bujangari, Nischala",
  firstName: "Nischala",
  title: "Product & Analytics Leader",
  phone: "(604) 805-7666",
  phoneRaw: "6048057666",
  emails: {
    primary: "nischalareddybujangari@gmail.com",
    secondary: "nischalareddy26@gmail.com",
  },
  social: {
    email: "nischalareddybujangari@gmail.com",
  },
  headshot: "/images/headshot.jpeg",
} as const;

/** Use `**term**` for bold phrases in the portfolio hero (see RichAbout) */
export const aboutIntro = {
  kicker: "Welcome To My Portfolio!",
  subtitle: "A little bit about me!",
  body: `A dynamic and results-driven professional with 8+ years of experience in **Product Management**, **Business Analysis**, **Data Analytics**, and **AI-driven innovation**. I bring a proven track record of delivering scalable digital products by combining strategic planning, data-driven decision-making, and hands-on execution across diverse industries.

With expertise spanning **Media**, **Financial Services**, **Investment Banking**, **Fintech**, **Supply Chain**, and **Retail & E-Commerce**, I specialize in translating complex business needs into impactful product solutions. I’ve led initiatives involving **Generative AI (LLMs)**, **data platform architecture**, and **intelligent automation**, enabling faster insights, smarter user experiences, and measurable growth.

My career is marked by a deep commitment to **digital transformation**, **AI integration**, **Product Roadmap** and **cross-functional leadership**—bridging business strategy with cutting-edge technology to drive innovation and operational excellence.`,
} as const;

export type ExperienceItem = {
  start: string;
  end: string;
  org: string;
  role: string;
  type: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    start: "Aug 2023",
    end: "Mar 2024",
    org: "ADT Innovative Analytics — CDAP Program",
    role: "Business Consultant",
    type: "Full Time — Contract",
    bullets: [
      "Led digital product strategy and transformation initiatives under the CDAP program, identifying digital gaps and designing phased roadmaps to improve client maturity and ROI (20–30% projected uplift).",
      "Delivered Digital Adoption Plans (DAPs) with prioritized features, CRM/ERP integrations, and implementation blueprints.",
      "Managed cross-functional teams and vendor coordination, while applying Agile-inspired velocity tracking and scope control.",
      "Maintained close stakeholder alignment to ensure product recommendations met evolving business goals.",
    ],
  },
  {
    start: "June 2022",
    end: "Aug 2023",
    org: "Al Jazeera Media Network",
    role: "Digital Product Owner — Growth and Analytics",
    type: "Full Time — Contract",
    bullets: [
      "Drove viewership, trend analysis, user behaviour and user management through KPI-driven feature development, referral and organic growth loops, and strong vendor management.",
      "Led digital marketing across YouTube, Instagram, Google News, SEO, Facebook, and X; strategic third-party relationships and a focused product roadmap.",
      "Rolled out extensive A/B testing and set up and managed Amplitude and other analytics platforms for growth and retention insights.",
    ],
  },
  {
    start: "Sep 2021",
    end: "Apr 2022",
    org: "EY (Ernst and Young)",
    role: "Senior Consultant / Product Owner — People Advisory Services",
    type: "Full Time",
    bullets: [
      "Supported e-commerce, retail and financial services work with data analytics, predictive insight and client engagement for H&M, Credit Suisse, USAID and other accounts.",
    ],
  },
  {
    start: "Jul 2020",
    end: "Sep 2021",
    org: "Odessa Technologies",
    role: "Product Owner — Product Delivery",
    type: "Full Time",
    bullets: [
      "Led fintech ERP design and delivery end-to-end—roadmap, design, testing and build—in an Agile way of working.",
    ],
  },
  {
    start: "Apr 2019",
    end: "Jul 2020",
    org: "Odessa Technologies",
    role: "Senior Business Analyst",
    type: "Full Time",
    bullets: [
      "Gathered requirements, built BRDs, BPMNs and user stories, and wireframed fintech modules: payments, lease booking and asset management, with analytics in lease/loan software.",
      "Drove API integrations, ERP/CRM work and data-rich reporting for customers.",
    ],
  },
];

export const projectHighlights = [
  { title: "CDAP digital transformation", org: "ADT / CDAP program", href: "#experience" },
  { title: "Growth & analytics, global media", org: "Al Jazeera", href: "#experience" },
  { title: "People analytics & advisory", org: "EY", href: "#experience" },
] as const;

export const education = [
  {
    years: "2022 – 2023",
    school: "Douglas College",
    credential: "Project Management — Diploma",
  },
  {
    years: "2017 – 2019",
    school: "Great Lakes",
    credential: "MBA with dual majors in Finance and Analytics",
  },
] as const;

export const clientLogos = [
  { name: "Barclays", file: "BARCLAYS.png" },
  { name: "EY", file: "eY.png" },
  { name: "Al Jazeera", file: "ALJAZEERA.png" },
  { name: "Odessa", file: "ODESSA.png" },
  { name: "INOV", file: "INOV .png" },
  { name: "Trusum", file: "TRUSUM .png" },
  { name: "PrePayNation", file: "PREPAYNATION .png" },
  { name: "Timebox", file: "TIMEBOX .png" },
  { name: "Everstell", file: "EVERSTELL .png" },
] as const;

export type ExpertiseItem = { title: string; body: string };
export const expertise: ExpertiseItem[] = [
  {
    title: "Digital products — growth",
    body: `Specialized in driving growth for digital products through strategic planning, user engagement optimization, and leveraging data analytics to enhance product performance and market reach.

Excelled in identifying growth opportunities, implementing innovative marketing strategies, and using A/B testing, Hreflang tags and user feedback to continuously refine and evolve digital product offerings.`,
  },
  {
    title: "Data analysis & visualization",
    body: `Worked with diverse industry clients to mine data for actionable insights. I believe data is the new currency; I have worked on extremely complex datasets utilizing advanced analytical tools and techniques to support strategic decision-making processes.`,
  },
  {
    title: "Change management",
    body: `Skilled in leading and facilitating organizational change, adept at developing and implementing strategies to ensure smooth transitions, minimize disruption, and enhance stakeholder buy-in during periods of significant change.

Proficient in assessing change impact, risk management, and communication to align with evolving business goals and objectives.`,
  },
  {
    title: "Product development",
    body: `Experienced in building products from inception. Proficient in managing the entire product development lifecycle, from ideation and conceptualization to market launch, emphasizing user-centric design, agile methodologies, and cross-functional collaboration.`,
  },
  {
    title: "Financial services products",
    body: `Experienced in developing and managing loan and lease management software, with a deep understanding of financial products and regulations, and a focus on creating efficient, user-friendly solutions for complex financial transactions.

Skilled in asset management software development, adept at integrating principles of GAAP and FASB standards, ensuring compliance while optimizing functionality and user experience.`,
  },
  {
    title: "People analytics",
    body: `Proficient in leveraging people analytics within digital transformation, focusing on harnessing data-driven insights to enhance workforce planning, employee engagement, and organizational effectiveness.

Expertise in integrating advanced analytical tools and methodologies to transform HR processes and decision-making, aligning people strategies with digital innovation to drive organizational growth and adaptability.`,
  },
];

export const toolGroups = [
  {
    title: "BI / data visualization",
    image: "Screenshot 2023-11-21 211114.png",
  },
  {
    title: "Database management",
    image: "Screenshot 2023-11-21 211206.png",
  },
  {
    title: "Digital marketing",
    image: "Screenshot 2023-11-21 211239.png",
  },
  {
    title: "Project management & BA",
    image: "Screenshot 2023-11-21 211304.png",
  },
  {
    title: "Other skills",
    image: "Screenshot 2023-11-21 213141.png",
  },
] as const;

export const moreToolScreens = [
  "Screenshot 2023-11-21 211414.png",
  "Screenshot 2023-11-21 211335.png",
] as const;

export const testimonial = {
  quote:
    "Nischala provides good analysis on requested topics, is very proficient at building charts and dashboards and completes her work in a timely manner. She was very flexible with learning new tools and was able to incorporate those new learnings into her work.",
  name: "Ku, James",
  org: "Aljazeera Media Network",
} as const;

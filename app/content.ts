// All copy for the site lives here so it can be edited without touching layout.

export const site = {
  name: "Sam Evans",
  email: "sam21evans@gmail.com",
  linkedin: "https://www.linkedin.com/in/samevansbusiness",
  github: "https://github.com/11thandRagde",
  resume: "/Sam-Evans-Resume.pdf",
  location: "Seattle and Jacksonville",
};

export const stats = [
  { label: "Payments moved to athletes", value: 500, prefix: "$", suffix: "M+" },
  { label: "Athletes on the app", value: 250, suffix: "K+" },
  { label: "Photos tagged", value: 200, suffix: "M+" },
  { label: "Athletic programs", value: 200, suffix: "+" },
  { label: "Marketplaces on the API", value: 10 },
  { label: "Years shipping", value: 7 },
];

export type LineupKey = "a3" | "ncaa" | "nascar" | "teamworks" | "influencer" | "gm" | "liftflow";

export const lineup: {
  key: LineupKey;
  name: string;
  logo: string;
  logoOnDark: boolean;
  wide?: boolean;
  accent: string;
  pos: string;
  tag: string;
  title: string;
  story: string;
}[] = [
  {
    key: "teamworks",
    accent: "#3B82F6",
    pos: "Payments · Platform",
    name: "Teamworks",
    logo: "/logos/teamworks.svg",
    logoOnDark: true,
    wide: true,
    tag: "$500M+ moved",
    title: "Teamworks",
    story:
      "As the only PM on payments, I built the product line that moved $500M+ to athletes through Stripe, PayPal, and the Teamworks Wallet, including international student-athlete payouts. I also shipped Ask Teamworks, the AI assistant, and moved the Influencer app into the unified Teamworks app.",
  },
  {
    key: "influencer",
    accent: "#22C55E",
    pos: "Mobile · Media",
    name: "Influencer",
    logo: "/logos/influencer.svg",
    logoOnDark: true,
    tag: "250K+ athletes",
    title: "Influencer",
    story:
      "I joined INFLCR in customer success and grew into the product owner for the app 250K+ athletes use to get their photos and NIL deals. Along the way: 200M+ photos tagged, an external API that ten marketplaces built on, and an in-house tagging model that replaced AWS Rekognition and saved six figures a year.",
  },
  {
    key: "gm",
    accent: "#F59E0B",
    pos: "Budgeting · Contracts",
    name: "Teamworks GM",
    logo: "/logos/gm.svg",
    logoOnDark: true,
    tag: "Built from zero",
    title: "Teamworks General Manager",
    story:
      "GM started as an empty roadmap and became the budgeting and contract tool athletic departments use to plan NIL compensation across multiple years. I owned it from the first spec through launch: scholarship agreements, cash-flow tracking, earnings benchmarks, and agent data inside every athlete profile.",
  },
  {
    key: "ncaa",
    accent: "#2563EB",
    pos: "Compliance",
    name: "NCAA",
    logo: "/logos/ncaa.svg",
    logoOnDark: false,
    tag: "200+ programs",
    title: "NCAA",
    story:
      "When the NCAA NIL Assist build slipped, I took over the requirements and brought it back on deadline. Around it I built the compliance ledger that staff at 200+ athletic programs use to track athlete NIL disclosures, flag deals, and message athletes, brands, and agents from one place.",
  },
  {
    key: "nascar",
    accent: "#EF4444",
    pos: "Driver program",
    name: "NASCAR",
    logo: "/logos/nascar.svg",
    logoOnDark: true,
    wide: true,
    tag: "Every driver",
    title: "NASCAR Driver Incentive Program",
    story:
      "I pitched NASCAR a custom engagement leaderboard, then worked directly with their team from requirements through alpha and beta. Every NASCAR driver and their business managers ended up using it to track engagements and get paid, a program that ran for five years.",
  },
  {
    key: "a3",
    accent: "#DC2626",
    pos: "Agency",
    name: "A3 Athletics",
    logo: "/logos/a3.png",
    logoOnDark: true,
    wide: true,
    tag: "Where it started",
    title: "Allegiant Athletic Agency",
    // TODO(Sam): replace with your own two or three sentences.
    story:
      "Allegiant Athletic Agency, a Tennessee sports agency representing NFL and NBA players, now Legacy Sports Agency. Story to come.",
  },
  {
    key: "liftflow",
    accent: "#818CF8",
    pos: "Co-founder",
    name: "LiftFlow",
    logo: "/logos/liftflow.svg",
    logoOnDark: true,
    tag: "Co-founder",
    title: "LiftFlow",
    story:
      "Service management software for independent elevator maintenance companies: contracts, dispatch, mobile field logging, quotes, invoicing, and a customer portal, with QuickBooks and Stripe underneath. I co-founded it and run product and engineering. The first customer trial is live with a California elevator company.",
  },
];

export const work = [
  {
    name: "Teamworks payments",
    result: "$500M+",
    detail: "processed through Stripe, PayPal, and Teamworks Wallet",
    how: "Only PM from the first transfer to a mature product line: instant payouts, international student-athlete payments, KYC handled by Stripe. Negotiated processor terms and built the workflows that catch flagged payouts, failed KYC, and chargebacks before they turn into support tickets.",
  },
  {
    name: "NASCAR Driver Incentive Program",
    result: "Every driver",
    detail: "five-year program",
    how: "Pitched and built a custom engagement leaderboard with NASCAR's team, then took it from design through alpha and beta to adoption by every driver and their business managers. The closest thing to forward-deployed work I've done.",
  },
  {
    name: "Influencer external API",
    result: "10 marketplaces",
    detail: "millions of dollars in deals, Cameo the largest",
    how: "Wrote the spec and docs for an API that let NIL marketplaces propose deals, message athletes, and create and transfer payments inside Influencer. Supported partner developers directly: sample requests, key generation, change notices.",
  },
  {
    name: "In-house photo tagging",
    result: "Six figures",
    detail: "saved per year",
    how: "Ran AWS Rekognition for years tagging faces, jersey numbers, and sponsor logos across 200M+ photos. Built the cost case, worked with the data science team, and migrated to an in-house model in feature-flagged waves with Datadog tracking the whole way.",
  },
  {
    name: "Compliance ledger",
    result: "One platform",
    detail: "for athletes, brands, agents, and compliance staff",
    how: "Gave compliance staff a single place to track NIL deal disclosures, flag deals or set auto-flag rules, run reports, and build institution-specific workflows, with messaging to athletes, brands, and agents built in.",
  },
  {
    name: "Ask Teamworks",
    result: "20 to 100 evals",
    detail: "per product, written from real user questions",
    how: "Built an AI assistant on Mastra and Claude with golden eval sets drawn from real questions and failures. Compared models on result quality, speed, and cost. Shipped my own PRs with Claude Code.",
  },
  {
    name: "Internal admin platform",
    result: "2 weeks to 1",
    detail: "new-account onboarding time",
    how: "Measured how long setup took after kickoff, then shipped permission-locked forms and background jobs so product success could do what used to need an engineering data ticket.",
  },
];

export const career = [
  {
    when: "2025 to 2026",
    role: "Senior Product Leader, Teamworks",
    text: "Owned Influencer and General Manager, together called NIL Ops, for 100,000+ users across 200+ athletic programs. Built GM from scratch. Moved the Influencer app into the Teamworks unified mobile app, shipped Ask Teamworks, and led the move off Rekognition to an in-house tagging model.",
  },
  {
    when: "Interim",
    role: "Director of Technical Operations, Teamworks",
    text: "A short stint across product ops, contracts, spend, and operations. Moved back into product for the chance to build a new revenue-sharing product line.",
  },
  {
    when: "2019 to 2024",
    role: "Director of Product, Influencer (INFLCR, then Teamworks)",
    text: "Owned the mobile app from 2018 as it grew to 250K+ athletes and 200M+ photos. Picked up payments in 2021 as the only PM and built them into a product line that moved $500M+. Standardized the PRD template and the product, design, and engineering handoff.",
  },
  {
    when: "2018",
    role: "Customer Success, INFLCR",
    text: "Led the CS team before the Teamworks acquisition. It's still the lens I bring to product: what does the person on the other side of the screen need to get done today.",
  },
];

export const howIWork = [
  {
    title: "Ship it",
    text: "Feature flags, staged rollouts, and testing in staging myself before greenlighting a deploy. Weekly bug and release updates the whole team can read at a glance.",
  },
  {
    title: "Read the data myself",
    text: "SQL in BigQuery, dashboards in Superset and Power BI, Datadog for what's actually happening in production.",
  },
  {
    title: "Build with AI",
    text: "Claude Code for my own PRs and an internal admin platform. Claude skills that write the weekly updates, chase statuses, and produce voice-of-customer and token-usage reports.",
  },
];

export const liftflow = {
  workflows: [
    {
      name: "Contracts and scheduling",
      how: "Entering a maintenance contract generates every contracted visit and places it on the calendar. Dispatch drags a job onto a mechanic and the route map updates.",
    },
    {
      name: "Field work from a phone",
      how: "Mechanics log photos, parts, time, and mileage on site. It works offline in elevator machine rooms and syncs when the phone reconnects.",
    },
    {
      name: "Quotes and invoices",
      how: "A worn part flagged in the field becomes a quote sent for signature. Invoices build from the visit record, the signed quote, or the contract schedule, and customers pay online.",
    },
    {
      name: "Customer portal",
      how: "Building managers see each elevator's status and service history without calling the office.",
    },
    {
      name: "Maintenance backlog",
      how: "Every building on a map, colored by how overdue it is against its own schedule, so the owner can see risk before an inspector does.",
    },
    {
      name: "Compliance tracker",
      how: "A public, state-by-state reference for elevator inspection and licensing rules across all 50 states and DC, built as the top of the funnel.",
    },
  ],
  integrations: [
    "QuickBooks Online",
    "Stripe",
    "DocuSign",
    "Google Maps",
    "Apple Maps",
    "Google Calendar",
    "Outlook",
    "Claude",
    "ChatGPT",
  ],
  decisions: [
    "Onboarding is a migration, not a setup wizard. We load the customer's buildings and units from QuickBooks and spreadsheets and train the office, so a shop can be live in days.",
    "The buyer is the owner of a 5 to 30 person elevator company, not an enterprise. Pricing and scope follow that.",
    "Every feature started as a request from an elevator company. No speculative roadmap.",
  ],
};

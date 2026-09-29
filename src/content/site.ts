export const site = {
  name: "Maryam Ibaaichou",
  url: "https://maryamibaaichou.com",
  title: "Maryam Ibaaichou — Building AI products that solve real human problems",
  description:
    "Software engineering student and AI research assistant at Sichuan University, building at the intersection of AI, product, software and people.",
  email: "maryamibaaichou@gmail.com",
  linkedin: "https://www.linkedin.com/in/maryamibaaichou/",
  github: "https://github.com/maryamibaaichou",
};

export const nav = [
  { href: "#work", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export type ProjectField = { label: string; body: string };

export type Project = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  summary: string;
  meta: { label: string; value: string }[];
  fields?: ProjectField[];
  focus?: string[];
  stack?: string[];
  status?: string;
  links?: { label: string; href: string }[];
  visual: "skyquery" | "research";
};

export const projects: Project[] = [
  {
    id: "skyquery",
    index: "01",
    title: "SkyQuery: asking flight data in plain language",
    kicker: "Big Data Engineering Internship",
    summary:
      "At Suncaper, a big-data company in Chengdu, I worked on a flight meta-search and analysis platform built on 15M+ Expedia itineraries, with a conversational interface that turns a traveller's question into a database query and shows the answer as a table, chart or route map.",
    meta: [
      { label: "Role", value: "Big Data Engineering Intern" },
      { label: "Company", value: "Suncaper (Chengdu Suncaper Data Co., Ltd.)" },
      { label: "When", value: "2026 · team project" },
    ],
    fields: [
      {
        label: "Problem",
        body: "Flight prices feel arbitrary. Travellers watch fares jump, can't tell whether to buy now or wait, and sometimes chase low prices that can't actually be booked.",
      },
      {
        label: "Thinking",
        body: "Start from the questions people really ask: Is this fair? Should I wait? Why is this route so expensive? Answer them with data, and let people ask in their own words instead of in SQL.",
      },
      {
        label: "What I built",
        body: "Analyses of pricing, hub premiums, buy-or-wait booking windows, and ghost fares: sudden price swings that pressure people into panic-buying. I also built the conversational front end: a chat UI that sends questions to the text-to-query backend, displays the generated HiveQL, and automatically renders results as a table, chart or route map.",
      },
      {
        label: "Learning",
        body: "A natural-language interface only earns trust if it shows its work. Every answer displays the query it ran, so a person can check it instead of taking it on faith.",
      },
    ],
    stack: ["Hadoop", "Hive", "PySpark", "JavaScript", "Leaflet", "REST APIs", "Agile / JIRA"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/maryamibaaichou/Flight-Ticket-Meta-Search-and-Analysis",
      },
    ],
    visual: "skyquery",
  },
  {
    id: "research",
    index: "02",
    title: "Research on reliable multi-agent AI",
    kicker: "AI Research",
    summary:
      "At Sichuan University's Machine Intelligence Lab, I work on multi-agent AI systems for medical-research tasks, with a focus on evaluation: making it possible to see whether AI agents actually got it right, not just whether they answered.",
    meta: [
      { label: "Role", value: "Research Assistant" },
      { label: "Lab", value: "Machine Intelligence Lab, Sichuan University" },
      { label: "When", value: "Aug 2026 — present" },
    ],
    focus: ["Multi-agent systems", "Medical AI", "AI evaluation", "Reliability"],
    status: "Ongoing · details to be shared once published",
    visual: "research",
  },
];

export const approach = [
  {
    step: "Understand the user",
    principle: "Who is on the other side, and what are they actually trying to decide?",
    how: "Start from the real question. In SkyQuery, travellers didn't want fare tables. They wanted to know whether to buy now or wait, which became a booking-window heatmap.",
  },
  {
    step: "Define the problem",
    principle: "Write down what success looks like before writing code.",
    how: "One sentence, one outcome you can measure. If a feature can't be tied back to it, it waits.",
  },
  {
    step: "Explore constraints",
    principle: "Constraints are design input, not obstacles.",
    how: "Data access, privacy, speed and cost all shape the design. In SkyQuery, queries ran over 15M+ rows, so the interface had to make waiting feel clear, not broken.",
  },
  {
    step: "Build",
    principle: "Get the smallest complete version working first.",
    how: "A rough end-to-end path that runs beats a polished piece that doesn't connect to anything. Polish comes after it works.",
  },
  {
    step: "Evaluate",
    principle: "Separate “it responded” from “it was right”.",
    how: "Especially with AI, a complete-looking answer can still be wrong. I measure both, and compare against a simple baseline.",
  },
  {
    step: "Iterate",
    principle: "Let failures choose the next step.",
    how: "The weakest result shows where to look next, so that's where the next round of work goes.",
  },
];

export const skills = [
  {
    group: "Engineering",
    items: ["Python", "Java", "JavaScript", "SQL", "REST APIs", "FastAPI", "Spring Boot", "Git & testing"],
  },
  {
    group: "AI & evaluation",
    items: ["Multi-agent systems", "LLM APIs", "Evaluation design", "Neural networks", "scikit-learn"],
  },
  {
    group: "Data",
    items: ["Hadoop & Hive", "PySpark", "Analysis & visualisation"],
  },
  {
    group: "Product",
    items: ["Requirements framing", "Agile / JIRA", "Data storytelling"],
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "Amazigh", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" },
  { name: "Chinese", level: "HSK 4" },
  { name: "Turkish", level: "A2" },
];

export const journey = [
  { year: "2023", title: "Started Software Engineering at Sichuan University", note: "Full Merit Scholarship" },
  { year: "2024", title: "Belt and Road Culture & Health summer programme", note: "Southwestern University of Finance and Economics, Chengdu" },
  { year: "2024", title: "Digital Journalism Workshop, Turkey", note: "International programme · 80% merit-funded" },
  { year: "2026", title: "Big Data Engineering Intern at Suncaper", note: "Flight meta-search & conversational analytics" },
  { year: "2026", title: "Research Assistant, Machine Intelligence Lab", note: "Multi-agent AI & evaluation" },
  { year: "2027", title: "Graduating, B.Eng. Software Engineering", note: "Heading toward AI product & applied AI roles" },
];

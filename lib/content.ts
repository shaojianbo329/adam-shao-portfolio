import {
  Award,
  BookOpen,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Medal,
  Network,
  Sigma,
  Sparkles,
  Users
} from "lucide-react";

export const personal = {
  nameCn: "邵剑波",
  nameEn: "Adam Shao",
  title: "Undergraduate Student | Data & LLM Research Interest",
  tagline: "Building at the intersection of research, data, and LLM",
  intro:
    "Undergraduate student in Big Data Management and Application at Beijing University of Posts and Telecommunications, with a strong interest in Large Language Models, academic research, and data-driven problem solving.",
  email: "1766511435@qq.com",
  location: "Beijing, China",
  resumePath: "/resume/adam-shao-resume.pdf",
  portrait: "/images/adam-shao-portrait.png"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Academic", href: "#academic" },
  { label: "Competitions", href: "#competition" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "CV", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const brandMetrics = [
  { label: "GPA", value: "3.81 / 4.0" },
  { label: "Major Rank", value: "Top 10%" },
  { label: "Academic Base", value: "BUPT" },
  { label: "Focus", value: "LLM + Data" }
];

export const aboutHighlights = [
  {
    icon: GraduationCap,
    label: "Academic Foundation",
    text: "Big Data Management and Application undergraduate at BUPT, with core-course scores of 97 in Big Data Technology and Data Structures."
  },
  {
    icon: Database,
    label: "Data Systems",
    text: "Hands-on experience with relational modeling, SQL performance tuning, 3NF design, TF-IDF matching logic, and data visualization workflows."
  },
  {
    icon: Sparkles,
    label: "Research Direction",
    text: "Currently oriented toward LLMs, data-driven reasoning, intelligent information processing, and rigorous applied research."
  }
];

export const academicExperience = [
  {
    icon: GraduationCap,
    institution: "Beijing University of Posts and Telecommunications",
    meta: "211 / Double First-Class University",
    role: "B.S. in Big Data Management and Application",
    period: "Sep 2024 - Jul 2028",
    location: "Beijing",
    details: [
      "GPA 3.81 / 4.0, ranked in the top 10% of the major.",
      "Core coursework: Fundamentals of Big Data Technology (97), Data Structures (97), Data Mining and Artificial Intelligence (95)."
    ]
  },
  {
    icon: Award,
    institution: "Academic Honors",
    meta: "University-level recognition",
    role: "First-Class Scholarship and Merit Student",
    period: "Oct 2025",
    location: "BUPT",
    details: [
      "Received the 2024-2025 university first-class scholarship.",
      "Awarded the university-level Merit Student title."
    ]
  },
  {
    icon: Users,
    institution: "Student Union",
    meta: "Department of Student Rights",
    role: "Minister",
    period: "Sep 2025 - Present",
    location: "BUPT",
    details: [
      "Led the planning and execution of the 3.15 Student Rights Week event for a thousand-person scale audience.",
      "Coordinated event planning, security, procurement, promotion, and reimbursement workflows; improved awareness of student-rights protection by approximately 20% and handled 5 student-rights cases."
    ]
  }
];

export const competitions = [
  {
    icon: Sigma,
    title: "National College Student Mathematics Competition",
    result: "National Third Prize",
    period: "Nov 2025",
    description:
      "Recognized at national level, reflecting quantitative reasoning, mathematical discipline, and competition readiness."
  },
  {
    icon: Medal,
    title: "NHSDLC American Debate Spring Tournament",
    result: "Top 16",
    period: "Resume summary",
    description:
      "Demonstrated structured argumentation, cross-cultural communication, and performance under pressure in an English debate setting."
  }
];

export const projects = [
  {
    icon: Network,
    title: "Rural Industry Resource Matching Platform",
    subtitle: "Database Optimization / Technical Department",
    period: "Sep 2025 - Dec 2026",
    summary:
      "Designed and tuned the data layer for a platform matching rural industry resources with supply and demand needs.",
    methods: ["3NF relational modeling", "SQL indexing", "TF-IDF tag weighting", "Credit-score model"],
    outcomes: [
      "Designed a 20-core-entity relational model that reduced data redundancy by approximately 30%.",
      "Built matching logic based on tag weights and credit scores, with behavior, transaction, and mutual-evaluation scoring.",
      "Optimized search with non-clustered compound indexes, reducing demand-square query response from around 5 seconds to millisecond level."
    ]
  },
  {
    icon: BookOpen,
    title: "WNBA Performance and Commercial Value Optimization Model",
    subtitle: "Commercial Analysis / Quantitative Modeling",
    period: "Project Experience",
    summary:
      "Built a multi-dimensional player value evaluation framework integrating athletic performance, market attention, and contract constraints.",
    methods: ["PCA", "Entropy weight method", "Dynamic programming", "Monte Carlo simulation"],
    outcomes: [
      "Used PCA and entropy weighting to improve model interpretability and reduce subjective weighting.",
      "Modeled fan engagement as an economic asset, linking social metrics to ticket, sponsorship, and merchandise revenue.",
      "Applied multi-stage dynamic programming and 10,000 Monte Carlo simulations to evaluate lineup decisions and injury-risk impact."
    ]
  }
];

export const researchInterests = [
  {
    title: "Large Language Models",
    text:
      "Studying how LLMs can support reasoning, information processing, and research workflows while remaining measurable and reliable."
  },
  {
    title: "Data-Centric Intelligence",
    text:
      "Interested in data quality, structured knowledge, retrieval, and evaluation pipelines that make intelligent systems more useful in real settings."
  },
  {
    title: "Decision Modeling",
    text:
      "Building from quantitative modeling experience toward AI-assisted analysis, simulation, and evidence-based decision support."
  }
];

export const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`
  },
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
    href: null
  }
];

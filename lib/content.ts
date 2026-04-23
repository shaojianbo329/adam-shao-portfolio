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
import type { LucideIcon } from "lucide-react";

export type Locale = "zh" | "en";

type SectionCopy = {
  index: string;
  label: string;
  title: string;
  description: string;
};

type PersonalCopy = {
  nameCn: string;
  nameEn: string;
  title: string;
  tagline: string;
  intro: string;
  email: string;
  location: string;
  resumePath: string;
  portrait: string;
};

type NavItem = {
  label: string;
  href: string;
};

type Metric = {
  label: string;
  value: string;
};

type HeroCta = {
  label: string;
  href: string;
  icon: "arrow" | "download" | "mail";
  style: "primary" | "secondary" | "tertiary";
  download?: boolean;
};

type Highlight = {
  icon: LucideIcon;
  label: string;
  text: string;
};

type Experience = {
  icon: LucideIcon;
  institution: string;
  meta: string;
  role: string;
  period: string;
  location: string;
  details: string[];
};

type CompetitionItem = {
  icon: LucideIcon;
  title: string;
  result: string;
  period: string;
  description: string;
};

type ProjectItem = {
  icon: LucideIcon;
  category?: string;
  title: string;
  subtitle: string;
  period: string;
  summary: string;
  problem?: string;
  method?: string;
  result?: string;
  role?: string;
  methods: string[];
  outcomes: string[];
};

type ResearchInterest = {
  title: string;
  text: string;
};

type TechnicalGroup = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

type FeaturedResearch = {
  header: SectionCopy;
  eyebrow: string;
  title: string;
  status: string;
  summary: string;
  whyTitle: string;
  whyText: string;
  inputs: string[];
  outputs: string[];
  methods: string[];
};

type MethodBlock = {
  icon: LucideIcon;
  title: string;
  text: string;
  points: string[];
};

type ContactItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
};

export type PortfolioContent = {
  personal: PersonalCopy;
  navItems: NavItem[];
  hero: {
    eyebrow: string;
    titleLines: string[];
    variant: "job" | "academic";
    highlights: string[];
    profileLabel: string;
    portraitAlt: string;
    floatingBadge: string;
    focusLabel: string;
    focusValue: string;
    ctas: HeroCta[];
  };
  brandMetrics: Metric[];
  about: {
    header: SectionCopy;
    statement: string;
    highlights: Highlight[];
  };
  academic: {
    header: SectionCopy;
    experience: Experience[];
  };
  competition: {
    header: SectionCopy;
    items: CompetitionItem[];
  };
  projectsSection: SectionCopy;
  projects: ProjectItem[];
  research: {
    header: SectionCopy;
    coreLabel: string;
    coreTitle: string;
    coreText: string;
    interests: ResearchInterest[];
  };
  technical: {
    header: SectionCopy;
    groups: TechnicalGroup[];
  };
  featuredResearch: FeaturedResearch;
  methods: {
    header: SectionCopy;
    blocks: MethodBlock[];
  };
  resume: {
    header: SectionCopy;
    eyebrow: string;
    title: string;
    description: string;
    viewLabel: string;
    downloadLabel: string;
  };
  contact: {
    header: SectionCopy;
    title: string;
    description: string;
    buttonLabel: string;
    items: ContactItem[];
  };
  footer: {
    text: string;
  };
  ui: {
    contactLabel: string;
    languageLabel: string;
    toggleNavLabel: string;
  };
};

const basePersonal = {
  nameCn: "邵剑波",
  nameEn: "Adam Shao",
  email: "1766511435@qq.com",
  resumePath: "/resume/adam-shao-resume.pdf",
  portrait: "/images/adam-shao-portrait.png"
};

export const contentByLocale: Record<Locale, PortfolioContent> = {
  zh: {
    personal: {
      ...basePersonal,
      title: "北京邮电大学本科 | AI 产品 / 数据分析方向",
      tagline: "北京邮电大学本科生｜AI 产品 / 数据分析方向",
      intro:
        "北京邮电大学大数据管理与应用专业本科生，面向 AI 产品与数据分析实习。关注 LLM 应用、用户行为分析、策略分析与数据建模，能够将业务问题拆解为指标、流程、模型和可落地的项目表达。",
      location: "北京，中国"
    },
    navItems: [
      { label: "项目经历", href: "#projects" },
      { label: "教育背景", href: "#academic" },
      { label: "竞赛荣誉", href: "#competition" },
      { label: "能力模块", href: "#technical" },
      { label: "简历联系", href: "#resume" }
    ],
    hero: {
      eyebrow: "面向 AI 产品 / 数据分析实习申请",
      titleLines: ["邵剑波", "Adam Shao"],
      variant: "job",
      highlights: ["AI 产品", "数据分析", "LLM 应用", "用户行为分析", "策略分析", "数据建模"],
      profileLabel: "个人简介",
      portraitAlt: "邵剑波个人照片",
      floatingBadge: "30 秒快速扫描：方向、项目、技能、简历",
      focusLabel: "目标岗位",
      focusValue: "AI 产品实习 / 数据分析实习",
      ctas: [
        {
          label: "下载简历",
          href: basePersonal.resumePath,
          icon: "download",
          style: "primary",
          download: true
        },
        { label: "查看项目", href: "#projects", icon: "arrow", style: "secondary" },
        { label: "联系我", href: `mailto:${basePersonal.email}`, icon: "mail", style: "tertiary" }
      ]
    },
    brandMetrics: [
      { label: "学校", value: "北京邮电大学" },
      { label: "GPA", value: "3.81 / 4.0" },
      { label: "排名", value: "专业前 10%" },
      { label: "目标方向", value: "AI 产品 / 数据分析" }
    ],
    about: {
      header: {
        index: "01",
        label: "关于我",
        title: "用数据分析、建模和工程表达解决可落地的问题。",
        description:
          "中文主页服务于招聘筛选，强调可快速判断的硬指标、项目贡献、技术关键词和实习岗位适配度。"
      },
      statement:
        "我适合参与数据分析、AI 应用、智能评测和 LLM 相关实习工作，能够完成问题拆解、数据建模、SQL 分析、结果解释和技术表达。",
      highlights: [
        {
          icon: Database,
          label: "能做什么",
          text: "可以围绕业务问题完成数据清洗、SQL 分析、指标拆解、建模评估和结论表达。"
        },
        {
          icon: Network,
          label: "做过什么",
          text: "参与资源匹配平台的数据层设计与查询优化，完成量化建模项目中的评价指标与模拟分析。"
        },
        {
          icon: Sparkles,
          label: "适合方向",
          text: "AI 产品、数据分析、用户洞察、策略分析、LLM 应用、智能评测与项目落地相关实习。"
        }
      ]
    },
    projectsSection: {
      index: "01",
      label: "项目经历",
      title: "项目按目标方向组织：AI 产品 / LLM 应用与数据分析 / 策略建模。",
      description:
        "每个项目都按 Problem、Method、Result、My Role 展开，方便 HR 和面试官快速判断我能承担的任务类型和产出方式。"
    },
    projects: [
      {
        icon: Sparkles,
        category: "AI 产品 / LLM 应用",
        title: "LLM 主观题评分与智能评测探索",
        subtitle: "AI 应用 / 智能评测 / 产品化流程",
        period: "方法探索",
        summary:
          "围绕主观题评分场景，设计基于评分 Rubric、Prompt 约束和误差分析的智能评测流程。",
        problem: "主观题评分存在标准不一致、反馈不够细、人工复核成本高的问题。",
        method: "拆解评分维度，设计 Rubric + Prompt 流程，并关注模型输出的可解释性与人工复核边界。",
        result: "形成可展示的智能评分流程框架，可用于 AI 产品原型、评测链路和反馈体验设计。",
        role: "负责问题拆解、评分维度设计、Prompt 思路整理和产品化表达。",
        methods: ["LLM 应用", "Prompt 设计", "智能评测", "Rubric", "误差分析"],
        outcomes: [
          "将主观评分问题拆解为标准、证据、反馈和复核四个环节。",
          "设计评分提示词与评价维度，强调可解释输出和人工校验。",
          "从产品角度梳理用户反馈、结果展示和评测闭环。"
        ]
      },
      {
        icon: BookOpen,
        category: "AI 产品 / LLM 应用",
        title: "双语个人作品集与智能展示型网站",
        subtitle: "AI 产品表达 / 信息架构 / 前端落地",
        period: "当前项目",
        summary:
          "将个人经历拆解为中文求职与英文学术两个场景，设计差异化信息架构和双语展示体验。",
        problem: "同一份经历面向招聘与学术申请时重点不同，简单翻译无法满足不同用户的信息需求。",
        method: "按用户目标重构内容层级：中文强调岗位适配、项目产出和简历下载；英文强调研究问题、方法边界和学术潜力。",
        result: "完成一个可访问、可部署、可持续迭代的双语 Next.js 作品集，用于 AI 产品与数据分析方向展示。",
        role: "负责定位梳理、页面信息架构、双语内容组织、交互动效与前端实现。",
        methods: ["Next.js", "信息架构", "双语内容", "交互设计", "项目落地"],
        outcomes: [
          "构建中文 `/` 与英文 `/en` 两套不同目的的页面叙事。",
          "将简历、项目、研究方向转化为可扫描的网页结构。",
          "通过动效、CTA 和项目卡片强化招聘方阅读路径。"
        ]
      },
      {
        icon: Sparkles,
        category: "数据分析 / 策略建模",
        title: "AI 单用户仿真与补贴策略分析",
        subtitle: "用户行为分析 / 策略评估 / 智能仿真",
        period: "研究型项目",
        summary:
          "围绕用户画像、场景条件和补贴策略构建行为模拟框架，用于离线策略评估和转化预测。",
        problem: "平台策略上线前难以判断单个用户在不同补贴条件下的行为变化和转化收益。",
        method: "将用户画像、场景条件、补贴策略作为输入，结合条件序列生成、Uplift 思路和场景模拟进行离线评估。",
        result: "形成动作序列、转化率和 GTV 预测的策略分析框架，支持产品策略预演。",
        role: "负责问题建模、输入输出结构设计、策略评估逻辑和方法论表达。",
        methods: ["用户行为分析", "策略分析", "Uplift", "场景模拟", "LLM 应用"],
        outcomes: [
          "将用户画像、场景状态、补贴策略转化为可模拟的输入结构。",
          "设计动作序列、转化率和 GTV 预测的评估思路，服务策略预演。",
          "关注有限行为数据下的可解释建模边界，避免只做静态预测。"
        ]
      },
      {
        icon: BookOpen,
        category: "数据分析 / 策略建模",
        title: "WNBA 竞技表现与商业价值优化模型",
        subtitle: "商业分析 / 量化建模 / 策略建议",
        period: "项目经历",
        summary:
          "构建综合竞技表现、市场关注度与合同约束的球员价值评估框架，用模型辅助阵容与商业决策分析。",
        problem: "球员价值同时受竞技表现、市场关注、合同约束和伤病风险影响，单一指标难以支持决策。",
        method: "结合 PCA、熵权法、动态规划和蒙特卡洛模拟，对球员价值和阵容策略进行建模。",
        result: "输出多维球员价值评估与风险模拟结果，形成可解释的商业分析框架。",
        role: "负责指标设计、建模方法整合、模拟分析和结果解释。",
        methods: ["PCA", "熵权法", "动态规划", "蒙特卡洛模拟", "策略分析"],
        outcomes: [
          "结合 PCA 与熵权法降低主观赋权影响，提高模型解释性。",
          "将粉丝参与度建模为经济资产，关联门票、赞助和周边收入。",
          "使用多阶段动态规划和 10,000 次蒙特卡洛模拟评估阵容决策与伤病风险影响。"
        ]
      },
      {
        icon: Network,
        category: "数据分析 / 策略建模",
        title: "乡村产业资源匹配平台",
        subtitle: "SQL / 检索匹配 / 数据库优化",
        period: "2025.09 - 2026.12",
        summary:
          "面向乡村产业资源供需匹配场景，参与数据层设计、检索匹配和查询性能优化。",
        problem: "资源供需匹配需要同时解决数据结构、搜索效率、标签匹配和信用评价问题。",
        method: "设计 3NF 关系模型，使用 SQL 复合索引优化查询，并引入 TF-IDF 标签权重和信用评分逻辑。",
        result: "减少约 30% 数据冗余，将需求广场约 5 秒级查询优化到毫秒级。",
        role: "负责数据库结构设计、查询优化、匹配逻辑和技术文档表达。",
        methods: ["SQL", "3NF 关系建模", "复合索引", "TF-IDF 检索匹配", "信用评分"],
        outcomes: [
          "设计 20 个核心实体的关系模型，减少约 30% 数据冗余。",
          "构建结合标签权重、行为、交易和互评信息的匹配与信用评分逻辑。",
          "通过非聚簇复合索引优化需求广场检索，将约 5 秒级查询降低到毫秒级。"
        ]
      }
    ],
    academic: {
      header: {
        index: "02",
        label: "教育背景",
        title: "北邮大数据管理与应用本科，成绩和课程基础可量化。",
        description:
          "教育信息保留招聘筛选最关心的学校、专业、GPA、排名和关键课程表现。"
      },
      experience: [
        {
          icon: GraduationCap,
          institution: "北京邮电大学",
          meta: "211 / 双一流高校",
          role: "大数据管理与应用 本科",
          period: "2024.09 - 2028.07",
          location: "北京",
          details: [
            "GPA 3.81 / 4.0，专业排名前 10%。",
            "核心课程：大数据技术基础 97，数据结构 97，数据挖掘与人工智能 95。"
          ]
        },
        {
          icon: Users,
          institution: "学生会权益部",
          meta: "组织协调与项目推进",
          role: "部长",
          period: "2025.09 - 至今",
          location: "北京邮电大学",
          details: [
            "负责千人规模 3.15 学生权益周活动的策划与执行。",
            "统筹策划、安保、采购、宣传和报销流程，权益保护认知提升约 20%，处理 5 起学生权益案例。"
          ]
        }
      ]
    },
    competition: {
      header: {
        index: "03",
        label: "竞赛荣誉",
        title: "用竞赛和荣誉补充量化能力、学习稳定性与表达能力。",
        description:
          "这部分作为招聘补充信号，展示数学建模基础、英文表达能力和持续投入。"
      },
      items: [
        {
          icon: Award,
          title: "校级一等奖学金 / 校级三好学生",
          result: "2024-2025 学年",
          period: "2025.10",
          description:
            "体现稳定的学习表现和综合能力，支撑实习筛选中的学习能力判断。"
        },
        {
          icon: Sigma,
          title: "全国大学生数学竞赛",
          result: "全国三等奖",
          period: "2025.11",
          description:
            "体现数学基础、抽象建模能力和对复杂问题的持续训练。"
        },
        {
          icon: Medal,
          title: "NHSDLC 美式辩论春季赛",
          result: "Top 16",
          period: "简历经历",
          description:
            "在英文辩论环境中展示结构化论证、英文沟通和临场表达能力。"
        }
      ]
    },
    research: {
      header: {
        index: "04",
        label: "方向说明",
        title: "围绕 AI 产品和数据分析形成可实习的能力组合。",
        description:
          "这里不做抽象个人品牌，而是直接说明我能进入哪些 AI 产品与数据分析工作流、产出哪些交付物。"
      },
      coreLabel: "关键词",
      coreTitle: "AI 产品 / 数据分析 / LLM 应用",
      coreText:
        "我希望把用户洞察、指标拆解、策略分析、数据建模和 LLM 应用结合起来，参与真实业务场景中的 AI 产品设计、数据分析和项目落地。",
      interests: [
        {
          title: "数据分析与用户洞察",
          text:
            "关注用户行为分析、指标拆解、SQL 查询、数据口径、可视化表达和分析结论落地。"
        },
        {
          title: "AI 产品与 LLM 应用",
          text:
            "关注 LLM 应用、Prompt 设计、RAG 思维、智能评测、检索与信息组织如何转化为产品体验。"
        },
        {
          title: "策略分析与数据建模",
          text:
            "关注策略评估、实验思维、PCA、熵权法、动态规划、蒙特卡洛模拟和有限数据下的决策支持。"
        }
      ]
    },
    technical: {
      header: {
        index: "05",
        label: "能力模块 / 实习方向",
        title: "围绕 AI 产品与数据分析实习组织能力结构。",
        description:
          "能力模块从目标岗位出发，突出数据分析、AI 应用、产品策略和项目落地表达。"
      },
      groups: [
        {
          icon: Database,
          title: "数据分析",
          description: "从业务问题到数据口径、建模分析、可视化表达和结论解释。",
          items: ["SQL", "Python", "Pandas", "NumPy", "Matplotlib", "scikit-learn"]
        },
        {
          icon: Sparkles,
          title: "AI 应用",
          description: "关注 LLM 在智能评测、检索组织、信息处理和产品体验中的应用。",
          items: ["LLM 应用", "Prompt 设计", "RAG 思维", "智能评测", "检索与信息组织"]
        },
        {
          icon: Network,
          title: "产品与策略",
          description: "围绕用户、指标、策略和结果展示，把分析转化为产品判断。",
          items: ["用户行为分析", "指标拆解", "策略评估", "实验思维", "可视化表达"]
        }
      ]
    },
    featuredResearch: {
      header: {
        index: "03",
        label: "Featured Research Project",
        title: "Single-user simulation as a research-oriented modeling problem.",
        description:
          "This content is primarily used on the English academic profile."
      },
      eyebrow: "Research-in-progress",
      title: "Single-User Digital Twin Simulation for Policy Evaluation",
      status: "Working paper / methodological exploration",
      summary:
        "Designed a user-level behavioral digital twin framework that takes user profile, scene condition, and subsidy strategy as inputs to simulate action sequences, estimate conversion, and predict GTV for offline policy evaluation.",
      whyTitle: "Why it matters",
      whyText:
        "This project reflects my interest in building interpretable, data-constrained simulation systems that support decision-making beyond static prediction.",
      inputs: ["User profile", "Scene condition", "Subsidy strategy"],
      outputs: ["Action sequence", "Conversion estimate", "GTV prediction"],
      methods: [
        "Key-factor identification",
        "Conditional sequence generation",
        "Uplift-based causal inference",
        "Scenario-specific simulation"
      ]
    },
    methods: {
      header: {
        index: "04",
        label: "Methods & Technical Approach",
        title: "A structured way to reason under limited behavioral data.",
        description:
          "The project is framed as a careful methodological exploration, with explicit attention to assumptions, constraints, and evaluation boundaries."
      },
      blocks: [
        {
          icon: Database,
          title: "Problem Framing",
          text:
            "The task is not only to predict a user outcome, but to simulate how a user may behave under a changed policy condition.",
          points: ["offline policy evaluation", "user-level digital twin", "scenario-based simulation"]
        },
        {
          icon: Sparkles,
          title: "Method Design",
          text:
            "The framework separates profile, context, and intervention inputs before generating conditional behavior traces.",
          points: ["conditional sequence generation", "conversion estimation", "GTV prediction"]
        },
        {
          icon: Network,
          title: "Data Constraints",
          text:
            "The design treats limited behavioral data as a methodological constraint rather than hiding it behind overconfident claims.",
          points: ["limited behavioral data", "observable action boundaries", "assumption-aware evaluation"]
        },
        {
          icon: Sigma,
          title: "Research Value",
          text:
            "The project explores whether interpretable simulation can support decisions that static prediction alone cannot answer.",
          points: ["uplift-based causal inference", "decision support", "methodological rigor"]
        }
      ]
    },
    resume: {
      header: {
        index: "06",
        label: "简历 & 联系",
      title: "如果岗位匹配，可以直接下载简历或邮件联系。",
      description:
          "保留最短路径：下载 PDF 简历、查看原始文件、通过邮箱联系，适配 AI 产品实习与数据分析实习申请。"
      },
      eyebrow: "PDF 简历",
      title: "邵剑波简历",
      description:
        "简历包含教育背景、项目经历、竞赛荣誉、技能方向和联系方式，适合招聘方进一步查看。",
      viewLabel: "查看简历",
      downloadLabel: "下载 PDF"
    },
    contact: {
      header: {
        index: "06",
        label: "联系",
        title: "欢迎交流数据、AI 应用、LLM 相关实习机会。",
        description:
          "联系方式保持简洁直接，便于招聘方快速建立联系。"
      },
      title: "实习方向匹配的话，欢迎联系。",
      description:
        "我正在寻找 AI 产品、数据分析、LLM 应用、用户行为分析、策略分析和智能评测相关实习机会。",
      buttonLabel: "发送邮件",
      items: [
        {
          icon: Mail,
          label: "邮箱",
          value: basePersonal.email,
          href: `mailto:${basePersonal.email}`
        },
        {
          icon: MapPin,
          label: "所在地",
          value: "北京，中国",
          href: null
        }
      ]
    },
    footer: {
      text: "中文主页面向 AI 产品与数据分析实习申请。"
    },
    ui: {
      contactLabel: "联系",
      languageLabel: "语言切换",
      toggleNavLabel: "展开导航"
    }
  },
  en: {
    personal: {
      ...basePersonal,
      title: "Undergraduate Research Profile | BUPT",
      tagline: "Data systems, simulation, and LLM-oriented intelligence",
      intro:
        "I am an undergraduate student at BUPT interested in large language models, data-centric intelligence, and behavior simulation. My current work focuses on user-level digital twin modeling for offline policy evaluation under real-world platform constraints.",
      location: "Beijing, China"
    },
    navItems: [
      { label: "Research", href: "#research" },
      { label: "Featured Project", href: "#featured-research" },
      { label: "Methods", href: "#methods" },
      { label: "Academic", href: "#academic" },
      { label: "Evidence", href: "#competition" },
      { label: "CV", href: "#resume" }
    ],
    hero: {
      eyebrow: "Graduate-school oriented academic profile",
      titleLines: [
        "Building research at the intersection of data systems,",
        "simulation, and LLM-oriented intelligence."
      ],
      variant: "academic",
      highlights: ["BUPT undergraduate", "Data-centric intelligence", "Behavior simulation", "LLM-oriented systems"],
      profileLabel: "Research profile",
      portraitAlt: "Portrait of Adam Shao",
      floatingBadge: "Research-in-progress, not a publication claim",
      focusLabel: "Current question",
      focusValue: "Digital twin simulation",
      ctas: [
        { label: "Research Interests", href: "#research", icon: "arrow", style: "primary" },
        { label: "Featured Project", href: "#featured-research", icon: "arrow", style: "secondary" },
        { label: "CV", href: basePersonal.resumePath, icon: "download", style: "tertiary" }
      ]
    },
    brandMetrics: [
      { label: "GPA", value: "3.81 / 4.0" },
      { label: "Major Rank", value: "Top 10%" },
      { label: "Academic Base", value: "BUPT" },
      { label: "Direction", value: "LLM + Simulation" }
    ],
    about: {
      header: {
        index: "01",
        label: "Academic Positioning",
        title: "A data-oriented undergraduate developing research questions around intelligent systems.",
        description:
          "The English profile emphasizes research potential, problem definition, methodological boundaries, and graduate-school readiness."
      },
      statement:
        "My interests sit between data-centric intelligence, behavior simulation, and LLM-oriented methods for reasoning under real platform constraints.",
      highlights: [
        {
          icon: GraduationCap,
          label: "Academic Foundation",
          text:
            "Big Data Management and Application undergraduate at BUPT, with strong performance in data structures, big data technology, and AI-related coursework."
        },
        {
          icon: Database,
          label: "Data-Constrained Thinking",
          text:
            "Interested in how limited, noisy, or incomplete behavioral data shapes what a model can responsibly claim."
        },
        {
          icon: Sparkles,
          label: "Research Direction",
          text:
            "Exploring how LLM-oriented systems, retrieval, simulation, and causal reasoning can support decision-making."
        }
      ]
    },
    projectsSection: {
      index: "03",
      label: "Project Experience",
      title: "Applied projects that inform my research interests.",
      description:
        "The English profile treats projects as evidence of problem-solving and method design rather than as a job portfolio."
    },
    projects: [
      {
        icon: Network,
        title: "Rural Industry Resource Matching Platform",
        subtitle: "Database Optimization / Technical Department",
        period: "Sep 2025 - Dec 2026",
        summary:
          "Designed and tuned the data layer for a platform matching rural industry resources with supply and demand needs.",
        methods: ["Relational modeling", "SQL indexing", "TF-IDF tag weighting", "Credit-score model"],
        outcomes: [
          "Designed a 20-core-entity relational model that reduced data redundancy by approximately 30%.",
          "Built matching logic based on tag weights and credit scores.",
          "Reduced demand-square query response from around 5 seconds to millisecond level."
        ]
      }
    ],
    research: {
      header: {
        index: "01",
        label: "Research Interests",
        title: "Research questions around data-centric intelligence and behavior simulation.",
        description:
          "Rather than presenting a translated resume, this page frames the problems I want to study and the methodological habits I am building."
      },
      coreLabel: "Central direction",
      coreTitle: "LLM-oriented intelligence",
      coreText:
        "I am interested in systems that combine structured data, behavioral traces, language models, and careful evaluation to reason about real-world AI product and data decision problems under uncertainty.",
      interests: [
        {
          title: "Large Language Models for Decision Support",
          text:
            "How can LLMs be used as components in analysis, simulation, and evaluation workflows without obscuring assumptions or uncertainty?"
        },
        {
          title: "Data-Centric Intelligence",
          text:
            "How do data quality, retrieval structure, and evaluation design determine whether an intelligent system is useful in real settings?"
        },
        {
          title: "Behavior Simulation and Policy Evaluation",
          text:
            "How can user-level simulation help evaluate policies offline when live experimentation is costly, incomplete, or constrained?"
        }
      ]
    },
    featuredResearch: {
      header: {
        index: "02",
        label: "Featured Research Project",
        title: "A methodological exploration of user-level simulation.",
        description:
          "This is framed as an ongoing research project and working paper, not as a published or validated final result."
      },
      eyebrow: "Working paper / research-in-progress",
      title: "Behavioral Digital Twin for Single-User Subsidy Simulation",
      status: "Methodological exploration under limited behavioral data",
      summary:
        "Designed a user-level behavioral digital twin framework that takes user profile, scene condition, and subsidy strategy as inputs to simulate action sequences, estimate conversion, and predict GTV for offline policy evaluation. The framework integrates key-factor identification, conditional sequence generation, uplift-based causal inference, and scenario-specific simulation.",
      whyTitle: "Why it matters",
      whyText:
        "This project reflects my interest in building interpretable, data-constrained simulation systems that connect academic methodology with real-world AI product and data strategy problems beyond static prediction.",
      inputs: ["User profile", "Scene condition", "Subsidy strategy"],
      outputs: ["Action sequence", "Conversion estimate", "GTV prediction"],
      methods: [
        "Key-factor identification",
        "Conditional sequence generation",
        "Uplift-based causal inference",
        "Scenario-specific simulation"
      ]
    },
    methods: {
      header: {
        index: "03",
        label: "Methods & Technical Approach",
        title: "A concise research structure for reasoning under platform constraints.",
        description:
          "The emphasis is on problem framing, method design, data limitations, and research value rather than overclaiming performance."
      },
      blocks: [
        {
          icon: Database,
          title: "Problem Framing",
          text:
            "The project asks how to simulate user behavior under alternative subsidy strategies when online experimentation is limited.",
          points: ["offline policy evaluation", "user-level digital twin", "decision support beyond static prediction"]
        },
        {
          icon: Sparkles,
          title: "Method Design",
          text:
            "The framework separates user profile, scene condition, and intervention before generating conditional behavior traces.",
          points: ["conditional sequence generation", "conversion estimation", "GTV prediction"]
        },
        {
          icon: Network,
          title: "Data Constraints",
          text:
            "Limited behavioral data is treated as a central methodological boundary, shaping what can be simulated and evaluated.",
          points: ["limited behavioral data", "observable action sequences", "assumption-aware interpretation"]
        },
        {
          icon: Sigma,
          title: "Research Value",
          text:
            "The work explores how interpretable simulation and uplift-style reasoning can support policy comparison before deployment.",
          points: ["uplift-based causal inference", "scenario-based simulation", "methodological rigor under constraints"]
        }
      ]
    },
    academic: {
      header: {
        index: "04",
        label: "Academic Background",
        title: "A structured academic foundation in data and intelligent systems.",
        description:
          "This section provides factual context for graduate-school review: institution, major, GPA, coursework, and academic recognition."
      },
      experience: [
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
            "Coordinated planning, security, procurement, promotion, reimbursement workflows, and student-rights case handling."
          ]
        }
      ]
    },
    competition: {
      header: {
        index: "05",
        label: "Competitions / Quantitative Evidence",
        title: "External signals of quantitative reasoning and structured communication.",
        description:
          "These experiences support, rather than replace, the research narrative by showing mathematical discipline and communication ability."
      },
      items: [
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
      ]
    },
    technical: {
      header: {
        index: "03",
        label: "Methods",
        title: "Methods that support my research direction.",
        description:
          "A compact view of technical approaches used across projects."
      },
      groups: [
        {
          icon: Database,
          title: "Data Systems",
          description: "Structured data, relational design, and query performance.",
          items: ["SQL", "relational modeling", "indexing", "data quality"]
        },
        {
          icon: Sigma,
          title: "Modeling",
          description: "Quantitative methods for interpretable analysis.",
          items: ["PCA", "entropy weighting", "Monte Carlo simulation", "dynamic programming"]
        }
      ]
    },
    resume: {
      header: {
        index: "06",
        label: "CV / Contact",
        title: "A concise CV source for academic review and follow-up.",
        description:
          "The uploaded CV remains the factual source for education, projects, honors, skills, and contact details."
      },
      eyebrow: "PDF CV",
      title: "Adam Shao CV",
      description:
        "View or download the original CV file. The English page frames research direction, while the PDF preserves the detailed factual record.",
      viewLabel: "View CV",
      downloadLabel: "Download PDF"
    },
    contact: {
      header: {
        index: "06",
        label: "Contact",
        title: "Open to academic, research, and project conversations.",
        description:
          "A minimal contact module keeps the profile direct while leaving room for future lab, GitHub, or publication links."
      },
      title: "Let's connect.",
      description:
        "For research discussions, graduate-school conversations, data projects, or collaboration inquiries, email is the best first contact.",
      buttonLabel: "Email Adam",
      items: [
        {
          icon: Mail,
          label: "Email",
          value: basePersonal.email,
          href: `mailto:${basePersonal.email}`
        },
        {
          icon: MapPin,
          label: "Location",
          value: "Beijing, China",
          href: null
        }
      ]
    },
    footer: {
      text: "English profile focused on research interests, methodology, and graduate-school potential."
    },
    ui: {
      contactLabel: "Contact",
      languageLabel: "Language switcher",
      toggleNavLabel: "Toggle navigation"
    }
  }
};

export function getPortfolioContent(locale: Locale) {
  return contentByLocale[locale];
}

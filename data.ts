
import { Project, Experience, Education, Media } from './types';

export const PERSONAL_INFO = {
  name: "Yoshua Yanottama",
  title: "Learning Experience | Edtech Leader | Instructional Design",
  summary: "Learning support and enablement specialist with over 11 years of experience in EdTech — taking curriculum and teacher operations from the ground up to national and international scale. Skilled in instructional systems design, AI-assisted learning tools, and building educator communities that actually stick. Track record of delivering learning programs for more than 5 million learners across diverse markets in the Global South.",
  philosophy: [
    {
      title: "Learning Analytics in Practice",
      description: "I use data not for its own sake, but to find the friction — the point where learners drop off, disengage, or fall behind — and design specifically to fix that. Good curriculum is built on evidence, not intuition alone."
    },
    {
      title: "Localization Over Translation",
      description: "Localizing a learning program means questioning whether the underlying logic of the content fits the learner's context — culturally, linguistically, and pedagogically. I've done this at scale for US and global curricula adapted to Indonesian K–12 and professional settings."
    },
    {
      title: "Immersive Tech with Intent",
      description: "XR and AI tools are only valuable if they solve a problem that simpler formats can't. I've deployed AR/VR and adaptive learning tools in contexts where they genuinely moved the needle — not as a showcase, but as a design response."
    },
    {
      title: "Educator-First Capacity Building",
      description: "The most scalable investment in learning quality is developing the educators themselves. Whether designing certifications for 2,300+ online instructors or building structured CPD tracks, I prioritize the people who deliver learning, not just the content."
    }
  ],
  contact: {
    phone: "+62 822 1321 8973 / +886 911 785 973",
    email: "yoshua.yano@gmail.com",
    linkedin: "linkedin.com/in/yoshuay",
    location: "Jakarta, Indonesia & Taipei City, Taiwan"
  },
  skills: [
    "ADDIE & SAM Models", "Instructional Systems Design (ISD)", "Learning Analytics", "Curriculum Development",
    "AR/VR Learning Experiences", "Project Management", "Stakeholder Management",
    "Digital Credentialing", "Gamification Design", "AI Implementation in L&D", "SCORM / LMS"
  ]
};

export const EDUCATION: Education[] = [
  {
    degree: "Master of Education",
    field: "Computer Education",
    institution: "National Taiwan Normal University (NTNU)",
    location: "Taipei, Taiwan",
    period: "2024 – Present",
    note: "Currently enrolled. Focused on technology-integrated pedagogy and AI in education."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "khan-academy",
    title: "Khan Academy Localization",
    category: "Curriculum Mapping | Instructional Design",
    description: "Led the end-to-end localization of the Khan Academy US Common Core mathematics framework for the Indonesian K–12 curriculum. The project ran through EFA Learning Center and was subsequently adopted nationally for home-based learning during the COVID-19 pandemic. This required deep alignment work to ensure international pedagogical approaches translated meaningfully into Indonesian classroom contexts.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    tags: ["Curriculum Mapping", "Localization", "Instructional Design"],
    details: [
      "Mapped over 600 localized videos, articles, and assessments to ensure alignment with Indonesian national curriculum (K-13) standards.",
      "Managed the production and quality review of 1,000+ localized learning materials — videos, written articles, and formative exercises.",
      "Built and coordinated a distributed team of 12 educators, voice talents, and designers across different cities.",
      "Implemented a standardized visual identity protocol for instructional videos using Wacom tablets and Camtasia for consistent pedagogical presentation.",
      "Content was adopted nationally for home-based learning during COVID-19, reaching students across Indonesian provinces."
    ]
  },
  {
    id: "cakap-teacher",
    title: "Cakap Teacher Academy",
    category: "Teacher Training | Capacity Building",
    description: "Designed and operationalized a proprietary professionalization and certification framework for Cakap's global instructor base. The Teacher Academy became the backbone for scaling and standardizing instructional quality — bringing structure, professional identity, and measurable outcomes to a fast-growing gig-economy teaching workforce.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    tags: ["Project Management", "Teacher Operations", "Impact Design"],
    details: [
      "Onboarded and certified over 2,300 educators from 12 countries through structured induction and standardized teaching quality reviews.",
      "Designed a structured Continuous Professional Development (CPD) track with tiered certifications for teaching performance and digital platform fluency.",
      "Built a gamified instructor evaluation system (IES) to make performance feedback practical, consistent, and motivating for distributed instructors.",
      "Achieved 85% instructor compliance with newly introduced digital teaching standards and proprietary LMS interaction requirements.",
      "The Teacher Academy supported 400% business growth in the teacher-led segment and a 1000% increase in the overall instructor base during the program's lifespan."
    ]
  },
  {
    id: "cest",
    title: "CEST — Cakap English Standardized Test",
    category: "Digital Credentials | Product Development",
    description: "Directed the full lifecycle development of Indonesia's first locally-built, CEFR-aligned English proficiency assessment. CEST was designed as an accessible, institutionally credible alternative for the Indonesian market — both retail and B2B — backed by a structured item development and validation process.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    tags: ["Go-to-market", "Product Strategy", "Assessment Design"],
    details: [
      "Scaled CEST to 20,000+ individual test takers and integrated the assessment into the hiring pipelines of 150+ institutional partners.",
      "Designed the CEFR-aligned assessment framework, incorporating adaptive testing logic to reduce test duration while maintaining psychometric rigour.",
      "Built an affordable, locally-hosted digital delivery stack as a credible alternative to legacy international providers for Indonesian institutional users.",
      "Managed secure digital credentialing infrastructure for certificate issuance and verification."
    ]
  },
  {
    id: "usaid",
    title: "USAID Climate Finance Module",
    category: "E-Learning Development",
    description: "Served as lead instructional developer for a USAID-funded initiative focused on climate finance policy. The project required turning dense environmental policy documentation into accessible, interactive e-learning for diverse global stakeholders — collaborating with subject matter experts from the US and UK.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    tags: ["Articulate Storyline", "LMS", "SCORM"],
    details: [
      "Authored 36 hours of SCORM-compliant, interactive e-learning modules using Articulate Storyline 360.",
      "Collaborated with SMEs across the US and UK to synthesize complex climate finance mechanisms into structured, accessible learning units.",
      "Worked with a US Project Manager and UK Instructional Design counterpart through the full design-to-delivery cycle.",
      "Adapted content for digital delivery in contexts where bandwidth and device access varied across participant regions."
    ]
  },
  {
    id: "arvr",
    title: "AR & VR Learning Experience",
    category: "WEF Showcase | Immersive Learning",
    description: "Conceptualized and developed a 'metacourse' prototype demonstrating language acquisition through immersive XR technology. The platform was selected as a digital showcase at the Indonesian Pavilion at the World Economic Forum 2022 in Davos, and was developed in partnership with AR&Co.",
    imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop",
    tags: ["Unity3D", "Meta Quest", "XR Design"],
    details: [
      "Showcased the prototype at the World Economic Forum (WEF) 2022 Indonesia Pavilion in Davos.",
      "Developed branching narrative architectures in Unity3D with interactive dialogue and decision-making scenarios to simulate realistic language conversations.",
      "Engineered for multi-modal deployment on Meta Quest 3 headsets and Android mobile devices.",
      "Blended 3D environments with localized narration to create a culturally grounded immersive language learning experience."
    ]
  },
  {
    id: "ai-assessment",
    title: "AI Assessment Tools",
    category: "AI in Education | Assessment Design",
    description: "Led the design and implementation of AI-assisted assessment tools to automate and scale grading and feedback for large learner populations. The initiative directly addressed bottlenecks in manual grading workflows and improved consistency of feedback delivery at scale.",
    imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop",
    tags: ["AI Implementation", "Assessment", "EdTech"],
    details: [
      "Achieved 90% agreement rate between AI-grader and human expert evaluations across deployed assessments.",
      "Scaled assessment delivery to over 100,000 test takers across the platform.",
      "Reduced grading turnaround time significantly, enabling faster feedback loops for learners and instructors.",
      "Collaborated with technical teams to train and validate AI scoring models against human-annotated rubrics."
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Learning Design & Enablement",
    company: "Cakap",
    location: "Jakarta / Remote",
    period: "Jul 2020 – Aug 2025",
    achievements: [
      "Led R&D and integration of AI-driven learning tools serving Cakap's B2C user base of more than 5 million students across diverse markets.",
      "Orchestrated B2B institutional expansion by designing bespoke instructional frameworks for corporations and government agencies.",
      "Reduced production cost by 50% through implementation of Agile instructional design workflows and automated curriculum mapping tools.",
      "Presented at SEAMEO–INDMO Skills Week in Timor-Leste on digital education infrastructure and cross-border teacher professionalization.",
      "Managed the end-to-end design of the Cakap Teacher Academy and CEST product, from concept through national deployment.",
      "Built and led the instructional design and content function, including team structure, workflows, and quality assurance standards."
    ]
  },
  {
    role: "Co-founder & Learning Consultant",
    company: "EFA Learning Center",
    location: "Jakarta",
    period: "2018 – 2020",
    achievements: [
      "Co-founded and ran an independent learning center focused on K–12 supplementary education and curriculum consulting.",
      "Originated the Khan Academy Localization project, which was later adopted nationally for home-based learning during COVID-19.",
      "Consulted on curriculum alignment and instructional design for schools and education partners in the Jakarta area.",
      "Built educator teams and managed content production pipelines for localized learning material development."
    ]
  },
  {
    role: "Science Teacher",
    company: "UPH College",
    location: "Jakarta",
    period: "2013 – 2018",
    achievements: [
      "Taught science subjects at secondary level for 5 years, developing classroom curriculum and assessment materials.",
      "Gained foundational experience in learner-centered instruction that directly informed later instructional design work.",
      "Identified the gap between formal schooling and accessible supplementary learning that led to co-founding EFA Learning Center.",
      "Integrated early digital tools and multimedia into classroom delivery to improve student engagement."
    ]
  }
];

export const MEDIA_COVERAGES: Media[] = [
  {
    title: "Mime Asia — Cakap Collaborates with AR&Co to Bring AR Technology",
    description: "Coverage on how Cakap partnered with AR&Co to develop augmented reality language learning experiences, including the WEF 2022 showcase.",
    url: "https://mime.asia"
  },
  {
    title: "Mime Asia — Cakap Startup to Recruit 1,000 Teachers through Teacher Academy",
    description: "Feature on the launch and ambitions of the Cakap Teacher Academy, profiling its approach to professionalizing Indonesia's online tutoring workforce.",
    url: "https://mime.asia"
  },
  {
    title: "The Ken — How Indonesian EdTechs Zenius and Cakap Are Solving a Teacher Talent Crunch",
    description: "In-depth analysis of the strategic impact of the Teacher Academy in professionalizing the gig-economy tutoring workforce across Southeast Asia.",
    url: "https://the-ken.com"
  },
  {
    title: "The Jakarta Post — Edtech Cakap Takes Part in Indonesia Pavilion, WEF 2022",
    description: "Reporting on Cakap's AR/VR language learning prototype showcased at the World Economic Forum in Davos as part of the Indonesian Pavilion.",
    url: "https://www.thejakartapost.com"
  },
  {
    title: "The Jakarta Post — Cakap: Pioneering Indonesian EdTech in Timor-Leste",
    description: "Coverage of Cakap's international expansion and partnership to elevate technical and vocational education quality through digital cross-border collaboration.",
    url: "https://www.thejakartapost.com"
  }
];

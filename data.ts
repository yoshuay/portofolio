
import { Project, Experience, Media } from './types';

export const PERSONAL_INFO = {
  name: "Yoshua Yanottama",
  title: "Learning Experience | Edtech Leader | Instructional Design",
  summary: "A highly strategic and visionary learning leader with over 11 years of extensive experience leveraging EdTech innovation to architect scalable organizational capacity and drive exceptional performance metrics. Expertly proficient in the implementation of the ADDIE and SAM models, Instructional Systems Design (ISD), and the integration of advanced AI-powered learning ecosystems to empower over 5 million learners across diverse markets in the Global South. A proven track record of aligning global educational standards with local sociocultural contexts, ensuring high-fidelity curriculum localization and pedagogical integrity at an institutional scale.",
  philosophy: [
    {
      title: "Data-Driven Heutagogy",
      description: "Transcending traditional pedagogical boundaries to foster self-determined learning environments. I utilize granular learning analytics to map learner agency, optimize retention, and drive quantifiable curriculum outcomes through iterative feedback loops."
    },
    {
      title: "Scalable Localization Frameworks",
      description: "Bridging the critical gap between rigorous global standards—such as the US Common Core and CEFR—and hyper-local educational contexts through the design of systematic, high-throughput alignment workflows and quality assurance protocols."
    },
    {
      title: "Immersive Cognitive Innovation",
      description: "Strategically deploying Extended Reality (XR) technologies, including AR and VR, not as supplementary novelties but as core instruments for high-retention technical training, sophisticated language acquisition, and multi-sensory cognitive engagement."
    },
    {
      title: "AI-Augmented Instructional Design",
      description: "Integrating Large Language Models (LLMs) and generative AI to automate curriculum mapping, personalize learning pathways at scale, and reduce instructional development lifecycle times by up to 50% without compromising educational depth."
    }
  ],
  contact: {
    phone: "+62 822 1321 8973 / +886 911 785 973",
    email: "yoshua.yano@gmail.com",
    linkedin: "linkedin.com/in/yoshuay",
    location: "Jakarta, Indonesia & Taipei City, Taiwan"
  },
  skills: [
    "Advanced ADDIE Model", "Heutagogical Design", "Predictive Learning Analytics", "Macro-level Curriculum Development", 
    "AR/VR Learning Ecosystems", "Strategic Project Management", "Multi-tier Stakeholder Management", 
    "Digital Credentialing & Blockchain Identity", "Gamification Mechanics", "Instructional Design (ISD)", "AI Implementation Strategy"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "khan-academy",
    title: "Khan Academy Localization",
    category: "Curriculum Mapping | Instructional Design",
    description: "Spearheaded the comprehensive, end-to-end localization and national alignment of the Khan Academy US Common Core mathematical framework for the Indonesian K-12 curriculum. This multi-year initiative involved deep-level cognitive mapping to ensure that international pedagogical strategies translated effectively into local classroom realities while maintaining the signature instructional style of the platform.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    tags: ["Curriculum Mapping", "Localization", "Instructional Design"],
    details: [
      "Conducted granular mapping of over 500 Indonesian Math 'Basic Competence' (KD) standards against the US Common Core hierarchy, identifying critical gaps and cognitive overlaps.",
      "Engineered and managed a high-throughput production pipeline for the creation and review of 1,000+ localized learning videos, technical articles, and formative exercise sets.",
      "Orchestrated a cross-functional, distributed team of 12 senior educators, subject matter experts (SMEs), translators, and professional voice-over artists.",
      "Achieved a 95% alignment accuracy verified by rigorous independent reviews and local Ministry of Education (Kemendikbud) standards.",
      "Implemented a standardized 'Visual Identity' protocol for instructional videos, utilizing Wacom tablets and Camtasia for high-fidelity pedagogical reproduction."
    ]
  },
  {
    id: "cakap-teacher",
    title: "Cakap Teacher Academy",
    category: "Teacher Training | Capacity Building",
    description: "Architected and operationalized a proprietary professionalization and certification framework for thousands of online instructors globally. The Cakap Teacher Academy served as the strategic backbone for scaling the instructor base by 1000% while simultaneously increasing student satisfaction and instructional consistency through a data-backed quality assurance model.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    tags: ["Project Management", "Teacher Operations", "Impact Design"],
    details: [
      "Strategically onboarded and certified over 2,300 educators from 12 different countries within a compressed 18-month roadmap.",
      "Formulated a structured Continuous Professional Development (CPD) track that reduced instructor churn by 40% year-over-year.",
      "Designed an innovative, gamified instructor evaluation system (IES) that directly correlated teaching performance with student retention, leading to a 15% improvement in NPS.",
      "Secured a high 85% instructor compliance rate with newly introduced digital teaching standards and proprietary LMS interactions.",
      "Facilitated 400% business growth in the teacher-led segment through the design of scalable pedagogical playbooks."
    ]
  },
  {
    id: "cest",
    title: "CEST - Cakap English Standardized Test",
    category: "Digital Credentials | Product Development",
    description: "Directed the complete lifecycle development and go-to-market strategy for Indonesia's first homegrown, high-validity digital English proficiency assessment. CEST was designed to disrupt the high-cost international testing market by providing a localized, CEFR-aligned alternative accessible to institutional and retail users alike.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    tags: ["Go-to-market", "Product Strategy", "Assessment Design"],
    details: [
      "Acquired 20,000+ individual test takers and successfully integrated the assessment into the recruitment pipelines of 150+ institutional partners.",
      "Designed the CEFR-aligned assessment framework, incorporating adaptive testing logic to reduce test duration while maintaining psychometric validity.",
      "Realized an 80% reduction in institutional testing costs compared to traditional legacy providers (TOEFL/IELTS) by re-engineering the digital delivery stack.",
      "Pioneered the integration of secure digital credentialing, issuing blockchain-verified certificates to prevent credential fraud.",
      "Managed the technical validation study with academic partners to establish the platform's concurrent validity and reliability coefficients."
    ]
  },
  {
    id: "usaid",
    title: "USAID Climate Finance Module",
    category: "E-Learning Development",
    description: "Served as the lead instructional developer for a global, multi-million dollar USAID-funded initiative focused on climate finance policy. The project necessitated the transformation of highly dense, technical environmental policy documents into an engaging and accessible interactive e-learning curriculum for diverse global stakeholders.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    tags: ["Articulate Storyline", "LMS", "SCORM"],
    details: [
      "Authored over 36 hours of SCORM-compliant, interactive e-learning modules using Articulate Storyline 360.",
      "Collaborated with diverse subject matter experts across the US and UK to synthesize complex global climate finance mechanisms into actionable learning units.",
      "Optimized all digital learning assets for low-bandwidth environments to ensure equitable access for participants in rural and developing regions.",
      "Maintained an exceptional 4.8/5.0 learner satisfaction rating during the initial pilot phase with over 1,000 participants from international NGOs.",
      "Designed a comprehensive 'Toolkit for Sustainability' to enable local government agencies to continue learning post-program."
    ]
  },
  {
    id: "arvr",
    title: "AR & VR Learning Experience",
    category: "WEF Showcase | Immersive Learning",
    description: "Conceptualized and developed a high-profile 'metacourse' prototype demonstrating the future of language acquisition through immersive technology. This innovative platform was selected as a key digital showcase for the Indonesian Pavilion at the World Economic Forum 2022 in Davos.",
    imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop",
    tags: ["Unity3D", "Meta Quest", "XR Design"],
    details: [
      "Successfully showcased the prototype to global heads of state and tech leaders at the World Economic Forum (WEF) 2022 Indonesia Pavilion.",
      "Developed branching narrative architectures within Unity3D that responded dynamically to user voice input and decision-making.",
      "Conducted usability research indicating a 30% increase in learner self-confidence during conversational scenarios compared to traditional 2D apps.",
      "Engineered the platform for multi-modal deployment, supporting both Meta Quest 2 headsets and standardized Android mobile devices.",
      "Blended high-fidelity 3D environments with localized narration to create a culturally responsive immersive environment."
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Head of Learning Design & Innovation",
    company: "Cakap",
    location: "Jakarta/Remote",
    period: "Feb 2023 - Present",
    achievements: [
      "Spearheading the R&D and implementation of AI-driven personalized learning paths for a user base exceeding 1 million active learners.",
      "Orchestrating the B2B institutional expansion strategy by architecting bespoke instructional frameworks for major corporations and government agencies.",
      "Decreased the curriculum development lifecycle by 50% through the implementation of Agile Instructional Design and automated mapping tools.",
      "Directing a $2M+ annual content production and educational talent development budget with a focus on high-ROI learning outcomes.",
      "Providing strategic consultation to international educational bodies, including the Timor-Leste INDMO, on scaling digital education infrastructure."
    ]
  },
  {
    role: "Senior Manager, Instructional Design",
    company: "Cakap",
    location: "Jakarta",
    period: "Aug 2021 - Jan 2023",
    achievements: [
      "Designed the comprehensive performance management and pedagogical upskilling framework for a workforce of 1,000+ distributed online tutors.",
      "Oversaw the successful strategic transition from purely synchronous learning to a high-margin blended learning model, improving gross margins by 20%.",
      "Managed the end-to-end design and delivery of high-profile innovation projects, including AR/VR showcases for global economic summits.",
      "Led the recruitment and professional development of a 15-person instructional design and content team."
    ]
  }
];

export const MEDIA_COVERAGES: Media[] = [
  {
    title: "Mime Asia - Mandarin for Kids through AR",
    description: "A comprehensive analysis of how we leveraged Augmented Reality to disrupt early childhood language learning and improve phonemic awareness.",
    url: "#"
  },
  {
    title: "The Ken - Solving the EdTech Talent Crunch",
    description: "A feature discussing the strategic impact of the Teacher Academy in professionalizing the gig-economy tutoring workforce in Southeast Asia.",
    url: "#"
  },
  {
    title: "Jakarta Post - Edtech Expansion in Timor-Leste",
    description: "Reporting on our international partnership to elevate technical and vocational education standards through digital cross-border collaboration.",
    url: "#"
  }
];

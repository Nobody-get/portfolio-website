"use client";

import { useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Github,
  FileText,
  PlayCircle,
  Building2,
  Image as ImageIcon
} from "lucide-react";

type Language = "en" | "de";

const navItems = {
  en: ["About", "Education", "Experience", "Skills", "Projects", "Certificates", "Contact"],
  de: ["Über mich", "Bildung", "Erfahrung", "Fähigkeiten", "Projekte", "Zertifikate", "Kontakt"]
};

const navIds = ["about", "education", "experience", "skills", "projects", "certificates", "contact"];

const content = {
  en: {
    heroBadge: "Information Systems Student · Working Student Data Engineer",
    heroTitle: "Building data-driven systems with Microsoft Fabric, software, and analytics.",
    heroText:
      "I am Youssef Abdelaziz, an Information Systems student at Technische Hochschule Augsburg with an international Computer Science background and hands-on experience in data engineering, Microsoft Fabric, software development, and scalable digital solutions.",
    viewProjects: "View Projects",
    downloadCV: "Download CV",

    aboutEyebrow: "About",
    aboutTitle: "A practical data and software profile with an international academic path.",
    aboutText:
      "My background combines Computer Science studies in Egypt with International Information Systems in Germany. I focus on turning technical knowledge into real project value — especially in data pipelines, analytics-ready datasets, application logic, and modern business systems.",

    aboutCards: [
      {
        title: "Software Foundation",
        text: "C++, Java, Python, JavaScript, web technologies, and structured programming concepts."
      },
      {
        title: "Data Engineering",
        text: "Hands-on work with Microsoft Fabric, SAP HANA, SQL, PySpark, Lakehouse, and Medallion Architecture."
      },
      {
        title: "Real Project Mindset",
        text: "Experience connecting business needs with deployable systems, analytics, automation, and user-facing solutions."
      }
    ],

    educationEyebrow: "Education",
    educationTitle: "Education built across two academic systems.",
    universityWebsite: "University Website",
    viewTranscript: "View Transcript",

    experienceEyebrow: "Experience",
    experienceTitle: "Professional experience in data, IT systems, and operations.",
    companyWebsite: "Company Website",

    skillsEyebrow: "Skills",
    skillsTitle: "Technical toolkit organized for data, software, and business systems.",

    projectsEyebrow: "Projects",
    projectsTitle: "Selected work showing practical execution and technical growth.",
    projectsText:
      "These projects highlight my experience with data platforms, AI-powered mobile apps, endpoint management, automation, data analytics, and embedded systems.",
    projectVideos: "Project Videos",
    projectGallery: "Project Gallery",
    viewProjectReport: "View Project Report",

    certificatesEyebrow: "Certificates",
    certificatesTitle: "Verified learning that supports my data engineering direction.",
    certificatesText:
      "My certifications strengthen my focus on Microsoft Fabric, analytics engineering, data engineering, and professional English communication.",
    viewCredential: "View credential",

    contactEyebrow: "Contact",
    contactTitle: "Let’s connect about data, software, or working-student opportunities.",
    contactText:
      "I am open to opportunities where I can contribute to practical IT, data engineering, analytics, and software projects while continuing to grow professionally.",
    email: "Email",
    phone: "Phone",
    company: "Company",
    cv: "CV",
    downloadPDF: "Download PDF",

    footer: "Built for professional portfolio and CV sharing."
  },

  de: {
    heroBadge: "Student der Wirtschaftsinformatik · Werkstudent Data Engineer",
    heroTitle: "Ich entwickle datengetriebene Systeme mit Microsoft Fabric, Software und Analytics.",
    heroText:
      "Ich bin Youssef Abdelaziz, Student der International Information Systems an der Technischen Hochschule Augsburg. Ich habe einen internationalen akademischen Hintergrund in Informatik und praktische Erfahrung in Data Engineering, Microsoft Fabric, Softwareentwicklung und skalierbaren digitalen Lösungen.",
    viewProjects: "Projekte ansehen",
    downloadCV: "Lebenslauf herunterladen",

    aboutEyebrow: "Über mich",
    aboutTitle:
      "Ein praxisorientiertes Profil in Data Engineering und Software mit internationalem akademischem Hintergrund.",
    aboutText:
      "Mein Hintergrund verbindet Informatikstudien in Ägypten mit International Information Systems in Deutschland. Mein Fokus liegt darauf, technisches Wissen in echten Projektwert umzuwandeln — besonders in Datenpipelines, analysebereiten Datensätzen, Applikationslogik und modernen Business-Systemen.",

    aboutCards: [
      {
        title: "Software-Grundlagen",
        text: "C++, Java, Python, JavaScript, Webtechnologien und strukturierte Programmierkonzepte."
      },
      {
        title: "Data Engineering",
        text: "Praktische Erfahrung mit Microsoft Fabric, SAP HANA, SQL, PySpark, Lakehouse und Medallion Architecture."
      },
      {
        title: "Projektorientiertes Denken",
        text: "Erfahrung darin, Business-Anforderungen mit einsetzbaren Systemen, Analytics, Automatisierung und nutzerorientierten Lösungen zu verbinden."
      }
    ],

    educationEyebrow: "Bildung",
    educationTitle: "Ausbildung über zwei akademische Systeme hinweg.",
    universityWebsite: "Hochschulwebsite",
    viewTranscript: "Notenspiegel ansehen",

    experienceEyebrow: "Erfahrung",
    experienceTitle: "Berufserfahrung in Data, IT-Systemen und operativen Prozessen.",
    companyWebsite: "Unternehmenswebsite",

    skillsEyebrow: "Fähigkeiten",
    skillsTitle: "Technische Fähigkeiten für Data, Software und Business-Systeme.",

    projectsEyebrow: "Projekte",
    projectsTitle: "Ausgewählte Projekte mit praktischem Fokus und technischer Entwicklung.",
    projectsText:
      "Diese Projekte zeigen meine Erfahrung mit Datenplattformen, KI-gestützten mobilen Apps, Endpoint Management, Automatisierung, Data Analytics und Embedded Systems.",
    projectVideos: "Projektvideos",
    projectGallery: "Projektgalerie",
    viewProjectReport: "Projektbericht ansehen",

    certificatesEyebrow: "Zertifikate",
    certificatesTitle: "Verifizierte Zertifikate zur Unterstützung meiner Data-Engineering-Ausrichtung.",
    certificatesText:
      "Meine Zertifikate stärken meinen Fokus auf Microsoft Fabric, Analytics Engineering, Data Engineering und professionelle englische Kommunikation.",
    viewCredential: "Zertifikat ansehen",

    contactEyebrow: "Kontakt",
    contactTitle: "Lassen Sie uns über Data, Software oder Werkstudentenstellen sprechen.",
    contactText:
      "Ich bin offen für Möglichkeiten, bei denen ich zu praktischen IT-, Data-Engineering-, Analytics- und Softwareprojekten beitragen und mich gleichzeitig beruflich weiterentwickeln kann.",
    email: "E-Mail",
    phone: "Telefon",
    company: "Unternehmen",
    cv: "Lebenslauf",
    downloadPDF: "PDF herunterladen",

    footer: "Erstellt für professionelles Portfolio- und CV-Sharing."
  }
};

const skills = {
  en: [
    { group: "Programming", items: ["C++", "Java", "Python", "HTML", "CSS", "JavaScript", "SQL"] },
    {
      group: "Data & Analytics",
      items: [
        "Microsoft Fabric",
        "Power BI",
        "Excel",
        "PySpark",
        "Data Pipelines",
        "Lakehouse",
        "Medallion Architecture"
      ]
    },
    {
      group: "Software & Cloud",
      items: ["Flutter", "Firebase", "OpenAI API", "REST APIs", "Microsoft Intune", "Endpoint Manager"]
    },
    { group: "Languages", items: ["Arabic — Native", "English — B2", "German — A2"] }
  ],
  de: [
    { group: "Programmierung", items: ["C++", "Java", "Python", "HTML", "CSS", "JavaScript", "SQL"] },
    {
      group: "Data & Analytics",
      items: [
        "Microsoft Fabric",
        "Power BI",
        "Excel",
        "PySpark",
        "Data Pipelines",
        "Lakehouse",
        "Medallion Architecture"
      ]
    },
    {
      group: "Software & Cloud",
      items: ["Flutter", "Firebase", "OpenAI API", "REST APIs", "Microsoft Intune", "Endpoint Manager"]
    },
    { group: "Sprachen", items: ["Arabisch — Muttersprache", "Englisch — B2", "Deutsch — A2"] }
  ]
};

const projects = {
  en: [
    {
      title: "Microsoft Fabric Data Platform Implementation — Sortimo Project",
      company: "DIVINT Technology und IT Solutions GmbH",
      role: "Working Student — Data Engineer",
      tech: "Microsoft Fabric, SAP HANA, SQL, PySpark, Data Pipelines, Medallion Architecture",
      description:
        "Designed and implemented an end-to-end data ingestion and transformation platform from SAP HANA into Microsoft Fabric, structured through Bronze, Silver, and Gold layers for analytics-ready datasets.",
      highlights: [
        "Built scalable data pipelines and Fabric Lakehouse transformations.",
        "Cleaned, transformed, and optimized datasets using SQL and PySpark.",
        "Created a Copilot Studio chatbot connected to Fabric data for business insights."
      ]
    },
    {
      title: "Academic Success Prediction — Data Cleaning & Visualization",
      company: "Technische Hochschule Augsburg",
      role: "Team Project — Data Cleaning & Visualization Lead",
      tech: "Python, Pandas, Matplotlib, Seaborn, Data Cleaning, Data Visualization, Exploratory Data Analysis",
      description:
        "Worked on the first phase of a team data analytics project focused on student academic success prediction. My responsibility was to understand the dataset, clean the data, perform data-quality checks, create initial visualizations, identify important patterns, and prepare a structured handover for the modeling phase.",
      highlights: [
        "Loaded and cleaned a semicolon-separated dataset with problematic column names.",
        "Checked missing values, duplicates, binary variables, categorical codes, and numerical ranges.",
        "Created visualizations showing relationships between dropout risk, tuition status, debtor status, approved units, grades, and age.",
        "Prepared a clean dataset and clear handover notes for the teammate responsible for model training."
      ],
      reportHref: "/documents/academic-success-report.docx"
    },
    {
      title: "EasyFit — AI-Powered Nutrition & Calorie Tracking App",
      company: "Technische Hochschule Augsburg",
      role: "Student Developer",
      tech: "Flutter, Firebase, OpenAI API, REST API, Backend Integration",
      description:
        "Developed AI-powered functionality for a mobile nutrition app, connecting Flutter, Firebase backend services, and OpenAI API logic to support intelligent meal analysis and user guidance.",
      highlights: [
        "Integrated AI responses into a mobile app workflow.",
        "Connected frontend, backend, and API layers for smooth communication.",
        "Continued feature development and application improvements."
      ],
      images: [
        { title: "Dashboard", src: "/images/easyfit/dashboard.png" },
        { title: "Meals", src: "/images/easyfit/meals.png" },
        { title: "Meal Entry", src: "/images/easyfit/meal_entry.png" },
        { title: "Suggestions", src: "/images/easyfit/suggestions.png" },
        { title: "Analysis", src: "/images/easyfit/analysis.png" },
        { title: "Profile", src: "/images/easyfit/profile.png" }
      ]
    },
    {
      title: "Microsoft Intune Device & Application Management Project",
      company: "DIVINT Technology und IT Solutions GmbH",
      role: "Working Student — Data Engineer",
      tech: "Microsoft Intune, Microsoft Endpoint Manager, Windows Devices, Application Deployment",
      description:
        "Supported centralized device and application management by deploying software to Windows devices and managing devices inside the company endpoint environment.",
      highlights: [
        "Deployed business applications through Microsoft Intune.",
        "Added and removed devices based on organizational needs.",
        "Gained practical experience in endpoint management and IT administration."
      ]
    },
    {
      title: "Bill Management System",
      company: "Academic Project",
      role: "Developer",
      tech: "Python",
      description:
        "Developed a billing management system to automate billing operations and improve record-keeping and data handling.",
      highlights: ["Focused on automation, structured data handling, and practical business logic."]
    },
    {
      title: "Line Follower Car",
      company: "Academic Project",
      role: "Developer",
      tech: "C++ & Arduino",
      description:
        "Designed and programmed a robot car that follows a line using Arduino microcontrollers and C++ logic.",
      highlights: ["Applied programming fundamentals to a physical embedded-system project."],
      videos: [
        { title: "Line Follower Demo 1", src: "/videos/arduino-line-follower-car-1.mp4" },
        { title: "Line Follower Demo 2", src: "/videos/arduino-line-follower-car-2.mp4" }
      ]
    }
  ],

  de: [
    {
      title: "Microsoft Fabric Data Platform Implementation — Sortimo Projekt",
      company: "DIVINT Technology und IT Solutions GmbH",
      role: "Werkstudent — Data Engineer",
      tech: "Microsoft Fabric, SAP HANA, SQL, PySpark, Data Pipelines, Medallion Architecture",
      description:
        "Entwicklung und Umsetzung einer End-to-End-Datenplattform zur Datenaufnahme und Transformation von SAP HANA nach Microsoft Fabric, strukturiert in Bronze-, Silver- und Gold-Layer für analysebereite Datensätze.",
      highlights: [
        "Aufbau skalierbarer Datenpipelines und Fabric-Lakehouse-Transformationen.",
        "Bereinigung, Transformation und Optimierung von Daten mit SQL und PySpark.",
        "Erstellung eines Copilot-Studio-Chatbots mit Fabric-Daten für Business Insights."
      ]
    },
    {
      title: "Academic Success Prediction — Datenbereinigung & Visualisierung",
      company: "Technische Hochschule Augsburg",
      role: "Teamprojekt — Data Cleaning & Visualization Lead",
      tech: "Python, Pandas, Matplotlib, Seaborn, Datenbereinigung, Datenvisualisierung, Explorative Datenanalyse",
      description:
        "Arbeit an der ersten Phase eines Teamprojekts im Bereich Data Analytics zur Vorhersage des akademischen Erfolgs von Studierenden. Meine Verantwortung lag im Datenverständnis, der Datenbereinigung, Qualitätsprüfung, ersten Visualisierungen, Erkennung wichtiger Muster und einer strukturierten Übergabe an die Modellierungsphase.",
      highlights: [
        "Laden und Bereinigen eines semikolongetrennten Datensatzes mit problematischen Spaltennamen.",
        "Prüfung von fehlenden Werten, Duplikaten, binären Variablen, kategorialen Codes und numerischen Wertebereichen.",
        "Erstellung von Visualisierungen zu Dropout-Risiko, Studiengebührenstatus, Schuldnerstatus, bestandenen Einheiten, Noten und Alter.",
        "Vorbereitung eines bereinigten Datensatzes und klarer Übergabenotizen für den Teamkollegen im Modellierungsteil."
      ],
      reportHref: "/documents/academic-success-report.docx"
    },
    {
      title: "EasyFit — KI-gestützte App für Ernährung und Kalorienverfolgung",
      company: "Technische Hochschule Augsburg",
      role: "Studentischer Entwickler",
      tech: "Flutter, Firebase, OpenAI API, REST API, Backend Integration",
      description:
        "Entwicklung KI-gestützter Funktionen für eine mobile Ernährungs-App durch Verbindung von Flutter, Firebase-Backend-Services und OpenAI-API-Logik für intelligente Mahlzeitenanalyse und Nutzerunterstützung.",
      highlights: [
        "Integration von KI-Antworten in den mobilen App-Workflow.",
        "Verbindung von Frontend, Backend und API-Logik für reibungslose Kommunikation.",
        "Fortlaufende Entwicklung neuer Funktionen und Verbesserung der App."
      ],
      images: [
        { title: "Dashboard", src: "/images/easyfit/dashboard.png" },
        { title: "Mahlzeiten", src: "/images/easyfit/meals.png" },
        { title: "Mahlzeit erfassen", src: "/images/easyfit/meal_entry.png" },
        { title: "Vorschläge", src: "/images/easyfit/suggestions.png" },
        { title: "Analyse", src: "/images/easyfit/analysis.png" },
        { title: "Profil", src: "/images/easyfit/profile.png" }
      ]
    },
    {
      title: "Microsoft Intune Device & Application Management Projekt",
      company: "DIVINT Technology und IT Solutions GmbH",
      role: "Werkstudent — Data Engineer",
      tech: "Microsoft Intune, Microsoft Endpoint Manager, Windows Devices, Application Deployment",
      description:
        "Unterstützung eines Projekts zur zentralen Geräte- und Anwendungsverwaltung durch Softwarebereitstellung auf Windows-Geräten und Verwaltung von Geräten in der Endpoint-Management-Umgebung.",
      highlights: [
        "Bereitstellung von Business-Anwendungen über Microsoft Intune.",
        "Hinzufügen und Entfernen von Geräten entsprechend den Anforderungen der Organisation.",
        "Praktische Erfahrung in Endpoint Management und IT-Administration gesammelt."
      ]
    },
    {
      title: "Bill Management System",
      company: "Akademisches Projekt",
      role: "Entwickler",
      tech: "Python",
      description:
        "Entwicklung eines Abrechnungssystems zur Automatisierung von Billing-Prozessen und Verbesserung der Datenerfassung und Datenverwaltung.",
      highlights: ["Fokus auf Automatisierung, strukturierte Datenverarbeitung und praktische Business-Logik."]
    },
    {
      title: "Line Follower Car",
      company: "Akademisches Projekt",
      role: "Entwickler",
      tech: "C++ & Arduino",
      description:
        "Entwicklung und Programmierung eines Roboterautos, das mithilfe von Arduino-Mikrocontrollern und C++ einer Linie folgt.",
      highlights: ["Anwendung von Programmiergrundlagen in einem physischen Embedded-System-Projekt."],
      videos: [
        { title: "Line Follower Demo 1", src: "/videos/arduino-line-follower-car-1.mp4" },
        { title: "Line Follower Demo 2", src: "/videos/arduino-line-follower-car-2.mp4" }
      ]
    }
  ]
};

const certificates = {
  en: [
    {
      title: "Microsoft Certified: Fabric Data Engineer Associate",
      exam: "DP-700",
      issuer: "Microsoft",
      earned: "February 22, 2026",
      expires: "February 23, 2027",
      href: "/certificates/dp-700-fabric-data-engineer.pdf"
    },
    {
      title: "Microsoft Certified: Fabric Analytics Engineer Associate",
      exam: "DP-600",
      issuer: "Microsoft",
      earned: "September 1, 2025",
      expires: "September 2, 2026",
      href: "/certificates/dp-600-fabric-analytics-engineer.pdf"
    },
    {
      title: "IELTS B2 English Language Certificate",
      exam: "English B2",
      issuer: "IELTS",
      earned: "Listed in CV",
      expires: "—",
      href: "#contact"
    }
  ],

  de: [
    {
      title: "Microsoft Certified: Fabric Data Engineer Associate",
      exam: "DP-700",
      issuer: "Microsoft",
      earned: "22. Februar 2026",
      expires: "23. Februar 2027",
      href: "/certificates/dp-700-fabric-data-engineer.pdf"
    },
    {
      title: "Microsoft Certified: Fabric Analytics Engineer Associate",
      exam: "DP-600",
      issuer: "Microsoft",
      earned: "1. September 2025",
      expires: "2. September 2026",
      href: "/certificates/dp-600-fabric-analytics-engineer.pdf"
    },
    {
      title: "IELTS B2 English Language Certificate",
      exam: "English B2",
      issuer: "IELTS",
      earned: "Im Lebenslauf aufgeführt",
      expires: "—",
      href: "#contact"
    }
  ]
};

const experience = {
  en: [
    {
      title: "Data Engineer — Working Student",
      company: "DIVINT Technology und IT Solutions GmbH",
      period: "2025 — Current",
      companyLink: "https://www.divint.de",
      description:
        "Working on real-world data and IT projects with a focus on Microsoft Fabric, SAP HANA integration, data engineering workflows, and endpoint management."
    },
    {
      title: "Logistics Assistant",
      company: "Clean & Safe Company, Germany",
      period: "2025 — Current",
      description:
        "Supported daily operations while strengthening teamwork, organization, reliability, and workplace safety awareness."
    }
  ],

  de: [
    {
      title: "Data Engineer — Werkstudent",
      company: "DIVINT Technology und IT Solutions GmbH",
      period: "2025 — Heute",
      companyLink: "https://www.divint.de",
      description:
        "Arbeit an realen Data- und IT-Projekten mit Fokus auf Microsoft Fabric, SAP-HANA-Integration, Data-Engineering-Workflows und Endpoint Management."
    },
    {
      title: "Logistics Assistant",
      company: "Clean & Safe Company, Deutschland",
      period: "2025 — Heute",
      description:
        "Unterstützung täglicher Abläufe mit Fokus auf Teamarbeit, Organisation, Zuverlässigkeit und Arbeitssicherheit."
    }
  ]
};

function SectionTitle({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {children ? <p className="mt-5 text-lg leading-8 text-mist/78">{children}</p> : null}
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-sm text-mist/85">
      {children}
    </span>
  );
}

export default function PortfolioPage() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="site-particles pointer-events-none fixed inset-0">
        {Array.from({ length: 34 }).map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/76 backdrop-blur-xl">
        <nav className="section-shell flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-semibold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gold text-sm font-black text-ink">YA</span>
            <span className="hidden sm:inline">Youssef Abdelaziz</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-mist/72 lg:flex">
            {navItems[language].map((item, index) => (
              <a key={item} href={`#${navIds[index]}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "en" ? "de" : "en")}
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-gold hover:text-gold"
            >
              {language === "en" ? "DE" : "EN"}
            </button>

            <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold">
              {language === "en" ? "Contact" : "Kontakt"}
            </a>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/portfolio-bg.png')" }}
      >
        <div className="absolute inset-0 bg-ink/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/35"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(218,181,92,0.14),transparent_32%)]"></div>

        <div className="section-shell relative z-10 flex min-h-[calc(100vh-64px)] items-center py-20">
          <div className="grid w-full gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
                <Sparkles size={16} /> {t.heroBadge}
              </div>

              <h1 className="text-balance text-5xl font-black tracking-tight text-white md:text-7xl">
                {t.heroTitle}
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 text-mist/80">{t.heroText}</p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-ink transition hover:bg-white">
                  {t.viewProjects} <ArrowUpRight size={18} />
                </a>

                <a href="/cv/youssef-abdelaziz-cv.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:border-gold hover:text-gold">
                  {t.downloadCV} <Download size={18} />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>Microsoft Fabric</Pill>
                <Pill>SQL & PySpark</Pill>
                <Pill>Power BI</Pill>
                <Pill>Flutter & Firebase</Pill>
                <Pill>Microsoft Intune</Pill>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-8 flex items-center gap-4">
                  <div className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-gold to-white text-3xl font-black text-ink">
                    YA
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Youssef Ashraf Abdelaziz</h2>
                    <p className="text-mist/70">Data Engineering · Information Systems</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    { Icon: Database, label: language === "en" ? "Current Focus" : "Aktueller Fokus", value: "Microsoft Fabric, Lakehouse, SQL, PySpark" },
                    { Icon: Award, label: language === "en" ? "Certified" : "Zertifiziert", value: "DP-600 & DP-700 Microsoft Fabric" },
                    { Icon: MapPin, label: language === "en" ? "Based in" : "Standort", value: "Germany" },
                    {
                      Icon: Languages,
                      label: language === "en" ? "Languages" : "Sprachen",
                      value: language === "en" ? "Arabic, English B2, German A2" : "Arabisch, Englisch B2, Deutsch A2"
                    }
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex gap-4 rounded-2xl border border-white/10 bg-ink/45 p-4">
                      <Icon className="mt-1 text-gold" size={22} />
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-mist/45">{label}</p>
                        <p className="font-semibold text-white">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell py-24">
        <SectionTitle eyebrow={t.aboutEyebrow} title={t.aboutTitle}>
          {t.aboutText}
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { Icon: Code2, ...t.aboutCards[0] },
            { Icon: Database, ...t.aboutCards[1] },
            { Icon: Rocket, ...t.aboutCards[2] }
          ].map(({ Icon, title, text }) => (
            <div key={title} className="glass-card rounded-3xl p-6">
              <Icon className="mb-5 text-gold" size={28} />
              <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
              <p className="leading-7 text-mist/72">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section-shell py-24">
        <SectionTitle eyebrow={t.educationEyebrow} title={t.educationTitle} />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-3xl p-7">
            <GraduationCap className="mb-5 text-gold" size={30} />
            <h3 className="text-2xl font-bold">Technische Hochschule Augsburg, Germany</h3>
            <p className="mt-2 text-gold">B.Sc. International Information Systems — 4th Semester</p>
            <p className="mt-4 text-mist/70">2024 — Present</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://www.tha.de" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">
                {t.universityWebsite} <ExternalLink size={16} />
              </a>

              <a href="/documents/My-Transcript.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-bold text-ink transition hover:bg-white">
                {t.viewTranscript} <FileText size={16} />
              </a>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-7">
            <GraduationCap className="mb-5 text-gold" size={30} />
            <h3 className="text-2xl font-bold">Faculty of Computer Science & Informatics, Egypt</h3>
            <p className="mt-2 text-gold">
              {language === "en"
                ? "Undergraduate Computer Science Studies — 2 years completed"
                : "Informatikstudium — 2 Jahre abgeschlossen"}
            </p>
            <p className="mt-4 text-mist/70">
              {language === "en" ? "2022 — 2024 · Transferred to Germany" : "2022 — 2024 · Wechsel nach Deutschland"}
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell py-24">
        <SectionTitle eyebrow={t.experienceEyebrow} title={t.experienceTitle} />

        <div className="space-y-5">
          {experience[language].map((item) => (
            <div key={item.title} className="glass-card rounded-3xl p-7">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <div className="mb-3 flex items-center gap-3 text-gold">
                    <BriefcaseBusiness size={22} /> {item.period}
                  </div>

                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>

                  <div className="mt-1 flex flex-wrap items-center gap-3 text-mist/68">
                    <span>{item.company}</span>

                    {"companyLink" in item && item.companyLink ? (
                      <a href={item.companyLink} target="_blank" className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-white">
                        {t.companyWebsite} <ExternalLink size={14} />
                      </a>
                    ) : null}
                  </div>
                </div>

                <ShieldCheck className="hidden text-gold md:block" size={30} />
              </div>

              <p className="mt-5 max-w-4xl leading-8 text-mist/75">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell py-24">
        <SectionTitle eyebrow={t.skillsEyebrow} title={t.skillsTitle} />

        <div className="grid gap-6 md:grid-cols-2">
          {skills[language].map((skill) => (
            <div key={skill.group} className="glass-card rounded-3xl p-7">
              <h3 className="mb-5 text-xl font-bold text-white">{skill.group}</h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell py-24">
        <SectionTitle eyebrow={t.projectsEyebrow} title={t.projectsTitle}>
          {t.projectsText}
        </SectionTitle>

        <div className="grid gap-6">
          {projects[language].map((project, index) => (
            <article key={project.title} className="glass-card rounded-3xl p-7">
              <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 text-mist/65">
                    {project.company} · {project.role}
                  </p>
                </div>

                <p className="max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-mist/72">
                  {project.tech}
                </p>
              </div>

              <p className="leading-8 text-mist/78">{project.description}</p>

              <ul className="mt-5 grid gap-3 md:grid-cols-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-2xl border border-white/10 bg-ink/45 p-4 text-sm leading-6 text-mist/75">
                    {highlight}
                  </li>
                ))}
              </ul>

              {"reportHref" in project && project.reportHref ? (
                <div className="mt-6">
                  <a href={project.reportHref} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink transition hover:bg-white">
                    {t.viewProjectReport} <FileText size={17} />
                  </a>
                </div>
              ) : null}

              {"images" in project && project.images ? (
                <div className="mt-7">
                  <div className="mb-4 flex items-center gap-2 text-gold">
                    <ImageIcon size={20} />
                    <h4 className="font-bold">{t.projectGallery}</h4>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {project.images.map((image) => (
                      <div key={image.src} className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-3">
                        <img src={image.src} alt={image.title} className="h-80 w-full rounded-2xl object-contain" />
                        <p className="px-2 pt-3 text-sm font-semibold text-mist/75">{image.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {"videos" in project && project.videos ? (
                <div className="mt-7">
                  <div className="mb-4 flex items-center gap-2 text-gold">
                    <PlayCircle size={20} />
                    <h4 className="font-bold">{t.projectVideos}</h4>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {project.videos.map((video) => (
                      <div key={video.src} className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                        <video controls preload="metadata" className="h-full w-full rounded-3xl">
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        <p className="px-4 pb-4 pt-3 text-sm font-semibold text-mist/75">{video.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="certificates" className="section-shell py-24">
        <SectionTitle eyebrow={t.certificatesEyebrow} title={t.certificatesTitle}>
          {t.certificatesText}
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-3">
          {certificates[language].map((cert) => (
            <a
              key={cert.title}
              href={cert.href}
              className="glass-card group rounded-3xl p-7 transition hover:-translate-y-1 hover:border-gold/45"
              target={cert.href.startsWith("/") ? "_blank" : undefined}
            >
              <Award className="mb-6 text-gold" size={34} />
              <p className="mb-3 inline-flex rounded-full bg-gold/12 px-3 py-1 text-sm font-bold text-gold">{cert.exam}</p>
              <h3 className="text-xl font-bold text-white">{cert.title}</h3>

              <div className="mt-5 space-y-2 text-sm text-mist/68">
                <p>Issuer: {cert.issuer}</p>
                <p>Earned: {cert.earned}</p>
                <p>Expires: {cert.expires}</p>
              </div>

              <p className="mt-6 inline-flex items-center gap-2 font-semibold text-gold">
                {t.viewCredential} <ExternalLink size={16} />
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell py-24">
        <div className="glass-card rounded-[2rem] p-8 md:p-12">
          <SectionTitle eyebrow={t.contactEyebrow} title={t.contactTitle}>
            {t.contactText}
          </SectionTitle>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <a className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold" href="mailto:youssef.abdelaziz@tha.de">
              <Mail className="mb-4 text-gold" />
              <p className="font-bold">{t.email}</p>
              <p className="mt-1 break-words text-sm text-mist/70">youssef.abdelaziz@tha.de</p>
            </a>

            <a className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold" href="tel:+491788026239">
              <Phone className="mb-4 text-gold" />
              <p className="font-bold">{t.phone}</p>
              <p className="mt-1 text-sm text-mist/70">+49 178 8026239</p>
            </a>

            <a className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold" href="https://github.com/Nobody-get" target="_blank">
              <Github className="mb-4 text-gold" />
              <p className="font-bold">GitHub</p>
              <p className="mt-1 text-sm text-mist/70">github.com/Nobody-get</p>
            </a>

            <a className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold" href="https://www.divint.de" target="_blank">
              <Building2 className="mb-4 text-gold" />
              <p className="font-bold">{t.company}</p>
              <p className="mt-1 text-sm text-mist/70">DIVINT Technology und IT Solutions GmbH</p>
            </a>

            <a className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold" href="/cv/youssef-abdelaziz-cv.pdf" target="_blank">
              <Download className="mb-4 text-gold" />
              <p className="font-bold">{t.cv}</p>
              <p className="mt-1 text-sm text-mist/70">{t.downloadPDF}</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-mist/55">
        <p>
          © {new Date().getFullYear()} Youssef Abdelaziz. {t.footer}
        </p>
      </footer>
    </main>
  );
}
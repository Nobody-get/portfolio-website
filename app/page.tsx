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
  Building2
} from "lucide-react";

const navItems = ["About", "Education", "Experience", "Skills", "Projects", "Certificates", "Contact"];

const skills = [
  { group: "Programming", items: ["C++", "Java", "Python", "HTML", "CSS", "JavaScript", "SQL"] },
  { group: "Data & Analytics", items: ["Microsoft Fabric", "Power BI", "Excel", "PySpark", "Data Pipelines", "Lakehouse", "Medallion Architecture"] },
  { group: "Software & Cloud", items: ["Flutter", "Firebase", "OpenAI API", "REST APIs", "Microsoft Intune", "Endpoint Manager"] },
  { group: "Languages", items: ["Arabic — Native", "English — B2", "German — A2"] }
];

const projects = [
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
      {
        title: "Line Follower Demo 1",
        src: "/videos/arduino-line-follower-car-1.mp4"
      },
      {
        title: "Line Follower Demo 2",
        src: "/videos/arduino-line-follower-car-2.mp4"
      }
    ]
  }
];

const certificates = [
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
];

const experience = [
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
];

function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {children ? <p className="mt-5 text-lg leading-8 text-mist/78">{children}</p> : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-sm text-mist/85">{children}</span>;
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/76 backdrop-blur-xl">
        <nav className="section-shell flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-semibold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gold text-sm font-black text-ink">YA</span>
            <span className="hidden sm:inline">Youssef Abdelaziz</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-mist/72 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold">
            Contact
          </a>
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
                <Sparkles size={16} /> Information Systems Student · Working Student Data Engineer
              </div>

              <h1 className="text-balance text-5xl font-black tracking-tight text-white md:text-7xl">
                Building data-driven systems with Microsoft Fabric, software, and analytics.
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9 text-mist/80">
                I am Youssef Abdelaziz, an Information Systems student at Technische Hochschule Augsburg with an international Computer Science background and hands-on experience in data engineering, Microsoft Fabric, software development, and scalable digital solutions.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-ink transition hover:bg-white">
                  View Projects <ArrowUpRight size={18} />
                </a>

                <a href="/cv/youssef-abdelaziz-cv.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:border-gold hover:text-gold">
                  Download CV <Download size={18} />
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
                    { Icon: Database, label: "Current Focus", value: "Microsoft Fabric, Lakehouse, SQL, PySpark" },
                    { Icon: Award, label: "Certified", value: "DP-600 & DP-700 Microsoft Fabric" },
                    { Icon: MapPin, label: "Based in", value: "Germany" },
                    { Icon: Languages, label: "Languages", value: "Arabic, English B2, German A2" }
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
        <SectionTitle eyebrow="About" title="A practical data and software profile with an international academic path.">
          My background combines Computer Science studies in Egypt with International Information Systems in Germany. I focus on turning technical knowledge into real project value — especially in data pipelines, analytics-ready datasets, application logic, and modern business systems.
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { Icon: Code2, title: "Software Foundation", text: "C++, Java, Python, JavaScript, web technologies, and structured programming concepts." },
            { Icon: Database, title: "Data Engineering", text: "Hands-on work with Microsoft Fabric, SAP HANA, SQL, PySpark, Lakehouse, and Medallion Architecture." },
            { Icon: Rocket, title: "Real Project Mindset", text: "Experience connecting business needs with deployable systems, analytics, automation, and user-facing solutions." }
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
        <SectionTitle eyebrow="Education" title="Education built across two academic systems." />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-3xl p-7">
            <GraduationCap className="mb-5 text-gold" size={30} />
            <h3 className="text-2xl font-bold">Technische Hochschule Augsburg, Germany</h3>
            <p className="mt-2 text-gold">B.Sc. International Information Systems — 4th Semester</p>
            <p className="mt-4 text-mist/70">2024 — Present</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.tha.de"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
              >
                University Website <ExternalLink size={16} />
              </a>

              <a
                href="/documents/My-Transcript.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-bold text-ink transition hover:bg-white"
              >
                View Transcript <FileText size={16} />
              </a>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-7">
            <GraduationCap className="mb-5 text-gold" size={30} />
            <h3 className="text-2xl font-bold">Faculty of Computer Science & Informatics, Egypt</h3>
            <p className="mt-2 text-gold">Undergraduate Computer Science Studies — 2 years completed</p>
            <p className="mt-4 text-mist/70">2022 — 2024 · Transferred to Germany</p>
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell py-24">
        <SectionTitle eyebrow="Experience" title="Professional experience in data, IT systems, and operations." />

        <div className="space-y-5">
          {experience.map((item) => (
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
                      <a
                        href={item.companyLink}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:text-white"
                      >
                        Company Website <ExternalLink size={14} />
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
        <SectionTitle eyebrow="Skills" title="Technical toolkit organized for data, software, and business systems." />

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.group} className="glass-card rounded-3xl p-7">
              <h3 className="mb-5 text-xl font-bold text-white">{skill.group}</h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => <Pill key={item}>{item}</Pill>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell py-24">
        <SectionTitle eyebrow="Projects" title="Selected work showing practical execution and technical growth.">
          These projects highlight my experience with data platforms, AI-powered mobile apps, endpoint management, automation, and embedded systems.
        </SectionTitle>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article key={project.title} className="glass-card rounded-3xl p-7">
              <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 text-mist/65">{project.company} · {project.role}</p>
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

              {"videos" in project && project.videos ? (
                <div className="mt-6">
                  <div className="mb-4 flex items-center gap-2 text-gold">
                    <PlayCircle size={20} />
                    <h4 className="font-bold">Project Videos</h4>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {project.videos.map((video) => (
                      <div key={video.src} className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                        <video controls preload="metadata" className="h-full w-full rounded-3xl">
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        <p className="px-4 pb-4 pt-3 text-sm font-semibold text-mist/75">
                          {video.title}
                        </p>
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
        <SectionTitle eyebrow="Certificates" title="Verified learning that supports my data engineering direction.">
          My certifications strengthen my focus on Microsoft Fabric, analytics engineering, data engineering, and professional English communication.
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((cert) => (
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
                View credential <ExternalLink size={16} />
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell py-24">
        <div className="glass-card rounded-[2rem] p-8 md:p-12">
          <SectionTitle eyebrow="Contact" title="Let’s connect about data, software, or working-student opportunities.">
            I am open to opportunities where I can contribute to practical IT, data engineering, analytics, and software projects while continuing to grow professionally.
          </SectionTitle>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <a className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold" href="mailto:youssef.abdelaziz@tha.de">
              <Mail className="mb-4 text-gold" />
              <p className="font-bold">Email</p>
              <p className="mt-1 break-words text-sm text-mist/70">youssef.abdelaziz@tha.de</p>
            </a>

            <a className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold" href="tel:+491788026239">
              <Phone className="mb-4 text-gold" />
              <p className="font-bold">Phone</p>
              <p className="mt-1 text-sm text-mist/70">+49 178 8026239</p>
            </a>

            <a className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold" href="https://github.com/Nobody-get" target="_blank">
              <Github className="mb-4 text-gold" />
              <p className="font-bold">GitHub</p>
              <p className="mt-1 text-sm text-mist/70">github.com/Nobody-get</p>
            </a>

            <a
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold"
              href="https://www.divint.de"
              target="_blank"
            >
              <Building2 className="mb-4 text-gold" />
              <p className="font-bold">Company</p>
              <p className="mt-1 text-sm text-mist/70">DIVINT Technology und IT Solutions GmbH</p>
            </a>

            <a className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-gold" href="/cv/youssef-abdelaziz-cv.pdf" target="_blank">
              <Download className="mb-4 text-gold" />
              <p className="font-bold">CV</p>
              <p className="mt-1 text-sm text-mist/70">Download PDF</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-mist/55">
        <p>© {new Date().getFullYear()} Youssef Abdelaziz. Built for professional portfolio and CV sharing.</p>
      </footer>
    </main>
  );
}
// ═══════════════════════════════════════════════════════════════
//  PORTFOLIO DATA — Ahian Danier Quesada Guadamuz
//  Bilingual (ES / EN). Edit here to update the whole site.
// ═══════════════════════════════════════════════════════════════

export const PROFILE = {
  firstName: "Ahian Danier",
  lastName: "Quesada",
  role: { es: "Ingeniero en Tecnologías de Información", en: "Information Technology Engineer" },
  // rotating strengths under the name (typing effect)
  roles: {
    es: ["Full-Stack Developer", "Redes & Cisco CCNA", "Backend Engineer", "AI / LLM Builder", "Mobile Developer"],
    en: ["Full-Stack Developer", "Networking & Cisco CCNA", "Backend Engineer", "AI / LLM Builder", "Mobile Developer"],
  },
  email: "ahianquesadaguadamuz@gmail.com",
  phone: "+50689649932",
  phoneDisplay: "+506 8964-9932",
  github: "https://github.com/Ahian0",
  githubUser: "Ahian0",
  linkedin: "https://www.linkedin.com/in/ahian-danier-quesada-guadamuz-663859372",
  whatsapp: "https://wa.me/50689649932",
  cv: "/cv_Ahian_Quesada.pdf",
  cvYear: "2026",
};

export const UI = {
  boot: {
    es: ["inicializando...", "cargando perfil", "listo."],
    en: ["initializing...", "loading profile", "ready."],
  },
  nav: {
    es: [
      { id: "about", label: "SOBRE MÍ" },
      { id: "resume", label: "RESUME" },
      { id: "projects", label: "PROYECTOS" },
      { id: "contact", label: "CONTACTO" },
    ],
    en: [
      { id: "about", label: "ABOUT" },
      { id: "resume", label: "RESUME" },
      { id: "projects", label: "PROJECTS" },
      { id: "contact", label: "CONTACT" },
    ],
  },
  downloadCV: { es: "Descargar CV", en: "Download CV" },
  labels: {
    about: { es: "Sobre Mí", en: "About Me" },
    resume: { es: "Resume", en: "Resume" },
    projects: { es: "Proyectos", en: "Projects" },
    contact: { es: "Contacto", en: "Contact" },
    services: { es: "Servicios", en: "Services" },
    interests: { es: "Intereses", en: "Interests" },
    favQuote: { es: "Frase Favorita", en: "Favorite Quote" },
    experience: { es: "Experiencia", en: "Experience" },
    education: { es: "Educación", en: "Education" },
    skills: { es: "Ingeniería de Software", en: "Software Engineering" },
    languages: { es: "Lenguajes de Programación", en: "Programming Languages" },
    frameworks: { es: "Frameworks & Skills", en: "Frameworks & Skills" },
    technologies: { es: "Tecnologías", en: "Technologies" },
    certs: { es: "Certificaciones", en: "Certifications" },
    repository: { es: "Repositorio", en: "Repository" },
    liveSite: { es: "Sitio en vivo", en: "Live site" },
    allRepos: { es: "Ver todos los repos", en: "View all repos" },
    inProduction: { es: "En producción", en: "In production" },
    present: { es: "Presente", en: "Present" },
    inProgress: { es: "En Progreso", en: "In Progress" },
    completed: { es: "Completado", en: "Completed" },
  },
  contact: {
    heading: { es: "¿Tienes un proyecto o una vacante?", en: "Got a project or an opening?" },
    sub: {
      es: "Abierto a oportunidades full-time, prácticas y trabajo freelance.",
      en: "Open to full-time roles, internships, and freelance work.",
    },
    name: { es: "Nombre", en: "Name" },
    email: { es: "Email", en: "Email" },
    message: { es: "Mensaje", en: "Message" },
    send: { es: "Enviar mensaje", en: "Send message" },
    sending: { es: "Abriendo correo...", en: "Opening mail..." },
  },
};

export const ABOUT = {
  intro: {
    es: "Ingeniero en Tecnologías de Información con perfil full-stack y base sólida en redes e infraestructura. Construyo aplicaciones modernas y escalables desde la idea hasta producción, con APIs REST, bases de datos robustas, autenticación segura e IA generativa.",
    en: "Information Technology Engineer with a full-stack profile and a solid foundation in networking and infrastructure. I build modern, scalable applications from idea to production, with REST APIs, robust databases, secure authentication, and generative AI.",
  },
  facts: [
    { k: { es: "Edad", en: "Age" }, v: { es: "20 años", en: "20 years" } },
    { k: { es: "Residencia", en: "Residence" }, v: "Costa Rica" },
    { k: { es: "Perfil", en: "Profile" }, v: { es: "Full-Stack & Redes", en: "Full-Stack & Networking" } },
    { k: { es: "Ubicación", en: "Location" }, v: "Puntarenas, Costa Rica" },
  ],
  gpa: "9.05",
  services: {
    es: [
      { t: "Full-Stack End-to-End", d: "Apps web y móviles con Python, React y Flutter, desde la idea hasta producción." },
      { t: "Redes e Infraestructura", d: "Fundamentos Cisco CCNA, administración de servidores y virtualización." },
      { t: "IA Generativa & LLMs", d: "Integración de modelos locales (Ollama) y asistentes conversacionales." },
      { t: "Seguridad & Autenticación", d: "JWT, 2FA (TOTP), Firebase Auth, auditoría y buenas prácticas." },
    ],
    en: [
      { t: "Full-Stack End-to-End", d: "Web and mobile apps with Python, React, and Flutter, from idea to production." },
      { t: "Networking & Infrastructure", d: "Cisco CCNA fundamentals, server administration, and virtualization." },
      { t: "Generative AI & LLMs", d: "Integration of local models (Ollama) and conversational assistants." },
      { t: "Security & Authentication", d: "JWT, 2FA (TOTP), Firebase Auth, auditing, and best practices." },
    ],
  },
  interests: {
    es: ["Programar", "Aprender", "Redes", "Construir"],
    en: ["Coding", "Learning", "Networking", "Building"],
  },
  quote: {
    text: { es: "La simplicidad es requisito previo de la confiabilidad.", en: "Simplicity is prerequisite for reliability." },
    author: "Edsger W. Dijkstra",
  },
};

export const EXPERIENCE = [
  {
    period: { es: "May 2025 — Presente", en: "May 2025 — Present" },
    role: { es: "Desarrollador de Software", en: "Software Developer" },
    org: "Universidad Técnica Nacional — El Roble, Puntarenas",
    desc: {
      es: "Desarrollo de aplicaciones full-stack robustas y escalables, participando en cada fase del ciclo de vida del software. Entrené un modelo de lenguaje (LLM) sobre normativa institucional y construí interfaces amigables, optimizando el rendimiento y asegurando calidad con pruebas.",
      en: "Development of robust, scalable full-stack applications, taking part in every phase of the software lifecycle. Trained a language model (LLM) on institutional regulations and built user-friendly interfaces, optimizing performance and ensuring quality with tests.",
    },
  },
];

export const EDUCATION = [
  {
    period: { es: "2026 — Presente", en: "2026 — Present" },
    title: { es: "Bachillerato en Ingeniería en Tecnologías de Información", en: "Bachelor's in Information Technology Engineering" },
    org: "Universidad Técnica Nacional (UTN) · El Roble, Puntarenas",
    note: { es: "En Progreso · Promedio 9.05", en: "In Progress · GPA 9.05" },
  },
  {
    period: { es: "2024 — 2025", en: "2024 — 2025" },
    title: { es: "Diplomado en Ingeniería en Tecnologías de Información", en: "Associate Degree in Information Technology Engineering" },
    org: "Universidad Técnica Nacional (UTN) · El Roble, Puntarenas",
    note: { es: "Completado", en: "Completed" },
  },
];

export const CERTIFICATIONS = [
  { name: "CCNA: Switching, Routing & Wireless Essentials", org: "Cisco Networking Academy · UTN", date: "OCT 2025" },
  { name: "CCNA: Introduction to Networks", org: "Cisco Networking Academy · UTN", date: "JUN 2025" },
  { name: "Python Essentials 1", org: "Cisco / OpenEDG Python Institute", date: "NOV 2024" },
  { name: "Python Fundamentals 1 (40 h)", org: "MICITT · UTN/PIAE · Grade 94", date: "DEC 2024" },
];

export const LANGUAGES = ["Python", "JavaScript", "TypeScript", "Dart", "Rust", "SQL"];

// framework skill bars (self-assessed proficiency)
export const FRAMEWORKS = [
  { name: "FastAPI / Flask", level: 90 },
  { name: "React / React Native", level: 85 },
  { name: "PostgreSQL / SQLAlchemy", level: 88 },
  { name: "Flutter / Dart", level: 75 },
  { name: "Firebase / Firestore", level: 82 },
  { name: "Cisco IOS / Redes", level: 80 },
];

export const TECHNOLOGIES = [
  "Python · FastAPI · Flask · SQLAlchemy",
  "React · React Native · Flutter · Bootstrap 5",
  "PostgreSQL · Firebase · Firestore",
  "JWT · 2FA (TOTP) · bcrypt · CSP",
  "Ollama · LLM · Leaflet / OSM",
  "Cisco IOS · Git · GitHub · pytest",
  "Render · Cloudflare · Brevo SMTP",
];

// human-language skill categories (like Alexander's tag cloud)
export const SKILL_TAGS = {
  es: ["Backend", "Frontend", "Arquitectura de Software", "Redes", "IA / LLM", "Bases de Datos", "Seguridad", "Linux"],
  en: ["Backend", "Frontend", "Software Architecture", "Networking", "AI / LLM", "Databases", "Security", "Linux"],
};

export const PROJECTS = [
  {
    id: "edutrack",
    n: "01",
    name: "EduTrack",
    tag: "FULL-STACK",
    year: "2025",
    inProduction: true,
    desc: {
      es: "Plataforma web en producción que centraliza la gestión de estudiantes, profesores, evaluaciones, asistencia y reportes para instituciones educativas. Seguridad robusta (2FA, auditoría), 4 roles, portal estudiantil aislado y 46+ tests con pytest.",
      en: "Production web platform that centralizes management of students, teachers, evaluations, attendance, and reports for educational institutions. Robust security (2FA, auditing), 4 roles, isolated student portal, and 46+ tests with pytest.",
    },
    stack: ["Python 3.11", "Flask 3", "SQLAlchemy 2", "PostgreSQL", "Bootstrap 5", "pytest"],
    live: "https://www.edu-track.school",
    repo: "https://github.com/EduTrack-APPLICATION/EduTrack",
  },
  {
    id: "pathar",
    n: "02",
    name: "PathAR — Navegación con RA e IA",
    tag: "BACKEND",
    year: "2026",
    desc: {
      es: "Sistema de navegación peatonal universitaria con realidad aumentada e IA. Construí la API REST modular con FastAPI, autenticación stateless con JWT y login con Google vía Firebase, con arquitectura lista para visión por computadora (YOLOv8).",
      en: "University pedestrian navigation system with augmented reality and AI. I built the modular REST API with FastAPI, stateless JWT authentication, and Google login via Firebase, with architecture ready for computer vision (YOLOv8).",
    },
    stack: ["Python 3.12", "FastAPI", "PostgreSQL", "JWT", "Firebase", "Flutter"],
    repo: "https://github.com/utn-integrador-III/2026-ra-api",
  },
  {
    id: "nova",
    n: "03",
    name: "N.O.V.A — Asistente Web con IA",
    tag: "AI / LLM",
    year: "2025",
    desc: {
      es: "Asistente web conversacional que responde preguntas sobre la UTN usando un modelo de lenguaje ejecutado localmente con Ollama, sin depender de APIs externas. Backend en Python + Flask e interfaz conversacional en React.",
      en: "Conversational web assistant that answers questions about UTN using a language model running locally with Ollama, with no external API dependency. Python + Flask backend and a conversational React interface.",
    },
    stack: ["Python 3", "Flask", "Ollama / LLM", "React", "JavaScript"],
    repo: "https://github.com/PUKEYACKOS-Proyecto-Integrador-2025/chatbot-utn-pi",
  },
  {
    id: "patitas",
    n: "04",
    name: "Patitas Felices — Adopción de Mascotas",
    tag: "FULL-STACK",
    year: "2025",
    desc: {
      es: "Web app (PWA) para adopción y reporte de mascotas perdidas, con chat en tiempo real y geolocalización. Backend serverless con Firebase (Auth, Firestore, Cloud Functions), notificaciones push y mapas con Leaflet + OpenStreetMap.",
      en: "Web app (PWA) for pet adoption and lost-pet reporting, with real-time chat and geolocation. Serverless backend with Firebase (Auth, Firestore, Cloud Functions), push notifications, and maps with Leaflet + OpenStreetMap.",
    },
    stack: ["Firebase", "Firestore", "Cloud Functions", "Leaflet/OSM", "PWA", "JavaScript"],
    repo: "https://github.com/WEB-III-2025/FIREBASE_PROJECT",
  },
  {
    id: "dados",
    n: "05",
    name: "Dados Triples — Juego Multijugador",
    tag: "MOBILE",
    year: "2025",
    desc: {
      es: "Juego de dados para móvil (Android/iOS) en React Native + TypeScript, con un servidor multijugador en Rust y un visor web que permite seguir las partidas en vivo desde el navegador en tiempo real.",
      en: "Dice game for mobile (Android/iOS) in React Native + TypeScript, with a multiplayer server in Rust and a web viewer to follow matches live from the browser in real time.",
    },
    stack: ["React Native", "TypeScript", "Rust", "Jest", "Real-Time"],
    repo: "https://github.com/Ahian0/dado-viewer",
  },
];

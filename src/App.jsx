import { useState, useEffect, useRef, useMemo } from "react";
import "./App.css";
import profileImg from "./assets/profile.png";
import {
  PROFILE, UI, ABOUT, EXPERIENCE, EDUCATION, CERTIFICATIONS,
  LANGUAGES, FRAMEWORKS, TECHNOLOGIES, SKILL_TAGS, PROJECTS,
} from "./data";

/* ─── icons ─── */
const I = {
  about: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>,
  resume: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></svg>,
  projects: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>,
  contact: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>,
  github: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>,
  linkedin: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>,
  mail: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>,
  whatsapp: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.33A10 10 0 1 0 12 2z"/></svg>,
  download: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16"/></svg>,
  ext: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>,
  chev: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>,
  sun: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>,
  moon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></svg>,
};

/* ─── particle field ─── */
function Particles() {
  const dots = useMemo(() => {
    const cols = ["var(--accent)", "var(--accent-2)", "var(--accent-3)"];
    return Array.from({ length: 46 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 6,
      color: cols[i % 3],
      dur: 7 + Math.random() * 10,
      delay: Math.random() * 8,
    }));
  }, []);
  return (
    <div className="particles" aria-hidden="true">
      {dots.map((d) => (
        <span key={d.id} className="particle" style={{
          left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size,
          background: d.color, boxShadow: `0 0 ${d.size * 2}px ${d.color}`,
          animationDuration: `${d.dur}s`, animationDelay: `${d.delay}s`,
        }} />
      ))}
    </div>
  );
}

/* ─── boot ─── */
function Boot({ lines, onDone }) {
  const [shown, setShown] = useState([]);
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      i += 1; setShown(lines.slice(0, i));
      if (i >= lines.length) { clearInterval(iv); setTimeout(() => setDone(true), 400); setTimeout(onDone, 850); }
    }, 300);
    return () => clearInterval(iv);
  }, [lines, onDone]);
  return (
    <div className={`boot ${done ? "done" : ""}`} aria-hidden="true">
      <div className="boot-inner">
        {shown.map((l, i) => <div className="boot-line" key={i}><span className="ok">✓</span> {l}</div>)}
        <div className="boot-bar"><span /></div>
      </div>
    </div>
  );
}

/* ─── rotating typed roles ─── */
function useRotatingType(words, active) {
  const [txt, setTxt] = useState("");
  const [wi, setWi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    if (!active) return;
    const word = words[wi % words.length];
    let to;
    if (!del && txt === word) {
      to = setTimeout(() => setDel(true), 1500);
    } else if (del && txt === "") {
      setDel(false); setWi((v) => v + 1);
    } else {
      to = setTimeout(() => {
        setTxt(del ? word.slice(0, txt.length - 1) : word.slice(0, txt.length + 1));
      }, del ? 40 : 75);
    }
    return () => clearTimeout(to);
  }, [txt, del, wi, words, active]);
  return txt;
}

/* ─── bar with reveal ─── */
function Bar({ name, level, show }) {
  return (
    <div className="bar-row">
      <div className="bar-top"><span className="bar-name">{name}</span><span className="bar-pct">{level}%</span></div>
      <div className="bar-track"><div className="bar-fill" style={{ width: show ? `${level}%` : 0 }} /></div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("es");
  const [theme, setTheme] = useState("dark");
  const [tab, setTab] = useState("about");
  const [booted, setBooted] = useState(false);
  const [openProj, setOpenProj] = useState("edutrack");
  const [barsShow, setBarsShow] = useState(false);
  const t = (o) => (o && typeof o === "object" && !Array.isArray(o) ? o[lang] : o);

  useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]);

  const rotated = useRotatingType(PROFILE.roles[lang], booted);

  useEffect(() => {
    if (tab === "resume") { const to = setTimeout(() => setBarsShow(true), 200); return () => clearTimeout(to); }
    setBarsShow(false);
  }, [tab]);

  const nav = UI.nav[lang];
  const L = UI.labels;

  const sendMail = (e) => {
    e.preventDefault();
    const f = e.target;
    const subject = encodeURIComponent(`[Portafolio] ${f.name.value}`);
    const body = encodeURIComponent(`${f.message.value}\n\n— ${f.name.value} (${f.email.value})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {!booted && <Boot lines={UI.boot[lang]} onDone={() => setBooted(true)} />}
      <Particles />

      <div className="topbar">
        <button className="ctrl" onClick={() => setLang(lang === "es" ? "en" : "es")} aria-label="Language">
          {lang === "es" ? "EN" : "ES"}
        </button>
        <button className="ctrl" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Theme">
          {theme === "dark" ? I.sun : I.moon}
        </button>
      </div>

      <div className="shell">
        {/* ── LEFT: profile card ── */}
        <aside className="card profile">
          <nav className="profile-nav">
            <div className="profile-nav-row">
              {nav.slice(0, 2).map((n) => (
                <button key={n.id} className={`pnav-btn ${tab === n.id ? "active" : ""}`} onClick={() => setTab(n.id)}>
                  <span className="ico">{I[n.id]}</span><span>{n.label}</span>
                </button>
              ))}
            </div>
            <div className="profile-nav-row">
              {nav.slice(2).map((n) => (
                <button key={n.id} className={`pnav-btn ${tab === n.id ? "active" : ""}`} onClick={() => setTab(n.id)}>
                  <span className="ico">{I[n.id]}</span><span>{n.label}</span>
                </button>
              ))}
            </div>
          </nav>

          <div className="profile-mid">
            <div className="avatar-wrap">
              <div className="avatar-ring" />
              <img className="avatar" src={profileImg} alt={`${PROFILE.firstName} ${PROFILE.lastName}`} />
            </div>
            <h1 className="p-name">{PROFILE.firstName} <em>{PROFILE.lastName}</em></h1>
            <div className="p-role-fixed">{t(PROFILE.role)}</div>
            <div className="p-role-rot"><span className="p-role-txt">{rotated}</span><span className="caret">▊</span></div>
            <div className="socials">
              <a className="social" href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">{I.github}</a>
              <a className="social" href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">{I.linkedin}</a>
              <a className="social" href={`mailto:${PROFILE.email}`} aria-label="Email">{I.mail}</a>
              <a className="social" href={PROFILE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">{I.whatsapp}</a>
            </div>
          </div>

          <a className="cv-btn" href={PROFILE.cv} download>
            <span className="cv-btn-txt">
              <b>{t(UI.downloadCV)}</b>
              <small>PDF · {PROFILE.cvYear}</small>
            </span>
            <span className="cv-btn-ico">{I.download}</span>
          </a>
        </aside>

        {/* ── RIGHT: content ── */}
        <main className="card content">
          {tab === "about" && (
            <section className="panel tab-enter" key="about">
              <div className="panel-head">
                <h2 className="panel-title">{t(L.about)}</h2>
                <span className="panel-mark">{"</>"}</span>
              </div>
              <p className="about-intro">{t(ABOUT.intro)}</p>
              <div className="facts">
                {ABOUT.facts.map((f, i) => (
                  <div className="fact" key={i}>
                    <div className="fact-k">{t(f.k)}</div>
                    <div className="fact-v">{t(f.v)}</div>
                  </div>
                ))}
              </div>

              <div className="subhead">{t(L.services)}</div>
              <div className="services">
                {t(ABOUT.services).map((s, i) => (
                  <div className="service" key={i}>
                    <div className="service-t">{s.t}</div>
                    <div className="service-d">{s.d}</div>
                  </div>
                ))}
              </div>

              <div className="subhead">{t(L.interests)}</div>
              <div className="interests">
                {t(ABOUT.interests).map((it, i) => <span className="interest" key={i}>{it}</span>)}
              </div>

              <div className="subhead">{t(L.favQuote)}</div>
              <blockquote className="quote">
                <div className="quote-t">"{t(ABOUT.quote.text)}"</div>
                <div className="quote-a">— {ABOUT.quote.author}</div>
              </blockquote>
            </section>
          )}

          {tab === "resume" && (
            <section className="panel tab-enter" key="resume">
              <div className="panel-head">
                <h2 className="panel-title">{t(L.resume)}</h2>
                <span className="panel-mark">{"{ }"}</span>
              </div>
              <div className="resume-prompt"><span className="accent">~</span> $ cat resume.md</div>

              <div className="grid2">
                <div>
                  <div className="subhead">{t(L.experience)}</div>
                  <div className="tl">
                    {EXPERIENCE.map((e, i) => (
                      <div className="tl-item" key={i}>
                        <div className="tl-period">{t(e.period)}</div>
                        <div className="tl-role">{t(e.role)}</div>
                        <div className="tl-org">{e.org}</div>
                        <div className="tl-desc">{t(e.desc)}</div>
                      </div>
                    ))}
                  </div>

                  <div className="subhead">{t(L.education)}</div>
                  <div className="tl">
                    {EDUCATION.map((e, i) => (
                      <div className="tl-item" key={i}>
                        <div className="tl-period">{t(e.period)}</div>
                        <div className="tl-role">{t(e.title)}</div>
                        <div className="tl-org">{e.org}</div>
                        <div className="tl-note">{t(e.note)}</div>
                      </div>
                    ))}
                  </div>

                  <div className="subhead">{t(L.certs)}</div>
                  <div className="certs">
                    {CERTIFICATIONS.map((c, i) => (
                      <div className="cert" key={i}>
                        <div className="cert-name">{c.name}</div>
                        <div className="cert-org">{c.org}</div>
                        <div className="cert-date">{c.date}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="subhead">{t(L.frameworks)}</div>
                  <div className="bars">
                    {FRAMEWORKS.map((f, i) => <Bar key={i} name={f.name} level={f.level} show={barsShow} />)}
                  </div>

                  <div className="subhead">{t(L.languages)}</div>
                  <div className="langs">
                    {LANGUAGES.map((l) => <span className="lang-chip" key={l}>{l}</span>)}
                  </div>

                  <div className="subhead">{t(L.skills)}</div>
                  <div className="skilltags">
                    {SKILL_TAGS[lang].map((s) => <span className="skill-tag" key={s}>{s}</span>)}
                  </div>

                  <div className="subhead">{t(L.technologies)}</div>
                  <ul className="tech-list">
                    {TECHNOLOGIES.map((tech, i) => <li key={i}>{tech}</li>)}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {tab === "projects" && (
            <section className="panel tab-enter" key="projects">
              <div className="panel-head">
                <h2 className="panel-title">{t(L.projects)}</h2>
                <span className="panel-mark">{"{ }"}</span>
              </div>
              <div className="proj-list">
                {PROJECTS.map((p) => (
                  <div className={`proj-item ${openProj === p.id ? "open" : ""}`} key={p.id}>
                    <button className="proj-row" onClick={() => setOpenProj(openProj === p.id ? "" : p.id)}>
                      <span className="proj-dot" />
                      <span className="proj-n">{p.n}</span>
                      <span className="proj-name">{p.name}</span>
                      <span className="proj-tag">{p.tag}</span>
                      <span className="proj-year">{p.year}</span>
                      <span className="proj-chev">{I.chev}</span>
                    </button>
                    <div className="proj-body">
                      <div className="proj-body-in">
                        {p.inProduction && <span className="badge-prod"><span className="pulse" />{t(L.inProduction)}</span>}
                        <p className="proj-desc">{t(p.desc)}</p>
                        <div className="proj-stack">
                          {p.stack.map((s) => <span className="lang-chip" key={s}>{s}</span>)}
                        </div>
                        <div className="proj-links">
                          {p.repo && <a className="proj-link" href={p.repo} target="_blank" rel="noreferrer">{I.github} {t(L.repository)}</a>}
                          {p.live && <a className="proj-link live" href={p.live} target="_blank" rel="noreferrer">{I.ext} {t(L.liveSite)}</a>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="proj-foot">
                <span className="proj-foot-user">{PROFILE.githubUser.toUpperCase()}</span>
                <a className="proj-foot-link" href={PROFILE.github} target="_blank" rel="noreferrer">{I.github} {t(L.allRepos)} {I.ext}</a>
              </div>
            </section>
          )}

          {tab === "contact" && (
            <section className="panel tab-enter" key="contact">
              <div className="panel-head">
                <h2 className="panel-title">{t(L.contact)}</h2>
                <span className="panel-mark">{"=>"}</span>
              </div>
              <div className="contact-arrow mono">{"=>"}</div>
              <h3 className="contact-h">{t(UI.contact.heading)}</h3>
              <p className="contact-sub">{t(UI.contact.sub)}</p>
              <form className="form" onSubmit={sendMail}>
                <div className="field">
                  <label htmlFor="name">{t(UI.contact.name)}</label>
                  <input id="name" name="name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">{t(UI.contact.email)}</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="field">
                  <label htmlFor="message">{t(UI.contact.message)}</label>
                  <textarea id="message" name="message" required />
                </div>
                <button className="send-btn" type="submit">{I.mail} {t(UI.contact.send)}</button>
              </form>
              <div className="contact-alt">
                <a className="alt-link" href={`mailto:${PROFILE.email}`}>{I.mail} {PROFILE.email}</a>
                <a className="alt-link" href={PROFILE.whatsapp} target="_blank" rel="noreferrer">{I.whatsapp} WhatsApp</a>
                <a className="alt-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer">{I.linkedin} LinkedIn</a>
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}

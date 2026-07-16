"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Buildings, Check, Compass, Cube, HouseLine, Leaf, List, Ruler, X } from "@phosphor-icons/react";

type Page = "home" | "projects" | "services" | "studio" | "journal";

const nav: { label: string; href: string; page: Page }[] = [
  { label: "Projects", href: "/projects", page: "projects" },
  { label: "Services", href: "/services", page: "services" },
  { label: "Studio", href: "/studio", page: "studio" },
  { label: "Journal", href: "/journal", page: "journal" },
];

const projects = [
  { name: "Pine Court House", place: "Cairo · 2025", image: "/images/villa-hero.jpg", type: "Residence" },
  { name: "Folded Stone Villa", place: "Amman · 2024", image: "/images/concrete-house.jpg", type: "Structure" },
  { name: "Garden Threshold", place: "Alexandria · 2024", image: "/images/garden-house.jpg", type: "Retrofit" },
  { name: "The Amber Stair", place: "Dubai · 2023", image: "/images/staircase.jpg", type: "Interior" },
];

const systems = [
  { id: "structure", label: "Structure", number: "01", title: "Strength without the weight.", text: "We resolve the load path early, using less material while giving the architecture more freedom.", image: "/images/concrete-house.jpg" },
  { id: "climate", label: "Climate", number: "02", title: "Comfort designed in.", text: "Light, shade, airflow and thermal mass become part of the architecture—not equipment added afterward.", image: "/images/garden-house.jpg" },
  { id: "detail", label: "Detail", number: "03", title: "Every junction has a reason.", text: "We coordinate the hidden interfaces that make a finished home feel calm, exact and effortless.", image: "/images/staircase.jpg" },
];

export function Site({ page }: { page: Page }) {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && (setModal(false), setMenu(false));
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    }), { threshold: 0.12, rootMargin: "0px 0px -5%" });
    const items = document.querySelectorAll("[data-reveal]");
    items.forEach(item => reveal.observe(item));
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach(el => {
          const rect = el.getBoundingClientRect();
          const offset = (rect.top + rect.height / 2 - innerHeight / 2) * -0.035;
          el.style.setProperty("--parallax", `${offset}px`);
        });
        frame = 0;
      });
    };
    window.addEventListener("keydown", esc);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("keydown", esc); window.removeEventListener("scroll", onScroll); reveal.disconnect(); if (frame) cancelAnimationFrame(frame); };
  }, [page]);

  return <div className="site-shell">
    <header className="nav-wrap">
      <Link href="/" className="brand" aria-label="Northline home"><span>NORTHLINE</span><small>HOUSE ENGINEERING</small></Link>
      <nav className={menu ? "nav-links open" : "nav-links"}>{nav.map(item => <Link key={item.page} href={item.href} className={page === item.page ? "active" : ""}>{item.label}</Link>)}</nav>
      <button className="nav-cta" onClick={() => setModal(true)}>Start a project</button>
      <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}>{menu ? <X /> : <List />}</button>
    </header>
    {page === "home" && <Home showModal={() => setModal(true)} />}
    {page === "projects" && <ProjectsPage showModal={() => setModal(true)} />}
    {page === "services" && <ServicesPage showModal={() => setModal(true)} />}
    {page === "studio" && <StudioPage showModal={() => setModal(true)} />}
    {page === "journal" && <JournalPage />}
    <Footer showModal={() => setModal(true)} />
    {modal && <NoticeModal close={() => setModal(false)} />}
  </div>;
}

function Home({ showModal }: { showModal: () => void }) {
  const [active, setActive] = useState(0);
  const system = systems[active];
  const moveHero = (e: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 10;
    const y = ((e.clientY - r.top) / r.height - .5) * 7;
    const asset = e.currentTarget.querySelector<HTMLElement>(".blueprint-asset");
    if (asset) asset.style.transform = `translate3d(${x}px,${y}px,0) scale(1.025)`;
  };
  const resetHero = (e: React.PointerEvent<HTMLElement>) => { const asset = e.currentTarget.querySelector<HTMLElement>(".blueprint-asset"); if (asset) asset.style.transform = ""; };

  return <main>
    <section className="luminous-hero" onPointerMove={moveHero} onPointerLeave={resetHero}>
      <div className="hero-copy">
        <p className="hero-kicker"><span>NL / 01</span> Residential engineering for considered living</p>
        <h1 aria-label="Homes, resolved to the last line."><span className="headline-line"><em>Homes,</em> resolved</span><span className="headline-line">to the last line.</span></h1>
        <Link href="/projects" className="line-link">Explore the work <ArrowUpRight /></Link>
      </div>
      <div className="blueprint-stage">
        <img className="blueprint-asset" src="/images/blueprint-house.jpg" alt="Architectural blueprint transforming into a completed concrete residence" />
        <div className="scan-line" aria-hidden="true" />
        <div className="figure-label"><span>FIG 01</span><span>Structure becomes space</span></div>
      </div>
      <a className="hero-scroll" href="#principles"><ArrowDown /> Scroll</a>
    </section>

    <section className="principles" id="principles" data-reveal>{[
      ["01", "Structure", "Right-sized systems for clarity, strength and long-term performance."],
      ["02", "Climate", "Passive-first strategies for comfort, resilience and reduced energy."],
      ["03", "Detail", "Carefully resolved junctions that endure and age with grace."],
    ].map(p => <article key={p[0]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p></article>)}</section>

    <section className="manifesto section-pad" data-reveal>
      <p className="section-label">A practice of precision</p>
      <h2>Engineering should not be visible.<br />Its <em>clarity</em> should be felt.</h2>
      <div className="manifesto-meta"><p>Northline brings structure, climate and detail into one continuous thought—so ambitious homes feel simple, quiet and inevitable.</p><div><strong>72</strong><span>completed homes</span></div><div><strong>11</strong><span>years in practice</span></div></div>
    </section>

    <section className="selected section-pad">
      <div className="section-title" data-reveal><div><p className="section-label">Selected work / 2023—2026</p><h2>Built from first principles.</h2></div><Link href="/projects" className="line-link">View archive <ArrowUpRight /></Link></div>
      <div className="project-stack">{projects.slice(0,3).map((p,i) => <ProjectCard key={p.name} project={p} index={i} />)}</div>
    </section>

    <section className="systems section-pad" data-reveal>
      <div className="systems-head"><p className="section-label">One coordinated system</p><h2>Three disciplines.<br />A single line of thought.</h2></div>
      <div className="systems-tabs" role="tablist" aria-label="Engineering disciplines">{systems.map((s,i) => <button key={s.id} role="tab" aria-selected={active === i} onClick={() => setActive(i)}><span>{s.number}</span>{s.label}</button>)}</div>
      <div className="system-panel" key={system.id}><div className="system-copy"><span>{system.number} / 03</span><h3>{system.title}</h3><p>{system.text}</p><Link className="line-link" href="/services">Explore this discipline <ArrowUpRight /></Link></div><div className="system-image"><img src={system.image} alt={system.title} /></div></div>
    </section>

    <section className="process section-pad">
      <div className="process-intro" data-reveal><p className="section-label">From first line to final handover</p><h2>Continuity creates quality.</h2></div>
      <div className="process-list">{[
        ["01", "Read the place", "Climate, ground, constraints and the rituals of daily life."],
        ["02", "Resolve the system", "Structure, envelope and services modelled as one."],
        ["03", "Make it buildable", "Precise information, coordinated before it reaches site."],
        ["04", "Stay with the work", "Focused reviews through construction and handover."],
      ].map(x => <article data-reveal key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p><ArrowUpRight /></article>)}</div>
    </section>

    <section className="quote section-pad" data-reveal><p>“Every difficult decision became clear. The engineering disappeared into a home that simply feels right.”</p><div><span>LY</span><strong>Lina Youssef<small>Homeowner · Pine Court</small></strong></div></section>
    <CTA showModal={showModal} />
  </main>;
}

function ProjectsPage({ showModal }: { showModal: () => void }) {
  return <main><PageHero index="01" title={<>Residences shaped<br />by <em>clear systems.</em></>} copy="New homes, careful retrofits and exact interiors across six climate zones." />
    <section className="archive-filters section-pad" data-reveal><button className="active">All / 12</button><button>New homes / 07</button><button>Retrofits / 03</button><button>Interiors / 02</button></section>
    <section className="archive-grid section-pad">{projects.map((p,i) => <ProjectCard key={p.name} project={p} index={i} />)}</section><CTA showModal={showModal} /></main>;
}

function ServicesPage({ showModal }: { showModal: () => void }) {
  const services = [[<Cube key="a" />,"Structural design","Concept-to-construction structural systems for new homes, extensions and sensitive alterations."],[<Leaf key="b" />,"Building performance","Passive design, daylight, thermal and energy modelling for measurable comfort."],[<Buildings key="c" />,"Technical coordination","One detailed model connecting structure, envelope, services and architecture."],[<Compass key="d" />,"Site stewardship","Tender support, site reviews and clear decisions that protect the design intent."]];
  return <main><PageHero index="02" title={<>The whole house,<br /><em>resolved together.</em></>} copy="Senior engineering attention from the first feasibility question to the final site review." />
    <section className="service-rows section-pad">{services.map((s,i)=><article data-reveal key={s[1] as string}><span>0{i+1}</span><div>{s[0]}</div><h2>{s[1]}</h2><p>{s[2]}</p><button onClick={showModal}>Discuss scope</button></article>)}</section>
    <section className="deliverables section-pad" data-reveal><div><p className="section-label">What you receive</p><h2>Useful detail.<br />No theatre.</h2></div><div>{["Feasibility note","Structural calculations","Coordinated 3D model","Performance report","Tender drawings","Site review record","Handover schedule","12-month check-in"].map(x=><span key={x}><Check />{x}</span>)}</div></section><CTA showModal={showModal} /></main>;
}

function StudioPage({ showModal }: { showModal: () => void }) {
  return <main><PageHero index="03" title={<>Small studio.<br /><em>Serious attention.</em></>} copy="Engineers, makers and careful listeners working directly with homeowners and architects." />
    <section className="studio-story section-pad" data-reveal><div className="studio-image" data-parallax><img src="/images/staircase.jpg" alt="Warm sculptural stair in a considered interior" /></div><div><p className="section-label">Why Northline</p><h2>Technical rigor,<br />with a human pulse.</h2><p>Northline began with a simple frustration: residential engineering was too often treated as a late-stage calculation. We built a studio that joins the conversation while the best decisions are still possible.</p><p>Our team stays intentionally small. That means fewer handoffs, clearer answers and genuine accountability.</p><button className="primary-action" onClick={showModal}>Work with the studio</button></div></section>
    <section className="values section-pad">{["Clarity over complexity","Measure what matters","Design with the climate","Stay until it works"].map((v,i)=><article data-reveal key={v}><span>0{i+1}</span><h3>{v}</h3></article>)}</section><CTA showModal={showModal} /></main>;
}

function JournalPage() {
  const posts = [["Field note 08","Why the quietest detail is often structural","6 min","/images/concrete-house.jpg"],["Material study","Concrete without the coldness","4 min","/images/staircase.jpg"],["Guide","Before you buy a difficult plot","8 min","/images/garden-house.jpg"],["Field note 07","The case for modelling daylight early","5 min","/images/villa-hero.jpg"]];
  return <main><PageHero index="04" title={<>Notes on making<br /><em>better homes.</em></>} copy="Field observations, practical guides and the ideas shaping our residential work." />
    <section className="journal-grid section-pad">{posts.map((p,i)=><article data-reveal key={p[1]}><div><img src={p[3]} alt="Architectural study" /><span>0{i+1}</span></div><p>{p[0]}</p><h2>{p[1]}</h2><footer><span>{p[2]}</span><ArrowUpRight /></footer></article>)}</section></main>;
}

function PageHero({ index, title, copy }: { index:string; title:React.ReactNode; copy:string }) { return <section className="page-hero"><p>{index} / NORTHLINE</p><h1>{title}</h1><span>{copy}</span></section>; }

function ProjectCard({ project, index }: { project: typeof projects[number]; index:number }) {
  return <article className="project-card" data-reveal><Link href="/projects" className="project-visual"><img data-parallax src={project.image} alt={project.name} /><span>Open project <ArrowUpRight /></span></Link><div><span>0{index+1}</span><h3>{project.name}</h3><p>{project.type} · {project.place}</p></div></article>;
}

function CTA({ showModal }: { showModal: () => void }) { return <section className="cta section-pad" data-reveal><p>Have a home in mind?</p><h2>Begin with a clear line.</h2><button className="primary-action light" onClick={showModal}>Start a conversation</button><small>Portfolio concept · no information is collected</small></section>; }

function Footer({ showModal }: { showModal: () => void }) { return <footer className="site-footer"><div><strong>NORTHLINE</strong><span>HOUSE ENGINEERING</span></div><div>{nav.map(n=><Link key={n.page} href={n.href}>{n.label}</Link>)}</div><div><span>Cairo · Amman · Dubai</span><button onClick={showModal}>hello@northline.house</button></div><div className="footer-end"><span>© 2026 Northline</span><span>Fictional portfolio experience</span><button onClick={()=>scrollTo({top:0,behavior:"smooth"})}>Back to top</button></div></footer>; }

function NoticeModal({ close }: { close: () => void }) { return <div className="modal-backdrop" onMouseDown={close}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="notice-title" onMouseDown={e=>e.stopPropagation()}><button className="modal-close" onClick={close} aria-label="Close dialog"><X /></button><HouseLine className="modal-icon" /><p>PORTFOLIO DEMONSTRATION</p><h2 id="notice-title">This experience is intentionally enquiry-free.</h2><p>Northline is a fictional studio created to demonstrate digital design and front-end craft. Contact and booking actions are disabled, so no personal information is collected.</p><button className="primary-action" onClick={close}>Continue exploring</button><small>No data has been saved.</small></div></div>; }

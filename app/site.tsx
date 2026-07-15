"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Buildings, Check, Compass, Cube, HouseLine, Leaf, List, Ruler, SealCheck, X } from "@phosphor-icons/react";

type Page = "home" | "projects" | "services" | "studio" | "journal";

const nav: { label: string; href: string; page: Page }[] = [
  { label: "Projects", href: "/projects", page: "projects" },
  { label: "Services", href: "/services", page: "services" },
  { label: "Studio", href: "/studio", page: "studio" },
  { label: "Journal", href: "/journal", page: "journal" },
];

const projectData = [
  { name: "Pine Court House", place: "Cairo · 2025", image: "/images/villa-hero.jpg", tag: "Residential" },
  { name: "Folded Stone Villa", place: "Amman · 2024", image: "/images/concrete-house.jpg", tag: "Structure" },
  { name: "Garden Threshold", place: "Alexandria · 2024", image: "/images/garden-house.jpg", tag: "Retrofit" },
  { name: "The Amber Stair", place: "Dubai · 2023", image: "/images/staircase.jpg", tag: "Interior engineering" },
];

export function Site({ page }: { page: Page }) {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && (setModal(false), setMenu(false));
    window.addEventListener("keydown", esc); return () => window.removeEventListener("keydown", esc);
  }, []);

  return <div className="site-shell">
    <header className="nav-wrap">
      <Link href="/" className="brand" aria-label="Northline home"><span className="brand-mark"><i /><i /></span><span>NORTHLINE<small>HOUSE ENGINEERING</small></span></Link>
      <nav className={menu ? "nav-links open" : "nav-links"}>
        {nav.map(item => <Link key={item.page} href={item.href} className={page === item.page ? "active" : ""}>{item.label}</Link>)}
      </nav>
      <button className="nav-cta" onClick={() => setModal(true)}>Start a project <ArrowUpRight weight="bold" /></button>
      <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}>{menu ? <X /> : <List />}</button>
    </header>

    {page === "home" && <HomeContent showModal={() => setModal(true)} />}
    {page === "projects" && <ProjectsPage showModal={() => setModal(true)} />}
    {page === "services" && <ServicesPage showModal={() => setModal(true)} />}
    {page === "studio" && <StudioPage showModal={() => setModal(true)} />}
    {page === "journal" && <JournalPage />}

    <Footer showModal={() => setModal(true)} />
    {modal && <NoticeModal close={() => setModal(false)} />}
  </div>;
}

function HomeContent({ showModal }: { showModal: () => void }) {
  return <main>
    <section className="hero section-frame reveal">
      <div className="hero-copy">
        <div className="eyebrow"><SealCheck weight="fill" /> Residential engineering, resolved</div>
        <h1>Homes that<br />stand <em>beautifully.</em></h1>
        <p>We engineer calm, resilient homes where ambitious architecture and everyday life meet without compromise.</p>
        <div className="hero-actions"><Link href="/projects" className="button dark">Explore our work <ArrowRight /></Link><button className="text-button" onClick={showModal}>Discuss your home <ArrowUpRight /></button></div>
        <div className="hero-proof"><div className="avatar-stack"><span>AK</span><span>MA</span><span>JL</span></div><div><strong>4.9 / 5</strong><small>from 48 private clients</small></div></div>
      </div>
      <div className="hero-visual">
        <img src="/images/villa-hero.jpg" alt="Modern concrete residence integrated into its landscape" />
        <div className="float-card load-card"><span>STRUCTURAL LOAD</span><strong>−18%</strong><small>material intensity</small></div>
        <div className="float-card thermal-card"><span><Leaf weight="fill" /> PERFORMANCE</span><strong>A+</strong><small>projected energy grade</small></div>
        <div className="image-caption"><span>01</span><p>Pine Court House<br /><small>Cairo · Completed 2025</small></p><Link href="/projects"><ArrowUpRight /></Link></div>
      </div>
      <a href="#work" className="scroll-cue"><ArrowDown /> Scroll to discover</a>
    </section>

    <section className="client-strip"><span>Trusted by homeowners and partners across</span><div><b>ATELIER / 11</b><b>FORMHAUS</b><b>MONOLITH</b><b>STUDIO YARD</b><b>NEST / CO.</b></div></section>

    <section className="intro section-pad" id="work">
      <p className="section-index">01 — THE PRACTICE</p>
      <div className="intro-heading"><h2>Precision you can <em>feel,</em><br />not just calculate.</h2><p>Northline is a residential engineering studio for people who care how a home performs and how it feels. We translate architectural intent into clear, buildable systems.</p></div>
      <div className="metrics"><div><strong>72</strong><span>homes delivered</span></div><div><strong>11</strong><span>years in practice</span></div><div><strong>6</strong><span>climate zones</span></div><div><strong>0.8%</strong><span>average variation</span></div></div>
    </section>

    <section className="featured section-pad">
      <div className="section-head"><div><p className="section-index">02 — SELECTED WORK</p><h2>Built with reason.<br /><em>Remembered</em> for feeling.</h2></div><Link href="/projects" className="round-link">All projects <ArrowUpRight /></Link></div>
      <div className="project-grid">{projectData.slice(0,3).map((p,i) => <ProjectCard key={p.name} p={p} i={i} />)}</div>
    </section>

    <section className="method section-pad">
      <div className="method-art"><img src="/images/staircase.jpg" alt="Sculptural interior stair with warm natural light" /><div className="orbit-badge"><Ruler /><span>DETAIL<br />MATTERS</span></div></div>
      <div className="method-copy"><p className="section-index">03 — OUR METHOD</p><h2>One clear line from <em>idea</em> to handover.</h2><p>We stay involved through every meaningful decision, resolving risk early and protecting the architectural idea all the way to site.</p>{[
        ["01", "Listen & map", "Site, lifestyle, budget and ambition become one practical brief."],
        ["02", "Model & resolve", "Structure, thermal behavior and building systems are coordinated in detail."],
        ["03", "Deliver & verify", "Clear packages, site reviews and a measured handover close the loop."],
      ].map(x => <div className="method-row" key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div><ArrowUpRight /></div>)}</div>
    </section>

    <section className="testimonial section-pad"><p>“Northline found the invisible logic of our home. Every decision became simpler, and the finished spaces feel completely effortless.”</p><div><span>LY</span><strong>Lina Youssef<small>Homeowner, Pine Court</small></strong></div></section>
    <CTA showModal={showModal} />
  </main>;
}

function ProjectsPage({ showModal }: { showModal: () => void }) {
  return <main><PageHero index="01" title={<>Selected homes,<br /><em>engineered to last.</em></>} copy="A collection of residences where material restraint, structural clarity and daily comfort work as one." />
    <section className="filters section-pad"><button className="active">All work <span>12</span></button><button>New homes <span>07</span></button><button>Retrofits <span>03</span></button><button>Interiors <span>02</span></button></section>
    <section className="project-archive section-pad">{projectData.map((p,i) => <ProjectCard key={p.name} p={p} i={i} />)}</section>
    <section className="archive-note section-pad"><span>2016—2026</span><h2>Every project begins<br />with the <em>right questions.</em></h2><button className="button dark" onClick={showModal}>Tell us about yours <ArrowRight /></button></section><CTA showModal={showModal} /></main>;
}

function ServicesPage({ showModal }: { showModal: () => void }) {
  const services = [
    { n:"01", icon:<Cube />, title:"Structural design", text:"Elegant structural systems for new houses, extensions and sensitive retrofits—from first sketch through construction issue." },
    { n:"02", icon:<Leaf />, title:"Building performance", text:"Thermal, daylight and energy modelling that turns comfort and efficiency into measurable design decisions." },
    { n:"03", icon:<Buildings />, title:"Technical coordination", text:"One coordinated model connecting structure, envelope, services and architectural details before they reach site." },
    { n:"04", icon:<Compass />, title:"Site stewardship", text:"Tender support, inspections and focused problem-solving that protect design intent during construction." },
  ];
  return <main><PageHero index="02" title={<>Engineering the<br /><em>whole house.</em></>} copy="Clear thinking across structure, comfort, coordination and delivery—brought together by one senior team." />
    <section className="services-list section-pad">{services.map(s => <article key={s.n}><span>{s.n}</span><div className="service-icon">{s.icon}</div><h2>{s.title}</h2><p>{s.text}</p><button onClick={showModal}>Scope this service <ArrowUpRight /></button></article>)}</section>
    <section className="deliverables section-pad"><div><p className="section-index">WHAT YOU RECEIVE</p><h2>Useful detail.<br /><em>No theatre.</em></h2></div><div className="check-grid">{["Feasibility note","Structural calculations","Coordinated 3D model","Performance report","Tender drawings","Site review record","Handover schedule","12-month check-in"].map(x=><span key={x}><Check weight="bold" />{x}</span>)}</div></section><CTA showModal={showModal} /></main>;
}

function StudioPage({ showModal }: { showModal: () => void }) {
  return <main><PageHero index="03" title={<>Small studio.<br /><em>Serious attention.</em></>} copy="We are engineers, makers and careful listeners. Every home is led by a director and shaped in direct conversation with its owners." />
    <section className="studio-story section-pad"><div className="story-image"><img src="/images/staircase.jpg" alt="Warm sculptural architectural interior" /><span>CAIRO / AMMAN / DUBAI</span></div><div><p className="section-index">WHY NORTHLINE</p><h2>Technical rigor,<br />with a <em>human pulse.</em></h2><p>Northline began with a simple frustration: residential engineering was too often treated as a late-stage calculation. We built a studio that joins the conversation early—when the best decisions are still possible.</p><p>Today our team works across disciplines and borders, but stays intentionally small. That means fewer handoffs, clearer answers and genuine accountability.</p><button className="button dark" onClick={showModal}>Work with the studio <ArrowRight /></button></div></section>
    <section className="values section-pad"><p className="section-index">OUR PRINCIPLES</p><div>{[["01","Clarity over complexity"],["02","Measure what matters"],["03","Design with the climate"],["04","Stay until it works"]].map(v=><article key={v[0]}><span>{v[0]}</span><h3>{v[1]}</h3></article>)}</div></section><CTA showModal={showModal} /></main>;
}

function JournalPage() {
  const posts = [
    ["Field note 08", "Why the quietest detail is often structural", "6 min read", "/images/concrete-house.jpg"],
    ["Material study", "Concrete without the coldness", "4 min read", "/images/staircase.jpg"],
    ["Guide", "Before you buy a difficult plot", "8 min read", "/images/garden-house.jpg"],
    ["Field note 07", "The case for modelling daylight early", "5 min read", "/images/villa-hero.jpg"],
  ];
  return <main><PageHero index="04" title={<>Notes on making<br /><em>better homes.</em></>} copy="Field observations, practical guides and the technical ideas shaping our residential work." />
    <section className="journal-grid section-pad">{posts.map((p,i)=><article key={p[1]}><div className="journal-image"><img src={p[3]} alt="Architectural study" /><span>{String(i+1).padStart(2,"0")}</span></div><p>{p[0]}</p><h2>{p[1]}</h2><div><span>{p[2]}</span><ArrowUpRight /></div></article>)}</section></main>;
}

function PageHero({ index, title, copy }: { index:string; title:React.ReactNode; copy:string }) {
  return <section className="page-hero section-pad"><p className="section-index">{index} — NORTHLINE</p><h1>{title}</h1><p>{copy}</p></section>;
}

function ProjectCard({ p, i }: { p: typeof projectData[number]; i:number }) {
  return <article className={`project-card project-${i+1}`}><div className="project-image"><img src={p.image} alt={p.name} /><span>{p.tag}</span><Link href="/projects" aria-label={`View ${p.name}`}><ArrowUpRight /></Link></div><div><span>{String(i+1).padStart(2,"0")}</span><h3>{p.name}</h3><p>{p.place}</p></div></article>;
}

function CTA({ showModal }: { showModal: () => void }) {
  return <section className="cta section-pad"><div className="cta-badge"><HouseLine weight="fill" /></div><p>HAVE A HOME IN MIND?</p><h2>Let’s make it<br /><em>make sense.</em></h2><button className="button light" onClick={showModal}>Start a conversation <ArrowRight /></button><small>Typically replying within two working days</small></section>;
}

function Footer({ showModal }: { showModal: () => void }) {
  return <footer><div className="footer-brand"><span className="brand-mark light"><i /><i /></span><h2>NORTHLINE</h2><p>Residential engineering<br />for considered living.</p></div><div><h4>Explore</h4>{nav.map(n=><Link key={n.page} href={n.href}>{n.label}</Link>)}</div><div><h4>Visit</h4><span>14 Al Maadi Street</span><span>Cairo, Egypt</span><button onClick={showModal}>hello@northline.house</button></div><div><h4>Follow</h4><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="#">Are.na</a></div><div className="footer-bottom"><span>© 2026 Northline House Engineering</span><span>Portfolio concept — not accepting enquiries</span><button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>Back to top ↑</button></div></footer>;
}

function NoticeModal({ close }: { close: () => void }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={close}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="notice-title" onMouseDown={e=>e.stopPropagation()}><button className="modal-close" onClick={close} aria-label="Close dialog"><X /></button><span className="modal-icon"><HouseLine weight="fill" /></span><p>PORTFOLIO DEMONSTRATION</p><h2 id="notice-title">This experience is intentionally enquiry-free.</h2><p className="modal-copy">Northline is a fictional studio created to demonstrate digital design and front-end craft. Contact, booking and account features are disabled, so no personal information is collected or submitted.</p><button className="button dark" onClick={close}>Continue exploring <ArrowRight /></button><small>No data has been saved.</small></div></div>;
}

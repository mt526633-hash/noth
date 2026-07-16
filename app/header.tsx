"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, House, List, X } from "@phosphor-icons/react";
import { useLayoutEffect, useRef, useState } from "react";

const navigation=[{label:"Home",href:"/"},{label:"Projects",href:"/projects"},{label:"Services",href:"/services"},{label:"Studio",href:"/studio"},{label:"Journal",href:"/journal"}];
const toneForPath=(path:string)=>path==="/"?"home":path==="/services"?"services":path==="/studio"?"studio":path==="/journal"?"journal":"projects";

export function PersistentHeader(){
  const pathname=usePathname();
  const [menu,setMenu]=useState(false);
  const [tone,setTone]=useState(toneForPath(pathname));
  const navRef=useRef<HTMLElement>(null);
  const [indicator,setIndicator]=useState({left:0,visible:false});
  useLayoutEffect(()=>{
    const nav=navRef.current;
    if(!nav)return;
    const update=()=>{const active=nav.querySelector<HTMLAnchorElement>("a.current");setIndicator(active?{left:active.offsetLeft+(active.offsetWidth-72)/2,visible:true}:{left:0,visible:false})};
    setTone(toneForPath(pathname));
    update();
    const resize=()=>update();
    window.addEventListener("resize",resize);
    return()=>window.removeEventListener("resize",resize)
  },[pathname]);
  const prepareRoute=(target?:string)=>{document.documentElement.classList.add("motion-static");document.documentElement.classList.remove("motion-loading");if(target){const targetLink=navRef.current?.querySelector<HTMLAnchorElement>(`a[href="${target}"]`);if(targetLink)setIndicator({left:targetLink.offsetLeft+(targetLink.offsetWidth-72)/2,visible:true});setTone(toneForPath(target))}else setIndicator(current=>({...current,visible:false}));setMenu(false)};
  const openNotice=()=>window.dispatchEvent(new Event("northline:open-notice"));
  return <header className="topbar"><Link className="logo" href="/" onClick={()=>prepareRoute("/")}><span className="logo-mark"><House weight="fill"/></span><span>Northline<small>House engineering</small></span></Link><nav ref={navRef} aria-label="Primary navigation" className={`${menu?"nav open":"nav"} nav-tone-${tone}`}>{navigation.map(item=><Link key={item.href} className={pathname===item.href?"current":""} href={item.href} onClick={()=>prepareRoute(item.href)}>{item.label}</Link>)}<span className={`nav-indicator${indicator.visible?" visible":""}`} style={{transform:`translate3d(${indicator.left}px,-50%,0)`}}><i/></span></nav><button className="button button-dark nav-button" onClick={openNotice}><span>Start a project</span><ArrowRight/></button><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<List/>}</button></header>
}

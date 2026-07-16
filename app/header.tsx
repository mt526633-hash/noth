"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, House, List, X } from "@phosphor-icons/react";
import { useLayoutEffect, useRef, useState } from "react";

const navigation=[{label:"Projects",href:"/projects"},{label:"Services",href:"/services"},{label:"Studio",href:"/studio"},{label:"Journal",href:"/journal"}];

export function PersistentHeader(){
  const pathname=usePathname();
  const [menu,setMenu]=useState(false);
  const tone=pathname==="/services"?"services":pathname==="/studio"?"studio":pathname==="/journal"?"journal":"projects";
  const navRef=useRef<HTMLElement>(null);
  const [indicator,setIndicator]=useState({left:0,visible:false});
  useLayoutEffect(()=>{
    const nav=navRef.current;
    if(!nav)return;
    const update=()=>{const active=nav.querySelector<HTMLAnchorElement>("a.current");setIndicator(active?{left:active.offsetLeft+(active.offsetWidth-72)/2,visible:true}:{left:0,visible:false})};
    update();
    const resize=()=>update();
    window.addEventListener("resize",resize);
    return()=>window.removeEventListener("resize",resize)
  },[pathname]);
  const prepareRoute=()=>{document.documentElement.classList.add("motion-static");document.documentElement.classList.remove("motion-loading");setMenu(false)};
  const openNotice=()=>window.dispatchEvent(new Event("northline:open-notice"));
  return <header className="topbar"><Link className="logo" href="/" onClick={prepareRoute}><span className="logo-mark"><House weight="fill"/></span><span>Northline<small>House engineering</small></span></Link><nav ref={navRef} className={`${menu?"nav open":"nav"} nav-tone-${tone}`}>{navigation.map(item=><Link key={item.href} className={pathname===item.href?"current":""} href={item.href} onClick={prepareRoute}>{item.label}</Link>)}<span className={`nav-indicator${indicator.visible?" visible":""}`} style={{transform:`translate3d(${indicator.left}px,-50%,0)`}}><i/></span></nav><button className="button button-dark nav-button" onClick={openNotice}><span>Start a project</span><ArrowRight/></button><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<List/>}</button></header>
}

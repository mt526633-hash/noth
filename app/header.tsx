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
  const lastIndicatorLeft=useRef<number|null>(null);
  const [indicator,setIndicator]=useState({left:0,visible:false,stretch:1.35});
  const [indicatorMoving,setIndicatorMoving]=useState(false);
  useLayoutEffect(()=>{
    const nav=navRef.current;
    if(!nav)return;
    let frame=0,timer=0;
    const update=(animate:boolean)=>{const active=nav.querySelector<HTMLAnchorElement>("a.current");if(!active){setIndicator(current=>({...current,visible:false}));return}const left=active.offsetLeft+(active.offsetWidth-34)/2;const previous=lastIndicatorLeft.current;const distance=previous===null?0:Math.abs(left-previous);setIndicator({left,visible:true,stretch:Math.min(1.38,1.14+distance/620)});lastIndicatorLeft.current=left;if(animate&&distance>1){setIndicatorMoving(false);frame=requestAnimationFrame(()=>setIndicatorMoving(true));timer=window.setTimeout(()=>setIndicatorMoving(false),900)}};
    update(true);
    const resize=()=>update(false);
    window.addEventListener("resize",resize);
    return()=>{cancelAnimationFrame(frame);clearTimeout(timer);window.removeEventListener("resize",resize)}
  },[pathname]);
  const prepareRoute=()=>{document.documentElement.classList.add("motion-static");document.documentElement.classList.remove("motion-loading");setMenu(false)};
  const openNotice=()=>window.dispatchEvent(new Event("northline:open-notice"));
  return <header className="topbar"><Link className="logo" href="/" onClick={prepareRoute}><span className="logo-mark"><House weight="fill"/></span><span>Northline<small>House engineering</small></span></Link><nav ref={navRef} className={`${menu?"nav open":"nav"} nav-tone-${tone}`}>{navigation.map(item=><Link key={item.href} className={pathname===item.href?"current":""} href={item.href} onClick={prepareRoute}>{item.label}</Link>)}<span className={`nav-indicator${indicator.visible?" visible":""}${indicatorMoving?" traveling":""}`} style={{transform:`translate3d(${indicator.left}px,0,0)`,"--indicator-stretch":indicator.stretch} as React.CSSProperties}><i/></span></nav><button className="button button-dark nav-button" onClick={openNotice}><span>Start a project</span><ArrowRight/></button><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<List/>}</button></header>
}

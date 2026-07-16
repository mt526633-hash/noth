"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, House, List, X } from "@phosphor-icons/react";
import { useState } from "react";

const navigation=[{label:"Projects",href:"/projects"},{label:"Services",href:"/services"},{label:"Studio",href:"/studio"},{label:"Journal",href:"/journal"}];

export function PersistentHeader(){
  const pathname=usePathname();
  const [menu,setMenu]=useState(false);
  const prepareRoute=()=>{document.documentElement.classList.add("motion-static");document.documentElement.classList.remove("motion-loading");setMenu(false)};
  const openNotice=()=>window.dispatchEvent(new Event("northline:open-notice"));
  return <header className="topbar"><Link className="logo" href="/" onClick={prepareRoute}><span className="logo-mark"><House weight="fill"/></span><span>Northline<small>House engineering</small></span></Link><nav className={menu?"nav open":"nav"}>{navigation.map(item=><Link key={item.href} className={pathname===item.href?"current":""} href={item.href} onClick={prepareRoute}>{item.label}</Link>)}</nav><button className="button button-dark nav-button" onClick={openNotice}><span>Start a project</span><ArrowRight/></button><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<List/>}</button></header>
}

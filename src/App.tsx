import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type SVGProps,
  type ReactElement,
} from "react";

/* ─── SVG ICON COMPONENTS ─── */
const Icon = {
  Leaf: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.5.5 6.5-.5.5-1.5 1-2.5 1.5C20 12.5 20 17 11 20Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  Mail: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Lock: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  User: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  Check: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ChevronRight: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  Search: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  Camera: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
  Wallet: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  ),
  LogOut: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
  Plus: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Home: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  LayoutDashboard: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  ScanLine: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <line x1="7" y1="12" x2="17" y2="12" />
    </svg>
  ),
  ShoppingCart: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  Vote: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  ),
  Package: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.5 9.4 7.55 4.24" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Truck: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 5v3h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  Shield: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Award: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  Coins: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  ),
  ArrowUpRight: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  ),
  Star: (p: SVGProps<SVGSVGElement>) => (
    <svg {...p} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Sprout: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 1 1.1 7.5c-1.4.6-2.9.8-4.4.7-.8-2.6-.1-5.4 1.6-6.8.7-.5 1.1-.9 1.7-1.4z" />
    </svg>
  ),
  ClipboardList: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  ),
  Factory: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  ),
  Warehouse: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M12 10v8" />
    </svg>
  ),
  Scale: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  ),
  Filter: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),
  Link: (p: SVGProps<SVGSVGElement>) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  Google: () => (
    <svg width="17" height="17" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  ),
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#040a05;font-family:'DM Sans',sans-serif;color:#dce8d4;overflow-x:hidden;min-height:100vh;cursor:none}
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#040a05}::-webkit-scrollbar-thumb{background:#1e4a18;border-radius:3px}
button,input{font-family:'DM Sans',sans-serif}a{text-decoration:none;color:inherit}
#cursor-dot{position:fixed;width:6px;height:6px;background:#7ed958;border-radius:50%;pointer-events:none;z-index:10000;transition:background .2s;mix-blend-mode:screen;top:0;left:0;will-change:transform}
#cursor-ring{position:fixed;width:32px;height:32px;border:1.5px solid rgba(126,217,88,.4);border-radius:50%;pointer-events:none;z-index:9999;mix-blend-mode:screen;top:0;left:0;will-change:transform;transition:width .3s,height .3s,border-color .3s}
body:has(button:hover) #cursor-ring{width:48px;height:48px;border-color:rgba(126,217,88,.7)}
body:has(button:hover) #cursor-dot{background:#b0f060}
#bg-svg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:.55}
#bg-canvas{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}
.noise{position:fixed;inset:0;z-index:2;pointer-events:none;opacity:.025;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
/* AUTH */
.auth-root{position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:#040a05;transition:opacity .5s,transform .5s}
.auth-root.leaving{opacity:0;transform:scale(1.04);pointer-events:none}
.auth-card{position:relative;width:980px;max-width:96vw;height:640px;border-radius:24px;overflow:hidden;display:flex;box-shadow:0 40px 120px rgba(0,0,0,.9),0 0 0 1px rgba(74,183,52,.15),inset 0 1px 0 rgba(255,255,255,.04)}
.aform-side{position:relative;width:50%;height:100%;background:linear-gradient(170deg,#0b1c0d,#081408);display:flex;align-items:center;justify-content:center;z-index:2;transition:margin-left .72s cubic-bezier(.77,0,.18,1)}
.auth-card.signup .aform-side{margin-left:50%}
.aform-inner{width:100%;max-width:370px;padding:26px 38px}
.alogo{display:flex;align-items:center;gap:9px;margin-bottom:20px}
.alogo-box{width:38px;height:38px;background:linear-gradient(135deg,#4ab734,#1e6614);border-radius:10px;display:flex;align-items:center;justify-content:center;animation:logoMorph 4s ease-in-out infinite}
@keyframes logoMorph{0%,100%{border-radius:10px}50%{border-radius:50%;box-shadow:0 0 20px rgba(74,183,52,.35)}}
.alogo-name{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:700;background:linear-gradient(90deg,#a8e078,#5ec440,#a8e078);background-size:200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3.5s linear infinite}
@keyframes shimmer{0%{background-position:0%}100%{background-position:200%}}
.aform-title{font-size:26px;font-weight:700;color:#e8f5e2;margin-bottom:4px}
.aform-sub{font-size:13px;color:#486844;margin-bottom:16px}
.artabs{display:flex;gap:4px;margin-bottom:14px;background:#08120a;border:1px solid #162818;border-radius:10px;padding:3px}
.artab{flex:1;padding:6px 4px;border-radius:7px;border:none;background:transparent;color:#324e34;font-size:11px;font-weight:600;cursor:pointer;transition:all .22s;display:flex;align-items:center;justify-content:center;gap:4px}
.artab.on{background:linear-gradient(135deg,rgba(74,183,52,.18),rgba(30,102,20,.12));color:#7ed958;border:1px solid rgba(74,183,52,.22)}
.ainwrap{position:relative;margin-bottom:10px}
.ainwrap .ico{position:absolute;left:13px;top:50%;transform:translateY(-50%);pointer-events:none;width:16px;height:16px;color:#2e4a30}
.ain{width:100%;height:44px;padding:0 14px 0 42px;background:#08120a;border:1.5px solid #162818;border-radius:11px;color:#e8f5e2;font-size:14px;outline:none;transition:all .22s}
.ain:focus{border-color:#4ab734;background:#0a1a0c;box-shadow:0 0 0 3px rgba(74,183,52,.08)}
.ain::placeholder{color:#2e4830}
.arow2{display:flex;gap:10px;margin-bottom:10px}.arow2 .ainwrap{margin-bottom:0;flex:1}
.aforgot{font-size:12px;color:#2e4830;text-align:right;cursor:pointer;margin:-6px 0 14px;transition:color .18s;display:block}.aforgot:hover{color:#7ed958}
.abtn{width:100%;height:44px;background:linear-gradient(135deg,#2a7a1a,#0e3a08);color:#fff;border:none;border-radius:11px;font-size:15px;font-weight:700;cursor:pointer;transition:all .25s;position:relative;overflow:hidden}
.abtn::before{content:'';position:absolute;top:-50%;left:-60%;width:40%;height:200%;background:linear-gradient(105deg,transparent,rgba(255,255,255,.2),transparent);transform:skewX(-20deg);transition:left .5s}
.abtn:hover::before{left:130%}.abtn:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(74,183,52,.4)}
.adivider{display:flex;align-items:center;gap:12px;margin:14px 0}.adivline{flex:1;height:1px;background:#111e14}.adivtxt{font-size:11px;color:#243826}
.agbtn{width:100%;height:44px;background:#08120a;border:1.5px solid #162818;border-radius:11px;color:#6a8e62;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:9px;transition:all .22s}
.agbtn:hover{border-color:#4ab734;background:#0a1a0c;color:#b8e8b0}
.aswlink{font-size:12px;color:#2e4830;text-align:center;margin-top:14px}.aswlink b{color:#7ed958;cursor:pointer}.aswlink b:hover{color:#a8f070}
.achkrow{display:flex;align-items:flex-start;gap:7px;margin:0 0 10px}
.achkrow input{accent-color:#4ab734;width:15px;height:15px;margin-top:2px;cursor:pointer}
.achkrow label{font-size:12px;color:#3e5e40;cursor:pointer;line-height:1.5}
.adeco{position:absolute;top:0;right:0;width:50%;height:100%;background:linear-gradient(160deg,#0b2e12,#082010,#030e05);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 36px;overflow:hidden;transition:transform .72s cubic-bezier(.77,0,.18,1);z-index:30}
.adeco.shifted{transform:translateX(-100%)}
.adot{position:absolute;border-radius:50%;background:#d4a843;animation:adotPulse ease-in-out infinite}
@keyframes adotPulse{0%,100%{opacity:.08;transform:scale(.7)}50%{opacity:.5;transform:scale(1.2)}}
.adeco-inner{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;width:100%}
.adeco-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(74,183,52,.08);border:1px solid rgba(74,183,52,.2);border-radius:30px;padding:7px 16px;margin-bottom:20px;font-size:12px;color:#7ed958;font-weight:600}
.adeco-title{font-family:'Cormorant Garamond',serif;font-size:36px;color:#e8f5e2;text-align:center;line-height:1.12;margin-bottom:12px}
.adeco-sub{font-size:13px;color:#4a7a4a;text-align:center;line-height:1.7;max-width:240px;margin-bottom:24px}
.adeco-ghost{padding:12px 30px;background:transparent;border:1.5px solid rgba(126,217,88,.4);border-radius:11px;color:#7ed958;font-size:14px;font-weight:600;cursor:pointer;transition:all .24s}
.adeco-ghost:hover{background:rgba(74,183,52,.12);border-color:#7ed958;transform:translateY(-1px)}
.astrow{display:flex;gap:10px;margin-top:22px;width:100%}
.astcell{flex:1;background:rgba(255,255,255,.025);border:1px solid rgba(74,183,52,.1);border-radius:10px;padding:10px 6px;text-align:center;transition:all .3s}
.astcell:hover{border-color:rgba(74,183,52,.3);transform:translateY(-2px)}
.astval{font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:700;color:#7ed958}
.astlbl{font-size:9px;color:#2e4830;margin-top:2px;text-transform:uppercase;letter-spacing:.6px}
.asuccess{position:absolute;inset:0;background:rgba(4,10,5,.96);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:200;animation:fadeIn .38s ease}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.asuc-icon{width:80px;height:80px;background:linear-gradient(135deg,#4ab734,#1e6614);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;animation:pop .5s cubic-bezier(.34,1.56,.64,1)}
@keyframes pop{from{transform:scale(0)}to{transform:scale(1)}}
.asuc-rings{position:absolute;width:80px;height:80px}
.asuc-rings::before,.asuc-rings::after{content:'';position:absolute;inset:-10px;border-radius:50%;border:1px solid rgba(74,183,52,.3);animation:ringExpand 2s ease-in-out infinite}
.asuc-rings::after{inset:-20px;animation-delay:.4s}
@keyframes ringExpand{0%{opacity:.8;transform:scale(1)}100%{opacity:0;transform:scale(1.4)}}
/* APP */
.app-root{position:relative;z-index:5;min-height:100vh;opacity:0;transform:translateY(16px);transition:opacity .6s,transform .6s}
.app-root.visible{opacity:1;transform:translateY(0)}
nav{position:sticky;top:0;z-index:400;height:62px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;background:rgba(4,10,5,.85);backdrop-filter:blur(24px);border-bottom:1px solid rgba(74,183,52,.07)}
.logo{display:flex;align-items:center;gap:9px;cursor:pointer}
.logo-box{width:34px;height:34px;background:linear-gradient(135deg,#4ab734,#1a5210);border-radius:9px;display:flex;align-items:center;justify-content:center;animation:logoMorph 4s ease-in-out infinite}
.logo-name{font-family:'Cormorant Garamond',serif;font-size:21px;font-weight:700;background:linear-gradient(90deg,#a8e078,#5ec440,#a8e078);background-size:200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3.5s linear infinite}
.nav-badge{font-size:10px;color:#4ab734;background:rgba(74,183,52,.08);padding:2px 8px;border-radius:20px;border:1px solid rgba(74,183,52,.18);font-weight:600}
.navlinks{display:flex;gap:2px}
.nl{padding:7px 12px;border-radius:7px;font-size:13px;font-weight:500;color:#5a8050;cursor:pointer;border:none;background:transparent;display:flex;align-items:center;gap:5px;transition:color .25s,background .25s}
.nl:hover,.nl.on{color:#7ed958;background:rgba(74,183,52,.07)}
.navr{display:flex;align-items:center;gap:9px}
.wpill{display:flex;align-items:center;gap:6px;background:#07120a;border:1px solid rgba(74,183,52,.12);border-radius:8px;padding:6px 12px;cursor:pointer;transition:all .22s}
.wpill:hover{border-color:rgba(74,183,52,.3)}
.wdot{width:6px;height:6px;background:#4ab734;border-radius:50%;animation:dotpulse 2s ease-in-out infinite}
@keyframes dotpulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.7);opacity:.4}}
.wa{font-size:12px;color:#5a7a50}.wb{font-size:12px;color:#7ed958;font-weight:600;font-family:'JetBrains Mono',monospace}
.btnP{background:linear-gradient(135deg,#2a7a1a,#0e3a08);color:#fff;border:none;padding:8px 16px;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .22s}
.btnP:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(74,183,52,.15)}
.btnO{background:transparent;color:#5a7a50;border:1px solid rgba(74,183,52,.18);padding:7px 14px;border-radius:8px;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .22s}
.btnO:hover{color:#a8d490;border-color:rgba(74,183,52,.4);background:rgba(74,183,52,.05)}

.btnMkt{background:#0a1a0c;color:#a8d490;border:1.5px solid rgba(74,183,52,.2);padding:8px 16px;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .22s;font-family:'DM Sans',sans-serif}
.btnMkt:hover{background:#0f2210;border-color:rgba(74,183,52,.4);transform:translateY(-1px)}
.btnMktO{background:transparent;color:#5a7a50;border:1.5px solid rgba(74,183,52,.1);padding:8px 16px;border-radius:8px;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .22s;font-family:'DM Sans',sans-serif}
.btnMktO:hover{border-color:rgba(74,183,52,.3);color:#7ed958}
.btnGov{background:#0a1408;color:#8ab080;border:1.5px solid rgba(74,183,52,.15);padding:8px 16px;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .22s;font-family:'DM Sans',sans-serif}
.btnGov:hover{background:#0d1a0c;border-color:rgba(74,183,52,.28);transform:translateY(-1px)}
.btnGovO{background:transparent;color:#4a6a44;border:1.5px solid rgba(74,183,52,.08);padding:8px 16px;border-radius:8px;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .22s;font-family:'DM Sans',sans-serif}
.btnGovO:hover{border-color:rgba(74,183,52,.22);color:#6a8a60}



.ticker-wrap{overflow:hidden;border-top:1px solid rgba(74,183,52,.05);border-bottom:1px solid rgba(74,183,52,.05);background:rgba(4,10,5,.9);padding:9px 0}
.ticker-track{display:flex;animation:tickScroll 38s linear infinite;white-space:nowrap}
.ticker-track:hover{animation-play-state:paused}
.titem{display:inline-flex;align-items:center;gap:7px;padding:0 24px;font-size:12px;color:#354e30;border-right:1px solid rgba(74,183,52,.06)}
.titem-val{color:#5a8a4a;font-weight:600;font-family:'JetBrains Mono',monospace}
.titem-dot{width:4px;height:4px;border-radius:50%;background:#4ab734;opacity:.6}
@keyframes tickScroll{0%{transform:translateX(0)}100%{transform:translateX(-33.33%)}}
.view{display:none;animation:viewIn .4s cubic-bezier(.22,1,.36,1) both}
.view.active{display:block}
.hero{position:relative;min-height:580px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 28px 60px;overflow:hidden;background-image:url('/home.jpg');background-size:cover;background-position:center;background-repeat:no-repeat;}

.hero-glow{position:absolute;top:-100px;left:50%;transform:translateX(-50%);width:700px;height:700px;background:radial-gradient(circle,rgba(74,183,52,.07),transparent 70%);pointer-events:none;animation:heroGlow 4s ease-in-out infinite}
@keyframes heroGlow{0%,100%{opacity:.7;transform:translateX(-50%) scale(1)}50%{opacity:1;transform:translateX(-50%) scale(1.05)}}
.hero-bg-lines{position:absolute;inset:0;opacity:.04;pointer-events:none}
.hero-chip{display:inline-flex;align-items:center;gap:8px;background:rgba(74,183,52,.06);border:1px solid rgba(74,183,52,.18);border-radius:30px;padding:8px 20px;margin-bottom:22px;font-size:12px;color:#5ab840;font-weight:500}
.chip-dot{width:6px;height:6px;background:#4ab734;border-radius:50%;animation:dotpulse 2s infinite}
.hero-h{font-family:'Cormorant Garamond',serif;font-size:clamp(52px,8vw,100px);line-height:1.0;margin-bottom:20px;display:flex;flex-direction:column;gap:4px;text-shadow:0 2px 20px rgba(0,0,0,0.8)}
.gtext{background:linear-gradient(135deg,#7ed958,#4ab734,#a8e060);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-p{font-size:16px;color:#c8e0c0;max-width:580px;line-height:1.75;margin-bottom:36px}
.hbtns{display:flex;gap:14px;flex-wrap:wrap;justify-content:center;margin-bottom:24px}
.hbp{background:transparent;color:#ffffff;border:1.5px solid rgba(126,217,88,.5);padding:14px 28px;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;transition:all .25s;display:flex;align-items:center;gap:8px}
.hbp:hover{transform:translateY(-3px);background:rgba(74,183,52,.08);border-color:#7ed958;box-shadow:none}
.hbo{background:transparent;color:#7ed958;border:1.5px solid rgba(126,217,88,.35);padding:14px 28px;border-radius:12px;font-size:15px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:8px;transition:all .25s}
.hbo:hover{background:rgba(74,183,52,.08);border-color:#7ed958;transform:translateY(-2px)}
.hnote{font-size:12px;color:#8ab080}
.sec{padding:0 28px 64px;max-width:100%;margin:0 auto;position:relative;z-index:5}
.sec-head{text-align:center;margin-bottom:46px}
.sec-title{font-family:'Cormorant Garamond',serif;font-size:42px;color:#c8dcc0;margin-bottom:10px}
.sec-sub{font-size:14px;color:#3a5a34;margin-top:8px}
.card{background:#08140a;border:1px solid rgba(255,255,255,.04);border-radius:16px}
.tag{display:inline-flex;align-items:center;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600}
.tag-g{background:rgba(74,183,52,.12);color:#7ed958;border:1px solid rgba(74,183,52,.25)}
.tag-a{background:rgba(255,180,50,.1);color:#f5b942;border:1px solid rgba(255,180,50,.2)}
.tag-b{background:rgba(80,160,255,.1);color:#70b8ff;border:1px solid rgba(80,160,255,.2)}
.vbadge{display:inline-flex;align-items:center;gap:4px;background:rgba(74,183,52,.1);color:#7ed958;border:1px solid rgba(74,183,52,.22);border-radius:20px;padding:3px 9px;font-size:11px;font-weight:700}
.sgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.sc{background:#08140a;border:1px solid rgba(255,255,255,.04);border-radius:18px;padding:28px 24px;text-align:center;position:relative;overflow:hidden;transition:all .4s cubic-bezier(.34,1.3,.64,1);cursor:default}
.sc:hover{transform:translateY(-6px)}
.sc-icon{margin-bottom:12px;display:flex;justify-content:center}
.scv{font-family:'Cormorant Garamond',serif;font-size:38px;font-weight:700;margin-bottom:6px}
.scl{font-size:13px;color:#c8dcc0;font-weight:500;margin-bottom:4px}.scd{font-size:11px;color:#2e4830}
.sc.s1{color:#7ed958}.sc.s2{color:#70b8ff}.sc.s3{color:#f5b942}.sc.s4{color:#a8c9a0}
.chain-flow{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;margin-bottom:20px}
.cf-step{display:flex;flex-direction:column;align-items:center;gap:10px}
.cf-node{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#0d2e12,#081808);border:1.5px solid rgba(74,183,52,.18);display:flex;align-items:center;justify-content:center;transition:all .3s}
.cf-node:hover{border-color:#4ab734;transform:scale(1.1);box-shadow:0 0 24px rgba(74,183,52,.2)}
.cf-label{font-size:12px;color:#4a6a44;font-weight:500}
.cf-arrow{padding:0 6px;color:#1e4018;font-size:24px;display:flex;align-items:center}
.rgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.rc{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:16px;padding:24px;transition:all .3s}
.rc:hover{transform:translateY(-5px)}
.rc-icon{margin-bottom:12px}.rc-title{font-size:15px;font-weight:700;color:#c0d8b8;margin-bottom:8px}.rc-desc{font-size:13px;color:#3a5634;line-height:1.7}
.fgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.fc{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:16px;padding:24px;display:flex;gap:16px;transition:all .3s}
.fc:hover{border-color:rgba(74,183,52,.15);transform:translateY(-3px)}
.fc-icon{flex-shrink:0;margin-top:2px}
.fc-title{font-size:15px;font-weight:700;color:#c0d8b8;margin-bottom:8px;display:flex;align-items:center;gap:8px}
.fc-tag{font-size:10px;background:rgba(74,183,52,.1);color:#7ed958;border:1px solid rgba(74,183,52,.2);border-radius:4px;padding:2px 7px;font-weight:600}
.fc-desc{font-size:13px;color:#3a5634;line-height:1.75}
.faq-item{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:12px;padding:18px 20px;margin-bottom:9px;cursor:pointer;transition:all .3s;position:relative;overflow:hidden}
.faq-item::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#4ab734,transparent);transform:scaleY(0);transform-origin:top;transition:transform .4s}
.faq-item:hover::before,.faq-item.open::before{transform:scaleY(1)}
.faq-item.open{border-color:rgba(74,183,52,.2);background:#091510}
.faq-q{font-size:14px;font-weight:600;color:#8ab080;display:flex;justify-content:space-between;align-items:center;gap:10px}
.faq-ico{width:22px;height:22px;border-radius:50%;background:rgba(74,183,52,.07);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .35s;color:#4ab734}
.faq-item.open .faq-ico{transform:rotate(45deg);background:rgba(74,183,52,.16)}
.faq-a{font-size:13px;color:#3a5634;line-height:1.82;max-height:0;overflow:hidden;transition:max-height .45s cubic-bezier(.22,1,.36,1),margin-top .3s,opacity .3s;opacity:0}
.faq-item.open .faq-a{max-height:200px;margin-top:12px;opacity:1}
.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px}
.kpi{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:14px;padding:20px;cursor:default;transition:all .3s}
.kpi:hover{border-color:rgba(74,183,52,.22);transform:translateY(-3px)}
.kpi-val{font-family:'Cormorant Garamond',serif;font-size:30px;font-weight:700;margin-bottom:4px}
.kpi-lbl{font-size:13px;color:#d0e4c8;font-weight:500}.kpi-sub{font-size:11px;color:#3a5234;margin-top:4px}
.dash-grid{display:grid;grid-template-columns:2fr 1fr;gap:20px}
.dtable{width:100%;border-collapse:collapse}
.dtable th{text-align:left;padding:8px 10px;font-size:11px;color:#3a5234;font-weight:600;letter-spacing:.6px;text-transform:uppercase;border-bottom:1px solid rgba(74,183,52,.07)}
.dtable td{padding:12px 10px;border-bottom:1px solid rgba(255,255,255,.025);transition:background .2s;font-size:13px}
.dtable tr:hover td{background:rgba(74,183,52,.025)}.dtable tr:last-child td{border-bottom:none}
.mono{font-family:'JetBrains Mono',monospace;font-size:12px;color:#5ab840}
.dact{font-size:12px;color:#4ab734;cursor:pointer;padding:4px 8px;border-radius:5px;border:1px solid transparent;transition:all .2s;display:inline-flex;align-items:center;gap:4px}
.dact:hover{border-color:rgba(74,183,52,.3);background:rgba(74,183,52,.07)}
.pbar{height:6px;background:#0c1e0e;border-radius:3px;overflow:hidden}.pfill{height:100%;background:linear-gradient(90deg,#4ab734,#7ed958);border-radius:3px}
.search-bar{display:flex;align-items:center;background:#07120a;border:1.5px solid #162018;border-radius:12px;padding:12px 18px;gap:10px;transition:border-color .2s;flex:1}
.search-bar:focus-within{border-color:#4ab734;box-shadow:0 0 0 3px rgba(74,183,52,.07)}
.search-bar input{flex:1;background:none;border:none;outline:none;color:#e0ecda;font-size:14px;font-family:'JetBrains Mono',monospace}
.search-bar input::placeholder{color:#2a4228;font-family:'DM Sans',sans-serif}
.journey-step{display:flex;gap:16px;margin-bottom:8px;position:relative}
.step-line{position:absolute;left:19px;top:40px;bottom:-20px;width:2px;background:linear-gradient(to bottom,#1e4018,#0e2010)}
.step-circle{width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;z-index:1;transition:all .3s}
.step-circle.done{background:rgba(74,183,52,.12);border:2px solid #4ab734}.step-circle.pending{background:#08120a;border:2px solid #1e3220;opacity:.5}
.step-card{flex:1;background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:14px;padding:14px 18px;margin-bottom:12px;transition:all .3s}
.step-card.done:hover{border-color:rgba(74,183,52,.25)}.step-card.pending{opacity:.55}
.filter-btns{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px;align-items:center}
.fbtn{padding:7px 16px;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;font-family:inherit;transition:all .22s;border:1.5px solid rgba(74,183,52,.12);color:#4a6a44;background:transparent}
.fbtn:hover{border-color:rgba(74,183,52,.3);color:#7ed958}.fbtn.on{background:rgba(74,183,52,.12);border-color:#4ab734;color:#7ed958}
.mlist-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.mcard{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:16px;padding:24px;transition:all .3s cubic-bezier(.34,1.3,.64,1)}
.mcard:hover{border-color:rgba(74,183,52,.22);transform:translateY(-4px);box-shadow:0 18px 48px rgba(0,0,0,.5)}
.mcard-price{font-size:21px;font-weight:700;color:#7ed958;font-family:'Cormorant Garamond',serif}
.gov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:28px}
.gov-kpi{text-align:center;background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:14px;padding:20px;transition:all .3s}
.gov-kpi:hover{border-color:rgba(74,183,52,.2);transform:translateY(-3px)}
.prop-card{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:14px;padding:24px;margin-bottom:14px;transition:all .3s}
.prop-card:hover{border-color:rgba(74,183,52,.16)}
.vote-bar{height:9px;border-radius:5px;background:#0c1e0e;overflow:hidden;margin-bottom:8px}
.vote-fill{height:100%;border-radius:5px;background:linear-gradient(90deg,#1a4a1a,#2d6e2d)}
#toast-wrap{position:fixed;top:80px;right:24px;z-index:9999;pointer-events:none}
.toast-item{display:flex;align-items:center;gap:10px;background:#0a1e0c;border:1px solid rgba(74,183,52,.3);border-radius:12px;padding:12px 18px;margin-bottom:9px;font-size:13px;color:#a8c4a0;box-shadow:0 8px 32px rgba(0,0,0,.6);pointer-events:all;animation:toastIn .4s cubic-bezier(.34,1.56,.64,1) both;min-width:220px}
@keyframes toastIn{from{opacity:0;transform:translateX(60px) scale(.9)}to{opacity:1;transform:translateX(0) scale(1)}}
.toast-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
footer{border-top:1px solid rgba(74,183,52,.05);padding:30px 28px;text-align:center;position:relative;z-index:5}

.foot-top{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:40px;max-width:1100px;margin:0 auto 36px}
.foot-brand{}
.foot-logo{display:flex;align-items:center;gap:9px;margin-bottom:12px}
.foot-box{width:30px;height:30px;background:linear-gradient(135deg,#1a3a12,#0a1a08);border:1px solid rgba(74,183,52,.2);border-radius:8px;display:flex;align-items:center;justify-content:center}
.foot-name{font-family:'Cormorant Garamond',serif;font-size:18px;color:#4a6a44;font-weight:600}
.foot-tagline{font-size:12px;color:#6a8a60;line-height:1.7;max-width:220px}
.foot-col-title{font-size:11px;color:#7ed958;font-weight:600;text-transform:uppercase;letter-spacing:.8px;margin-bottom:14px}
.foot-links{display:flex;flex-direction:column;gap:9px}
.foot-link{font-size:13px;color:#5a7a50;cursor:pointer;transition:color .2s;width:fit-content}
.foot-link:hover{color:#a8d490}
.foot-contact{display:flex;flex-direction:column;gap:9px}
.foot-contact-item{font-size:12px;color:#5a7a50;display:flex;align-items:center;gap:7px}
.foot-bottom{border-top:1px solid rgba(74,183,52,.2);padding-top:20px;max-width:1100px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
.foot-copy{font-size:11px;color:#4a6a44}
.foot-built{font-size:11px;color:#4a6a44}
`;

const LIVE_EVENTS = [
  ["BATCH-0x9F3A registered on-chain", "🌱"],
  ["BATCH-0x7B9E delivered — escrow released", "✅"],
  ["New inspector certification: GAP Level 2", "🏅"],
  ["AGT reward distributed: +8 AGT", "🪙"],
  ["Smart contract executed: 1,500 kg Avocados", "⛓"],
  ["Governance vote cast by 0x8C4...D2e", "🗳"],
];

type Toast = { id: number; msg: string; emoji: string; color: string };

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [leaving, setLeaving] = useState(false);
  const [appVisible, setAppVisible] = useState(false);
  const [view, setView] = useState("home");
  const [agtVal, setAgtVal] = useState(248);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeRole, setActiveRole] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const toastIdRef = useRef(0);
  const evIdxRef = useRef(0);

  const toast = useCallback((msg: string, emoji: string, color?: string) => {
    const id = ++toastIdRef.current;
    setToasts((prev) => [
      ...prev,
      { id, msg, emoji: emoji || "🌿", color: color || "#4ab734" },
    ]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      3300,
    );
  }, []);

  /* cursor */
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let rx = mx,
      ry = my,
      rafId: number;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener("mousemove", onMove);
    const loop = () => {
      dot.style.transform = "translate(" + (mx - 3) + "px," + (my - 3) + "px)";
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform =
        "translate(" + (rx - 16) + "px," + (ry - 16) + "px)";
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  /* canvas particles */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let mx = W / 2,
      my = H / 2;
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("mousemove", onMove);
    class Pt {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      opacity: number;
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        var dx = mx - this.x,
          dy = my - this.y,
          d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150) {
          this.vx -= (dx / d) * 0.02;
          this.vy -= (dy / d) * 0.02;
        }
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
      }
      draw() {
        ctx!.save();
        ctx!.globalAlpha = this.opacity;
        ctx!.fillStyle = "#4ab734";
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }
    }
    var pts = Array.from({ length: 70 }, () => new Pt());
    var rafId: number;
    var frame = function () {
      ctx!.clearRect(0, 0, W, H);
      var gr = ctx!.createRadialGradient(mx, my, 0, mx, my, 220);
      gr.addColorStop(0, "rgba(74,183,52,0.04)");
      gr.addColorStop(1, "rgba(74,183,52,0)");
      ctx!.fillStyle = gr;
      ctx!.fillRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        pts[i].update();
        pts[i].draw();
        for (var j = i + 1; j < pts.length; j++) {
          var dx = pts[i].x - pts[j].x,
            dy = pts[i].y - pts[j].y,
            d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx!.save();
            ctx!.globalAlpha = (1 - d / 110) * 0.07;
            ctx!.strokeStyle = "#4ab734";
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(pts[i].x, pts[i].y);
            ctx!.lineTo(pts[j].x, pts[j].y);
            ctx!.stroke();
            ctx!.restore();
          }
        }
      }
      rafId = requestAnimationFrame(frame);
    };
    rafId = requestAnimationFrame(frame);
    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  /* post-login effects */
  useEffect(() => {
    if (!loggedIn) return;
    var agtIv = setInterval(function () {
      if (Math.random() > 0.7)
        setAgtVal(function (v) {
          return Math.round((v + Math.random() * 0.5) * 10) / 10;
        });
    }, 3500);
    var evIv = setInterval(function () {
      var e = LIVE_EVENTS[evIdxRef.current % LIVE_EVENTS.length];
      toast(e[0], e[1]);
      evIdxRef.current++;
    }, 12000);
    return () => {
      clearInterval(agtIv);
      clearInterval(evIv);
    };
  }, [loggedIn, toast]);

  /* nav scroll */
  useEffect(() => {
    if (!loggedIn) return;
    var nav = document.querySelector("nav") as HTMLElement | null;
    if (!nav) return;
    var onScroll = function () {
      nav!.style.background =
        window.scrollY > 20 ? "rgba(4,10,5,0.97)" : "rgba(4,10,5,0.85)";
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loggedIn]);

  const launchApp = () => {
    setLeaving(true);
    setTimeout(() => {
      setLoggedIn(true);
      setTimeout(() => setAppVisible(true), 30);
    }, 500);
  };
  const handleLogin = () => {
    setSuccessMsg("Welcome back to AgriChain!");
    setShowSuccess(true);
    setTimeout(launchApp, 2000);
  };
  const handleSignup = () => {
    setSuccessMsg("Account created! Welcome.");
    setShowSuccess(true);
    setTimeout(launchApp, 2000);
  };
  const signOut = () => {
    setAppVisible(false);
    setTimeout(() => {
      setLoggedIn(false);
      setLeaving(false);
      setShowSuccess(false);
      setIsSignup(false);
    }, 500);
  };
  const showView = (v: string) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  const VIEWS = ["home", "dashboard", "trace", "marketplace", "governance"];
  const VLABEL: Record<string, string> = {
    home: "Home",
    dashboard: "Dashboard",
    trace: "Trace Batch",
    marketplace: "Marketplace",
    governance: "Governance",
  };
  const VICON: Record<string, (p: SVGProps<SVGSVGElement>) => ReactElement> = {
    home: Icon.Home,
    dashboard: Icon.LayoutDashboard,
    trace: Icon.ScanLine,
    marketplace: Icon.ShoppingCart,
    governance: Icon.Vote,
  };

  const faqs = [
    {
      q: "How does real-time traceability work?",
      a: "Every handoff is cryptographically signed by the responsible party's wallet and recorded on Base with a timestamp. Scan any QR code to see the full farm-to-shelf journey instantly — no wallet needed.",
    },
    {
      q: "What blockchain powers AgriChain?",
      a: "Base — a fast, low-cost Layer 2 built on Ethereum by Coinbase. Transaction fees are affordable even for smallholder farmers. Batches are minted as NFTs, payments enforced by smart contracts, documents stored on IPFS.",
    },
    {
      q: "How are crop batches tokenized?",
      a: "When a farmer registers a batch, a unique NFT is minted on Base containing all details — crop type, quantity, harvest date, and certifications. The NFT is updated at each checkpoint until final delivery.",
    },
    {
      q: "How are disputes resolved?",
      a: "Payment is locked in smart contract escrow on delivery. If disputed, funds freeze and the full on-chain evidence is compiled automatically. Clear cases resolve without human intervention; ambiguous ones go to a mediation panel.",
    },
  ];

  return (
    <>
      <style>{CSS}</style>
      <div
        id="cursor-dot"
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 10000,
          width: "6px",
          height: "6px",
          background: "#7ed958",
          borderRadius: "50%",
          mixBlendMode: "screen",
        }}
      />
      <div
        id="cursor-ring"
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          width: "32px",
          height: "32px",
          border: "1.5px solid rgba(126,217,88,.4)",
          borderRadius: "50%",
          mixBlendMode: "screen",
        }}
      />

      <svg
        id="bg-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="rg1" cx="20%" cy="30%">
            <stop offset="0%" stopColor="#1a4a12" stopOpacity=".18" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="rg2" cx="80%" cy="70%">
            <stop offset="0%" stopColor="#0a3a08" stopOpacity=".15" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <ellipse cx="200" cy="250" rx="300" ry="300" fill="url(#rg1)">
          <animate
            attributeName="cx"
            values="200;260;200"
            dur="12s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse cx="1200" cy="650" rx="280" ry="280" fill="url(#rg2)">
          <animate
            attributeName="cx"
            values="1200;1140;1200"
            dur="10s"
            repeatCount="indefinite"
          />
        </ellipse>
        <g opacity=".04" stroke="#4ab734" strokeWidth=".5">
          <line x1="0" y1="0" x2="1440" y2="900" opacity=".5" />
          <line x1="1440" y1="0" x2="0" y2="900" opacity=".5" />
          <line x1="720" y1="0" x2="720" y2="900" />
          <line x1="0" y1="450" x2="1440" y2="450" />
        </g>
      </svg>
      <canvas id="bg-canvas" ref={canvasRef} />
      <div className="noise" />

      <div id="toast-wrap">
        {toasts.map((t) => (
          <div key={t.id} className="toast-item">
            <div className="toast-dot" style={{ background: t.color }} />
            {t.emoji} {t.msg}
          </div>
        ))}
      </div>

      {/* ── AUTH ── */}
      {!loggedIn && (
        <div className={"auth-root" + (leaving ? " leaving" : "")}>
          <div className={"auth-card" + (isSignup ? " signup" : "")}>
            {showSuccess && (
              <div className="asuccess">
                <div style={{ position: "relative" }}>
                  <div className="asuc-rings" />
                  <div className="asuc-icon">
                    <Icon.Check width="36" height="36" stroke="#fff" />
                  </div>
                </div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "28px",
                    color: "#e8f5e2",
                    marginBottom: "8px",
                    textAlign: "center",
                  }}
                >
                  {successMsg}
                </h2>
                <p style={{ color: "#3a5834", fontSize: "14px" }}>
                  Launching your dashboard…
                </p>
                <div style={{ display: "flex", gap: "6px", marginTop: "20px" }}>
                  {[0, 0.2, 0.4].map(function (d) {
                    return (
                      <div
                        key={d}
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#4ab734",
                          animation: "dotpulse 1s " + d + "s infinite",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            <div className="aform-side">
              <div className="aform-inner">
                {!isSignup ? (
                  <>
                    <div className="alogo">
                      <div className="alogo-box">
                        <Icon.Leaf width="20" height="20" stroke="#fff" />
                      </div>
                      <span className="alogo-name">AgriChain</span>
                    </div>
                    <div className="aform-title">Welcome back</div>
                    <div className="aform-sub">
                      Sign in to your AgriChain account
                    </div>
                    <div className="ainwrap">
                      <Icon.Mail className="ico" />
                      <input
                        className="ain"
                        type="email"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="ainwrap">
                      <Icon.Lock className="ico" />
                      <input
                        className="ain"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <a className="aforgot">Forgot password?</a>
                    <button className="abtn" onClick={handleLogin}>
                      Sign In
                    </button>
                    <div className="adivider">
                      <div className="adivline" />
                      <span className="adivtxt">or continue with</span>
                      <div className="adivline" />
                    </div>
                    <button className="agbtn" onClick={handleLogin}>
                      <Icon.Google /> Continue with Google
                    </button>
                    <p className="aswlink">
                      Don't have an account?{" "}
                      <b onClick={() => setIsSignup(true)}>Create one →</b>
                    </p>
                  </>
                ) : (
                  <>
                    <div className="alogo">
                      <div className="alogo-box">
                        <Icon.Leaf width="20" height="20" stroke="#fff" />
                      </div>
                      <span className="alogo-name">AgriChain</span>
                    </div>
                    <div className="aform-title">Create Account</div>
                    <div className="aform-sub">Join the AgriChain network</div>
                    <div className="artabs">
                      {[
                        "🌾 Farmer",
                        "🛒 Buyer",
                        "🔍 Inspector",
                        "💰 Investor",
                      ].map((r, i) => (
                        <button
                          key={r}
                          className={"artab" + (activeRole === i ? " on" : "")}
                          onClick={() => setActiveRole(i)}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                    <div className="arow2">
                      <div className="ainwrap">
                        <Icon.User className="ico" />
                        <input
                          className="ain"
                          type="text"
                          placeholder="First name"
                        />
                      </div>
                      <div className="ainwrap">
                        <Icon.User className="ico" />
                        <input
                          className="ain"
                          type="text"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <div className="ainwrap">
                      <Icon.Mail className="ico" />
                      <input
                        className="ain"
                        type="email"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="ainwrap">
                      <Icon.Lock className="ico" />
                      <input
                        className="ain"
                        type="password"
                        placeholder="Create password"
                      />
                    </div>
                    <div className="achkrow">
                      <input type="checkbox" id="terms" />
                      <label htmlFor="terms">
                        I agree to the{" "}
                        <a href="#" style={{ color: "#7ed958" }}>
                          Terms
                        </a>{" "}
                        and{" "}
                        <a href="#" style={{ color: "#7ed958" }}>
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    <button className="abtn" onClick={handleSignup}>
                      Create Account
                    </button>
                    <p className="aswlink">
                      Already have an account?{" "}
                      <b onClick={() => setIsSignup(false)}>← Sign in</b>
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className={"adeco" + (isSignup ? " shifted" : "")}>
              {[
                [4, 4, "15%", "20%", "2.2s"],
                [3, 3, "35%", "60%", "3s"],
                [5, 5, "55%", "30%", "2.5s"],
                [3, 3, "70%", "80%", "3.5s"],
                [6, 6, "80%", "15%", "2s"],
              ].map((d, i) => (
                <div
                  key={i}
                  className="adot"
                  style={{
                    width: d[0],
                    height: d[1],
                    top: d[2],
                    left: d[3],
                    animationDuration: String(d[4]),
                  }}
                />
              ))}
              {!isSignup ? (
                <div className="adeco-inner">
                  <div className="adeco-badge">
                    <Icon.Leaf width="12" height="12" /> Blockchain Agriculture
                  </div>
                  <div className="adeco-title">
                    From Field
                    <br />
                    to Fork —<br />
                    Verified.
                  </div>
                  <div className="adeco-sub">
                    Join 3,200+ farmers, buyers and inspectors building
                    transparent food systems on-chain.
                  </div>
                  <button
                    className="adeco-ghost"
                    onClick={() => setIsSignup(true)}
                  >
                    Get Started →
                  </button>
                  <div className="astrow">
                    <div className="astcell">
                      <div className="astval">14K+</div>
                      <div className="astlbl">Batches</div>
                    </div>
                    <div className="astcell">
                      <div className="astval">3.2K</div>
                      <div className="astlbl">Farmers</div>
                    </div>
                    <div className="astcell">
                      <div className="astval">99.4%</div>
                      <div className="astlbl">Resolved</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="adeco-inner">
                  <div className="adeco-badge">
                    <Icon.Leaf width="12" height="12" /> AgriChain Network
                  </div>
                  <div className="adeco-title" style={{ fontSize: "30px" }}>
                    Already part
                    <br />
                    of the harvest?
                  </div>
                  <div className="adeco-sub">
                    Sign in to continue tracking your crops, trades and
                    certificates on-chain.
                  </div>
                  <button
                    className="adeco-ghost"
                    onClick={() => setIsSignup(false)}
                  >
                    ← Sign In
                  </button>
                  <div className="astrow">
                    <div className="astcell">
                      <div className="astval">14K+</div>
                      <div className="astlbl">Batches</div>
                    </div>
                    <div className="astcell">
                      <div className="astval">3.2K</div>
                      <div className="astlbl">Farmers</div>
                    </div>
                    <div className="astcell">
                      <div className="astval">99.4%</div>
                      <div className="astlbl">Resolved</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── MAIN APP ── */}
      {loggedIn && (
        <div className={"app-root" + (appVisible ? " visible" : "")}>
          <nav>
            <div className="logo" onClick={() => showView("home")}>
              <div className="logo-box">
                <Icon.Leaf width="18" height="18" stroke="#fff" />
              </div>
              <span className="logo-name">AgriChain</span>
            </div>
            <div className="navlinks">
              {VIEWS.map((v) => {
                var NavIcon = VICON[v];
                return (
                  <button
                    key={v}
                    className={"nl" + (view === v ? " on" : "")}
                    onClick={() => showView(v)}
                  >
                    <NavIcon width="14" height="14" />
                    {VLABEL[v]}
                  </button>
                );
              })}
            </div>
            <div className="navr">
              <button
                className="btnP"
                onClick={() => toast("New batch registration opened!", "🌾")}
              >
                <Icon.Plus width="14" height="14" /> New Batch
              </button>
              <button
                className="btnO"
                onClick={signOut}
                style={{
                  padding: "10px 14px",
                  background: "#05100a",
                  color: "#5a8a60",
                  border: "1px solid rgba(74,183,52,.12)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Icon.LogOut width="14" height="14" /> Sign Out
              </button>
            </div>
          </nav>

          {/* HOME */}
          <div className={"view" + (view === "home" ? " active" : "")}>
            <section className="hero">
              <div className="hero-glow" />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(4,10,5,0.72)",
                  zIndex: 0,
                }}
              />
              <div className="hero-bg-lines">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 1440 560"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="60"
                      height="60"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M60 0 L0 0 0 60"
                        fill="none"
                        stroke="rgba(74,183,52,.4)"
                        strokeWidth=".5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h1 className="hero-h">
                  <span className="gtext">Farm to Shelf,</span>
                  <span style={{ color: "#ffffff" }}>Every Step Verified.</span>
                </h1>
                <p className="hero-p">
                  The first blockchain-powered crop tracking platform where
                  every handoff is signed, every certification is immutable, and
                  every payment is trustless.
                </p>
                <div className="hbtns">
                  <button className="hbp" onClick={() => showView("dashboard")}>
                    <Icon.LayoutDashboard width="16" height="16" />
                    Launch Dashboard
                  </button>
                  <button className="hbo" onClick={() => showView("trace")}>
                    <Icon.Camera width="16" height="16" />
                    Scan QR Code
                  </button>
                </div>
                <div className="hnote">
                  No wallet needed to verify a product
                </div>
              </div>
            </section>

            <div className="sec">
              <div className="sgrid">
                {[
                  {
                    I: Icon.Package,
                    val: "14,832",
                    lbl: "Batches Tracked",
                    sub: "+12% this month",
                    cls: "s1",
                  },
                  {
                    I: Icon.Sprout,
                    val: "3,241",
                    lbl: "Active Farmers",
                    sub: "+340 new",
                    cls: "s2",
                  },
                  {
                    I: Icon.Coins,
                    val: "892K",
                    lbl: "AGT Distributed",
                    sub: "This quarter",
                    cls: "s3",
                  },
                  {
                    I: Icon.Scale,
                    val: "99.4%",
                    lbl: "Disputes Resolved",
                    sub: "Auto-resolved",
                    cls: "s4",
                  },
                ].map((s) => (
                  <div key={s.lbl} className={"sc " + s.cls}>
                    <div className="sc-icon">
                      <s.I width="28" height="28" />
                    </div>
                    <div className="scv">{s.val}</div>
                    <div className="scl">{s.lbl}</div>
                    <div className="scd">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sec" style={{ textAlign: "center" }}>
              <div className="sec-head">
                <h2 className="sec-title">How the Chain Works</h2>
                <p className="sec-sub">
                  Every handoff is signed on-chain — no trust required.
                </p>
              </div>
              <div className="chain-flow">
                {[
                  [Icon.Sprout, "Harvested"],
                  [Icon.Shield, "Inspected"],
                  [Icon.Warehouse, "Warehoused"],
                  [Icon.Truck, "In Transit"],
                  [Icon.ShoppingCart, "Delivered"],
                  [Icon.Coins, "Payment"],
                ].map(function (item, i, arr) {
                  var Ico = item[0] as (
                    p: SVGProps<SVGSVGElement>,
                  ) => ReactElement;
                  var lbl = item[1] as string;
                  return (
                    <div
                      key={lbl}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div className="cf-step">
                        <div className="cf-node">
                          <Ico
                            width="26"
                            height="26"
                            style={{ color: "#4ab734" }}
                          />
                        </div>
                        <div className="cf-label">{lbl}</div>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="cf-arrow">
                          <Icon.ChevronRight
                            width="20"
                            height="20"
                            style={{ color: "#1e4018" }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sec">
              <div className="sec-head">
                <h2 className="sec-title">Built for Every Role</h2>
                <p className="sec-sub">
                  Six stakeholder types, one unified platform.
                </p>
              </div>
              <div className="rgrid">
                {[
                  {
                    I: Icon.Sprout,
                    t: "Farming Enterprises",
                    d: "Register crop batches, list produce, sign handoffs, receive payments via smart contract escrow.",
                  },
                  {
                    I: Icon.Factory,
                    t: "Agro-Processors",
                    d: "Buy raw produce, record transformation, and register processed output as a new verified batch.",
                  },
                  {
                    I: Icon.Warehouse,
                    t: "Warehouses",
                    d: "Sign batch receipts, log storage conditions, issue warehouse receipts with real-time blockchain verification.",
                  },
                  {
                    I: Icon.Truck,
                    t: "Transport Companies",
                    d: "Securely transfer farm assets across the supply chain with live location tracking on-chain.",
                  },
                  {
                    I: Icon.Search,
                    t: "Inspectors",
                    d: "Verify, grade, and certify batches at any point. Record findings as tamper-proof checkpoints.",
                  },
                  {
                    I: Icon.ClipboardList,
                    t: "Auditors",
                    d: "Ensure supply chain integrity with comprehensive blockchain-based auditing and full history access.",
                  },
                ].map((r) => (
                  <div key={r.t} className="rc">
                    <div className="rc-icon">
                      <r.I
                        width="28"
                        height="28"
                        style={{ color: "#4ab734" }}
                      />
                    </div>
                    <div className="rc-title">{r.t}</div>
                    <div className="rc-desc">{r.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sec">
              <div className="sec-head">
                <h2 className="sec-title">Platform Features</h2>
                <p className="sec-sub">
                  Everything you need — nothing you don't.
                </p>
              </div>
              <div className="fgrid">
                {[
                  {
                    I: Icon.Coins,
                    t: "AGT Token Rewards",
                    tag: "DeFi",
                    d: "Earn AgriToken rewards for verified deliveries, quality ratings, and complete records. Stake AGT for platform returns.",
                  },
                  {
                    I: Icon.Award,
                    t: "Certification Badges",
                    tag: "Trust",
                    d: "Upload Organic, Fair Trade, and GAP certifications stored on IPFS. Hashes recorded on-chain — forgery is impossible.",
                  },
                  {
                    I: Icon.Scale,
                    t: "Smart Contract Escrow",
                    tag: "Dispute",
                    d: "Payments locked on delivery confirmation. Disputes resolved by on-chain evidence — not opinions or intermediaries.",
                  },
                  {
                    I: Icon.Vote,
                    t: "Community Governance",
                    tag: "DAO",
                    d: "AGT holders vote on fee changes, features, and partnerships. No single entity controls the platform.",
                  },
                ].map((f) => (
                  <div key={f.t} className="fc">
                    <div className="fc-icon">
                      <f.I
                        width="28"
                        height="28"
                        style={{ color: "#4ab734" }}
                      />
                    </div>
                    <div>
                      <div className="fc-title">
                        {f.t}
                        <span className="fc-tag">{f.tag}</span>
                      </div>
                      <div className="fc-desc">{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: "0 28px 64px",
                maxWidth: "780px",
                margin: "0 auto",
              }}
            >
              <div className="sec-head">
                <h2 className="sec-title">Frequently Asked Questions</h2>
              </div>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={"faq-item" + (openFaq === i ? " open" : "")}
                  onClick={() => toggleFaq(i)}
                >
                  <div className="faq-q">
                    {faq.q}
                    <div className="faq-ico">
                      <Icon.Plus width="12" height="12" />
                    </div>
                  </div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* DASHBOARD */}
          <div className={"view" + (view === "dashboard" ? " active" : "")}>
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "36px 28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "28px",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >
                <div>
                  <h1
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "36px",
                      color: "#c8dcc0",
                      marginBottom: "5px",
                    }}
                  >
                    Welcome back, Green Valley Farm
                  </h1>
                  <p style={{ color: "#4a6a44", fontSize: "14px" }}>
                    Farmer · Wallet:{" "}
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        color: "#5ab840",
                      }}
                    >
                      0x4A2...F8c
                    </span>{" "}
                    · <span style={{ color: "#7ed958" }}>Verified ✓</span>
                  </p>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  {[
                    { val: agtVal, lbl: "AGT Balance", c: "#7ed958" },
                    { val: "4.9★", lbl: "Quality Rating", c: "#dce8d4" },
                  ].map((k) => (
                    <div
                      key={k.lbl}
                      style={{
                        textAlign: "center",
                        background: "#07120a",
                        border: "1px solid rgba(74,183,52,.1)",
                        borderRadius: "12px",
                        padding: "12px 20px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Cormorant Garamond',serif",
                          fontSize: "22px",
                          fontWeight: 700,
                          color: k.c,
                        }}
                      >
                        {k.val}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#3a5234",
                          marginTop: "2px",
                        }}
                      >
                        {k.lbl}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="kpi-grid">
                {[
                  {
                    val: "7",
                    lbl: "Active Batches",
                    sub: "3 in transit",
                    c: "#5a8a5a",
                  },
                  {
                    val: "142",
                    lbl: "Total Delivered",
                    sub: "Last 12 months",
                    c: "#70b8ff",
                  },
                  {
                    val: "$4,820",
                    lbl: "Pending Payment",
                    sub: "In escrow",
                    c: "#f5b942",
                  },
                  { val: "0", lbl: "Disputes", sub: "All time", c: "#a8c9a0" },
                ].map((k) => (
                  <div key={k.lbl} className="kpi" style={{ color: k.c }}>
                    <div className="kpi-val">{k.val}</div>
                    <div className="kpi-lbl">{k.lbl}</div>
                    <div className="kpi-sub">{k.sub}</div>
                  </div>
                ))}
              </div>

              <div className="dash-grid">
                <div className="card" style={{ padding: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "18px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#c0d8b8",
                      }}
                    >
                      Active Batches
                    </h3>
                    <button
                      className="btnP"
                      style={{ padding: "7px 14px", fontSize: "12px" }}
                      onClick={() => toast("Opening batch registration…", "🌾")}
                    >
                      <Icon.Plus width="12" height="12" />
                      Register New
                    </button>
                  </div>
                  <table className="dtable">
                    <thead>
                      <tr>
                        <th>Batch ID</th>
                        <th>Crop</th>
                        <th>Qty</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          id: "BATCH-0x4A2F",
                          crop: "Organic Tomatoes",
                          qty: "2,400 kg",
                          status: "In Transit",
                          cls: "tag-a",
                        },
                        {
                          id: "BATCH-0x7B9E",
                          crop: "Avocados (Hass)",
                          qty: "1,500 kg",
                          status: "Delivered",
                          cls: "tag-g",
                        },
                        {
                          id: "BATCH-0x3C1D",
                          crop: "Sweet Potatoes",
                          qty: "800 kg",
                          status: "Warehoused",
                          cls: "tag-b",
                        },
                        {
                          id: "BATCH-0x9A4B",
                          crop: "Green Beans",
                          qty: "600 kg",
                          status: "Harvested",
                          cls: "tag-g",
                        },
                      ].map((r) => (
                        <tr key={r.id}>
                          <td className="mono">{r.id}</td>
                          <td style={{ color: "#c0d8b8" }}>{r.crop}</td>
                          <td style={{ color: "#7a9e73" }}>{r.qty}</td>
                          <td>
                            <span className={"tag " + r.cls}>{r.status}</span>
                          </td>
                          <td>
                            <span
                              className="dact"
                              onClick={() => showView("trace")}
                            >
                              View <Icon.ArrowUpRight width="11" height="11" />
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div className="card" style={{ padding: "22px" }}>
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#c0d8b8",
                        marginBottom: "14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Icon.Coins
                        width="16"
                        height="16"
                        style={{ color: "#f5b942" }}
                      />{" "}
                      AGT Rewards
                    </h3>
                    <div style={{ marginBottom: "12px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "6px",
                        }}
                      >
                        <span style={{ fontSize: "12px", color: "#6a8a60" }}>
                          Gold Tier Progress
                        </span>
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#7ed958",
                            fontWeight: 600,
                          }}
                        >
                          248 / 500
                        </span>
                      </div>
                      <div className="pbar">
                        <div className="pfill" style={{ width: "49.6%" }} />
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#2e4830",
                          marginTop: "4px",
                        }}
                      >
                        252 AGT to Platinum
                      </div>
                    </div>
                    {[
                      {
                        lbl: "Verified delivery",
                        when: "Today",
                        agt: "+12 AGT",
                      },
                      {
                        lbl: "Quality rating 5★",
                        when: "Yesterday",
                        agt: "+5 AGT",
                      },
                      { lbl: "Complete record", when: "Mar 06", agt: "+3 AGT" },
                    ].map((r, i, a) => (
                      <div
                        key={r.lbl}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "7px 0",
                          borderBottom:
                            i < a.length - 1
                              ? "1px solid rgba(255,255,255,.03)"
                              : "none",
                        }}
                      >
                        <div>
                          <div style={{ fontSize: "12px", color: "#b0c8a8" }}>
                            {r.lbl}
                          </div>
                          <div style={{ fontSize: "10px", color: "#2e4830" }}>
                            {r.when}
                          </div>
                        </div>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#7ed958",
                          }}
                        >
                          {r.agt}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="card" style={{ padding: "22px" }}>
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#c0d8b8",
                        marginBottom: "14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Icon.Award
                        width="16"
                        height="16"
                        style={{ color: "#7ed958" }}
                      />{" "}
                      Certifications
                    </h3>
                    {["Organic Certified", "Fair Trade", "GAP Compliant"].map(
                      (c) => (
                        <div
                          key={c}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "10px",
                          }}
                        >
                          <span style={{ fontSize: "13px", color: "#7a9e73" }}>
                            {c}
                          </span>
                          <span className="vbadge">
                            <Icon.Check width="10" height="10" />
                            ON-CHAIN
                          </span>
                        </div>
                      ),
                    )}
                    <button
                      className="btnO"
                      style={{
                        width: "100%",
                        padding: "9px",
                        fontSize: "13px",
                        justifyContent: "center",
                      }}
                      onClick={() => toast("Certificate upload opened", "📜")}
                    >
                      Upload Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRACE */}
          <div className={"view" + (view === "trace" ? " active" : "")}>
            <div
              style={{
                maxWidth: "900px",
                margin: "0 auto",
                padding: "36px 28px",
              }}
            >
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "40px",
                  color: "#c8dcc0",
                  marginBottom: "6px",
                }}
              >
                Trace a Batch
              </h1>
              <p style={{ color: "#4a6a44", marginBottom: "26px" }}>
                Scan a QR code or enter a batch ID — no wallet needed.
              </p>
              <div
                style={{ display: "flex", gap: "12px", marginBottom: "28px" }}
              >
                <div className="search-bar">
                  <Icon.Search
                    width="16"
                    height="16"
                    style={{ color: "#3a5634", flexShrink: 0 }}
                  />
                  <input
                    defaultValue="BATCH-0x4A2F"
                    placeholder="Enter Batch ID or paste QR data…"
                  />
                </div>
                <button
                  className="btnP"
                  onClick={() => toast("Searching on-chain…", "⛓")}
                >
                  <Icon.Search width="14" height="14" />
                  Search
                </button>
                <button
                  className="btnO"
                  onClick={() => toast("Camera activated", "📷")}
                >
                  <Icon.Camera width="14" height="14" />
                  Scan QR
                </button>
              </div>
              <div
                className="card"
                style={{ padding: "28px", marginBottom: "20px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "22px",
                          fontWeight: 700,
                          color: "#c8dcc0",
                        }}
                      >
                        Organic Tomatoes
                      </h2>
                      <span className="tag tag-a">In Transit</span>
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        color: "#4ab734",
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Icon.Link width="12" height="12" />
                      BATCH-0x4A2F
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}
                  >
                    <span className="vbadge">
                      <Icon.Award width="10" height="10" />
                      Organic
                    </span>
                    <span className="vbadge">
                      <Icon.Award width="10" height="10" />
                      Fair Trade
                    </span>
                    <span className="vbadge">
                      <Icon.Award width="10" height="10" />
                      GAP
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: "14px",
                    marginBottom: "24px",
                    background: "#05100a",
                    borderRadius: "12px",
                    padding: "18px",
                  }}
                >
                  {[
                    ["Farmer", "Green Valley Farm"],
                    ["Region", "Eastern Province, Rwanda"],
                    ["Harvest Date", "Mar 02, 2026"],
                    ["Quantity", "2,400 kg"],
                  ].map(function (item) {
                    return (
                      <div key={item[0]}>
                        <div
                          style={{
                            fontSize: "10px",
                            color: "#2e4a28",
                            textTransform: "uppercase",
                            letterSpacing: ".8px",
                            marginBottom: "4px",
                          }}
                        >
                          {item[0]}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "#c0d8b8",
                            fontWeight: 500,
                          }}
                        >
                          {item[1]}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#c0d8b8",
                    marginBottom: "18px",
                  }}
                >
                  Supply Chain Journey
                </h3>
                <div style={{ position: "relative" }}>
                  {[
                    {
                      I: Icon.Sprout,
                      lbl: "Harvested",
                      party: "Green Valley Farm",
                      date: "Mar 02, 2026",
                      time: "07:14 AM",
                      done: true,
                    },
                    {
                      I: Icon.Shield,
                      lbl: "Quality Inspected",
                      party: "AgriInspect Co.",
                      date: "Mar 03, 2026",
                      time: "10:30 AM",
                      done: true,
                    },
                    {
                      I: Icon.Warehouse,
                      lbl: "Warehoused",
                      party: "EastStore Logistics",
                      date: "Mar 04, 2026",
                      time: "02:00 PM",
                      done: true,
                    },
                    {
                      I: Icon.Truck,
                      lbl: "Dispatched",
                      party: "SwiftCargo Transport",
                      date: "Mar 07, 2026",
                      time: "06:45 AM",
                      done: true,
                    },
                    {
                      I: Icon.ShoppingCart,
                      lbl: "Retail Delivery",
                      party: "FreshMart Kigali",
                      date: "Pending",
                      time: "—",
                      done: false,
                    },
                  ].map((s, i, arr) => (
                    <div key={s.lbl} className="journey-step">
                      {i < arr.length - 1 && <div className="step-line" />}
                      <div
                        className={
                          "step-circle" + (s.done ? " done" : " pending")
                        }
                      >
                        <s.I
                          width="18"
                          height="18"
                          style={{ color: s.done ? "#4ab734" : "#3a5234" }}
                        />
                      </div>
                      <div
                        className={
                          "step-card" + (s.done ? " done" : " pending")
                        }
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "8px",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                fontSize: "14px",
                                fontWeight: 600,
                                color: "#c0d8b8",
                              }}
                            >
                              {s.lbl}
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                color: "#4a6a44",
                                marginTop: "2px",
                              }}
                            >
                              {s.party}
                            </div>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: "12px", color: "#8ab080" }}>
                              {s.date}
                            </div>
                            <div style={{ fontSize: "11px", color: "#3a5234" }}>
                              {s.time}
                            </div>
                          </div>
                          {s.done ? (
                            <span className="vbadge">
                              <Icon.Check width="10" height="10" />
                              ON-CHAIN
                            </span>
                          ) : (
                            <span
                              className="tag"
                              style={{
                                background: "#0e1a0e",
                                color: "#4a6a44",
                                border: "1px solid rgba(255,255,255,.05)",
                                fontSize: "10px",
                              }}
                            >
                              ⏳ PENDING
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MARKETPLACE */}
          <div className={"view" + (view === "marketplace" ? " active" : "")}>
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "36px 28px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginBottom: "24px",
                  flexWrap: "wrap",
                  gap: "14px",
                }}
              >
                <div>
                  <h1
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "40px",
                      color: "#c8dcc0",
                      marginBottom: "5px",
                    }}
                  >
                    Marketplace
                  </h1>
                  <p style={{ color: "#4a6a44" }}>
                    Browse verified crop batches — no middlemen, no guesswork.
                  </p>
                </div>
                <button
                  className="btnMkt"
                  onClick={() => toast("Listing your batch…", "📋")}
                >
                  <Icon.Plus width="14" height="14" />
                  List Your Batch
                </button>
              </div>
              <div className="filter-btns">
                <Icon.Filter
                  width="14"
                  height="14"
                  style={{ color: "#3a5234" }}
                />
                {[
                  "All",
                  "Organic",
                  "Fair Trade",
                  "GAP",
                  "Coffee",
                  "Grains",
                  "Fruits & Veg",
                ].map((f) => (
                  <button
                    key={f}
                    className={"fbtn" + (activeFilter === f ? " on" : "")}
                    onClick={() => {
                      setActiveFilter(f);
                      toast("Filtering by " + f, "🔎");
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="mlist-grid">
                {[
                  {
                    t: "Organic Maize",
                    f: "Sunrise Farms · Northern Province",
                    p: "0.42 USDC/kg",
                    q: "5,000",
                    b: ["Organic"],
                    r: 4.9,
                  },
                  {
                    t: "Premium Coffee Beans",
                    f: "Highland Growers · Western Province",
                    p: "3.10 USDC/kg",
                    q: "800",
                    b: ["Fair Trade", "Organic"],
                    r: 5.0,
                  },
                  {
                    t: "Sweet Potatoes",
                    f: "Valley Fresh Co. · Southern Province",
                    p: "0.28 USDC/kg",
                    q: "3,200",
                    b: ["GAP"],
                    r: 4.7,
                  },
                  {
                    t: "Avocados (Hass)",
                    f: "Green Valley Farm · Eastern Province",
                    p: "1.85 USDC/kg",
                    q: "1,500",
                    b: ["Organic", "Fair Trade"],
                    r: 4.8,
                  },
                ].map((m) => (
                  <div key={m.t} className="mcard">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "14px",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "#c8dcc0",
                            marginBottom: "4px",
                          }}
                        >
                          {m.t}
                        </h3>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#4a6a44",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Icon.Sprout
                            width="11"
                            height="11"
                            style={{ color: "#4ab734" }}
                          />
                          {m.f}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div className="mcard-price">{m.p}</div>
                        <div style={{ fontSize: "11px", color: "#3a5234" }}>
                          {m.q} kg available
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "7px",
                        marginBottom: "16px",
                        alignItems: "center",
                      }}
                    >
                      {m.b.map((b) => (
                        <span key={b} className="vbadge">
                          <Icon.Award width="10" height="10" />
                          {b}
                        </span>
                      ))}
                      <div
                        style={{
                          marginLeft: "auto",
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                          color: "#f5b942",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        <Icon.Star
                          width="13"
                          height="13"
                          style={{ color: "#f5b942" }}
                        />
                        {m.r}
                      </div>
                    </div>
                    <div
                      style={{
                        borderTop: "1px solid rgba(255,255,255,.04)",
                        paddingTop: "14px",
                        display: "flex",
                        gap: "9px",
                      }}
                    >
                      <button
                        className="btnMkt"
                        style={{
                          flex: 1,
                          padding: "10px",
                          fontSize: "13px",
                          justifyContent: "center",
                        }}
                        onClick={() =>
                          toast("Order placed for " + m.t + "!", "✅")
                        }
                      >
                        Place Order
                      </button>
                      <button
                        className="btnMktO"
                        style={{ padding: "10px 14px" }}
                        onClick={() => showView("trace")}
                      >
                        Trace <Icon.ArrowUpRight width="12" height="12" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: "24px",
                  background: "linear-gradient(135deg,#0a1c0c,#091810)",
                  border: "1px solid rgba(74,183,52,.15)",
                  borderRadius: "16px",
                  padding: "26px 30px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#c0d8b8",
                      marginBottom: "6px",
                    }}
                  >
                    B2B Supply Contracts
                  </h3>
                  <p style={{ color: "#4a6a44", fontSize: "13px" }}>
                    Set up recurring supply agreements with automatic smart
                    contract enforcement.
                  </p>
                </div>
                <button
                  className="btnMktO"
                  style={{ padding: "12px 22px" }}
                  onClick={() => toast("Contract builder opened!", "📄")}
                >
                  <Icon.ClipboardList width="15" height="15" />
                  Create Contract
                </button>
              </div>
            </div>
          </div>

          {/* GOVERNANCE */}
          <div className={"view" + (view === "governance" ? " active" : "")}>
            <div
              style={{
                maxWidth: "900px",
                margin: "0 auto",
                padding: "36px 28px",
              }}
            >
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "40px",
                  color: "#c8dcc0",
                  marginBottom: "6px",
                }}
              >
                Governance
              </h1>
              <p style={{ color: "#4a6a44", marginBottom: "26px" }}>
                AGT token holders shape the future of AgriChain. No single
                company controls the protocol.
              </p>
              <div className="gov-grid">
                {[
                  {
                    I: Icon.Coins,
                    val: "248 AGT",
                    lbl: "Your Voting Power",
                    sub: "0.03% of total",
                  },
                  {
                    I: Icon.ClipboardList,
                    val: "2",
                    lbl: "Active Proposals",
                    sub: "Voting open",
                  },
                  {
                    I: Icon.Vote,
                    val: "7",
                    lbl: "Your Votes Cast",
                    sub: "All time",
                  },
                ].map((k, i) => (
                  <div key={i} className="gov-kpi">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "8px",
                      }}
                    >
                      <k.I
                        width="22"
                        height="22"
                        style={{ color: "#4ab734" }}
                      />
                    </div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: "26px",
                        fontWeight: 700,
                        color: "#7ed958",
                        marginBottom: "4px",
                      }}
                    >
                      {k.val}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#c0d8b8",
                        fontWeight: 500,
                      }}
                    >
                      {k.lbl}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#3a5234",
                        marginTop: "3px",
                      }}
                    >
                      {k.sub}
                    </div>
                  </div>
                ))}
              </div>
              {[
                {
                  t: "Reduce platform fee from 1.5% to 1.2%",
                  tag: "Active",
                  tagC: "tag-a",
                  ends: "Mar 15, 2026",
                  pct: 68,
                  active: true,
                },
                {
                  t: "Add Swahili language support to mobile",
                  tag: "Passed",
                  tagC: "tag-g",
                  ends: "Mar 01, 2026",
                  pct: 91,
                  active: false,
                },
                {
                  t: "Partner with Kenya AgriBoard for certs",
                  tag: "Active",
                  tagC: "tag-a",
                  ends: "Mar 20, 2026",
                  pct: 55,
                  active: true,
                },
              ].map((p, i) => (
                <div key={i} className="prop-card">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "14px",
                      flexWrap: "wrap",
                      gap: "10px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#c0d8b8",
                        maxWidth: "490px",
                      }}
                    >
                      {p.t}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        gap: "9px",
                        alignItems: "center",
                      }}
                    >
                      <span className={"tag " + p.tagC}>{p.tag}</span>
                      <span style={{ fontSize: "11px", color: "#3a5234" }}>
                        Ends {p.ends}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "#8ab080" }}>
                      For: {p.pct}%
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a5234" }}>
                      Against: {100 - p.pct}%
                    </span>
                  </div>
                  <div className="vote-bar">
                    <div className="vote-fill" style={{ width: p.pct + "%" }} />
                  </div>
                  {p.active ? (
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "14px",
                      }}
                    >
                      <button
                        className="btnGov"
                        style={{
                          flex: 1,
                          padding: "10px",
                          fontSize: "13px",
                          justifyContent: "center",
                        }}
                        onClick={() =>
                          toast("Vote FOR recorded on-chain!", "✅")
                        }
                      >
                        <Icon.Check width="13" height="13" />
                        Vote For
                      </button>
                      <button
                        className="btnGovO"
                        style={{
                          flex: 1,
                          padding: "10px",
                          fontSize: "13px",
                          justifyContent: "center",
                        }}
                        onClick={() => toast("Vote AGAINST recorded", "⚠️")}
                      >
                        ✗ Vote Against
                      </button>
                    </div>
                  ) : (
                    <div
                      style={{
                        color: "#7ed958",
                        fontSize: "13px",
                        fontWeight: 500,
                        marginTop: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Icon.Check width="13" height="13" />
                      Proposal passed and implemented
                    </div>
                  )}
                </div>
              ))}
              <div
                className="card"
                style={{
                  marginTop: "16px",
                  padding: "22px 26px",
                  background: "linear-gradient(135deg,#09180c,#091510)",
                  border: "1px solid rgba(74,183,52,.12)",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#c0d8b8",
                    marginBottom: "7px",
                  }}
                >
                  Submit a New Proposal
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#3a5634",
                    marginBottom: "14px",
                  }}
                >
                  You need at least 50 AGT to submit a governance proposal.
                </p>
                <button
                  className="btnGov"
                  onClick={() => toast("Proposal builder opened!", "🗳")}
                >
                  <Icon.Plus width="14" height="14" />
                  Create Proposal
                </button>
              </div>
            </div>
          </div>

          <footer>
            <div className="foot-top">
              <div className="foot-brand">
                <div className="foot-logo">
                  <div className="foot-box">
                    <Icon.Leaf width="14" height="14" stroke="#4a7a3a" />
                  </div>
                  <span className="foot-name">AgriChain</span>
                </div>
                <p className="foot-tagline">
                  Blockchain-powered supply chain transparency for agriculture
                  across Africa.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div className="foot-col-title">Navigate</div>
                <div className="foot-links">
                  {[
                    { label: "Home", view: "home" },
                    { label: "Dashboard", view: "dashboard" },
                    { label: "Trace Batch", view: "trace" },
                    { label: "Marketplace", view: "marketplace" },
                    { label: "Governance", view: "governance" },
                  ].map((l) => (
                    <span
                      key={l.view}
                      className="foot-link"
                      onClick={() => showView(l.view)}
                    >
                      {l.label}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div className="foot-col-title">Contact</div>
                <div className="foot-contact">
                  <div className="foot-contact-item">
                    <Icon.Mail
                      width="12"
                      height="12"
                      style={{ color: "#3a5234", flexShrink: 0 }}
                    />
                    agrihash@gmail.com
                  </div>

                  <div className="foot-contact-item">
                    <Icon.Leaf
                      width="12"
                      height="12"
                      style={{ color: "#3a5234", flexShrink: 0 }}
                    />
                    Kigali, Rwanda
                  </div>
                </div>
              </div>
            </div>
            <div className="foot-bottom">
              <span className="foot-copy">
                © 2026 AgriChain. All rights reserved.
              </span>
              <span className="foot-built">Secured by AgriDevs</span>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

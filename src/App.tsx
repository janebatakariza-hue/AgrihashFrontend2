<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>AgriChain — From Field to Fork, Verified.</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Cormorant+Garamond:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<style>
/* ══════════════════════════════════════════
   RESET & BASE
══════════════════════════════════════════ */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;font-size:16px}
body{background:#040a05;font-family:'DM Sans',sans-serif;color:#dce8d4;overflow-x:hidden;min-height:100vh;cursor:none}
::-webkit-scrollbar{width:5px}
::-webkit-scrollbar-track{background:#040a05}
::-webkit-scrollbar-thumb{background:#1e4a18;border-radius:3px}
button,input{font-family:'DM Sans',sans-serif}
a{text-decoration:none;color:inherit}

/* ══════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════ */
#cursor-dot{position:fixed;width:6px;height:6px;background:#7ed958;border-radius:50%;pointer-events:none;z-index:10000;transition:transform .12s ease,background .2s;mix-blend-mode:screen}
#cursor-ring{position:fixed;width:32px;height:32px;border:1.5px solid rgba(126,217,88,.4);border-radius:50%;pointer-events:none;z-index:9999;transition:width .3s,height .3s,opacity .3s,border-color .3s;mix-blend-mode:screen}
body:has(button:hover) #cursor-ring,body:has(a:hover) #cursor-ring{width:48px;height:48px;border-color:rgba(126,217,88,.7)}
body:has(button:hover) #cursor-dot{transform:scale(2.5);background:#b0f060}

/* ══════════════════════════════════════════
   FIXED BG LAYERS
══════════════════════════════════════════ */
#bg-svg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:.55}
#bg-canvas{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}
.noise-overlay{position:fixed;inset:0;z-index:2;pointer-events:none;opacity:.025;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")}

/* ══════════════════════════════════════════
   AUTH PAGE
══════════════════════════════════════════ */
#auth-root{position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;background:#040a05;transition:opacity .5s ease,transform .5s ease}
#auth-root.leaving{opacity:0;transform:scale(1.04);pointer-events:none}

/* floating orbs */
.aorb{position:absolute;border-radius:50%;pointer-events:none;animation:aorbFloat linear infinite}
@keyframes aorbFloat{0%{transform:translateY(110vh) scale(.8);opacity:0}8%{opacity:1}90%{opacity:.6}100%{transform:translateY(-200px) scale(1.1);opacity:0}}

.auth-card{position:relative;width:980px;max-width:96vw;height:640px;border-radius:24px;overflow:hidden;display:flex;flex-direction:row;
  box-shadow:0 40px 120px rgba(0,0,0,.9),0 0 0 1px rgba(74,183,52,.15),inset 0 1px 0 rgba(255,255,255,.04);z-index:10}

/* Form side */
.aform-side{position:relative;width:50%;height:100%;background:linear-gradient(170deg,#0b1c0d 0%,#081408 100%);
  display:flex;align-items:center;justify-content:center;z-index:2;transition:margin-left .72s cubic-bezier(.77,0,.18,1)}
.auth-card.signup-mode .aform-side{margin-left:50%}
.aform-inner{width:100%;max-width:370px;padding:26px 38px;display:flex;flex-direction:column}

/* form slide anims */
.slide-out-l{animation:sOL .34s ease forwards}
.slide-in-r{animation:sIR .34s ease forwards}
.slide-out-r{animation:sOR .34s ease forwards}
.slide-in-l{animation:sIL .34s ease forwards}
@keyframes sOL{to{opacity:0;transform:translateX(-46px)}}
@keyframes sIR{from{opacity:0;transform:translateX(46px)}to{opacity:1;transform:translateX(0)}}
@keyframes sOR{to{opacity:0;transform:translateX(46px)}}
@keyframes sIL{from{opacity:0;transform:translateX(-46px)}to{opacity:1;transform:translateX(0)}}

/* logo */
.alogo{display:flex;align-items:center;gap:9px;margin-bottom:20px}
.alogo-box{width:38px;height:38px;background:linear-gradient(135deg,#4ab734,#1e6614);border-radius:10px;
  display:flex;align-items:center;justify-content:center;
  animation:logoMorph 4s ease-in-out infinite}
@keyframes logoMorph{0%,100%{border-radius:10px;box-shadow:0 0 0 0 rgba(74,183,52,0)}
  50%{border-radius:50%;box-shadow:0 0 20px rgba(74,183,52,.35)}}
.alogo-name{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:700;color:#e8f5e2;
  background:linear-gradient(90deg,#a8e078,#5ec440,#a8e078);background-size:200%;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  animation:shimmer 3.5s linear infinite}
@keyframes shimmer{0%{background-position:0%}100%{background-position:200%}}

.aform-title{font-size:26px;font-weight:700;color:#e8f5e2;margin-bottom:4px}
.aform-sub{font-size:13px;color:#486844;margin-bottom:16px}

/* role tabs */
.artabs{display:flex;gap:4px;margin-bottom:14px;background:#08120a;border:1px solid #162818;border-radius:10px;padding:3px}
.artab{flex:1;padding:6px 4px;border-radius:7px;border:none;background:transparent;color:#324e34;
  font-size:11px;font-weight:600;cursor:pointer;transition:all .22s;display:flex;align-items:center;justify-content:center;gap:4px}
.artab.on{background:linear-gradient(135deg,rgba(74,183,52,.18),rgba(30,102,20,.12));color:#7ed958;
  border:1px solid rgba(74,183,52,.22);box-shadow:0 2px 12px rgba(74,183,52,.08)}

/* inputs */
.ainwrap{position:relative;width:100%;margin-bottom:10px}
.ainwrap svg{position:absolute;left:13px;top:50%;transform:translateY(-50%);pointer-events:none;transition:stroke .2s}
.ain{width:100%;height:44px;padding:0 14px 0 42px;background:#08120a;border:1.5px solid #162818;
  border-radius:11px;color:#e8f5e2;font-size:14px;outline:none;transition:all .22s}
.ain:focus{border-color:#4ab734;background:#0a1a0c;box-shadow:0 0 0 3px rgba(74,183,52,.08)}
.ain:focus + svg, .ainwrap:focus-within svg{stroke:#5ab840 !important}
.ain::placeholder{color:#2e4830}
.arow2{display:flex;gap:10px;margin-bottom:10px}
.arow2 .ainwrap{margin-bottom:0;flex:1}

.aforgot{font-size:12px;color:#2e4830;text-align:right;cursor:pointer;margin:-6px 0 14px;
  transition:color .18s;display:block}
.aforgot:hover{color:#7ed958}

/* buttons */
.abtn{width:100%;height:44px;background:linear-gradient(135deg,#4ab734,#1e6614);color:#fff;border:none;
  border-radius:11px;font-size:15px;font-weight:700;cursor:pointer;transition:all .25s;
  letter-spacing:.3px;position:relative;overflow:hidden}
.abtn::before{content:'';position:absolute;top:-50%;left:-60%;width:40%;height:200%;
  background:linear-gradient(105deg,transparent,rgba(255,255,255,.2),transparent);
  transform:skewX(-20deg);transition:left .5s}
.abtn:hover::before{left:130%}
.abtn:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(74,183,52,.4)}
.abtn:active{transform:translateY(0)}

.adivider{display:flex;align-items:center;gap:12px;margin:14px 0}
.adivline{flex:1;height:1px;background:#111e14}
.adivtxt{font-size:11px;color:#243826;white-space:nowrap}

.agbtn{width:100%;height:44px;background:#08120a;border:1.5px solid #162818;border-radius:11px;
  color:#6a8e62;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;
  gap:9px;transition:all .22s}
.agbtn:hover{border-color:#4ab734;background:#0a1a0c;color:#b8e8b0}

.aswlink{font-size:12px;color:#2e4830;text-align:center;margin-top:14px}
.aswlink b{color:#7ed958;font-weight:600;cursor:pointer;transition:color .18s}
.aswlink b:hover{color:#a8f070}

.achkrow{display:flex;align-items:flex-start;gap:7px;margin:0 0 10px}
.achkrow input{accent-color:#4ab734;width:15px;height:15px;margin-top:2px;flex-shrink:0;cursor:pointer}
.achkrow label{font-size:12px;color:#3e5e40;cursor:pointer;line-height:1.5}
.achkrow a{color:#7ed958}

/* deco side */
.adeco{position:absolute;top:0;right:0;width:50%;height:100%;
  background:linear-gradient(160deg,#0b2e12 0%,#082010 50%,#030e05 100%);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:40px 36px;overflow:hidden;transition:transform .72s cubic-bezier(.77,0,.18,1);z-index:30}
.adeco.to-left{transform:translateX(-100%)}

.adot{position:absolute;border-radius:50%;background:#d4a843;animation:adotPulse ease-in-out infinite}
@keyframes adotPulse{0%,100%{opacity:.08;transform:scale(.7)}50%{opacity:.5;transform:scale(1.2)}}

.adeco-inner{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;width:100%}
.adeco-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(74,183,52,.08);
  border:1px solid rgba(74,183,52,.2);border-radius:30px;padding:7px 16px;margin-bottom:20px;
  font-size:12px;color:#7ed958;font-weight:600;letter-spacing:.4px}
.adeco-title{font-family:'Cormorant Garamond',serif;font-size:36px;color:#e8f5e2;
  text-align:center;line-height:1.12;margin-bottom:12px}
.adeco-sub{font-size:13px;color:#4a7a4a;text-align:center;line-height:1.7;max-width:240px;margin-bottom:24px}
.adeco-ghost{padding:12px 30px;background:transparent;border:1.5px solid rgba(126,217,88,.4);
  border-radius:11px;color:#7ed958;font-size:14px;font-weight:600;cursor:pointer;
  transition:all .24s;letter-spacing:.3px;position:relative;overflow:hidden}
.adeco-ghost::before{content:'';position:absolute;top:-50%;left:-60%;width:40%;height:200%;
  background:linear-gradient(105deg,transparent,rgba(126,217,88,.15),transparent);
  transform:skewX(-20deg);transition:left .4s}
.adeco-ghost:hover::before{left:130%}
.adeco-ghost:hover{background:rgba(74,183,52,.12);border-color:#7ed958;transform:translateY(-1px)}

.astrow{display:flex;gap:10px;margin-top:22px;width:100%}
.astcell{flex:1;background:rgba(255,255,255,.025);border:1px solid rgba(74,183,52,.1);
  border-radius:10px;padding:10px 6px;text-align:center;transition:all .3s}
.astcell:hover{border-color:rgba(74,183,52,.3);background:rgba(74,183,52,.05);transform:translateY(-2px)}
.astval{font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:700;color:#7ed958}
.astlbl{font-size:9px;color:#2e4830;margin-top:2px;text-transform:uppercase;letter-spacing:.6px}

.adeco-wave{position:absolute;bottom:0;left:0;width:100%;opacity:.07;pointer-events:none}

/* success overlay */
.asuccess{position:absolute;inset:0;background:rgba(4,10,5,.96);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  z-index:200;animation:afadeIn .38s ease}
@keyframes afadeIn{from{opacity:0}to{opacity:1}}
.asuc-icon{width:80px;height:80px;background:linear-gradient(135deg,#4ab734,#1e6614);
  border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;
  animation:aPop .5s cubic-bezier(.34,1.56,.64,1)}
@keyframes aPop{from{transform:scale(0)}to{transform:scale(1)}}
.asuc-rings{position:absolute;width:80px;height:80px}
.asuc-rings::before,.asuc-rings::after{content:'';position:absolute;inset:-10px;border-radius:50%;
  border:1px solid rgba(74,183,52,.3);animation:ringExpand 2s ease-in-out infinite}
.asuc-rings::after{inset:-20px;animation-delay:.4s}
@keyframes ringExpand{0%{opacity:.8;transform:scale(1)}100%{opacity:0;transform:scale(1.4)}}

/* ══════════════════════════════════════════
   APP ROOT
══════════════════════════════════════════ */
#app-root{position:relative;z-index:5;min-height:100vh;opacity:0;transform:translateY(16px);
  transition:opacity .6s ease,transform .6s ease}
#app-root.visible{opacity:1;transform:translateY(0)}

/* ══════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════ */
nav{position:sticky;top:0;z-index:400;height:62px;display:flex;align-items:center;
  justify-content:space-between;padding:0 28px;
  background:rgba(4,10,5,.85);backdrop-filter:blur(24px);
  border-bottom:1px solid rgba(74,183,52,.07);
  animation:navDrop .7s cubic-bezier(.22,1,.36,1) both}
@keyframes navDrop{from{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}

.logo{display:flex;align-items:center;gap:9px;cursor:pointer}
.logo-box{width:34px;height:34px;background:linear-gradient(135deg,#4ab734,#1a5210);
  border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:16px;
  animation:logoMorph 4s ease-in-out infinite}
.logo-name{font-family:'Cormorant Garamond',serif;font-size:21px;font-weight:700;
  background:linear-gradient(90deg,#a8e078,#5ec440,#a8e078);background-size:200%;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  animation:shimmer 3.5s linear infinite}
.nav-badge{font-size:10px;color:#4ab734;background:rgba(74,183,52,.08);
  padding:2px 8px;border-radius:20px;border:1px solid rgba(74,183,52,.18);font-weight:600;
  animation:badgePulse 2s ease-in-out infinite}
@keyframes badgePulse{0%,100%{box-shadow:0 0 0 0 rgba(74,183,52,0)}50%{box-shadow:0 0 0 4px rgba(74,183,52,.07)}}

.navlinks{display:flex;gap:2px}
.nl{padding:7px 14px;border-radius:7px;font-size:13px;font-weight:500;color:#5a8050;
  cursor:pointer;border:none;background:transparent;position:relative;overflow:hidden;
  transition:color .25s;white-space:nowrap}
.nl::before{content:'';position:absolute;bottom:0;left:50%;width:0;height:1.5px;
  background:linear-gradient(90deg,transparent,#4ab734,transparent);
  transform:translateX(-50%);transition:width .3s}
.nl::after{content:'';position:absolute;inset:0;
  background:radial-gradient(circle at 50% 100%,rgba(74,183,52,.1),transparent 70%);
  opacity:0;transition:opacity .3s}
.nl:hover,.nl.on{color:#7ed958}
.nl:hover::before,.nl.on::before{width:80%}
.nl:hover::after,.nl.on::after{opacity:1}
.nl.on{color:#7ed958}

.navr{display:flex;align-items:center;gap:9px}
.wpill{display:flex;align-items:center;gap:6px;background:#07120a;
  border:1px solid rgba(74,183,52,.12);border-radius:8px;padding:6px 12px;cursor:pointer;
  transition:all .22s}
.wpill:hover{border-color:rgba(74,183,52,.3);background:#0a1a0c}
.wdot{width:6px;height:6px;background:#4ab734;border-radius:50%;
  animation:wdotPulse 2s ease-in-out infinite}
@keyframes wdotPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.7);opacity:.4}}
.wa{font-size:12px;color:#5a7a50}
.wb{font-size:12px;color:#7ed958;font-weight:600;font-family:'JetBrains Mono',monospace}

.btnP{background:linear-gradient(135deg,#4ab734,#1e6614);color:#fff;border:none;
  padding:8px 16px;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;
  position:relative;overflow:hidden;transition:all .22s}
.btnP::before{content:'';position:absolute;top:-50%;left:-60%;width:40%;height:200%;
  background:linear-gradient(105deg,transparent,rgba(255,255,255,.18),transparent);
  transform:skewX(-20deg);transition:left .5s}
.btnP:hover::before{left:130%}
.btnP:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(74,183,52,.35)}
.btnO{background:transparent;color:#5a7a50;border:1px solid rgba(74,183,52,.18);
  padding:7px 14px;border-radius:8px;font-size:13px;cursor:pointer;transition:all .22s}
.btnO:hover{color:#a8d490;border-color:rgba(74,183,52,.4);background:rgba(74,183,52,.05)}

/* ══════════════════════════════════════════
   TICKER
══════════════════════════════════════════ */
.ticker-wrap{overflow:hidden;border-top:1px solid rgba(74,183,52,.05);
  border-bottom:1px solid rgba(74,183,52,.05);background:rgba(4,10,5,.9);padding:9px 0;
  position:relative;z-index:5}
.ticker-track{display:flex;animation:tickScroll 32s linear infinite;white-space:nowrap}
.ticker-track:hover{animation-play-state:paused}
.titem{display:inline-flex;align-items:center;gap:7px;padding:0 24px;font-size:12px;color:#354e30;
  border-right:1px solid rgba(74,183,52,.06)}
.titem-val{color:#5a8a4a;font-weight:600;font-family:'JetBrains Mono',monospace}
.titem-dot{width:4px;height:4px;border-radius:50%;background:#4ab734;opacity:.6;
  animation:tdotBreath 2s ease-in-out infinite}
@keyframes tdotBreath{0%,100%{opacity:.2}50%{opacity:.8}}
@keyframes tickScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

/* ══════════════════════════════════════════
   VIEW WRAPPER & TRANSITIONS
══════════════════════════════════════════ */
.view{display:none;animation:viewIn .4s cubic-bezier(.22,1,.36,1) both}
.view.active{display:block}
@keyframes viewIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}

/* ══════════════════════════════════════════
   SHARED CARDS / UTILS
══════════════════════════════════════════ */
.card{background:#08140a;border:1px solid rgba(255,255,255,.04);border-radius:16px}
.card-h{transition:all .3s cubic-bezier(.34,1.3,.64,1)}
.card-h:hover{border-color:rgba(74,183,52,.22);transform:translateY(-4px);
  box-shadow:0 16px 40px rgba(0,0,0,.5),0 0 0 1px rgba(74,183,52,.08)}
.tag{display:inline-flex;align-items:center;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600}
.tag-g{background:rgba(74,183,52,.12);color:#7ed958;border:1px solid rgba(74,183,52,.25)}
.tag-a{background:rgba(255,180,50,.1);color:#f5b942;border:1px solid rgba(255,180,50,.2)}
.tag-b{background:rgba(80,160,255,.1);color:#70b8ff;border:1px solid rgba(80,160,255,.2)}
.vbadge{display:inline-flex;align-items:center;gap:4px;background:rgba(74,183,52,.1);
  color:#7ed958;border:1px solid rgba(74,183,52,.22);border-radius:20px;
  padding:3px 9px;font-size:11px;font-weight:700;letter-spacing:.4px}

.sec{padding:0 28px 64px;max-width:1100px;margin:0 auto;position:relative;z-index:5}
.sec-title{font-family:'Cormorant Garamond',serif;font-size:42px;color:#c8dcc0;text-align:center;
  margin-bottom:10px;position:relative;display:inline-block}
.sec-title::after{content:'';position:absolute;bottom:-6px;left:0;width:0;height:2px;
  background:linear-gradient(90deg,#4ab734,transparent);transition:width 1s .2s ease}
.vis .sec-title::after{width:100%}
.sec-sub{font-size:14px;color:#3a5a34;text-align:center;margin-top:8px;margin-bottom:46px}
.sec-head{text-align:center;margin-bottom:46px}

/* scroll reveal */
.rev{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
.vis{opacity:1;transform:translateY(0)}

/* stagger */
.vis .s1{animation:cardIn .55s .05s cubic-bezier(.34,1.4,.64,1) both}
.vis .s2{animation:cardIn .55s .12s cubic-bezier(.34,1.4,.64,1) both}
.vis .s3{animation:cardIn .55s .19s cubic-bezier(.34,1.4,.64,1) both}
.vis .s4{animation:cardIn .55s .26s cubic-bezier(.34,1.4,.64,1) both}
.vis .s5{animation:cardIn .55s .33s cubic-bezier(.34,1.4,.64,1) both}
.vis .s6{animation:cardIn .55s .40s cubic-bezier(.34,1.4,.64,1) both}
@keyframes cardIn{from{opacity:0;transform:translateY(20px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}

/* progress bars */
.pbar{height:7px;border-radius:4px;background:#0e2010;overflow:hidden}
.pfill{height:100%;border-radius:4px;background:linear-gradient(90deg,#4ab734,#7ed958);
  transform:scaleX(0);transform-origin:left;transition:transform 1.2s cubic-bezier(.22,1,.36,1)}
.vis .pfill{transform:scaleX(1)}

/* gradient text */
.gtext{background:linear-gradient(135deg,#b8f080,#6ed440,#9ae060);
  background-size:300%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;
  background-clip:text;animation:gradFlow 4s linear infinite}
@keyframes gradFlow{0%{background-position:0%}100%{background-position:300%}}

/* glow effects */
.glow-g{box-shadow:0 0 30px rgba(74,183,52,.1)}

/* ══════════════════════════════════════════
   HOME — HERO
══════════════════════════════════════════ */
.hero{position:relative;min-height:560px;display:flex;flex-direction:column;
  align-items:center;justify-content:center;text-align:center;padding:80px 28px 60px;overflow:hidden;z-index:5}
.hero-glow{position:absolute;top:-120px;left:50%;transform:translateX(-50%);
  width:700px;height:500px;pointer-events:none;
  background:radial-gradient(ellipse,rgba(74,183,52,.07) 0%,transparent 70%);
  animation:heroGlowPulse 5s ease-in-out infinite}
@keyframes heroGlowPulse{0%,100%{transform:translateX(-50%) scale(1);opacity:.7}50%{transform:translateX(-50%) scale(1.15);opacity:1}}
.hero-bg-lines{position:absolute;inset:0;pointer-events:none;overflow:hidden;opacity:.12}

.hero-chip{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.025);
  border:1px solid rgba(74,183,52,.15);border-radius:30px;padding:7px 18px;margin-bottom:26px;
  font-size:12px;color:#5a8050;animation:chipIn .9s .2s cubic-bezier(.34,1.56,.64,1) both}
@keyframes chipIn{from{opacity:0;transform:translateY(-20px) scale(.8)}to{opacity:1;transform:translateY(0) scale(1)}}
.chip-dot{width:7px;height:7px;border-radius:50%;background:#4ab734;
  box-shadow:0 0 8px #4ab734;animation:chipDotPulse 1.8s ease-in-out infinite}
@keyframes chipDotPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.5);opacity:.5}}

.hero-h{font-family:'Cormorant Garamond',serif;font-size:68px;font-weight:700;
  line-height:1.08;margin-bottom:22px}
.hl1{display:block;animation:hl1In 1s .4s cubic-bezier(.22,1,.36,1) both}
@keyframes hl1In{from{opacity:0;transform:translateX(-50px) skewX(-6deg)}to{opacity:1;transform:translateX(0) skewX(0)}}
.hl2{display:block;color:#9ab890;animation:hl2In 1s .6s cubic-bezier(.22,1,.36,1) both}
@keyframes hl2In{from{opacity:0;transform:translateX(50px) skewX(6deg)}to{opacity:1;transform:translateX(0) skewX(0)}}

.hero-p{font-size:17px;color:#4a6a44;max-width:490px;margin:0 auto 36px;line-height:1.82;
  animation:fadeUp 1s .8s ease both}
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

.hbtns{display:flex;gap:12px;justify-content:center;margin-bottom:10px;animation:fadeUp .9s 1s ease both}
.hbp{background:linear-gradient(135deg,#4ab734,#1e6614);color:#fff;border:none;
  padding:14px 34px;border-radius:10px;font-weight:700;font-size:15px;cursor:pointer;
  position:relative;overflow:hidden;transition:all .28s}
.hbp::before{content:'';position:absolute;top:-50%;left:-60%;width:40%;height:200%;
  background:linear-gradient(105deg,transparent,rgba(255,255,255,.18),transparent);
  transform:skewX(-20deg);transition:left .5s}
.hbp:hover::before{left:130%}
.hbp:hover{transform:translateY(-3px);box-shadow:0 14px 40px rgba(74,183,52,.38)}
.hbo{background:transparent;color:#6a8a60;border:1px solid rgba(255,255,255,.09);
  padding:13px 28px;border-radius:10px;font-weight:500;font-size:15px;cursor:pointer;
  transition:all .25s;position:relative;overflow:hidden}
.hbo::after{content:'';position:absolute;inset:0;
  background:radial-gradient(circle at 50% 50%,rgba(74,183,52,.1),transparent 70%);
  opacity:0;transform:scale(0);transition:opacity .3s,transform .5s}
.hbo:hover::after{opacity:1;transform:scale(1)}
.hbo:hover{color:#a8d490;border-color:rgba(255,255,255,.18)}
.hnote{font-size:11px;color:#243826;animation:fadeUp .8s 1.2s ease both}

/* ══════════════════════════════════════════
   STATS GRID
══════════════════════════════════════════ */
.sgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.sc{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:14px;
  padding:20px;position:relative;overflow:hidden;cursor:default;
  transition:transform .35s cubic-bezier(.34,1.4,.64,1),border-color .3s,box-shadow .3s}
.sc:hover{transform:translateY(-6px) scale(1.025);border-color:rgba(74,183,52,.22);
  box-shadow:0 20px 50px rgba(0,0,0,.5),0 0 30px rgba(74,183,52,.07)}
.sc-glow{position:absolute;width:100px;height:100px;border-radius:50%;
  background:radial-gradient(circle,rgba(74,183,52,.1),transparent 70%);
  top:-24px;right:-24px;animation:glowDrift 4s ease-in-out infinite alternate}
@keyframes glowDrift{from{transform:translate(0,0) scale(1)}to{transform:translate(-8px,8px) scale(1.2)}}
.sc-sweep{position:absolute;top:0;left:-100%;width:60%;height:100%;
  background:linear-gradient(105deg,transparent,rgba(255,255,255,.025),transparent);
  animation:sweep 4s ease-in-out infinite}
@keyframes sweep{0%{left:-100%}100%{left:160%}}
.sc-bar{position:absolute;bottom:0;left:0;height:2px;
  background:linear-gradient(90deg,#4ab734,transparent);width:0;transition:width .6s ease}
.sc:hover .sc-bar{width:100%}
.sc-icon{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;
  justify-content:center;margin-bottom:12px;font-size:16px;
  background:rgba(74,183,52,.07);border:1px solid rgba(74,183,52,.12);transition:all .35s}
.sc:hover .sc-icon{transform:rotate(8deg) scale(1.15);background:rgba(74,183,52,.14)}
.scv{font-family:'Cormorant Garamond',serif;font-size:30px;font-weight:700;color:#b8d4b0;
  margin-bottom:2px;transition:color .3s}
.sc:hover .scv{color:#a0f060}
.scl{font-size:12px;color:#3a5834}
.scd{font-size:11px;color:#3a7830;margin-top:5px;font-weight:600;
  animation:dBreath 2.5s ease-in-out infinite}
@keyframes dBreath{0%,100%{opacity:.5}50%{opacity:1}}

/* ══════════════════════════════════════════
   ROLES GRID
══════════════════════════════════════════ */
.rgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.rc{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:14px;
  padding:26px;position:relative;overflow:hidden;cursor:default;
  transition:all .4s cubic-bezier(.34,1.3,.64,1)}
.rc::before{content:'';position:absolute;inset:0;
  background:radial-gradient(ellipse at 50% -10%,rgba(74,183,52,.07),transparent 55%);
  opacity:0;transition:opacity .4s}
.rc::after{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,rgba(74,183,52,.3),transparent);
  transform:translateX(-100%);transition:transform .6s}
.rc:hover{transform:translateY(-5px) scale(1.015);border-color:rgba(74,183,52,.18)}
.rc:hover::before{opacity:1}
.rc:hover::after{transform:translateX(100%)}
.rc-icon{width:44px;height:44px;border-radius:11px;display:flex;align-items:center;
  justify-content:center;margin-bottom:14px;font-size:22px;
  background:rgba(74,183,52,.06);border:1px solid rgba(74,183,52,.1);transition:all .5s cubic-bezier(.34,1.5,.64,1)}
.rc:hover .rc-icon{transform:rotate(-10deg) scale(1.2);background:rgba(74,183,52,.14)}
.rc-title{font-size:15px;font-weight:600;color:#a8c4a0;margin-bottom:7px}
.rc-desc{font-size:13px;color:#3a5634;line-height:1.75}

/* chain flow */
.chain-flow{display:flex;align-items:center;justify-content:center;padding:20px 0}
.cf-step{display:flex;flex-direction:column;align-items:center;gap:8px;flex:1}
.cf-node{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;
  justify-content:center;background:#07120a;border:2px solid rgba(74,183,52,.22);
  font-size:20px;position:relative;transition:all .35s;cursor:default}
.cf-node::before{content:'';position:absolute;inset:-5px;border-radius:50%;
  border:1px solid rgba(74,183,52,.08);animation:nodeRing 2.5s ease-in-out infinite}
@keyframes nodeRing{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.12);opacity:.1}}
.cf-node:hover{transform:scale(1.15);border-color:rgba(74,183,52,.5);
  box-shadow:0 0 20px rgba(74,183,52,.15)}
.cf-label{font-size:10px;color:#3a5834;font-weight:500;text-align:center}
.cf-arrow{display:flex;align-items:center;padding:0 4px;flex-shrink:0;font-size:14px;color:#1e3a1e}
.cf-arrow span{animation:arrowPulse 1.5s ease-in-out infinite}
@keyframes arrowPulse{0%,100%{transform:translateX(0);opacity:.3}50%{transform:translateX(5px);opacity:.9}}

/* features */
.fgrid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.fc{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:14px;
  padding:26px;display:flex;gap:18px;align-items:flex-start;
  transition:all .35s cubic-bezier(.22,1,.36,1);position:relative;overflow:hidden}
.fc::before{content:'';position:absolute;bottom:0;right:0;width:80px;height:80px;
  border-radius:50%;background:radial-gradient(circle,rgba(74,183,52,.06),transparent 70%);
  transform:translate(20px,20px);transition:all .5s}
.fc:hover::before{transform:translate(-10px,-10px) scale(1.5)}
.fc:hover{border-color:rgba(74,183,52,.18);transform:translateY(-3px)}
.fc-icon{width:46px;height:46px;border-radius:12px;display:flex;align-items:center;
  justify-content:center;flex-shrink:0;font-size:22px;
  background:rgba(74,183,52,.06);border:1px solid rgba(74,183,52,.1);transition:all .5s}
.fc:hover .fc-icon{transform:rotate(12deg) scale(1.15);background:rgba(74,183,52,.13)}
.fc-title{font-size:15px;font-weight:600;color:#a8c4a0;margin-bottom:7px;
  display:flex;align-items:center;gap:8px}
.fc-tag{font-size:9px;font-weight:700;letter-spacing:.5px;
  background:rgba(74,183,52,.07);color:#4a8040;border:1px solid rgba(74,183,52,.12);
  padding:2px 7px;border-radius:20px}
.fc-desc{font-size:13px;color:#3a5634;line-height:1.75}

/* faq */
.faq-item{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:12px;
  padding:18px 20px;margin-bottom:9px;cursor:pointer;transition:all .3s;
  position:relative;overflow:hidden}
.faq-item::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;
  background:linear-gradient(180deg,#4ab734,transparent);transform:scaleY(0);
  transform-origin:top;transition:transform .4s}
.faq-item:hover::before,.faq-item.open::before{transform:scaleY(1)}
.faq-item:hover{border-color:rgba(74,183,52,.12)}
.faq-item.open{border-color:rgba(74,183,52,.2);background:#091510}
.faq-q{font-size:14px;font-weight:600;color:#8ab080;display:flex;justify-content:space-between;align-items:center;gap:10px}
.faq-ico{width:22px;height:22px;border-radius:50%;background:rgba(74,183,52,.07);
  display:flex;align-items:center;justify-content:center;flex-shrink:0;
  transition:all .35s;font-size:12px}
.faq-item.open .faq-ico{transform:rotate(135deg);background:rgba(74,183,52,.16);color:#7ed958}
.faq-a{font-size:13px;color:#3a5634;line-height:1.82;max-height:0;overflow:hidden;
  transition:max-height .45s cubic-bezier(.22,1,.36,1),margin-top .3s,opacity .3s;opacity:0}
.faq-item.open .faq-a{max-height:200px;margin-top:12px;opacity:1}

/* ══════════════════════════════════════════
   DASHBOARD
══════════════════════════════════════════ */
.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px}
.kpi{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:14px;
  padding:20px;position:relative;overflow:hidden;cursor:default;transition:all .3s}
.kpi:hover{border-color:rgba(74,183,52,.22);transform:translateY(-3px)}
.kpi::after{content:'';position:absolute;bottom:0;left:0;height:2px;
  background:linear-gradient(90deg,currentColor,transparent);width:0;transition:width .6s}
.kpi:hover::after{width:100%}
.kpi-val{font-family:'Cormorant Garamond',serif;font-size:30px;font-weight:700;margin-bottom:4px}
.kpi-lbl{font-size:13px;color:#d0e4c8;font-weight:500}
.kpi-sub{font-size:11px;color:#3a5234;margin-top:4px}

.dash-grid{display:grid;grid-template-columns:2fr 1fr;gap:20px}

/* table */
.dtable{width:100%;border-collapse:collapse}
.dtable th{text-align:left;padding:8px 10px;font-size:11px;color:#3a5234;font-weight:600;
  letter-spacing:.6px;text-transform:uppercase;border-bottom:1px solid rgba(74,183,52,.07)}
.dtable td{padding:12px 10px;border-bottom:1px solid rgba(255,255,255,.025);transition:background .2s}
.dtable tr:hover td{background:rgba(74,183,52,.025)}
.dtable tr:last-child td{border-bottom:none}
.mono{font-family:'JetBrains Mono',monospace;font-size:12px;color:#5ab840}
.dtable-action{font-size:12px;color:#4ab734;cursor:pointer;
  transition:all .2s;padding:4px 8px;border-radius:5px;border:1px solid transparent}
.dtable-action:hover{border-color:rgba(74,183,52,.3);background:rgba(74,183,52,.07)}

/* ══════════════════════════════════════════
   TRACE
══════════════════════════════════════════ */
.search-bar{display:flex;align-items:center;background:#07120a;border:1.5px solid #162018;
  border-radius:12px;padding:12px 18px;gap:10px;transition:border-color .2s;flex:1}
.search-bar:focus-within{border-color:#4ab734;box-shadow:0 0 0 3px rgba(74,183,52,.07)}
.search-bar input{flex:1;background:none;border:none;outline:none;color:#e0ecda;
  font-size:14px;font-family:'JetBrains Mono',monospace}
.search-bar input::placeholder{color:#2a4228;font-family:'DM Sans',sans-serif}

.journey-step{display:flex;gap:16px;margin-bottom:8px;position:relative}
.step-line{position:absolute;left:19px;top:40px;bottom:-20px;width:2px;
  background:linear-gradient(to bottom,#1e4018,#0e2010)}
.step-circle{width:40px;height:40px;border-radius:50%;flex-shrink:0;display:flex;
  align-items:center;justify-content:center;font-size:18px;z-index:1;transition:all .3s}
.step-circle.done{background:rgba(74,183,52,.12);border:2px solid #4ab734}
.step-circle.pending{background:#08120a;border:2px solid #1e3220;opacity:.5}
.step-card{flex:1;background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:14px;
  padding:14px 18px;margin-bottom:12px;transition:all .3s}
.step-card.done:hover{border-color:rgba(74,183,52,.25)}
.step-card.pending{opacity:.55}

/* ══════════════════════════════════════════
   MARKETPLACE
══════════════════════════════════════════ */
.filter-btns{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px;align-items:center}
.fbtn{padding:7px 16px;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;
  font-family:inherit;transition:all .22s;border:1.5px solid;
  border-color:rgba(74,183,52,.12);color:#4a6a44;background:transparent}
.fbtn:hover{border-color:rgba(74,183,52,.3);color:#7ed958;background:rgba(74,183,52,.05)}
.fbtn.on{background:rgba(74,183,52,.12);border-color:#4ab734;color:#7ed958}
.mlist-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.mcard{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:16px;
  padding:24px;transition:all .3s cubic-bezier(.34,1.3,.64,1)}
.mcard:hover{border-color:rgba(74,183,52,.22);transform:translateY(-4px);
  box-shadow:0 18px 48px rgba(0,0,0,.5)}
.mcard-price{font-size:21px;font-weight:700;color:#7ed958;font-family:'Cormorant Garamond',serif}
.mcard-rating{color:#f5b942;font-size:14px;font-weight:600}

/* ══════════════════════════════════════════
   GOVERNANCE
══════════════════════════════════════════ */
.gov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:28px}
.gov-kpi{text-align:center;background:#07120a;border:1px solid rgba(255,255,255,.04);
  border-radius:14px;padding:20px;transition:all .3s}
.gov-kpi:hover{border-color:rgba(74,183,52,.2);transform:translateY(-3px)}
.prop-card{background:#07120a;border:1px solid rgba(255,255,255,.04);border-radius:14px;
  padding:24px;margin-bottom:14px;transition:all .3s}
.prop-card:hover{border-color:rgba(74,183,52,.16)}
.vote-bar{height:9px;border-radius:5px;background:#0c1e0e;overflow:hidden;margin-bottom:8px}
.vote-fill{height:100%;border-radius:5px;background:linear-gradient(90deg,#4ab734,#7ed958);
  transform:scaleX(0);transform-origin:left;transition:transform 1.2s .2s cubic-bezier(.22,1,.36,1)}
.vis .vote-fill{transform:scaleX(1)}

/* ══════════════════════════════════════════
   TOAST
══════════════════════════════════════════ */
#toast{position:fixed;top:80px;right:24px;z-index:999;pointer-events:none}
.toast-item{display:flex;align-items:center;gap:10px;background:#0a1e0c;
  border:1px solid rgba(74,183,52,.3);border-radius:12px;padding:12px 18px;
  margin-bottom:9px;font-size:13px;color:#a8c4a0;
  box-shadow:0 8px 32px rgba(0,0,0,.6);pointer-events:all;
  animation:toastIn .4s cubic-bezier(.34,1.56,.64,1) both;min-width:220px}
.toast-item.out{animation:toastOut .3s ease forwards}
@keyframes toastIn{from{opacity:0;transform:translateX(60px) scale(.9)}to{opacity:1;transform:translateX(0) scale(1)}}
@keyframes toastOut{to{opacity:0;transform:translateX(60px) scale(.9)}}
.toast-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;animation:wdotPulse 2s infinite}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
footer{border-top:1px solid rgba(74,183,52,.05);padding:30px 28px;text-align:center;position:relative;z-index:5}
.foot-logo{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:7px}
.foot-box{width:26px;height:26px;background:linear-gradient(135deg,#4ab734,#1a5210);
  border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:13px;
  animation:logoMorph 4s 1s ease-in-out infinite}
.foot-name{font-family:'Cormorant Garamond',serif;font-size:16px;color:#5a8050}
.foot-sub{font-size:11px;color:#1e3418}
</style>
</head>
<body>

<!-- CURSOR -->
<div id="cursor-dot"></div>
<div id="cursor-ring"></div>

<!-- BG LAYERS -->
<svg id="bg-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="rg1" cx="20%" cy="30%"><stop offset="0%" stop-color="#1a4a12" stop-opacity=".18"/><stop offset="100%" stop-color="transparent"/></radialGradient>
    <radialGradient id="rg2" cx="80%" cy="70%"><stop offset="0%" stop-color="#0a3a08" stop-opacity=".15"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  </defs>
  <ellipse cx="200" cy="250" rx="300" ry="300" fill="url(#rg1)"><animate attributeName="cx" values="200;260;200" dur="12s" repeatCount="indefinite"/><animate attributeName="cy" values="250;300;250" dur="9s" repeatCount="indefinite"/></ellipse>
  <ellipse cx="1200" cy="650" rx="280" ry="280" fill="url(#rg2)"><animate attributeName="cx" values="1200;1140;1200" dur="10s" repeatCount="indefinite"/><animate attributeName="cy" values="650;600;650" dur="8s" repeatCount="indefinite"/></ellipse>
  <!-- moving grid lines -->
  <g opacity=".04" stroke="#4ab734" stroke-width=".5">
    <line x1="0" y1="0" x2="1440" y2="900" opacity=".5"><animate attributeName="x1" values="0;-100;0" dur="20s" repeatCount="indefinite"/></line>
    <line x1="1440" y1="0" x2="0" y2="900" opacity=".5"/>
    <line x1="720" y1="0" x2="720" y2="900"><animate attributeName="x1" values="720;820;720" dur="15s" repeatCount="indefinite"/></line>
    <line x1="0" y1="450" x2="1440" y2="450"><animate attributeName="y1" values="450;380;450" dur="18s" repeatCount="indefinite"/></line>
  </g>
  <!-- floating hexagons -->
  <g opacity=".06" fill="none" stroke="#4ab734" stroke-width="1">
    <polygon points="120,60 150,45 180,60 180,90 150,105 120,90"><animateTransform attributeName="transform" type="translate" values="0,0;10,15;0,0" dur="8s" repeatCount="indefinite"/></polygon>
    <polygon points="1300,120 1330,105 1360,120 1360,150 1330,165 1300,150"><animateTransform attributeName="transform" type="translate" values="0,0;-8,12;0,0" dur="6s" repeatCount="indefinite"/></polygon>
    <polygon points="700,800 730,785 760,800 760,830 730,845 700,830"><animateTransform attributeName="transform" type="translate" values="0,0;5,-10;0,0" dur="10s" repeatCount="indefinite"/></polygon>
  </g>
</svg>
<canvas id="bg-canvas"></canvas>
<div class="noise-overlay"></div>

<!-- TOAST CONTAINER -->
<div id="toast"></div>

<!-- ════════════════════════════════════════
     AUTH PAGE
════════════════════════════════════════ -->
<div id="auth-root">
  <div id="auth-card" class="auth-card">
    <!-- success overlay -->
    <div id="auth-success" style="display:none" class="asuccess">
      <div style="position:relative">
        <div class="asuc-rings"></div>
        <div class="asuc-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
      </div>
      <h2 id="auth-suc-msg" style="font-family:'Cormorant Garamond',serif;font-size:28px;color:#e8f5e2;margin-bottom:8px;text-align:center"></h2>
      <p style="color:#3a5834;font-size:14px">Launching your dashboard…</p>
      <div style="display:flex;gap:6px;margin-top:20px">
        <div style="width:8px;height:8px;border-radius:50%;background:#4ab734;animation:wdotPulse 1s 0s infinite"></div>
        <div style="width:8px;height:8px;border-radius:50%;background:#4ab734;animation:wdotPulse 1s .2s infinite"></div>
        <div style="width:8px;height:8px;border-radius:50%;background:#4ab734;animation:wdotPulse 1s .4s infinite"></div>
      </div>
    </div>

    <!-- FORM SIDE -->
    <div class="aform-side">
      <div class="aform-inner" id="auth-form-inner">
        <!-- LOGIN FORM -->
        <div id="login-form">
          <div class="alogo">
            <div class="alogo-box">🌿</div>
            <span class="alogo-name">AgriChain</span>
          </div>
          <div class="aform-title">Welcome back</div>
          <div class="aform-sub">Sign in to your AgriChain account</div>
          <div class="ainwrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e4a30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <input class="ain" type="email" placeholder="Email address"/>
          </div>
          <div class="ainwrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e4a30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <input class="ain" type="password" placeholder="Password"/>
          </div>
          <a class="aforgot">Forgot password?</a>
          <button class="abtn" onclick="handleLogin()">Sign In</button>
          <div class="adivider"><div class="adivline"></div><span class="adivtxt">or continue with</span><div class="adivline"></div></div>
          <button class="agbtn" onclick="handleLogin()">
            <svg width="17" height="17" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Continue with Google
          </button>
          <p class="aswlink">Don't have an account? <b onclick="switchToSignup()">Create one →</b></p>
        </div>

        <!-- SIGNUP FORM -->
        <div id="signup-form" style="display:none">
          <div class="alogo">
            <div class="alogo-box">🌿</div>
            <span class="alogo-name">AgriChain</span>
          </div>
          <div class="aform-title">Create Account</div>
          <div class="aform-sub">Join the AgriChain network</div>
          <div class="artabs">
            <button class="artab on" onclick="setRole(this)">🌾 Farmer</button>
            <button class="artab" onclick="setRole(this)">🛒 Buyer</button>
            <button class="artab" onclick="setRole(this)">🔍 Inspector</button>
            <button class="artab" onclick="setRole(this)">💰 Investor</button>
          </div>
          <div class="arow2">
            <div class="ainwrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e4a30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              <input class="ain" type="text" placeholder="First name"/>
            </div>
            <div class="ainwrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e4a30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              <input class="ain" type="text" placeholder="Last name"/>
            </div>
          </div>
          <div class="ainwrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e4a30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <input class="ain" type="email" placeholder="Email address"/>
          </div>
          <div class="ainwrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e4a30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <input class="ain" type="password" placeholder="Create password"/>
          </div>
          <div class="achkrow">
            <input type="checkbox" id="terms"/>
            <label for="terms">I agree to the <a href="#" style="color:#7ed958">Terms</a> and <a href="#" style="color:#7ed958">Privacy Policy</a></label>
          </div>
          <button class="abtn" onclick="handleSignup()">Create Account</button>
          <p class="aswlink">Already have an account? <b onclick="switchToLogin()">← Sign in</b></p>
        </div>
      </div>
    </div>

    <!-- DECO SIDE -->
    <div class="adeco" id="auth-deco">
      <!-- animated dots -->
      <div class="adot" style="width:4px;height:4px;top:15%;left:20%;animation-duration:2.2s;animation-delay:0s"></div>
      <div class="adot" style="width:3px;height:3px;top:35%;left:60%;animation-duration:3s;animation-delay:.5s"></div>
      <div class="adot" style="width:5px;height:5px;top:55%;left:30%;animation-duration:2.5s;animation-delay:1s"></div>
      <div class="adot" style="width:3px;height:3px;top:70%;left:80%;animation-duration:3.5s;animation-delay:.3s"></div>
      <div class="adot" style="width:4px;height:4px;top:20%;left:85%;animation-duration:2.8s;animation-delay:.8s"></div>
      <div class="adot" style="width:6px;height:6px;top:80%;left:15%;animation-duration:2s;animation-delay:.2s"></div>
      <div class="adot" style="width:3px;height:3px;top:40%;left:45%;animation-duration:4s;animation-delay:1.2s"></div>
      <div class="adot" style="width:4px;height:4px;top:90%;left:55%;animation-duration:2.3s;animation-delay:.7s"></div>

      <svg class="adeco-wave" viewBox="0 0 480 90" preserveAspectRatio="none">
        <path d="M0 55 Q80 10 160 45 Q240 80 320 38 Q400 0 480 42 L480 90 L0 90Z" fill="#4ab734"><animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 55 Q80 10 160 45 Q240 80 320 38 Q400 0 480 42 L480 90 L0 90Z;M0 45 Q80 25 160 55 Q240 75 320 30 Q400 5 480 52 L480 90 L0 90Z;M0 55 Q80 10 160 45 Q240 80 320 38 Q400 0 480 42 L480 90 L0 90Z"/></path>
      </svg>

      <div class="adeco-inner" id="deco-inner-login">
        <div class="adeco-badge">🌿 Blockchain Agriculture</div>
        <svg width="200" height="155" viewBox="0 0 240 180" fill="none" style="margin:4px 0 12px">
          <ellipse cx="120" cy="165" rx="90" ry="9" fill="rgba(74,183,52,0.1)"/>
          <path d="M120 165 Q117 130 121 100 Q124 76 118 55" stroke="#2d7a20" stroke-width="3.5" stroke-linecap="round" fill="none"/>
          <path d="M119 115 Q94 100 76 85" stroke="#2d7a20" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          <path d="M76 85 Q55 68 58 50 Q72 58 80 72 Q88 78 76 85Z" fill="#4ab734" opacity=".9"><animate attributeName="opacity" values=".9;1;.9" dur="2s" repeatCount="indefinite"/></path>
          <path d="M120 96 Q144 82 160 68" stroke="#2d7a20" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          <path d="M160 68 Q180 50 178 34 Q165 44 158 58 Q150 65 160 68Z" fill="#5ac43e" opacity=".9"><animate attributeName="opacity" values=".9;1;.9" dur="2.4s" repeatCount="indefinite"/></path>
          <path d="M118 55 Q108 32 118 18 Q128 32 120 50Z" fill="#7ed958" opacity=".95"><animate attributeName="opacity" values=".95;1;.95" dur="1.8s" repeatCount="indefinite"/></path>
          <g opacity=".4">
            <circle cx="196" cy="48" r="8" fill="rgba(74,183,52,0.12)" stroke="#4ab734" stroke-width="1.5"><animate attributeName="r" values="7;9;7" dur="2.5s" repeatCount="indefinite"/></circle>
            <circle cx="214" cy="76" r="6" fill="rgba(74,183,52,0.1)" stroke="#4ab734" stroke-width="1.5"><animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/></circle>
            <circle cx="196" cy="102" r="7" fill="rgba(74,183,52,0.1)" stroke="#4ab734" stroke-width="1.5"><animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite"/></circle>
            <line x1="196" y1="56" x2="214" y2="70" stroke="#4ab734" stroke-width="1" stroke-dasharray="3 2"/>
            <line x1="214" y1="82" x2="200" y2="96" stroke="#4ab734" stroke-width="1" stroke-dasharray="3 2"/>
            <text x="196" y="52" font-size="7" fill="#7ed958" text-anchor="middle" font-family="monospace">Tx</text>
            <text x="214" y="80" font-size="7" fill="#7ed958" text-anchor="middle" font-family="monospace">Tx</text>
            <text x="196" y="106" font-size="7" fill="#7ed958" text-anchor="middle" font-family="monospace">Tx</text>
          </g>
          <circle cx="55" cy="45" r="2.5" fill="#d4a843"><animate attributeName="opacity" values=".1;.7;.1" dur="1.6s" repeatCount="indefinite"/></circle>
          <circle cx="170" cy="30" r="2.5" fill="#d4a843"><animate attributeName="opacity" values=".1;.7;.1" dur="2s" repeatCount="indefinite"/></circle>
          <circle cx="100" cy="22" r="2.5" fill="#d4a843"><animate attributeName="opacity" values=".1;.7;.1" dur="1.9s" repeatCount="indefinite"/></circle>
          <circle cx="142" cy="98" r="2.5" fill="#d4a843"><animate attributeName="opacity" values=".1;.7;.1" dur="2.3s" repeatCount="indefinite"/></circle>
          <circle cx="68" cy="108" r="2.5" fill="#d4a843"><animate attributeName="opacity" values=".1;.7;.1" dur="1.7s" repeatCount="indefinite"/></circle>
          <circle cx="190" cy="130" r="2.5" fill="#d4a843"><animate attributeName="opacity" values=".1;.7;.1" dur="2.5s" repeatCount="indefinite"/></circle>
        </svg>
        <div class="adeco-title">From Field<br/>to Fork —<br/>Verified.</div>
        <div class="adeco-sub">Join 3,200+ farmers, buyers and inspectors building transparent food systems on-chain.</div>
        <button class="adeco-ghost" onclick="switchToSignup()">Get Started →</button>
        <div class="astrow">
          <div class="astcell"><div class="astval" data-count="14">14K+</div><div class="astlbl">Batches</div></div>
          <div class="astcell"><div class="astval" data-count="3.2">3.2K</div><div class="astlbl">Farmers</div></div>
          <div class="astcell"><div class="astval">99.4%</div><div class="astlbl">Resolved</div></div>
        </div>
      </div>

      <div class="adeco-inner" id="deco-inner-signup" style="display:none">
        <div class="adeco-badge">🌿 AgriChain Network</div>
        <div class="adeco-title" style="font-size:30px">Already part<br/>of the harvest?</div>
        <div class="adeco-sub">Sign in to continue tracking your crops, trades and certificates on-chain.</div>
        <button class="adeco-ghost" onclick="switchToLogin()">← Sign In</button>
        <div class="astrow">
          <div class="astcell"><div class="astval">14K+</div><div class="astlbl">Batches</div></div>
          <div class="astcell"><div class="astval">3.2K</div><div class="astlbl">Farmers</div></div>
          <div class="astcell"><div class="astval">99.4%</div><div class="astlbl">Resolved</div></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ════════════════════════════════════════
     MAIN APP
════════════════════════════════════════ -->
<div id="app-root">

  <!-- NAV -->
  <nav>
    <div class="logo" onclick="showView('home')">
      <div class="logo-box">🌿</div>
      <span class="logo-name">AgriChain</span>
      <span class="nav-badge">BASE L2</span>
    </div>
    <div class="navlinks">
      <button class="nl on" onclick="showView('home',this)">Home</button>
      <button class="nl" onclick="showView('dashboard',this)">Dashboard</button>
      <button class="nl" onclick="showView('trace',this)">Trace Batch</button>
      <button class="nl" onclick="showView('marketplace',this)">Marketplace</button>
      <button class="nl" onclick="showView('governance',this)">Governance</button>
    </div>
    <div class="navr">
      <div class="wpill">
        <div class="wdot"></div>
        <span class="wa">0x4A2...F8c</span>
        <span class="wb" id="agt-display">248 AGT</span>
      </div>
      <button class="btnP" onclick="toast('New batch registration opened!','🌱')">+ New Batch</button>
      <button class="btnO" onclick="signOut()">Sign Out</button>
    </div>
  </nav>

  <!-- TICKER -->
  <div class="ticker-wrap">
    <div class="ticker-track" id="ticker-track"></div>
  </div>

  <!-- ── HOME ── -->
  <div id="view-home" class="view active">
    <section class="hero">
      <div class="hero-glow"></div>
      <div class="hero-bg-lines">
        <svg width="100%" height="100%" viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice">
          <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M60 0 L0 0 0 60" fill="none" stroke="rgba(74,183,52,.4)" stroke-width=".5"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>
      <div class="hero-chip">
        <div class="chip-dot"></div>
        Built on Base Blockchain · Powered by NFTs &amp; Smart Contracts
      </div>
      <h1 class="hero-h">
        <span class="hl1 gtext">Farm to Shelf,</span>
        <span class="hl2">Every Step Verified.</span>
      </h1>
      <p class="hero-p">The first blockchain-powered crop tracking platform where every handoff is signed, every certification is immutable, and every payment is trustless.</p>
      <div class="hbtns">
        <button class="hbp" onclick="showView('dashboard')">Launch Dashboard <span>→</span></button>
        <button class="hbo" onclick="showView('trace')">📷 Scan QR Code</button>
      </div>
      <div class="hnote">No wallet needed to verify a product</div>
    </section>

    <!-- STATS -->
    <div class="sec rev" id="stats-sec">
      <div class="sgrid">
        <div class="sc s1"><div class="sc-glow"></div><div class="sc-sweep"></div><div class="sc-bar"></div><div class="sc-icon">📦</div><div class="scv" data-target="14832">0</div><div class="scl">Batches Tracked</div><div class="scd">+12% this month</div></div>
        <div class="sc s2"><div class="sc-glow"></div><div class="sc-sweep"></div><div class="sc-bar"></div><div class="sc-icon">👨‍🌾</div><div class="scv" data-target="3241">0</div><div class="scl">Active Farmers</div><div class="scd">+340 new</div></div>
        <div class="sc s3"><div class="sc-glow"></div><div class="sc-sweep"></div><div class="sc-bar"></div><div class="sc-icon">🪙</div><div class="scv" id="agt-sv">0</div><div class="scl">AGT Distributed</div><div class="scd">This quarter</div></div>
        <div class="sc s4"><div class="sc-glow"></div><div class="sc-sweep"></div><div class="sc-bar"></div><div class="sc-icon">⚖️</div><div class="scv" id="pct-sv">0</div><div class="scl">Disputes Resolved</div><div class="scd">Auto-resolved</div></div>
      </div>
    </div>

    <!-- CHAIN FLOW -->
    <div class="sec rev" style="text-align:center">
      <div class="sec-head"><h2 class="sec-title">How the Chain Works</h2><p class="sec-sub">Every handoff is signed on-chain — no trust required.</p></div>
      <div class="chain-flow">
        <div class="cf-step"><div class="cf-node">🌱</div><div class="cf-label">Harvested</div></div>
        <div class="cf-arrow"><span>›</span></div>
        <div class="cf-step"><div class="cf-node">🔍</div><div class="cf-label">Inspected</div></div>
        <div class="cf-arrow"><span>›</span></div>
        <div class="cf-step"><div class="cf-node">🏪</div><div class="cf-label">Warehoused</div></div>
        <div class="cf-arrow"><span>›</span></div>
        <div class="cf-step"><div class="cf-node">🚛</div><div class="cf-label">In Transit</div></div>
        <div class="cf-arrow"><span>›</span></div>
        <div class="cf-step"><div class="cf-node">🏬</div><div class="cf-label">Delivered</div></div>
        <div class="cf-arrow"><span>›</span></div>
        <div class="cf-step"><div class="cf-node">💳</div><div class="cf-label">Payment</div></div>
      </div>
    </div>

    <!-- ROLES -->
    <div class="sec rev">
      <div class="sec-head"><h2 class="sec-title">Built for Every Role</h2><p class="sec-sub">Six stakeholder types, one unified platform.</p></div>
      <div class="rgrid">
        <div class="rc s1"><div class="rc-icon">👨‍🌾</div><div class="rc-title">Farming Enterprises</div><div class="rc-desc">Register crop batches, list produce, sign handoffs, receive payments via smart contract escrow.</div></div>
        <div class="rc s2"><div class="rc-icon">🏭</div><div class="rc-title">Agro-Processors</div><div class="rc-desc">Buy raw produce, record transformation, and register processed output as a new verified batch.</div></div>
        <div class="rc s3"><div class="rc-icon">🏪</div><div class="rc-title">Warehouses</div><div class="rc-desc">Sign batch receipts, log storage conditions, issue warehouse receipts with real-time blockchain verification.</div></div>
        <div class="rc s4"><div class="rc-icon">🚛</div><div class="rc-title">Transport Companies</div><div class="rc-desc">Securely transfer farm assets across the supply chain with live location tracking on-chain.</div></div>
        <div class="rc s5"><div class="rc-icon">🔍</div><div class="rc-title">Inspectors</div><div class="rc-desc">Verify, grade, and certify batches at any point. Record findings as tamper-proof checkpoints.</div></div>
        <div class="rc s6"><div class="rc-icon">📋</div><div class="rc-title">Auditors</div><div class="rc-desc">Ensure supply chain integrity with comprehensive blockchain-based auditing and full history access.</div></div>
      </div>
    </div>

    <!-- FEATURES -->
    <div class="sec rev">
      <div class="sec-head"><h2 class="sec-title">Platform Features</h2><p class="sec-sub">Everything you need — nothing you don't.</p></div>
      <div class="fgrid">
        <div class="fc s1"><div class="fc-icon">🏅</div><div><div class="fc-title">AGT Token Rewards<span class="fc-tag">DeFi</span></div><div class="fc-desc">Earn AgriToken rewards for verified deliveries, quality ratings, and complete records. Stake AGT for platform returns or redeem for discounts.</div></div></div>
        <div class="fc s2"><div class="fc-icon">📜</div><div><div class="fc-title">Certification Badges<span class="fc-tag">Trust</span></div><div class="fc-desc">Upload Organic, Fair Trade, and GAP certifications stored on IPFS. Hashes recorded on-chain — forgery is impossible.</div></div></div>
        <div class="fc s3"><div class="fc-icon">⚖️</div><div><div class="fc-title">Smart Contract Escrow<span class="fc-tag">Dispute</span></div><div class="fc-desc">Payments locked on delivery confirmation. Disputes resolved by on-chain evidence — not opinions or intermediaries.</div></div></div>
        <div class="fc s4"><div class="fc-icon">🗳</div><div><div class="fc-title">Community Governance<span class="fc-tag">DAO</span></div><div class="fc-desc">AGT holders vote on fee changes, features, and partnerships. No single entity controls the platform.</div></div></div>
      </div>
    </div>

    <!-- FAQ -->
    <div style="padding:0 28px 64px;max-width:780px;margin:0 auto;position:relative;z-index:5">
      <div class="sec-head rev"><h2 class="sec-title">Frequently Asked Questions</h2></div>
      <div class="rev">
        <div class="faq-item" onclick="toggleFaq(this)"><div class="faq-q">How does real-time traceability work?<div class="faq-ico">+</div></div><div class="faq-a">Every handoff is cryptographically signed by the responsible party's wallet and recorded on Base with a timestamp. Scan any QR code to see the full farm-to-shelf journey instantly — no wallet needed.</div></div>
        <div class="faq-item" onclick="toggleFaq(this)"><div class="faq-q">What blockchain powers AgriChain?<div class="faq-ico">+</div></div><div class="faq-a">Base — a fast, low-cost Layer 2 built on Ethereum by Coinbase. Transaction fees are affordable even for smallholder farmers. Batches are minted as NFTs, payments enforced by smart contracts, documents stored on IPFS.</div></div>
        <div class="faq-item" onclick="toggleFaq(this)"><div class="faq-q">How are crop batches tokenized?<div class="faq-ico">+</div></div><div class="faq-a">When a farmer registers a batch, a unique NFT is minted on Base containing all details — crop type, quantity, harvest date, and certifications. The NFT is updated at each checkpoint until final delivery.</div></div>
        <div class="faq-item" onclick="toggleFaq(this)"><div class="faq-q">How are disputes resolved?<div class="faq-ico">+</div></div><div class="faq-a">Payment is locked in smart contract escrow on delivery. If disputed, funds freeze and the full on-chain evidence is compiled automatically. Clear cases resolve without human intervention; ambiguous ones go to a mediation panel.</div></div>
      </div>
    </div>
  </div>

  <!-- ── DASHBOARD ── -->
  <div id="view-dashboard" class="view">
    <div style="max-width:1200px;margin:0 auto;padding:36px 28px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:28px;flex-wrap:wrap;gap:14px">
        <div>
          <h1 style="font-family:'Cormorant Garamond',serif;font-size:36px;color:#c8dcc0;margin-bottom:5px">Welcome back, Green Valley Farm</h1>
          <p style="color:#4a6a44;font-size:14px">Farmer · Base Wallet: <span style="font-family:'JetBrains Mono',monospace;color:#5ab840">0x4A2...F8c</span> · <span style="color:#7ed958">Verified ✓</span></p>
        </div>
        <div style="display:flex;gap:12px">
          <div style="text-align:center;background:#07120a;border:1px solid rgba(74,183,52,.1);border-radius:12px;padding:12px 20px;transition:all .3s" class="card-h">
            <div style="font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:700;color:#7ed958" id="dash-agt">248</div>
            <div style="font-size:11px;color:#3a5234;margin-top:2px">AGT Balance</div>
          </div>
          <div style="text-align:center;background:#07120a;border:1px solid rgba(74,183,52,.1);border-radius:12px;padding:12px 20px;transition:all .3s" class="card-h">
            <div style="font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:700;color:#dce8d4">4.9★</div>
            <div style="font-size:11px;color:#3a5234;margin-top:2px">Quality Rating</div>
          </div>
        </div>
      </div>

      <!-- KPIs -->
      <div class="kpi-grid rev">
        <div class="kpi s1" style="--c:#7ed958;color:var(--c)"><div class="kpi-val">7</div><div class="kpi-lbl">Active Batches</div><div class="kpi-sub">3 in transit</div></div>
        <div class="kpi s2" style="--c:#70b8ff;color:var(--c)"><div class="kpi-val">142</div><div class="kpi-lbl">Total Delivered</div><div class="kpi-sub">Last 12 months</div></div>
        <div class="kpi s3" style="--c:#f5b942;color:var(--c)"><div class="kpi-val">$4,820</div><div class="kpi-lbl">Pending Payment</div><div class="kpi-sub">In escrow</div></div>
        <div class="kpi s4" style="--c:#a8c9a0;color:var(--c)"><div class="kpi-val">0</div><div class="kpi-lbl">Disputes</div><div class="kpi-sub">All time</div></div>
      </div>

      <div class="dash-grid">
        <!-- batches table -->
        <div class="card" style="padding:24px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
            <h3 style="font-size:16px;font-weight:600;color:#c0d8b8">Active Batches</h3>
            <button class="btnP" style="padding:7px 14px;font-size:12px" onclick="toast('Opening batch registration…','🌾')">+ Register New</button>
          </div>
          <table class="dtable">
            <thead><tr><th>Batch ID</th><th>Crop</th><th>Quantity</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              <tr><td class="mono">BATCH-0x4A2F</td><td style="color:#c0d8b8;font-size:13px">Organic Tomatoes</td><td style="color:#7a9e73;font-size:13px">2,400 kg</td><td><span class="tag tag-a">In Transit</span></td><td><span class="dtable-action" onclick="showView('trace')">View →</span></td></tr>
              <tr><td class="mono">BATCH-0x7B9E</td><td style="color:#c0d8b8;font-size:13px">Avocados (Hass)</td><td style="color:#7a9e73;font-size:13px">1,500 kg</td><td><span class="tag tag-g">Delivered</span></td><td><span class="dtable-action" onclick="showView('trace')">View →</span></td></tr>
              <tr><td class="mono">BATCH-0x3C1D</td><td style="color:#c0d8b8;font-size:13px">Sweet Potatoes</td><td style="color:#7a9e73;font-size:13px">800 kg</td><td><span class="tag tag-b">Warehoused</span></td><td><span class="dtable-action" onclick="showView('trace')">View →</span></td></tr>
              <tr><td class="mono">BATCH-0x9A4B</td><td style="color:#c0d8b8;font-size:13px">Green Beans</td><td style="color:#7a9e73;font-size:13px">600 kg</td><td><span class="tag tag-g">Harvested</span></td><td><span class="dtable-action" onclick="showView('trace')">View →</span></td></tr>
            </tbody>
          </table>
        </div>

        <!-- sidebar -->
        <div style="display:flex;flex-direction:column;gap:16px">
          <!-- AGT rewards -->
          <div class="card rev" style="padding:22px">
            <h3 style="font-size:15px;font-weight:600;color:#c0d8b8;margin-bottom:14px">AGT Rewards</h3>
            <div style="margin-bottom:12px">
              <div style="display:flex;justify-content:space-between;margin-bottom:6px">
                <span style="font-size:12px;color:#6a8a60">Gold Tier Progress</span>
                <span style="font-size:12px;color:#7ed958;font-weight:600">248 / 500</span>
              </div>
              <div class="pbar"><div class="pfill" style="width:49.6%"></div></div>
              <div style="font-size:11px;color:#2e4830;margin-top:4px">252 AGT to Platinum</div>
            </div>
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.03)"><div><div style="font-size:12px;color:#b0c8a8">Verified delivery</div><div style="font-size:10px;color:#2e4830">Today</div></div><span style="font-size:13px;font-weight:700;color:#7ed958">+12 AGT</span></div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.03)"><div><div style="font-size:12px;color:#b0c8a8">Quality rating 5★</div><div style="font-size:10px;color:#2e4830">Yesterday</div></div><span style="font-size:13px;font-weight:700;color:#7ed958">+5 AGT</span></div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0"><div><div style="font-size:12px;color:#b0c8a8">Complete record</div><div style="font-size:10px;color:#2e4830">Mar 06</div></div><span style="font-size:13px;font-weight:700;color:#7ed958">+3 AGT</span></div>
            </div>
          </div>
          <!-- certs -->
          <div class="card" style="padding:22px">
            <h3 style="font-size:15px;font-weight:600;color:#c0d8b8;margin-bottom:14px">Certifications</h3>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><span style="font-size:13px;color:#7a9e73">Organic Certified</span><span class="vbadge">✓ ON-CHAIN</span></div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><span style="font-size:13px;color:#7a9e73">Fair Trade</span><span class="vbadge">✓ ON-CHAIN</span></div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px"><span style="font-size:13px;color:#7a9e73">GAP Compliant</span><span class="vbadge">✓ ON-CHAIN</span></div>
            <button class="btnO" style="width:100%;padding:9px;font-size:13px" onclick="toast('Certificate upload opened','📜')">Upload Certificate</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── TRACE ── -->
  <div id="view-trace" class="view">
    <div style="max-width:900px;margin:0 auto;padding:36px 28px">
      <h1 style="font-family:'Cormorant Garamond',serif;font-size:40px;color:#c8dcc0;margin-bottom:6px">Trace a Batch</h1>
      <p style="color:#4a6a44;margin-bottom:26px">Scan a QR code or enter a batch ID — no wallet needed.</p>
      <div style="display:flex;gap:12px;margin-bottom:28px">
        <div class="search-bar"><span>🔎</span><input value="BATCH-0x4A2F" placeholder="Enter Batch ID or paste QR data…"/></div>
        <button class="btnP" onclick="toast('Searching on-chain…','⛓')">Search</button>
        <button class="btnO" onclick="toast('Camera activated','📷')">📷 Scan QR</button>
      </div>

      <div class="card" style="padding:28px;margin-bottom:20px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;flex-wrap:wrap;gap:12px">
          <div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:5px">
              <h2 style="font-size:22px;font-weight:700;color:#c8dcc0">Organic Tomatoes</h2>
              <span class="tag tag-a">In Transit</span>
            </div>
            <div style="font-family:'JetBrains Mono',monospace;color:#4ab734;font-size:13px">BATCH-0x4A2F</div>
          </div>
          <div style="display:flex;gap:7px;flex-wrap:wrap">
            <span class="vbadge">🏅 Organic</span>
            <span class="vbadge">🏅 Fair Trade</span>
            <span class="vbadge">🏅 GAP</span>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px;background:#05100a;border-radius:12px;padding:18px">
          <div><div style="font-size:10px;color:#2e4a28;text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px">Farmer</div><div style="font-size:13px;color:#c0d8b8;font-weight:500">Green Valley Farm</div></div>
          <div><div style="font-size:10px;color:#2e4a28;text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px">Region</div><div style="font-size:13px;color:#c0d8b8;font-weight:500">Eastern Province, Rwanda</div></div>
          <div><div style="font-size:10px;color:#2e4a28;text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px">Harvest Date</div><div style="font-size:13px;color:#c0d8b8;font-weight:500">Mar 02, 2026</div></div>
          <div><div style="font-size:10px;color:#2e4a28;text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px">Quantity</div><div style="font-size:13px;color:#c0d8b8;font-weight:500">2,400 kg</div></div>
        </div>

        <h3 style="font-size:16px;font-weight:600;color:#c0d8b8;margin-bottom:18px">Supply Chain Journey</h3>
        <div style="position:relative">
          <div class="journey-step"><div class="step-line"></div><div class="step-circle done">🌱</div><div class="step-card done"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><div style="font-size:14px;font-weight:600;color:#c0d8b8">Harvested</div><div style="font-size:12px;color:#4a6a44;margin-top:2px">Green Valley Farm</div></div><div style="text-align:right"><div style="font-size:12px;color:#8ab080">Mar 02, 2026</div><div style="font-size:11px;color:#3a5234">07:14 AM</div></div><span class="vbadge">✓ ON-CHAIN</span></div></div></div>
          <div class="journey-step"><div class="step-line"></div><div class="step-circle done">🔍</div><div class="step-card done"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><div style="font-size:14px;font-weight:600;color:#c0d8b8">Quality Inspected</div><div style="font-size:12px;color:#4a6a44;margin-top:2px">AgriInspect Co.</div></div><div style="text-align:right"><div style="font-size:12px;color:#8ab080">Mar 03, 2026</div><div style="font-size:11px;color:#3a5234">10:30 AM</div></div><span class="vbadge">✓ ON-CHAIN</span></div></div></div>
          <div class="journey-step"><div class="step-line"></div><div class="step-circle done">🏪</div><div class="step-card done"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><div style="font-size:14px;font-weight:600;color:#c0d8b8">Warehoused</div><div style="font-size:12px;color:#4a6a44;margin-top:2px">EastStore Logistics</div></div><div style="text-align:right"><div style="font-size:12px;color:#8ab080">Mar 04, 2026</div><div style="font-size:11px;color:#3a5234">02:00 PM</div></div><span class="vbadge">✓ ON-CHAIN</span></div></div></div>
          <div class="journey-step"><div class="step-line"></div><div class="step-circle done">🚛</div><div class="step-card done"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><div style="font-size:14px;font-weight:600;color:#c0d8b8">Dispatched</div><div style="font-size:12px;color:#4a6a44;margin-top:2px">SwiftCargo Transport</div></div><div style="text-align:right"><div style="font-size:12px;color:#8ab080">Mar 07, 2026</div><div style="font-size:11px;color:#3a5234">06:45 AM</div></div><span class="vbadge">✓ ON-CHAIN</span></div></div></div>
          <div class="journey-step"><div class="step-circle pending">🏬</div><div class="step-card pending"><div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px"><div><div style="font-size:14px;font-weight:600;color:#c0d8b8">Retail Delivery</div><div style="font-size:12px;color:#4a6a44;margin-top:2px">FreshMart Kigali</div></div><div style="text-align:right"><div style="font-size:12px;color:#8ab080">Pending</div><div style="font-size:11px;color:#3a5234">—</div></div><span class="tag" style="background:#0e1a0e;color:#4a6a44;border:1px solid rgba(255,255,255,.05);font-size:10px">⏳ PENDING</span></div></div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── MARKETPLACE ── -->
  <div id="view-marketplace" class="view">
    <div style="max-width:1200px;margin:0 auto;padding:36px 28px">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:24px;flex-wrap:wrap;gap:14px">
        <div>
          <h1 style="font-family:'Cormorant Garamond',serif;font-size:40px;color:#c8dcc0;margin-bottom:5px">Marketplace</h1>
          <p style="color:#4a6a44">Browse verified crop batches — no middlemen, no guesswork.</p>
        </div>
        <button class="btnP" onclick="toast('Listing your batch…','📋')">+ List Your Batch</button>
      </div>

      <div class="filter-btns">
        <button class="fbtn on" onclick="setFilter(this)">All</button>
        <button class="fbtn" onclick="setFilter(this)">Organic</button>
        <button class="fbtn" onclick="setFilter(this)">Fair Trade</button>
        <button class="fbtn" onclick="setFilter(this)">GAP</button>
        <button class="fbtn" onclick="setFilter(this)">Coffee</button>
        <button class="fbtn" onclick="setFilter(this)">Grains</button>
        <button class="fbtn" onclick="setFilter(this)">Fruits &amp; Veg</button>
        <div style="margin-left:auto;display:flex;align-items:center;background:#07120a;border:1px solid rgba(74,183,52,.1);border-radius:8px;padding:7px 14px;gap:7px">
          <span style="font-size:12px;color:#3a5234">🔎</span>
          <input placeholder="Search crops…" style="background:none;border:none;outline:none;color:#c0d8b8;font-size:13px;font-family:inherit;width:140px"/>
        </div>
      </div>

      <div class="mlist-grid">
        <div class="mcard"><div style="display:flex;justify-content:space-between;margin-bottom:14px"><div><h3 style="font-size:18px;font-weight:700;color:#c8dcc0;margin-bottom:4px">Organic Maize</h3><div style="font-size:12px;color:#4a6a44">👨‍🌾 Sunrise Farms · Northern Province</div></div><div style="text-align:right"><div class="mcard-price">0.42 USDC/kg</div><div style="font-size:11px;color:#3a5234">5,000 kg available</div></div></div><div style="display:flex;gap:7px;margin-bottom:16px"><span class="vbadge">🏅 Organic</span><span class="mcard-rating" style="margin-left:auto">★ 4.9</span></div><div style="border-top:1px solid rgba(255,255,255,.04);padding-top:14px;display:flex;gap:9px"><button class="btnP" style="flex:1;padding:10px;font-size:13px" onclick="toast('Order placed for Organic Maize!','✅')">Place Order</button><button class="btnO" style="padding:10px 14px" onclick="showView('trace')">Trace →</button></div></div>
        <div class="mcard"><div style="display:flex;justify-content:space-between;margin-bottom:14px"><div><h3 style="font-size:18px;font-weight:700;color:#c8dcc0;margin-bottom:4px">Premium Coffee Beans</h3><div style="font-size:12px;color:#4a6a44">👨‍🌾 Highland Growers · Western Province</div></div><div style="text-align:right"><div class="mcard-price">3.10 USDC/kg</div><div style="font-size:11px;color:#3a5234">800 kg available</div></div></div><div style="display:flex;gap:7px;margin-bottom:16px"><span class="vbadge">🏅 Fair Trade</span><span class="vbadge">🏅 Organic</span><span class="mcard-rating" style="margin-left:auto">★ 5.0</span></div><div style="border-top:1px solid rgba(255,255,255,.04);padding-top:14px;display:flex;gap:9px"><button class="btnP" style="flex:1;padding:10px;font-size:13px" onclick="toast('Order placed for Coffee Beans!','☕')">Place Order</button><button class="btnO" style="padding:10px 14px" onclick="showView('trace')">Trace →</button></div></div>
        <div class="mcard"><div style="display:flex;justify-content:space-between;margin-bottom:14px"><div><h3 style="font-size:18px;font-weight:700;color:#c8dcc0;margin-bottom:4px">Sweet Potatoes</h3><div style="font-size:12px;color:#4a6a44">👨‍🌾 Valley Fresh Co. · Southern Province</div></div><div style="text-align:right"><div class="mcard-price">0.28 USDC/kg</div><div style="font-size:11px;color:#3a5234">3,200 kg available</div></div></div><div style="display:flex;gap:7px;margin-bottom:16px"><span class="vbadge">🏅 GAP</span><span class="mcard-rating" style="margin-left:auto">★ 4.7</span></div><div style="border-top:1px solid rgba(255,255,255,.04);padding-top:14px;display:flex;gap:9px"><button class="btnP" style="flex:1;padding:10px;font-size:13px" onclick="toast('Order placed for Sweet Potatoes!','🍠')">Place Order</button><button class="btnO" style="padding:10px 14px" onclick="showView('trace')">Trace →</button></div></div>
        <div class="mcard"><div style="display:flex;justify-content:space-between;margin-bottom:14px"><div><h3 style="font-size:18px;font-weight:700;color:#c8dcc0;margin-bottom:4px">Avocados (Hass)</h3><div style="font-size:12px;color:#4a6a44">👨‍🌾 Green Valley Farm · Eastern Province</div></div><div style="text-align:right"><div class="mcard-price">1.85 USDC/kg</div><div style="font-size:11px;color:#3a5234">1,500 kg available</div></div></div><div style="display:flex;gap:7px;margin-bottom:16px"><span class="vbadge">🏅 Organic</span><span class="vbadge">🏅 Fair Trade</span><span class="mcard-rating" style="margin-left:auto">★ 4.8</span></div><div style="border-top:1px solid rgba(255,255,255,.04);padding-top:14px;display:flex;gap:9px"><button class="btnP" style="flex:1;padding:10px;font-size:13px" onclick="toast('Order placed for Avocados!','🥑')">Place Order</button><button class="btnO" style="padding:10px 14px" onclick="showView('trace')">Trace →</button></div></div>
      </div>

      <div style="margin-top:24px;background:linear-gradient(135deg,#0a1c0c,#091810);border:1px solid rgba(74,183,52,.15);border-radius:16px;padding:26px 30px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px">
        <div><h3 style="font-size:20px;font-weight:700;color:#c0d8b8;margin-bottom:6px">B2B Supply Contracts</h3><p style="color:#4a6a44;font-size:13px">Set up recurring supply agreements with automatic smart contract enforcement.</p></div>
        <button class="btnP" style="flex-shrink:0;padding:12px 22px" onclick="toast('Contract builder opened!','📄')">Create Contract</button>
      </div>
    </div>
  </div>

  <!-- ── GOVERNANCE ── -->
  <div id="view-governance" class="view">
    <div style="max-width:900px;margin:0 auto;padding:36px 28px">
      <h1 style="font-family:'Cormorant Garamond',serif;font-size:40px;color:#c8dcc0;margin-bottom:6px">Governance</h1>
      <p style="color:#4a6a44;margin-bottom:26px">AGT token holders shape the future of AgriChain. No single company controls the protocol.</p>
      <div class="gov-grid rev">
        <div class="gov-kpi s1"><div style="font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:700;color:#7ed958;margin-bottom:4px">248 AGT</div><div style="font-size:13px;color:#c0d8b8;font-weight:500">Your Voting Power</div><div style="font-size:11px;color:#3a5234;margin-top:3px">0.03% of total</div></div>
        <div class="gov-kpi s2"><div style="font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:700;color:#7ed958;margin-bottom:4px">2</div><div style="font-size:13px;color:#c0d8b8;font-weight:500">Active Proposals</div><div style="font-size:11px;color:#3a5234;margin-top:3px">Voting open</div></div>
        <div class="gov-kpi s3"><div style="font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:700;color:#7ed958;margin-bottom:4px">7</div><div style="font-size:13px;color:#c0d8b8;font-weight:500">Your Votes Cast</div><div style="font-size:11px;color:#3a5234;margin-top:3px">All time</div></div>
      </div>
      <div class="rev">
        <div class="prop-card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;flex-wrap:wrap;gap:10px">
            <h3 style="font-size:15px;font-weight:600;color:#c0d8b8;max-width:490px">Reduce platform fee from 1.5% to 1.2%</h3>
            <div style="display:flex;gap:9px;align-items:center"><span class="tag tag-a">Active</span><span style="font-size:11px;color:#3a5234">Ends Mar 15, 2026</span></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-size:12px;color:#8ab080">For: 68%</span><span style="font-size:12px;color:#3a5234">Against: 32%</span></div>
          <div class="vote-bar"><div class="vote-fill" style="width:68%"></div></div>
          <div style="display:flex;gap:10px;margin-top:14px">
            <button class="btnP" style="flex:1;padding:10px;font-size:13px" onclick="toast('Vote FOR recorded on-chain!','✅')">✓ Vote For</button>
            <button class="btnO" style="flex:1;padding:10px;font-size:13px" onclick="toast('Vote AGAINST recorded','⚠️')">✗ Vote Against</button>
          </div>
        </div>
        <div class="prop-card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;flex-wrap:wrap;gap:10px">
            <h3 style="font-size:15px;font-weight:600;color:#c0d8b8;max-width:490px">Add Swahili language support to mobile app</h3>
            <div style="display:flex;gap:9px;align-items:center"><span class="tag tag-g">Passed</span><span style="font-size:11px;color:#3a5234">Ended Mar 01, 2026</span></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-size:12px;color:#8ab080">For: 91%</span><span style="font-size:12px;color:#3a5234">Against: 9%</span></div>
          <div class="vote-bar"><div class="vote-fill" style="width:91%"></div></div>
          <div style="color:#7ed958;font-size:13px;font-weight:500;margin-top:12px">✓ Proposal passed and implemented</div>
        </div>
        <div class="prop-card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;flex-wrap:wrap;gap:10px">
            <h3 style="font-size:15px;font-weight:600;color:#c0d8b8;max-width:490px">Partner with Kenya AgriBoard for certification</h3>
            <div style="display:flex;gap:9px;align-items:center"><span class="tag tag-a">Active</span><span style="font-size:11px;color:#3a5234">Ends Mar 20, 2026</span></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px"><span style="font-size:12px;color:#8ab080">For: 55%</span><span style="font-size:12px;color:#3a5234">Against: 45%</span></div>
          <div class="vote-bar"><div class="vote-fill" style="width:55%"></div></div>
          <div style="display:flex;gap:10px;margin-top:14px">
            <button class="btnP" style="flex:1;padding:10px;font-size:13px" onclick="toast('Vote FOR recorded on-chain!','✅')">✓ Vote For</button>
            <button class="btnO" style="flex:1;padding:10px;font-size:13px" onclick="toast('Vote AGAINST recorded','⚠️')">✗ Vote Against</button>
          </div>
        </div>
      </div>
      <div class="card" style="margin-top:16px;padding:22px 26px;background:linear-gradient(135deg,#09180c,#091510);border:1px solid rgba(74,183,52,.12)">
        <h3 style="font-size:16px;font-weight:600;color:#c0d8b8;margin-bottom:7px">Submit a New Proposal</h3>
        <p style="font-size:13px;color:#3a5634;margin-bottom:14px">You need at least 50 AGT to submit a governance proposal.</p>
        <button class="btnP" onclick="toast('Proposal builder opened!','🗳')">+ Create Proposal</button>
      </div>
    </div>
  </div>

  <footer>
    <div class="foot-logo">
      <div class="foot-box">🌿</div>
      <span class="foot-name">AgriChain</span>
    </div>
    <p class="foot-sub">Built on Base L2 · Secured by Ethereum · Powered by the community</p>
  </footer>
</div>

<script>
/* ══════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════ */
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = window.innerWidth/2, my = window.innerHeight/2;
let rx = mx, ry = my;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function animateCursor() {
  dot.style.left = (mx - 3) + 'px';
  dot.style.top = (my - 3) + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = (rx - 16) + 'px';
  ring.style.top = (ry - 16) + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

/* ══════════════════════════════════════════
   PARTICLE CANVAS
══════════════════════════════════════════ */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H, pts = [];

function resizeCanvas() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Pt {
  constructor() { this.reset(true); }
  reset(init) {
    this.x = Math.random() * W;
    this.y = init ? Math.random() * H : H + 10;
    this.vy = -(0.15 + Math.random() * 0.4);
    this.vx = (Math.random() - 0.5) * 0.2;
    this.r = 1 + Math.random() * 1.5;
    this.alpha = 0.05 + Math.random() * 0.25;
    this.phase = Math.random() * Math.PI * 2;
    this.phaseSpeed = 0.008 + Math.random() * 0.015;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.phase += this.phaseSpeed;
    if (this.y < -10) this.reset(false);
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha * (0.4 + Math.abs(Math.sin(this.phase)) * 0.6);
    ctx.fillStyle = '#4ab734';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

for (let i = 0; i < 70; i++) pts.push(new Pt());

function drawFrame() {
  ctx.clearRect(0, 0, W, H);
  // cursor glow
  const gr = ctx.createRadialGradient(mx, my, 0, mx, my, 220);
  gr.addColorStop(0, 'rgba(74,183,52,0.04)');
  gr.addColorStop(1, 'rgba(74,183,52,0)');
  ctx.fillStyle = gr;
  ctx.fillRect(0, 0, W, H);
  // particles + connections
  for (let i = 0; i < pts.length; i++) {
    pts[i].update(); pts[i].draw();
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
      const d = Math.sqrt(dx*dx + dy*dy);
      if (d < 110) {
        ctx.save();
        ctx.globalAlpha = (1 - d/110) * 0.07;
        ctx.strokeStyle = '#4ab734';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }
  requestAnimationFrame(drawFrame);
}
drawFrame();

/* ══════════════════════════════════════════
   AUTH
══════════════════════════════════════════ */
let isSignup = false;
let animating = false;

function setRole(btn) {
  document.querySelectorAll('.artab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
}

function switchToSignup() {
  if (animating) return;
  animating = true;
  const card = document.getElementById('auth-card');
  const fi = document.getElementById('auth-form-inner');
  fi.classList.add('slide-out-l');
  setTimeout(() => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('deco-inner-login').style.display = 'none';
    document.getElementById('deco-inner-signup').style.display = 'flex';
    fi.classList.remove('slide-out-l');
    fi.classList.add('slide-in-r');
    card.classList.add('signup-mode');
    document.getElementById('auth-deco').classList.add('to-left');
    isSignup = true;
    setTimeout(() => { fi.classList.remove('slide-in-r'); animating = false; }, 360);
  }, 330);
}

function switchToLogin() {
  if (animating) return;
  animating = true;
  const card = document.getElementById('auth-card');
  const fi = document.getElementById('auth-form-inner');
  fi.classList.add('slide-out-r');
  setTimeout(() => {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('deco-inner-signup').style.display = 'none';
    document.getElementById('deco-inner-login').style.display = 'flex';
    fi.classList.remove('slide-out-r');
    fi.classList.add('slide-in-l');
    card.classList.remove('signup-mode');
    document.getElementById('auth-deco').classList.remove('to-left');
    isSignup = false;
    setTimeout(() => { fi.classList.remove('slide-in-l'); animating = false; }, 360);
  }, 330);
}

function handleLogin() {
  const suc = document.getElementById('auth-success');
  document.getElementById('auth-suc-msg').textContent = 'Welcome back to AgriChain!';
  suc.style.display = 'flex';
  suc.style.flexDirection = 'column';
  suc.style.alignItems = 'center';
  suc.style.justifyContent = 'center';
  setTimeout(launchApp, 2000);
}

function handleSignup() {
  const suc = document.getElementById('auth-success');
  document.getElementById('auth-suc-msg').textContent = 'Account created! Welcome.';
  suc.style.display = 'flex';
  suc.style.flexDirection = 'column';
  suc.style.alignItems = 'center';
  suc.style.justifyContent = 'center';
  setTimeout(launchApp, 2000);
}

function launchApp() {
  document.getElementById('auth-root').classList.add('leaving');
  setTimeout(() => {
    document.getElementById('auth-root').style.display = 'none';
    const app = document.getElementById('app-root');
    app.style.display = 'block';
    setTimeout(() => app.classList.add('visible'), 30);
    initApp();
  }, 500);
}

/* quick-start: skip auth for demo */
// uncomment to skip auth: launchApp();

/* ══════════════════════════════════════════
   APP INIT
══════════════════════════════════════════ */
function initApp() {
  buildTicker();
  initScrollReveal();
  animateAGT();
  setupNavScroll();
}

function signOut() {
  const app = document.getElementById('app-root');
  app.classList.remove('visible');
  setTimeout(() => {
    app.style.display = 'none';
    const auth = document.getElementById('auth-root');
    auth.style.display = 'flex';
    auth.classList.remove('leaving');
    document.getElementById('auth-success').style.display = 'none';
    if (isSignup) switchToLogin();
  }, 500);
}

/* ══════════════════════════════════════════
   VIEW SWITCHING
══════════════════════════════════════════ */
function showView(id, btn) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + id).classList.add('active');
  document.querySelectorAll('.nl').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  else {
    document.querySelectorAll('.nl').forEach(b => {
      if (b.textContent.toLowerCase().includes(id.replace('-',' '))) b.classList.add('on');
    });
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(initScrollReveal, 100);
}

/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
function initScrollReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        if (e.target.id === 'stats-sec' && !window._counted) {
          window._counted = true;
          document.querySelectorAll('[data-target]').forEach(el => countUp(el, +el.dataset.target, '', false));
          countUp(document.getElementById('agt-sv'), 892, 'K', false);
          countUp(document.getElementById('pct-sv'), 99.4, '%', true);
        }
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.rev').forEach(el => io.observe(el));
}

/* ══════════════════════════════════════════
   COUNTER ANIMATION
══════════════════════════════════════════ */
function countUp(el, target, suffix, dec) {
  let i = 0, steps = 80, dur = 2000;
  const iv = setInterval(() => {
    i++;
    const v = target * (i / steps);
    el.textContent = dec ? v.toFixed(1) + suffix : Math.round(v).toLocaleString() + suffix;
    if (i >= steps) { el.textContent = dec ? target.toFixed(1) + suffix : target.toLocaleString() + suffix; clearInterval(iv); }
  }, dur / steps);
}

/* ══════════════════════════════════════════
   LIVE AGT COUNTER (ticks up randomly)
══════════════════════════════════════════ */
let agtVal = 248;
function animateAGT() {
  setInterval(() => {
    if (Math.random() > 0.7) {
      const gain = +(Math.random() * 0.5).toFixed(2);
      agtVal += gain;
      const el = document.getElementById('agt-display');
      if (el) {
        el.textContent = agtVal.toFixed(1) + ' AGT';
        el.style.color = '#b0f060';
        setTimeout(() => { el.style.color = '#7ed958'; }, 800);
      }
      const d = document.getElementById('dash-agt');
      if (d) { d.textContent = agtVal.toFixed(1); }
    }
  }, 3500);
}

/* ══════════════════════════════════════════
   TICKER
══════════════════════════════════════════ */
function buildTicker() {
  const items = [
    { label: 'Organic Tomatoes', val: '0.68 USDC/kg', emoji: '🍅' },
    { label: 'Premium Coffee', val: '3.12 USDC/kg', emoji: '☕' },
    { label: 'Maize — N.Province', val: '0.44 USDC/kg', emoji: '🌽' },
    { label: 'Avocados Hass', val: '1.87 USDC/kg', emoji: '🥑' },
    { label: 'Sweet Potatoes', val: '0.29 USDC/kg', emoji: '🍠' },
    { label: 'Green Beans', val: '0.55 USDC/kg', emoji: '🫘' },
    { label: 'BATCH-0x4A2F', val: 'IN TRANSIT', emoji: '🚛' },
    { label: 'BATCH-0x7B9E', val: 'DELIVERED', emoji: '✅' },
    { label: 'AGT Token', val: '↑ +2.4%', emoji: '🪙' },
  ];
  const track = document.getElementById('ticker-track');
  [...items, ...items, ...items].forEach(it => {
    const d = document.createElement('div');
    d.className = 'titem';
    d.innerHTML = `<span>${it.emoji}</span>${it.label} <span class="titem-val">${it.val}</span><div class="titem-dot"></div>`;
    track.appendChild(d);
  });
}

/* ══════════════════════════════════════════
   TOAST NOTIFICATION
══════════════════════════════════════════ */
function toast(msg, emoji = '🌿', color = '#4ab734') {
  const container = document.getElementById('toast');
  const el = document.createElement('div');
  el.className = 'toast-item';
  el.innerHTML = `<div class="toast-dot" style="background:${color}"></div>${emoji} ${msg}`;
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

/* ══════════════════════════════════════════
   NAV SCROLL
══════════════════════════════════════════ */
function setupNavScroll() {
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 20
      ? 'rgba(4,10,5,0.97)'
      : 'rgba(4,10,5,0.85)';
  });
}

/* ══════════════════════════════════════════
   FAQ TOGGLE
══════════════════════════════════════════ */
function toggleFaq(el) {
  const was = el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
  if (!was) el.classList.add('open');
}

/* ══════════════════════════════════════════
   FILTER TABS
══════════════════════════════════════════ */
function setFilter(btn) {
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  toast('Filtering by ' + btn.textContent, '🔎');
}

/* ══════════════════════════════════════════
   NAV LINK STAGGER IN
══════════════════════════════════════════ */
document.querySelectorAll('.nl').forEach((b, i) => {
  b.style.animation = `navDrop 0.5s ${0.65 + i * 0.07}s cubic-bezier(.22,1,.36,1) both`;
});

/* ══════════════════════════════════════════
   LIVE TICKER PRICE UPDATES
══════════════════════════════════════════ */
setInterval(() => {
  const items = document.querySelectorAll('.titem-val');
  items.forEach(el => {
    if (el.textContent.includes('USDC') && Math.random() > 0.75) {
      const current = parseFloat(el.textContent);
      const delta = (Math.random() - 0.48) * 0.02;
      el.textContent = (current + delta).toFixed(2) + ' USDC/kg';
      el.style.color = delta > 0 ? '#7ed958' : '#f5b942';
      setTimeout(() => { el.style.color = ''; }, 1000);
    }
  });
}, 2800);

/* ══════════════════════════════════════════
   LIVE TOAST FEED (simulated on-chain events)
══════════════════════════════════════════ */
const liveEvents = [
  ['BATCH-0x9F3A registered on-chain', '🌱'],
  ['BATCH-0x7B9E delivered — escrow released', '✅'],
  ['New inspector certification: GAP Level 2', '🏅'],
  ['AGT reward distributed: +8 AGT', '🪙'],
  ['Smart contract executed: 1,500 kg Avocados', '⛓'],
  ['Governance vote cast by 0x8C4...D2e', '🗳'],
];
let evIdx = 0;

function initApp() {
  buildTicker();
  initScrollReveal();
  animateAGT();
  setupNavScroll();
  setInterval(() => {
    const e = liveEvents[evIdx % liveEvents.length];
    toast(e[0], e[1]);
    evIdx++;
  }, 12000);
}
</script>
</body>
</html>
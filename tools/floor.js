(i)=>{
 const slides=[...document.querySelectorAll('.slide')];
 const s=slides[i]; const sr=s.getBoundingClientRect(); const sc=sr.width/1920;
 let min=999,minText='',over=0,chars=0,small=0;
 const w=document.createTreeWalker(s,NodeFilter.SHOW_TEXT); let n;
 while(n=w.nextNode()){
  const t=n.textContent.trim(); if(!t) continue;
  const el=n.parentElement; let hid=false,z=1;
  for(let e=el;e&&e!==s.parentElement;e=e.parentElement){const c=getComputedStyle(e);
    if(c.display==='none'||c.visibility==='hidden'||+c.opacity===0){hid=true;break;} z*=parseFloat(c.zoom)||1;}
  if(hid) continue;
  if(el.closest('.circle-deco')) continue;
  const fs=parseFloat(getComputedStyle(el).fontSize)*z; chars+=t.length; if(fs<27.5) small+=t.length;
  if(fs<min){min=fs;minText=t.slice(0,40)+' ['+el.className+']';}
  const r=document.createRange(); r.selectNodeContents(n);
  for(const rr of r.getClientRects()){ const b=(rr.bottom-sr.top)/sc, rt=(rr.right-sr.left)/sc; if(b>1082||rt>1922) over=Math.max(over,Math.round(Math.max(b,rt))); }
 }
 return {min,minText,over,chars,small};
}

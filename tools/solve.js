()=>{
 const P=PREFIX, r={}; const tab=document.querySelectorAll('.tab-btn')[1]; if(tab) tab.click();
 try{ const ins=document.querySelectorAll('#'+P+'-fill-exercises .gap-input');
  ins.forEach(i=>{const a=FILL[+i.dataset.idx].answer; i.value=Array.isArray(a)?a[0]:a;});
  checkStep(2,P+'-fill-exercises',P+'-fill-feedback',FILL,checkFill);
  const t=document.getElementById(P+'-fill-feedback').textContent;
  r.fill=(ins.length===FILL.length&&/Perfect|All/.test(t)&&!/out of/.test(t))?'OK':('FAIL '+t+' inputs '+ins.length);
 }catch(e){r.fill='ERROR '+e.message}
 try{ buildFillHTML(P+'-fill-exercises',FILL);
  const ins=document.querySelectorAll('#'+P+'-fill-exercises .gap-input');
  ins.forEach(i=>{let a=FILL[+i.dataset.idx].answer; a=Array.isArray(a)?a[0]:a; i.value=' '+a.replace(/'/g,'’')+' ';});
  checkFill(P+'-fill-exercises',P+'-fill-feedback',FILL);
  const t=document.getElementById(P+'-fill-feedback').textContent; r.fillCurly=/out of/.test(t)?'FAIL '+t:'OK';
  checkStep(2,P+'-fill-exercises',P+'-fill-feedback',FILL,checkFill);
 }catch(e){r.fillCurly='ERROR '+e.message}
 try{ MISTAKE.forEach((m,i)=>{document.getElementById(P+'-mistake-exercises-ts-'+i).querySelectorAll('.tpart')[m.correct].click();});
  checkStep(3,P+'-mistake-exercises',P+'-mistake-feedback',MISTAKE,checkMistake);
  const t=document.getElementById(P+'-mistake-feedback').textContent; r.mistake=/out of/.test(t)?'FAIL '+t:'OK';
 }catch(e){r.mistake='ERROR '+e.message}
 try{ const cid=P+'-order-exercises', miss=[];
  ORDER.forEach((it,i)=>{const st=orderState[cid][i]; const used=new Set(); st.selected=[];
   for(const w of it.answer.split(' ')){let k=st.words.findIndex((x,j)=>!used.has(j)&&x===w); if(k<0){miss.push((i+1)+':'+w);break;} used.add(k); st.selected.push(k);}
   if(st.selected.length!==st.words.length) miss.push((i+1)+':unused words');});
  checkStep(4,cid,P+'-order-feedback',ORDER,checkOrder);
  const t=document.getElementById(P+'-order-feedback').textContent; r.order=(/out of/.test(t)||miss.length)?'FAIL '+t+' '+miss.join(','):'OK';
 }catch(e){r.order='ERROR '+e.message}
 try{ const btn=document.querySelector('#'+P+'-open-exercises .check-btn'); if(btn) btn.click(); }catch(e){}
 try{ goStep(1); document.querySelectorAll('#'+P+'-left > *')[0]; }catch(e){}
 // match: click pairs by data
 try{ const L=[...document.querySelectorAll('#'+P+'-left > *')], Rr=[...document.querySelectorAll('#'+P+'-right > *')];
  L.forEach((l,i)=>{ l.click(); const want=MATCH[i].right.replace(/^[a-z]\.\s*/i,''); const t=Rr.find(x=>x.textContent.trim().replace(/^[A-H]\.?\s*/,'')===want||x.textContent.includes(want)); if(t) t.click(); });
 }catch(e){}
 r.done=[...document.querySelectorAll('#'+P+'-rail .rail-node.done')].map(n=>n.dataset.step).sort().join('');
 return r;}

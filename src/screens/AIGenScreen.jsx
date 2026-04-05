export default function AIGenScreen(){return(
<div className="nr" style={{background:'#040406',minHeight:'100%',position:'relative'}}>
  <div style={{position:'absolute',top:'20%',left:'50%',width:180,height:180,transform:'translateX(-50%)',borderRadius:90,background:'radial-gradient(circle,rgba(239,68,68,0.06),rgba(168,85,247,0.03),transparent)',filter:'blur(40px)'}}/>
  <div style={{position:'relative',zIndex:2,padding:'52px 20px 24px'}}>
    {/* Spinning Ring */}
    <div style={{display:'flex',justifyContent:'center',marginBottom:20}}>
      <div style={{position:'relative',width:100,height:100,animation:'float 3s ease-in-out infinite'}}>
        <div style={{position:'absolute',inset:-8,borderRadius:'50%',border:'1px solid rgba(239,68,68,0.06)',animation:'breathe 3s ease infinite'}}/>
        <svg width="100" height="100" viewBox="0 0 100 100" style={{animation:'spin 3s linear infinite'}}><circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3"/><circle cx="50" cy="50" r="42" fill="none" stroke="url(#airg)" strokeWidth="3" strokeLinecap="round" strokeDasharray="180 264"/><defs><linearGradient id="airg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#EF4444"/><stop offset="50%" stopColor="#A855F7"/><stop offset="100%" stopColor="#3B82F6"/></linearGradient></defs></svg>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}><div style={{width:40,height:40,borderRadius:12,background:'linear-gradient(135deg,#EF4444,#F97316)',backgroundSize:'300% 300%',animation:'gradShift 4s ease infinite',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 20px rgba(239,68,68,0.3)'}}><span style={{fontSize:18,fontWeight:900,color:'#fff'}}>C</span></div></div>
      </div>
    </div>
    <div style={{textAlign:'center',marginBottom:18}}><div style={{fontSize:20,fontWeight:900,color:'#fff'}}>Your Plan is Ready</div><div style={{fontSize:11,color:'#555',marginTop:4}}>AI-powered routine built for you</div></div>
    {/* Checklist */}
    <div className="glass" style={{borderRadius:16,padding:14,marginBottom:14}}>
      {['Identified: APT + Knock Knees','Equipment matched','10 exercises selected','Routine order optimized'].map((t,i)=>(
        <div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'6px 0',animation:`fadeUp 0.5s ease ${i*0.2}s both`}}>
          <div style={{width:18,height:18,borderRadius:6,background:'rgba(52,211,153,0.12)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
          <span style={{fontSize:11,color:'#888'}}>{t}</span>
        </div>
      ))}
    </div>
    {/* Diagnosis */}
    <div className="glass" style={{borderRadius:16,padding:16,marginBottom:14,position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(239,68,68,0.04),rgba(168,85,247,0.02))',pointerEvents:'none'}}/>
      <div style={{position:'relative'}}><div style={{fontSize:11,fontWeight:700,color:'#fff',marginBottom:10}}>AI Diagnosis</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
          {[{l:'APT',s:'Moderate',c:'#EF4444'},{l:'Knock Knees',s:'Mild',c:'#A855F7'},{l:'Tight Hips',s:'High',c:'#F97316'}].map((d,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:6,background:`${d.c}10`,border:`1px solid ${d.c}20`,borderRadius:10,padding:'6px 12px'}}>
              <div style={{width:6,height:6,borderRadius:3,background:d.c,boxShadow:`0 0 6px ${d.c}60`}}/>
              <div><div style={{fontSize:10,fontWeight:700,color:d.c}}>{d.l}</div><div style={{fontSize:7,color:'#666'}}>{d.s}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Routine Breakdown */}
    <div className="glass" style={{borderRadius:16,overflow:'hidden',marginBottom:14}}>
      <div style={{height:2,background:'linear-gradient(90deg,#EF4444,#F97316,#A855F7)',backgroundSize:'300% 100%',animation:'gradShift 3s ease infinite'}}/>
      <div style={{padding:16}}>
        <div style={{fontSize:11,fontWeight:700,color:'#fff',marginBottom:10}}>Routine Breakdown</div>
        {[{l:'APT Correction',p:50,c:'#EF4444'},{l:'Knock Knees',p:35,c:'#A855F7'},{l:'Warm-up',p:15,c:'#34D399'}].map((b,i)=>(
          <div key={i} style={{marginBottom:8}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:3}}><span style={{fontSize:9,fontWeight:600,color:'#888'}}>{b.l}</span><span style={{fontSize:9,fontWeight:700,color:b.c}}>{b.p}%</span></div>
            <div style={{height:5,borderRadius:3,background:'rgba(255,255,255,0.04)'}}><div style={{width:`${b.p}%`,height:'100%',borderRadius:3,background:b.c,boxShadow:`0 0 6px ${b.c}40`}}/></div>
          </div>
        ))}
      </div>
    </div>
    <div style={{position:'relative'}}><div style={{position:'absolute',inset:-3,borderRadius:18,background:'linear-gradient(135deg,#EF4444,#F97316)',opacity:0.25,filter:'blur(10px)',animation:'breathe 3s ease infinite'}}/><button className="bsh" style={{position:'relative',width:'100%',padding:'15px 0',borderRadius:16,border:'none',background:'#fff',fontSize:14,fontWeight:900,color:'#050505',letterSpacing:1,cursor:'pointer'}}>START MY FIRST SESSION</button></div>
  </div>
</div>
)}

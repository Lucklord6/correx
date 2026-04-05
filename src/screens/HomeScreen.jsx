const days=['M','T','W','T','F','S','S']
const done=[1,1,1,1,1,0,0]

export default function HomeScreen(){return(
<div className="nr" style={{background:'#040406',minHeight:'100%',position:'relative'}}>
  <div style={{position:'absolute',top:30,left:15,width:140,height:140,borderRadius:70,background:'radial-gradient(circle,rgba(239,68,68,0.09),transparent 65%)',filter:'blur(28px)',animation:'float 9s ease-in-out infinite'}}/>
  <div style={{position:'absolute',top:200,right:0,width:110,height:110,borderRadius:55,background:'radial-gradient(circle,rgba(168,85,247,0.06),transparent 65%)',filter:'blur(22px)',animation:'float 11s ease-in-out infinite 1s'}}/>
  <div style={{position:'absolute',bottom:120,left:30,width:80,height:80,borderRadius:40,background:'radial-gradient(circle,rgba(249,115,22,0.05),transparent 65%)',filter:'blur(20px)',animation:'float 7s ease-in-out infinite 0.5s'}}/>

  <div style={{position:'relative',zIndex:2,padding:'52px 20px 90px'}}>
    {/* Header */}
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:22}}>
      <div style={{display:'flex',alignItems:'center',gap:10}}>
        <div style={{width:34,height:34,borderRadius:11,background:'linear-gradient(135deg,#EF4444,#F97316,#EAB308)',backgroundSize:'300% 300%',animation:'gradShift 4s ease infinite',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 18px rgba(239,68,68,0.35)',position:'relative'}}>
          <div style={{position:'absolute',inset:-1,borderRadius:12,border:'1px solid rgba(255,255,255,0.15)',pointerEvents:'none'}}/>
          <span style={{fontSize:15,fontWeight:900,color:'#fff',textShadow:'0 1px 2px rgba(0,0,0,0.3)'}}>C</span>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <span style={{fontSize:17,fontWeight:800,color:'#fff',letterSpacing:0.5,lineHeight:1}}>CORREX</span>
          <span style={{fontSize:8,fontWeight:700,letterSpacing:3,color:'#444',lineHeight:1,marginTop:1}}>PRO</span>
        </div>
      </div>
      <div className="glass" style={{position:'relative',width:34,height:34,borderRadius:11,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        <div style={{position:'absolute',top:6,right:6,width:7,height:7,borderRadius:4,background:'#EF4444',boxShadow:'0 0 6px rgba(239,68,68,0.6)',border:'1.5px solid #040406'}}/>
      </div>
    </div>

    {/* Streak Card */}
    <div style={{animation:'float 4.5s ease-in-out infinite',marginBottom:14}}>
      <div className="glass" style={{borderRadius:22,padding:'16px 18px',position:'relative',overflow:'hidden',background:'linear-gradient(135deg,rgba(239,68,68,0.08),rgba(249,115,22,0.04),rgba(168,85,247,0.02))',boxShadow:'0 8px 32px rgba(239,68,68,0.06),0 2px 8px rgba(0,0,0,0.3)'}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,transparent 30%,rgba(255,255,255,0.02) 50%,transparent 70%)',backgroundSize:'200% 100%',animation:'shimmer 4s linear infinite',pointerEvents:'none'}}/>
        <div style={{position:'relative',display:'flex',alignItems:'center',gap:16}}>
          <div style={{position:'relative',width:60,height:60,flexShrink:0}}>
            <svg width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4"/><circle cx="30" cy="30" r="26" fill="none" stroke="url(#sg)" strokeWidth="4" strokeDasharray="136 163" strokeLinecap="round" transform="rotate(-90 30 30)"/><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#EF4444"/><stop offset="50%" stopColor="#F97316"/><stop offset="100%" stopColor="#EAB308"/></linearGradient></defs></svg>
            <span style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:900,color:'#fff',fontFamily:'var(--mono)',textShadow:'0 0 14px rgba(239,68,68,0.3)'}}>12</span>
          </div>
          <div>
            <div style={{fontSize:13,fontWeight:700,color:'#fff'}}>Day Streak</div>
            <div style={{fontSize:11,color:'rgba(255,255,255,0.35)',marginTop:2}}>Personal best: 18</div>
          </div>
        </div>
        <div style={{display:'flex',gap:7,marginTop:12}}>
          {days.map((d,i)=>(
            <div key={i} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:3}}>
              <div style={{width:22,height:22,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',
                background:done[i]?'linear-gradient(135deg,#EF4444,#F97316)':'rgba(255,255,255,0.03)',
                border:done[i]?'none':'1px solid rgba(255,255,255,0.08)',
                boxShadow:done[i]?'0 0 8px rgba(239,68,68,0.3)':'none',
                ...(i===4?{animation:'glowPulse 2s ease infinite'}:{})
              }}>
                {done[i]&&i!==4&&<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
                {i===4&&<span style={{fontSize:9,fontWeight:800,color:'#fff'}}>!</span>}
              </div>
              <span style={{fontSize:6,fontWeight:600,color:i===4?'#fff':'#555'}}>{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Routine Card */}
    <div style={{animation:'float 5s ease-in-out infinite 0.5s',marginBottom:14}}>
      <div className="glass" style={{borderRadius:22,overflow:'hidden',boxShadow:'0 10px 40px rgba(0,0,0,0.4)'}}>
        <div style={{height:2,background:'linear-gradient(90deg,#EF4444,#F97316,#A855F7,#8B5CF6)',backgroundSize:'300% 100%',animation:'gradShift 3s ease infinite'}}/>
        <div style={{padding:'16px 18px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <div style={{width:7,height:7,borderRadius:4,background:'#34D399',boxShadow:'0 0 8px rgba(52,211,153,0.5)',animation:'pulse 2s ease infinite'}}/>
              <span style={{fontSize:14,fontWeight:700,color:'#fff'}}>Today's Routine</span>
            </div>
            <span className="glass" style={{fontSize:10,color:'#555',padding:'4px 10px',borderRadius:8}}>~20 min</span>
          </div>
          {[{name:'APT Correction',sub:'5 exercises · 10 min',c:'#EF4444',icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>},
            {name:'Knock Knees',sub:'5 exercises · 10 min',c:'#A855F7',icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>}
          ].map((s,i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:10,background:`${s.c}06`,borderRadius:12,padding:'10px 12px',marginBottom:6}}>
              <div style={{width:3,height:36,borderRadius:2,background:s.c,boxShadow:`0 0 6px ${s.c}60`}}/>
              <div style={{width:28,height:28,borderRadius:9,background:`${s.c}15`,display:'flex',alignItems:'center',justifyContent:'center'}}>{s.icon}</div>
              <div><div style={{fontSize:12,fontWeight:700,color:s.c}}>{s.name}</div><div style={{fontSize:9,color:'#555',marginTop:1}}>{s.sub}</div></div>
            </div>
          ))}
          <div style={{position:'relative',marginTop:10}}>
            <div style={{position:'absolute',inset:-3,borderRadius:18,background:'linear-gradient(135deg,#EF4444,#F97316)',opacity:0.25,filter:'blur(10px)',animation:'breathe 3s ease infinite'}}/>
            <button className="bsh" style={{position:'relative',width:'100%',padding:'15px 0',borderRadius:16,border:'none',background:'#fff',fontSize:15,fontWeight:900,color:'#050505',letterSpacing:1.5,cursor:'pointer'}}>START ROUTINE</button>
          </div>
        </div>
      </div>
    </div>

    {/* Weekly Insight */}
    <div className="glass" style={{borderRadius:14,padding:'11px 14px',marginBottom:12,display:'flex',alignItems:'center',gap:10,borderColor:'rgba(52,211,153,0.1)'}}>
      <div style={{width:28,height:28,borderRadius:9,background:'rgba(52,211,153,0.1)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
      <div style={{flex:1}}><div style={{fontSize:10,fontWeight:700,color:'#34D399'}}>Weekly insight</div><div style={{fontSize:9,color:'#555'}}>You're 40% more consistent than last week</div></div>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
    </div>

    {/* Cue Cards */}
    <div style={{display:'flex',gap:8}}>
      {[{e:'🐛',t:'Bug cue · 3s',c:'#EF4444'},{e:'🦵',t:'Squeeze glutes',c:'#A855F7'},{e:'💨',t:'Breathe deeper',c:'#34D399'}].map((q,i)=>(
        <div key={i} style={{flex:1,background:`${q.c}08`,border:`1px solid ${q.c}15`,borderRadius:14,padding:'10px 8px',textAlign:'center'}}>
          <div style={{fontSize:18,marginBottom:3}}>{q.e}</div>
          <div style={{fontSize:8,fontWeight:600,color:q.c,lineHeight:1.3}}>{q.t}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Tab Bar */}
  <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'0 16px 10px',zIndex:20}}>
    <div className="glass" style={{borderRadius:20,padding:'10px 16px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
      {[{l:'Home',a:true,c:'#EF4444',ic:<svg width="16" height="16" viewBox="0 0 24 24" fill="#EF4444"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>},
        {l:'Library',a:false,c:'#444',ic:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>},
        {l:'Stats',a:false,c:'#444',ic:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>},
        {l:'Settings',a:false,c:'#444',ic:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2"><circle cx="12" cy="12" r="3"/></svg>}
      ].map((t,i)=>(
        <div key={i} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:2}}>
          <div style={{width:24,height:24,borderRadius:8,background:t.a?`${t.c}15`:'transparent',display:'flex',alignItems:'center',justifyContent:'center'}}>{t.ic}</div>
          <span style={{fontSize:7,fontWeight:t.a?700:500,color:t.c}}>{t.l}</span>
        </div>
      ))}
    </div>
  </div>
</div>
)}

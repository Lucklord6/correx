const cal=[1,1,1,1,1,0,0, 1,1,1,0,1,1,0, 1,1,1,1,1,1,1, 1,1,1,1,2,0,0]

export default function ProgressScreen(){return(
<div className="nr" style={{background:'#040406',minHeight:'100%',position:'relative'}}>
  <div style={{position:'absolute',top:80,left:'30%',width:150,height:150,borderRadius:75,background:'radial-gradient(circle,rgba(52,211,153,0.05),transparent)',filter:'blur(30px)',animation:'float 10s ease-in-out infinite'}}/>
  <div style={{position:'relative',zIndex:2,padding:'52px 20px 24px'}}>
    <div style={{fontSize:22,fontWeight:800,color:'#fff',marginBottom:18}}>Progress</div>
    {/* Streak */}
    <div style={{animation:'float 5s ease-in-out infinite',marginBottom:14}}>
      <div className="glass" style={{borderRadius:22,padding:'18px 20px',position:'relative',overflow:'hidden',background:'linear-gradient(135deg,rgba(239,68,68,0.08),rgba(249,115,22,0.05),rgba(168,85,247,0.02))',boxShadow:'0 8px 32px rgba(239,68,68,0.06)'}}>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.02),transparent)',backgroundSize:'200% 100%',animation:'shimmer 4s linear infinite',pointerEvents:'none'}}/>
        <div style={{position:'relative',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div><div style={{fontSize:48,fontWeight:900,color:'#fff',fontFamily:'var(--mono)',lineHeight:1,letterSpacing:-3,textShadow:'0 0 20px rgba(239,68,68,0.2)'}}>12</div><div style={{fontSize:9,fontWeight:700,color:'#F97316',letterSpacing:3,marginTop:3}}>DAY STREAK</div></div>
          <div style={{display:'flex',flexDirection:'column',gap:6,alignItems:'flex-end'}}>
            <div style={{display:'flex',alignItems:'center',gap:4}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg><span style={{fontSize:10,fontWeight:700,color:'#fff'}}>Best: 18</span></div>
            <div style={{display:'flex',alignItems:'center',gap:4}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg><span style={{fontSize:10,fontWeight:700,color:'#fff'}}>5/7 this week</span></div>
          </div>
        </div>
      </div>
    </div>
    {/* Calendar */}
    <div className="glass" style={{borderRadius:18,padding:16,marginBottom:14}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
        <span style={{fontSize:12,fontWeight:700,color:'#fff'}}>April 2026</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:5,marginBottom:4}}>
        {['M','T','W','T','F','S','S'].map((d,i)=><div key={i} style={{textAlign:'center',fontSize:7,fontWeight:600,color:'#444',paddingBottom:3}}>{d}</div>)}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:5}}>
        {cal.map((v,i)=><div key={i} style={{aspectRatio:1,borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',
          background:v===1?'rgba(52,211,153,0.2)':v===2?'linear-gradient(135deg,#EF4444,#F97316)':'transparent',
          border:v===0?'1px solid rgba(255,255,255,0.06)':'none',
          boxShadow:v===1?'0 0 4px rgba(52,211,153,0.3)':v===2?'0 0 10px rgba(239,68,68,0.4)':'none',
          ...(v===2?{animation:'glowPulse 2s ease infinite'}:{})
        }}>{v===1&&<div style={{width:4,height:4,borderRadius:2,background:'#34D399'}}/>}{v===2&&<div style={{width:4,height:4,borderRadius:2,background:'#fff'}}/>}</div>)}
      </div>
    </div>
    {/* Stats */}
    <div style={{display:'flex',gap:8}}>
      {[{v:'86%',l:'This Month',c:'#34D399'},{v:'72%',l:'All Time',c:'#3B82F6'},{v:'45',l:'Total Days',c:'#F97316'}].map((s,i)=>(
        <div key={i} className="glass" style={{flex:1,borderRadius:16,padding:14,textAlign:'center'}}>
          <div style={{fontSize:22,fontWeight:900,color:s.c,fontFamily:'var(--mono)'}}>{s.v}</div>
          <div style={{fontSize:8,color:'#555',fontWeight:600,marginTop:2}}>{s.l}</div>
        </div>
      ))}
    </div>
  </div>
</div>
)}

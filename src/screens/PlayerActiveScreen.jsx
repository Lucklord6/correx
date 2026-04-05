const segs = Array.from({length:10})

export default function PlayerActiveScreen(){return(
<div className="nr" style={{background:'#040406',minHeight:'100%',position:'relative'}}>
  <div style={{position:'absolute',top:'35%',left:'50%',width:200,height:200,transform:'translate(-50%,-50%)',borderRadius:100,background:'radial-gradient(circle,rgba(239,68,68,0.05),transparent 55%)',filter:'blur(35px)',animation:'float 6s ease-in-out infinite'}}/>

  <div style={{position:'relative',zIndex:2,padding:'52px 20px 24px',display:'flex',flexDirection:'column',minHeight:'100%'}}>
    {/* Top */}
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
      <div className="glass" style={{width:34,height:34,borderRadius:11,display:'flex',alignItems:'center',justifyContent:'center'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
      <div style={{display:'flex',alignItems:'baseline',gap:3}}><span style={{fontSize:26,fontWeight:900,color:'#fff',fontFamily:'var(--mono)'}}>3</span><span style={{fontSize:12,color:'#2A2A2A',fontWeight:600}}>/10</span></div>
      <div className="glass" style={{width:34,height:34,borderRadius:11,display:'flex',alignItems:'center',justifyContent:'center'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></div>
    </div>

    {/* Progress */}
    <div style={{display:'flex',gap:2,marginBottom:14}}>
      {segs.map((_,i)=><div key={i} style={{flex:1,height:3,borderRadius:2,
        background:i<2?'linear-gradient(90deg,#EF4444,#F97316)':i===2?'rgba(239,68,68,0.3)':i<5?'rgba(239,68,68,0.07)':'rgba(168,85,247,0.07)',
        boxShadow:i<2?'0 0 5px rgba(239,68,68,0.4)':'none'
      }}/>)}
    </div>

    {/* VIDEO DEMO — placeholder for your videos */}
    <div style={{borderRadius:18,overflow:'hidden',position:'relative',aspectRatio:'16/9',background:'#0A0A0A',border:'1px solid rgba(255,255,255,0.06)',marginBottom:10}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(239,68,68,0.06),transparent)'}}/>
      {/* ▶ Replace this div with your <video> element */}
      <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:6}}>
        <div style={{width:44,height:44,borderRadius:14,background:'rgba(255,255,255,0.08)',backdropFilter:'blur(10px)',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid rgba(255,255,255,0.1)'}}>
          <div style={{width:0,height:0,borderLeft:'14px solid rgba(255,255,255,0.8)',borderTop:'8px solid transparent',borderBottom:'8px solid transparent',marginLeft:3}}/>
        </div>
        <span style={{fontSize:9,color:'#333',fontWeight:500}}>Add your video here</span>
      </div>
      {/* Loop badge */}
      <div style={{position:'absolute',bottom:8,right:8,display:'flex',alignItems:'center',gap:3,background:'rgba(0,0,0,0.5)',borderRadius:7,padding:'4px 8px',backdropFilter:'blur(8px)'}}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" style={{animation:'loopIcon 2s ease infinite'}}><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>
        <span style={{fontSize:7,color:'rgba(255,255,255,0.7)',fontWeight:600}}>LOOP</span>
      </div>
      {/* Category pill */}
      <div style={{position:'absolute',top:8,left:8}}>
        <span style={{fontSize:8,background:'rgba(239,68,68,0.2)',color:'#EF4444',padding:'4px 10px',borderRadius:8,fontWeight:700,letterSpacing:1.5,backdropFilter:'blur(8px)',border:'1px solid rgba(239,68,68,0.15)'}}>APT</span>
      </div>
    </div>

    {/* Exercise name */}
    <div style={{textAlign:'center',marginBottom:4}}>
      <div style={{fontSize:20,fontWeight:900,color:'#fff',letterSpacing:-0.5}}>Pelvic Tilt</div>
      <div style={{fontSize:10,color:'#444',marginTop:3}}>Set 2 of 3 · 15 reps · 3s hold</div>
    </div>

    {/* Timer Ring */}
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'14px 0',flex:1}}>
      <div style={{position:'relative',width:130,height:130}}>
        <div style={{position:'absolute',inset:-12,borderRadius:'50%',border:'1px solid rgba(239,68,68,0.05)',animation:'breathe 4s ease-in-out infinite'}}/>
        <div style={{position:'absolute',inset:-6,borderRadius:'50%',border:'1px solid rgba(239,68,68,0.1)',animation:'breathe 3s ease-in-out infinite 0.5s'}}/>
        <div style={{position:'absolute',inset:15,borderRadius:'50%',background:'radial-gradient(circle,rgba(239,68,68,0.06),transparent 70%)',filter:'blur(8px)'}}/>
        <svg width="130" height="130" viewBox="0 0 130 130" style={{transform:'rotate(-90deg)'}}>
          <circle cx="65" cy="65" r="56" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="4.5"/>
          <circle cx="65" cy="65" r="56" fill="none" stroke="url(#tg)" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="230 351.9"><animate attributeName="stroke-dasharray" values="227 351.9;233 351.9;227 351.9" dur="2.5s" repeatCount="indefinite"/></circle>
          <circle cx="65" cy="65" r="56" fill="none" stroke="url(#tg)" strokeWidth="7" strokeLinecap="round" strokeDasharray="230 351.9" opacity="0.15" style={{filter:'blur(2px)'}}><animate attributeName="stroke-dasharray" values="227 351.9;233 351.9;227 351.9" dur="2.5s" repeatCount="indefinite"/></circle>
          <defs><linearGradient id="tg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#EF4444"/><stop offset="50%" stopColor="#F97316"/><stop offset="100%" stopColor="#EAB308"/></linearGradient></defs>
        </svg>
        <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <span className="gt" style={{fontSize:9,fontWeight:800,letterSpacing:5,textTransform:'uppercase'}}>GO</span>
          <span style={{fontSize:38,fontWeight:900,color:'#fff',fontFamily:'var(--mono)',letterSpacing:-3,lineHeight:1,marginTop:2,textShadow:'0 0 20px rgba(255,255,255,0.06)'}}>0:42</span>
        </div>
      </div>
    </div>

    {/* Description */}
    <div className="glass" style={{borderRadius:14,padding:'10px 14px',textAlign:'center',marginBottom:16}}>
      <p style={{fontSize:10,color:'#555',margin:0,lineHeight:1.6}}>Squash the bug — press lower back into floor with abs and glutes. Hold 3s each rep.</p>
    </div>

    {/* Controls */}
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:24}}>
      <div className="glass" style={{width:42,height:42,borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg></div>
      <div style={{position:'relative'}}>
        <div style={{position:'absolute',inset:-4,borderRadius:22,background:'#fff',opacity:0.08,filter:'blur(12px)',animation:'breathe 3s ease infinite'}}/>
        <div style={{position:'relative',width:64,height:64,borderRadius:22,background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 40px rgba(255,255,255,0.06)'}}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#050505"><rect x="6" y="4" width="4" height="16" rx="1.5"/><rect x="14" y="4" width="4" height="16" rx="1.5"/></svg>
        </div>
      </div>
      <div className="glass" style={{width:42,height:42,borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg></div>
    </div>
  </div>
</div>
)}

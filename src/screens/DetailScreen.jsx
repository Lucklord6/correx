export default function DetailScreen(){return(
<div className="nr" style={{background:'#040406',minHeight:'100%',position:'relative'}}>
  <div style={{position:'absolute',top:100,left:'50%',width:160,height:160,transform:'translateX(-50%)',borderRadius:80,background:'radial-gradient(circle,rgba(168,85,247,0.06),transparent)',filter:'blur(30px)'}}/>
  <div style={{position:'relative',zIndex:2,padding:'52px 20px 24px'}}>
    <div className="glass" style={{width:34,height:34,borderRadius:11,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:14}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg></div>
    {/* Video placeholder */}
    <div style={{borderRadius:18,overflow:'hidden',position:'relative',aspectRatio:'16/9',background:'#0A0A0A',border:'1px solid rgba(255,255,255,0.06)',marginBottom:14}}>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(168,85,247,0.06),transparent)'}}/>
      <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:6}}>
        <div style={{width:48,height:48,borderRadius:16,background:'rgba(255,255,255,0.08)',backdropFilter:'blur(10px)',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid rgba(255,255,255,0.1)'}}>
          <div style={{width:0,height:0,borderLeft:'14px solid rgba(255,255,255,0.8)',borderTop:'8px solid transparent',borderBottom:'8px solid transparent',marginLeft:3}}/>
        </div>
        <span style={{fontSize:9,color:'#333'}}>Add your video here</span>
      </div>
      <div style={{position:'absolute',top:10,right:10,background:'linear-gradient(135deg,#EF4444,#F97316)',borderRadius:8,padding:'4px 10px',display:'flex',alignItems:'center',gap:4}}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="#fff"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <span style={{fontSize:8,fontWeight:800,color:'#fff'}}>PRO</span>
      </div>
    </div>
    <span style={{fontSize:9,background:'rgba(168,85,247,0.12)',color:'#A855F7',padding:'4px 12px',borderRadius:20,fontWeight:700,letterSpacing:1.5}}>KNOCK KNEES</span>
    <div style={{fontSize:20,fontWeight:900,color:'#fff',marginTop:8,letterSpacing:-0.5}}>Clamshells with Band</div>
    <div style={{display:'flex',gap:8,margin:'14px 0'}}>
      {[{v:'4',l:'Sets',c:'#fff'},{v:'15',l:'Each Side',c:'#fff'},{v:'25s',l:'Rest',c:'#A855F7'}].map((s,i)=>(
        <div key={i} className="glass" style={{flex:1,borderRadius:14,padding:'12px 8px',textAlign:'center'}}>
          <div style={{fontSize:22,fontWeight:900,color:s.c,fontFamily:'var(--mono)',textShadow:s.c!=='#fff'?`0 0 10px ${s.c}40`:'none'}}>{s.v}</div>
          <div style={{fontSize:8,color:'#555',fontWeight:600,marginTop:2}}>{s.l}</div>
        </div>
      ))}
    </div>
    <div className="glass" style={{borderRadius:14,padding:'12px 14px',marginBottom:10}}>
      <div style={{fontSize:10,fontWeight:700,color:'#fff',marginBottom:4}}>How to do it</div>
      <p style={{fontSize:11,color:'#888',lineHeight:1.6,margin:0}}>Band above knees. Knees bent at 45°, feet together. Open top knee toward ceiling rotating at hip. Squeeze outer glute hard at top. Lower with control. Don't roll hips.</p>
    </div>
    <div className="glass" style={{borderRadius:14,padding:'12px 14px',display:'flex',alignItems:'center',gap:10,borderColor:'rgba(168,85,247,0.1)'}}>
      <div style={{width:32,height:32,borderRadius:10,background:'rgba(168,85,247,0.1)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
      <div><div style={{fontSize:10,fontWeight:700,color:'#A855F7'}}>Form Cue</div><div style={{fontSize:10,color:'#888',marginTop:1}}>Glute squeeze throughout — especially at the top</div></div>
    </div>
  </div>
</div>
)}

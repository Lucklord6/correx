export default function CompleteScreen(){return(
<div className="nr" style={{background:'#040406',minHeight:'100%',position:'relative'}}>
  <div style={{position:'absolute',top:80,left:'50%',width:200,height:200,transform:'translateX(-50%)',borderRadius:100,background:'radial-gradient(circle,rgba(52,211,153,0.08),transparent 60%)',filter:'blur(40px)'}}/>
  <div style={{position:'relative',zIndex:2,padding:'52px 20px 24px'}}>
    <div style={{height:3,borderRadius:2,background:'linear-gradient(90deg,#EF4444,#F97316,#A855F7)',boxShadow:'0 0 8px rgba(239,68,68,0.3)',marginBottom:32}}/>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:24}}>
      <div style={{width:72,height:72,borderRadius:22,background:'rgba(52,211,153,0.1)',border:'1.5px solid rgba(52,211,153,0.2)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16}}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg></div>
      <div style={{fontSize:24,fontWeight:900,color:'#fff'}}>Done.</div>
      <div style={{fontSize:12,color:'#555',marginTop:4}}>Completed in 18:42</div>
    </div>
    <div style={{display:'flex',gap:8,marginBottom:16}}>
      {[{v:'13',l:'Streak',c:'#F97316'},{v:'10',l:'Exercises',c:'#EF4444'},{v:'5/7',l:'This Week',c:'#34D399'}].map((s,i)=>(
        <div key={i} className="glass" style={{flex:1,borderRadius:16,padding:14,textAlign:'center'}}>
          <div style={{fontSize:24,fontWeight:900,color:s.c,fontFamily:'var(--mono)'}}>{s.v}</div>
          <div style={{fontSize:9,color:'#555',fontWeight:600,marginTop:2}}>{s.l}</div>
        </div>
      ))}
    </div>
    <div className="glass" style={{borderRadius:16,padding:'12px 16px',marginBottom:14,display:'flex',alignItems:'center',gap:12}}>
      <span style={{fontSize:24}}>🔥</span>
      <div><div style={{fontSize:13,fontWeight:700,color:'#fff'}}>Streak +1</div><div style={{fontSize:10,color:'#888'}}>13 days and counting!</div></div>
    </div>
    <div className="glass" style={{borderRadius:16,padding:16,marginBottom:20}}>
      <div style={{fontSize:12,color:'#888',fontStyle:'italic',lineHeight:1.6}}>"Consistency beats intensity. Show up again tomorrow."</div>
    </div>
    <button className="bsh" style={{width:'100%',padding:'16px 0',borderRadius:16,border:'none',background:'#fff',fontSize:15,fontWeight:900,color:'#050505',letterSpacing:1,cursor:'pointer'}}>CLOSE</button>
  </div>
</div>
)}

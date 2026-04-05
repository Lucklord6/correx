export default function BodyScanScreen(){
const areas=[{l:'Lower Back',c:'#EF4444',t:'Tight',top:'38%',left:'50%'},{l:'Hips',c:'#F97316',t:'Painful',top:'48%',left:'50%'},{l:'L Knee',c:'#A855F7',t:'Weak',top:'65%',left:'38%'},{l:'R Knee',c:'#A855F7',t:'Weak',top:'65%',left:'62%'}]
return(
<div className="nr" style={{background:'#040406',minHeight:'100%',position:'relative'}}>
  <div style={{position:'absolute',top:'50%',left:'50%',width:180,height:180,transform:'translate(-50%,-50%)',borderRadius:90,background:'radial-gradient(circle,rgba(59,130,246,0.06),transparent)',filter:'blur(40px)'}}/>
  <div style={{position:'relative',zIndex:2,padding:'52px 20px 24px'}}>
    <div style={{display:'flex',gap:4,marginBottom:18}}>{[1,2,3,4,5].map(s=><div key={s} style={{flex:1,height:3,borderRadius:2,background:s===1?'#3B82F6':'rgba(255,255,255,0.06)',boxShadow:s===1?'0 0 6px rgba(59,130,246,0.4)':'none'}}/>)}</div>
    <div style={{fontSize:20,fontWeight:900,color:'#fff',marginBottom:4}}>Where do you feel it?</div>
    <div style={{fontSize:11,color:'#555',marginBottom:16}}>Tap areas that feel tight, weak, or painful</div>
    <div style={{position:'relative',margin:'0 auto 14px',width:200,height:360}}>
      <div style={{position:'absolute',left:0,right:0,height:1,background:'linear-gradient(90deg,transparent,rgba(59,130,246,0.3),transparent)',animation:'scan 4s ease-in-out infinite'}}/>
      <svg viewBox="0 0 200 360" style={{width:'100%',height:'100%'}} fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5">
        <ellipse cx="100" cy="35" rx="22" ry="28"/><line x1="92" y1="63" x2="92" y2="78"/><line x1="108" y1="63" x2="108" y2="78"/>
        <path d="M92 78 Q60 80 50 100"/><path d="M108 78 Q140 80 150 100"/><path d="M50 100 L55 200 Q75 215 100 215 Q125 215 145 200 L150 100"/>
        <path d="M50 100 Q42 140 38 180 Q36 200 40 220"/><path d="M150 100 Q158 140 162 180 Q164 200 160 220"/>
        <path d="M75 215 Q70 280 68 340"/><path d="M125 215 Q130 280 132 340"/>
        <circle cx="70" cy="280" r="8" strokeDasharray="3 2"/><circle cx="130" cy="280" r="8" strokeDasharray="3 2"/>
      </svg>
      {areas.map((a,i)=><div key={i} style={{position:'absolute',top:a.top,left:a.left,transform:'translate(-50%,-50%)'}}><div style={{width:36,height:22,borderRadius:8,background:`${a.c}20`,border:`1px solid ${a.c}40`,boxShadow:`0 0 8px ${a.c}30`,display:'flex',alignItems:'center',justifyContent:'center',animation:`breathe 2s ease infinite ${i*0.3}s`}}><div style={{width:6,height:6,borderRadius:3,background:a.c}}/></div></div>)}
    </div>
    <div style={{display:'flex',justifyContent:'center',gap:16,marginBottom:10}}>
      {[{l:'Tight',c:'#EF4444'},{l:'Painful',c:'#F97316'},{l:'Weak',c:'#A855F7'}].map((x,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:4}}><div style={{width:8,height:8,borderRadius:4,background:x.c}}/><span style={{fontSize:10,fontWeight:600,color:'#888'}}>{x.l}</span></div>)}
    </div>
    <div style={{textAlign:'center',marginBottom:12}}><span style={{fontSize:12,fontWeight:700,color:'#3B82F6'}}>4 areas selected</span></div>
    <button style={{width:'100%',padding:'15px 0',borderRadius:16,border:'none',background:'#3B82F6',fontSize:14,fontWeight:800,color:'#fff',letterSpacing:0.5,cursor:'pointer',boxShadow:'0 4px 20px rgba(59,130,246,0.3)'}}>CONTINUE</button>
  </div>
</div>
)}

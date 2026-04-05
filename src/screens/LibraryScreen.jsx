const apt=[{n:'Couch Stretch',s:'2 sets',r:'90s each',x:'No rest',e:'🧘'},{n:'Double Knee to Chest',s:'2 sets',r:'45s hold',x:'No rest',e:'🦵'},{n:'Pelvic Tilt — Bug Cue',s:'3 sets',r:'15 reps · 3s',x:'20s rest',e:'🐛'},{n:'Swipers',s:'2 sets',r:'10 reps',x:'20s rest',e:'🔄'},{n:'Bridge & Reach Overs',s:'2 sets',r:'45s',x:'20s rest',e:'🌉'}]
const kk=[{n:'Frog Stretch',s:'1 set',r:'2 min hold',x:'No rest',e:'🐸'},{n:'Clamshells with Band',s:'4 sets',r:'15 each',x:'25s rest',e:'🐚'},{n:'Side-Lying Abduction',s:'3 sets',r:'15 each',x:'25s rest',e:'🦿'},{n:'Banded Glute Bridge',s:'3 sets',r:'12 reps',x:'25s rest',e:'🍑'},{n:'Butterfly Stretch',s:'2 sets',r:'45s',x:'No rest',e:'🦋'}]

const Card=({ex,c})=>(
  <div className="glass" style={{borderRadius:16,padding:'12px 14px',marginBottom:6,display:'flex',alignItems:'center',gap:12,boxShadow:'0 4px 16px rgba(0,0,0,0.2)'}}>
    <div style={{width:38,height:38,borderRadius:11,background:`${c}12`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:16}}>{ex.e}</div>
    <div style={{flex:1,minWidth:0}}>
      <div style={{fontSize:13,fontWeight:700,color:'#fff',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{ex.n}</div>
      <div style={{display:'flex',gap:4,marginTop:4,flexWrap:'wrap'}}>
        <span style={{fontSize:8,background:`${c}15`,color:c,padding:'2px 8px',borderRadius:6,fontWeight:600}}>{ex.s}</span>
        <span style={{fontSize:8,background:'rgba(255,255,255,0.04)',color:'#888',padding:'2px 8px',borderRadius:6}}>{ex.r}</span>
        <span style={{fontSize:8,background:`${c}08`,color:c,padding:'2px 8px',borderRadius:6}}>{ex.x}</span>
      </div>
    </div>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
)

export default function LibraryScreen(){return(
<div className="nr" style={{background:'#040406',minHeight:'100%',position:'relative'}}>
  <div style={{position:'absolute',top:60,right:0,width:120,height:120,borderRadius:60,background:'radial-gradient(circle,rgba(168,85,247,0.06),transparent)',filter:'blur(25px)',animation:'float 9s ease-in-out infinite'}}/>
  <div style={{position:'relative',zIndex:2,padding:'52px 20px 90px'}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:18}}>
      <div style={{fontSize:22,fontWeight:800,color:'#fff',letterSpacing:-0.3}}>Library</div>
      <div className="glass" style={{width:34,height:34,borderRadius:11,display:'flex',alignItems:'center',justifyContent:'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
    </div>
    <div style={{display:'flex',gap:6,marginBottom:18}}>
      {[{l:'All',a:true,c:'#fff',bg:'rgba(255,255,255,0.08)'},{l:'APT',a:false,c:'#EF4444',bg:'rgba(239,68,68,0.08)'},{l:'Knees',a:false,c:'#A855F7',bg:'rgba(168,85,247,0.08)'}].map((p,i)=>(
        <div key={i} style={{padding:'6px 16px',borderRadius:20,fontSize:11,fontWeight:700,background:p.a?p.bg:'transparent',color:p.a?p.c:'#555',border:p.a?'none':'1px solid rgba(255,255,255,0.06)'}}>{p.l}</div>
      ))}
    </div>
    <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}><div style={{width:3,height:18,borderRadius:2,background:'#EF4444',boxShadow:'0 0 6px rgba(239,68,68,0.4)'}}/><span style={{fontSize:12,fontWeight:800,color:'#EF4444',textTransform:'uppercase',letterSpacing:1.5}}>I. APT Correction</span><span style={{fontSize:9,color:'#444',marginLeft:'auto'}}>5 exercises</span></div>
    {apt.map((ex,i)=><Card key={i} ex={ex} c="#EF4444"/>)}
    <div style={{display:'flex',alignItems:'center',gap:8,margin:'18px 0 10px'}}><div style={{width:3,height:18,borderRadius:2,background:'#A855F7',boxShadow:'0 0 6px rgba(168,85,247,0.4)'}}/><span style={{fontSize:12,fontWeight:800,color:'#A855F7',textTransform:'uppercase',letterSpacing:1.5}}>II. Knock Knees</span><span style={{fontSize:9,color:'#444',marginLeft:'auto'}}>5 exercises</span></div>
    {kk.map((ex,i)=><Card key={i} ex={ex} c="#A855F7"/>)}
  </div>
</div>
)}

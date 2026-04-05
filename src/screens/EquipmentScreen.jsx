const eq=[{e:'🏋️',l:'Band',s:1},{e:'🧘',l:'Mat',s:1},{e:'🚪',l:'Doorway',s:1},{e:'🪑',l:'Chair',s:0},{e:'🧱',l:'Wall',s:0},{e:'🛋️',l:'Couch',s:1},{e:'🎾',l:'Ball',s:0},{e:'🧻',l:'Roller',s:0},{e:'🤷',l:'Nothing',s:0}]

export default function EquipmentScreen(){return(
<div className="nr" style={{background:'#040406',minHeight:'100%',position:'relative'}}>
  <div style={{position:'absolute',bottom:80,right:0,width:140,height:140,borderRadius:70,background:'radial-gradient(circle,rgba(59,130,246,0.05),transparent)',filter:'blur(30px)'}}/>
  <div style={{position:'relative',zIndex:2,padding:'52px 20px 24px'}}>
    <div style={{display:'flex',gap:4,marginBottom:18}}>{[1,2,3,4,5].map(s=><div key={s} style={{flex:1,height:3,borderRadius:2,background:s<=4?'#3B82F6':'rgba(255,255,255,0.06)',boxShadow:s<=4?'0 0 4px rgba(59,130,246,0.3)':'none'}}/>)}</div>
    <div style={{fontSize:20,fontWeight:900,color:'#fff',marginBottom:4}}>What do you have?</div>
    <div style={{fontSize:11,color:'#555',marginBottom:14}}>Select your available equipment</div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,marginBottom:18}}>
      {eq.map((x,i)=>(
        <div key={i} className="glass" style={{borderRadius:16,padding:'12px 6px',textAlign:'center',position:'relative',borderColor:x.s?'rgba(52,211,153,0.3)':'rgba(255,255,255,0.06)',background:x.s?'rgba(52,211,153,0.05)':'rgba(255,255,255,0.02)'}}>
          {!!x.s&&<div style={{position:'absolute',top:6,right:6,width:16,height:16,borderRadius:8,background:'#34D399',display:'flex',alignItems:'center',justifyContent:'center'}}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>}
          <div style={{fontSize:22,marginBottom:3}}>{x.e}</div>
          <div style={{fontSize:9,fontWeight:600,color:x.s?'#34D399':'#888'}}>{x.l}</div>
        </div>
      ))}
    </div>
    <div style={{fontSize:13,fontWeight:700,color:'#fff',marginBottom:8}}>Time commitment</div>
    <div style={{display:'flex',gap:6,marginBottom:18}}>
      {['5 min','10 min','20 min','30 min'].map((t,i)=>(
        <div key={i} style={{flex:1,padding:'10px 4px',borderRadius:12,textAlign:'center',fontSize:12,fontWeight:700,background:i===2?'rgba(59,130,246,0.15)':'transparent',color:i===2?'#3B82F6':'#555',border:i===2?'1px solid rgba(59,130,246,0.3)':'1px solid rgba(255,255,255,0.06)'}}>{t}</div>
      ))}
    </div>
    <div className="glass" style={{borderRadius:16,padding:'12px 16px',marginBottom:20,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div><div style={{fontSize:13,fontWeight:700,color:'#fff'}}>Include warm-up</div><div style={{fontSize:10,color:'#555',marginTop:2}}>Add 3-min dynamic warm-up</div></div>
      <div style={{width:44,height:24,borderRadius:12,background:'#34D399',position:'relative',boxShadow:'0 0 8px rgba(52,211,153,0.3)'}}><div style={{position:'absolute',top:2,right:2,width:20,height:20,borderRadius:10,background:'#fff',boxShadow:'0 1px 3px rgba(0,0,0,0.3)'}}/></div>
    </div>
    <button style={{width:'100%',padding:'15px 0',borderRadius:16,border:'none',background:'#3B82F6',fontSize:14,fontWeight:800,color:'#fff',cursor:'pointer',boxShadow:'0 4px 20px rgba(59,130,246,0.3)'}}>BUILD MY ROUTINE</button>
  </div>
</div>
)}

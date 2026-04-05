export default function ChatScreen(){return(
<div className="nr" style={{background:'#040406',minHeight:'100%',position:'relative',display:'flex',flexDirection:'column'}}>
  <div style={{position:'absolute',top:80,right:0,width:120,height:120,borderRadius:60,background:'radial-gradient(circle,rgba(249,115,22,0.04),transparent)',filter:'blur(30px)'}}/>
  <div style={{position:'relative',zIndex:2,display:'flex',flexDirection:'column',minHeight:'100%'}}>
    {/* Header */}
    <div style={{padding:'52px 20px 12px',display:'flex',alignItems:'center',gap:10,borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
      <div style={{width:34,height:34,borderRadius:11,background:'linear-gradient(135deg,#EF4444,#F97316,#EAB308)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 14px rgba(239,68,68,0.25)'}}><span style={{fontSize:14,fontWeight:900,color:'#fff'}}>C</span></div>
      <div style={{flex:1}}>
        <div style={{display:'flex',alignItems:'center',gap:6}}><span style={{fontSize:14,fontWeight:800,color:'#fff'}}>Ask Correx</span><span style={{fontSize:8,background:'rgba(249,115,22,0.15)',color:'#F97316',padding:'2px 8px',borderRadius:10,fontWeight:700}}>PRO</span></div>
        <div style={{display:'flex',alignItems:'center',gap:3,marginTop:1}}><div style={{width:5,height:5,borderRadius:3,background:'#34D399',boxShadow:'0 0 6px rgba(52,211,153,0.5)'}}/><span style={{fontSize:9,color:'#34D399',fontWeight:600}}>Online</span></div>
      </div>
    </div>
    {/* Quick Prompts */}
    <div style={{padding:'10px 20px',display:'flex',gap:6,overflowX:'auto',scrollbarWidth:'none'}}>
      {[{t:'Why does my back arch?',c:'#EF4444'},{t:'Knee pain during squats',c:'#A855F7'},{t:'5-min desk stretch',c:'#3B82F6'}].map((p,i)=>(
        <div key={i} style={{flexShrink:0,padding:'6px 14px',borderRadius:20,fontSize:10,fontWeight:600,background:`${p.c}10`,color:p.c,border:`1px solid ${p.c}20`}}>{p.t}</div>
      ))}
    </div>
    {/* Messages */}
    <div style={{flex:1,padding:'10px 20px',display:'flex',flexDirection:'column',gap:10,overflowY:'auto'}}>
      <div style={{display:'flex',justifyContent:'flex-end'}}><div className="glass" style={{borderRadius:'16px 16px 4px 16px',padding:'10px 14px',maxWidth:'80%'}}><p style={{fontSize:12,color:'#fff',margin:0}}>My knees cave in when I squat. What's causing it?</p></div></div>
      <div style={{display:'flex',gap:8,alignItems:'flex-start'}}>
        <div style={{width:24,height:24,borderRadius:8,background:'linear-gradient(135deg,#EF4444,#F97316)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:2}}><span style={{fontSize:8,fontWeight:900,color:'#fff'}}>C</span></div>
        <div className="glass" style={{borderRadius:'4px 16px 16px 16px',padding:'10px 14px',maxWidth:'85%'}}>
          <p style={{fontSize:12,color:'#ccc',margin:'0 0 6px',lineHeight:1.6}}>Knee valgus usually comes from <span style={{color:'#A855F7',fontWeight:600}}>weak glute medius</span> and <span style={{color:'#EF4444',fontWeight:600}}>tight adductors</span>.</p>
          <div style={{display:'flex',flexDirection:'column',gap:3,marginBottom:10}}>
            {[{d:'#A855F7',t:"Glute medius can't stabilize femur"},{d:'#EF4444',t:'Inner thigh pulls knees inward'},{d:'#F97316',t:'Ankle mobility may contribute'}].map((x,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:5}}><div style={{width:5,height:5,borderRadius:3,background:x.d,flexShrink:0}}/><span style={{fontSize:10,color:'#888'}}>{x.t}</span></div>
            ))}
          </div>
          <div style={{background:'rgba(168,85,247,0.08)',border:'1px solid rgba(168,85,247,0.15)',borderRadius:12,padding:'10px 12px'}}>
            <div style={{fontSize:10,fontWeight:700,color:'#A855F7',marginBottom:4}}>Quick Fix Routine — 8 min</div>
            <div style={{display:'flex',flexDirection:'column',gap:2}}><span style={{fontSize:9,color:'#888'}}>1. Frog Stretch · 2 min</span><span style={{fontSize:9,color:'#888'}}>2. Clamshells · 3×15</span><span style={{fontSize:9,color:'#888'}}>3. Banded Glute Bridge · 3×12</span></div>
            <div style={{marginTop:8,background:'rgba(168,85,247,0.15)',borderRadius:10,padding:'8px 0',textAlign:'center'}}><span style={{fontSize:10,fontWeight:700,color:'#A855F7'}}>Start this routine</span></div>
          </div>
        </div>
      </div>
      <div style={{display:'flex',gap:8,alignItems:'flex-start'}}>
        <div style={{width:24,height:24,borderRadius:8,background:'linear-gradient(135deg,#EF4444,#F97316)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:2}}><span style={{fontSize:8,fontWeight:900,color:'#fff'}}>C</span></div>
        <div className="glass" style={{borderRadius:'4px 16px 16px 16px',padding:'10px 14px'}}>
          <div style={{display:'flex',gap:4}}>{[0,1,2].map(i=><div key={i} style={{width:6,height:6,borderRadius:3,background:'#555',animation:`typing 1s ease infinite ${i*0.2}s`}}/>)}</div>
        </div>
      </div>
    </div>
    {/* Input */}
    <div style={{padding:'12px 20px',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <div className="glass" style={{flex:1,borderRadius:14,padding:'11px 16px'}}><span style={{fontSize:12,color:'#333'}}>Ask anything about your body...</span></div>
        <div style={{width:40,height:40,borderRadius:13,background:'linear-gradient(135deg,#EF4444,#F97316)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 12px rgba(239,68,68,0.25)'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
      </div>
    </div>
  </div>
</div>
)}

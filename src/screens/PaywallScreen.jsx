export default function PaywallScreen(){return(
<div className="nr" style={{background:'#040406',minHeight:'100%',position:'relative'}}>
  <div style={{position:'absolute',top:30,left:'50%',width:200,height:200,transform:'translateX(-50%)',borderRadius:100,background:'radial-gradient(circle,rgba(239,68,68,0.07),rgba(168,85,247,0.04) 50%,transparent 65%)',filter:'blur(35px)'}}/>
  <div style={{position:'relative',zIndex:2,padding:'52px 20px 24px',display:'flex',flexDirection:'column',minHeight:'100%'}}>
    <div style={{display:'flex',justifyContent:'flex-end',marginBottom:10}}><div className="glass" style={{width:32,height:32,borderRadius:11,display:'flex',alignItems:'center',justifyContent:'center'}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div></div>
    <div style={{textAlign:'center',marginBottom:24}}>
      <div style={{width:52,height:52,borderRadius:17,background:'linear-gradient(135deg,#EF4444,#F97316,#EAB308)',backgroundSize:'300% 300%',animation:'gradShift 4s ease infinite',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',boxShadow:'0 0 30px rgba(239,68,68,0.3)'}}><span style={{fontSize:24,fontWeight:900,color:'#fff'}}>C</span></div>
      <div style={{fontSize:24,fontWeight:900,color:'#fff',letterSpacing:-0.5}}>Unlock Correx Pro</div>
      <div style={{fontSize:11,color:'#555',marginTop:6}}>Everything you need to fix your body</div>
    </div>
    <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:24}}>
      {[{t:'Guided timer with haptics',d:'Hands-free, just follow along'},{t:'HD video demos',d:'Perfect form every exercise'},{t:'Progress tracking & streaks',d:'See your consistency grow'},{t:'Custom routines & new content',d:'Updated monthly'}].map((f,i)=>(
        <div key={i} className="glass" style={{borderRadius:14,padding:'12px 14px',display:'flex',alignItems:'center',gap:12,borderColor:'rgba(52,211,153,0.08)'}}>
          <div style={{width:28,height:28,borderRadius:9,background:'rgba(52,211,153,0.1)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
          <div><div style={{fontSize:12,fontWeight:700,color:'#fff'}}>{f.t}</div><div style={{fontSize:9,color:'#555',marginTop:1}}>{f.d}</div></div>
        </div>
      ))}
    </div>
    <div style={{marginTop:'auto'}}>
      <div style={{position:'relative',marginBottom:10}}>
        <div style={{position:'absolute',top:-8,left:'50%',transform:'translateX(-50%)',background:'linear-gradient(90deg,#EF4444,#F97316)',borderRadius:8,padding:'3px 12px',zIndex:1}}><span style={{fontSize:8,fontWeight:800,color:'#fff',letterSpacing:1,textTransform:'uppercase'}}>Save 44%</span></div>
        <div className="glass" style={{borderRadius:18,padding:'16px 18px',textAlign:'center',borderColor:'rgba(239,68,68,0.25)',boxShadow:'0 0 15px rgba(239,68,68,0.08)'}}>
          <div style={{fontSize:15,fontWeight:800,color:'#fff'}}>$39.99<span style={{fontSize:11,color:'#666',fontWeight:500}}> /year</span></div>
          <div style={{fontSize:9,color:'#555',marginTop:3}}>7-day free trial · Cancel anytime</div>
        </div>
      </div>
      <div className="glass" style={{borderRadius:16,padding:'14px 18px',textAlign:'center',marginBottom:14}}>
        <div style={{fontSize:13,fontWeight:700,color:'#888'}}>$5.99<span style={{fontSize:10,color:'#555',fontWeight:500}}> /month</span></div>
      </div>
      <div style={{position:'relative',marginBottom:10}}>
        <div style={{position:'absolute',inset:-3,borderRadius:18,background:'linear-gradient(135deg,#EF4444,#F97316)',opacity:0.2,filter:'blur(10px)',animation:'breathe 3s ease infinite'}}/>
        <button className="bsh" style={{position:'relative',width:'100%',padding:'16px 0',borderRadius:16,border:'none',background:'#fff',fontSize:15,fontWeight:900,color:'#050505',letterSpacing:0.5,cursor:'pointer'}}>START FREE TRIAL</button>
      </div>
      <div style={{textAlign:'center'}}><span style={{fontSize:10,fontWeight:600,color:'#333'}}>Restore purchases</span></div>
    </div>
  </div>
</div>
)}

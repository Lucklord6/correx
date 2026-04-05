export default function PlayerRestScreen(){return(
<div className="nr" style={{background:'#040406',minHeight:'100%',position:'relative'}}>
  <div style={{position:'absolute',top:'35%',left:'50%',width:200,height:200,transform:'translate(-50%,-50%)',borderRadius:100,background:'radial-gradient(circle,rgba(52,211,153,0.06),transparent 55%)',filter:'blur(40px)'}}/>
  <div style={{position:'relative',zIndex:2,padding:'52px 20px 24px',display:'flex',flexDirection:'column',minHeight:'100%'}}>
    <div style={{textAlign:'center',marginBottom:12}}><span style={{fontSize:26,fontWeight:900,color:'#fff',fontFamily:'var(--mono)'}}>3</span><span style={{fontSize:12,color:'#2A2A2A',fontWeight:600}}>/10</span></div>
    <div style={{display:'flex',gap:2,marginBottom:16}}>
      {Array(10).fill(0).map((_,i)=><div key={i} style={{flex:1,height:3,borderRadius:2,background:i<3?'linear-gradient(90deg,#EF4444,#F97316)':i<5?'rgba(239,68,68,0.07)':'rgba(168,85,247,0.07)',boxShadow:i<3?'0 0 4px rgba(239,68,68,0.4)':'none'}}/>)}
    </div>
    <div style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{position:'relative',width:160,height:160}}>
        <div style={{position:'absolute',inset:-14,borderRadius:'50%',border:'1px solid rgba(52,211,153,0.06)',animation:'breathe 3s ease infinite'}}/>
        <svg width="160" height="160" viewBox="0 0 160 160" style={{transform:'rotate(-90deg)'}}>
          <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="5"/>
          <circle cx="80" cy="80" r="68" fill="none" stroke="#34D399" strokeWidth="5" strokeLinecap="round" strokeDasharray="200 427"/>
          <circle cx="80" cy="80" r="68" fill="none" stroke="#34D399" strokeWidth="8" strokeLinecap="round" strokeDasharray="200 427" opacity="0.15" style={{filter:'blur(3px)'}}/>
        </svg>
        <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontSize:10,fontWeight:800,color:'#34D399',letterSpacing:4,textTransform:'uppercase'}}>REST</span>
          <span style={{fontSize:44,fontWeight:900,color:'#34D399',fontFamily:'var(--mono)',letterSpacing:-3,lineHeight:1,marginTop:4}}>0:14</span>
        </div>
      </div>
    </div>
    <div style={{textAlign:'center',marginBottom:20}}>
      <div style={{fontSize:8,color:'#333',textTransform:'uppercase',letterSpacing:2,fontWeight:600,marginBottom:8}}>Next up</div>
      <div style={{fontSize:18,fontWeight:800,color:'#666'}}>Swipers</div>
      <div style={{fontSize:10,color:'#333',marginTop:3}}>2 sets · 10 reps · 20s rest</div>
    </div>
    <div style={{textAlign:'center'}}><div style={{display:'inline-block',background:'rgba(52,211,153,0.08)',border:'1px solid rgba(52,211,153,0.15)',borderRadius:16,padding:'12px 40px'}}><span style={{fontSize:12,color:'#34D399',fontWeight:700}}>Skip rest</span></div></div>
  </div>
</div>
)}

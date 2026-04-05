import { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import PlayerActiveScreen from './screens/PlayerActiveScreen'
import PlayerRestScreen from './screens/PlayerRestScreen'
import CompleteScreen from './screens/CompleteScreen'
import LibraryScreen from './screens/LibraryScreen'
import DetailScreen from './screens/DetailScreen'
import ProgressScreen from './screens/ProgressScreen'
import BodyScanScreen from './screens/BodyScanScreen'
import EquipmentScreen from './screens/EquipmentScreen'
import AIGenScreen from './screens/AIGenScreen'
import ChatScreen from './screens/ChatScreen'
import PaywallScreen from './screens/PaywallScreen'

const screens = [
  { id:'home', label:'Home', C:HomeScreen },
  { id:'player', label:'Player', C:PlayerActiveScreen },
  { id:'rest', label:'Rest', C:PlayerRestScreen },
  { id:'done', label:'Complete', C:CompleteScreen },
  { id:'library', label:'Library', C:LibraryScreen },
  { id:'detail', label:'Detail', C:DetailScreen },
  { id:'progress', label:'Progress', C:ProgressScreen },
  { id:'scan', label:'Body Scan', C:BodyScanScreen },
  { id:'equip', label:'Equipment', C:EquipmentScreen },
  { id:'aigen', label:'AI Plan', C:AIGenScreen },
  { id:'chat', label:'Ask Correx', C:ChatScreen },
  { id:'pay', label:'Paywall', C:PaywallScreen },
]

export default function App() {
  const [active, setActive] = useState('home')
  const Screen = screens.find(s=>s.id===active)?.C || HomeScreen

  return (
    <div style={{background:'#040406',minHeight:'100dvh'}}>
      {/* Nav */}
      <div style={{position:'sticky',top:0,zIndex:50,background:'#040406',borderBottom:'1px solid #111',padding:'12px 16px'}}>
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:10}}>
          <div style={{width:28,height:28,borderRadius:9,background:'linear-gradient(135deg,#EF4444,#F97316,#EAB308)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <span style={{fontSize:12,fontWeight:900,color:'#fff'}}>C</span>
          </div>
          <span style={{fontSize:15,fontWeight:800,color:'#fff',letterSpacing:0.5}}>CORREX</span>
          <span style={{fontSize:8,color:'#444',fontWeight:700,letterSpacing:3}}>PREVIEW</span>
        </div>
        <div style={{display:'flex',gap:4,overflowX:'auto',paddingBottom:4,scrollbarWidth:'none'}}>
          {screens.map(s=>(
            <button key={s.id} onClick={()=>setActive(s.id)} style={{
              flexShrink:0,padding:'6px 14px',borderRadius:20,border:'none',cursor:'pointer',
              fontSize:10,fontWeight:700,letterSpacing:0.5,
              background:active===s.id?'rgba(239,68,68,0.15)':'rgba(255,255,255,0.04)',
              color:active===s.id?'#EF4444':'#666',
              transition:'all 0.2s'
            }}>{s.label}</button>
          ))}
        </div>
      </div>

      {/* Phone Frame */}
      <div style={{display:'flex',justifyContent:'center',padding:'24px 16px 60px'}}>
        <div style={{
          width:375,maxWidth:'100%',minHeight:812,
          borderRadius:44,border:'3px solid rgba(255,255,255,0.08)',
          background:'#040406',position:'relative',overflow:'hidden',
          boxShadow:'0 0 0 1px rgba(0,0,0,0.8), 0 30px 60px rgba(0,0,0,0.5)'
        }}>
          {/* Notch */}
          <div style={{position:'absolute',top:10,left:'50%',transform:'translateX(-50%)',width:120,height:30,background:'#000',borderRadius:20,zIndex:50}} />
          {/* Screen */}
          <div style={{width:'100%',height:'100%',overflowY:'auto',overflowX:'hidden',scrollbarWidth:'none'}}>
            <Screen />
          </div>
        </div>
      </div>
    </div>
  )
}

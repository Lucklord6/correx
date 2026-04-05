import { useState, useEffect, useRef, useCallback } from 'react'
import './index.css'

/* ═══════════════════════════════════════════
   EXERCISE DATA
   ═══════════════════════════════════════════ */
const exercises = [
  { id:1, name:'Couch Stretch', cat:'apt', sets:2, hold:90, perSide:true, rest:0, desc:'Knee near wall/couch, shin up the surface. Other foot forward in lunge. Torso upright, tuck pelvis, squeeze back-leg glute. Hold and breathe.', emoji:'🧘' },
  { id:2, name:'Double Knee to Chest', cat:'apt', sets:2, hold:45, perSide:false, rest:0, desc:'Lie on back, both knees to chest. Wrap hands around shins, pull gently. Press lower back into floor.', emoji:'🦵' },
  { id:3, name:'Pelvic Tilt — Bug Cue', cat:'apt', sets:3, reps:15, holdPer:3, rest:20, desc:'Lie on back, knees bent. SQUASH THE BUG — press lower back into floor with abs and glutes. Hold 3s each rep.', emoji:'🐛' },
  { id:4, name:'Swipers', cat:'apt', sets:2, reps:10, rest:20, desc:'Lie on back, pelvis tilted. Extend one leg hovering above ground, bring back. Alternate. Lower back stays glued.', emoji:'🔄' },
  { id:5, name:'Bridge & Reach Overs', cat:'apt', sets:2, hold:45, rest:20, desc:'Bridge up, squeeze glutes. Reach one arm across body, hips level. Alternate sides. Posterior tilt throughout.', emoji:'🌉' },
  { id:6, name:'Frog Stretch', cat:'kk', sets:1, hold:120, rest:0, desc:'All fours, knees wide, feet turned out. Push hips back and down. Forearms on floor. Sink deeper each exhale.', emoji:'🐸' },
  { id:7, name:'Clamshells with Band', cat:'kk', sets:4, reps:15, perSide:true, rest:25, desc:'Side lying, band above knees, knees 45°, feet together. Open top knee, squeeze outer glute hard. Don\'t roll hips.', emoji:'🐚' },
  { id:8, name:'Side-Lying Hip Abduction', cat:'kk', sets:3, reps:15, perSide:true, rest:25, desc:'Side lying, legs straight, hips stacked. Lift top leg leading with heel, toes down. ~45°. Lower slowly.', emoji:'🦿' },
  { id:9, name:'Banded Glute Bridge', cat:'kk', sets:3, reps:12, rest:25, desc:'Band above knees. Push knees outward against band, drive through heels. Squeeze glutes hard at top. Posterior tilt throughout.', emoji:'🍑' },
  { id:10, name:'Butterfly Stretch', cat:'kk', sets:2, hold:45, rest:0, desc:'Seated, soles together, knees dropped. Sit tall, press knees toward floor. Gentle pressure, don\'t bounce.', emoji:'🦋' },
]

const catColor = { apt:'#EF4444', kk:'#A855F7' }
const catName = { apt:'APT', kk:'Knock Knees' }

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */
export default function App() {
  const [screen, setScreen] = useState('home')
  const [tab, setTab] = useState('home')
  const [exIdx, setExIdx] = useState(0)
  const [setNum, setSetNum] = useState(1)
  const [phase, setPhase] = useState('idle') // idle|prep|active|rest|done
  const [secs, setSecs] = useState(0)
  const [completedToday, setCompletedToday] = useState(false)
  const [streak, setStreak] = useState(12)
  const timerRef = useRef(null)
  const vibrateRef = useRef(null)

  const ex = exercises[exIdx]
  const isHold = !!ex?.hold
  const totalSets = ex?.sets || 1
  const color = ex ? catColor[ex.cat] : '#EF4444'

  // Timer
  useEffect(() => {
    if (phase === 'prep' || phase === 'active' || phase === 'rest') {
      timerRef.current = setInterval(() => {
        setSecs(s => {
          if (s <= 1) {
            clearInterval(timerRef.current)
            if (navigator.vibrate) navigator.vibrate([100,50,100])
            if (phase === 'prep') {
              if (isHold) {
                setPhase('active')
                setSecs(ex.hold)
              } else {
                setPhase('active')
                setSecs(0)
              }
            } else if (phase === 'active') {
              if (setNum < totalSets) {
                if (ex.rest > 0) { setPhase('rest'); setSecs(ex.rest) }
                else { setSetNum(n=>n+1); setPhase('prep'); setSecs(5) }
              } else {
                if (exIdx < exercises.length - 1) {
                  if (ex.rest > 0) { setPhase('rest'); setSecs(ex.rest) }
                  else { nextExercise() }
                } else {
                  setPhase('done')
                  setCompletedToday(true)
                }
              }
            } else if (phase === 'rest') {
              if (setNum < totalSets) {
                setSetNum(n=>n+1); setPhase('prep'); setSecs(5)
              } else {
                nextExercise()
              }
            }
            return 0
          }
          return s - 1
        })
      }, 1000)
    }
    return () => clearInterval(timerRef.current)
  }, [phase, exIdx, setNum])

  const nextExercise = useCallback(() => {
    if (exIdx < exercises.length - 1) {
      setExIdx(i=>i+1); setSetNum(1); setPhase('prep'); setSecs(5)
    } else {
      setPhase('done'); setCompletedToday(true)
    }
  }, [exIdx])

  const prevExercise = () => {
    if (exIdx > 0) { setExIdx(i=>i-1); setSetNum(1); setPhase('prep'); setSecs(5) }
  }

  const startRoutine = () => {
    setExIdx(0); setSetNum(1); setPhase('prep'); setSecs(5); setScreen('player')
  }

  const skipRest = () => {
    clearInterval(timerRef.current)
    if (setNum < totalSets) { setSetNum(n=>n+1); setPhase('prep'); setSecs(5) }
    else nextExercise()
  }

  const repsDone = () => {
    if (setNum < totalSets) {
      if (ex.rest > 0) { setPhase('rest'); setSecs(ex.rest) }
      else { setSetNum(n=>n+1); setPhase('prep'); setSecs(5) }
    } else {
      if (exIdx < exercises.length - 1) {
        if (ex.rest > 0) { setPhase('rest'); setSecs(ex.rest) }
        else nextExercise()
      } else {
        setPhase('done'); setCompletedToday(true)
      }
    }
  }

  const pauseResume = () => {
    if (phase === 'active' && isHold) {
      clearInterval(timerRef.current)
      setPhase('paused')
    }
  }

  const fmt = (s) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`

  const goHome = () => { setScreen('home'); setTab('home'); setPhase('idle') ; clearInterval(timerRef.current) }

  /* ═══ PLAYER SCREEN ═══ */
  if (screen === 'player') {
    if (phase === 'done') return (
      <div className="nr" style={{background:'#040406',minHeight:'100dvh',padding:'60px 20px 40px'}}>
        <div style={{position:'absolute',top:80,left:'50%',width:200,height:200,transform:'translateX(-50%)',borderRadius:100,background:'radial-gradient(circle,rgba(52,211,153,0.08),transparent)',filter:'blur(40px)'}}/>
        <div style={{position:'relative',zIndex:2}}>
          <div style={{height:3,borderRadius:2,background:'linear-gradient(90deg,#EF4444,#F97316,#A855F7)',marginBottom:40}}/>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:28}}>
            <div style={{width:72,height:72,borderRadius:22,background:'rgba(52,211,153,0.1)',border:'1.5px solid rgba(52,211,153,0.2)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16}}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg></div>
            <div style={{fontSize:28,fontWeight:900,color:'#fff'}}>Done.</div>
            <div style={{fontSize:13,color:'#555',marginTop:6}}>All 10 exercises complete</div>
          </div>
          <div style={{display:'flex',gap:8,marginBottom:20}}>
            {[{v:streak+1,l:'Streak',c:'#F97316'},{v:'10',l:'Exercises',c:'#EF4444'},{v:'✓',l:'Today',c:'#34D399'}].map((s,i)=>(
              <div key={i} className="glass" style={{flex:1,borderRadius:16,padding:16,textAlign:'center'}}>
                <div style={{fontSize:28,fontWeight:900,color:s.c,fontFamily:'var(--mono)'}}>{s.v}</div>
                <div style={{fontSize:10,color:'#555',fontWeight:600,marginTop:3}}>{s.l}</div>
              </div>
            ))}
          </div>
          <div className="glass" style={{borderRadius:16,padding:16,marginBottom:24}}>
            <div style={{fontSize:13,color:'#888',fontStyle:'italic',lineHeight:1.6}}>"Consistency beats intensity. Show up again tomorrow."</div>
          </div>
          <button onClick={goHome} className="bsh" style={{width:'100%',padding:'16px 0',borderRadius:16,border:'none',background:'#fff',fontSize:16,fontWeight:900,color:'#050505',cursor:'pointer'}}>DONE</button>
        </div>
      </div>
    )

    const isRest = phase === 'rest'
    const pc = isRest ? '#34D399' : color
    const progress = (exIdx / exercises.length) * 100

    return (
      <div className="nr" style={{background:'#040406',minHeight:'100dvh',display:'flex',flexDirection:'column'}}>
        <div style={{position:'absolute',top:'35%',left:'50%',width:200,height:200,transform:'translate(-50%,-50%)',borderRadius:100,background:`radial-gradient(circle,${pc}08,transparent 55%)`,filter:'blur(35px)'}}/>
        <div style={{position:'relative',zIndex:2,padding:'52px 20px 24px',display:'flex',flexDirection:'column',flex:1}}>
          {/* Top */}
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
            <div onClick={goHome} className="glass" style={{width:34,height:34,borderRadius:11,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
            <div style={{display:'flex',alignItems:'baseline',gap:3}}><span style={{fontSize:26,fontWeight:900,color:'#fff',fontFamily:'var(--mono)'}}>{exIdx+1}</span><span style={{fontSize:12,color:'#2A2A2A',fontWeight:600}}>/10</span></div>
            <div onClick={()=>{clearInterval(timerRef.current);nextExercise()}} className="glass" style={{width:34,height:34,borderRadius:11,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></div>
          </div>

          {/* Progress segments */}
          <div style={{display:'flex',gap:2,marginBottom:14}}>
            {exercises.map((_,i)=><div key={i} style={{flex:1,height:3,borderRadius:2,
              background:i<exIdx?(exercises[i].cat==='apt'?'linear-gradient(90deg,#EF4444,#F97316)':'linear-gradient(90deg,#A855F7,#8B5CF6)'):i===exIdx?`${catColor[exercises[i].cat]}50`:`${catColor[exercises[i].cat]}0A`,
              boxShadow:i<exIdx?`0 0 4px ${catColor[exercises[i].cat]}60`:'none'
            }}/>)}
          </div>

          {isRest ? (
            <>
              {/* REST PHASE */}
              <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <div style={{position:'relative',width:160,height:160}}>
                  <div style={{position:'absolute',inset:-14,borderRadius:'50%',border:'1px solid rgba(52,211,153,0.06)',animation:'breathe 3s ease infinite'}}/>
                  <svg width="160" height="160" viewBox="0 0 160 160" style={{transform:'rotate(-90deg)'}}>
                    <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="5"/>
                    <circle cx="80" cy="80" r="68" fill="none" stroke="#34D399" strokeWidth="5" strokeLinecap="round" strokeDasharray={`${(secs/ex.rest)*427} 427`}/>
                    <circle cx="80" cy="80" r="68" fill="none" stroke="#34D399" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${(secs/ex.rest)*427} 427`} opacity="0.15" style={{filter:'blur(3px)'}}/>
                  </svg>
                  <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <span style={{fontSize:11,fontWeight:800,color:'#34D399',letterSpacing:4}}>REST</span>
                    <span style={{fontSize:44,fontWeight:900,color:'#34D399',fontFamily:'var(--mono)',letterSpacing:-3,lineHeight:1,marginTop:4}}>{fmt(secs)}</span>
                  </div>
                </div>
                <div style={{marginTop:24,textAlign:'center'}}>
                  <div style={{fontSize:9,color:'#333',textTransform:'uppercase',letterSpacing:2,fontWeight:600,marginBottom:6}}>Next {setNum < totalSets ? `set ${setNum+1}` : 'exercise'}</div>
                  <div style={{fontSize:18,fontWeight:800,color:'#666'}}>{setNum < totalSets ? ex.name : (exercises[exIdx+1]?.name || 'Done!')}</div>
                </div>
              </div>
              <div onClick={skipRest} style={{textAlign:'center',cursor:'pointer'}}><div style={{display:'inline-block',background:'rgba(52,211,153,0.08)',border:'1px solid rgba(52,211,153,0.15)',borderRadius:16,padding:'13px 40px'}}><span style={{fontSize:13,color:'#34D399',fontWeight:700}}>Skip rest</span></div></div>
            </>
          ) : (
            <>
              {/* ACTIVE / PREP PHASE */}
              {/* Video placeholder */}
              <div style={{borderRadius:18,overflow:'hidden',position:'relative',aspectRatio:'16/9',background:'#0A0A0A',border:'1px solid rgba(255,255,255,0.06)',marginBottom:10}}>
                <div style={{position:'absolute',inset:0,background:`linear-gradient(135deg,${color}08,transparent)`}}/>
                <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:6}}>
                  <div style={{width:44,height:44,borderRadius:14,background:'rgba(255,255,255,0.08)',backdropFilter:'blur(10px)',display:'flex',alignItems:'center',justifyContent:'center'}}><div style={{width:0,height:0,borderLeft:'14px solid rgba(255,255,255,0.7)',borderTop:'8px solid transparent',borderBottom:'8px solid transparent',marginLeft:3}}/></div>
                  <span style={{fontSize:9,color:'#333'}}>Video: {ex.name}</span>
                </div>
                <div style={{position:'absolute',top:8,left:8}}><span style={{fontSize:8,background:`${color}25`,color,padding:'4px 10px',borderRadius:8,fontWeight:700,letterSpacing:1.5,backdropFilter:'blur(8px)'}}>{catName[ex.cat]}</span></div>
                <div style={{position:'absolute',bottom:8,right:8,display:'flex',alignItems:'center',gap:3,background:'rgba(0,0,0,0.5)',borderRadius:7,padding:'4px 8px',backdropFilter:'blur(8px)'}}>
                  <span style={{fontSize:7,color:'rgba(255,255,255,0.7)',fontWeight:600}}>LOOP</span>
                </div>
              </div>

              <div style={{textAlign:'center',marginBottom:4}}>
                <div style={{fontSize:20,fontWeight:900,color:'#fff',letterSpacing:-0.5}}>{ex.name}</div>
                <div style={{fontSize:10,color:'#444',marginTop:3}}>Set {setNum} of {totalSets} · {ex.reps ? `${ex.reps} reps${ex.perSide?' each side':''}` : `${ex.hold}s${ex.perSide?' each side':''}`}</div>
              </div>

              {/* Timer or rep counter */}
              {phase === 'prep' ? (
                <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                  <div style={{fontSize:11,fontWeight:700,color:'#F97316',letterSpacing:3,marginBottom:6}}>GET READY</div>
                  <div style={{fontSize:64,fontWeight:900,color:'#fff',fontFamily:'var(--mono)',lineHeight:1}}>{secs}</div>
                </div>
              ) : isHold ? (
                <div style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <div style={{position:'relative',width:140,height:140}}>
                    <div style={{position:'absolute',inset:-12,borderRadius:'50%',border:`1px solid ${color}08`,animation:'breathe 3s ease infinite'}}/>
                    <div style={{position:'absolute',inset:-6,borderRadius:'50%',border:`1px solid ${color}12`,animation:'breathe 2.5s ease infinite 0.5s'}}/>
                    <svg width="140" height="140" viewBox="0 0 140 140" style={{transform:'rotate(-90deg)'}}>
                      <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="5"/>
                      <circle cx="70" cy="70" r="60" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeDasharray={`${(secs/ex.hold)*377} 377`}/>
                      <circle cx="70" cy="70" r="60" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeDasharray={`${(secs/ex.hold)*377} 377`} opacity="0.15" style={{filter:'blur(2px)'}}/>
                    </svg>
                    <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <span className="gt" style={{fontSize:9,fontWeight:800,letterSpacing:5}}>HOLD</span>
                      <span style={{fontSize:40,fontWeight:900,color:'#fff',fontFamily:'var(--mono)',letterSpacing:-3,lineHeight:1,marginTop:2}}>{fmt(secs)}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                  <div style={{fontSize:9,fontWeight:700,color,letterSpacing:3,marginBottom:6}}>DO YOUR REPS</div>
                  <div style={{display:'flex',alignItems:'baseline',gap:4}}>
                    <span style={{fontSize:56,fontWeight:900,color:'#fff',fontFamily:'var(--mono)',letterSpacing:-3,lineHeight:1}}>{ex.reps}</span>
                    <span style={{fontSize:15,color:'#333',fontWeight:600}}>reps</span>
                  </div>
                  {ex.perSide && <div style={{fontSize:11,color:'#444',marginTop:4}}>each side</div>}
                </div>
              )}

              {/* Description */}
              <div className="glass" style={{borderRadius:14,padding:'10px 14px',textAlign:'center',marginBottom:14}}>
                <p style={{fontSize:10,color:'#555',margin:0,lineHeight:1.6}}>{ex.desc}</p>
              </div>

              {/* Controls */}
              {phase === 'active' && !isHold ? (
                <div style={{position:'relative'}}>
                  <div style={{position:'absolute',inset:-3,borderRadius:18,background:color,opacity:0.15,filter:'blur(10px)',animation:'breathe 3s ease infinite'}}/>
                  <button onClick={repsDone} className="bsh" style={{position:'relative',width:'100%',padding:'16px 0',borderRadius:16,border:'none',background:'#fff',fontSize:15,fontWeight:900,color:'#050505',cursor:'pointer',letterSpacing:1.5}}>DONE — NEXT</button>
                </div>
              ) : phase === 'active' ? (
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:24}}>
                  <div onClick={prevExercise} className="glass" style={{width:42,height:42,borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg></div>
                  <div style={{position:'relative'}}>
                    <div style={{position:'absolute',inset:-4,borderRadius:22,background:'#fff',opacity:0.08,filter:'blur(12px)'}}/>
                    <div style={{position:'relative',width:64,height:64,borderRadius:22,background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 40px rgba(255,255,255,0.06)',cursor:'pointer'}}><svg width="22" height="22" viewBox="0 0 24 24" fill="#050505"><rect x="6" y="4" width="4" height="16" rx="1.5"/><rect x="14" y="4" width="4" height="16" rx="1.5"/></svg></div>
                  </div>
                  <div onClick={()=>{clearInterval(timerRef.current);nextExercise()}} className="glass" style={{width:42,height:42,borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg></div>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    )
  }

  /* ═══ HOME / LIBRARY / PROGRESS TABS ═══ */
  return (
    <div className="nr" style={{background:'#040406',minHeight:'100dvh',position:'relative'}}>
      <div style={{position:'absolute',top:30,left:15,width:140,height:140,borderRadius:70,background:'radial-gradient(circle,rgba(239,68,68,0.09),transparent 65%)',filter:'blur(28px)',animation:'float 9s ease-in-out infinite'}}/>
      <div style={{position:'absolute',top:200,right:0,width:110,height:110,borderRadius:55,background:'radial-gradient(circle,rgba(168,85,247,0.06),transparent 65%)',filter:'blur(22px)',animation:'float 11s ease-in-out infinite 1s'}}/>

      <div style={{position:'relative',zIndex:2,padding:'52px 20px 100px'}}>

        {tab === 'home' && <>
          {/* Header */}
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:22}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:34,height:34,borderRadius:11,background:'linear-gradient(135deg,#EF4444,#F97316,#EAB308)',backgroundSize:'300% 300%',animation:'gradShift 4s ease infinite',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 18px rgba(239,68,68,0.35)'}}><span style={{fontSize:15,fontWeight:900,color:'#fff'}}>C</span></div>
              <div style={{display:'flex',flexDirection:'column'}}><span style={{fontSize:17,fontWeight:800,color:'#fff',letterSpacing:0.5,lineHeight:1}}>CORREX</span><span style={{fontSize:8,fontWeight:700,letterSpacing:3,color:'#444',lineHeight:1,marginTop:1}}>PRO</span></div>
            </div>
          </div>

          {/* Streak */}
          <div style={{animation:'float 4.5s ease-in-out infinite',marginBottom:14}}>
            <div className="glass" style={{borderRadius:22,padding:'16px 18px',background:'linear-gradient(135deg,rgba(239,68,68,0.08),rgba(249,115,22,0.04),rgba(168,85,247,0.02))',boxShadow:'0 8px 32px rgba(239,68,68,0.06)'}}>
              <div style={{display:'flex',alignItems:'center',gap:16}}>
                <div style={{position:'relative',width:56,height:56,flexShrink:0}}>
                  <svg width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3.5"/><circle cx="28" cy="28" r="24" fill="none" stroke="url(#sg2)" strokeWidth="3.5" strokeDasharray="126 151" strokeLinecap="round" transform="rotate(-90 28 28)"/><defs><linearGradient id="sg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#EF4444"/><stop offset="100%" stopColor="#EAB308"/></linearGradient></defs></svg>
                  <span style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:900,color:'#fff',fontFamily:'var(--mono)'}}>{streak}</span>
                </div>
                <div><div style={{fontSize:14,fontWeight:700,color:'#fff'}}>Day Streak</div><div style={{fontSize:11,color:'rgba(255,255,255,0.35)'}}>Best: 18 · {completedToday?'Done today ✓':'Not yet today'}</div></div>
              </div>
            </div>
          </div>

          {/* Routine Card */}
          <div style={{animation:'float 5s ease-in-out infinite 0.5s',marginBottom:14}}>
            <div className="glass" style={{borderRadius:22,overflow:'hidden',boxShadow:'0 10px 40px rgba(0,0,0,0.4)'}}>
              <div style={{height:2,background:'linear-gradient(90deg,#EF4444,#F97316,#A855F7)',backgroundSize:'300% 100%',animation:'gradShift 3s ease infinite'}}/>
              <div style={{padding:'16px 18px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
                  <div style={{display:'flex',alignItems:'center',gap:8}}><div style={{width:7,height:7,borderRadius:4,background:completedToday?'#34D399':'#F97316',boxShadow:`0 0 8px ${completedToday?'rgba(52,211,153,0.5)':'rgba(249,115,22,0.5)'}`,animation:'pulse 2s ease infinite'}}/><span style={{fontSize:14,fontWeight:700,color:'#fff'}}>Today's Routine</span></div>
                  <span className="glass" style={{fontSize:10,color:'#555',padding:'4px 10px',borderRadius:8}}>~20 min</span>
                </div>
                {[{name:'APT Correction',sub:'5 exercises · 10 min',c:'#EF4444'},{name:'Knock Knees',sub:'5 exercises · 10 min',c:'#A855F7'}].map((s,i)=>(
                  <div key={i} style={{display:'flex',alignItems:'center',gap:10,background:`${s.c}06`,borderRadius:12,padding:'10px 12px',marginBottom:6}}>
                    <div style={{width:3,height:32,borderRadius:2,background:s.c,boxShadow:`0 0 6px ${s.c}60`}}/>
                    <div><div style={{fontSize:12,fontWeight:700,color:s.c}}>{s.name}</div><div style={{fontSize:9,color:'#555',marginTop:1}}>{s.sub}</div></div>
                  </div>
                ))}
                <div style={{position:'relative',marginTop:10}}>
                  <div style={{position:'absolute',inset:-3,borderRadius:18,background:'linear-gradient(135deg,#EF4444,#F97316)',opacity:0.25,filter:'blur(10px)',animation:'breathe 3s ease infinite'}}/>
                  <button onClick={startRoutine} className="bsh" style={{position:'relative',width:'100%',padding:'16px 0',borderRadius:16,border:'none',background:'#fff',fontSize:16,fontWeight:900,color:'#050505',cursor:'pointer',letterSpacing:1.5}}>{completedToday?'DO IT AGAIN':'START ROUTINE'}</button>
                </div>
              </div>
            </div>
          </div>

          {/* Cues */}
          <div style={{display:'flex',gap:8}}>
            {[{e:'🐛',t:'Bug cue · 3s',c:'#EF4444'},{e:'🦵',t:'Squeeze glutes',c:'#A855F7'},{e:'💨',t:'Breathe deeper',c:'#34D399'}].map((q,i)=>(
              <div key={i} style={{flex:1,background:`${q.c}08`,border:`1px solid ${q.c}15`,borderRadius:14,padding:'10px 8px',textAlign:'center'}}>
                <div style={{fontSize:18,marginBottom:3}}>{q.e}</div>
                <div style={{fontSize:8,fontWeight:600,color:q.c,lineHeight:1.3}}>{q.t}</div>
              </div>
            ))}
          </div>
        </>}

        {tab === 'library' && <>
          <div style={{fontSize:22,fontWeight:800,color:'#fff',marginBottom:18}}>Library</div>
          {['apt','kk'].map(cat=>(
            <div key={cat}>
              <div style={{display:'flex',alignItems:'center',gap:8,margin:'16px 0 10px'}}><div style={{width:3,height:18,borderRadius:2,background:catColor[cat],boxShadow:`0 0 6px ${catColor[cat]}60`}}/><span style={{fontSize:12,fontWeight:800,color:catColor[cat],textTransform:'uppercase',letterSpacing:1.5}}>{cat==='apt'?'I. APT Correction':'II. Knock Knees'}</span></div>
              {exercises.filter(e=>e.cat===cat).map(ex=>(
                <div key={ex.id} className="glass" style={{borderRadius:16,padding:'12px 14px',marginBottom:6,display:'flex',alignItems:'center',gap:12}}>
                  <div style={{width:38,height:38,borderRadius:11,background:`${catColor[cat]}12`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,flexShrink:0}}>{ex.emoji}</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:700,color:'#fff'}}>{ex.name}</div>
                    <div style={{display:'flex',gap:4,marginTop:4,flexWrap:'wrap'}}>
                      <span style={{fontSize:8,background:`${catColor[cat]}15`,color:catColor[cat],padding:'2px 8px',borderRadius:6,fontWeight:600}}>{ex.sets} sets</span>
                      <span style={{fontSize:8,background:'rgba(255,255,255,0.04)',color:'#888',padding:'2px 8px',borderRadius:6}}>{ex.reps?`${ex.reps} reps`:`${ex.hold}s hold`}{ex.perSide?' each':''}</span>
                      {ex.rest>0&&<span style={{fontSize:8,background:`${catColor[cat]}08`,color:catColor[cat],padding:'2px 8px',borderRadius:6}}>{ex.rest}s rest</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </>}

        {tab === 'progress' && <>
          <div style={{fontSize:22,fontWeight:800,color:'#fff',marginBottom:18}}>Progress</div>
          <div className="glass" style={{borderRadius:22,padding:'20px',marginBottom:16,background:'linear-gradient(135deg,rgba(239,68,68,0.08),rgba(249,115,22,0.05))'}}>
            <div style={{fontSize:52,fontWeight:900,color:'#fff',fontFamily:'var(--mono)',lineHeight:1,letterSpacing:-3}}>{streak}</div>
            <div style={{fontSize:10,fontWeight:700,color:'#F97316',letterSpacing:3,marginTop:4}}>DAY STREAK</div>
          </div>
          <div style={{display:'flex',gap:8}}>
            {[{v:'86%',l:'Month',c:'#34D399'},{v:'72%',l:'All Time',c:'#3B82F6'},{v:'45',l:'Total',c:'#F97316'}].map((s,i)=>(
              <div key={i} className="glass" style={{flex:1,borderRadius:16,padding:16,textAlign:'center'}}>
                <div style={{fontSize:24,fontWeight:900,color:s.c,fontFamily:'var(--mono)'}}>{s.v}</div>
                <div style={{fontSize:9,color:'#555',fontWeight:600,marginTop:3}}>{s.l}</div>
              </div>
            ))}
          </div>
        </>}
      </div>

      {/* Tab Bar */}
      <div style={{position:'fixed',bottom:0,left:0,right:0,padding:'0 16px 10px',zIndex:20}}>
        <div className="glass" style={{borderRadius:20,padding:'12px 16px',display:'flex',alignItems:'center',justifyContent:'space-around',maxWidth:500,margin:'0 auto'}}>
          {[
            {id:'home',l:'Home',ic:(a)=><svg width="18" height="18" viewBox="0 0 24 24" fill={a?'#EF4444':'none'} stroke={a?'none':'#444'} strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>},
            {id:'library',l:'Library',ic:(a)=><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={a?'#A855F7':'#444'} strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>},
            {id:'progress',l:'Stats',ic:(a)=><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={a?'#34D399':'#444'} strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>},
          ].map(t=>(
            <div key={t.id} onClick={()=>setTab(t.id)} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:3,cursor:'pointer'}}>
              <div style={{width:26,height:26,borderRadius:9,background:tab===t.id?`${t.id==='home'?'#EF4444':t.id==='library'?'#A855F7':'#34D399'}15`:'transparent',display:'flex',alignItems:'center',justifyContent:'center'}}>{t.ic(tab===t.id)}</div>
              <span style={{fontSize:8,fontWeight:tab===t.id?700:500,color:tab===t.id?(t.id==='home'?'#EF4444':t.id==='library'?'#A855F7':'#34D399'):'#444'}}>{t.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import './MonthImage.css';

/* SVG scenes per month — hand-crafted inline art */
const SCENES = {
  0: ({ accent }) => ( // January — snowy hills
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="340" fill="#d4e8f5"/>
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky0" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8d8f0"/>
          <stop offset="100%" stopColor="#e8f4fd"/>
        </linearGradient>
        <linearGradient id="snow0" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#ddeeff"/>
        </linearGradient>
      </defs>
      <rect width="280" height="220" fill="url(#sky0)"/>
      {/* Stars */}
      {[[30,20],[80,45],[140,15],[200,35],[250,20],[60,60],[180,55]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity="0.8"/>
      ))}
      {/* Moon */}
      <circle cx="220" cy="50" r="28" fill="#f0f8ff"/>
      <circle cx="232" cy="44" r="24" fill="#b8d8f0"/>
      {/* Hills */}
      <ellipse cx="70" cy="280" rx="120" ry="80" fill="url(#snow0)"/>
      <ellipse cx="210" cy="300" rx="100" ry="65" fill="url(#snow0)"/>
      <ellipse cx="140" cy="310" rx="160" ry="60" fill="white"/>
      {/* Tree */}
      <polygon points="110,180 135,100 160,180" fill="#2d5a3d"/>
      <polygon points="105,210 135,140 165,210" fill="#1a3d28"/>
      <rect x="128" y="205" width="14" height="20" fill="#5c3d1e"/>
      {/* Snowflakes */}
      {[[50,120],[200,90],[230,160],[40,200]].map(([x,y],i)=>(
        <g key={i} transform={`translate(${x},${y})`} opacity="0.7">
          <line x1="-6" y1="0" x2="6" y2="0" stroke="white" strokeWidth="1.5"/>
          <line x1="0" y1="-6" x2="0" y2="6" stroke="white" strokeWidth="1.5"/>
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="white" strokeWidth="1"/>
          <line x1="4" y1="-4" x2="-4" y2="4" stroke="white" strokeWidth="1"/>
        </g>
      ))}
    </svg>
  ),

  1: ({ accent }) => ( // February — roses
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce8f0"/>
          <stop offset="100%" stopColor="#fff0f6"/>
        </linearGradient>
      </defs>
      <rect width="280" height="340" fill="url(#sky1)"/>
      {/* Hearts background */}
      {[[40,60],[200,40],[250,120],[30,180],[240,200]].map(([x,y],i)=>(
        <text key={i} x={x} y={y} fontSize="22" opacity="0.15" fill="#be185d">♥</text>
      ))}
      {/* Roses */}
      {[80,140,200].map((x,i)=>(
        <g key={i}>
          <line x1={x} y1="320" x2={x} y2="200" stroke="#16a34a" strokeWidth="3"/>
          {/* Leaves */}
          <ellipse cx={x-16} cy={i%2===0?260:280} rx="18" ry="8" fill="#22c55e" transform={`rotate(-30,${x-16},${i%2===0?260:280})`}/>
          <ellipse cx={x+16} cy={i%2===0?240:270} rx="18" ry="8" fill="#16a34a" transform={`rotate(30,${x+16},${i%2===0?240:270})`}/>
          {/* Rose head */}
          <circle cx={x} cy={195} r="28" fill={i===1?'#be185d':'#e879a0'}/>
          <circle cx={x-8} cy={192} r="18" fill={i===1?'#9d174d':'#db2777'} opacity="0.7"/>
          <circle cx={x+6} cy={188} r="14" fill={i===1?'#831843':'#be185d'} opacity="0.6"/>
          <circle cx={x} cy={193} r="7" fill={i===1?'#500724':'#9d174d'} opacity="0.5"/>
        </g>
      ))}
      {/* Big heart */}
      <text x="95" y="110" fontSize="90" fill="#be185d" opacity="0.12">♥</text>
      <text x="98" y="105" fontSize="80" fill="#db2777" opacity="0.18">♥</text>
    </svg>
  ),

  2: ({ accent }) => ( // March — spring
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bbf7d0"/>
          <stop offset="100%" stopColor="#dcfce7"/>
        </linearGradient>
      </defs>
      <rect width="280" height="340" fill="url(#sky2)"/>
      {/* Sun */}
      <circle cx="220" cy="60" r="35" fill="#fbbf24" opacity="0.9"/>
      {[0,45,90,135,180,225,270,315].map((deg,i)=>(
        <line key={i}
          x1={220+45*Math.cos(deg*Math.PI/180)}
          y1={60+45*Math.sin(deg*Math.PI/180)}
          x2={220+60*Math.cos(deg*Math.PI/180)}
          y2={60+60*Math.sin(deg*Math.PI/180)}
          stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      ))}
      {/* Ground */}
      <ellipse cx="140" cy="330" rx="180" ry="60" fill="#4ade80"/>
      {/* Tree */}
      <rect x="126" y="200" width="16" height="100" fill="#92400e"/>
      <circle cx="134" cy="170" r="55" fill="#22c55e"/>
      <circle cx="108" cy="185" r="38" fill="#16a34a"/>
      <circle cx="162" cy="178" r="42" fill="#15803d"/>
      {/* Flowers */}
      {[[40,310],[70,290],[200,300],[230,315],[260,305]].map(([x,y],i)=>(
        <g key={i}>
          <circle cx={x} cy={y} r="8" fill={['#fbbf24','#f472b6','#fb923c','#a78bfa','#34d399'][i]}/>
          <circle cx={x} cy={y} r="4" fill="#fef3c7"/>
        </g>
      ))}
      {/* Birds */}
      {[[60,80],[90,65],[120,78]].map(([x,y],i)=>(
        <path key={i} d={`M${x},${y} Q${x+8},${y-6} ${x+16},${y}`} stroke="#374151" strokeWidth="1.5" fill="none"/>
      ))}
    </svg>
  ),

  3: ({ accent }) => ( // April — rain
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cbd5e1"/>
          <stop offset="100%" stopColor="#e2e8f0"/>
        </linearGradient>
      </defs>
      <rect width="280" height="340" fill="url(#sky3)"/>
      {/* Clouds */}
      {[[60,80,1],[150,60,0.9],[230,90,0.8]].map(([x,y,op],i)=>(
        <g key={i} opacity={op}>
          <ellipse cx={x} cy={y} rx="50" ry="30" fill="#94a3b8"/>
          <ellipse cx={x-25} cy={y+5} rx="30" ry="22" fill="#94a3b8"/>
          <ellipse cx={x+25} cy={y+5} rx="35" ry="22" fill="#94a3b8"/>
          <ellipse cx={x} cy={y+5} rx="50" ry="22" fill="#b0bec5"/>
        </g>
      ))}
      {/* Raindrops */}
      {Array.from({length:30},(_,i)=>(
        <ellipse key={i}
          cx={20+i*9}
          cy={130+(i%4)*50}
          rx="1.5" ry="6"
          fill="#7dd3fc"
          opacity="0.6"
          transform={`rotate(10,${20+i*9},${130+(i%4)*50})`}
        />
      ))}
      {/* Umbrella */}
      <path d="M100,280 Q140,200 180,280" fill="#3b82f6"/>
      <path d="M100,280 Q120,230 140,280" fill="#2563eb"/>
      <path d="M140,280 Q160,230 180,280" fill="#1d4ed8"/>
      <line x1="140" y1="280" x2="140" y2="330" stroke="#1e3a5f" strokeWidth="3"/>
      <path d="M140,330 Q145,340 150,335" stroke="#1e3a5f" strokeWidth="3" fill="none"/>
      {/* Puddles */}
      <ellipse cx="80" cy="335" rx="35" ry="8" fill="#bae6fd" opacity="0.6"/>
      <ellipse cx="200" cy="332" rx="45" ry="9" fill="#bae6fd" opacity="0.6"/>
    </svg>
  ),

  4: ({ accent }) => ( // May — sunny
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa"/>
          <stop offset="100%" stopColor="#bfdbfe"/>
        </linearGradient>
      </defs>
      <rect width="280" height="340" fill="url(#sky4)"/>
      {/* Sun */}
      <circle cx="140" cy="80" r="45" fill="#fde68a"/>
      <circle cx="140" cy="80" r="35" fill="#fbbf24"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i)=>(
        <line key={i}
          x1={140+52*Math.cos(deg*Math.PI/180)}
          y1={80+52*Math.sin(deg*Math.PI/180)}
          x2={140+68*Math.cos(deg*Math.PI/180)}
          y2={80+68*Math.sin(deg*Math.PI/180)}
          stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      ))}
      {/* Fluffy clouds */}
      {[[50,160,0.8],[220,140,0.7]].map(([x,y,op],i)=>(
        <g key={i} opacity={op}>
          <ellipse cx={x} cy={y} rx="40" ry="20" fill="white"/>
          <ellipse cx={x-18} cy={y+5} rx="25" ry="16" fill="white"/>
          <ellipse cx={x+18} cy={y+5} rx="28" ry="16" fill="white"/>
        </g>
      ))}
      {/* Meadow */}
      <rect x="0" y="260" width="280" height="80" fill="#4ade80"/>
      <rect x="0" y="280" width="280" height="60" fill="#22c55e"/>
      {/* Sunflowers */}
      {[50,120,190,250].map((x,i)=>(
        <g key={i}>
          <line x1={x} y1="260" x2={x} y2="180" stroke="#15803d" strokeWidth="4"/>
          {[0,45,90,135,180,225,270,315].map((deg,j)=>(
            <ellipse key={j} cx={x+18*Math.cos(deg*Math.PI/180)} cy={170+18*Math.sin(deg*Math.PI/180)}
              rx="10" ry="6" fill="#fbbf24"
              transform={`rotate(${deg},${x+18*Math.cos(deg*Math.PI/180)},${170+18*Math.sin(deg*Math.PI/180)})`}/>
          ))}
          <circle cx={x} cy="170" r="14" fill="#92400e"/>
        </g>
      ))}
    </svg>
  ),

  5: ({ accent }) => ( // June — ocean
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9"/>
          <stop offset="100%" stopColor="#38bdf8"/>
        </linearGradient>
        <linearGradient id="sea5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0369a1"/>
          <stop offset="100%" stopColor="#075985"/>
        </linearGradient>
      </defs>
      <rect width="280" height="200" fill="url(#sky5)"/>
      <rect y="200" width="280" height="140" fill="url(#sea5)"/>
      {/* Sun */}
      <circle cx="220" cy="70" r="40" fill="#fde68a" opacity="0.95"/>
      {/* Clouds */}
      <ellipse cx="60" cy="50" rx="45" ry="20" fill="white" opacity="0.8"/>
      <ellipse cx="40" cy="55" rx="25" ry="15" fill="white" opacity="0.8"/>
      <ellipse cx="80" cy="55" rx="28" ry="15" fill="white" opacity="0.8"/>
      {/* Waves */}
      {[200,220,240,260,280,300].map((y,i)=>(
        <path key={i}
          d={`M0,${y} Q35,${y-14} 70,${y} Q105,${y+14} 140,${y} Q175,${y-14} 210,${y} Q245,${y+14} 280,${y}`}
          stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
      ))}
      {/* Sailboat */}
      <polygon points="130,190 130,240 180,240" fill="white" opacity="0.9"/>
      <polygon points="132,192 132,240 90,240" fill="#fde68a" opacity="0.9"/>
      <rect x="127" y="185" width="6" height="60" fill="#92400e"/>
      <path d="M60,240 Q140,220 200,240" fill="#7c3aed" stroke="none"/>
      {/* Beach */}
      <ellipse cx="140" cy="340" rx="200" ry="70" fill="#fde68a"/>
    </svg>
  ),

  6: ({ accent }) => ( // July — beach
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky6" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb923c"/>
          <stop offset="100%" stopColor="#fed7aa"/>
        </linearGradient>
      </defs>
      <rect width="280" height="200" fill="url(#sky6)"/>
      <rect y="200" width="280" height="140" fill="#0369a1"/>
      {/* Big sun setting */}
      <circle cx="140" cy="200" r="70" fill="#f97316" opacity="0.9"/>
      <circle cx="140" cy="200" r="55" fill="#fbbf24"/>
      {/* Horizon reflection */}
      <rect x="80" y="200" width="120" height="80" fill="#fb923c" opacity="0.3"/>
      {/* Palm tree */}
      <path d="M50,320 Q55,250 70,200" stroke="#4a3728" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <ellipse cx="50" cy="200" rx="50" ry="16" fill="#16a34a" transform="rotate(-20,50,200)"/>
      <ellipse cx="75" cy="195" rx="50" ry="14" fill="#15803d" transform="rotate(10,75,195)"/>
      <ellipse cx="62" cy="188" rx="40" ry="12" fill="#166534" transform="rotate(-5,62,188)"/>
      {/* Beach items */}
      <ellipse cx="200" cy="290" rx="40" ry="12" fill="#fde68a"/>
      <rect x="170" y="250" width="4" height="50" fill="#dc2626"/>
      <path d="M160,250 L174,256 L188,250" fill="#f97316"/>
      {/* Waves */}
      <path d="M0,230 Q70,218 140,230 Q210,242 280,230" stroke="white" strokeWidth="2" fill="none" opacity="0.5"/>
    </svg>
  ),

  7: ({ accent }) => ( // August — harvest warm
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky7" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a"/>
          <stop offset="100%" stopColor="#fff7ed"/>
        </linearGradient>
      </defs>
      <rect width="280" height="340" fill="url(#sky7)"/>
      {/* Wheat field */}
      {Array.from({length:14},(_,i)=>(
        <g key={i}>
          <line x1={12+i*20} y1="340" x2={12+i*20} y2="200" stroke="#d97706" strokeWidth="3"/>
          {[-2,0,2].map((offset,j)=>(
            <ellipse key={j} cx={12+i*20+offset*4} cy={195} rx="5" ry="14"
              fill="#fbbf24" transform={`rotate(${offset*15},${12+i*20},195)`}/>
          ))}
        </g>
      ))}
      {/* Barn */}
      <rect x="160" y="180" width="90" height="80" fill="#dc2626"/>
      <polygon points="155,180 205,140 255,180" fill="#b91c1c"/>
      <rect x="190" y="220" width="20" height="40" fill="#92400e"/>
      <rect x="165" y="190" width="18" height="18" fill="#fbbf24" opacity="0.8"/>
      {/* Sun */}
      <circle cx="40" cy="60" r="38" fill="#f59e0b"/>
      {[0,60,120,180,240,300].map((deg,i)=>(
        <line key={i}
          x1={40+46*Math.cos(deg*Math.PI/180)}
          y1={60+46*Math.sin(deg*Math.PI/180)}
          x2={40+60*Math.cos(deg*Math.PI/180)}
          y2={60+60*Math.sin(deg*Math.PI/180)}
          stroke="#d97706" strokeWidth="3" strokeLinecap="round"/>
      ))}
    </svg>
  ),

  8: ({ accent }) => ( // September — autumn
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky8" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fed7aa"/>
          <stop offset="100%" stopColor="#fef3c7"/>
        </linearGradient>
      </defs>
      <rect width="280" height="340" fill="url(#sky8)"/>
      {/* Trees */}
      {[
        {x:60, colors:['#dc2626','#b91c1c','#991b1b']},
        {x:140, colors:['#f97316','#ea580c','#c2410c']},
        {x:220, colors:['#eab308','#ca8a04','#a16207']},
      ].map(({x,colors},i)=>(
        <g key={i}>
          <rect x={x-7} y="230" width="14" height="90" fill="#78350f"/>
          <circle cx={x} cy="190" r="50" fill={colors[0]}/>
          <circle cx={x-25} cy="205" r="35" fill={colors[1]}/>
          <circle cx={x+25} cy="200" r="38" fill={colors[2]}/>
        </g>
      ))}
      {/* Falling leaves */}
      {[[40,120,'#dc2626'],[200,150,'#f97316'],[80,200,'#eab308'],
        [240,100,'#dc2626'],[160,80,'#f97316']].map(([x,y,c],i)=>(
        <ellipse key={i} cx={x} cy={y} rx="10" ry="6" fill={c} opacity="0.8"
          transform={`rotate(${i*30},${x},${y})`}/>
      ))}
      {/* Ground */}
      <rect x="0" y="300" width="280" height="40" fill="#854d0e"/>
      {/* Leaf pile */}
      <ellipse cx="80" cy="305" rx="50" ry="12" fill="#dc2626" opacity="0.7"/>
      <ellipse cx="200" cy="308" rx="55" ry="11" fill="#f97316" opacity="0.7"/>
    </svg>
  ),

  9: ({ accent }) => ( // October — misty
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky9" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#6b7280"/>
        </linearGradient>
      </defs>
      <rect width="280" height="340" fill="url(#sky9)"/>
      {/* Moon */}
      <circle cx="200" cy="70" r="36" fill="#fef9c3" opacity="0.9"/>
      <circle cx="212" cy="62" r="30" fill="#374151"/>
      {/* Pumpkins */}
      {[60,140,215].map((x,i)=>(
        <g key={i}>
          <rect x={x-4} y={285} width="8" height="20" fill="#15803d"/>
          <ellipse cx={x} cy="310" rx="34" ry="26" fill="#ea580c"/>
          <ellipse cx={x-20} cy="312" rx="18" ry="24" fill="#f97316"/>
          <ellipse cx={x+20} cy="312" rx="18" ry="24" fill="#f97316"/>
          {/* Face */}
          <polygon points={`${x-8},300 ${x-12},308 ${x-4},308`} fill="#1a1a1a"/>
          <polygon points={`${x+8},300 ${x+12},308 ${x+4},308`} fill="#1a1a1a"/>
          <path d={`M${x-10},317 Q${x},325 ${x+10},317`} stroke="#1a1a1a" strokeWidth="2" fill="none"/>
        </g>
      ))}
      {/* Bats */}
      {[[80,100],[160,80],[230,130]].map(([x,y],i)=>(
        <g key={i} fill="#1a1a1a">
          <ellipse cx={x} cy={y} rx="8" ry="6"/>
          <path d={`M${x-8},${y} Q${x-20},${y-12} ${x-28},${y}`}/>
          <path d={`M${x+8},${y} Q${x+20},${y-12} ${x+28},${y}`}/>
        </g>
      ))}
      {/* Mist */}
      {[230,260,290,310].map((y,i)=>(
        <rect key={i} x="0" y={y} width="280" height="20" fill="rgba(200,200,200,0.08)" rx="10"/>
      ))}
    </svg>
  ),

  10: ({ accent }) => ( // November — night
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky10" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a"/>
          <stop offset="100%" stopColor="#1e1b4b"/>
        </linearGradient>
      </defs>
      <rect width="280" height="340" fill="url(#sky10)"/>
      {/* Stars */}
      {Array.from({length:30},(_,i)=>(
        <circle key={i} cx={Math.sin(i*137)*130+140} cy={Math.cos(i*97)*120+120}
          r={i%5===0?2:1} fill="white" opacity={0.5+0.5*(i%3)/3}/>
      ))}
      {/* Moon crescent */}
      <circle cx="220" cy="60" r="32" fill="#f0f8ff" opacity="0.95"/>
      <circle cx="234" cy="52" r="28" fill="#0f172a"/>
      {/* Northern lights */}
      {['#4ade80','#818cf8','#38bdf8'].map((c,i)=>(
        <path key={i}
          d={`M${-20+i*10},${140+i*20} Q${80+i*20},${110+i*15} ${160+i*10},${140+i*20} Q${220+i*10},${160+i*20} ${290},${145+i*20}`}
          stroke={c} strokeWidth="8" fill="none" opacity="0.25" strokeLinecap="round"/>
      ))}
      {/* Bare trees */}
      {[50,140,240].map((x,i)=>(
        <g key={i} stroke="#334155" strokeWidth="3" strokeLinecap="round" fill="none">
          <line x1={x} y1="340" x2={x} y2="220"/>
          <line x1={x} y1="240" x2={x-35} y2="195"/>
          <line x1={x} y1="240" x2={x+35} y2="195"/>
          <line x1={x-35} y1="195" x2={x-52} y2="175"/>
          <line x1={x-35} y1="195" x2={x-22} y2="170"/>
          <line x1={x+35} y1="195" x2={x+50} y2="175"/>
          <line x1={x+35} y1="195" x2={x+22} y2="170"/>
        </g>
      ))}
    </svg>
  ),

  11: ({ accent }) => ( // December — christmas
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky11" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1445"/>
          <stop offset="100%" stopColor="#1e3a5f"/>
        </linearGradient>
      </defs>
      <rect width="280" height="340" fill="url(#sky11)"/>
      {/* Stars */}
      {[[30,30],[80,20],[160,40],[220,25],[260,50],[50,80],[200,70]].map(([x,y],i)=>(
        <text key={i} x={x} y={y} fontSize={i===3?18:10} fill="#fde68a" opacity="0.8">★</text>
      ))}
      {/* Snow */}
      {Array.from({length:20},(_,i)=>(
        <circle key={i} cx={10+i*14} cy={90+(i%4)*40} r="2.5" fill="white" opacity="0.7"/>
      ))}
      {/* Tree */}
      <polygon points="140,60 85,165 195,165" fill="#16a34a"/>
      <polygon points="140,110 78,230 202,230" fill="#15803d"/>
      <polygon points="140,170 68,310 212,310" fill="#166534"/>
      <rect x="125" y="308" width="30" height="28" fill="#92400e"/>
      {/* Ornaments */}
      {[[140,75,'#fbbf24'],[105,160,'#ef4444'],[175,155,'#60a5fa'],
        [90,240,'#a78bfa'],[195,238,'#f472b6'],[140,245,'#fbbf24']].map(([x,y,c],i)=>(
        <circle key={i} cx={x} cy={y} r="7" fill={c}/>
      ))}
      {/* Star on top */}
      <text x="128" y="62" fontSize="22" fill="#fde68a">★</text>
      {/* Lights string */}
      <path d="M100,170 Q120,165 140,170 Q160,175 180,170" stroke="#fbbf24" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
};

const QUOTE_MAP = [
  '"New beginnings await in winter\'s quiet breath."',
  '"Love blooms in the coldest of hearts."',
  '"Spring whispers: start again, start fresh."',
  '"April showers bring May\'s brightest flowers."',
  '"Warmth is not a season — it\'s a choice."',
  '"The ocean holds all of summer\'s secrets."',
  '"Long days, short nights, endless horizons."',
  '"Fields of gold remember the sun\'s promise."',
  '"Every leaf that falls is courage letting go."',
  '"In mist and shadow, magic finds its home."',
  '"Bare branches hold next spring\'s hidden buds."',
  '"Joy is the lantern we carry through winter."',
];

export default function MonthImage({ month, year, theme, monthName, onPrev, onNext, onTheme, showThemePicker, onSelectTheme }) {
  const Scene = SCENES[month];

  return (
    <div className="image-panel" style={{ background: theme.bg }}>
      <div className="scene-art">
        <Scene accent={theme.accent} />
      </div>

      <div className="image-panel-footer">
        <p className="month-quote">{QUOTE_MAP[month]}</p>

        <div className="nav-row">
          <button className="nav-btn" onClick={onPrev} title="Previous month">
            ‹
          </button>
          <button className="theme-toggle-btn" onClick={onTheme} title="Theme">
            {theme.emoji} <span>{theme.label}</span>
          </button>
          <button className="nav-btn" onClick={onNext} title="Next month">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

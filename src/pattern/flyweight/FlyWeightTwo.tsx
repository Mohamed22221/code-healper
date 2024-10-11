// بيانات ثابتة تمثل الجزيئات المتشابهة (مثل الرصاص)

import React, { useState, useEffect } from 'react';

interface ParticleType {
    color: string;
    sprite: string;
}
type GameType = "bullet" | "missile" | "shrapnel";

interface ParticleProps {
    id?: number;
    x: number;
    y: number;
    type: GameType;
}
const particleTypes : Record<GameType, ParticleType> = {
    bullet: { color: 'red', sprite: 'bullet.png' },
    missile: { color: 'blue', sprite: 'missile.png' },
    shrapnel: { color: 'gray', sprite: 'shrapnel.png' },
  };
  const start = performance.now();
  // مكون يمثل جزيء واحد (Particle)
const Particle =  React.memo(({ x, y, type } : ParticleProps) => {
    const { color, sprite } = particleTypes[type]; // استخدام البيانات الثابتة بناءً على النوع
  
    return (
        <div
          style={{
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20px',
            height: '20px',
            backgroundColor: color,
          }}
        >
          {/* استخدام عنصر img بدلاً من backgroundImage */}
          <img
            src={sprite}
            alt={type}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      );
    })

  // مكون اللعبة الذي يدير كل الجزيئات
const Game = () => {
    const [particles, setParticles] = useState<ParticleProps[]>([]);
  
    // دالة لإضافة جزيء جديد
    const addParticle  = (x : number , y : number, type : GameType)  => {
      setParticles((prevParticles) => [
        ...prevParticles,
        { x, y, type, id: Date.now() + Math.random() },
      ]);
    };
  
    // إضافة جزيء جديد بشكل دوري
    useEffect(() => {
      const interval = setInterval(() => {
        // إضافة جزيء عند إحداثيات عشوائية
        addParticle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 'bullet');
        addParticle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 'missile');
        addParticle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 'shrapnel');
        setParticles((prevParticles) => prevParticles.slice(-100)); // احتفظ بآخر 100 جزيء فقط

      }, 300);
  
      return () => clearInterval(interval);
    }, []);
    const end = performance.now();
console.log(`Time taken: ${end - start}ms`);
    return (
      <div>
        {particles.map((particle) => (
          <Particle key={particle.id} x={particle.x} y={particle.y} type={particle.type} />
        ))}
      </div>
    );
  };

  export default Game;
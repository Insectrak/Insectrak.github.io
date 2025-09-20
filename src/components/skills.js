import React, { useState, useRef, useEffect } from 'react';

const Skills = ({ src, alt, speed = 500 }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const badgeRef = useRef(null);
  const rotateIntervalRef = useRef(null);

  useEffect(() => {
    // Se ejecuta cada vez que 'isSpinning' cambia
    if (isSpinning) {
      let current = 0;
      const rotateSpeed = speed / 180;

      const badgeRotation = () => {
        current = (current === 90) ? 271 : current + 1;

        if (badgeRef.current) {
          badgeRef.current.style.transform = `rotate3d(0,1,0,${current}deg)`;
        }

        if (current === 360) {
          clearInterval(rotateIntervalRef.current);
          setIsSpinning(false);
          if (badgeRef.current) {
            badgeRef.current.style.transform = ''; // Limpia el estilo
          }
        }
      };

      rotateIntervalRef.current = setInterval(badgeRotation, rotateSpeed);
    }

    // Función de limpieza para evitar fugas de memoria
    return () => {
      if (rotateIntervalRef.current) {
        clearInterval(rotateIntervalRef.current);
      }
    };
  }, [isSpinning, speed]);

  const handleMouseEnter = () => {
    if (!isSpinning) {
      setIsSpinning(true);
    }
  };

  return (
    <img
      ref={badgeRef}
      src={src}
      alt={alt}
      onMouseEnter={handleMouseEnter}
      width={'105px'}
      height={'105px'}
    />
  );
};

export default Skills;
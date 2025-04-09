
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        
        if (newSeconds >= 0) {
          return { ...prevTime, seconds: newSeconds };
        }
        
        const newMinutes = prevTime.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prevTime, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prevTime.hours - 1;
        if (newHours >= 0) {
          return { ...prevTime, hours: newHours, minutes: 59, seconds: 59 };
        }
        
        const newDays = prevTime.days - 1;
        if (newDays >= 0) {
          return { ...prevTime, days: newDays, hours: 23, minutes: 59, seconds: 59 };
        }
        
        clearInterval(timer);
        return prevTime;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-6 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-medium mb-3">Oferta especial termina em:</p>
          
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md w-full">
            <div className="flex flex-col items-center">
              <div className="bg-stitch-blue w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl font-bold">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <span className="text-xs sm:text-sm mt-1">Dias</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-stitch-blue w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl font-bold">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-xs sm:text-sm mt-1">Horas</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-stitch-blue w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl font-bold">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-xs sm:text-sm mt-1">Minutos</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-stitch-blue w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl font-bold">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <span className="text-xs sm:text-sm mt-1">Segundos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

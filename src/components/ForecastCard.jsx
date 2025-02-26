import React from 'react';

const ForecastCard = ({ day, icon, tempMax, tempMin }) => {
  return (
    <>
      <div className='grid grid-cols-2  '>
        <div className="text-white bg-slate-700 rounded-lg p-2 text-center w-min ">
          <div className="font-semibold">{day}</div>
          <div className="mx-1 mb-2
          ">
            <img  src={`/weather-icons/${icon}.png`} alt="clima" className="w-16 h-16 mx-auto" />
          </div>
          <div>
            <span className="text-xl">{tempMax}°</span>
            <span className="text-gray-500 text-lg ml-2">{tempMin}°</span>
          </div>
        </div>

      </div>



    </>

  );
};

export default ForecastCard;


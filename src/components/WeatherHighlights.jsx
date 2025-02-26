import React from 'react';

const WeatherHighlights = ({ windSpeed, humidity, visibility, pressure }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mx-6 mt-8">
      <div className="text-white bg-slate-700 flex flex-col p-4 rounded-lg">
        <span>Wind status</span>
        <span className="font-bold text-5xl">{windSpeed} <span className="font-light text-4xl">m/s</span></span>
        <div className="flex flex-row justify-center items-center">
          <img className="bg-gray-500 rounded-4xl w-10 p-1.5 mr-5" src="./Icons/navigation.svg" alt="" />
          <span>NNW</span>
        </div>
      </div>
      <div className="text-white bg-slate-700 flex flex-col p-4 rounded-lg">
        <span>Humidity</span>
        <span className="font-bold text-5xl">{humidity} <span className="font-light text-4xl">%</span></span>
      </div>
      <div className="text-white bg-slate-700 flex flex-col p-4 rounded-lg">
        <span>Visibility</span>
        <span className="font-bold text-5xl">{visibility} <span className="font-light text-4xl">km</span></span>
      </div>
      <div className="text-white bg-slate-700 flex flex-col p-4 rounded-lg">
        <span>Air Pressure</span>
        <span className="font-bold text-5xl">{pressure} <span className="font-light text-4xl">mb</span></span>
      </div>
    </div>
  );
};

export default WeatherHighlights;


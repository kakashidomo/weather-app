import React from 'react';

const TemperatureUnitSelector = ({ onUnitChange }) => {
  return (
    <div className="flex flex-row justify-end font-bold text-center ">
      <button
        className="rounded-4xl bg-white m-2 p-2 w-9 text-slate-900 focus:none focus:ring-2 focus:ring-gray-300"
        onClick={() => onUnitChange('imperial')}
      >
        °F
      </button>
      <button
        className="rounded-4xl bg-slate-500 text-white m-2 p-2 w-9 focus:none focus:ring-2 focus:ring-slate-600"
        onClick={() => onUnitChange('metric')} 
      >
        °C
      </button>
    </div>
  );
};

export default TemperatureUnitSelector;


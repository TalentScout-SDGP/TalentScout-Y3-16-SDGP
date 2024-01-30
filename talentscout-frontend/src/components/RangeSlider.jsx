import React, { useEffect } from 'react';

// Add Tailwind CSS classes
const rangeInputFieldStyle = 'absolute w-full h-2 top-0 bg-transparent pointer-events-none appearance-none';
const rangeThumbStyle = 'h-7 w-7 rounded-full bg-teal-500 pointer-events-auto appearance-none shadow-md';

// Define the component
const RangeSlider = () => {
  useEffect(() => {
    const rangeInputs = document.querySelectorAll('.range-input input');
    const priceInputs = document.querySelectorAll('.price-input input');
    const range = document.querySelector('.slider .progress');
    let priceGap = 1000;

    rangeInputs.forEach((input) => {
      input.addEventListener('input', (e) => {
        let minPrice = parseInt(priceInputs[0].value, 10);
        let maxPrice = parseInt(priceInputs[1].value, 10);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInputs[1].max) {
          if (e.target.className === 'range-min') {
            rangeInputs[0].value = minPrice;
            range.style.left = `${(minPrice / rangeInputs[0].max) * 100}%`;
          } else {
            rangeInputs[1].value = maxPrice;
            range.style.right = `${100 - (maxPrice / rangeInputs[1].max) * 100}%`;
          }
        }
      });
    });

    rangeInputs.forEach((input) => {
      input.addEventListener('input', (e) => {
        let minVal = parseInt(rangeInputs[0].value, 10);
        let maxVal = parseInt(rangeInputs[1].value, 10);
        if (maxVal - minVal < priceGap) {
          if (e.target.className === 'range-min') {
            rangeInputs[0].value = maxVal - priceGap;
          } else {
            rangeInputs[1].value = minVal + priceGap;
          }
        } else {
          priceInputs[0].value = minVal;
          priceInputs[1].value = maxVal;
          range.style.left = `${(minVal / rangeInputs[0].max) * 100}%`;
          range.style.right = `${100 - (maxVal / rangeInputs[1].max) * 100}%`;
        }
      });
    });
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  return (
    <div>
      <div className="h-2 mt-3 relative bg-gray-300 rounded ">
        <div className="h-full absolute bg-teal-500 rounded"></div>
      </div>
      <div className="relative">
        <input type="range" className={`${rangeInputFieldStyle} range-min`} min="0" max="10000" value="2500" step="100"/>
        <input type="range" className={`${rangeInputFieldStyle} range-max`} min="0" max="10000" value="7500" step="100"/>
      </div>
    </div>
  );
};

export default RangeSlider;

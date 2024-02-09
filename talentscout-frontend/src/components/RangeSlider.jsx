import React, {useState} from "react";
import MultiRangeSlider from "multi-range-slider-react";

function MultiRange() {
    const [minValue, set_minValue] = useState(18);
    const [maxValue, set_maxValue] = useState(40);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    return (
        <div>
            <div className="range pt-8 lg:py-0">
                <MultiRangeSlider
                    min={12}
                    max={100}
                    step={5}
                    minValue={minValue}
                    maxValue={maxValue}
                    barInnerColor="#070032"
                    onInput={(e) => {
                        handleInput(e);
                    }}
                />
            </div>
        </div>
    );
}

export default MultiRange;
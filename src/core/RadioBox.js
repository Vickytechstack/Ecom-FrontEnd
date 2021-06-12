import React, { useState, useEffect, Fragment } from "react";
import { prices } from "./fixedPrices";

const RadioBox = ({ prices, handleFilters }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        handleFilters(event.target.value);
        setValue(event.target.value);

    };

    return prices.map((p, i) => (
        <div key={i}>
            <input onChange={handleChange}
                value={`${p._id}`} name={p} type="radio" className="mr-2 ml-4" />
            <label className="mr-2 ml-4">{p.name}</label>
        </div>
    ));
};

export default RadioBox;

import React, { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function handleClickMinus(){
        setCount(count - 1);
    }

    return (
        <div>
        <p className='button_p'>You clicked the button {count} times</p>
        <button onClick={handleClick}>Збільшити</button>
        <button onClick={handleClickMinus}>Зменшити</button>
        </div>
    );
}
    
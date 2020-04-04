import React, { useState } from 'react';

function Start() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>Count: {count}</p>
            <p><button onClick={() => setCount(count + 1)}>Count++</button></p>
            <p><button onClick={() => setCount(count - 1)}>Count--</button></p>
        </>
    );
}

export default Start;

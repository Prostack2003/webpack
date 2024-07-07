import { useState } from 'react';

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(count => count + 1);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Инкремент</button>
        </div>
    );
};


import { useState } from "react";

export default function CounterBtn() {
    const [count, setCount] = useState(0)

    const handlePress = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }
    return(
        <div>
    <h1 className="text-2xl ml-6">
            {count}
    </h1>

    <button
    onClick={handlePress}
    >
        Increase me by 1
    </button>


    <button
    onClick={handleDecrease}
    >
        Decrease me by 1
    </button>
        </div>
    )
};

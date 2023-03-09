import React, {useState} from 'react';

const Counter = () => {

    const [currentN, setCurrentN] = useState('1')

    const [state, setState] = useState(0)

    //state = 0
    // setState = (value)=> state = value

    const OnChange = (value:number) =>{
        setState(prev=>prev+value)
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={currentN}
                    onChange={(e)=>setCurrentN(e.target.value)}
                />
            </div>

            <div>
                {state}
            </div>

            <div>
                <button
                    onClick={()=>OnChange(1)}
                >
                    Plus 1
                </button>

                <button
                    onClick={()=>OnChange(-1)}
                >
                    Minus 1
                </button>

                <button
                    onClick={()=>OnChange(100)}
                >
                    Plus 100
                </button>

                <button
                    onClick={()=>OnChange(-100)}
                >
                    Minus 100
                </button>

                <button
                    onClick={()=>OnChange(parseInt(currentN))}
                >
                    Plus N
                </button>
            </div>
        </div>
    );
};

export default Counter;
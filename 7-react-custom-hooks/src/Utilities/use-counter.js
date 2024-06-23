import React , {useEffect, useState} from 'react';


// Custom hook MUST be prefixed with "use"
function useCounter(increment = true){

    let[counter, setCounter] = useState(0)

    useEffect(()=>{
        const interval = setInterval(() => {
            if(increment)
                setCounter(counter => counter + 1)
            else
                setCounter(counter => counter - 1)
        }, 1000);
    },[])

    return counter;

}

export default useCounter
// it is custom hooks , in which we learn how to call api and feth the info and convert the string into json
// useeffect to call api when we call api and thier lifecyle 
// currency as dependecies because all the value change as we change currency 

import { useEffect, useState } from "react";

function useCurrencyInfo(currency){

    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then( (res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
        
    }, [currency])
    console.log(data);
    return data;
    
}

export default useCurrencyInfo;

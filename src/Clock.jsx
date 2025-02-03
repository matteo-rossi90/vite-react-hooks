
import { use } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Clock({country, timeshow}) {
    // console.log(props) //le props passate dalle componenti si presentano come oggetti
    
    const t = Date.now() + 3600 * timeshow * 1000; //calcolo della data in base alla timezone
    
    const dateIni = new Date(t);
    
    //console.log(date, t, timeshow);

    const [date, setDate] = useState(dateIni);


    setTimeout(() => {
        const t = date.getTime() + 3600 * 1000
        setDate(new Date(t))
    }, 5000);
    
    return (
        <h3> 
            In {country} today is {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}
        </h3>
    )
}

export default Clock
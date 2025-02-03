
import { useState, useEffect } from 'react';

function Clock({country, timeshow}) {
    
    const t = Date.now() + 3600 * timeshow * 1000; //calcolo della data in base alla timezone
    
    const dateIni = new Date(t);

    //inizializzare lo state
    const [date, setDate] = useState(dateIni);

    useEffect(() => {
    //codice da eseguire se gli input cambiano
    const interval = setInterval(() => {
        const time = date.getTime() + 1000;
        setDate( new Date(time))
    }, 1000);
    
      return () => {
        //quando il componente è unmounted
        clearInterval(interval)
      }
    }, [date])


    // setTimeout(() => {
        // const t = date.getTime() + 3600 * 1000
        // setDate(new Date(t))
    // }, 5000);
    
    return (
        <h3> 
            In {country} today is {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}
        </h3>
    )
}

export default Clock
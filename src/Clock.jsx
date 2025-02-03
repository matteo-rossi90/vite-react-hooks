function Clock({country, timeshow}) {
    // console.log(props) //le props passate dalle componenti si presentano come oggetti
    
    const t = Date.now() + 3600 * timeshow * 1000; //calcolo della data in base alla timezone
    
    const date = new Date(t);
    
    console.log(date, t, timeshow);
    return (
        <h3> 
            In {country} today is {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}
        </h3>
    )
}

export default Clock
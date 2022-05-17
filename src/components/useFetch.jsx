import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
          .then(res => {
            if(!res.ok) {
              throw Error('could not fetch data');
            }
            console.log(res);
            return res.json();
          })
          .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch(err => {
            setError(err.message);
            setIsPending(false);
          })
        }, 50);
        
      }, [url]);
      
    
      return { data, isPending, error } ;
}

export default useFetch;
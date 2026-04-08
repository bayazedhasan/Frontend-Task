import React, { useEffect, useState } from 'react';

const useData = () => {

    const [storis, setStoris] = useState([])


    useEffect(() => {
        fetch("/Storis.json")
            .then(res => res.json())
            .then(data => setStoris(data));

    }, []);


    return storis;
    
};

export default useData;
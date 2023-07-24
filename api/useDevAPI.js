import React, { useState, useEffect } from 'react';
import Data from '@/utils/data.json';


const useDevAPI = () => {
    const [devData, setDevData] = useState(null);

    function fetchData(){
        setDevData(Data);
    };

    useEffect(()=>{fetchData()},[]);
  
    return { devData };
  
}

export default useDevAPI;

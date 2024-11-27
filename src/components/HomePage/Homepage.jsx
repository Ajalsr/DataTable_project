
import React, { useEffect, useState } from 'react'

import Header from '../Header/Header';

import { DataContext } from '../../Helper/Context';
import axios from 'axios';
import Tablecontents from '../Table/TableContents';


const Homepage = () => {

    

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setData(res.data);
          setIsLoading(false)
        })
        .catch((error) => {
          setIsLoading(false)
          setIsError(true)
          console.log(error)
          
    })
    },[])

    

  return (
    <>
    <DataContext.Provider value = {{data, setData, isLoading, isError}}>
      <Header/>
      <Tablecontents/>
    </DataContext.Provider>
    </>
  )
}

export default Homepage
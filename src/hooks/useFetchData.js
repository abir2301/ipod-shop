 // eslint-disable-next-line no-undef
 import { useEffect, useState } from "react" 
 
 export default  function  useFetchData (dataType){
    const [isFetching , setIsFetching] = useState(false )
    const [data, setData ] = useState([])
    useEffect(()=>{
        setIsFetching(true)
          async function  fetchData   (){
            setIsFetching(true)
           await  fetch ('../../data/db.json')
           .then(response => response.json())
            .then(data => {
              setIsFetching(false)
           
              setData(data[dataType])})
            .catch(error => console.error('Error fetching data:', error));
          }
          fetchData()
    }, [dataType])
    return {
        isFetching, 
        data
    } 
 }
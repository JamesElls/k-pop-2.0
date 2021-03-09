import axios from 'axios'
import {useEffect, useState} from 'react'
import Band from "./Band";

const Bands = (props) => {

  const [bands, setBands] =useState([])
  useEffect(() => {
    getBands()
  },[])

  const getBands = async () => {
    try {
      let res = await axios.get("/api/bands")
      setBands(res.data)
      }  catch (err) {
      alert("error occurred getting bands, need to debug")
      }
    }

    const {setShowForm, editBandClickHandler} = props    
    const renderBands = () => {
      if (bands.length == 0){
        return <h1>No Bands</h1>
      }
      return bands.map( band => {
        return <Band key={band.id} 
        editBandClickHandler={editBandClickHandler} setShowForm={setShowForm} {...band} />
      })
    }

  return (
    <>
    {renderBands()}
    </>

  )

}

export default Bands




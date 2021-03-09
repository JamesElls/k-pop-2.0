import {useState} from 'react'
import axios from 'axios'

const BandForm = (props) => {
    const { id } = props
    
    return id ? 'EditFORM' : 'NEW Form'
}

export default BandForm
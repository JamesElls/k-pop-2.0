import {useState} from 'react'
import axios from 'axios'

const EditBand = (props) => {

    const {id} = props
    
    const [name, setName] = useState(props.name)
    const [description, setDescription] = useState(props.description)
    const [sales, setSales] = useState(props.sales)




    const handleSubmit = async (e) => {
       e.preventDefault()
       let band = {name, description, sales}
       if(id){
       console.log(band)
       
       let res = await axios.put(`/api/bands/${id}`, band)
       console.log(res)
       } else {
        let res = await axios.post('/api/bands', band)
        console.log(res)
       }
    }

    return (

        <div className='band-form'>
            <h5>{id ? 'Edit': 'Create'}</h5>
            <form onSubmit={handleSubmit}>
                <h6>Name</h6>
                <input value={name} onChange={(e) => setName(e.target.value)} />

                <h6>Description</h6>
                <input value={description} onChange={(e) => setDescription(e.target.value)} />

                <h6>Album Sales</h6>
                <input value={sales} onChange={(e) => setSales(e.target.value)} />

                <button type={'submit'}>{id ? 'Update': 'Add'}</button>
            </form>
            
        </div>
    )
}

export default EditBand


EditBand.defaultProps = {
    name: "",
    description: "",
    sales: "",
}


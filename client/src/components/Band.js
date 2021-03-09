import EditBand from './EditBand'

const Band = (props) => {
  
   
    const { name, description, sales } = props
    
    return (
      <>
        <h1>{name}</h1>
        <p>Description: {description} sales:{sales} </p>
        <EditBand id = {props.id} name={name} description={description} sales={sales} />
      </>
    )
  }
  
  export default Band
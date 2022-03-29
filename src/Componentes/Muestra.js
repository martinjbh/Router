import { useParams } from "react-router-dom"

const Muestra = (props) => {
    const params = useParams()
    return (
        <div>
            {console.log(params)}
            {console.log(props)}
            <h1>id:   {params.id} </h1>
            <h1>props:  {props.prueba} </h1>
            <img src={"https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg"}></img>
        </div>
    )
}

export default Muestra
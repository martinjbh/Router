import { Link,useNavigate} from "react-router-dom"



export const Nav = () => {
    const Navigate=useNavigate()
    var id = 6
    return (
        <div>
            <Link to={`/prueba/${id}`}>
                <h1>Mostrar</h1>
            </Link>
            <Link to={`/users`}>
                <h1>Users</h1>
            </Link>

            <button onClick={()=>Navigate("/users")}>boton</button>

        </div>
    )
}
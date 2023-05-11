import { Link, NavLink, useNavigate } from "react-router-dom";

export const CardPage = ({m}) => {

console.log(m);
//const navigate = useNavigate();

    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={m.image}/>
                    <h3 className="mb-0 text-dark">{m.name}</h3>
                    <div className="card-body">
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                               <Link  className="btn btn-sm btn-outline-secondary" to={`/detalle/${m.id}`}>ver</Link>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
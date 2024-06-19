import { useState } from "react"
import swal from "sweetalert";
import { usersdata } from "./data/user";

const user = {
    email: "test@gmail.com",
    pass: "test123"
}

const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show,setShow] = useState({
        form:'',
        list:'d-none'
    })
    const loginSubmited = (e) => {
        e.preventDefault();
        if (!email || !password) {
            swal("Please fill input", "", "warning")
        } else {
            if (email === user.email && password === user.pass) {
                swal("Login is successfully", "", "success");
                setShow({
                    form:'d-none',
                    list:""
                })
            } else {
                swal("Email or password is wrong!", "", "error")
            }
        }

    }
    return (
        <div className="container mt-5">
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className={`my-5 ${show.form}`}>Login Page</h1>
                <form onSubmit={loginSubmited} className={`col-5 ${show.form}`}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-dark mt-3">Login</button>
                </form>
                <div className={`col-5 ${show.list}`}>
                    <ul class="list-group">
                        <li class="list-group-item text-light bg-dark">User list</li>
                        {usersdata.map(item => (
                            <li class="list-group-item">{item.name}</li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App
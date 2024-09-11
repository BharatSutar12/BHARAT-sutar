import { useState } from 'react'
import './Style/Login.css'
import { Link } from 'react-router-dom';

function Login() {
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const updateEmail = (e) => {
        console.log("====", e.target.value)
        setEmail(e.target.value)
    }

    const updatepassword = (e) => {
        console.log("====", e.target.value)
        setpassword(e.target.value)
    }

    const submitkey = () => {
        console.log("====", Email, password,)

    }
    return (
        <>
            <div className="imformationform">
                <form action=''>
                    <div className="formcontainer">
                        <div className='wrapper'>
                            <h1>Login to your account</h1>
                            <span>Email</span><br />
                            <input type="text" name="Email" id="" onKeyUp={updateEmail} /><br />
                            <span>Password</span><br />
                            <input type="text" name="password" id="" placeholder='Enter your password' onChange={updatepassword} /><br />
                            <button onClick={submitkey}><Link to="/home">Login Now</Link></button>
                            <div className='footercontain'>
                                <h4>Don't Have An Account ?<Link to="/Home2">Register Here</Link></h4>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
};
export default Login;
import { Link } from "react-router-dom";
import './Styles/SignUp.css'
import logo from '/logo/logo.png'

function SignUp() {
    return (
        <>
            <div className="headercontainer">
                <div className="section1">
                    <div className="headerlogo">
                        <img src={logo} alt="" />
                    </div>
                    <h1>Welcome.<br />
                        Begin your cinematic<br /> adventure now with<br /> our ticketing<br /> platform!</h1>
                </div>
                <div className="section2">
                    <div className="sectioncontainer">
                        <h2>Create an account</h2>
                        <div className="formwrapper">
                            <form action="">
                                <div className="sectionelement1">
                                    <label htmlFor="email">Email</label><br />
                                    <input type="email" name="email" id="" />
                                </div>
                                <div className="sectionelement2">
                                    <label htmlFor="password">Password</label><br />
                                    <input type="passwprd" name="password" placeholder="Enter your password" /><br />
                                    <input type="password" name="confirm-password" placeholder="Confirm your password" />
                                </div>
                                <div className="buttonwrapper">
                                    <button>Create account</button>
                                </div>
                            </form>
                            <div className="lastcontain">
                                <span>Already have an account ?<Link to="/Login" > Log In</Link></span>
                            </div>
                        </div>
                    </div>
                </div >

            </div>
        </>
    )
}
export default SignUp;
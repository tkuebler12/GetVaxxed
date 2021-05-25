import React,{useState} from "react";
import {Button} from "react-bootstrap";
import "./Login.css";

function Login({login}) {
    const [states,setStates]=useState([ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ])
    
      
    return (
        <div className="container">
            <div className="card justify-content-center">
                <div className="card-header">
                    <h1>Sign In</h1>
                    <div className="d-flex justify-content-end social_icon">
                        <span><i className="fab fa-facebook-square"></i></span>
                        <span><i className="fab fa-google-plus-square"></i></span>
                        <span><i className="fab fa-twitter-square"></i></span>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <input id="name" type="text" class="form-control" placeholder="username" />
                        <input id="password" type="password" class="form-control" placeholder="password" />
                        <label for="cars">Choose your state:</label>
                        <select  name="state" id="state">
                            {states.map(state => (
                                    <option value={state}>{state} </option>
                                ))}
                        </select>
                        <Button onClick={login} variant="warning btn btn-sm" id="login">Login</Button>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                        Don't have an account?<a id="signUp" href="#signup">Sign Up</a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a id="forgot" href="#forget">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
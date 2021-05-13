import React from "react";
import "./Login.css";

function Login(){
    return(
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
                    <a href="#search" src="" type="submit" value="Login" class="btn float-right btn-dark">Login</a>
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
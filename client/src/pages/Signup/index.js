import Axios from "axios";
import React,{useState} from "react";
import {Button} from "react-bootstrap";
import "./Signup.css";

function Signup({login}) {
   
    const [formObject, setFormObject] = useState({name:"", email:"",password:""})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        console.log(formObject.username,formObject.password)
      };

    // handleFormSubmit =() =>{
    //     Axios.get("/api/userRoutes")
    //     .then(response =>{

    //     })
    // }

    function signUp (){
        console.log(formObject);
        Axios.post("/users/signup", formObject)
        .then(user => {
             console.log("logged in successfully !",user)
             login(user)
        }
        ).catch(error => {
            console.log("Err",error)
        })

    }
    
      
      
    return (
        <div className="container">
            <div className="card justify-content-center">
                <div className="card-header">
                    <h1>Sign Up</h1>
                    <div className="d-flex justify-content-end social_icon">
                        <span><i className="fab fa-facebook-square"></i></span>
                        <span><i className="fab fa-google-plus-square"></i></span>
                        <span><i className="fab fa-twitter-square"></i></span>
                    </div>
                </div>
                <div className="card-body">
                    <form>
                        <input onChange={handleInputChange} name="name" value={formObject.name} id="name" type="text" class="form-control" placeholder="name" />
                        <input onChange={handleInputChange} name="email" value={formObject.email} id="email" type="email" class="form-control" placeholder="email" />
                        <input onChange={handleInputChange} name="password" value={formObject.password} id="password" type="password" class="form-control" placeholder="password" />
                        <Button onClick={signUp} variant="warning btn btn-sm" id="login">Sign up!</Button>
                    </form>
                </div>
                <div className="card-footer">
                    
                </div>
            </div>
        </div>
    );
}

export default Signup;
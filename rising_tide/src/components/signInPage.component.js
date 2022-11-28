import React, { Component }from 'react';


import {logIn} from '../features/auth/AuthService';

export default class SignIn extends Component {
    
	
    constructor(props){
		super(props);
        
        this.changeUsername= this.changeUsername.bind(this);
        this.changePassword= this.changePassword.bind(this);
        
        this.onSubmit=this.onSubmit.bind(this);
		this.state={
			_id:"",//Username
			password:"",
			
		

		}
	}
    
	changeUsername = (e)=>{
		this.setState({
			username: e.target.value
		});
	}
	changePassword = (e)=>{
		this.setState({
			password: e.target.value
		});
	}
	
	 

    onSubmit= (e)=>{
        
        const user={
			username: this.state.username,
			password: this.state.password
			
		}
		
	
        
        logIn(user);
        console.log(user);
        
        
        document.getElementById("p").innerHTML = "Logged in!"
        e.preventDefault();
		
    }

    
    render() {
        return(
            <div className="container" id="containerSignUpOrOut">
                <center>
                    <form onSubmit={this.onSubmit}>
                        <h2 id="p">Log in Here!</h2>
                        <br/>
                        <input type="textbox"  className="form-control" placeholder="Username" 
                        required 
                        value={this.state.username}
                        onChange={this.changeUsername}>

                        </input>

                        <input type="password"  className="form-control" placeholder="Password" 
                        required
                        value={this.state.password}
                        onChange={this.changePassword}>

                        </input>

                        <button type="submit" id="signInBtn" className="btn btn-primary btn-block">Sign In</button>
                    </form>
                </center>
            </div>

        )
    }
}

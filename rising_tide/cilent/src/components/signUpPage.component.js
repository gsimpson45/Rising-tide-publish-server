import React, { Component } from 'react';

import {register} from '../features/auth/AuthService';


export default class SignUp extends Component {
	

    constructor(props){
		super(props);
        
        this.changeUsername= this.changeUsername.bind(this);
        this.changePassword= this.changePassword.bind(this);
		this.changeEmail= this.changeEmail.bind(this);
        
        this.onSubmit=this.onSubmit.bind(this);
		this.state={
			_id:"",//Username
			password:"",
			

			habit:[{
				activity:"",
				isCompleted: false,
				completionDate:{
					day:0,
					month:"",
					year:0,
				}
			}],
			
			Journal:[{
				date:{
					day:0,
					month:"",
					year:0,
				},
				
				freeResponse:"",
				
				mood:""
			}]
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
	changeEmail = (e)=>{
		this.setState({
			email: e.target.value
		});
	}
	
	 

    onSubmit= (e)=>{
        //const { errorDetected,success,isLoading,message}=  useSelector((state)=>state.auth);
		
		

		if(this.state.username.length < 3){
			let usernameLabel = document.getElementById("signUpUsernameLabel")
			usernameLabel.innerHTML = "Username should be at least 3 characters long"
			usernameLabel.style = "color: red";
			e.preventDefault();
			return;
		}
		
        const user={
			username: this.state.username,
			password: this.state.password,
			email: this.state.email
			
		}
		
		
		
			/*axios.post("http://localhost:5000/users/add", JSON.stringify(user),
			{
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(res=>console.log(res.data));*/
			
		register(user);
		
		e.preventDefault();
        
        
        //console.log(user)
		document.getElementById("signUpUsernameLabel").style = "color: black";
		document.getElementById("signUpUsernameLabel").innerHTML = "Username:";
        document.getElementById("signup").innerHTML = "Welcome, new user!";
    }


    render() {
        return(
            <div className="container" id="containerSignUpOrOut">
                <center>
                    <form onSubmit={this.onSubmit}>
                        <h2 id="signup">Sign Up Here!</h2>
                        <br/>

						<label className="signUpFormLabels" for="signUpEmail">Email:</label>
                        <input id="signUpEmail" type="email"  className="form-control" placeholder="Email" required
						
						onChange={this.changeEmail}></input>
						
						<label className="signUpFormLabels" for="signUpUsername" id="signUpUsernameLabel">Username:</label>
                        <input type="textbox" id="signUpUsername" className="form-control" placeholder="Username" 
                        required 
                        
                        onChange={this.changeUsername}>
                        </input>

						<label className="signUpFormLabels" for="SignUpPassword">Password: </label>
                        <input type="password" id="signUpPassword" className="form-control" placeholder="Password" 
                        required
                        
                        onChange={this.changePassword}>
                        </input>

                        <button type="submit" id="signUpBtn" className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </center>
            </div>

        )
    }
}

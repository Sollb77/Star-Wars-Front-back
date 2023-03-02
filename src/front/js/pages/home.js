import React, { useContext, useEffect, useState} from "react";
import {Context} from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context);
	const [email, setEmail] = useState(" ");
	const [password, setPassword] = useState("");


	const handleSubmit = (e) => {
		e.preventDefault();
		if (email === "" || password === "")
		{console.log("Complete la informacion solicitada")
		}
		else 
		{actions.fetchCredentials(email,password)
		}

		}
	//const {store,actions} = useContext(Context)

	return (
		<>
		<div className="text-center mt-5">
			<form>
				<div className="mb-3">
					<label for="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1"  onChange={(e)=>setEmail(e.target.value)} value={email} aria-describedby="emailHelp"/>
					<div id="emailHelp" className="form-text w-25">We'll never share your email with anyone else.</div>
				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} value={password} />
				</div>
				<div className="mb-3 form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
					<label className="form-check-label" for="exampleCheck1" >Check me out</label>
				</div>
				<button type="submit" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
			</form>
		</div>
		</>
	);
}

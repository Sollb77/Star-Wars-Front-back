import React, { useContext, useEffect, useState} from "react";
import {Context} from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const {store, actions} = useContext(Context);
	const [email, setEmail] = useContext("");
	const [password, setPassword] = useContext("");

/*	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email === "" || password === "")
		{console.log("Complete la informacion solicitada")
		}
		else 
		{actions.fetchsCredentials(email,password)
		}

		}
	//const {store,actions} = useContext(Context)
*/
	return (
		<div className="text-center mt-5">
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Email address</label>
					<input type="email" class="form-control" id="exampleInputEmail1"  value={email} aria-describedby="emailHelp"/>
					<div id="emailHelp" class="form-text w-25">We'll never share your email with anyone else.</div>
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">Password</label>
					<input type="password" class="form-control" id="exampleInputPassword1"  value={password} />
				</div>
				<div class="mb-3 form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
					<label class="form-check-label" for="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" class="btn btn-primary" >Submit</button>
			</form>
		</div>
	);
}

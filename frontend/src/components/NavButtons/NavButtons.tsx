import {useState} from "react";
import LogInForm from "../LogInForm/LogInForm";
import SignUpForm from "../SignUpForm/SignUpForm";



export default function NavButtons() {

    const [showLogIn, setShowLogIn] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const handleShowSingUp = () => {
        setSignUp(!signUp);
    }

    const handleShowLogIn = () => {
        setShowLogIn(!showLogIn);
    }



	return (
		<div className="p-2 flex gap-2">
			<button onClick={handleShowLogIn} className="cursor-pointer bg-amber-300 px-4 py-1">Log in</button>
			<button onClick={handleShowSingUp} className="cursor-pointer bg-amber-300 px-4 py-1">Sign up</button>

            {signUp && <SignUpForm show={signUp} close={handleShowSingUp}/>}
            {showLogIn && <LogInForm show={showLogIn} close={handleShowLogIn}/>}
		</div>
	);
}

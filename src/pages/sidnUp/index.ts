import button from '../../components/button';
import input from '../../components/input';
import './style.scss';
import SignUp from "./SignUp";
import tpl from "./tpl.hbs"


const signUp = new SignUp();

window.addEventListener("DOMContentLoaded", ()=> {
	const app = document.querySelector("#app");
	if (app) {
		app.innerHTML = signUp.compile(tpl({
			title: "Sign up",
			btn: button('btn1','SIGN UP'),
			inputLogin: input("login", "Login"),
			inputPassword: input("password", "Password"),
			inputMail: input("mail", "E-mail"),
			inputName: input("name", "Name"),
			inputSurname: input("surname", "Surname"),
			inputWrong: input("wrong", "")
			}))
	}

})

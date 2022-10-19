import template from "./tpl.hbs";
import button from '../../components/button';
import input from '../../components/input';
import './style.scss';



window.addEventListener("DOMContentLoaded", ()=> {
	const app = document.querySelector("#app");
	app.innerHTML = template({
		title: "Sign up",
		btn: button('btn1','SIGN UP'),
		inputLogin: input("login", "Login"),
		inputPassword: input("password", "Password"),
		inputMail: input("mail", "E-mail"),
		inputName: input("name", "Name"),
		inputSurname: input("surname", "Surname"),
		inputWrong: input("wrong", "")
	});
})

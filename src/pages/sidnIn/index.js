import template from "./tpl.hbs";
import button from '../../components/button';
import input from '../../components/input';
import './style.scss';



window.addEventListener("DOMContentLoaded", ()=> {
	const app = document.querySelector("#app");
	app.innerHTML = template({
		title: "Sign in",
		btn: button('btn1','SIGN IN'),
		input1: input("login", "Login"),
		input2: input("password", "Password")
	});
})

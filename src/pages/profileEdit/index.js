import template from "./tpl.hbs";
import profileInput from '../../components/profile-input';
import './style.scss';



window.addEventListener("DOMContentLoaded", ()=> {
	const app = document.querySelector("#app");
	app.innerHTML = template({
		inputName: profileInput("name", "Name"),
		inputMail: profileInput("mail", "E-mail"),
		inputLogin: profileInput("login", "Login"),
		inputTel: profileInput("tel", "Tel"),
		inputPassword: profileInput("pass", "Password"),
	});
})

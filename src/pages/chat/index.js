import template from "./tpl.hbs";
import card from '../../components/card';
import './style.scss';



window.addEventListener("DOMContentLoaded", ()=> {
	const app = document.querySelector("#app");
	app.innerHTML = template({
		crd: card("Name", "Name", "Long message, long message, long message, long message")
	});
})

import template from "./tpl.hbs";
import profileInput from '../../components/profile-input';
import './style.scss';



window.addEventListener("DOMContentLoaded", ()=> {
	const app = document.querySelector("#app");

	if (app) {
		app.innerHTML = template({

		});
	}

})

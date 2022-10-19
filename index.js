import template from "./index.hbs";
import './style.scss';
import profileInput from "./src/components/profile-input";
import button from "./src/components/button";
import page2 from './src/pages/page2';



window.addEventListener("DOMContentLoaded", ()=> {
    const app = document.querySelector("#app");
    app.innerHTML = template({
        inputName: profileInput("name", "Name"),
        inputMail: profileInput("mail", "E-mail"),
        inputLogin: profileInput("login", "Login"),
        inputTel: profileInput("tel", "Tel"),
        inputPassword: profileInput("pass", "Password")
})

})

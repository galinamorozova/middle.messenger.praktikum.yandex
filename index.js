import template from "./index.hbs";
import './style.scss';
import "./src/pages/profile/style.scss";
import "./src/pages/profileEdit/style.scss";
import "./src/pages/chat/style.scss";
import "./src/pages/error500/style.scss";
import "./src/pages/error404/style.scss";
import "./src/components/profile-input/style.scss";
import "./src/components/input/style.scss";
import "./src/pages/sidnIn/style.scss";
import "./src/pages/sidnUp/style.scss";
import profileInput from "./src/components/profile-input";
import signIn from "./src/pages/sidnIn/tpl.hbs";
import signUp from "./src/pages/sidnUp";
import profile from "./src/pages/profile/tpl.hbs";
import profileEdit from "./src/pages/profileEdit/tpl.hbs";
import error404 from "./src/pages/error404/tpl.hbs";
import error500 from "./src/pages/error500/tpl.hbs";
import chat from "./src/pages/chat/tpl.hbs";
import button from "./src/components/button";
import input from "./src/components/input";
import card from "./src/components/card";



window.addEventListener("DOMContentLoaded", ()=> {
    const app = document.querySelector("#app");
    const location = window.location.pathname;
    if (app) {
        if (location === "/src/pages/sidnIn") {
           app.innerHTML = signIn({
                title: "Sign in",
                btn: button('btn1','SIGN IN'),
                input1: input("login", "Login"),
                input2: input("password", "Password")
            });
        } else if (location === "/src/pages/sidnUp") {
            app.innerHTML = signUp({
                title: "Sign up",
                btn: button('btn1','SIGN UP'),
                inputLogin: input("login", "Login"),
                inputPassword: input("password", "Password"),
                inputMail: input("mail", "E-mail"),
                inputName: input("name", "Name"),
                inputSurname: input("surname", "Surname"),
                inputWrong: input("wrong", "")
            });
        } else if (location === "/src/pages/profile") {
            app.innerHTML = profile({
                inputName: profileInput("name", "Name"),
                inputMail: profileInput("mail", "E-mail"),
                inputLogin: profileInput("login", "Login"),
                inputTel: profileInput("tel", "Tel"),
                inputPassword: profileInput("pass", "Password"),
            });
        } else if (location === "/src/pages/profileEdit") {
            app.innerHTML = profileEdit({
                inputName: profileInput("name", "Name"),
                inputMail: profileInput("mail", "E-mail"),
                inputLogin: profileInput("login", "Login"),
                inputTel: profileInput("tel", "Tel"),
                inputPassword: profileInput("pass", "Password"),
            });
        } else if (location === "/src/pages/error404") {
            app.innerHTML = error404({
            });
        } else if (location === "/src/pages/error500") {
            app.innerHTML = error500({
            });
        } else if (location === "/src/pages/chat") {
            app.innerHTML = chat({
                crd: card("Name", "Name", "Long message, long message, long message, long message")
            });
        } else {
            app.innerHTML = template({
            });
        }
    }
})

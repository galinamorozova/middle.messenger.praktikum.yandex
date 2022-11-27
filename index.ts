import template from "./index.hbs";
// import './style.scss';
// import "./src/pages/profile/style.scss";
// import "./src/pages/profileEdit/style.scss";
// import "./src/pages/chat/style.scss";
// import "./src/pages/error500/style.scss";
// import "./src/pages/error404/style.scss";
// import "./src/components/profile-input/style.scss";
// import "./src/components/input/style.scss";
// import "./src/pages/sidnIn/style.scss";
// import "./src/pages/sidnUp/style.scss";
import SignUp from "./src/pages/sidnUp/SignUp";
import Button from "./src/components/button/Button";
import Input from "./src/components/input/Input";
import SignIn from "./src/pages/sidnIn/SignIn";
import Profile from "./src/pages/profile/Profile";
import ProfileEdit from "./src/pages/profileEdit/ProfileEdit";
import Error505 from "./src/pages/error500/Error505";
import Error404 from "./src/pages/error404/Error404";
import Chat from "./src/pages/chat/Chat";
import Card from "./src/components/card/Card";
import renderDOM from './src/renderDOM';

const sign_up = new SignUp('div',{
    title: "Sign up",
    btn: new Button('div', {
        id: "btn1",
        value: "SIGN UP"
    }),
    inputLogin: new Input ( 'div', {
        id: "login",
        value: "Login"
        }),
    inputPassword: new Input( 'div', {
        id: "password",
        value: "Password"
    }),
    inputMail: new Input( 'div', {
        id: "mail",
        value: "E-mail"
    }),
    inputName: new Input( 'div', {
        id: "name",
        value: "Name"
    }),
    inputSurname: new Input( 'div', {
        id: "surname",
        value: "Surname"
    }),
    inputWrong: new Input( 'div', {
        id: "wrong",
        value: "Wrong"
    }),
});

const sign_in = new SignIn('div',{
    title: "Sign in",
    btn: new Button('div', {
        id: "btn1",
        value: "SIGN IN"
    }),
    input1: new Input ( 'div', {
        id: "login",
        value: "Login"
    }),
    input2: new Input( 'div', {
        id: "password",
        value: "Password"
    }),
});
const profile = new Profile('div',{
    inputName: new Input( 'div', {
        id: "name",
        value: "Name"
    }),
    inputMail: new Input( 'div', {
        id: "mail",
        value: "E-mail"
    }),
    inputLogin: new Input ( 'div', {
        id: "login",
        value: "Login"
    }),
    inputPassword: new Input( 'div', {
        id: "password",
        value: "Password"
    }),
    inputTel: new Input( 'div', {
        id: "tel",
        value: "Tel"
    }),
});
const profileEdit = new ProfileEdit('div',{
    inputName: new Input( 'div', {
        id: "name",
        value: "Name"
    }),
    inputMail: new Input( 'div', {
        id: "mail",
        value: "E-mail"
    }),
    inputLogin: new Input ( 'div', {
        id: "login",
        value: "Login"
    }),
    inputPassword: new Input( 'div', {
        id: "password",
        value: "Password"
    }),
    inputTel: new Input( 'div', {
        id: "tel",
        value: "Tel"
    }),
});
const chat = new Chat('div',{
    crd: new Card( 'div', {
        id: "name",
        name: "Name",
        msg: "Long message, long message, long message, long message"
    }),
});

const error500 = new Error505('div',{});
const error404 = new Error404('div',{});


    // renderDOM('#app', template);



window.addEventListener("DOMContentLoaded", ()=> {
    const app = document.querySelector("#app");
    const location = window.location.pathname;
    if (app) {
        if (location === "/src/pages/sidnIn") {
           renderDOM("#app", sign_in)
        } else if (location === "/src/pages/sidnUp") {
            renderDOM("#app", sign_up)
        } else if (location === "/src/pages/profile") {
            renderDOM("#app", profile)

        } else if (location === "/src/pages/profileEdit") {
            renderDOM("#app", profileEdit)
        } else if (location === "/src/pages/error404") {
            renderDOM("#app", error404)
        } else if (location === "/src/pages/error500") {
            renderDOM("#app", error500)
        } else if (location === "/src/pages/chat") {
            renderDOM("#app", chat)
        } else {
            app.innerHTML = template({
            });
        }
    }
})

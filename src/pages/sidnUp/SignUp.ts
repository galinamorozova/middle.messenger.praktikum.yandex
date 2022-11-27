import Block from "../../classes/block";
import tpl from "./tpl.hbs";

export default class SignUp extends Block {
    render() {
        return this.compile(tpl)
    }
}
import Block from "../../classes/block";
import tpl from "../sidnIn/tpl.hbs";

export default class SignIn extends Block {
    render() {
        return this.compile(tpl)
    }
}
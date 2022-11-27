import Block from "../../classes/block";
import tpl from "../profileEdit/tpl.hbs";

export default class ProfileEdit extends Block {
    render() {
        return this.compile(tpl)
    }
}
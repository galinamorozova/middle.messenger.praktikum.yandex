import Block from "../../classes/block";
import tpl from "../profile/tpl.hbs";

export default class Profile extends Block {
    render() {
        return this.compile(tpl)
    }
}
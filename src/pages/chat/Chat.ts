import Block from "../../classes/block";
import tpl from "../chat/tpl.hbs";

export default class Chat extends Block {
    render() {
        return this.compile(tpl)
    }
}
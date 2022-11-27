import Block from "../../classes/block";
import tpl from "./index";

export default class Button extends Block {
    render() {
        return this.compile(tpl)
    }
}
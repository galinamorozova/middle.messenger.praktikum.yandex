import Block from "../../classes/block";
import tpl from "./index";

export default class Input extends Block {
    render() {
        return this.compile(tpl)
    }
}
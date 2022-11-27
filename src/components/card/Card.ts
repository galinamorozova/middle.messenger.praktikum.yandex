import Block from "../../classes/block";
import tpl from "./index";

export default class Card extends Block {
    render() {
        return this.compile(tpl)
    }
}
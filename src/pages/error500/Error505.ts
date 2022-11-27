import Block from "../../classes/block";
import tpl from "../error500/tpl.hbs";

export default class Error505 extends Block {
    render() {
        return this.compile(tpl)
    }
}
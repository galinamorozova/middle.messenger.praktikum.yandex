import Block from "../../classes/block";
import tpl from "../error404/tpl.hbs";

export default class Error404 extends Block {
    render() {
        return this.compile(tpl)
    }
}
import Block  from './classes/block';

const renderDOM = (selector: string, block: Block): void => {
    const root: HTMLElement | null = document.querySelector(selector);
    if (!root) {
        throw new Error(`The root element with selector ${selector} was not found`);
    }
    // @ts-ignore
    root.appendChild(block.getContent());
    block.dispatchComponentDidMount();
}

export default renderDOM;

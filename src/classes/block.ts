import EventBus from "../event-bus";
import {v4 as makeUUID} from 'uuid';

export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    _props: any;
    _children: [] = [];
    _id: string;
    _element: HTMLElement | null = null;
    _meta: {tagName: string, propsAndChildren?: {}} = {tagName: ""};
    _setUpdate = false;
    eventBus: () => EventBus;


    constructor(tagName = "div", propsAndChildren = {}) {

        const eventBus = new EventBus();
        this._meta = {
            tagName,
            propsAndChildren
        };
        this._id = makeUUID()
        Object.entries(propsAndChildren).forEach(item => {
            if (item instanceof Block) this._children?.push(item);
        })
        //тофильтровать пропсы от чайлдов  instanseof
        //получить чайлд --- положить в массив чилдрен
        this._props = this._makePropsProxy({...propsAndChildren, _id: this._id});
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount();
        Object.values(this._children).forEach( (child) => {
            // @ts-ignore
            child.dispatchComponentDidMount()
        });
    }

    componentDidMount() {}

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        if (Object.keys(this._children).length) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
        }
    }

    _componentDidUpdate(oldProps: any, newProps: any) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
        }
        this._render();
    }
    //@ts-ignore
    componentDidUpdate(oldProps, newProps) {
        return true;
    }

    setProps = (newProps: any) => {
        if (!newProps) {
            return;
        }

        Object.assign(this._props, newProps);
    };

    get element() {
        return this._element;
    }

    private _render() {
        const block = this.render();
        this.removeEvents()
        // @ts-ignore
        this._element.innerHTML = "";
        // @ts-ignore
        this._element?.appendChild(block);
        this.addEvents;
    }

    render() {}

    addEvents(){
        const { events = {} } = this._props;
        Object.keys(events).forEach((eventName) => {
            this._element?.addEventListener(eventName, events[eventName])
        })
    }
    removeEvents(){
        const { events = {} } = this._props;
        Object.keys(events).forEach((eventName) => {
            this._element?.removeEventListener(eventName, events[eventName])
        })
    }

    compile(template: any, props?: any) {
        if (typeof (props) == 'undefined') props = this._props;
        const propsAndStubs = {...props};
        Object.entries(this._children).forEach(([key, child]) => {
            // @ts-ignore
            propsAndStubs[key] = `<div data-id ="${child._id}"></div>`
        });
        const fragment = this._createDocumentElement('template');
        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);
        console.log(fragment.innerHTML)
        // @ts-ignore
        Object.values(this._children).forEach((child: { _id: any; getContent: () => any; }) => {
            // @ts-ignore
            const stub = fragment.content.querySelector(`[data-id ="${child._id}]`);
            if (stub)
                stub.replaceWith(child.getContent())
        });
        return fragment.innerHTML;
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: {}) {
        // Можно и так передать this
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                // @ts-ignore
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                // @ts-ignore
                target[prop] = value;

                self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }

    show() {
            // @ts-ignore
            this.getContent().style.display = "block";

    }

    hide() {
        // @ts-ignore
        this.getContent().style.display = "none";
    }
}
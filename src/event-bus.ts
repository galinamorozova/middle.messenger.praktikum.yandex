export  default  class EventBus {
    listeners: any;
    constructor() {
        this.listeners = {};
    }

    on(event: string | number, callback: any) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string | number, callback: any) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener: any) => listener !== callback
        );
    }

    emit(event: string | number, ...args: any[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function(listener: any) {
            listener(...args);
        });
    }
}
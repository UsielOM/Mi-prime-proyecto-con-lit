import { LitElement, html } from 'lit-element';

export class MyCounter extends LitElement {
    static get properties() {
        return {
            counter: { type: Number }
        };
    }

    constructor() {
        super(); //Si no se llama super va a dar errores 
        this.counter = 0;


    }

    render() {
        return html `
        <div>Llevas ${this.counter} clics!!</div>
        <div>
            <button >+1</button>
        </div>
        `;
    }
}
customElements.define('my-counter', MyCounter);
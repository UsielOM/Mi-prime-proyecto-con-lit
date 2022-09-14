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
            <button @click="${this.incrementar}">+1</button>
            <button @click="${this.decrementar}">-1</button>
        </div>
        <feedbacl-element id="feedback"></feedbacl-element>
        `;
    }
    get feedback() {
        return this.shadowRoot.getElementById('feedback');
    }
    incrementar() {
        this.counter++;
        if (this.counter == 5) {
            this.feedback.open('Has llegado a 5 clics');
        }
    }
    decrementar() {
        if (this.counter > 0) {
            this.counter--;
        }
        if (this.counter == 0) {
            this.feedback.open('Has llegado a 0 clics');
        }

    }
}
customElements.define('my-counter', MyCounter);
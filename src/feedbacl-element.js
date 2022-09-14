import { LitElement, html } from 'lit-element';

export class FeedbaclElement extends LitElement {


    static get properties() {
        return {
            msg: { type: String },
        };
    }

    render() {
        return html `
        <style>
           div{
            position: fixed;
            bottom: 0px;
            left: 0px;
            overflow: hidden;
            height: 0;
            display: flex;
            align-items: center;
            background-color: #e74c3c;
            color: white;
            width: 100%;
            transition: all 0.7s ease-in;
            font-family: 'Trebuchet MS', sans-serif;
            font-size: 1px;
           }
           .opened{
            height: 100px;
            font-size: 2em;
           }
        </style>
        <div>
            ${this.msg}
        </div>
        `;
    }
}
customElements.define('feedbacl-element', FeedbaclElement);
import { LitElement, html } from "lit-element"; //Este es el import de la libreria lit element

class HolaMundo extends LitElement {
    static get properties() {
        return {
            quien: { type: String }
        };
    }

    render() { //Me permite definir la parte vizual del componente 
        return html `
        <p>Hola  <b>${this.quien}</b></p>
        `;
        //TEMPLATE STRINGS 
    }
}
customElements.define('hola-mundo', HolaMundo); //Define un nuevo componente
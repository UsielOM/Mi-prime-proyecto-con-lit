import { LitElement, html } from "lit-element"; //Este es el import de la libreria lit element

class HolaMundo extends LitElement {
    render() { //Me permite definir la parte vizual del componente 
        return html `
        <p>Hola mundo </p>
        `;
        //TEMPLATE STRING 
    }
}
customElements.define('hola-mundo', HolaMundo); //Define un nuevo componente
class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: "open" });

        this.componentRoot = document.createElement("h1");

        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `;

        this.shadow.appendChild(this.componentRoot);
        this.shadow.appendChild(style);
    }

    connectedCallback() {
        this.componentRoot.textContent = this.getAttribute("titulo") || "Título padrão";
    }
}

customElements.define("titulo-dinamico", TituloDinamico);

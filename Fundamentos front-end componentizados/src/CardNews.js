class CardNews extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.appendChild(this.build());
        this.shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        // card left
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        // filhos de card left
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title") || "Sem título";
        linkTitle.href = this.getAttribute("link-url") || "#";

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content") || "Sem conteúdo";

        // anexando filhos ao card left
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        // card right
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newImage = document.createElement("img");
        newImage.src = this.getAttribute("caminho-img") || "assets/default.jpg";
        newImage.alt = this.getAttribute("texto-alternativo") || "Imagem da notícia";

        cardRight.appendChild(newImage);

        // juntar tudo
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style() {
        const style = document.createElement("style");
        style.textContent =
        `
            .card {
            width: 80%;
            border: 1px solid gray;
            box-shadow: 10px 17px 38px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 17px 38px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 17px 38px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin: 1rem auto;
            border-radius: 8px;
            background: #fff;
        }

        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }

        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            text-decoration: none;
            color: black;
            font-weight: bold;
        }

        .card_left > p {
            color: gray;
        }

        .card_left > span {
            font-weight: 400;
        }

        .card_right img {
            max-width: 200px;
            border-radius: 8px;
        }
        `;
        return style;
    }
}

customElements.define("card-news", CardNews);

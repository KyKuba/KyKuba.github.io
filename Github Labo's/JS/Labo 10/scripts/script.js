const setup = () => {
    let btnGo = document.getElementById("btnGo");
    btnGo.addEventListener("click", voerCommandoUit);
}
    const voerCommandoUit = () => {
        let txtCommandoInput = document.getElementById("commandoInput");
            let command = txtCommandoInput.value;

        let regex = command.match("\/[a-z]{1} [a-z]*");
        if (regex != null) {
            let commandPrefix = command.slice(0, 2);
            if (commandPrefix === '/g'){
                createCardAndAppend();
            } else {
                alert("Unknown command prefix");
            }
            txtCommandoInput.value = "";
        } else {
            alert("Invalid command");
        }
    }

    const createCardAndAppend = (title, commandoSuffix, url) => {
        let col4 = createElementWithClassName("div", "col-4");
        let card = createElementWithClassName("div", "card");
        card.classList.add(title.toLowerCase()+"-card");
        let cardBody = createElementWithClassName("div","card-body");
        let cardTitle = createElementWithClassNameAndText("h5","card-title",title);
        let cardText = createElementWithClassNameAndText("p","card-text", commandoSuffix);

        let linkGo = createLinkButton(url);
        linkGo.classList.add(title.toLowerCase()+"-button");

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(linkGo);
        card.appendChild(cardBody);
        col4.appendChild(card);

        let row = document.querySelector("#resultContainer > .row");
        row.appendChild(col4);
    };

    const createElementWithClassName = (element, className) => {
        let e = document.createElement(element);
        e.setAttribute("class", className);
        return e;
    };

    const createElementWithClassNameAndText = (element, className, text) => {
        let e = createElementWithClassName(element, className);
        e.appendChild(document.createTextNode(text));
        return e;
    };

window.addEventListener("load", setup);

const setup = () => {
    let btnTry = document.getElementById("btnTry");

    //Event-based programming
    //mouseHover etc. zijn functies die zullen compileren eens dat je methode uitschrijft (zie beneden)
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);
}

const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
}

const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse clicked!<br>";
}
const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse out!<br>";
}

const withoutBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++)
    {
        
    }
}

// Dit zal uitgevoerd eens alle HTML & CSS code uitgevoerd werd. Die zal alles die de methode 'setup' heeft loaden.
window.addEventListener("load", setup);
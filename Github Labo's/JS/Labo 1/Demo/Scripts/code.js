const setup = () =>
{
    /* Item met id lblCursus zal bij hoveren changen (zie css) */
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
}

const show = () =>
{
    let txtName = document.getElementById("txtName");

    if (txtName.value != ""){

        alert("jouw naam is " + txtName.value);
        console.log ("jouw naam is " + txtName.value);
        console.log (`jouw naam is ${txtName.value}`);  /*Je kan alt96 gebruiken om ` te noteren */

    } else {

        alert ("Gelieve uw naam in te vullen");
    }
}

const change = () =>
{
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

window.addEventListener("load", setup);
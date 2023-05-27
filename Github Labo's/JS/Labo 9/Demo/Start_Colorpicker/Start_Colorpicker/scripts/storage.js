const storeSliderValues = () => {
    let settings = {};
    let settingsJSON;

    //Lees de waarden van de sliders uit
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    //Stop ze in een object
    let rgb = {
        red, green, blue
    }
    settingsJSON = JSON.stringify(settings);
    localStorage.setItem("slider.settings",settingsJSON);
};

const restoreSliderValues = () => {
    let jsonText = localStorage.getItem("colorpicker.sliders");
    if (jsonText != null) {
        let rgb = JSON.parse(jsonText);
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green;
        document.getElementById("sldBlue").value = rgb.blue;
    }
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let rgbColors = []; //array
    let swatches = document.getElementsByClassName("swatch");
    for (let i = 1; i < swatches.length; i++) {
        let rgb = {
        red: swatches[i].getAttribute("data-red"),
            green: swatches[i].getAttribute("data-green"),
            blue: swatches[i].getAttribute("data-blue")
    };
    rgbColors.push(rgb);
}

//bewaar array in local storage
let jsonText = JSON.stringify(rgbColors);
localStorage.setItem("colorpicker.swatches",jsonText);
};

const restoreSwatches = () => {

};

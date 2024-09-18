let backgoundColorEl = document.getElementById("background");
let FontcolorEl = document.getElementById("fontC");
let FontSizeEl = document.getElementById("fontS");
let FontweightEl = document.getElementById("fontW");
let PaddingEl = document.getElementById("padding");
let BorderEl = document.getElementById("border");

let customBEl = document.getElementById("cButton");


function applychanges(){

    let backgroundVal = backgoundColorEl.value;
    let fontCVal = FontcolorEl.value;
    let fontSVal = FontSizeEl.value;
    let fontWVal = FontweightEl.value;
    let paddingVal = PaddingEl.value;
    let borderVal = BorderEl.value;

    
    customBEl.style.backgroundColor = backgroundVal;
    customBEl.style.color = fontCVal;
    customBEl.style.fontSize = fontSVal;
    customBEl.style.fontWeight = fontWVal;
    customBEl.style.padding = paddingVal;
    customBEl.style.border = borderVal;

}
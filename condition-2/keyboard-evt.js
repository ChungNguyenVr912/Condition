let element = document.getElementById("nobita");
function upArrowPressed() {
    // let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 15 + 'px';
}
function downArrowPressed() {
    // var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 15 + 'px';
}
function leftArrowPressed() {
    // var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 15 + 'px';
}
function rightArrowPressed() {
    // var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 15 + 'px';

}
function moveSelection(event) {
    switch (event.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
window.onload = docReady();
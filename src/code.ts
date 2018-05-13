import * as Rx from "rxjs/Observable";

console.log(Rx);

function callNativeApp () {
    try {
        (window as any).webkit.messageHandlers.callbackHandler.postMessage("Hello from JavaScript 2");
    } catch(err) {
        console.log('The native context does not exist yet');
    }
}
function printHelloWorld() {
    var item1 = document.createElement("li");
    var text = document.createTextNode("Hello");
    item1.appendChild(text);
    document.getElementById("output").appendChild(item1);
    (window as any).webkit.messageHandlers.test.postMessage("Hello, world!");

}

window.onload = printHelloWorld;

setTimeout(function () {
    callNativeApp();
}, 5000);

function redHeader() {
    document.querySelector('h1').style.color = "red";
}
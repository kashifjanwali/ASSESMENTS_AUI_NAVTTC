let text=document.querySelector('p');
let btn = document.querySelector('button');

function changeText() {
    if(btn.innerHTML === "Click to Change") {
        text.textContent = "This text is generated using JavaScript";
        btn.innerHTML="Reset";
    }

    else {
        text.textContent = "This is original text written in HTML";
        btn.innerHTML="Click to Change";
    }
}
const textareaEl = document.getElementById("textarea")
const x = document.getElementById("total-counter")
const y = document.getElementById("rem-counter")

textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
});

updateCounter();
function updateCounter(){
    x.innerText = textareaEl.value.length;
    y.innerText = textareaEl.getAttribute("maxlength")-textareaEl.value.length;
}

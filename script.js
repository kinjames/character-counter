const textareaEl = document.getElementById('textarea');
const totalChar = document.getElementById('total-counter');
const remainingEl = document.getElementById('remaining-counter');

textareaEl.addEventListener('keyup', ()=>{
    counterUpdate();
});

counterUpdate();

function counterUpdate() {
    totalChar.innerText = textareaEl.value.length;
    remainingEl.innerText = textareaEl.getAttribute('maxLength') - textareaEl.value.length;
}
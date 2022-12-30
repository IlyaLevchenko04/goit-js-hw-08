const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const formKey = "feedback-form-state";

const json = localStorage.getItem(formKey);
const parsed = JSON.parse(json);

defaultForm();

function onInput(){
    localStorage.setItem(formKey, JSON.stringify({
       email : input.value,
       message : textarea.value
   }))
}

function onSubmit (evt){
    evt.preventDefault();

    console.log(parsed);
    localStorage.clear();
    input.value = '';
    textarea.value = '';
}

function defaultForm(){
    if(parsed){
        input.value = parsed.email || '';
        textarea.value = parsed.message || '';
    }
}
    
    





form.addEventListener('input', onInput)
form.addEventListener('submit', onSubmit)
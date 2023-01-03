import throttle from'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const formKey = "feedback-form-state";

 let json = localStorage.getItem(formKey);
 let parsed = JSON.parse(json);


form.addEventListener('input', throttle(onInput, 500))
form.addEventListener("submit", onSubmit)

defaultForm();

function onInput(){
         json = localStorage.getItem(formKey);
         parsed = JSON.parse(json);

         
    localStorage.setItem(formKey, JSON.stringify({
       email : input.value,
       message : textarea.value
   }))
}

function onSubmit (evt){
     evt.preventDefault();
          json = localStorage.getItem(formKey);
         parsed = JSON.parse(json)
    
        console.log(parsed)
    localStorage.clear();
    input.value = '';
    textarea.value = '';
}


function defaultForm(){
         json = localStorage.getItem(formKey);
         parsed = JSON.parse(json);


    if(parsed){
        input.value = parsed.email || '';
        textarea.value = parsed.message || '';
    }
}
    
    

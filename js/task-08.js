const form = document.querySelector('.login-form');

form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const inputs = Array.from(ev.target.elements).filter(el=>el.tagName === 'INPUT');
    //console.log(inputs);
    if (!checkingEmptyString(inputs)) {
        const obgectForm = {};
        inputs.forEach(el => {
            obgectForm[el.type] = el.value;
            el.value = "";
        });  
        console.log(obgectForm);
    }
});
 function checkingEmptyString(inputs) {
   for (const el of inputs) {
         if ( el.value.trim() === "") { 
            alert("Всі поля повинні бути заповнені");
            return true;
        } 
    } 
 }
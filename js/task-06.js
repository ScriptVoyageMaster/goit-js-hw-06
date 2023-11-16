const elInput = document.getElementById('validation-input');

elInput.addEventListener('blur', function () { 
      elInput.className = "";
   if (elInput.value.length === 6) {
        elInput.classList.add('valid');
    }else if (elInput.value.length !== 6) {
        elInput.classList.add('invalid');
    };
});
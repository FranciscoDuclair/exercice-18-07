document.getElementById('nom-service').addEventListener('input', function(){
    const input = this;
    if (input.ariaValueMax.length >= 3) {
        input.classList.remove('input-invalid');

        input.classList.add('input-valid');
    } else {
        input.classList.remove('input-valid');

        input.classList.add('input-invalid');
    }
});
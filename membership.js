const memberform = document.getElementById('memberform');
let flag = 0

memberform.addEventListener('submit', (e) => {
    const requiredFields = document.querySelectorAll('.required');

    for (let i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value === '') {
            e.preventDefault();
            flag = 1;

            requiredFields[i].style.border = '3px solid red';
        } else {
            flag = 0
            requiredFields[i].style.border = 'none';
        }
    }

    if (flag === 1) {
        alert('Please fill in all required fields');
    }

});
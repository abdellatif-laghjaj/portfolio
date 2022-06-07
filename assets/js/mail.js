// get all input data
const form = document.querySelector('form');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message'); 

// add event listener to form
form.addEventListener('submit', (e) => {
    console.log('Form submitted');
    e.preventDefault();
    // check if inputs are empty
    if(email.value === '' || subject.value === '' || message.value === ''){
        // show error message
        notie.alert({
            type: 'error',
            text: 'Please fill in all fields',
            time: 2
        });
    } else {
        window.location.href = 'mailto:${email.value}?subject=${subject.value}&body=${message.value}';
        
    }
});
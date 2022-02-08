
document.querySelector('form').addEventListener('submit', function(x){

    if (document.querySelector('#required').value.length === 0) {
        alert('Input required.')
        document.querySelector('#required').focus()
    }

    if (document.querySelector('#max-length-8').value.length > 8) {
        alert('Must have a maximum of 8 characters.')
        document.querySelector('#max-length-8').focus()
    }

    if (document.querySelector('#required-min-max').value.length === 0
        || document.querySelector('#required-min-max').value.length > 25
        || document.querySelector('#required-min-max').value.length < 10) {
        alert('Field required. Must have a minimum of 10 characters and be less than 25 characters.')
        document.querySelector('#required-min-max').focus()
    }

    if (document.querySelector('#min-max').value.length !== 0
        && document.querySelector('#min-max').value.length < 10) {
        alert('Field not required, but must have a minimum of 10 characters.')
        document.querySelector('#min-max').focus()
    }

    if (document.querySelector('#min-max').value.length !== 0
        && document.querySelector('#min-max').value.length > 25) {
        alert('Field not required, but must be less than 26 characters.')
        document.querySelector('#min-max').focus()
    }

    let letters = /^[a-z]+$/;

    if (document.querySelector('#letters-only').value.match(letters)
        || document.querySelector('#letters-only').value.length === 0)  {
    } else {
        alert('Letters only.')
        document.querySelector('#letters-only').focus()
    }

    let radios = document.querySelectorAll('#radio-button');
    let checked = false;

    for (var i =0; i < radios.length; i++) {
        if (radios[i].checked) {
            checked = true;
        }
    }
    if (checked === true
        && document.querySelector('#required-if-radio-yes').value.length === 0) {
        alert("If a radio button is checked, please fill in form.");
        document.querySelector('#required-if-radio-yes').focus()
    }



//     let email = /^[w-.+]+@[a-zA-Z0-9.]+.[a-zA-Z0-9]{2,4}$/;
    
//     if (document.querySelector('#valid-email').value.match(email)
//         )  {
//         alert('Not a valid email address.')
//         document.querySelector('#valid-email').focus()
//     }

//     email address validation

//     $email = 'john.hasznosi@gmail.com';

//     if (preg_match('/^[\w.]*@[\w]*\.[a-zA-Z]{2,3}\.?[\w]{0,2}$/', $email)){
//         echo 'This email address is valid.';
//     } else {
//         echo 'This email address is invalid. Pleb.';

//     }


// // UK postcode validation

//     $postcode = 'BA1 5RY';

//     if (preg_match('/^[a-zA-Z]{1,2}[0-9]{1,2} [0-9]{1}[a-zA-Z]{2}$/', $postcode)){
//         echo 'This postcode is valid.';
//     } else {
//         echo 'This postcode is invalid. Pleb.';
//     }


    x.preventDefault()
})
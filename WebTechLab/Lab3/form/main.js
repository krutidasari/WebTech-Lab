function validateForm(){
    const name= document.getElementById('name').value.trim();
    const email= document.getElementById('email').value.trim();
    const password= document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if(name.length < 3){
        alert('NAme must be atleast 3 characters long');
        return false;
    }

    if(!email.includes('@')){
        alert('please enter a valid email address');
        return false;
    }

    if(password.length< 6){
        alert('password must be atleast 6 characters long');
        return false;
    }

    if(password !== confirmPassword){
        alert('Passwords do not match');
        return false;
    }

    const age =prompt('Please enter your age:');
    if (age === null || age === '' || isNaN(age)){
        alert('Please enter a valid age');
        return false;
    }

    const isConfirmed = confirm('Do you want to submit the form?');
    if(!isConfirmed){
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

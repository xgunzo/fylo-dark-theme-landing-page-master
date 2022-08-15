const email = document.querySelector('#mail').value;
const emailInput = document.querySelector('#mail');
const button = document.querySelector('#button');
const error = document.querySelector('#error');

/*
emailInput.addEventListener("keyup", function() {
    console.log(emailInput.value);
})
*/

button.addEventListener("click", function() {
console.log(emailInput.value);
    if (emailInput.value == "") {
        error.style.display = "block";
    } else if (emailInput.value.includes("@") && emailInput.value.includes(".com")) {
        console.log("@ TRUE");
        error.style.display = "none";
    } else {
        console.log("@ FALSE");
        error.style.display = "block";
    }

})


const emailInput = document.getElementById('email_input')
const inputBtn = document.getElementById('submit_email')
const errorIcon = document.getElementById('error_email')

inputBtn.addEventListener("click", function(){
    if (!emailInput.value.includes('@')){
        document.getElementById("error_email_msg").innerHTML = "Please provide a valid email"
        errorIcon.style.display = "block"
        emailInput.style.borderColor = "red"
        emailInput.style.color = "red"
    }

    else {
        emailInput.style = null;
        errorIcon.style = null;
        document.getElementById("error_email_msg").innerHTML = ""
        emailInput.value = ""

    }
})
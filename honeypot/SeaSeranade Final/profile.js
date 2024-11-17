let currentStep = 1;
const maxSteps = 15;

function updateProgressBar() {
    const progress = ((currentStep - 1) / maxSteps) * 100; // Adjusted to start at 0%
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('progress').innerText = Math.round(progress) + '%';
}

// Call updateProgressBar initially to set it to 0%
updateProgressBar();

function prevStep() {
    saveStep(currentStep);
    if (currentStep > 1) {
        const current = document.getElementById(`step${currentStep}`);
        current.style.display = "none";
        currentStep--;
        const prev = document.getElementById(`step${currentStep}`);
        prev.style.display = "block";
        updateProgressBar();
    }
}

function saveStep(step) {
    const inputId = getInputId(step);
    let inputValue = '';
    if (inputId) {
        if (step === 3) { // Handle gender selection
            const selectedGender = document.querySelector('input[name="gender"]:checked');
            if (selectedGender) {
                inputValue = selectedGender.id; // Use 'id' instead of textContent for radio buttons
            }
        }else if (step === 13) { // Handle gender selection
            const selectedChoice = document.querySelector('input[name="choice"]:checked');
            if (selectedChoice) {
                inputValue = selectedChoice.id; // Use 'id' instead of textContent for radio buttons
            }
        } else {
            const input = document.getElementById(inputId);
            if (input) {
                inputValue = input.value;
            }
        }
        if (inputValue) {
            const labelText = getLabelText(step);
            const existingEntry = document.querySelector(`#output p[data-step="${step}"]`);
            if (existingEntry) {
                existingEntry.innerHTML = `${labelText}: ${inputValue}`;
            } else {
                const newEntry = document.createElement('p');
                newEntry.setAttribute('data-step', step);
                newEntry.textContent = `${labelText}: ${inputValue}`;
                document.getElementById('output').appendChild(newEntry);
            }
        }
    }
    
    // Checks if it's the final step (adjust maxSteps as necessary)
    if (step === maxSteps) {
        // Update progress bar to 100%
        document.getElementById('progress').style.width = '100%';
        document.getElementById('progress').innerText = '100%';
        //alert("User Profile completed successfully!!!")
    }
}

// Function to skip steps
function skipStep(stepsToSkip) {
    for (let i = 0; i < stepsToSkip; i++) {
        if (currentStep < maxSteps) {
            document.getElementById(`step${currentStep}`).style.display = 'none';
            currentStep++;
            if (currentStep <= maxSteps) {
                document.getElementById(`step${currentStep}`).style.display = 'block';
            }
            updateProgressBar();
        }
    }
}


// Function to proceed to the next step if validation passes
function nextStep() {
    if (validateCurrentStep()) {
        saveStep(currentStep);
        if (currentStep < maxSteps) {
            document.getElementById(`step${currentStep}`).style.display = 'none';
            currentStep++;
            if (currentStep <= maxSteps) {
                document.getElementById(`step${currentStep}`).style.display = 'block';
            }
            updateProgressBar();
        }
    }
}


//function to validate first name
function validateFirstName() {
    const fnameInput = document.getElementById('fname');
    const fnameValue = fnameInput.value.trim();
    if (fnameValue === '') {
        alert('Please enter your first name.');
        fnameInput.focus();
        return false;
    }
    return true;
}

// Function to validate last name
function validateLastName() {
    const lnameInput = document.getElementById('lname');
    const lnameValue = lnameInput.value.trim();
    if (lnameValue === '') {
        alert('Please enter your last name.');
        lnameInput.focus();
        return false;
    }
    return true;
}

// Function to validate email
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '' || !emailRegex.test(emailValue)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return false;
    }
    return true;
}

// Function to validate phone number
function validatePhoneNumber() {
    const telInput = document.getElementById('tel');
    const telValue = telInput.value.trim();
    // Simple validation: check if it's numeric and 10 digits
    const telRegex = /^\d{10}$/;
    if (telValue === '' || !telRegex.test(telValue)) {
        alert('Please enter a valid 10-digit phone number.');
        telInput.focus();
        return false;
    }
    return true;
}

function validateCurrentStep() {
    const inputId = getInputId(currentStep);

    if (inputId) {
        const input = document.getElementById(inputId);

        // Validation for radio buttons (gender and choice)
        if (currentStep === 3) {
            const selectedGender = document.querySelector('input[name="gender"]:checked');
            if (!selectedGender) {
                alert('Please select your gender.');
                return false;
            }
        } else if (currentStep === 13) {
            const selectedChoice = document.querySelector('input[name="choice"]:checked');
            if (!selectedChoice) {
                alert('Please select an option for participation in marine conservation activities.');
                return false;
            }
        } else if (!input || input.value.trim() === '') {
            alert('Please fill out this field.');
            input.focus();
            return false;
        }
    }

    return true; // Return true if no specific validation is required or validation passes
}

let popup = document.getElementById('popup');

function openPopup(){
    popup.classList.add('open-popup')
}

function closePopup(){
    popup.classList.remove('open-popup')
}


// Event listener for form submission
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate the current step before submitting the form
    if (validateCurrentStep()) {
        saveStep(currentStep);
        // Handle form submission logic here if needed
    }
});

function getInputId(step) {
    switch (step) {
        case 1: return 'fname';
        case 2: return 'lname';
        case 3: return 'gender'; 
        case 4: return 'dob';
        case 5: return 'interests';
        case 6: return 'email';
        case 7: return 'tel';
        case 8: return 'field';
        case 9: return 'education';
        case 10: return 'certifications';
        case 11: return 'issue';
        case 12: return 'affect';
        case 13: return 'choice';
        case 14: return 'support';
        default: return '';
    }
}

function getLabelText(step) {
    switch (step) {
        case 1: return 'First Name';
        case 2: return 'Last Name';
        case 3: return 'Gender';
        case 4: return 'Date of Birth';
        case 5: return 'What interests you about marine environments?';
        case 6: return 'Email';
        case 7: return 'Phone Number';
        case 8: return 'Occupation or Field of Study';
        case 9: return 'Highest Education Level';
        case 10: return 'Certifications or Training';
        case 11: return 'A marine conservation issue you care about';
        case 12: return 'How do human activities affect marine ecosystems?';
        case 13: return 'Have you participated in marine conservation activities?';
        case 14: return 'What do you plan to do to support SDG 14?';
       
        default: return '';
    }
}

// Initial progress update
updateProgressBar();
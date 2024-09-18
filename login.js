document.querySelector('.login-btn').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const alertBox = document.querySelector('.alert-box');
    const alertMessage = document.querySelector('.alert');

    // Simple form validation
    if (!email || !password) {
        alertMessage.textContent = 'All fields are required!';
        alertBox.style.top = '10%'; // Show the alert box
        setTimeout(() => alertBox.style.top = '-100%', 3000); // Hide after 3 seconds
        return;
    }

    // Prepare form data
    const formData = {
        email,
        password
    };

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alertMessage.textContent = 'Login successful! Redirecting...';
            alertBox.style.top = '10%'; // Show the alert box
            setTimeout(() => {
                alertBox.style.top = '-100%'; // Hide the alert box
                window.location.href = 'welcome.html'; // Redirect to welcome page
            }, 2000);
        } else {
            alertMessage.textContent = 'Login failed. Please try again.';
            alertBox.style.top = '10%'; // Show the alert box
            setTimeout(() => alertBox.style.top = '-100%', 3000); // Hide after 3 seconds
        }
    } catch (error) {
        alertMessage.textContent = 'An error occurred. Please try again.';
        alertBox.style.top = '10%'; // Show the alert box
        setTimeout(() => alertBox.style.top = '-100%', 3000); // Hide after 3 seconds
    }
});

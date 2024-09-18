document.querySelector('.register-btn').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const alertBox = document.querySelector('.alert-box');
    const alertMessage = document.querySelector('.alert');

    // Simple form validation
    if (!name || !email || !password) {
        alertMessage.textContent = 'All fields are required!';
        alertBox.style.top = '10%'; // Show the alert box
        setTimeout(() => alertBox.style.top = '-100%', 3000); // Hide after 3 seconds
        return;
    }

    // Prepare form data
    const formData = {
        name,
        email,
        password
    };

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alertMessage.textContent = 'Registration successful! Redirecting to home page...';
            alertBox.style.top = '10%'; // Show the alert box
            setTimeout(() => {
                alertBox.style.top = '-100%'; // Hide the alert box
                window.location.href = 'index.html'; // Redirect to home page
            }, 2000);
        } else {
            alertMessage.textContent = 'Registration failed. Please try again.';
            alertBox.style.top = '10%'; // Show the alert box
            setTimeout(() => alertBox.style.top = '-100%', 3000); // Hide after 3 seconds
        }
    } catch (error) {
        alertMessage.textContent = 'An error occurred. Please try again.';
        alertBox.style.top = '10%'; // Show the alert box
        setTimeout(() => alertBox.style.top = '-100%', 3000); // Hide after 3 seconds
    }
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    // Handle user registration logic

    // Assuming you send a verification email here

    res.status(200).json({ message: 'Registration successful. Please check your email to verify'})
}
)
    
document.addEventListener('DOMContentLoaded', function() {

    // Signup Form Handling (Example)
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // In a real application, you would send this data to a backend server
            // using fetch() or XMLHttpRequest.  For now, just log it.
            console.log('Signup Data:', { name, email, password });

            // Optionally, redirect to another page after successful signup.
            // window.location.href = 'dashboard.html';
        });
    }

    // Login Form Handling (Example)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simulate login (in real app, send to backend)
            console.log('Login Data:', { email, password });

            // Redirect on "successful" login
            window.location.href = 'dashboard.html';
        });
    }

    // Budget Form Handling (Example)
    const budgetForm = document.getElementById('budgetForm');
    const budgetItemList = document.getElementById('budgetItemList');

    if (budgetForm) {
        budgetForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const category = document.getElementById('category').value;
            const amount = document.getElementById('amount').value;

            // Create a new table row
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${category}</td>
                <td>${amount}</td>
            `;

            // Append the row to the table
            budgetItemList.appendChild(newRow);

            // Clear the form inputs
            document.getElementById('category').value = '';
            document.getElementById('amount').value = '';
        });
    }

});

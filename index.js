 function toggleForm(showId, hideId) {
            document.getElementById(showId).style.display = 'block';
            document.getElementById(hideId).style.display = 'none';
        }

        function login() {
            var username = document.getElementById('loginUsername').value;
            var password = document.getElementById('loginPassword').value;

            // Perform authentication logic (add your own logic here)

            alert('Login successful!'); // Replace with your logic
        }

        function signup() {
            var email = document.getElementById('signupEmail').value;
            var username = document.getElementById('signupUsername').value;
            var password = document.getElementById('signupPassword').value;

            // Perform user registration logic (add your own logic here)

            alert('Sign up successful!'); // Replace with your logic
        }
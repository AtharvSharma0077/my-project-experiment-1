document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
  
    alert(`Name: ${name}\nEmail: ${email}\nAge: ${age}`);
  });
  
const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  if (users.some(user => user.email === email)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'This email is already registered!',
      confirmButtonColor: '#6a0dad', // Purple button
    });
  } else {
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    Swal.fire({
      icon: 'success',
      title: 'Registration Successful!',
      text: 'Redirecting to login page...',
      confirmButtonColor: '#6a0dad', // Purple button
    }).then(() => {
      window.location.href = "Login.html";
    });
  }
});




// document.getElementById('registerForm').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('registerEmail').value;
//   const password = document.getElementById('registerPassword').value;

//   if (users.some(user => user.email === email)) {
//     document.getElementById('registerError').textContent = "This email is already registered.";
//   } else {
//     users.push({ email, password });
//     localStorage.setItem('users', JSON.stringify(users));
//     alert("Registration successful! Redirecting to login.");
//     window.location.href = "Login.html";
//   }
// });

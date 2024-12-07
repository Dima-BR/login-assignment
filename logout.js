document.addEventListener('DOMContentLoaded', () => {
    const user = sessionStorage.getItem('currentUser');
    if (!user) {
      alert("You must log in first!");
      window.location.href = "Login.html";
    } else {
      document.getElementById('username').textContent = user;
    }

    document.getElementById('logout').addEventListener('click', () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6a0dad',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!',
      }).then((result) => {
        if (result.isConfirmed) {
          sessionStorage.removeItem('currentUser');
          Swal.fire({
            icon: 'success',
            title: 'Logged Out!',
            text: 'You have been logged out successfully.',
            confirmButtonColor: '#6a0dad',
          }).then(() => {
            window.location.href = "Login.html";
          });
        }
      });
    });
    
  
  });
  
  // document.getElementById('logout').addEventListener('click', () => {
  //   sessionStorage.removeItem('currentUser');
  //   alert("Logged out successfully!");
  //   window.location.href = "Login.html";
  // });
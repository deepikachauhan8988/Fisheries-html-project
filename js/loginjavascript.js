<script>
  function handleLogin(event) {
    event.preventDefault(); // Prevents page reload
    const mobile = document.getElementById('mobileNumber').value;
    const pass = document.getElementById('password').value;
    
    // Add your login logic here
    alert("Login Submitted!\nMobile: " + mobile);
    
    // Close the modal after submit
    var myModalEl = document.getElementById('loginModal');
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
  }
</script>
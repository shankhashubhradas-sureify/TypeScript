document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm") as HTMLFormElement;
  
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const usernameInput = loginForm.elements.namedItem("username") as HTMLInputElement;
      const passwordInput = loginForm.elements.namedItem("password") as HTMLInputElement;
  
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      const user = loginPage.getUser(username);
  
      if (!user) {
        alert("User not found. Please register first.");
        return;
      }
  
      if (loginPage.isBlocked(username)) {
        alert("This account is blocked. Please contact support.");
        return;
      }
  
      if (user.password !== password) {
        alert("Incorrect password.");
        return;
      }
  
      // logged in
      alert("Welcome, " + username);

      // view page
      window.location.href = `details.html?username=${username}`;
    });
  });
  
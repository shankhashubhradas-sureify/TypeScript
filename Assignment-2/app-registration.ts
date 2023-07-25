document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm") as HTMLFormElement;
  
    registrationForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const usernameInput = registrationForm.elements.namedItem("username") as HTMLInputElement;
      const passwordInput = registrationForm.elements.namedItem("password") as HTMLInputElement;
  
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      registrationPage.addUser(username, password);
  
      alert("Registration successful!");
      registrationForm.reset();
    });
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const userDetailsDiv = document.getElementById("userDetails");

    if (!userDetailsDiv) {
        console.error("User details element not found.");
        return;
    }
  
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get("username");
  
    if (!username) {
      userDetailsDiv.textContent = "User not found.";
    } else {
      const user = UserDetails.getUserDetails(username);
  
      if (!user) {
        userDetailsDiv.textContent = "User not found.";
      } else {
        userDetailsDiv.textContent = `Username: ${user.username}, Status: ${user.status === Status.Active ? 'Active' : 'Blocked'}`;
      }
    }
  });
  
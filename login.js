document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    // Array of 50 users with usernames and passwords
    const users = [
      { username: "1", password: "1" },
      { username: "user2", password: "password2" },
      { username: "user3", password: "password3" },
      { username: "user4", password: "password4" },
      { username: "user5", password: "password5" },
      { username: "user6", password: "password6" },
      { username: "user7", password: "password7" },
      { username: "user8", password: "password8" },
      { username: "user9", password: "password9" },
      { username: "user10", password: "password10" },
      { username: "user11", password: "password11" },
      { username: "user12", password: "password12" },
      { username: "user13", password: "password13" },
      { username: "user14", password: "password14" },
      { username: "user15", password: "password15" },
      { username: "user16", password: "password16" },
      { username: "user17", password: "password17" },
      { username: "user18", password: "password18" },
      { username: "user19", password: "password19" },
      { username: "user20", password: "password20" },
      { username: "user21", password: "password21" },
      { username: "user22", password: "password22" },
      { username: "user23", password: "password23" },
      { username: "user24", password: "password24" },
      { username: "user25", password: "password25" },
      { username: "user26", password: "password26" },
      { username: "user27", password: "password27" },
      { username: "user28", password: "password28" },
      { username: "user29", password: "password29" },
      { username: "user30", password: "password30" },
      { username: "user31", password: "password31" },
      { username: "user32", password: "password32" },
      { username: "user33", password: "password33" },
      { username: "user34", password: "password34" },
      { username: "user35", password: "password35" },
      { username: "user36", password: "password36" },
      { username: "user37", password: "password37" },
      { username: "user38", password: "password38" },
      { username: "user39", password: "password39" },
      { username: "user40", password: "password40" },
      { username: "user41", password: "password41" },
      { username: "user42", password: "password42" },
      { username: "user43", password: "password43" },
      { username: "user44", password: "password44" },
      { username: "user45", password: "password45" },
      { username: "user46", password: "password46" },
      { username: "user47", password: "password47" },
      { username: "user48", password: "password48" },
      { username: "user49", password: "password49" },
      { username: "user50", password: "password50" }
    ];
  
    // Check if the entered credentials match any user in the array
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      errorMessage.textContent = "Login successful!";
      // Redirect to download.html after successful login
      window.location.href = "Download.html";
    } else {
      errorMessage.textContent = "Invalid username or password.";
    }
  });

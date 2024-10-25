function validateForm() {
    const userId = document.getElementById("user_id").value;
    const confirmUserId = document.getElementById("confirm_user_id").value;

    if (userId !== confirmUserId) {
        alert("User ID and Confirm User ID do not match.");
        return false;  // Prevent form submission
    }
    return true;  // Allow form submission
}

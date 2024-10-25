<?php
include('db.php'); // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $user_id = $_POST['user_id'];
    $confirm_user_id = $_POST['confirm_user_id'];

    // Check if passwords match
    if ($user_id !== $confirm_user_id) {
        echo "<script>alert('User ID and Confirm User ID do not match.'); window.location='register.html';</script>";
        exit(); // Stop the script execution if they don't match
    }

    // Insert data into database
    $sql = "INSERT INTO users (name, user_id) VALUES ('$name', '$user_id')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Registration successful!'); window.location='login.html';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>


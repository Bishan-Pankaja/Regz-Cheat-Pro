<?php
session_start();
include('db.php'); // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $user_id = $_POST['user_id'];

    // Query the database
    $sql = "SELECT * FROM users WHERE name='$name' AND user_id='$user_id'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        $_SESSION['name'] = $name;
        header("Location: dashboard.php"); // Redirect to a dashboard or main page after login
    } else {
        echo "<script>alert('Invalid Name or User ID');</script>";
    }
}
?>


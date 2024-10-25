<?php
$servername = "localhost";
$username = "root";  // Set your MySQL username
$password = "";      // Set your MySQL password
$dbname = "login_system";  // Set your database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>

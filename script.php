<?php
if(isset($_POST['submit']))
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $city = $_POST['city'];
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $dbname = 'chat_app';
    $conn = mysqli_connect($host, $user, $pass, $dbname);
    $sql = "INSERT INTO user (name, email, mobile, city) VALUES ('$name', '$email', '$mobile', '$city')";
    mysqli_query($conn, $sql);
}
?>

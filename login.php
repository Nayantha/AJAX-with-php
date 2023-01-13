<?php
include_once("dbcon.php");
$email = mysqli_real_escape_string($con, $_POST['email']);
$password = mysqli_real_escape_string($con, $_POST['password']);

if ($email == NULL || $password == NULL) {
    $res = [
        'status' => 422,
        'message' => "All fields are mandatory.",
    ];
    echo json_encode($res);
}

$query = "SELECT * FROM users WHERE email='$email' AND password='$password' LIMIT 1";
$qurey_run = mysqli_query($con, $query);
if (mysqli_num_rows($qurey_run) == 1) {
    $user = mysqli_fetch_assoc($qurey_run);
    $res = [
        'status' => 200,
        'message' => "Credentials validated.",
    ];
    echo json_encode($res);
}
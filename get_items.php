<?php
require "dbcon.php";
$id = mysqli_real_escape_string($con, $_GET['id']);
if ($id == NULL){
    $res = [
        'status' => 422,
        'message' => "All fields are mandatory.",
    ];
    echo json_encode($res);
    return;
}
$prev= (int)$id-1;
$query = "SELECT * FROM temp_users LIMIT $prev,1";
$qurey_run = mysqli_query($con, $query);
if(mysqli_num_rows($qurey_run) == 1) {
    $user = mysqli_fetch_assoc($qurey_run);
    $res = [
        'status' => 200,
        'message' => "User fetched successfully by id.",
        'data' => $user,
    ];
    echo json_encode($res);
    return;
} else {
    $res = [
        'status' => 404,
        'message' => "No Data Found.",
    ];
    echo json_encode($res);
    return;
}
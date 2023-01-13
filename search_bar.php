<?php
include_once("dbcon.php");

$search_text = mysqli_real_escape_string($con, $_GET['s']);

//if ($search_text == NULL) {
//    $res = [
//      "status" => 404,
//      "message" => "Results not found.",
//    ];
//    echo json_encode($res);
//    return;
//}

$query = "SELECT id, email FROM users WHERE email LIKE '$search_text%'";
if ($query_run = mysqli_query($con, $query)) {
    if (mysqli_num_rows($query_run) > 0 ) {
        $data = array();
        while ($row = mysqli_fetch_assoc($query_run)) {
            $data[] = $row;
        }
        $res = [
            "status" => 200,
            "message" => "Results found.",
            "data" => $data
        ];
        echo json_encode($res);
        return;
    }
}

$res = [
    "status" => 404,
    "message" => "Results not found."
];
echo json_encode($res);
return;
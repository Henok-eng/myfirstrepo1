<?php

$name = $_POST['name'];
$id = $_POST['id'];

if (strlen($name) == 0 || strlen($id) == 0) {
    echo "<script>alert('Please fill form fields');</script>";
} elseif ($name == 'Henok Teweldebrhan' && $id == '114497') {
    echo "Your grade is 94.23";
} else {
    echo "<script>alert('Grade not found.');</script>";
}



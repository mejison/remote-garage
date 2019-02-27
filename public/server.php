<?php
    $response = [
        'state' => false
    ];

    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "remote";

    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);   
    if (isset($_GET['thing'])) {
        $stmt = $conn->prepare("SELECT `state` from `ports` WHERE `signature` = '" . $_GET['thing'] . "'  LIMIT 1");
        $stmt->execute(); 
        $response['state'] = (bool)$stmt->fetch()['state'];
    }
    
    $post = json_decode(file_get_contents('php://input'), true);

    if (isset($post['thing'])) {
        $thing = $post['thing'];
        $state = $post['state'];
        
        $stmt = $conn->prepare("UPDATE `ports` SET `state` = '$state' WHERE `signature` = '$thing'");
        $stmt->execute();
        $response['state'] = (bool)$state;
    }

    $conn = null;
    echo json_encode($response);
<?php
$message = "";

if(isset($_POST["report_message"])){
    $message = $_POST["report_message"];
    if($message == ''){
        unset($message);
    }
}

$chatId = "268932900";

$sendToTg = fopen("https://api.telegram.org/bot5161128268:AAGWzrcH4nROD_ypRzwTFnHlKyXHk-q5Qu0/sendMessage?chat_id=$chatId&text=$message", "r");

?>
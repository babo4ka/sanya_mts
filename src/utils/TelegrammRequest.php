<?php

$name = "";
if(isset($_POST["caller_name"])){
    $name = $_POST["caller_name"];
    if($name == ''){
        $name = "Не указано";
    }
}


$phone = "";
if(isset($_POST["caller_phone"])){
    $phone = $_POST["caller_phone"];
    if($phone == ''){
        unset($phone);
    }
}

$tariff = "";
if(isset($_POST["tariff"])){
    $tariff = $_POST["tariff"];
}

$message = "";

if($tariff == ""){
    $message = "Консультация по всем тарифам %0A";
}else{
    $message = "Консультация по тарифу: " . $tariff . "%0A";
}


$chatId = "268932900";

$message .= "Имя: " . $name ."%0A";
$message .= "Номер телефона: " . $phone . "%0A";

$sendToTg = fopen("https://api.telegram.org/bot5161128268:AAGWzrcH4nROD_ypRzwTFnHlKyXHk-q5Qu0/sendMessage?chat_id=$chatId&text=$message", "r");

?>
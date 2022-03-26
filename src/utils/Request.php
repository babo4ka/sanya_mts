<?php 
if(isset($_POST['caller_name'])){
    $name = $_POST['caller_name']
    if($name == ''){
        unset($name)
    }
}

if(isset($_POST['caller_phone'])){
    $phone = $_POST['caller_phone']
    if($phone == ''){
        unset($phone)
    }
}

$to = "givanov317@gmail.com";
$subject = "Консультация";

$message = $phone + " " + $name
$message .= "Здравствуйте, пожалуйста, проконсультируйте меня по всем тарифам!\n";

mail($to, $subject, $message)
?>
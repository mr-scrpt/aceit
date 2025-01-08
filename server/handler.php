<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');



if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: text/html; charset=utf-8');
    echo '<h1>Method GET TEST</h1>';
    exit;
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем данные из формы
    $firstName = $_POST['firstName'] ?? '';
    $secondName = $_POST['secondName'] ?? '';
    $phoneNumber = $_POST['phoneNumber'] ?? '';
    $email = $_POST['email'] ?? '';
    $position = $_POST['position'] ?? '';

    // Email получателя
    $to = 'test@gmail.com';
    $subject = 'Новая заявка с сайта';

    // Формируем текст письма
    $message = "Новая заявка:\n\n";
    $message .= "Имя: $firstName\n";
    $message .= "Фамилия: $secondName\n";
    $message .= "Телефон: $phoneNumber\n";
    $message .= "Email: $email\n";
    $message .= "Позиция: $position\n";

    // Заголовки письма
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Сообщение успешно отправлено'
        ]);
    // Отправляем письмо
    // if (mail($to, $subject, $message, $headers)) {
    //     http_response_code(200);
    //     echo json_encode([
    //         'success' => true,
    //         'message' => 'Сообщение успешно отправлено'
    //     ]);
    // } else {
    //     http_response_code(500);
    //     echo json_encode([
    //         'success' => false,
    //         'message' => 'Ошибка при отправке сообщения'
    //     ]);
    // }
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Метод не разрешен'
    ]);
}
?>

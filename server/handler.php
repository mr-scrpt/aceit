<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$recipients = [
    'dolcegabbana2010@gmail.com',
    'hr@aceit.group',
    'wall4media@gmail.com'
];

// Функция для логирования
function writeLog($type, $message, $data = null) {
    $logDir = __DIR__ . '/logs';
    // Создаем директорию для логов, если её нет
    if (!file_exists($logDir)) {
        mkdir($logDir, 0755, true);
    }
    $date = date('Y-m-d H:i:s');
    $logMessage = "[$date] [$type] $message\n";
    if ($data) {
        $logMessage .= "Data: " . print_r($data, true) . "\n";
    }
    $logMessage .= "------------------------------------------------\n";
    // Записываем в соответствующий файл в зависимости от типа
    $filename = $type === 'ERROR' ? 'error.log' : 'success.log';
    file_put_contents($logDir . '/' . $filename, $logMessage, FILE_APPEND);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: text/html; charset=utf-8');
    echo '<h1>Method GET TEST</h1>';
    writeLog('INFO', 'GET request received');
    exit;
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        // Логируем входящие данные
        writeLog('INFO', 'Получены новые данные формы', $_POST);

        $firstName = $_POST['firstName'] ?? '';
        $secondName = $_POST['secondName'] ?? '';
        $phoneNumber = $_POST['phoneNumber'] ?? '';
        $email = $_POST['email'] ?? '';
        $position = $_POST['position'] ?? '';
        $mode = $_POST['MODE'] ?? '';

        // Проверяем обязательные поля
        if (empty($firstName) || empty($email)) {
            throw new Exception('Не заполнены обязательные поля');
        }

        // Массив адресов получателей

        $subject = 'Новая заявка с сайта';
        $message = "Новая заявка:\n\n";
        $message .= "Имя: $firstName\n";
        $message .= "Фамилия: $secondName\n";
        $message .= "Телефон: $phoneNumber\n";
        $message .= "Email: $email\n";
        $message .= "Позиция: $position\n";

        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

        if($mode === "dev") {
            writeLog('INFO', 'Режим разработки');
            writeLog('INFO', 'Письмо отправлено', [
                'to' => $recipients,
                'subject' => $subject,
                'from' => $email,
                'message' => $message
            ]);
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'message' => 'Сообщение успешно отправлено'
            ]);
            exit;
        }

        $allSuccess = true;
        $sentTo = [];

        // Отправляем письмо каждому получателю
        foreach ($recipients as $to) {
            if (mail($to, $subject, $message, $headers)) {
                $sentTo[] = $to;
            } else {
                $allSuccess = false;
                writeLog('ERROR', "Ошибка при отправке письма на адрес: $to");
            }
        }

        if ($allSuccess) {
            // Логируем успешную отправку
            writeLog('SUCCESS', 'Письма успешно отправлены', [
                'to' => $sentTo,
                'subject' => $subject,
                'from' => $email
            ]);
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'message' => 'Сообщения успешно отправлены'
            ]);
        } else {
            throw new Exception('Ошибка при отправке некоторых писем');
        }

    } catch (Exception $e) {
        // Логируем ошибку
        writeLog('ERROR', $e->getMessage(), [
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString(),
            'post_data' => $_POST
        ]);
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Ошибка: ' . $e->getMessage()
        ]);
    }
} else {
    writeLog('ERROR', 'Неразрешенный метод: ' . $_SERVER['REQUEST_METHOD']);
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Метод не разрешен'
    ]);
}
?>

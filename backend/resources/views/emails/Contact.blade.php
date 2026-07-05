<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body style="font-family: sans-serif; color: #0b0e14; line-height: 1.6;">
    <h2 style="color: #facc15; background: #0b0e14; padding: 12px 16px; border-radius: 8px;">
        New Portfolio Contact Message
    </h2>

    <p><strong>Name:</strong> {{ $name }}</p>
    <p><strong>Email:</strong> {{ $email }}</p>
    <p><strong>Subject:</strong> {{ $subject }}</p>

    <div style="margin-top: 16px; padding: 16px; background: #f0f0f5; border-radius: 8px;">
        <p style="white-space: pre-line; margin: 0;">{{ $messageBody }}</p>
    </div>
</body>
</html>
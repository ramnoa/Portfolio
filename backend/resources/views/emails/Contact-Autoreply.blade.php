<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body style="font-family: sans-serif; color: #0b0e14; line-height: 1.6;">
    <h2 style="color: #facc15; background: #0b0e14; padding: 12px 16px; border-radius: 8px;">
        Message Received
    </h2>

    <p>Hi {{ $name }},</p>

    <p>
        Thanks for reaching out! I've received your message regarding
        "<strong>{{ $subject }}</strong>" and will get back to you within 24 hours.
    </p>

    <p style="margin-top: 24px; color: #6b7280; font-size: 13px;">
        This is an automated confirmation — no need to reply to this email.
    </p>
</body>
</html>
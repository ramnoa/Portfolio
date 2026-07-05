<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactAutoReply extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @param array{name: string, email: string, subject: string, message: string} $data
     */
    public function __construct(public array $data)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Thanks for reaching out — I\'ve received your message',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contact-autoreply',
            with: [
                'name' => $this->data['name'],
                'subject' => $this->data['subject'],
            ],
        );
    }
}
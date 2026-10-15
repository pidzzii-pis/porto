<?php

namespace App\Mail;

use App\Models\Message;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;

class ContactMessage extends Mailable
{
    public function __construct(public Message $contact) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Portfolio message from ' . $this->contact->name,
            replyTo: [$this->contact->email],
        );
    }

    public function content(): Content
    {
        $c = $this->contact;

        return new Content(htmlString: sprintf(
            '<p><strong>%s</strong> (%s)</p><p>%s</p>',
            e($c->name), e($c->email), nl2br(e($c->message))
        ));
    }
}

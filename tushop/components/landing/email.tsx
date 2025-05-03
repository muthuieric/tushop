"use client";

import React from 'react';
import { sendEmail} from '@/lib/resend';

interface SendButtonProps {
  label?: string;
  disabled?: boolean;
}

export default function SendButton({ label = 'Send', disabled = false }: SendButtonProps) {
  async function send() {
    try {
      const result = await sendEmail();
      console.log('Send email:', result);
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form action={send} className="p-6 bg-white rounded shadow-md">
        <button
          type="submit"
          disabled={disabled}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {label}
        </button>
      </form>
    </main>
  );
}
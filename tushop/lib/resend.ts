"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}): Promise<{ data: any; error: any }> => {
  try {
    const { data, error } = await resend.emails.send({
      to,
      from: "tryonboarding@resend.dev", // Must be verified in Resend
      subject,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return { data: null, error };
    }

    console.log('Email sent successfully:', data);
    return { data, error: null };
  } catch (error) {
    console.error('Error sending email:', error);
    return { data: null, error };
  }
};
// "use server";

// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendEmail = async (): Promise<{ data: any; error: any }> => {
//     try {
//         const { data, error } = await resend.emails.send({
//             to: "ericmuthuipatch22@gmail.com",
//             from: "tryonboarding@resend.dev", // Fixed format, must be verified in Resend
//             subject: "Loc Tar",
//             html: "<strong> You are a Dev </strong>"
//         });

//         if (error) {
//             console.error('Resend error:', error);
//             return { data: null, error };
//         }

//         console.log('Email sent successfully:', data);
//         return { data, error: null };
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return { data: null, error };
//     }
// };
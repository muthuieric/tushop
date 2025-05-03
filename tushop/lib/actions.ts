"use server";

import { sendEmail } from '@/lib/resend';
import { LowStockProductsType } from '@/types/server/product';

export async function sendLowStockEmail(products: LowStockProductsType[]) {
  try {
    // Generate HTML content for the email
    const html = `
      <div>
        <h2>Low Stock Alert</h2>
        <p>The following products are low on stock (less than 5 units):</p>
        <ul>
          ${products.map(product => `<li>${product.product}: ${product.stock} units</li>`).join('')}
        </ul>
        <p>Please restock these products soon.</p>
      </div>
    `;

    const result = await sendEmail({
      to: process.env.ADMIN_EMAIL || "ericmuthuipatch22@gmail.com", // Configurable via .env
      subject: "Low Stock Notification",
      html,
    });

    return { success: true, data: result.data };
  } catch (error) {
    console.error('Failed to send low stock email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
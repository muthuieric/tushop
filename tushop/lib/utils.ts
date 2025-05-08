import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
}

export function formatDate(date: Date) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
}

export const currencyFormatterIDR = (amount: number) => {
  const formatter = Intl.NumberFormat("en-KE", {
    currency: "KES",
    style: "currency",
    minimumFractionDigits: 2, // Include decimals
  }).format(amount);

  // Replace dot with comma for decimal separator
  return formatter.replace(/\./g, ".");
};
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useRouter } from "next/router"
import { format } from "date-fns"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Scroll to an element on the page using their query Selector
 * @param querySelector
 */
export function scrollTo(querySelector: string) {
  const element = document.querySelector(querySelector)
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" })
  }
  return false
}

/**
 * Function to format the data
 * Day of week, MMM, DD, YYYY
 * @param date
 * @returns
 */
export function formatDate(input: string | number) {
  const date = new Date(input)
  let options: any = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }
  let n = date.toLocaleDateString("en-US", options)
  return n
}

export function formatDateddmmmyyyy(input: string | number) {
  const date = new Date(input)
  return format(date, "dd MMM yyyy")
}
export function getInitials(name: string) {}

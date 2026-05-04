import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923019753393"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-float transition-[transform,box-shadow] duration-300 ease-spring hover:scale-110 hover:shadow-[0_24px_60px_-15px_rgba(37,211,102,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] active:scale-95"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}

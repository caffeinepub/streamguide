import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const phoneNumber = '919811575100'; // +91-9811575100 formatted for wa.me
  const message = "Hi, I'd like to know more about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
    >
      <MessageCircle size={28} className="fill-current" />
    </a>
  );
}

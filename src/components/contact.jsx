import {
  FaPhoneAlt,
  FaWhatsapp,
  FaVoicemail,
  FaInstagram,
} from "react-icons/fa";

// Função para retornar os ícones corretos
function getIcon(type) {
  switch (type) {
    case "phone":
      return FaPhoneAlt;
    case "whatz":
      return FaWhatsapp;
    case "email":
      return FaVoicemail;
    case "insta":
      return FaInstagram;
    default:
      return null;
  }
}

// Componente InfoCard
function InfoCard({ type, text }) {
  const Icon = getIcon(type);

  const containerStyle =
    type === "insta"
      ? "w-full max-w-[280px] min-h-[40px]" // Instagram menor
      : type === "email"
      ? "w-full max-w-[380px] min-h-[60px]" // Email maior
      : "w-full max-w-[340px] min-h-[50px]"; // Padrão

  return (
    <div
      className={`flex items-center gap-3 rounded-full pl-4 bg-[#EFECE32E] ${containerStyle}`}
    >
      {Icon && <Icon className="text-[20px] text-[#EFECE3]" />}
      <span className="text-[16px] text-[#EFECE3] font-extralight">{text}</span>
    </div>
  );
}

// Componente Contact ajustado responsivamente
export function Contact() {
  return (
    <div className="flex flex-col gap-4 items-center w-full md:w-[90%] lg:w-[80%] max-w-full px-4 sm:px-8 md:px-16 lg:px-24">
      <InfoCard type="phone" text="(11) 99999-9999" />
      <InfoCard type="whatz" text="(11) 99999-8888" />
      <InfoCard type="email" text="email@example.com" />
      <InfoCard type="insta" text="draadrianaliborio" />
    </div>
  );
}

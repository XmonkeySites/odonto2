import {
  FaPhoneAlt,
  FaWhatsapp,
  FaVoicemail,
  FaInstagram,
} from "react-icons/fa";

// Função que retorna os ícones
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
      ? "w-[13rem] min-h-[2.5rem]  xl:w-[20rem]" // Box menor para Instagram
      : type === "email"
      ? "min-w-[16rem] min-h-[3.25rem] xl:w-[26rem]" // Box maior para Email
      : "min-w-[15rem] min-h-[2.938rem] xl:w-[23rem] "; // Box padrão para os outros

  return (
    <div
      className={`flex items-center gap-3  rounded-full pl-4 bg-[#EFECE32E] ${containerStyle}`}
    >
      {Icon && <Icon className="text-[20px] text-[#EFECE3]" />}
      <span className="text-[16px] text-[#EFECE3] font-extralight ">{text}</span>
    </div>
  );
}

// Componente Contact
export function Contact() {
  return (
    <div className="flex flex-col gap-[20px] bg-transparent items-center  ">
      <InfoCard type="phone" text="(11) 99999-9999" />
      <InfoCard type="whatz" text="(11) 99999-8888" />
      <InfoCard type="email" text="email@example.com" />
      <InfoCard type="insta" text="draadrianaliborio" />
    </div>
  );
}

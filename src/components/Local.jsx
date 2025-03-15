import { FaLocationDot, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function getIcon(type) {
  switch (type) {
    case "local":
      return FaLocationDot;
    case "whatz":
      return FaWhatsapp;
    case "email":
      return MdOutlineEmail;
    case "insta":
      return FaInstagram;
    default:
      return null;
  }
}

function InfoCard({ type, text }) {
  const Icon = getIcon(type);

  return (
    <div className="flex items-center gap-3 pl-2 w-[350px] h-[50px] 2xl:w-[450px] 2xl:pl-8">
      {Icon && <Icon className="text-[22px] text-[#E4BD54]" />}
      <span className="text-[16px] text-[#EFECE3] font-extralight">{text}</span>
    </div>
  );
}

export function Local() {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-[8px] bg-[#EFECE32E] 
      w-[350px] min-h-[200px] p-4 2xl:w-[450px] 2xl:min-h-[250px]"
    >
      <InfoCard
        type="local"
        text="Rua da Alfazema, n 761 ed Iguatemi Business e Flat sala 101 e 110  Implant Day Clinic"
      />
      <hr className="w-[90%] mx-auto border-[#E4BD54] bg-[#E4BD54] border-t-[1px] my-2" />

      <InfoCard type="whatz" text="(11) 98788-7808" />
      <hr className="w-[90%] mx-auto border-[#E4BD54] bg-[#E4BD54] border-t-[1px] my-2" />

      <InfoCard type="email" text="email@example.com" />
      <hr className="w-[90%] mx-auto border-[#E4BD54] bg-[#E4BD54] border-t-[1px] my-2" />

      <InfoCard type="insta" text="draadrianaliborio" />
    </div>
  );
}

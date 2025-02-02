import { div } from "framer-motion/client";
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
    <div className={"flex items-center gap-3  pl-2  w-[380px] h-[50px] "}>
      {Icon && <Icon className="text-[20px] text-[#E4BD54]" />}
      <span className="text-[16px] text-[#EFECE3] font-extralight">{text}</span>
    </div>
  );
}
export function Local() {
 return (
   <div className="flex flex-col  rounded-[8px]  items-center bg-[#EFECE32E] w-[430px]">
     <InfoCard type="local" text="rua,bairro,cep" />
     <hr className="w-[80%] mx-auto  border-[#E4BD54] bg-[#E4BD54]  border-t-[0.5px]" />
     <InfoCard type="whatz" text="(11) 99999-8888" />
     <hr className="w-[80%] mx-auto border-[#E4BD54] bg-[#E4BD54]  border-t-[0.5px]" />
     <InfoCard type="email" text="email@example.com" />
     <hr className="w-[80%] border-[#E4BD54] bg-[#E4BD54]  border-t-[0.5px]" />
     <InfoCard type="insta" text="draadrianaliborio" />
   </div>
 );

}

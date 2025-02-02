import logo from "/Logo.png";
import home from "/home.png";
import fotinha from "/fotinha.png";
import { Check } from "../check";
import { Lis } from "../lis";
import { Watz } from "../watz";
import { Newcheck } from "../Newcheck";
import { Testimonials } from "../Testimonials";
import aboutme from "/aboutme.png";
import bgcell from "/bgcell.png";
import googleStar from "/googleStar.webp";
import bgcallme from "/bgcallme.png";
import { Contact } from "../contact";
import { FaWhatsapp } from "react-icons/fa";

export function Header() {
  return (
    <section className="flex flex-col items-center justify-center h-auto gap-5 px-[15px] bg-[#EFECE3] ">
      {/* Logo Centralizado */}
      <div className="pt-[80px] flex flex-col items-center">
        <img className="w-[184px] h-[86px]" src={logo} alt="Logo" />
        <h2 className="font-sans font-[800] text-[37px] text-[#9B7549] mt-2 text-center">
          O SORRISO QUE VOCÊ MERECE ESTÁ AQUI!
        </h2>
        <p className="text-center text-[#9B7549] font-sans font-[300] max-w-[360px]">
          Agende sua consulta agora e tenha acesso aos melhores tratamentos
          ortodônticos, com tecnologia avançada e cuidado especializado. Sua
          transformação começa hoje!
        </p>
      </div>

      {/* Informações da Dra. Adriana */}
      <div className="flex gap-5 items-center">
        <img
          className="w-[61.26px] h-[61.26px]"
          src={fotinha}
          alt="Dra. Adriana Libório"
        />
        <span className="text-[#9B7549] font-sans text-[14px]">
          Dra. Adriana Libório | Ortodontista CRO 6176 Especialista pela UFBA |
          Invisalign Doctor
        </span>
      </div>

      {/* Botão WhatsApp */}
      <Watz />

      {/* Seção com ícone de Check e retângulo */}
      <div>
        <img src={home} alt="Imagem de fundo" className="w-full" />
        <div className="flex flex-col relative w-full px-4 gap-[100px]">
          <Check
            title="Aparelhos Ortodônticos Fixos"
            paragraph="Corrigem o alinhamento dentário de forma precisa e eficiente."
          />
          <Check
            title="Invisalign"
            paragraph="Alinhadores modernos, transparentes e confortáveis para o dia a dia."
          />
          <Check
            title="Esthetic Aligner"
            paragraph="Discreto e personalizado para melhorar a estética do seu sorriso."
          />
        </div>
      </div>

      {/* Título "Para Que é?" */}
      <div className="flex justify-center text-[#9B7549] font-[600] text-[29px]">
        Para Que é?
      </div>

      {/* Lista de Benefícios */}
      <div className="flex flex-col gap-[30px]">
        <Lis
          title="Dentes desalinhados?"
          paragraph="Oferecemos soluções que devolvem harmonia ao seu sorriso."
        />
        <Lis
          title="Desconforto com o uso do aparelho?"
          paragraph="Desconforto com o uso do aparelho?"
        />
        <Lis
          title="Procurando por discrição?"
          paragraph="Invisalign e Esthetic Aligner são perfeitos para você!"
        />
      </div>

      {/* Seção "Sobre Mim" */}
      <div className="flex flex-col gap-[37px] pb-[33px]">
        <h2 className="flex justify-center text-[33px] text-[#9B7549] font-[500]">
          Sobre Mim
        </h2>
        <img src={aboutme} alt="Dra. Adriana" />
        <p className="text-[14px] text-[#9B7549] font-[300]">
          Sou a Dra. Adriana Libório, especialista em ortodontia pela UFBA, com
          anos de experiência na criação de sorrisos mais saudáveis e
          confiantes. Sou também Invisalign Doctor e trabalho com as mais
          avançadas tecnologias de alinhamento dental e estética orofacial. Meu
          compromisso vai além de apenas corrigir dentes — estou aqui para
          transformar vidas, uma pessoa de cada vez.
        </p>
        <Watz />
      </div>
      <section className=" flex  flex-col items-center justify-center">
        {/* Seção com Fundo Personalizado */}
        <section className="flex flex-col items-center  bg-white w-[110%] ">
          <div
            className="flex flex-col  relative w-[110%] h-screen bg-cover bg-center bg-no-repeat items-center justify-center px-6"
            style={{
              backgroundImage: `url(${bgcell})`,
            }}
          >
            <h2 className="text-[25px] font-bold text-center text-[#EFECE3] justify-center">
              Por que me contratar?
            </h2>

            {/* Container com Fundo Transparente e Sem Borda */}
            <div className="pt-2.5 relative w-[90%] max-w-[500px] bg-[#EFECE3]/10 rounded-[20px] p-8 flex flex-col items-center">
              <div className="flex flex-col items-center gap-10">
                <Newcheck text="Suporte exclusivo" />
                <Newcheck text="Tecnologia de ponta" />
                <Newcheck text="Experiência sólida" />
                <Newcheck text="Resultados comprovados" />
              </div>
            </div>
          </div>
        </section>
        {/* Seção de Depoimentos / Google Star */}
        <section className=" flex flex-col gap-[100px] bg-white pt-[40px] w-[110%]">
          <div className="flex flex-col items-center">
            {/* Logo do Google */}
            <img
              className=" w-[127px] h-[63px] mt-2" // Empurra o logo para baixo
              src={googleStar}
              alt="Google Star"
            />

            {/* Título */}
            <h2 className="pt-[10px] font-[500] text-[25px] text-[#0F223C] text-center mt-2">
              O que dizem meus pacientes
            </h2>
          </div>

          {/* Slider de Depoimentos */}
          <div className="translate-y-[-2.5rem] w-full flex items-center justify-center">
            <Testimonials />
          </div>
        </section>

        {/* Seção de entre em contato / telefone, email */}
        <section className="flex flex-col relative w-[110%] items-center h-[637px]">
          <div
            className="flex flex-col relative w-[95%] h-screen bg-cover bg-center bg-no-repeat items-center justify-center px-6 "
            style={{
              backgroundImage: `url(${bgcallme})`,
            }}
          >
            <div className="w-[90%] max-w-[400px] bg-[#A98964]/40  rounded-[8px] p-6 border border-[#EFECE3]/50 flex flex-col items-center gap-4">
              <h2 className="text-[#EFECE3] text-[28px] font-semibold text-center">
                Entre em Contato Comigo!
              </h2>
              <h3 className="text-[#EFECE3] text-[16px] font-extralight">
                Estamos perto de você!
              </h3>
              <Contact />
              <div className="flex items-center justify-center min-w-[290px] min-h-[70px] py-2 bg-[#2AA716] rounded-full mt-[20px]">
                <a href="" className="flex items-center gap-2">
                  <FaWhatsapp className="w-[25px] h-[25px] text-white" />
                  <span className="text-white text-[14px] font-medium">
                    Fale comigo no Whatsapp
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <h3>Tratamentos e Serviços</h3>
      <h2>Tratamentos personalizados para transformar seu sorriso</h2>
    </section>
  );
}

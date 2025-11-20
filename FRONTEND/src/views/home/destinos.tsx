//import React from "react";

export default function DestinosChile() {
  return (
    <div className="w-full h-full relative bg-white overflow-hidden rounded-[30px]">
      {/* Título principal */}
      <div className="absolute left-5 top-32 text-[38px] leading-[50px] font-light text-[#1B1E28]">
        Conoce a lo largo<br />
        <span className="font-normal">de </span>
        <span className="font-normal text-[#007AFF]">Chile!</span>
      </div>

      {/* Sección: Mejores destinos */}
      <div className="absolute left-5 top-64 text-[20px] font-bold text-[#1B1E28]">
        Mejores destinos
      </div>
      <div className="absolute right-5 top-[262px] text-[14px] text-[#0D6EFD]">Ver todo</div>

      {/* Card 1 */}
      <div className="absolute left-5 top-[300px] w-[268px] h-[384px] bg-white rounded-[24px] shadow-md">
        <img
          src="https://placehold.co/240x286"
          className="absolute w-[240px] h-[286px] left-[14px] top-[14px] rounded-[20px]"
          alt="destino"
        />
        <div className="absolute left-[20px] top-[314px] text-[#1B1E28] text-[18px] leading-[24px]">
          Torres del Paine
        </div>
        <div className="absolute left-[20px] top-[348px] flex items-center text-[#7D848D] text-[15px]">
          Magallanes y la Antártica
        </div>
        <div className="absolute right-[20px] top-[316px] flex items-center gap-1 text-[#1B1E28] text-[15px]">
          <div className="w-[12px] h-[12px] bg-[#FFD336]"></div>
          4.8
        </div>
      </div>

      {/* Card 2 */}
      <div className="absolute left-[304px] top-[300px] w-[268px] h-[384px] bg-white rounded-[24px] shadow-md">
        <img
          src="https://placehold.co/240x286"
          className="absolute w-[240px] h-[286px] left-[14px] top-[14px] rounded-[20px]"
          alt="destino"
        />
        <div className="absolute left-[20px] top-[314px] text-[#1B1E28] text-[18px] leading-[24px]">
          Cajón del Maipo
        </div>
        <div className="absolute left-[20px] top-[348px] flex items-center text-[#7D848D] text-[15px]">
          San José de Maipo
        </div>
        <div className="absolute right-[20px] top-[316px] flex items-center gap-1 text-[#1B1E28] text-[15px]">
          <div className="w-[12px] h-[12px] bg-[#FFD336]"></div>
          4.8
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 w-full h-[98px] bg-white rounded-t-[30px] shadow-lg flex justify-around items-center">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 border border-[#0D6EFD]"></div>
          <span className="text-[#0D6EFD] text-[12px]">Inicio</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 border border-[#7D848D]"></div>
          <span className="text-[#7D848D] text-[12px]">Calendario</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 border border-[#7D848D]"></div>
          <span className="text-[#7D848D] text-[12px]">Mensajes</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 border border-[#7D848D]"></div>
          <span className="text-[#7D848D] text-[12px]">Perfil</span>
        </div>
      </div>
    </div>
  );
}
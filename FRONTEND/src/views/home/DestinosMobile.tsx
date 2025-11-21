//import React from "react";

/**
 * Componente móvil estilo Figma: Home / Mejores destinos
 * Requiere Tailwind CSS configurado en el proyecto.
 *
 * Cómo usar:
 *  - Guardar en src/views/home/DestinosMobile.tsx
 *  - Importarlo en tu Home o en App dentro del MobileWrapper:
 *
 *    <MobileWrapper>
 *      <DestinosMobile />
 *    </MobileWrapper>
 *
 * Reemplaza las URLs de imagen por las tuyas exportadas.
 */

const sampleDestinos = [
  {
    title: "Torres del Paine",
    subtitle: "Magallanes y la Antártica",
    rating: "4.8",
    img: "https://placehold.co/600x400?text=Torres+del+Paine",
  },
  {
    title: "Cajón del Maipo",
    subtitle: "San José de Maipo",
    rating: "4.8",
    img: "https://placehold.co/600x400?text=Cajon+del+Maipo",
  },
  {
    title: "Valle del Elqui",
    subtitle: "Coquimbo",
    rating: "4.7",
    img: "https://placehold.co/600x400?text=Valle+del+Elqui",
  },
];

export default function DestinosMobile() {
  return (
    <div className="min-h-screen bg-white text-[#1B1E28] relative">
      {/* Top safe area / header */}
      <div className="px-5 pt-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://placehold.co/40x40"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-base font-medium">Jorge</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Language bubble */}
            <div className="px-3 py-1 rounded-full bg-gray-100 text-sm">ES</div>

            {/* Share icon */}
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 12v6a2 2 0 0 0 2 2h12" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6l-4-4-4 4" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2v14" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Bell */}
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 17H9a3 3 0 0 1-3-3V11a6 6 0 1 1 12 0v3a3 3 0 0 1-3 3z" stroke="#111827" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#111827" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Main title */}
        <h1 className="mt-6 text-[34px] leading-[42px] font-light">
          Conoce a lo largo
          <br />
          <span className="font-normal">de </span>
          <span className="text-[#007AFF] font-normal">Chile!</span>
        </h1>
      </div>

      {/* Section header */}
      <div className="px-5 mt-6 flex items-center justify-between">
        <h2 className="text-base font-semibold">Mejores destinos</h2>
        <button className="text-[#0D6EFD] text-sm">Ver todo</button>
      </div>

      {/* Horizontal scroll cards */}
      <div className="px-5 mt-4 pb-36"> {/* pb-36 para dejar espacio al nav fijo */}
        <div className="flex gap-4 overflow-x-auto pb-3 -ml-1">
          {sampleDestinos.map((d, idx) => (
            <article
              key={idx}
              className="min-w-[268px] bg-white rounded-2xl shadow-lg p-0"
              style={{ flex: "0 0 auto" }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-full h-[286px] object-cover"
                />
                {/* bookmark icon circle */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/70 flex items-center justify-center backdrop-blur">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M6 2h12v20l-6-4-6 4V2z" stroke="#111827" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-[#111827]">{d.title}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-sm" />
                    <span className="text-sm text-[#111827]">{d.rating}</span>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm text-[#7D848D]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" stroke="#7D848D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="2" fill="#7D848D"/>
                  </svg>
                  <span>{d.subtitle}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom navigation (fixed) */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white shadow-inner border-t border-gray-100 flex items-center justify-around z-40">
        <button className="flex flex-col items-center text-blue-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 11l9-7 9 7v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8z" stroke="#0D6EFD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-xs mt-1">Inicio</span>
        </button>

        <button className="flex flex-col items-center text-gray-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M7 7v14h10V7" stroke="#7D848D" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-xs mt-1">Calendario</span>
        </button>

        {/* Floating center button */}
        <div className="-mt-6">
          <button className="w-12 h-12 rounded-full bg-[#0D6EFD] shadow-lg flex items-center justify-center text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <button className="flex flex-col items-center text-gray-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#7D848D" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-xs mt-1">Mensajes</span>
        </button>

        <button className="flex flex-col items-center text-gray-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#7D848D" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" stroke="#7D848D" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-xs mt-1">Perfil</span>
        </button>
      </nav>
    </div>
  );
}

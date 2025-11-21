export default function Home() {
  return (
  <div className="w-full bg-white px-5 pb-20">

      {/* Phone Wrapper */}
      <div className="w-[390px] min-h-screen bg-white px-5 pb-20 relative overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <span className="font-semibold text-lg">Jorge</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-gray-200" />
            <button className="w-10 h-10 rounded-full bg-gray-200" />
            <button className="w-10 h-10 rounded-full bg-gray-200" />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold leading-tight mt-6">
          Conoce a lo largo<br />
          de <span className="text-blue-500">Chile!</span>
        </h1>

        {/* SUBHEADER */}
        <div className="flex items-center justify-between mt-8">
          <h2 className="font-semibold text-lg">Mejores destinos</h2>
          <button className="text-blue-500 font-medium">Ver todo</button>
        </div>

        {/* CARDS - Horizontal Scroll */}
        <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
          <div className="min-w-[240px] bg-white rounded-2xl shadow-md p-3">
            <div className="w-full h-[150px] bg-gray-300 rounded-xl mb-3 relative">
              <button className="absolute top-3 right-3 bg-white/70 rounded-full p-1 backdrop-blur">
                🔖
              </button>
            </div>

            <p className="font-semibold text-base">Torres del Paine</p>

            <div className="flex items-center text-sm text-gray-500 mt-1">
              <span className="mr-1">📍</span> Magallanes y la Antártica
            </div>

            <div className="flex items-center gap-1 mt-2 text-yellow-500 font-semibold">
              ⭐ 4.8
            </div>
          </div>
        </div>

        {/* NAVBAR INFERIOR */}
        <div className="w-full h-16 bg-white border-t flex items-center justify-around absolute bottom-0 left-0">
          <button className="text-2xl">🏠</button>
          <button className="text-2xl">📊</button>
          <button className="text-2xl">⚙️</button>
        </div>

      </div>
    </div>
  );
}

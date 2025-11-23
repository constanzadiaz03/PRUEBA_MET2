import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // frontend only: simulate success
    console.log("login data", { email, password });
    navigate("/"); // go to home (or replace per flow)
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-8">
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/img/avatar.png" alt="avatar" className="w-10 h-10 rounded-full" />
            <div className="px-3 py-1 bg-[#F4F6FA] rounded-full text-[#1B1E28]">Jorge</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F4F6FA] flex items-center justify-center">ES</div>
            <div className="w-10 h-10 rounded-full bg-[#F4F6FA] flex items-center justify-center">
              <img src="/img/icon-share.svg" className="w-5 h-5" alt="share" />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#F4F6FA] flex items-center justify-center">
              <img src="/img/icon-bell.svg" className="w-5 h-5" alt="bell" />
            </div>
          </div>
        </div>

        {/* title */}
        <h1 className="text-[32px] font-light leading-[42px] text-[#1B1E28] mt-8">
          Conoce a lo largo<br />
          de <span className="font-semibold text-[#0A84FF]">Chile!</span>
        </h1>

        {/* form */}
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div className="bg-[#F6F7FB] rounded-xl px-4 py-3">
            <label className="text-xs text-[#7D848D]">Correo</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="persona1.2025@gmail.com"
              className="w-full bg-transparent outline-none mt-1 text-sm"
              required
            />
          </div>

          <div className="bg-[#F6F7FB] rounded-xl px-4 py-3 relative">
            <label className="text-xs text-[#7D848D]">Contraseña</label>
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              className="w-full bg-transparent outline-none mt-1 text-sm pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute right-3 top-[38px] text-[#7D848D] text-sm"
            >
              {show ? "Ocultar" : "Ver"}
            </button>
          </div>

          <div className="flex justify-end">
            <Link to="/auth/forgot-password" className="text-sm text-[#0A84FF]">Olvidaste tu contraseña?</Link>
          </div>

          <button className="w-full bg-[#0A84FF] text-white py-3 rounded-xl mt-2">Iniciar</button>

          <div className="text-center text-sm text-[#7D848D]">
            ¿No tienes una cuenta? <Link to="/auth/register" className="text-[#0A84FF]">Registrarse</Link>
          </div>

          <div className="flex items-center justify-center gap-4 mt-4">
            {/* social icons - placeholder images in public/img */}
            <img src="/img/icon-pin.svg" className="w-10 h-10" alt="fb" />
            <img src="/img/icon-pin.svg" className="w-10 h-10" alt="ig" />
            <img src="/img/icon-pin.svg" className="w-10 h-10" alt="tw" />
          </div>
        </form>
      </div>

      {/* bottom bar (with centered search, but here it's static for login) */}
      <div className="h-[90px] bg-white shadow-lg rounded-t-[25px] flex justify-around items-center">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 border border-[#007AFF] rounded-md"></div>
          <span className="text-[12px] text-[#007AFF]">Inicio</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 border border-[#7D848D] rounded-md"></div>
          <span className="text-[12px] text-[#7D848D]">Calendario</span>
        </div>
        <div className="flex flex-col items-center -mt-6">
          <div className="w-14 h-14 bg-[#007AFF] rounded-full flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 border border-white rounded-md"></div>
          </div>
          <span className="text-[12px] text-[#007AFF] mt-1">Buscar</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 border border-[#7D848D] rounded-md"></div>
          <span className="text-[12px] text-[#7D848D]">Mensajes</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 border border-[#7D848D] rounded-md"></div>
          <span className="text-[12px] text-[#7D848D]">Perfil</span>
        </div>
      </div>
    </div>
  );
}

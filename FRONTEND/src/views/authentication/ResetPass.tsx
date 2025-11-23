import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPass() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("reset", email);
    // show verification popup page
    navigate("/auth/VerifyEmail");
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pt-8">
        <button onClick={() => navigate(-1)} className="text-[#7D848D]">Volver</button>

        <h1 className="text-[20px] font-bold mt-6">Reestablecer Contraseña</h1>
        <p className="text-sm text-[#7D848D] mt-2">Ingresa tu correo para reestablecer tu contraseña</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="bg-[#F6F7FB] rounded-xl px-4 py-3">
            <input
              placeholder="persona1.2025@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none"
              required
            />
          </div>

          <button className="w-full bg-[#0A84FF] text-white py-3 rounded-xl mt-2">Reestablecer contraseña</button>
        </form>
      </div>
    </div>
  );
}

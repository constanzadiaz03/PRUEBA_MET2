import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate("/auth/login"), 1600);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="w-full h-screen bg-[#007AFF] flex items-center justify-center">
      <h1 className="text-white text-3xl font-bold">ChileExperience</h1>
    </div>
  );
}

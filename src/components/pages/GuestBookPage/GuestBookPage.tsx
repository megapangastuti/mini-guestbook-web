import bgOffice from "../../../assets/images/bg-office.jpg";
import { EnvelopeIcon, EyeSlashIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import { EyeIcon } from "@heroicons/react/24/outline/esm/index";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { LoginPayload } from "../../../types/auth/auth.types";

function GuestBookPage() {
  const {
    handleSubmit,
    // formState: { errors },
  } = useForm<LoginPayload>();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-center flex items-center justify-center" style={{ backgroundImage: `url(${bgOffice})` }}>
      <div
        className="items-center justify-center w-full
					max-w-md
					p-8
					rounded-xl
					bg-white/10
					backdrop-blur-lg
					border
					border-white/20
					shadow-2xl flex flex-col"
      >
        <h1 className="text-3xl font-bold mb-9">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2 p-2 border-b-blue-950 border-b-2">
              <EnvelopeIcon className="size-4" />
              <input type="text" placeholder="username/email" className="pb-1.5 pl-3" />
            </div>
            <div className="flex flex-row items-center gap-2 p-2 border-b-blue-950 border-b-2 mb-2">
              <LockClosedIcon className="size-4" />
              <input type={showPassword ? "text" : "password"} placeholder="password" className="pb-1.5 pl-3" />
              <button type="submit" onClick={toggleShowPassword}>
                {showPassword ? <EyeSlashIcon className="size-4" /> : <EyeIcon className="size-4" />}
              </button>
            </div>
          </div>
          <button className="w-4/5 p-3 rounded-xl bg-cyan-800 text-cyan-50 font-bold hover:bg-white/90 transition mt-8">Login</button>
        </form>
      </div>
    </div>
  );
}

export default GuestBookPage;

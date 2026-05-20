import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import bgOffice from "../../../assets/images/bg-office.jpg";
import type { LoginPayload } from "../../../types/auth/auth.types";
import DropDown from "../../organisms/DropDown/DropDown";
import FormLabel from "../../atoms/Label/FormLabel";
import FormInput from "../../atoms/Input/FormInput";

function GuestBookPage() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = today.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const options = ["MEETING", "INTERVIEW", "DELIVERY", "CONSULTATION", "GENERAL"];

  const [purpose, setPurpose] = useState("");

  const {
    handleSubmit,
    // formState: { errors },
  } = useForm<LoginPayload>();
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-center flex flex-col items-center" style={{ backgroundImage: `url(${bgOffice})` }}>
      <div>
        <h1 className="text-5xl font-bold mt-16 mb-2 text-white text-center">Digital Guestbook</h1>
        <h2 className="mb-8 text-[16px] text-white text-center">Welcome. Please complete the form below to record your visit.</h2>
      </div>
      <div
        className="items-center justify-center w-full
					max-w-md
					p-8
          rounded-sm
					bg-white/10
					backdrop-blur-lg
					border
					border-white/20
					shadow-2xl flex flex-col"
      >
        <div className="flex flex-row justify-between items-center w-full text-[13px] text-white border-b pb-4">
          <div className="flex flex-row justify-center items-center gap-1">
            <Icon icon="ph:calendar-blank-bold" className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <Icon icon="mdi:access-time" className="h-4 w-4 text-white" />
            <span>{formattedTime} WIB</span>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-3">
          <div className="flex flex-col text-white text-[13px] mx-2">
            <div className="flex flex-col items-start gap-1 p-2 border-b-blue-950">
              <FormLabel htmlFor="fullName" text="Full Name" required={true} />
              <FormInput id="fullName" type="text" placeholder="John Doe" />
            </div>
            <div className="flex flex-row items-start gap-1 p-2 border-b-blue-950">
              <div className="w-1/2 flex flex-col gap-1">
                <FormLabel htmlFor="email" text="Email" required={true} />
                <FormInput id="email" type="email" placeholder="example@mail.com" />
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <FormLabel htmlFor="phone" text="Phone Number" required={false} />
                <FormInput id="phone" type="text" placeholder="+62xxx-xxxx-xxxx" />
              </div>
            </div>
            <div className="flex flex-row items-start gap-1 p-2 border-b-blue-950">
              <div className="w-1/2 flex flex-col gap-1">
                <FormLabel htmlFor="company" text="Company" required={false} />
                <FormInput id="company" type="text" placeholder="PT. RESTForge Systems" />
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <FormLabel htmlFor="purpose" text="Purpose" required={true} />
                <DropDown id="purpose" options={options} value={purpose} onChange={setPurpose} placeholder="Select Purpose" />
              </div>
            </div>
            <div className="flex flex-row items-start gap-1 p-2 border-b-blue-950">
              <div className="w-full flex flex-col gap-1">
                <FormLabel htmlFor="Notes" text="Notes" required={false} />
                <textarea id="company" placeholder="PT. RESTForge Systems" className="border pt-2.5 pl-3 rounded-sm w-full h-24 text-start" />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-3 px-4 text-[13px]">
            <button className="w-1/2 p-3 rounded-xl bg-red-950 text-cyan-50 font-bold hover:bg-red-950/40 transition mt-8 backdrop-blur-lg shadow-lg outline-none">Clear</button>
            <button className="w-1/2 p-3 rounded-xl bg-blue-950 text-cyan-50 font-bold hover:bg-blue-950/40 transition mt-8">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GuestBookPage;

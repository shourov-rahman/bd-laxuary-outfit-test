import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="text-white  bg-[#007bff] hover:bg-blue-600 font-bold rounded-md text-lg px-4 py-3 mt-4 w-full"
      disabled={pending}
    >
      {pending ? "Submitting Order..." : "অর্ডার কনফার্ম করুন "}
    </button>
  );
}

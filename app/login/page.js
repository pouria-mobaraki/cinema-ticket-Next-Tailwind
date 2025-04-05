"use client";

import { useFormState } from "react-dom";
import { loginUser } from "./action";


export default function LoginPage() {
  const [state, formAction] = useFormState(loginUser, null);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/cinema1.webp')",
      }}
    >
      <div className="bg-white bg-opacity-90 px-6 py-8 rounded-xl shadow-lg w-full max-w-xs md:max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">ورود به حساب</h2>

        <form
          action={formAction}
          className="w-full flex flex-col gap-4"
        >
          <input
            type="text"
            name="username"
            placeholder="نام کاربری"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-semibold"
          >
            ورود
          </button>

          {/* پیام خطا */}
          {state?.error && (
            <p className="text-red-500 text-sm mt-2">{state.error}</p>
          )}
        </form>
      </div>
    </div>
  );
}

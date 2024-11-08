"use client";
import { useSessionStore } from "../../store/sessionStore";
import { useRouter } from "next/navigation";

const Logout = () => {
  const logout = useSessionStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <button onClick={handleLogout} className="text-red-500">
      Logout
    </button>
  );
};

export default Logout;

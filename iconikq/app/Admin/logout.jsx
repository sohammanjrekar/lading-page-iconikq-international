import { useSessionStore } from '../stores/sessionStore';
import { useRouter } from 'next/router';

const LogoutButton = () => {
  const logout = useSessionStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <button onClick={handleLogout} className="text-red-500">
      Logout
    </button>
  );
};

export default LogoutButton;

"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from 'next/navigation' for App Router
import { useSessionStore } from '../../store/sessionStore';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({ type: '', message: '' });
    const router = useRouter();
    const login = useSessionStore((state) => state.login);
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD; // Ensure this is set correctly
    console.log('start Admin Password:', adminPassword); 
    const handleLogin = async (e) => {
        e.preventDefault();

        console.log('Input Password:', password);
        console.log('Admin Password:', adminPassword); // Debugging line

        if (password === adminPassword) {
            login();
            setAlert({ type: 'success', message: 'Login successful! Redirecting...' });
            setTimeout(() => {
                router.push('/Admin');
            }, 2000);
        } else {
            setAlert({ type: 'error', message: 'Invalid password. Access denied.' });
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>

                {alert.message && (
                    <div className={`font-regular relative block w-full max-w-screen-md rounded-lg px-4 py-4 text-base text-white ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                        <p>{alert.message}</p>
                    </div>
                )}

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

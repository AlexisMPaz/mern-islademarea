"use client"
import { useState, useEffect, useContext } from 'react';
import UserContext from '@/context/UserContext';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const [message, setMessage] = useState('No se ha podido extablecer conexion con el servidor');
  const { logoutUser } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      try {
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/session/logout`
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
        },
          credentials: 'include',
        });

        const data = await response.json();
        setMessage(data.message);
        logoutUser()
        setTimeout(() => {
          router.push('/');
        }, 1500);

      } catch (error) {
        console.error(error);
      }
    };

    logout();
  }, []);

  return (
    <div className="container mainContainer">
      {message && <h1>{message}</h1>}
    </div>
  );
}
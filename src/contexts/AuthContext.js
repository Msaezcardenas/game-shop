import { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = async (token) => {
    try {
      setUser({ email: 'usuariotest@gmail.com' });
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout: null,
    updateUser: null,
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={data}>
      {children}
      <p> Esto es el AuthContext</p>
    </AuthContext.Provider>
  );
}

import { createContext, useContext, useState, ReactNode } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  rut: string;
  companyName: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string, 
    password: string, 
    name: string, 
    rut: string, 
    companyName: string
  ) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.post('/auth/login', { email, password });
      const { token: authToken, user: authUser } = response.data;
      
      localStorage.setItem('token', authToken);
      setToken(authToken);
      setUser(authUser);
    } catch (err) {
      setError('Error al iniciar sesión');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    email: string, 
    password: string, 
    name: string, 
    rut: string, 
    companyName: string
  ) => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.post('/auth/register', {
        email,
        password,
        name,
        rut,
        company_name: companyName
      });
      
      const { token: authToken, user: authUser } = response.data;
      
      localStorage.setItem('token', authToken);
      setToken(authToken);
      setUser(authUser);
    } catch (err) {
      setError('Error al registrar');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Exportamos el contexto para poder usarlo directamente si es necesario
export { AuthContext };

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};
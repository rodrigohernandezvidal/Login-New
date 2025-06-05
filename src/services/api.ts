import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5002/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de solicitud
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuesta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // Token expirado o inválido
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      
      // Mejor manejo de errores
      const errorMessage = error.response.data?.message || 
                         error.response.statusText || 
                         'Error en la solicitud';
      
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.reject(error);
  }
);


export default api;
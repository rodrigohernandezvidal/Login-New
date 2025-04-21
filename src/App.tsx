import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthModule } from './modules/auth';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta base redirige a /auth/login */}
          <Route path="/" element={<Navigate to="/auth/login" replace />} />
          
          {/* Rutas de autenticación */}
          <Route path="/auth/*" element={<AuthModule />} />
          
          {/* Ruta para páginas no encontradas */}
          <Route path="*" element={
            <div style={{ padding: '20px' }}>
              <h2>Página no encontrada</h2>
              <p>Serás redirigido al login...</p>
              <Navigate to="/auth/login" replace />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
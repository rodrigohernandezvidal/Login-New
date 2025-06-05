import api from './api';

interface FolioResponse {
  CAF: string;
  foliosDisponibles: number;
  foliosUtilizados: number;
  tipoDocumento: number;
}

interface DTEResponse {
  id: string;
  folio: number;
  tipoDocumento: number;
  fechaEmision: string;
  estado: string;
  xml: string;
  pdf: string;
}

export const siiService = {
  // Solicitar nuevos folios al SII
  solicitarFolios: async (tipoDocumento: number, cantidad: number) => {
    try {
      const response = await api.post('/sii/folios', { tipoDocumento, cantidad });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Obtener folios disponibles
  obtenerFolios: async () => {
    try {
      const response = await api.get<FolioResponse[]>('/sii/folios');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Generar DTE (Documento Tributario Electrónico)
  generarDTE: async (datosFactura: any) => {
    try {
      const response = await api.post<DTEResponse>('/sii/generar-dte', datosFactura);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Enviar DTE al SII
  enviarDTE: async (id: string) => {
    try {
      const response = await api.post(`/sii/enviar-dte/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Consultar estado DTE
  consultarEstadoDTE: async (id: string) => {
    try {
      const response = await api.get(`/sii/estado-dte/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Validar datos tributarios (RUT)
  validarContribuyente: async (rut: string) => {
    try {
      const response = await api.get(`/sii/validar-contribuyente/${rut}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
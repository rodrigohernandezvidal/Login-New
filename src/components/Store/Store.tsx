import { useState } from 'react';
import { Container, Typography, Box, Grid, Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import ProductCard from './ProductCard';
import Cart from './Cart';
import './Store.css';

const products = [
  {
    id: 1,
    name: 'Software de Facturación',
    price: 299,
    description: 'Solución completa para la gestión de facturación electrónica',
    image:  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'
  },
  {
    id: 2,
    name: 'Sistema de Firma Electrónica',
    price: 199,
    description: 'Plataforma para firmar documentos con validez legal',
    image:  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'
  },
  {
    id: 3,
    name: 'Automatización Empresarial',
    price: 499,
    description: 'Automatiza tus procesos empresariales',
    image:  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'
  },
  {
    id: 4,
    name: 'Soporte Premium',
    price: 99,
    description: 'Soporte técnico prioritario por 1 año',
    image:  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'
  },
  {
    id: 5,
    name: 'Paquete Completo',
    price: 799,
    description: 'Todos nuestros servicios en un solo paquete',
    image:  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'
  },
  {
    id: 6,
    name: 'Consultoría Personalizada',
    price: 149,
    description: 'Sesión de consultoría de 2 horas',
    image:  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80'
  }
];

const Store = () => {
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; description: string; image: string; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: { id: number; name: string; price: number; description: string; image: string }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    const numericProductId = parseInt(productId, 10);
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== numericProductId)
    );
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    const numericProductId = parseInt(productId, 10);
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === numericProductId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="store-page">
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 4 }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', color: '#1A1A2E' }}>
            Nuestra Tienda
          </Typography>
          <IconButton 
            onClick={() => setIsCartOpen(true)}
            sx={{ 
              backgroundColor: '#FF2D55',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#d82548'
              }
            }}
          >
            <Badge badgeContent={totalItems} color="primary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
        
        <Typography variant="h5" sx={{ color: '#555', mb: 6 }}>
          Descubre nuestros productos y servicios disponibles para compra inmediata
        </Typography>
        
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid key={product.id}>
              <ProductCard 
                product={{
                  ...product,
                  id: product.id, // Mantenemos 'id' como número
                }} 
                onAddToCart={() => addToCart(product)} 
              />
            </Grid>
          ))}
        </Grid>
        
        <Cart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cartItems.map((item) => ({
            ...item,
            id: item.id.toString(), // Convertimos 'id' de number a string
          }))} 
          onRemove={removeFromCart} 
          onUpdateQuantity={updateQuantity} 
        />
      </Container>
    </div>
  );
};

export default Store;
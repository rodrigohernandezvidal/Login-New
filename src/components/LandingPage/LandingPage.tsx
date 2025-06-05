import React from "react";
import { 
    Typography, 
    Button, 
    Container, 
    //Grid, 
    Card, 
    CardContent, 
    CardMedia, 
    Box,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Paper,
    IconButton
} from "@mui/material";
import Grid from '@mui/material/Grid';
import { 
    Business, 
    Code, 
    ContactMail,
    PlayCircle,
    CheckCircle,
    Star,
    ArrowForward,
    Email
} from "@mui/icons-material";
import { Particles } from 'react-tsparticles';
import { motion } from "framer-motion";

// Definición de interfaces
interface ColorPalette {
    primary: string;
    secondary: string;
    accent: string;
    dark: string;
    light: string;
    white: string;
}

interface StatItem {
    value: string;
    label: string;
}

interface ServiceItem {
    icon: React.ReactNode;
    title: string;
    features: string[];
}

interface TestimonialItem {
    name: string;
    role: string;
    avatar: string;
    comment: string;
    rating: number;
}

// Paleta de colores personalizada
const colors: ColorPalette = {
    primary: '#FF2D55',    // Rosa vibrante 
    secondary: '#3A86FF',  // Azul brillante
    accent: '#FFBE0B',     // Amarillo dorado
    dark: '#1F2937',       // Azul oscuro
    light: '#F8F9FA',      // Fondo claro
    white: '#FFFFFF',      // Blanco puro
};

const LandingPage: React.FC = () => {
  //  const particlesInit = async (engine: Engine): Promise<void> => {
    //    await loadFull(engine );
    //};

    // Datos tipados
    const stats: StatItem[] = [
        { value: '500+', label: 'Clientes satisfechos' },
        { value: '99%', label: 'Uptime garantizado' },
        { value: '24/7', label: 'Soporte técnico' },
        { value: '10x', label: 'Aumento productividad' }
    ];

    const services: ServiceItem[] = [
        { 
            icon: <Business sx={{ fontSize: 60 }} />, 
            title: "Automatización Empresarial", 
            features: ["Flujos de trabajo automatizados", "Integración con sistemas existentes", "Reducción de errores humanos"] 
        },
        { 
            icon: <Code sx={{ fontSize: 60 }} />, 
            title: "Desarrollo de Software", 
            features: ["Aplicaciones web y móviles", "Sistemas a medida", "Tecnologías modernas"] 
        },
        { 
            icon: <ContactMail sx={{ fontSize: 60 }} />, 
            title: "Soporte y Consultoría", 
            features: ["Implementación guiada", "Capacitación de equipos", "Soporte prioritario"] 
        }
    ];

    const testimonials: TestimonialItem[] = [
        {
            name: "Carlos Méndez",
            role: "CEO, RetailTech",
            avatar: "C",
            comment: "Implementamos su software y en 3 meses aumentamos nuestra productividad en un 40%.",
            rating: 5
        },
        {
            name: "Ana Rodríguez",
            role: "Directora de Operaciones",
            avatar: "A",
            comment: "El soporte técnico es excepcional. Siempre están disponibles cuando los necesitamos.",
            rating: 5
        },
        {
            name: "Luis Fernández",
            role: "Gerente TI",
            avatar: "L",
            comment: "La solución más completa que hemos encontrado en el mercado a un precio competitivo.",
            rating: 4
        }
    ];

    return (
        <Box sx={{ 
                minHeight: "100vh", 
                overflowX: "hidden", 
                backgroundColor: colors.light,
                width: '100vw',
                margin: 0,
                padding: 0
            }}>
            {/* Hero Section */}
            <Box sx={{
                minHeight: "70vh",
                width: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `
                    linear-gradient(112deg, rgba(109,40,217,0.9) 0%, rgba(76,29,149,0.9) 100%),
                    url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden"
                }}>
                <Particles
                    id="tsparticles"
                    options={{
                    particles: {
                        number: { value: 60 },
                        move: { enable: true, speed: 1.5 },
                        size: { value: 2.5 },
                        opacity: { value: 0.25 },
                        links: { 
                        enable: true, 
                        distance: 120,
                        color: "#ffffff",
                        opacity: 0.2
                        }
                    }
                    }}
                />
                {/* Contenedor principal centrado */}
                <Box sx={{
                       width: "100%",
                       maxWidth: "1200px",
                       mx: "auto", // Centra horizontalmente
                       px: 3, // Padding horizontal
                       position: "relative",
                       zIndex: 2,
                       display: "flex",
                       justifyContent: "center", // Centra horizontalmente el contenido
                       alignItems: "center", // Centra verticalmente el contenido
                       flexDirection: "column", // Asegura que los elementos se apilen verticalmente
                       minHeight: "70vh", // Ajusta la altura mínima para centrar verticalmente
                    }}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ width: "100%" }}
                    >
                        {/* Tarjeta de contenido */}
                        <Paper 
                            elevation={0}
                            sx={{
                                width: {
                                    xs: "calc(100% - 16px)", // Ajusta el ancho en pantallas pequeñas
                                    sm: "calc(100% - 32px)", // Ajusta el ancho en pantallas medianas
                                    md: "90%", // Ajusta el ancho en pantallas grandes
                                    lg: "1200px", // Máximo ancho en pantallas grandes
                                },
                                minWidth: "380px", // Ancho mínimo para evitar que se vea muy pequeño
                                mx: "auto", // Centra horizontalmente la tarjeta
                                p: 3, // Padding interno
                                backgroundColor: "rgba(0, 0, 0, 0.4)", // Fondo semitransparente
                                borderRadius: "16px", // Bordes redondeados
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // Sombra para destacar
                            }}
                        >
                            <Chip 
                                label="Nueva Versión Disponible"
                                sx={{ 
                                    mb: 3,
                                    backgroundColor: colors.accent,
                                    color: colors.dark,
                                    fontWeight: 700,
                                    fontSize: "0.9rem"
                                
                                }} 
                            />
                            <Typography variant="h4" sx={{
                                        fontWeight: 800,
                                        color: "#fff",
                                        mb: 3,
                                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                                        //whiteSpace: "nowrap", // Evita que el texto se divida en varias líneas
                                        overflow: "hidden", // Oculta el texto que se desborde
                                        textOverflow: "ellipsis", // Agrega "..." si el texto se desborda
                                        textAlign: "center", // Centra el texto
                                        lineHeight: 1.2,
                                        textShadow: "0 2px 8px rgba(0,0,0,0.3)"
                            }}>
                                Transforma tu negocio con nuestro software
                            </Typography>
                            <Typography  variant="body1" 
                                sx={{
                                    fontWeight: 500,
                                    color: "#fff",
                                    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                                    //whiteSpace: "nowrap", // Evita que el texto se divida en varias líneas
                                    overflow: "hidden", // Oculta el texto que se desborde
                                    textOverflow: "ellipsis", // Agrega "..." si el texto se desborda
                                    textAlign: "center", // Centra el texto
                                }}>
                                Soluciones tecnológicas diseñadas para impulsar tu productividad y crecimiento
                            </Typography>
                            {/* Contenedor de botones centrado */}
                            <br></br>
                            <Box sx={{
                                    display: "flex",
                                    gap: 2,
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    "& .MuiButton-root": {
                                        minWidth: "200px"
                                    }
                            }}>
                                <Button 
                                    variant="contained" 
                                    size="large"
                                    endIcon={<PlayCircle />}
                                    sx={{
                                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                                        color: "#fff",
                                        fontWeight: 700,
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: "8px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                        "&:hover": {
                                            transform: "translateY(-2px)",
                                            boxShadow: `0 6px 16px ${colors.primary}`
                                        }
                                    }}
                                >
                                    Ver Demo
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    size="large"
                                    endIcon={<ArrowForward />}
                                    sx={{
                                        color: "#fff",
                                        borderColor: "rgba(255,255,255,0.3)",
                                        fontWeight: 700,
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: "8px",
                                        "&:hover": {
                                            backgroundColor: "rgba(255,255,255,0.1)",
                                            borderColor: "#fff"
                                        }
                                    }}
                                >
                                    Conoce más
                                </Button>
                            </Box>
                        </Paper>
                    </motion.div>
                </Box>
                {/* Flecha de scroll centrada */}
                <Box sx={{
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 3
                }}>
                    <IconButton 
                        aria-label="scroll-down"
                        sx={{
                            color: "#fff",
                            backgroundColor: "rgba(255,255,255,0.2)",
                            "&:hover": {
                                backgroundColor: "rgba(255,255,255,0.3)"
                            }
                        }}
                    >
                        <ArrowForward sx={{ transform: "rotate(90deg)" }} />
                    </IconButton>
                </Box>
            </Box>

            {/* Stats Section */}
            <Box sx={{ py: 8, backgroundColor: colors.white }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" gutterBottom sx={{ 
                        fontWeight: 'bold',
                        color: colors.dark,
                        mb: 6,
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            display: 'block',
                            width: '80px',
                            height: '4px',
                            backgroundColor: colors.primary,
                            margin: '20px auto 0'
                        }
                    }}>
                        Nuestro Impacto
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {stats.map((stat, index) => (
                            <Grid key={index} >
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Paper elevation={3} sx={{ 
                                        p: 3, 
                                        textAlign: 'center',
                                        borderRadius: '16px',
                                        background: colors.white,
                                        border: `2px solid ${colors.light}`,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: colors.primary,
                                            boxShadow: `0 10px 20px rgba(255, 45, 85, 0.1)`
                                        }
                                    }}>
                                        <Typography variant="h3" sx={{ 
                                            fontWeight: 'bold',
                                            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            {stat.value}
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{ color: colors.dark }}>
                                            {stat.label}
                                        </Typography>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Servicios */}
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
            {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card
                    sx={{
                        textAlign: "center",
                        p: 4,
                        minHeight: "100%",
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "16px",
                        transformStyle: "preserve-3d",
                        transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                        animation: "gradientShift 8s ease infinite",
                        },
                        "&:hover": {
                        transform: "translateY(-10px) rotateX(5deg)",
                        boxShadow: "0 15px 30px rgba(109, 40, 217, 0.3)",
                        "&::after": {
                            opacity: 1,
                        },
                        },
                        "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                        opacity: 0,
                        transition: "opacity 0.5s ease",
                        },
                    }}
                    >
                    <CardContent sx={{ position: "relative", zIndex: 1 }}>
                        <Box
                        sx={{
                            color:
                            index === 0
                                ? colors.primary
                                : index === 1
                                ? colors.secondary
                                : colors.accent,
                            mb: 3,
                            transition: "transform 0.5s ease",
                            "&:hover": {
                            transform: "scale(1.1)",
                            },
                        }}
                        >
                        {service.icon}
                        </Box>

                        <Typography
                        variant="h5"
                        sx={{
                            mb: 3,
                            fontWeight: 700,
                            color: colors.dark,
                            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        >
                        {service.title}
                        </Typography>

                        <Divider
                        sx={{
                            my: 2,
                            background: `linear-gradient(90deg, transparent 0%, ${colors.primary} 50%, transparent 100%)`,
                            height: "2px",
                        }}
                        />

                        <List>
                        {service.features.map((feature, i) => (
                            <motion.div
                            key={i}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            >
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon>
                                <CheckCircle
                                    sx={{
                                    color:
                                        index === 0
                                        ? colors.primary
                                        : index === 1
                                        ? colors.secondary
                                        : colors.accent,
                                    }}
                                />
                                </ListItemIcon>
                                <ListItemText
                                primary={feature}
                                sx={{
                                    color: colors.dark,
                                    "& .MuiTypography-root": {
                                    fontWeight: 500,
                                    },
                                }}
                                />
                            </ListItem>
                            </motion.div>
                        ))}
                        </List>
                    </CardContent>
                    </Card>
                </motion.div>
                </Grid>
            ))}
            </Grid>
           {/* Demo Section */}
            <Box
            sx={{
                py: 8,
                backgroundColor: colors.white,
                backgroundImage:
                'radial-gradient(circle at 10% 20%, rgba(255, 45, 85, 0.05) 0%, rgba(255, 45, 85, 0) 20%)',
            }}
            >
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center" justifyContent="center">
                {/* Texto y lista */}
                <Grid item xs={12} md={6}>
                    <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: colors.dark,
                        mb: 6,
                        position: 'relative',
                        '&:after': {
                        content: '""',
                        display: 'block',
                        width: '80px',
                        height: '4px',
                        backgroundColor: colors.primary,
                        margin: '20px auto 0',
                        },
                    }}
                    >
                    Descubre cómo funciona
                    </Typography>
                    <Typography
                    variant="h5"
                    sx={{
                        color: colors.dark,
                        opacity: 0.8,
                        mb: 4,
                    }}
                    >
                    Nuestra plataforma en acción
                    </Typography>
                    <List sx={{ mt: 3 }}>
                    {[
                        'Interfaz intuitiva y fácil de usar',
                        'Configuración en minutos',
                        'Escalable según tus necesidades',
                        'Reportes en tiempo real',
                    ].map((item, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                            <Star sx={{ color: colors.accent }} />
                        </ListItemIcon>
                        <ListItemText primary={item} sx={{ color: colors.dark }} />
                        </ListItem>
                    ))}
                    </List>
                    <Button
                    variant="contained"
                    size="large"
                    endIcon={<PlayCircle />}
                    sx={{
                        mt: 3,
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                        color: colors.white,
                        fontWeight: 'bold',
                        px: 4,
                        '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 4px 12px ${colors.primary}`,
                        },
                    }}
                    >
                    Ver video demo
                    </Button>
                </Grid>

                {/* Imagen */}
                <Grid item xs={12} md={6}>
                    <motion.div whileHover={{ scale: 1.02 }}>
                    <Paper
                        elevation={6}
                        sx={{
                        borderRadius: 2,
                        overflow: 'hidden',
                        border: `1px solid ${colors.light}`,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        }}
                    >
                        <CardMedia
                        component="img"
                        height="400"
                        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                        alt="Demo"
                        sx={{
                            transition: 'transform 0.5s ease',
                            '&:hover': {
                            transform: 'scale(1.03)',
                            },
                        }}
                        />
                    </Paper>
                    </motion.div>
                </Grid>
                </Grid>
            </Container>
            </Box>
            {/* Testimonios */}
            <Box
              sx={{
                py: 8,
                backgroundColor: colors.light,
                            }}
                        >
            <Container maxWidth="lg">
                <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    color: colors.dark,
                    mb: 6,
                    position: 'relative',
                    '&:after': {
                    content: '""',
                    display: 'block',
                    width: '80px',
                    height: '4px',
                    backgroundColor: colors.primary,
                    margin: '20px auto 0',
                    },
                }}
                >
                Lo que dicen nuestros clientes
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                {testimonials.map((testimonial, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div whileHover={{ y: -5 }}>
                        <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            height: '100%',
                            backgroundColor: colors.white,
                            borderRadius: '12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                            boxShadow: `0 10px 25px rgba(255, 45, 85, 0.1)`,
                            },
                        }}
                        >
                        <Box sx={{ display: 'flex', mb: 2, justifyContent: 'center' }}>
                            {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                sx={{
                                color: i < testimonial.rating ? colors.accent : colors.light,
                                fontSize: '1.2rem',
                                }}
                            />
                            ))}
                        </Box>
                        <Typography
                            variant="body1"
                            sx={{
                            mb: 3,
                            fontStyle: 'italic',
                            color: colors.dark,
                            fontSize: '1.1rem',
                            textAlign: 'center',
                            }}
                        >
                            "{testimonial.comment}"
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Avatar
                            sx={{
                                bgcolor: colors.primary,
                                mr: 2,
                                color: colors.white,
                                fontWeight: 'bold',
                            }}
                            >
                            {testimonial.avatar}
                            </Avatar>
                            <Box>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                fontWeight: 'bold',
                                color: colors.dark,
                                textAlign: 'center',
                                }}
                            >
                                {testimonial.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                color: colors.dark,
                                opacity: 0.7,
                                textAlign: 'center',
                                }}
                            >
                                {testimonial.role}
                            </Typography>
                            </Box>
                        </Box>
                        </Paper>
                    </motion.div>
                    </Grid>
                ))}
                </Grid>
            </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ 
                py: 10,
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                color: colors.white,
                textAlign: "center",
                position: 'relative',
                overflow: 'hidden',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    zIndex: 1
                }
            }}>
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h3" gutterBottom sx={{ 
                            fontWeight: 'bold',
                            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}>
                            ¿Listo para transformar tu negocio?
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{ 
                            mb: 4,
                            textShadow: '0 1px 2px rgba(255, 255, 255, 0.1)'
                        }}>
                            Contáctanos hoy mismo y descubre cómo podemos ayudarte
                        </Typography>
                        <Button 
                            variant="contained" 
                            size="large"
                            endIcon={<Email />}
                            sx={{ 
                                px: 6, 
                                py: 1.5, 
                                fontSize: '1.1rem',
                                backgroundColor: colors.accent,
                                color: colors.dark,
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: colors.accent,
                                    transform: 'translateY(-2px)',
                                    boxShadow: `0 4px 12px ${colors.accent}`
                                }
                            }}
                        >
                            Solicitar Demo
                        </Button>
                    </motion.div>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingPage;
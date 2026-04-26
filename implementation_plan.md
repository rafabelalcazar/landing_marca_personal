# Plan de Implementación: Landing Page "El Sistema Completo"

El objetivo es crear una landing page atractiva, casual y dinámica para el programa "El Sistema Completo", basándonos en el texto extraído del documento de Notion. La página presentará los distintos retos individuales, así como la opción premium "Grupo Fundador".

## Colores y Estética

- **Fondo General**: Blanco (`#FFFFFF`), tal como lo solicitaste.
- **Acento Principal**: `#F4C70F` (Amarillo Mostaza) - Se utilizará para botones de llamada a la acción (CTAs), iconos, y para resaltar partes importantes del texto.
- **Fondo Secundario (Secciones/Tarjetas)**: `#FFF8F0` (Beige claro) - Ideal para diferenciar secciones de contenido, como la zona premium o el interior de las tarjetas.
- **Bordes y Sombras sutiles**: `#DDD7D7` (Gris claro) - Para estructurar visualmente sin sobrecargar, usándolo en bordes de tarjetas y líneas divisorias.
- **Tipografía**: Fuentes modernas sin serifa (ej. Inter o Poppins) con colores oscuros (ej. `#222222`) para maximizar la legibilidad en fondos claros, manteniendo un tono "casual" pero profesional.

## Estructura de Secciones (Textos respetados del Notion)

### 1. Hero Section (Inicio)
- **Título**: EL SISTEMA COMPLETO
- **Subtítulo**: "No necesitas más seguidores; necesitas que te encuentren los correctos."
- **Descripción**: Construye una marca personal que atrae clientes, haciendo que entiendan tu valor y tomen la decisión de comprarte.
- **Botón CTA**: Empezar Reto Gratuito

### 2. Los Retos Individuales (Sección de Tarjetas)
Se mostrarán como tarjetas interactivas usando CSS Grid/Flexbox:
- **Punto de Partida: Habla a cámara** – Gratis (Disponible ya)
- **Reto 1: Define tu marca personal** – $19 USD (Inicia 4 de mayo)
- **Reto 2: Guiones virales** – $29 USD (Inicia 11 de mayo)
- **Reto 3: Grabación pro** – $39 USD (Inicia 18 de mayo)
- **Reto 4: Edición en CapCut avanzado + IA** – $49 USD (Inicia 25 de mayo)
- **Reto 5: Estrategia que atrae clientes** – Precio por definir (Inicia 1 de junio)
- **Reto 6: Automatizaciones + historias que venden** – $69 USD (Inicia 8 de junio)
- **Bonus Extra: Crea tu avatar con IA** – $79 USD (Inicia 29 de junio)

### 3. Opción Premium: Grupo Fundador
Una sección destacada (probablemente con fondo `#FFF8F0` y borde `#F4C70F`) para generar contraste y urgencia.
- **Título**: Grupo Fundador (Solo 10 cupos)
- **Precio Especial**: $221 USD (Próximos grupos costarán $790 USD).
- **Beneficios**:
  - 6 clases en vivo los viernes.
  - Sesiones semanales de Q&A los miércoles.
  - Feedback personalizado y soporte.
  - Acceso a grabaciones, recursos de IA, prompts y plantillas.
- **Botón CTA**: Unirse al Grupo Fundador

### 4. Footer & Recomendación
- Mensaje final recomendando empezar por el reto gratuito "Habla a cámara" para probar el estilo de enseñanza antes de invertir.

## Archivos a Crear

#### [NEW] index.html
Contendrá la estructura semántica de las secciones detalladas arriba.

#### [NEW] style.css
Declaración de variables CSS para la paleta de colores, utilidades de diseño (flexbox, grid), animaciones de hover en botones y tarjetas, y diseño completamente responsivo (Mobile First).

#### [NEW] script.js
Se encargará de:
- Animaciones ligeras al hacer scroll (Aparición paulatina de los retos).
- Interactividad en los botones (ej. scroll suave hacia las secciones de interés o alertas simulando el inicio del proceso de registro).

> [!IMPORTANT]  
> **Revisión del Usuario Requerida**
> Por favor revisa este esquema. ¿Estás de acuerdo con cómo se han distribuido los textos y los precios para cada bloque? Si todo te parece bien, aprobaré el plan y procederé a codificar los archivos HTML, CSS y JS con un diseño de alta calidad estética.

# NÓRDIKA LAB 🧊 — "Atrévete a probar el frío"

Landing Page comercial oficial desarrollada para **NÓRDIKA LAB**, marca premium de bebidas frozen y granizados artesanales inspirada en el universo ártico y la alquimia de laboratorio.

---

## 🧊 Equipo de Desarrollo Multidisciplinario
- **Senior Frontend Developer:** Arquitectura limpia en HTML5, CSS3 modular (Custom Properties, Flexbox, CSS Grid) y JavaScript ES6+ sin librerías pesadas. Canvas interactivo de física criogénica a 60 FPS.
- **UI/UX Designer:** Experiencia visual futurista de laboratorio polar con glassmorphism, efectos de escarcha, resplandores de neón sincronizados con cada sabor y tipografía moderna (`Montserrat` + `Space Grotesk`).
- **Especialista en CRO (Conversion Rate Optimization):** Embudo de conversión ultra-directo (1-clic a WhatsApp con mensajes personalizados por producto), botón flotante persistente con pulso visual, badges sensoriales y barra rápida en mobile.
- **Director Creativo:** Preservación rigurosa de la identidad de marca, logotipo original intacto, paleta cromática polar (`#0A1D2E`, `#0E3A5A`, `#00E5FF`, `#A7E8FF`, `#FFFFFF`, negro profundo).
- **Especialista en Marketing Digital:** SEO semántico, etiquetas Open Graph para redes sociales, Twitter Cards y tiempos de carga instantáneos.

---

## 📂 Estructura del Proyecto

```text
nordika-web/
├── index.html                   # Documento semántico principal (SEO, Open Graph, estructura completa)
├── README.md                    # Documentación técnica y comercial del proyecto
└── assets/
    ├── css/
    │   └── styles.css           # Sistema de diseño, variables de color, glassmorphism, responsive
    ├── js/
    │   └── main.js              # Canvas de partículas de hielo, interactividad de laboratorio, enlaces WA
    └── images/
        ├── favicon.png          # Favicon oficial
        ├── nordika-logo-transparent.png # Logo oficial NÓRDIKA LAB vectorizado con transparencia
        ├── nordika-hero-logo.jpg        # Emblema completo con montañas de hielo
        ├── nordika-icon.jpg             # Icono hexagonal matraz de laboratorio
        ├── all_flavors_grid.jpg         # Fotografía publicitaria de los 6 granizados
        ├── ice-mountains.jpg            # Textura de montañas glaciares para fondos
        ├── nordika-kiosk.jpg            # Plano y especificaciones del kiosk oficial
        ├── nordika-kiosk-view.jpg       # Vista 3D del punto de venta polar
        ├── flavor-rubi-boreal.jpg       # Tarjeta oficial: Rubí Boreal (Frutos Rojos)
        ├── flavor-solsticio-dorado.jpg  # Tarjeta oficial: Solsticio Dorado (Mango)
        ├── flavor-glaciar-citrico.jpg   # Tarjeta oficial: Glaciar Cítrico (Limón)
        ├── flavor-aurora-electrica.jpg  # Tarjeta oficial: Aurora Eléctrica (Blue Raspberry)
        ├── flavor-nube-artica.jpg       # Tarjeta oficial: Nube Ártica (Coco)
        ├── flavor-vortice-violeta.jpg   # Tarjeta oficial: Vórtice Violeta (Uva)
        ├── cup-rubi-boreal.jpg          # Primer plano sensorial para el visor de laboratorio
        ├── cup-solsticio-dorado.jpg     # Primer plano sensorial
        ├── cup-glaciar-citrico.jpg      # Primer plano sensorial
        ├── cup-aurora-electrica.jpg     # Primer plano sensorial
        ├── cup-nube-artica.jpg          # Primer plano sensorial
        └── cup-vortice-violeta.jpg      # Primer plano sensorial
```

---

## 🧪 Los Seis Sabores Oficiales

| Código | Nombre Comercial | Sabor Original | Color Neón | Descripción Sensorial |
| :--- | :--- | :--- | :--- | :--- |
| **EXP-01** | **RUBÍ BOREAL** | Frutos Rojos | Rojo Intenso (`#FF1A4B`) | Una explosión de frutos rojos que despierta tus sentidos. |
| **EXP-02** | **SOLSTICIO DORADO** | Mango | Amarillo Dorado (`#FFB800`) | El sabor tropical del mango en una experiencia helada. |
| **EXP-03** | **GLACIAR CÍTRICO** | Limón | Verde Cítrico (`#00E676`) | Una descarga refrescante con personalidad cítrica. |
| **EXP-04** | **AURORA ELÉCTRICA** | Blue Raspberry | Azul Eléctrico (`#00D2FF`) | Una experiencia vibrante, dulce y electrizante. |
| **EXP-05** | **NUBE ÁRTICA** | Coco | Blanco Hielo (`#E2F8FF`) | Suavidad tropical en una nube de frescura. |
| **EXP-06** | **VÓRTICE VIOLETA** | Uva | Violeta (`#B83BF5`) | Un torbellino de sabor dulce, intenso y refrescante. |

---

## 📲 Integración de WhatsApp (Conversión Directa)

- **Número Oficial:** `3004643896` (Colombia: `+57 300 464 3896`)
- **Enlace Base:** `https://wa.me/573004643896`
- **Mensaje Personalizado por Sabor:**
  > *"Hola, NÓRDIKA LAB. Quiero pedir un [NOMBRE_COMERCIAL] de [SABOR]. ¿Me pueden dar información?"*

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

No requiere Node.js, compilación ni configuración adicional.

### Opción 1: Abrir directamente en el navegador
Hacer doble clic en el archivo `index.html` o arrastrarlo a cualquier navegador web (Chrome, Edge, Firefox, Safari).

### Opción 2: Servidor local ligero (Recomendado)
Desde una terminal en la carpeta del proyecto:
```bash
# Con Python 3:
python -m http.server 8080

# Luego abrir en el navegador:
http://localhost:8080
```

### Opción 3: Extensión Live Server de Visual Studio Code
1. Abre la carpeta `nordika-web` en VS Code.
2. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

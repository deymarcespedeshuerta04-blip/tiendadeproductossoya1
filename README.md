# Raiz - Nutrición Vegetal (Proyecto Sincronizado para Visual Studio Code)

## Estructura ordenada y sincronizada
- `index.html`: Página principal de catálogo, beneficios, recetas, directorio de empresas de soya en Santa Cruz, carrito y pasarela QR / WhatsApp.
- `rompecabezas-raiz.html`: Juego interactivo de 15 piezas con imágenes de productos Raiz.
- `css/styles.css`: Estilos unificados y responsivos.
- `js/script.js`: Lógica del catálogo, filtros sincronizados, carrito, WhatsApp y colocación del QR por código (`QR_CODE_CONFIG` y `mountQrImageByCode`).
- `js/rompecabezas.js`: Lógica del rompecabezas de 15 piezas.
- `img/qr1.jpg`: Imagen oficial del código QR estático.
- `img/LECHE DE SOYA.jfif`: Fotografía principal de Leche de Soya.
- `img/collage-productos-soya.svg`: Imagen unificada para el rompecabezas.

## Cómo se coloca la imagen del QR por código en VS Code
En `js/script.js` (Sección 8), el objeto `QR_CODE_CONFIG` y la función `mountQrImageByCode()` crean e inyectan dinámicamente el elemento `<img>` dentro de `#qrImageMount` y `#checkoutQrMount`:

```js
const QR_CODE_CONFIG = {
    imageSrc: 'img/qr1.jpg',
    altText: 'Código QR Estático Oficial - Raiz Nutrición Vegetal',
    cssClass: 'qr-generated-img'
};
```
Si deseas cambiar la imagen del QR desde VS Code, solo coloca tu nueva imagen dentro de la carpeta `img/` y actualiza `QR_CODE_CONFIG.imageSrc`.

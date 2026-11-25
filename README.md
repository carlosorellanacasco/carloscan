# WESCAN NIGHT SHIFT v2

PWA personal para verificar órdenes: foto del invoice → OCR → líneas, escaneo de cajas → conteo, revisión final con bloqueo de pendientes.

- `app/` es todo lo que se publica (sitio estático, ~12 MB, de los cuales 11 MB son el OCR y el escáner).
- Funciona 100 % sin conexión después de abrirla una vez con internet: Tesseract.js 6, el idioma `eng` y ZXing (escáner) están alojados en `app/vendor/` y precacheados por `sw.js`.
- Datos en IndexedDB `WescanNightShift` del teléfono. Respaldo JSON automático al finalizar cada orden. Importa el respaldo de la app vieja (mismo formato de productos).

## Probar en la PC
```
python -m http.server 8766 --directory app
```
Abrir http://localhost:8766

## Publicar una actualización
Cambiar `VERSION` en `app/sw.js` solo si cambian archivos de `app/vendor/` (el resto se actualiza solo: red primero).

## Reglas de coincidencia
- **OK**: el código escaneado es igual (sin guiones ni espacios) al del invoice, o a un alias confirmado en la biblioteca → suma.
- **POSIBLE**: se parece (confusión típica del OCR O/0, I/1, S/5…, una letra de diferencia, código contenido en otro, o alias marcado como posible) → no suma hasta que tocas "Sí, es este".
- **EXTRA**: no aparece → queda registrado y bloquea el cierre hasta marcarlo revisado.
- No se puede finalizar con líneas pendientes, incompletas o excedidas sin anotar la diferencia.

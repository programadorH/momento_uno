# Simulador de Inicio de Sesión — momento_uno

Repositorio: [github.com/programadorH/momento_uno](https://github.com/programadorH/momento_uno)

## Descripción
Simulador de un proceso de autenticación (login) construido en JavaScript puro, ejecutado desde la consola del navegador. El usuario dispone de un máximo de **3 intentos** para ingresar credenciales correctas mediante `prompt()`; el programa valida cada intento y responde con un mensaje de bienvenida o de bloqueo según corresponda.

El ejercicio se resolvió **dos veces con lógicas de control distintas**, con el fin de comparar dos formas válidas de resolver el mismo problema:

| Carpeta | Ciclo utilizado | Condición de salida |
|---|---|---|
| `while/` | `while` | Bandera booleana (`accesoConcedido`) + límite de intentos |
| `for/` | `for` | Contador acotado (`i <= INTENTOS_MAXIMOS`) + `break` al acertar |

## Propósito
Aplicar de forma práctica los fundamentos de lógica de programación en JavaScript: variables, condicionales, ciclos, funciones y modularización con `import`/`export`, dentro de un caso de uso realista (control de acceso).

## Planteamiento del ejercicio
> Crear uno o varios archivos `.js` que, al ejecutarse en la consola del navegador, simulen un proceso de inicio de sesión.

**Requerimientos lógicos:**
1. Usuario y contraseña correctos "quemados" (hardcoded) con `const`.
2. Captura de credenciales con `prompt()`.
3. Máximo 3 intentos, controlados con un ciclo (`while` o `for`).
4. Validación con condicionales:
   - Credenciales correctas → termina el ciclo y muestra mensaje de bienvenida.
   - Credenciales incorrectas con intentos restantes → informa el intento actual y vuelve a pedir datos.
   - Intentos agotados → termina el ciclo y muestra mensaje de bloqueo.
5. Toda la lógica encapsulada en una función (`validarAcceso`), invocada al final del archivo.

**Criterios de logro:**
- Ejecuta sin errores en consola.
- Pide correctamente usuario y contraseña.
- Valida con `===`.
- Gestiona correctamente los 3 intentos.
- Muestra el mensaje correspondiente (bienvenida o bloqueo).
- Código organizado en, al menos, una función.

## Estructura del proyecto
```
momento_uno/
├── while/
│   ├── index.html
│   ├── main.js
│   └── validar.js
│
└── for/
    ├── index.html
    ├── main.js
    └── function.js
```

## Descripción de las soluciones

### 🔄 Solución con `while` (`while/`)
`main.js` controla el flujo con una bandera booleana `accesoConcedido` y un contador `intentosActuales`. El ciclo se repite **mientras** no se agoten los intentos **y** el acceso no haya sido concedido:

```js
while (intentosActuales < INTENTOS_MAXIMOS && !accesoConcedido) {
  intentosActuales++;
  // pedir credenciales y validar
}
```

La validación (`validar`) y el mensaje (`mensaje`) están modularizados en `validar.js` e importados en `main.js` mediante `import { validar, mensaje } from "./validar.js"`. Credenciales configuradas: `admin` / `abc123`.

Se eligió `while` porque la condición de salida depende de **dos variables que cambian dentro del propio ciclo** (el conteo de intentos y el resultado de la validación), no de un rango fijo conocido de antemano — el caso de uso típico para este tipo de ciclo.

### 🔁 Solución con `for` (`for/`)
`main.js` controla el flujo con un ciclo `for` acotado al número máximo de intentos, y usa `break` para salir en cuanto el acceso es válido:

```js
for (let i = 1; i <= INTENTOS_MAXIMOS; i++) {
  // pedir credenciales y validar
  if (usuarioCorrecto) break;
}
```

La validación y el mensaje están modularizados en `function.js`, con la misma firma de funciones que `validar.js`. Credenciales configuradas: `admin` / `123456`.

Se eligió `for` porque el número de repeticiones tiene un **límite superior conocido y fijo** (3 intentos), el escenario clásico para este tipo de ciclo; el `break` maneja la salida anticipada cuando el acceso es exitoso.

## Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Documento HTML mínimo; carga `main.js` como módulo ES (`type="module"`), lo que habilita el uso de `import`/`export` entre archivos. |
| `main.js` | Orquesta el flujo: define las credenciales correctas (`const`), controla el ciclo de intentos, captura los datos con `prompt()` e invoca las funciones del módulo de validación. |
| `validar.js` / `function.js` | Módulo con dos responsabilidades separadas: `validar()` (lógica pura, sin efectos secundarios, retorna un booleano) y `mensaje()` (efecto secundario: muestra el resultado con `alert()` según el estado del intento). |

## Herramientas involucradas
- **HTML** — punto de entrada y carga de módulos.
- **JavaScript (ES Modules)** — lógica de control, validación y manejo de la interacción con el usuario (`prompt`, `alert`, `console`).
- **Visual Studio Code (VS Code)** — entorno de desarrollo.

## Comparación técnica: `while` vs `for`

| Criterio | `while` | `for` |
|---|---|---|
| Legibilidad de la condición de salida | Requiere leer una variable externa (`accesoConcedido`) declarada antes del ciclo | La condición de parada es explícita y visible en la cabecera del ciclo |
| Control del conteo de intentos | Manual (`intentosActuales++` dentro del cuerpo) | Automático, parte de la sintaxis del `for` |
| Salida anticipada al validar con éxito | Implícita, vía la bandera `!accesoConcedido` en la condición | Explícita, vía `break` |
| Cuándo conviene usarlo | El número de iteraciones no se conoce de antemano o depende de una condición externa | El número de iteraciones es fijo y conocido desde el inicio |

Ambas soluciones son funcionalmente equivalentes y cumplen los mismos criterios de logro; la diferencia es de **estilo y adecuación semántica** del ciclo elegido al problema, no de resultado.

## Cómo ejecutar
1. Clona el repositorio:
   ```bash
   git clone https://github.com/programadorH/momento_uno.git
   ```
2. Entra a la carpeta de la solución que quieras probar (`while/` o `for/`).
3. Abre `index.html` en el navegador (recomendado usar la extensión **Live Server** de VS Code, necesaria para que los módulos ES —`import`/`export`— carguen correctamente vía HTTP en lugar de `file://`).
4. Abre la consola del navegador (F12) para ver los mensajes por `console.log`, y responde a los `prompt()`/`alert()` que aparecen en pantalla.

**Credenciales de prueba:**
- `while/`: usuario `admin`, contraseña `abc123`
- `for/`: usuario `admin`, contraseña `123456`

## Autor
[programadorH](https://github.com/programadorH) — Programador junior en formación 
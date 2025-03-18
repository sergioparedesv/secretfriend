# Proyecto: Amigo Secreto 🎁

Este es un proyecto simple y divertido para organizar un sorteo de "Amigo Secreto". Permite a los usuarios agregar nombres de amigos, eliminarlos si es necesario, y realizar un sorteo aleatorio para asignar un amigo secreto a cada participante.

---

## 🚀 Cómo funciona

El proyecto consta de tres partes principales:

1. **Interfaz de usuario**: Una página web donde los usuarios pueden agregar nombres, ver la lista de amigos y realizar el sorteo.
2. **Lógica en JavaScript**: Un script que maneja la lista de amigos, la validación de entradas y el sorteo.
3. **Persistencia de datos**: Los nombres de los amigos se guardan en el `localStorage` del navegador, por lo que la lista persiste incluso si se recarga la página.

---

## 🛠️ Instalación y uso

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   cd amigo-secreto

   Abre el proyecto:

Abre el archivo index.html en tu navegador.

Agrega amigos:

Escribe el nombre de un amigo en el campo de texto y haz clic en "Añadir".

Los nombres se mostrarán en una lista debajo.

Elimina amigos:

Si deseas eliminar un nombre de la lista, haz clic en el botón "❌" junto al nombre.

Realiza el sorteo:

Cuando estés listo, haz clic en "Sortear amigo" para asignar un amigo secreto al azar.

El resultado se mostrará en la parte inferior de la página.

amigo-secreto/
├── index.html          # Archivo principal de la interfaz
├── style.css           # Estilos CSS para la página
├── app.js              # Lógica del proyecto en JavaScript
├── assets/             # Carpeta para imágenes y otros recursos
│   └── amigo-secreto.png
└── README.md           # Este archivo

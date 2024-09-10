import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);

  const menuCelular = () => {
    setEstaAbierto(!estaAbierto);
  };

  return (
    <nav className="bg-black text-white py-4">
      {/* Barra de navegación con fondo negro, texto blanco y padding vertical de 4 */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Contenedor principal con ancho máximo automático, flex para alinear elementos y justificar entre ellos */}
        {/* Logo */}
        <div className="text-2xl font-bold text-cyan-400">
          {/* Texto grande (2xl), negrita y color cian */}
          MyLogo
        </div>
        {/* Botones */}
        <div className="hidden space-x-4 md:flex">
          {/* Oculto en móviles, espacio entre elementos de 4, visible y flex en pantallas medianas y grandes */}
          {['Inicio', 'Servicios', 'Nosotros', 'PQR', 'Contacto', 'Ubicacion'].map((item) => (
            <button key={item} className="px-3 py-1 text-white transition-colors duration-300 ease-in-out hover:bg-cyan-400 hover:text-black rounded">
              {/* Botones con padding horizontal 3 y vertical 1, texto blanco, transición de colores suave, 
                  al pasar el mouse cambia a fondo cian y texto negro, bordes redondeados */}
              {item}
            </button>
          ))}
        </div>
        {/* Usuario */}
        <div className="hidden p-2 text-2xl border border-cyan-400 rounded-full md:flex">
          {/* Icono de usuario oculto en móviles, visible en pantallas medianas y grandes, 
              con borde cian y forma circular */}
          <i className="fa-solid fa-user text-cyan-400"></i>
        </div>
        {/* Menu hamburguesa para celular */}
        <div className="text-2xl md:hidden">
          {/* Visible solo en móviles, oculto en pantallas medianas y grandes */}
          <button onClick={menuCelular}>
            <i className="fa-solid fa-bars text-cyan-400"></i>
            {/* Icono de menú hamburguesa en color cian */}
          </button>
        </div>

        {estaAbierto && (
          <div className="absolute left-0 w-full text-center bg-black md:hidden top-16">
            {/* Menú desplegable para móviles, posición absoluta, ancho completo, 
                centrado, fondo negro, oculto en pantallas medianas y grandes */}
            {['Inicio', 'Servicios', 'Nosotros', 'PQR', 'Contacto', 'Ubicacion'].map((item) => (
              <button key={item} className="block w-full p-3 hover:bg-cyan-400 hover:text-black transition-colors duration-300 ease-in-out">
                {/* Botones del menú móvil, ancho completo, padding 3, 
                    al pasar el mouse cambia a fondo cian y texto negro con transición suave */}
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  
};

export default Navbar;
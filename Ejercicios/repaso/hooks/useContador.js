// Importamos los hooks necesarios de React
import { useEffect, useState } from "react";

// Definimos y exportamos el hook personalizado useContador
export const useContador = () => {
  // Definimos un título constante
  const title = "Vite + React";
  
  // Creamos dos estados: contador1 y contador5, ambos inicializados en 0
  const [contador1, setContador1] = useState(0);
  const [contador5, setContador5] = useState(0);

  // Efecto que se ejecuta cada vez que contador1 cambia
  // Actualiza contador5 para que siempre tenga el mismo valor que contador1
  useEffect(() => {
    setContador5(contador1);
  }, [contador1]);

  // Función para restar al contador
  // Recibe la función para actualizar, el valor actual y la cantidad a restar
  const restarContador = (actualizar, leer, numero) => {
    actualizar(leer - numero);
  };

  // Función para sumar al contador
  // Recibe la función para actualizar, el valor actual y la cantidad a sumar
  const sumarContador = (actualizar, leer, numero) => {
    actualizar(leer + numero);
  };

  // Retornamos un objeto con todos los valores y funciones que queremos exponer
  return {
    title,
    contador1,
    contador5,
    restarContador,
    sumarContador,
    setContador1,
    setContador5,
  };
};
export default useContador;
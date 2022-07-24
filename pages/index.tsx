import type { NextPage } from "next";
import ConfigTyping from "@molecules/ConfigTyping";

const Home: NextPage = () => {
  return (
    <div>
      <div className="  flex justify-around mt-20  relative">
        <div className="max-w-2xl text-center   ">
          <p className="text-5xl  font-bold  ">
            Bienvenido a esta prueba técnica la cual consta de un sistema de
            mecanografía
          </p>

          <p className="text-lg mt-4 ">
            Para comenzar la prueba primero elige la configuración deseada, en
            el panel de la derecha {`-->`}
          </p>


          <p className="text-2xl font-bold mt-10 mb-4 ">
            Puedes elegir entre uno de estos textos rapidos de ejemplo
          </p>

          <div className="flex gap-10">
            <p className="card w-96 bg-base-100 shadow-xl p-4">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
            <p className="card w-96 bg-base-100 shadow-xl p-4">Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices.</p>
          </div>
        </div>

        

        <div className="w-1/3 ">
          <ConfigTyping />
        </div>
      </div>
    </div>
  );
};

export default Home;

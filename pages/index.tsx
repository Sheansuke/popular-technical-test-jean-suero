import type { NextPage } from "next";
import ConfigTyping from "@molecules/ConfigTyping";

const Home: NextPage = () => {
  return (
    <div>
      <div className="  flex justify-around mt-20  relative">
        <div className="max-w-2xl text-center   ">
          <p className="text-5xl  ">
            Bienvenido a esta prueba técnica la cual consta de un sistema de
            mecanografía
          </p>

          <p className="text-lg mt-4 ">
            Para comenzar la prueba primero elige la configuración deseada, en
            el panel de la derecha {`-->`}
          </p>
        </div>

        <div className="w-1/3 ">
          <ConfigTyping />
        </div>
      </div>
    </div>
  );
};

export default Home;

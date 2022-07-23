import type { NextPage } from "next";
import ConfigTyping from "@molecules/ConfigTyping";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <div className="  flex justify-around mt-20  relative ">
        <div className="max-w-lg text-center">
          <p className="text-6xl">
            Bienvenido a esta prueba tecnica la cual consta de un sistema de
            mecanografia
          </p>

          <p className="text-lg mt-4">
            Para comenzar la prueba primero elige la configuracion deseada, en
            el panel de la derecha {`-->`}
          </p>
        </div>

        <div className="w-1/3">
          <ConfigTyping />
        </div>
      </div>
    </div>
  );
};

export default Home;

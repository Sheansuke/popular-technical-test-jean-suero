import { Keyboard } from "@organism/Keyboard";
import type { NextPage } from "next";

const TypingPage: NextPage = () => {
  return (
    <div className="grid  grid-cols-1 ">
      <p className="ml-10 text-xl">Tiempo: </p>
      <div className="flex justify-center h-80 items-center">
        <p>EL PEPES</p>
      </div>
      <div className="flex justify-center">
        <Keyboard />
      </div>
    </div>
  );
};

export default TypingPage;

import React, { FC } from "react";

interface ResultBoardProps {
  precision?: number;
  score?: number;
  totalTime?: string;
}

export const ResultBoard: FC<ResultBoardProps> = ({
  precision = 0,
  score = 0,
  totalTime = "0:00",
}) => {
  return (
    <div className="card modal modal-open  shadow-xl flex flex-col bg-base-100 justify-center items-center p-8 rounded-lg border-2 border-primary border-b-4">
      <h2 className="text-2xl mb-4">RESULTADOS</h2>

      {/* DETAILS */}
      <div className="text-center">
        <p className="text-xl p-1">Precisión: {precision}% </p>
        <p className="text-xl p-1">Puntuación: {score}</p>
        <p className="text-xl p-1">Tiempo total: {totalTime}</p>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col items-center mt-6">
        <button className="btn btn-secondary btn-outline ">Reiniciar prueba</button>
        <button className="btn btn-primary  m-2">Regresar a la pantalla principal</button>

      </div>
    </div>
  );
};

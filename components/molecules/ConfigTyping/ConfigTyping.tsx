import { InputRadio } from "@atoms/InputRadio";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface ConfigTypingProps {
  onDataSubmit?: (data: FormValues) => void;
}

export type FormValues = {
  wordsCount: string;
  paragraph: string;
  timerMinutes: string;
  customTimerMinutes: string;
  customParagraph: string;
};

export const ConfigTyping: FC<ConfigTypingProps> = ({ onDataSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      paragraph: "custom",
    },
  });

  const hasError = Boolean(Object.keys(errors)[0]);

  const onSubmit = (data: FormValues) => {
    onDataSubmit && onDataSubmit(data);
  };

  return (
    <div className="card   shadow-xl  bg-base-100 justify-center items-center p-8 rounded-lg border-2 border-primary border-b-4">
      {/* TITLE */}
      <h2 className="text-2xl text-secondary mb-4">
        Primero configuremos tu prueba
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className=" w-96 ">
        {/* PARAGRAPH */}
        <h2 className="text-xl text-center font-bold mb-1">
          ¿Qué tipo de párrafo quieres?
        </h2>
        <InputRadio
          label=" Párrafo aleatorio"
          value="random"
          rest={{ ...register("paragraph", { required: true }) }}
        />
        {watch("paragraph") === "random" && (
          <>
            <span>Cantidad de palabras a utilizar (mínimo: 5): </span>
            <input
              type="number"
              defaultValue="5"
              {...register("wordsCount", { required: true, min: 5 })}
              className="w-10 rounded-sm ml-2 mb-2"
            />
          </>
        )}

        <InputRadio
          label="Quiero usar mi propio párrafo"
          value="custom"
          rest={{ ...register("paragraph", { required: true }) }}
        />

        {watch("paragraph") === "custom" && (
          <div className="text-center  mt-2 ">
            <h2 className="text-lg font-bold">
              Escribe aquí el párrafo que quieres utilizar
            </h2>
            <textarea
              {...register("customParagraph", { required: true })}
              className="rounded-md w-full h-32"
            />
          </div>
        )}

        {/* TEMPORIZADOR */}
        <div className="mt-2">
          <h2 className="text-xl font-bold">Temporizador</h2>
          <InputRadio
            label="1 minuto"
            value="1"
            rest={{ ...register("timerMinutes", { required: true }) }}
          />
          <InputRadio
            label="2 minutos"
            value="2"
            rest={{ ...register("timerMinutes", { required: true }) }}
          />
          <InputRadio
            label="5 minutos"
            value="5"
            rest={{ ...register("timerMinutes", { required: true }) }}
          />

          <div className="flex">
            <InputRadio
              label="Personalizado"
              value="custom"
              rest={{ ...register("timerMinutes", { required: true }) }}
            />

            {watch("timerMinutes") === "custom" && (
              <input
                type="number"
                {...register("customTimerMinutes", { required: true })}
                className="w-10 rounded-sm ml-2"
              />
            )}
          </div>
        </div>
        {/* BUTTON */}
        <div className="text-center mt-2 ">
          <button type="submit" className="btn btn-primary ">
            Empezar
          </button>

          {hasError && (
            <p className="mt-2 text-error">
              Parece que te faltan algunos campos, revisa bien!
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

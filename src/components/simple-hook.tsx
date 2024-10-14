import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  primeiroCampo: string
  segundoCampo: string
}

const SimpleHook = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>()

  const [formDataShow, setFormDataShow] = useState({} as any)

  const onSubmit: SubmitHandler<Inputs> = (data) => setFormDataShow(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 w-[400px]">

        Diga alguma coisa
        <input className="border-2 rounded-lg py-2 pl-4"
          {...register("primeiroCampo")}
        />

        Smee! não deixe este campo em branco!
        <div className="flex flex-col">
          <input className="border-2 rounded-lg py-2 pl-4"
            {...register("segundoCampo", { required: true })}
          />
          {errors.segundoCampo &&
            <span className="text-xs text-red-600">
              Smee! Eu avisei para não deixar em branco!
            </span>}
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-200 mt-2 w-[50%] h-10 flex self-center items-center justify-center"
        >
          Ahoy Captain!
        </button>

        <hr className="my-4 border-2" />
        veja alguma coisa acontecer:
        <br />
        <span className="text-blue-600 pb-2 pl-4">
          {watch("primeiroCampo")}<br/>
          {watch("segundoCampo")}
        </span>

        os dados após o hook verificar que está tudo certo:<br />
        <span className="text-green-600 flex text-wrap">
          {JSON.stringify(formDataShow)}
        </span>

        mostra todos os valores<br />
        <span className="text-green-600 flex text-wrap">
          {JSON.stringify(getValues())}
        </span>

      </div>
    </form>
  )
}

export default SimpleHook
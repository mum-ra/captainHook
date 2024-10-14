import { useState } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { ShowCase } from "./showCase"

type Inputs = {
  primeiroCampo: string
  segundoCampo: string
}

const AdvancedHook = (): React.ReactElement => {
  const {
    handleSubmit,
    watch,
    control,
    getValues,
    formState: { errors }
  } = useForm<Inputs>()

  const [formDataShow, setFormDataShow] = useState({} as any)

  const onSubmit: SubmitHandler<Inputs> = (data) => setFormDataShow(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col  gap-2 w-[400px]">

        Diga alguma coisa
        <Controller
          name='primeiroCampo'
          control={control}
          render={({ field }) => <input {...field} className="border-2 rounded-lg py-2 pl-4" />}
        />

        Smee! não deixe este campo em branco!
        <div className="flex flex-col">
          <Controller
            name='segundoCampo'
            control={control}
            rules={{
              required: 'Smee! Eu avisei para não deixar em branco!'
            }}
            render={({ field, fieldState }) => <div className="w-full flex flex-col">
              <input {...field} className="border-2 rounded-lg py-2 pl-4" />
              {fieldState.error &&
                <span className="text-xs text-red-600">
                  {fieldState.error.message}
                </span>}
            </div>
            }
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-200 mt-2 w-[50%] h-10 flex self-center items-center justify-center"
        >
          Ahoy Captain!
        </button>

        <ShowCase {...{ watch, formDataShow, errors, getValues }} />

      </div>
    </form>
  )
}

export default AdvancedHook
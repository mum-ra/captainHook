// @ts-nocheck
import { useState } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { treasureChest, treasureMap } from "./components/componentMap"
import { ShowCase } from "../showCase"

type Inputs = {
  primeiroCampo: string
  segundoCampo: string
}

const DynamicHook = (): React.ReactElement => {
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

        {Object.keys(treasureMap).map(fieldName => (
          <Controller
            name={fieldName}
            rules={treasureMap[fieldName].rules}
            control={control}
            render={({ field, fieldState }) => treasureChest['input']({
              label: treasureMap[fieldName]?.label,
              ...field,
              ...treasureMap[fieldName]?.props,             
            }, fieldState)}
          />
        ))
        }
        {treasureChest['submit']}
        
        <ShowCase {...{ watch, formDataShow, errors, getValues }}/>

        </div>

    </form>
  )
}

export default DynamicHook
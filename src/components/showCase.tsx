import { ReactElement } from 'react'

export const ShowCase = ({watch,formDataShow,errors,getValues}:{watch:any,formDataShow:any,errors:any,getValues:any}):ReactElement => {
    return(<>
<hr className="my-4 border-2" />

veja alguma coisa acontecer:
<br />
<span className="text-blue-600 pb-2">
  {watch("primeiroCampo")}<br/>
  {watch("segundoCampo")}
</span>

os dados após o hook verificar que está tudo certo:<br />
<span className="text-green-600 flex text-wrap">
  {JSON.stringify(formDataShow)}
</span>

{Object.keys(errors).length > 0 && <>
  Eco do grito<br />
  <span className="text-red-600 flex text-wrap">
    {JSON.stringify(errors)}
  </span>
</>}

mostra todos os valores<br />
<span className="text-green-600 flex text-wrap">
  {JSON.stringify(getValues())}
</span>
</>
    )
}
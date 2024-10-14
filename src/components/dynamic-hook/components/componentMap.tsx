export const treasureMap = {
    primeiroCampo: {
        label: 'Diga alguma coisa',
        props: { "className": "border-2 rounded-lg py-2 pl-4"},
    },
    segundoCampo: {
        label: 'Smee! não deixe este campo em branco!',
        props: { "className": "border-2 rounded-lg py-2 pl-4"},
        rules:{
            required: 'Smee! Eu avisei para não deixar em branco!'
          }
    },
    terceiroCampo: {
        label: 'Smee! não deixe este campo em branco!',
        props: { "className": "border-2 rounded-lg py-2 pl-4"},
        rules:{
            required: 'Smee! Eu avisei para não deixar em branco!'
          }
    },
}


export const treasureChest= {
    input: (props: any, fieldState: any) => (
        <div className="w-full flex flex-col">
            {props.label}<br/>
            <input {...props} />
            {fieldState?.error &&
                <span className="text-xs text-red-600">
                    {fieldState?.error?.message}
                </span>}
        </div>
    ),
    submit: <button type='submit'
        className="rounded-lg bg-blue-200 mt-2 w-[50%] h-10 flex self-center items-center justify-center"
         >Ahoy Captain!</button>
}
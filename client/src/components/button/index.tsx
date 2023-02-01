import * as C from './styles'

type ButtonType = {
    text: string
    onclickHandle: ()=>void
    emphasis?: boolean
}

export const Button = ({text,onclickHandle, emphasis}: ButtonType)=>{
    return(
        <C.Button emphasis={emphasis} onClick={onclickHandle}>
            {text}
        </C.Button>
    )
}
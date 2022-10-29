import React, { useEffect } from "react";

interface Props {
    rank : number
}
// component to render the messege shows with rank
const RankMsg:React.FC<Props> = ({rank})=>{
    const [msg,setMsg]= React.useState<string>('');
    const onInit = ()=>{
        if(rank <=50){
            setMsg('good work ,, need to study more')
        }
        else if(rank > 50 && rank < 90) {
            setMsg('well done , but you can always do better')
        }
        else if(rank > 90) {
            setMsg('well done , this is a perfect score');
        }
    }
    useEffect(()=>{
        onInit();
    },[])
    return(
        <h6 className={rank >=50? 'text-success my-2' : 'text-danger my-2'}>{msg}</h6>
    )
}
export default RankMsg;
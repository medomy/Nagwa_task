import React from "react";
interface Props {
    rank : number
}
// component to show the rank percentage
const RankText:React.FC<Props> = ({rank})=>{
    return (
        <h5 className={rank >=50 ? 'text-success my-2' : 'text-danger my-2'}>{rank}% of people</h5>
    )
}

export default RankText;
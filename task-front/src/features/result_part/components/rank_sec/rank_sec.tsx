import React, { useState } from "react";
import useAppSelector from "../../../../hooks/useAppSelector";
import RankService from "../../services/rank_service";
import RankMsg from "../rank_msg/rank_msg";
import RankText from "../rank_text/rank_text";
import styles from './rank_sec.module.css'
interface Props {

}
const RankSec : React.FC<Props> = ()=>{
    const [rank,setRank] = useState<number>(0);
    const answers = useAppSelector((state)=> state.answers.answers);
    const userName = useAppSelector((state)=> state.user.userName);
    const onInit = async ()=>{
        try{
            console.log(answers);
            const _rank = await RankService.rankAnswers(answers);
            setRank(_rank);
        }catch(err){
            console.log(err);
        }
    }
    React.useEffect(()=>{
        onInit();
    },[])
    return(
        <div className={styles.rank_sec}>
            <h4 className="my-3">{userName},You are ranked more than...</h4>
            <RankText rank={rank}/>
            <RankMsg rank={rank}/>
        </div>
    )
}
export default RankSec;
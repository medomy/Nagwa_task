import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppDispatch from "../../../../hooks/useAppDispatch";
import useAppSelector from "../../../../hooks/useAppSelector";
import { clearAnswers } from "../../../../store/reducers/answers/answers_reducer";
import RankService from "../../services/rank_service";
import RankMsg from "../rank_msg/rank_msg";
import RankText from "../rank_text/rank_text";
import styles from './rank_sec.module.css'
interface Props {

}
// component to show the rank and messeges and redo test button
const RankSec : React.FC<Props> = ()=>{
    const [rank,setRank] = useState<number>(0);
    const answers = useAppSelector((state)=> state.answers.answers);
    const userName = useAppSelector((state)=> state.user.userName);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    // function to do the request on initializing component
    const onInit = async ()=>{
        try{
            console.log(answers);
            const _rank = await RankService.rankAnswers(answers);
            setRank(_rank);
        }catch(err){
            console.log(err);
        }
    }
    // function to restart the test
    const redoTest =()=>{
        dispatch(clearAnswers());
        navigate('/test')
    }
    React.useEffect(()=>{
        onInit();
    },[])
    return(
        <div className={styles.rank_sec}>
            <h4 className="my-3">{userName},You are ranked more than...</h4>
            <RankText rank={rank}/>
            <RankMsg rank={rank}/>
            <button className="btn btn-success my-2 w-100" onClick={redoTest}>Redo test</button>
        </div>
    )
}
export default RankSec;
import React from 'react';
import ProgressBar from '../../../../components/progress_bar/progress_bar';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import { addAnswer } from '../../../../store/reducers/answers/answers_reducer';
import Word from '../../models/word';
import ButtonsWordsType from '../../models/wordTypes';
import QuestionsStore from '../../services/getQuestions';
import TypeButton from '../types_button/types_button';
import styles from './question_sec.module.css';
const QuestionsSec: React.FC = () => {
    const [isStarted, setIsStarted] = React.useState<boolean>(false);
    const [words, setWords] = React.useState<Word[]>([]);
    const [wordIndex, setWordIndex] = React.useState<number>(0);
    const [userMsg,setUserMsg] = React.useState<string | null>(null);
    const answers = useAppSelector((state) => state.answers.answers);
    const dispatch = useAppDispatch();
    const types: ButtonsWordsType[] = [{
        id: 1,
        type: 'noun'
    },
    {
        id: 2,
        type: 'verb'
    },
    {
        id: 3,
        type: 'adverb'
    },
    {
        id: 4,
        type: 'adjective'
    }]
    const recordAnswer = (type: string) => {
        dispatch(addAnswer(type === words[wordIndex].pos));
        type === words[wordIndex].pos ? setUserMsg('correct answer, vamos') : setUserMsg('wrong answer , focus');
        setWordIndex((i) => i += 1);
    }
    const start = async (): Promise<void> => {
        try {
            const _words = await QuestionsStore.getQuestions();
            setWords(_words);
            setIsStarted(true);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={`${styles.questions_sec}`}>
            {!isStarted ? <h3>Are you ready?</h3> : <h3>good luck</h3>}
            {!isStarted ? <button className={`${styles.start_btn} my-4`} onClick={start}>Let's go</button> : null}
            {isStarted ? <div className={`${styles.word_wrap} mt-4`}>
                <h5 className={styles.current_word}>current word: {words[wordIndex].word}</h5>
            </div> : null}
            {isStarted ? <div className='row justify-content-between mt-5'>
                {types.map((type) => {
                    return (
                        <div className='col-3' key={type.id}>
                            <TypeButton type={type.type} handleClick={recordAnswer} />
                        </div>
                    )
                })}
            </div> : null}
            {userMsg ? <p className={`${userMsg === 'correct answer, vamos' ? styles.correct_answer : styles.wrong_answer} my-3`}>{userMsg}</p> : null}
            {isStarted ? <div className='my-5'>
                <h6>your progress</h6>
                <div className='row my-2'>
                    <ProgressBar progress={wordIndex * 10} maxProgress={words.length * 10} minProgress={0} />
                </div>
            </div> : null}
        </div>
    )
}
export default QuestionsSec;
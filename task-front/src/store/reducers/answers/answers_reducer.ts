import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// use redux-toolkit to record all answers 
// Define a type for the slice state
interface AnswersStae {
    answers : boolean[]
}

// Define the initial state using that type
const initialState: AnswersStae = {
    answers: [],
}

export const answersSlice = createSlice({
    name: 'answers',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // add an answer true or false to the answers 
        addAnswer: (state, action: PayloadAction<boolean>) => {
            state.answers.push(action.payload);
        },
        // clear the answers array to restart the test
        clearAnswers: (state , action: PayloadAction<void>) =>{
            state.answers.splice(0,state.answers.length);
        }
    },
})

export const { addAnswer, clearAnswers } = answersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const answersShow = (state: RootState) => state.answers.answers

export default answersSlice.reducer
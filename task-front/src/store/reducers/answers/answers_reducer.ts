import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

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
        addAnswer: (state, action: PayloadAction<boolean>) => {
            state.answers.push(action.payload);
        },
    },
})

export const { addAnswer } = answersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const answersShow = (state: RootState) => state.answers.answers

export default answersSlice.reducer
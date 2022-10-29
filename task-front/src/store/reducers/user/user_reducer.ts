import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
// redux-toolkit for a global user throughout the application
// Define a type for the slice state
interface UserState {
    userName: string
}

// Define the initial state using that type
const initialState: UserState = {
    userName: "visitor",
}

export const UserSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // change userName globally
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        },
    },
})

export const { setUserName } = UserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const userName = (state: RootState) => state.user.userName

export default UserSlice.reducer
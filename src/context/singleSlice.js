import { createSlice } from '@reduxjs/toolkit'

export const singleSlice = createSlice({
    name: 'single',
    initialState: {
        value: JSON.parse(localStorage.getItem("single")) || []
    },
    reducers: {
        toggleSingle(state, { payload }) {
            let index = state.value.findIndex((el) => el.id === payload.id)
            if (index < 0) {
                state.value = [payload]
            } else {
                state.value = state.value.filter((el) => el.id !== payload.id)
            }
            localStorage.setItem("single", JSON.stringify(state.value))
        }
    },
})

export const { toggleSingle } = singleSlice.actions

export default singleSlice.reducer
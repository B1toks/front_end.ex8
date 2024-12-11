import { createSlice } from '@reduxjs/toolkit';

const clockSlice = createSlice({
  name: 'clock',
  initialState: { date: new Date().toLocaleTimeString() },
  reducers: {
    updateDate: (state) => {
      state.date = new Date().toLocaleTimeString();
    },
  },
});

export const { updateDate } = clockSlice.actions;
export const selectClockDate = (state) => state.clock.date;
export default clockSlice.reducer;

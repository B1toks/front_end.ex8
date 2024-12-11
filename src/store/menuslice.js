import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: { items: [] }, // Встановіть значення за замовчуванням
  reducers: {
    setMenuItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenuItems } = menuSlice.actions;
export const selectMenuItems = (state) => state.menu.items;
export default menuSlice.reducer;

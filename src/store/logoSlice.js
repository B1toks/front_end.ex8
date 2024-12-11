import { createSlice } from '@reduxjs/toolkit';

const logoSlice = createSlice({
  name: 'logo',
  initialState: { logoPath: '/default-logo.png' }, // Встановіть значення за замовчуванням
  reducers: {
    setLogoPath: (state, action) => {
      state.logoPath = action.payload;
    },
  },
});

export const { setLogoPath } = logoSlice.actions;
export const selectLogoPath = (state) => state.logo.logoPath;
export default logoSlice.reducer;

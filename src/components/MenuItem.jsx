import { setLogoPath } from './store/logoSlice';
import { setMenuItems } from './store/menuSlice';
import store from './store/store';

// Встановлення логотипу
store.dispatch(setLogoPath('/custom-logo.png'));

// Встановлення елементів меню
store.dispatch(setMenuItems(['Home', 'About', 'Contact']));

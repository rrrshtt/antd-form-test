import { configureStore } from '@reduxjs/toolkit';
import cityForm from '../features/cityForm/cityFormSlice';

export default configureStore({
  reducer: {
    cityForm: cityForm
  },
});

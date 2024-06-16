import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  'auth/registr',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', newUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    clearAuthHeader();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token);

    const response = await axios.get('users/current');
    return response.data;
  },
  {
    condition(_, thunkAPI) {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);

// user@user.mail
// serg@srg.mail
// Додайте у файл redux/auth/operations.js операції,
// оголошені за допомогою createAsyncThunk, для роботи з
// користувачем:

// register - для реєстрації нового користувача. Базовий тип
// екшену "auth/register". Використовується у
// компоненті RegistrationForm на сторінці реєстрації.
// login - для логіну існуючого користувача. Базовий
// тип екшену "auth/login". Використовується у компоненті
//  LoginForm на сторінці логіну.
// logout - для виходу з додатка. Базовий тип екшену
// "auth/logout". Використовується у компоненті UserMenu у
// шапці додатку.
// refreshUser - оновлення користувача за токеном.
// Базовий тип екшену "auth/refresh". Використовується у
// компоненті App під час його монтування.

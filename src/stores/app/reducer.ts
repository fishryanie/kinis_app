import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Appearance, ColorSchemeName} from 'react-native';
import {PersistConfig, persistReducer} from 'redux-persist';
import storagePersist from 'utils/storagePersist';

type AppState = {
  deviceToken?: string;
  isReadyNavigate: boolean;
  isShowSelectCodePush: boolean;
  colorScheme: ColorSchemeName;
};

const initialState: AppState = {
  isReadyNavigate: false,
  isShowSelectCodePush: false,
  colorScheme: Appearance.getColorScheme(),
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    onSaveDeviceToken: (state, action: PayloadAction<AppState['deviceToken']>) => {
      state.deviceToken = action.payload;
    },
    onReadyNavigate: (state, action: PayloadAction<AppState['isReadyNavigate']>) => {
      state.isReadyNavigate = action.payload;
    },
    onToggleColorMode: (state, action: PayloadAction<AppState['colorScheme']>) => {
      state.colorScheme = action.payload;
    },
    onToggleSelectCodePush: (state, action: PayloadAction<AppState['isShowSelectCodePush']>) => {
      state.isShowSelectCodePush = action.payload;
    },
  },
});

export const {onReadyNavigate, onToggleSelectCodePush, onToggleColorMode, onSaveDeviceToken} = slice.actions;

const persistConfig: PersistConfig<AppState> = {
  key: 'app',
  storage: storagePersist,
  whitelist: ['colorScheme'],
};

export default persistReducer(persistConfig, slice.reducer);

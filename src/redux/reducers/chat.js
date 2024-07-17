import { createSlice } from "@reduxjs/toolkit";
import { getOrSaveFromLocalStorage } from "../../components/features/features";
import { NEW_MESSAGE_ALERT, NEW_REQUEST } from "../../constants/events";

const initialState = {
  notificationCount:
    getOrSaveFromLocalStorage({ key: NEW_REQUEST, get: true }) || 0,
  newMessageAlert:
    getOrSaveFromLocalStorage({ key: NEW_MESSAGE_ALERT, get: true }) || [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    incrementNotification: (state) => {
      state.notificationCount += 1;
    },
    resetNotificationCount: (state) => {
      state.notificationCount = 0;
    },
    setNewMessageAlert: (state, action) => {
      const index = state.newMessageAlert.findIndex(
        (item) => item.chatId === action.payload.chatId
      );
      if (index !== -1) {
        state.newMessageAlert[index].count =
          state.newMessageAlert[index].count + 1;
      } else {
        state.newMessageAlert.push({
          chatId: action.payload.chatId,
          count: 1,
        });
      }
    },
    removeNewMessageAlert: (state, action) => {
      state.newMessageAlert = state.newMessageAlert.filter(
        (item) => item.chatId !== action.payload
      );
    },
  },
});

export const {
  incrementNotification,
  resetNotificationCount,
  setNewMessageAlert,
  removeNewMessageAlert,
} = chatSlice.actions;
export default chatSlice;

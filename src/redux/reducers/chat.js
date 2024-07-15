import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationCount: 0,
  newMessageAlert: [
  ],
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
        state.newMessageAlert[index].count = state.newMessageAlert[index].count + 1;
      } else {
        state.newMessageAlert.push({
          chatId: action.payload.chatId,
          count: 1,
        });
      }
    },
  },
});

export const {
  incrementNotification,
  resetNotificationCount,
  setNewMessageAlert,
} = chatSlice.actions;
export default chatSlice;

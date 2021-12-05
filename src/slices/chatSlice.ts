import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

// model
import { ActionTypeModel } from "../models/ActionModel";
import { ChatModel, MessageModel } from "../models/ChatModel";

const initialStateChat: ChatModel = {
  chatHitoshi: [],
  chatMasatoshi: [],
};

export const chatSlice = createSlice({
  name: "chatHitoshi",
  initialState: initialStateChat,
  reducers: {
    submitHitoshi: (
      state: ChatModel,
      action: ActionTypeModel<MessageModel>
    ) => {
      state.chatHitoshi.push(action.payload.message);
    },
    submitMasatoshi: (
      state: ChatModel,
      action: ActionTypeModel<MessageModel>
    ) => {
      state.chatMasatoshi.push(action.payload.message);
    },
  },
});

export const { submitHitoshi, submitMasatoshi } = chatSlice.actions;
export const selectChatHitoshi = (state: RootState) => state.chat.chatHitoshi;
export const selectChatMasatoshi = (state: RootState) =>
  state.chat.chatMasatoshi;
export default chatSlice.reducer;

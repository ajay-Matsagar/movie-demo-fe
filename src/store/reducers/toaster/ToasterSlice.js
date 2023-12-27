import { createSlice } from "@reduxjs/toolkit";

export const toasterKey = "TOASTER";

const toasterSlice = createSlice({
  name: toasterKey,
  initialState: {
    isOpen: false,
    message: "",
    severity: "info",
    anchorOrigin: { vertical: "top", horizontal: "right" },
    autoHideDuration: 6000,
  },
  reducers: {
    setToaster: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message || "";
      state.severity = action.payload.severity || "info";
      state.anchorOrigin = action.payload.anchorOrigin || {
        vertical: "top",
        horizontal: "right",
      };
      state.autoHideDuration =
        action.payload.autoHideDuration || state.autoHideDuration;
    },
  },
});

export const { setToaster } = toasterSlice.actions;
export default toasterSlice.reducer;

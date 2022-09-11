import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    colors: [
      { name: "red", code: "#fca5a5" },
      { name: "orange", code: "#fdba74" },
      { name: "yellow ", code: "#fde047" },
      { name: "green", code: "#86efac" },
      { name: "blue", code: "#93c5fd" },
      { name: "purple", code: "#d8b4fe" },
      { name: "pink", code: "#f9a8d4" },
      { name: "gray", code: "#d1d5db" },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
    deleteNote: (state, action) => {
      state.items = state.items.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.items));
    },
    getNotes: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const selectNotes = (state) => state.notes.items;
export const selectColors = (state) => state.notes.colors;
export const { addNote, deleteNote, getNotes } = notesSlice.actions;
export default notesSlice.reducer;

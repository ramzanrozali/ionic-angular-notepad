import * as fromNote from '../actions/note.actions';
import { Note } from '../interfaces/note';
export interface NoteState {
  data: Note[];
}
export const initialState: NoteState = {
  data: [],
};

export function reducer(
  state = initialState,
  action: fromNote.ActionsUnion
): NoteState {
  switch (action.type) {
    case fromNote.ActionTypes.CreateNote: {
      return {
        ...state,
        data: [...state.data, action.payload.note],
        /* create a new array and add all of the elements contained in the data array to this array,
        and then add action.payload.note as another element in the array.
        To simplify even further, let's pretend that we are just dealing with numbers here.
        If state.data was the array [1, 2, 3] and action.payload.note was the number 7,
        then the code above would create this array: [1, 2, 3, 7];
        */
      };
    }
    case fromNote.ActionTypes.DeleteNote: {
      const newState = [...state.data];
      newState.splice(state.data.indexOf(action.payload.note), 1);
      return {
        data: newState
      };
    }
    default: {
      return state;
    }
  }
}

export const getNotes = (state: NoteState) => state?.data;
export const getNoteById = (state: NoteState, props: { id: string }) =>
  state.data.find((note) => note.id === props.id);

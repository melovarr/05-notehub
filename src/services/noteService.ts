import axios from 'axios';
import type { NewNoteData, Note } from '../types/note';

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';

const myKey = import.meta.env.VITE_NOTEHUB_TOKEN;
if (!myKey) {
  throw new Error('TOKEN IS MISSING');
}

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesParams {
  search?: string;
  page?: number;
  perPage?: number;
}

//AXIOS DEFAULTS
const axiosInstance = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${myKey}`,
  },
});

//GET
export async function fetchNotes(
  query: string,
  page: number
): Promise<FetchNotesResponse> {
  const params: FetchNotesParams = {
    ...(query.trim() !== '' && { search: query.trim() }),
    page: page,
    perPage: 12,
  };

  const response = await axiosInstance.get<FetchNotesResponse>('/notes', {
    params,
  });
  return response.data;
}

//POST
export async function createNote(newNote: NewNoteData): Promise<Note> {
  const response = await axiosInstance.post<Note>('/notes', newNote);
  return response.data;
}

//DELETE
export async function deleteNote(noteId: number): Promise<Note> {
  const response = await axiosInstance.delete<Note>(`/notes/${noteId}`);
  return response.data;
}

// interface NotesHttpResponse {
//   results: Note[];

// }

// export const getNotes = async (searchQuery: string) => {
//   const res = await axios.get<NotesHttpResponse>('/notes', {
//     headers: { Authorization: `Bearer ${myKey}` },
//   });
//   return res.data;
// };

// export const deleteNote = async (noteId: string) => {
//   const res = await axios.delete(`/tasks/${noteId}`);
//   return res.data;
// };

// export const addNote = async (noteData: NewNoteData) => {
//   const res = await axios.post<Note>('/notes', noteData);
//   return res.data;
// };

// export const updateNote = async (updatedNote: NoteUpdateData) => {
//   const res = await axios.put<Note>(`/notes/${updatedNote.id}`, updatedNote);
//   return res.data;
// };

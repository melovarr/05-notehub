// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { NoteUpdateData } from '../types/note';
// import { updateNote } from '../services/noteService';
export type Tag = 'Work' | 'Personal' | 'Meeting' | 'Shoping' | 'Todo';

export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: Tag;
}

export interface NewNoteData {
  title: string;
  content: string;
  tag: Tag;
}

// export const useUpdateNote = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (updatedNote: NoteUpdateData) => updateNote(updatedNote),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['notes'] });
//     },
//   });
// };

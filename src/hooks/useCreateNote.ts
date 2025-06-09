import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addNote } from '../services/noteService';
import { NewNoteData } from '../types/note';

export const useCreateNote = (onSuccess: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noteData: NewNoteData) => addNote(noteData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      onSuccess();
    },
  });
};

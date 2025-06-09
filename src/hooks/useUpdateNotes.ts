import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NoteUpdateData } from '../types/note';
import { updateNote } from '../services/noteService';

export const useUpdateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedNote: NoteUpdateData) => updateNote(updatedNote),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });
};

import { useQuery } from '@tanstack/react-query';
import { getNotes } from '../services/noteService';

export const useNotes = (query: string) => {
  return useQuery({
    queryKey: ['notes', query],
    queryFn: () => getNotes(query),
  });
};

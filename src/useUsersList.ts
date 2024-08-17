// useUsersList.ts
import { useQuery, UseQueryResult } from 'react-query';
import { getUsersList } from './service';
import { UserEntity } from './userEntity';

// Hook for fetching a list of users
export const useUsersList = (): UseQueryResult<UserEntity[], Error> => {
  return useQuery('users', getUsersList, {
    staleTime: 60000,
    onError: (error: Error) => {
      console.error('Failed to fetch users:', error);
    },
  });
};

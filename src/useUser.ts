import { useQuery, UseQueryResult } from 'react-query';
import { getUser } from './service';
import { UserEntity } from './userEntity';

// Simplify by not extending or omitting anything, just define what you return
interface UseUserResult {
  user: UserEntity | undefined;
  error: Error | null;
  isLoading: boolean;
}

export const useUser = (userId: number): UseUserResult => {
  const { data, error, isLoading } = useQuery<UserEntity, Error>(['user', userId], () => getUser(userId), {
    staleTime: 60000,
    onError: (error: Error) => {
      console.error('Failed to fetch user:', error);
    },
  });

  // Make sure the return explicitly matches UseUserResult
  return {
    user: data,       // rename 'data' to 'entity'
    error: error,       // pass error as is
    isLoading: isLoading // pass isLoading as is
  };
};
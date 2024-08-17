// service.ts
import { getRequest } from './apiClient';
import { UserDTO, UsersListDTO } from './apiClient';
import { UserEntity, mapUserDTOToEntity, mapUsersDTOToEntity } from './userEntity';

// Service to fetch and transform a single user
export const getUser = async (userId: number): Promise<UserEntity> => {
  const userDTO = await getRequest<UserDTO>(`/users/${userId}`);
  return mapUserDTOToEntity(userDTO);
};

// Service to fetch and transform a list of users
export const getUsersList = async (): Promise<UserEntity[]> => {
  const usersDTO = await getRequest<UserDTO[]>('/users');

  // Check for undefined or an empty array
  if (!usersDTO || usersDTO.length === 0) {
    console.log('No users found or invalid response');
    return [];
  }

  return mapUsersDTOToEntity(usersDTO);
};
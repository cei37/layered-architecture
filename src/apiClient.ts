// apiClient.ts
import axios, { AxiosResponse } from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:5000',
});

// DTOs for a single user and a list of users
export interface UserDTO {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
}

export interface UsersListDTO {
  users: UserDTO[];
}

// Generic GET request method for single or multiple users
export const getRequest = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse<T> = await apiClient.get(url);
  return response.data;
};

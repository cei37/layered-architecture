// userEntity.ts

import { UserDTO } from "./apiClient";

// Entity for a single user
export class UserEntity {
    constructor(
      public id: number,
      public fullName: string,
      public email: string,
      public isAdmin: boolean
    ) {}
  
    // Example business logic method
    isSuperAdmin(): boolean {
      return this.isAdmin && this.email.includes('@admin.com');
    }
  }
  
  // Utility function to map DTO to Entity for a single user
  export const mapUserDTOToEntity = (userDTO: UserDTO): UserEntity => {
    return new UserEntity(
      userDTO.id,
      `${userDTO.firstName} ${userDTO.lastName}`,
      userDTO.email,
      userDTO.roles.includes('admin')
    );
  };
  
  // Utility function to map DTO to Entity for a list of users
  export const mapUsersDTOToEntity = (usersDTO: UserDTO[]): UserEntity[] => {
    return usersDTO.map(userDTO => mapUserDTOToEntity(userDTO));
  };
  
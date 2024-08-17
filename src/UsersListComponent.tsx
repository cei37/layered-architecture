// UsersListComponent.tsx
import React from 'react';
import { useUsersList } from './useUsersList';

const UsersListComponent: React.FC = () => {
  const { data, error, isLoading } = useUsersList();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Users List</h1>
      {data?.map((user) => (
        <div key={user.id}>
          <h2>{user.fullName}</h2>
          <p>Email: {user.email}</p>
          <p>Admin: {user.isAdmin ? 'Yes' : 'No'}</p>
          <p>Super Admin: {user.isSuperAdmin() ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersListComponent;

// UserComponent.tsx
import React from 'react';
import { useUser } from './useUser';

interface UserComponentProps {
  userId: number;
}

const UserComponent = ({ userId }: UserComponentProps) => {
  const { user, error, isLoading } = useUser(userId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{user?.fullName}</h1>
      <p>Email: {user?.email}</p>
      <p>Admin: {user?.isAdmin ? 'Yes' : 'No'}</p>
      <p>Super Admin: {user?.isSuperAdmin() ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default UserComponent;

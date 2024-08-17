import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersListComponent from './UsersListComponent';
import UserComponent from './UserComponent';

function App() {
  return (
    <div className="App">
      <UserComponent userId={1} />
      <UserComponent userId={2} />
      <UserComponent userId={3} />
      ======== Calling again ======== 
      <UserComponent userId={1} />
      <UserComponent userId={2} />
      <UserComponent userId={3} />
      ======== Calling again ======== 
      <UsersListComponent></UsersListComponent>
      <UsersListComponent></UsersListComponent>
    </div>
  );
}

export default App;

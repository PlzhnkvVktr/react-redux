import React, { useEffect, useState } from 'react';
import './styles/App.scss';
import { AppRouter } from './components/AppRouter/AppRouter';
import { Header } from './components/Header/Header';
import { useTypedSelector } from './hooks/useTypedSelector';

export const App: React.FC = () => {
  const [owner, setOwner]: any = useState()
  const {users} = useTypedSelector(state => state.user)

  useEffect(() => {
    setOwner(JSON.parse(localStorage.getItem('token')!))
  }, [users])
  

  return (
    <div className="App">
      <Header owner={owner}/>
      <AppRouter owner={owner} />
    </div>
  );
}


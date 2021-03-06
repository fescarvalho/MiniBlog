


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //cleanup
  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  //register
  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      await updateProfile(user, {
        displayName: data.displayName,
      });
      setLoading(false);
      return user;
    } catch (err) {
      console.error(err.message);
      console.error(typeof err.message);

      let systemErrorMessage;
      if (err.message.includes('Password')) {
        systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres';
      } else if (err.message.includes('email-already')) {
        systemErrorMessage = 'Email ja cadastrado';
      } else {
        systemErrorMessage = 'Ocorreu um erro por favor, tente mais tarde';
      }
      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  //signOut
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  //login- sigIn
  const login = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(false);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (e) {
      let systemErrorMessage;
      if (e.message.includes('user-not-found')) {
        systemErrorMessage = 'Usuario não encontrado';
      } else if (e.message.includes('wrong-password')) {
        systemErrorMessage = 'Senha incorreta';
      } else {
        systemErrorMessage = 'Ocorreu um erro por favor, tente mais tarde';
      }
      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};

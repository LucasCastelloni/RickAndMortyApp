import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import LoadingSplash from './app/Components/LoadingSplash';
import Screens from './app/screens';
import {getUserData} from './redux/actions/user';
import {getFavorites} from './redux/actions/characters';

const App = ({dispatch, getUserLoading, isUserLogged}) => {
  useEffect(() => {
    dispatch(getFavorites());
    dispatch(getUserData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return getUserLoading ? (
    <LoadingSplash />
  ) : (
    <Screens isUserLogged={isUserLogged} />
  );
};

const mapStateToProps = store => {
  return {
    getUserLoading: store.user?.getUserLoading,
    isUserLogged: store.user?.isUserLogged,
  };
};

export default connect(mapStateToProps)(App);

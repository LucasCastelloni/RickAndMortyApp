import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

const PersonalInfo = ({user}) => {
  return (
    <View>
      <Text>{user.firstName}</Text>
    </View>
  );
};

const mapStateToProps = store => {
  return {
    user: store.user.user,
  };
};

export default connect(mapStateToProps)(PersonalInfo);

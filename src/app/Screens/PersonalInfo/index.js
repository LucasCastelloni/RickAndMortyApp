import React from 'react';
import {Image, View} from 'react-native';
import {connect} from 'react-redux';
import Label from '../../Components/Label';
import styles from './styles';
import {USER_DATA} from './utils';

const PersonalInfo = ({user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../Assets/images/profile-placeholder.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        {USER_DATA(user).map(item => (
          <View style={styles.item} key={item.id}>
            <Label style={styles.title}>{item.title}</Label>
            <View style={styles.hline} />
            <Label style={styles.info}>{item.info}</Label>
          </View>
        ))}
      </View>
    </View>
  );
};

const mapStateToProps = store => {
  return {
    user: store.user.user,
  };
};

export default connect(mapStateToProps)(PersonalInfo);

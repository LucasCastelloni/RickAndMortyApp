import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {connect} from 'react-redux';
import Label from '../../Components/Label';
import AddPhotoButton from './Components/AddPhotoButton';
import styles from './styles';
import {USER_DATA} from './utils';

const PersonalInfo = ({user}) => {
  const [imageSource, setImageSource] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../Assets/images/profile-placeholder.png')}
          style={styles.image}
        />
        <AddPhotoButton setImage={setImageSource} />
        {imageSource?.assets &&
          imageSource?.assets.map(({uri}) => (
            <View key={uri} style={styles.image}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={{width: 200, height: 200}}
                source={{uri: uri}}
              />
            </View>
          ))}
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

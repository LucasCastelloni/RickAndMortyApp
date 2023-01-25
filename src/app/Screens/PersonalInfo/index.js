import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import Colors from '../../../config/colors';
import CustomModal from '../../Components/CustomModal';
import Label from '../../Components/Label';
import styles from './styles';
import {PHOTO_BUTTONS, USER_DATA} from './utils';
import PlusIcon from '../../Assets/svg/plus-icon.svg';
const PersonalInfo = ({user}) => {
  const [imageSource, setImageSource] = useState(null);
  const [photoModalVisible, setPhotoModalVisible] = useState(false);
  const handleCloseModal = () => {
    setPhotoModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <CustomModal
        handleCloseModal={handleCloseModal}
        visible={photoModalVisible}
        title={'Agregá tu foto'}>
        {PHOTO_BUTTONS(setImageSource, handleCloseModal).map(button => (
          <TouchableOpacity onPress={button.onPress} style={styles.photoButton}>
            <button.icon width={20} height={20} fill={Colors.white} />
            <Label style={styles.photoLabel}>{button.label}</Label>
          </TouchableOpacity>
        ))}
      </CustomModal>
      <View style={styles.imageContainer}>
        {imageSource?.assets ? (
          <Image
            source={{uri: imageSource?.assets[0].uri}}
            style={styles.image}
          />
        ) : (
          <Image
            source={require('../../Assets/images/profile-placeholder.png')}
            style={styles.image}
          />
        )}
        <View>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              setPhotoModalVisible(true);
            }}>
            <PlusIcon height={22} width={22} stroke={Colors.white} />
          </TouchableOpacity>
        </View>
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

import React from 'react';
import {View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../../../../Components/CustomButton';
import styles from './styles';

const AddPhotoButton = ({setImage}) => {
  const handleOpenCamera = () => {
    launchCamera(
      {
        saveToPhotos: false,
        mediaType: 'photo',
        includeBase64: false,
      },
      setImage,
    );
  };

  const handleOpenGallery = () => {
    launchImageLibrary(
      {
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,
      },
      setImage,
    );
  };

  return (
    <View>
      <CustomButton
        label={'Agregar Foto'}
        onPress={() => {
          handleOpenCamera();
        }}
        containerStyle={styles.button}
      />
    </View>
  );
};

export default AddPhotoButton;

import i18next from 'i18next';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CameraIcon from '../../Assets/svg/camera-icon.svg';

import GalleryIcon from '../../Assets/svg/gallery-icon.svg';

export const USER_DATA = user => [
  {title: i18next.t('PersonalInfo:name'), info: user.firstName, id: 1},
  {title: i18next.t('PersonalInfo:lastName'), info: user.lastName, id: 2},
  {title: i18next.t('PersonalInfo:email'), info: user.email, id: 3},
];

export const PHOTO_BUTTONS = (setImageSource, handleCloseModal) => [
  {
    label: i18next.t('PersonalInfo:takePhoto'),
    icon: CameraIcon,
    onPress: () => {
      launchCamera(
        {
          saveToPhotos: false,
          mediaType: 'photo',
          includeBase64: false,
        },
        setImageSource,
      );
      handleCloseModal();
    },
    id: 1,
  },
  {
    label: i18next.t('PersonalInfo:pickFromGallery'),
    icon: GalleryIcon,
    onPress: () => {
      launchImageLibrary(
        {
          selectionLimit: 0,
          mediaType: 'photo',
          includeBase64: false,
        },
        setImageSource,
      );
      handleCloseModal();
    },
    id: 2,
  },
];

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CameraIcon from '../../Assets/svg/camera-icon.svg';

import GalleryIcon from '../../Assets/svg/gallery-icon.svg';

export const USER_DATA = user => [
  {title: 'Nombre', info: user.firstName, id: 1},
  {title: 'Apellido', info: user.lastName, id: 2},
  {title: 'Correo', info: user.email, id: 3},
];

export const PHOTO_BUTTONS = (setImageSource, handleCloseModal) => [
  {
    label: 'Tomar foto',
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
  },
  {
    label: 'Elegir de la galería',
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
  },
];

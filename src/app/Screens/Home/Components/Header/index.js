import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import i18next from 'i18next';
import Label from '../../../../Components/Label';
import styles from './styles';
import SpaceshipIcon from '../../../../Assets/svg/spaceship-icon.svg';
import CustomTextInput from '../../../../Components/CustomTextInput';
import SearchIcon from '../../../../Assets/svg/search-icon.svg';
import Colors from '../../../../../config/colors';
import {changeCharacterName} from '../../../../../redux/actions/characters';
import {useDispatch} from 'react-redux';
import FilterIcon from '../../../../Assets/svg/filter-icon.svg';
import CustomFilterModal from '../../../../Components/CustomFilterModal';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const onSubmitEditing = text => {
    dispatch(changeCharacterName(text));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        {/* <SpaceshipIcon width={25} height={25} /> */}
        <Label style={styles.label}>{i18next.t('Home:welcome')}</Label>
        <View style={styles.middleContainer}>
          <View style={styles.searchBar}>
            <CustomTextInput
              Icon={SearchIcon}
              iconProps={{fill: Colors.lighterGray}}
              placeholder={i18next.t('Home:search')}
              onSubmitEditing={({nativeEvent: {text}}) => onSubmitEditing(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              setShowModal(true);
            }}>
            <FilterIcon width={25} height={25} fill={Colors.white} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <CustomFilterModal
        visible={showModal}
        handleCloseModal={handleCloseModal}
      />
    </View>
  );
};

export default Header;

import React, {useRef, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Label from '../../../Label';
import DropdownList from '../DropdownList';
import styles from './styles';
import ChevronIcon from '../../../../Assets/svg/chevron-down-icon.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const FilterButton = ({
  label,
  options,
  filterValues,
  setFilterValues,
  type,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownButton = useRef();
  const [dropdownTop, setDropdownTop] = useState(0);

  const handleShowOptions = () => {
    dropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setShowOptions(true);
  };

  return (
    <View style={styles.optionContainer}>
      <Label style={styles.title}>{label}</Label>
      <TouchableOpacity
        style={styles.touchable}
        ref={dropdownButton}
        onPress={() => {
          handleShowOptions();
        }}>
        <Label style={styles.filterLabel}>{filterValues[type].label}</Label>
        <ChevronIcon fill={Colors.white} height={15} width={15} />
      </TouchableOpacity>
      <DropdownList
        visible={showOptions}
        setShowOptions={setShowOptions}
        dropdownTop={dropdownTop}
        options={options}
        setFilterValues={setFilterValues}
        type={type}
      />
    </View>
  );
};

export default FilterButton;

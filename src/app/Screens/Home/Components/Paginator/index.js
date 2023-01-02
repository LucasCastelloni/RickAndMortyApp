import React from 'react';
import {View} from 'react-native';
import Label from '../../../../Components/Label';
import PaginatorButton from '../PaginatorButton';
import FirsPageIcon from '../../../../Assets/svg/first-page-icon.svg';
import NextIcon from '../../../../Assets/svg/next-icon.svg';
import PrevIcon from '../../../../Assets/svg/prev-icon.svg';
import LastPageIcon from '../../../../Assets/svg/last-page-icon.svg';
import styles from './styles';
import {connect} from 'react-redux';
import {
  goToFirstPage,
  goToLastPage,
  goToNextCharacterPage,
  goToPreviousCharacterPage,
} from '../../../../../redux/actions/characters';

const Paginator = ({numberOfPages, page, dispatch}) => {
  const isLastPage = page === numberOfPages;
  const isFirsPage = page === 1;
  return (
    <View style={styles.container}>
      <PaginatorButton
        Icon={FirsPageIcon}
        disabled={isFirsPage}
        onPress={() => {
          dispatch(goToFirstPage());
        }}
      />
      <PaginatorButton
        Icon={PrevIcon}
        onPress={() => {
          dispatch(goToPreviousCharacterPage());
        }}
        disabled={isFirsPage}
      />
      <Label style={styles.label}>
        Página <Label style={styles.number}>{page}</Label> de{' '}
        <Label style={styles.number}>{numberOfPages}</Label>
      </Label>
      <PaginatorButton
        Icon={NextIcon}
        onPress={() => {
          dispatch(goToNextCharacterPage());
        }}
        disabled={isLastPage}
      />
      <PaginatorButton
        Icon={LastPageIcon}
        disabled={isLastPage}
        onPress={() => {
          dispatch(goToLastPage());
        }}
      />
    </View>
  );
};

const mapStateToProps = store => {
  return {
    numberOfPages: store.charactersByPage?.numberOfPages,
    page: store.charactersByPage.currentPage,
  };
};

export default connect(mapStateToProps)(Paginator);

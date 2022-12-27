import React from 'react';
import {View} from 'react-native';
import Label from '../../../../Components/Label';
import PaginatorButton from '../PaginatorButton';
import FirsPageIcon from '../../../../Assets/svg/first-page-icon.svg';
import NextIcon from '../../../../Assets/svg/next-icon.svg';
import PrevIcon from '../../../../Assets/svg/prev-icon.svg';
import LastPageIcon from '../../../../Assets/svg/last-page-icon.svg';

import styles from './styles';

const Paginator = ({
  page,
  nextPage,
  prevPage,
  numberOfPages,
  goToFirstPage,
  goToLastPage,
}) => {
  const isLastPage = page === numberOfPages;
  const isFirsPage = page === 1;
  return (
    <View style={styles.container}>
      <PaginatorButton
        Icon={FirsPageIcon}
        disabled={isFirsPage}
        onPress={goToFirstPage}
      />
      <PaginatorButton
        Icon={PrevIcon}
        onPress={prevPage}
        disabled={isFirsPage}
      />
      <Label style={styles.label}>
        Página <Label style={styles.number}>{page}</Label> de{' '}
        <Label style={styles.number}>{numberOfPages}</Label>
      </Label>
      <PaginatorButton
        Icon={NextIcon}
        onPress={nextPage}
        disabled={isLastPage}
      />
      <PaginatorButton
        Icon={LastPageIcon}
        disabled={isLastPage}
        onPress={goToLastPage}
      />
    </View>
  );
};

export default Paginator;

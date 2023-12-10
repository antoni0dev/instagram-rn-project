import {View, Image} from 'react-native';
import React, {FC} from 'react';
import styles from './FeedGridItem.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../theme/colors';

interface Props {
  item: Post;
}

const FeedGridItem: FC<Props> = ({item}) => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={{uri: item?.images?.[0] || item.image}}
        style={styles.image}
      />
      {item?.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={COLORS.white}
          style={styles.imageCollectionIcon}
        />
      )}
    </View>
  );
};

export default FeedGridItem;

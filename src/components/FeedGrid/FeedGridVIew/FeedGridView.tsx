import {FlatList} from 'react-native';
import React, {FC} from 'react';
import FeedGridItem from '../FeedGridItem/FeedGridItem';

interface FeedGridView {
  data: Post[];
  ListHeaderComponent: React.ReactElement;
  numOfColumns: number;
}

const FeedGridView: FC<FeedGridView> = ({
  data,
  ListHeaderComponent,
  numOfColumns,
}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedGridItem item={item} />}
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      numColumns={numOfColumns}
      style={{marginHorizontal: -1}}
    />
  );
};

export default FeedGridView;

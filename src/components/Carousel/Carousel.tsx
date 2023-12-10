import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  Pressable,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import styles from './Carousel.styles';

interface Props {
  images: string[];
  onPress: () => void;
}

const viewabilityConfig: ViewabilityConfig = {
  itemVisiblePercentThreshold: 51,
};

const Carousel: FC<Props> = ({images, onPress}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  console.log(activeImageIndex);
  const {width} = useWindowDimensions();

  const handleViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(Number(viewableItems[0].index));
      }
    },
  ).current;

  return (
    <View>
      <FlatList
        horizontal
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        data={images}
        renderItem={({item}) => (
          <Pressable onPress={onPress}>
            <Image
              source={{uri: item}}
              style={[styles.flatListItem, {width}]}
            />
          </Pressable>
        )}
        pagingEnabled
      />
      <View style={styles.dotsWrapper}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeImageIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

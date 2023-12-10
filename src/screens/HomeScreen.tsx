import {FlatList, ViewabilityConfig, ViewToken} from 'react-native';
import React, {useRef, useState} from 'react';
import posts from '../assets/data/posts.json';
import FeedPost from '../components/FeedPost/FeedPost';

const viewabilityConfig: ViewabilityConfig = {
  itemVisiblePercentThreshold: 51,
};

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState(0);

  const handleViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(Number(viewableItems[0].key));
      }
    },
  ).current;

  return (
    <FlatList
      data={posts}
      renderItem={({item: post}) => (
        <FeedPost post={post} isVisible={activePostId === Number(post.id)} />
      )}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={handleViewableItemsChanged}
    />
  );
};

export default HomeScreen;

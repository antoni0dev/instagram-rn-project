import React, {FC, useEffect, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/colors';
import {styles} from './FeedPost.styles';
import PostComment from '../Comment/PostComment';
import {TEXT_DESCRIPTION_MAX_ROW_LENGTH} from '../../lib/constants';
import useIsItemDoublePressed from '../../hooks/useIsItemDoublePressed';
import Carousel from '../Carousel/Carousel';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

interface Props {
  post: Post;
  isVisible?: boolean;
}

const FeedPost: FC<Props> = ({
  post: {
    createdAt,
    images,
    image,
    video,
    description,
    user: {image: userImage, username},
    nofComments,
    nofLikes,
    comments,
  },
  isVisible = true,
}) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const {isDoublePressed, incrementPresses, clear} = useIsItemDoublePressed();

  // Start calculation of post content
  let postContent = null;

  if (image) {
    postContent = (
      <Pressable onPress={incrementPresses}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.contentImage}
        />
      </Pressable>
    );
  }

  if (images) {
    postContent = <Carousel images={images} onPress={incrementPresses} />;
  }

  if (video) {
    postContent = <VideoPlayer isPlaying={isVisible} source={video} />;
  }
  // End calculation of post content

  useEffect(() => {
    if (isDoublePressed) {
      setIsLiked(true);
      clear();
    }
  }, [clear, isDoublePressed]);

  return (
    <>
      {/* Header */}
      <View style={[styles.headerWrapper, styles.screenItem]}>
        <View style={styles.headerLeftSideWrapper}>
          <Image source={{uri: userImage}} />
          <Text style={[styles.headerLeftSideName, styles.boldText]}>
            antoniospr1vate
          </Text>
        </View>
        <Entypo name="dots-three-horizontal" size={16} />
      </View>
      {/* Content */}
      {postContent}
      {/* Footer */}
      <View style={styles.screenItem}>
        {/* Icons */}
        <View style={[styles.footerIconsWrapper, styles.footerItem]}>
          <View style={styles.footerLeftIconsWrapper}>
            <Pressable onPress={() => setIsLiked(!isLiked)}>
              <AntDesign
                name={isLiked ? 'heart' : 'hearto'}
                size={24}
                color={isLiked ? COLORS.redLove : COLORS.black}
              />
            </Pressable>
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color={COLORS.black}
            />
            <Feather name="send" size={24} color={COLORS.black} />
          </View>
          <View style={styles.footerRightIconWrapper}>
            <Feather name="bookmark" size={24} color={COLORS.black} />
          </View>
        </View>

        {/* Likes */}
        <Text style={styles.footerItem}>
          Liked by <Text style={styles.boldText}>Miesha Tate</Text> and{' '}
          <Text style={styles.boldText}>{nofLikes} others</Text>
        </Text>

        {/* Post Description */}
        <View style={styles.footerItem}>
          <Text
            numberOfLines={
              isDescriptionExpanded ? TEXT_DESCRIPTION_MAX_ROW_LENGTH : 0
            }>
            <Text style={styles.boldText}>{username}</Text> {description}
          </Text>
          <Pressable
            onPress={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
            <Text>Show {isDescriptionExpanded ? 'less' : 'more'}</Text>
          </Pressable>
        </View>

        {/* Comments */}
        <Text>
          View {nofComments >= 10 ? `all ${nofComments}` : nofComments} comments
        </Text>
        <View>
          {comments.map(({id, comment, user: {username}}: Comment) => (
            <PostComment key={id} content={comment} author={username} />
          ))}
        </View>
        {/* Date of posting */}
        <Text>{createdAt}</Text>
      </View>
    </>
  );
};

export default FeedPost;

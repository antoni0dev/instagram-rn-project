import {View, Text, Image, Pressable} from 'react-native';
import React, {FC, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './DetailedComment.styles';
import {COLORS} from '../../theme/colors';

interface Props {
  content: string;
  user: User;
}

const DetailedComment: FC<Props> = ({content, user: {image, username}}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.commentWrapper}>
      <Image source={{uri: image}} style={styles.avatar} />
      <View style={styles.middleColumnWrapper}>
        <Text>
          <Text style={styles.boldText}>{username}</Text> {content}
        </Text>
        <View style={styles.footerWrapper}>
          <Text style={styles.footerItem}>2d</Text>
          <Text style={styles.footerItem}>5 likes</Text>
          <Text style={styles.footerItem}>Reply</Text>
        </View>
      </View>
      <Pressable onPress={() => setIsLiked(!isLiked)} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={20}
          color={isLiked ? COLORS.redLove : COLORS.black}
        />
      </Pressable>
    </View>
  );
};

export default DetailedComment;

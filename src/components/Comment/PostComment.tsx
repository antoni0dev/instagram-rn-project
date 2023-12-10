import React, {FC} from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './PostComment.styles';
import {COLORS} from '../../theme/colors';

interface Props {
  type?: CommentType;
  content: string | undefined;
  author: string;
}

const PostComment: FC<Props> = ({content, author}) => {
  return (
    <View style={styles.commentWrapper}>
      <Text style={styles.commentText}>
        <Text style={styles.boldText}>{author}</Text> {content}
      </Text>
      <AntDesign name="hearto" size={20} color={COLORS.black} />
    </View>
  );
};

export default PostComment;

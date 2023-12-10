import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import comments from '../../assets/data/comments.json';
import DetailedComment from '../../components/DetailedComment/DetailedComment';
import InputBox from '../../components/InputBox/InputBox';

const CommentsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={comments}
        renderItem={({item: {comment, user}}) => (
          <DetailedComment content={comment} user={user} />
        )}
      />
      <InputBox />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
});

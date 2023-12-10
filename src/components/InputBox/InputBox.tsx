import {View, Image, TextInput, Text} from 'react-native';
import styles from './InputBox.styles';
import React, {useState} from 'react';

const InputBox = () => {
  const [input, setInput] = useState('');

  const handlePost = () => {
    console.warn('Warning handle post');
    // TODO: send the data
  };

  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        }}
      />
      <TextInput
        value={input}
        onChangeText={setInput}
        style={styles.input}
        placeholder="Write your comment..."
        multiline
      />
      <Text onPress={handlePost} style={styles.button}>
        Post
      </Text>
    </View>
  );
};

export default InputBox;

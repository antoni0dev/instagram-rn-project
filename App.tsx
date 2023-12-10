import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import usersData from './src/assets/data/user.json';
import EditProfileScreen from './src/screens/EditProfileScreen/EditProfileScreen';
import PostUploadScreen from './src/screens/PostUploadScreen/PostUploadScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PostUploadScreen />
    </SafeAreaView>
  );
};

export default App;

import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProfileHeader.styles';
import {Button} from '../Button/Button';

interface Props {
  user: User;
}

export const ProfileHeader: FC<Props> = ({user: {image, username, bio}}) => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.headerWrapper, styles.flexItem]}>
        {/* Profile Image */}
        <Image
          source={{
            uri:
              image ||
              'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
          }}
          style={styles.avatar}
        />

        {/* Posts, followers, followers number */}
        <View style={[styles.profileInfoItem, styles.flexItem]}>
          <Text style={styles.profileInfoItemText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.profileInfoItem}>
          <Text style={styles.profileInfoItemText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.profileInfoItem}>
          <Text style={styles.profileInfoItemText}>98</Text>
          <Text>Posts</Text>
        </View>
      </View>

      {/* Bio */}
      <View style={styles.flexItem}>
        <Text style={styles.bioName}>{username || 'Jeremy'}</Text>
        <Text>
          {bio ||
            'loremasdafajksdnasjdsakfskjfnsakjafkjsadnsakjfnaskjfaskjdjsaksakjdsanfasfnasjkd'}
        </Text>
      </View>

      {/* Action buttons */}
      <View style={styles.btnGroupWrapper}>
        <Button onPress={() => console.log('nothin')} style={{flex: 1}}>
          Edit profile
        </Button>
        <Button onPress={() => console.log('nothin')} style={{flex: 1}}>
          Do something else
        </Button>
      </View>
    </View>
  );
};

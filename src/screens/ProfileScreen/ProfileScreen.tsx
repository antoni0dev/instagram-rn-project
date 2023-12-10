import React, {FC} from 'react';

import {ProfileHeader} from '../../components/ProfileHeader/ProfileHeader';
import FeedGridView from '../../components/FeedGrid/FeedGridVIew/FeedGridView';

interface Props {
  user: User;
}

const ProfileScreen: FC<Props> = ({user}) => {
  return (
    <FeedGridView
      data={user.posts || []}
      numOfColumns={3}
      ListHeaderComponent={<ProfileHeader user={user} />}
    />
  );
};

export default ProfileScreen;

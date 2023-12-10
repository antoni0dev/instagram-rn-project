import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './EditProfileScreen.styles';
import userData from '../../assets/data/user.json';
import {useForm} from 'react-hook-form';
import EditScreenInput from '../../components/EditScreenInput/EditScreenInput';
import {Button} from '../../components/Button/Button';
import {launchImageLibrary} from 'react-native-image-picker';

export type EditableUser = Pick<User, 'name' | 'username' | 'website' | 'bio'>;

// TODO: implement Zod to allow for validation cuz currently error messages ain't showing.
const EditProfileScreen = () => {
  const [selectedImageURI, setSelectedImageURI] = useState<string>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<EditableUser>({
    mode: 'onBlur',
    defaultValues: {
      name: userData.name,
      username: userData.username,
      website: 'No website',
      bio: userData.bio,
    },
  });

  const onSubmit = (data: EditableUser) => {
    console.log('Data', data);
    console.log(errors);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode) {
          setSelectedImageURI(assets?.[0].uri);
        }
      },
    );
  };

  return (
    <View style={styles.wrapper}>
      <Image
        source={{uri: selectedImageURI || userData.image}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change profile photo
      </Text>

      <EditScreenInput
        label="Name"
        placeholder="Type to edit your name..."
        control={control}
        name="name"
        rules={{required: true}}
      />
      <EditScreenInput
        label="Username"
        placeholder="Type to edit your username..."
        control={control}
        name="username"
        rules={{required: true}}
      />
      <EditScreenInput
        label="Website"
        placeholder="Type to edit your website..."
        control={control}
        name="website"
        rules={{required: true}}
      />
      <EditScreenInput
        label="Bio"
        placeholder="Type to edit your bio..."
        multiline
        control={control}
        name="bio"
        rules={{required: true}}
      />

      <Button style={{padding: 10}} onPress={handleSubmit(onSubmit)}>
        Submit
      </Button>
    </View>
  );
};

export default EditProfileScreen;

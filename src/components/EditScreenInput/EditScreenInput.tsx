import {View, Text, TextInput} from 'react-native';
import React, {FC} from 'react';
import styles from './EditScreenInput.styles';
import {Control, Controller, RegisterOptions} from 'react-hook-form';
import {EditableUser} from '../../screens/EditProfileScreen/EditProfileScreen';

interface Props {
  label: string;
  placeholder: string;
  multiline?: boolean;
  control: Control<EditableUser, object>;
  name: keyof EditableUser;
  rules?:
    | Omit<
        RegisterOptions<EditableUser, 'name' | 'username' | 'website' | 'bio'>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
}

// TODO: check why this component is behaving differently on iOS and Android - on android there's more space between the rows, whereas on iOS there's no spacing at all
const EditScreenInput: FC<Props> = ({
  label,
  placeholder,
  control,
  name,
  multiline = false,
  rules,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
        <View style={styles.wrapper}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder={placeholder}
              multiline={multiline}
              onChange={onChange}
              value={value}
              onBlur={onBlur}
            />
            {error && <Text style={styles.errorMessage}>{error?.message}</Text>}
          </View>
        </View>
      )}
    />
  );
};

export default EditScreenInput;

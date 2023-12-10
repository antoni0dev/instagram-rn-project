import {Camera} from 'expo-camera';
import {useEffect, useState} from 'react';
import {PERMISSION_STATUSES} from '../lib/constants';

export const useCameraAndMicrophonePermissions = () => {
  const [permissions, setPermissions] = useState<
    keyof typeof PERMISSION_STATUSES
  >(PERMISSION_STATUSES.LOADING);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setPermissions(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted'
          ? PERMISSION_STATUSES.SUCCESS
          : PERMISSION_STATUSES.DENIED,
      );
    })();
  }, []);

  return permissions;
};

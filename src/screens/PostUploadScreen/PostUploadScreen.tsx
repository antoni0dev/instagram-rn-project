import {View, Text, useWindowDimensions, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './PostUploadScree.styles';
import {PERMISSION_STATUSES} from '../../lib/constants';
import {
  Camera,
  CameraPictureOptions,
  CameraRecordingOptions,
  CameraType,
  FlashMode,
} from 'expo-camera';
import {useCameraAndMicrophonePermissions} from '../../hooks/useCameraAndMicrophonePermissions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../theme/colors';

const calculateFlashMode = (currentFlashMode: FlashMode) => {
  let newFlashMode;

  switch (currentFlashMode) {
    case FlashMode.off:
      newFlashMode = FlashMode.on;
      break;
    case FlashMode.on:
      newFlashMode = FlashMode.auto;
      break;
    case FlashMode.auto:
      newFlashMode = FlashMode.torch;
      break;
    default:
      newFlashMode = FlashMode.off;
  }

  return newFlashMode;
};

const flashModeToIconObj = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

// TODO: try to connect with phone and test
const PostUploadScreen = () => {
  const permissions = useCameraAndMicrophonePermissions();
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.back);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef<Camera | null>(null);

  const {width} = useWindowDimensions();

  const handleFlipCamera = () => {
    setCameraType(
      cameraType === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const handleToggleFlash = () => setFlashMode(calculateFlashMode(flashMode));

  const handleTakePicture = async () => {
    if (!isCameraReady || !cameraRef.current) {
      return;
    }

    const options: CameraPictureOptions = {
      quality: 0.5,
      base64: true,
      skipProcessing: true,
    };

    // TODO: finish implementing taking a picture
    const result = cameraRef.current?.takePictureAsync(options);
    console.log(result);
  };

  const handleStartRecording = async () => {
    if (!isCameraReady || !cameraRef.current || isRecording) {
      return;
    }

    const options: CameraRecordingOptions = {
      quality: Camera.Constants.VideoQuality['640:480'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };

    setIsRecording(true);
    // TODO: finish implementing taking a video
    try {
      const result = await cameraRef.current.recordAsync(options);
      console.log(result);
    } catch (e) {
      console.error(e);
    }
    setIsRecording(false);
  };

  const handleStopRecording = () => {
    if (isRecording) {
      cameraRef.current?.stopRecording();
      setIsRecording(false);
    }
  };

  if (permissions === PERMISSION_STATUSES.LOADING) {
    return <Text>Loading...</Text>;
  }

  if (permissions === PERMISSION_STATUSES.DENIED) {
    return <Text>No access to the camera was allowed!</Text>;
  }

  return (
    <View style={styles.wrapper}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={cameraType}
        ratio="4:3"
        flashMode={flashMode}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <View style={[styles.buttonsWrapper, {top: 25, width}]}>
        <MaterialIcons name="close" size={30} color={COLORS.white} />
        <Pressable onPress={handleToggleFlash}>
          <MaterialIcons
            name={flashModeToIconObj[flashMode]}
            size={30}
            color={COLORS.white}
          />
        </Pressable>
        <MaterialIcons name="settings" size={30} color={COLORS.white} />
      </View>
      <View style={[styles.buttonsWrapper, {bottom: 25, width}]}>
        <MaterialIcons name="photo-library" size={30} color={COLORS.white} />
        {isCameraReady && (
          <Pressable
            onPress={handleTakePicture}
            onLongPress={handleStartRecording}
            onPressOut={handleStopRecording}>
            <View
              style={[
                styles.recordingCircle,
                {backgroundColor: isRecording ? COLORS.redLove : COLORS.white},
              ]}
            />
          </Pressable>
        )}
        <Pressable onPress={handleFlipCamera}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={COLORS.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PostUploadScreen;

import React, {FC, useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, Animated} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/colors';

interface Props {
  source: string;
  isPlaying: boolean;
}

// TODO: extend the functionality and make it more interesting
const VideoPlayer: FC<Props> = ({source, isPlaying}) => {
  const [isMuted, setIsMuted] = useState(isPlaying);
  const scaleAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Trigger the animation on mute state change
    Animated.spring(scaleAnimation, {
      toValue: 1,
      speed: 1,
      bounciness: 6,
      useNativeDriver: true,
    }).start(() => {
      // Reset the animation
      Animated.spring(scaleAnimation, {
        toValue: 0,
        speed: 1,
        bounciness: 6,
        useNativeDriver: true,
      }).start();
    });
  }, [isMuted, scaleAnimation]);

  useEffect(() => {}, [isPlaying]);

  return (
    <Pressable onPress={() => setIsMuted(!isMuted)} style={styles.wrapper}>
      <Video
        source={{uri: source}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={isMuted}
        paused={!isPlaying}
      />
      <Animated.View
        style={[
          styles.muteBtn,
          {transform: [{scale: scaleAnimation}], opacity: scaleAnimation},
        ]}>
        <Ionicons
          name={isMuted ? 'volume-mute' : 'volume-medium'}
          size={25}
          color="white"
        />
      </Animated.View>
    </Pressable>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteBtn: {
    padding: 5,
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: COLORS.black,
    borderRadius: 25,
  },
});

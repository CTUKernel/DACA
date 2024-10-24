import React from 'react';
import { View, Button, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const TestImagePicker = () => {
  const handleTakePhoto = () => {
    launchCamera({}, (response) => {
      if (response.didCancel) {
        Alert.alert('User cancelled photo picker');
      } else if (response.errorCode) {
        Alert.alert('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        Alert.alert('Image taken:', response.assets[0].uri);
      }
    });
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        Alert.alert('User cancelled photo picker');
      } else if (response.errorCode) {
        Alert.alert('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        Alert.alert('Image selected:', response.assets[0].uri);
      }
    });
  };

  return (
    <View>
      <Button title="Take Photo" onPress={handleTakePhoto} />
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
};

export default TestImagePicker;

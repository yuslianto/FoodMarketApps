import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Select = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View>
      <Text style={styles.title}>City</Text>
      <View style={styles.input}>
        <Picker
          mode="dropdown"
          style={styles.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Select your city" value="city" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
  },
  input: {
    padding: 0,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 8,
    marginTop: 6,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  picker: {
    width: '100%',
    height: 50,
  },
});

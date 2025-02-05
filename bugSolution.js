```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return null; 
    }
  } catch (e) {
    console.error('Error getting data:', e);
    return null;
  }
};

// Example usage:
const loadData = async () => {
  const data = await getData('myKey');
  if (data) {
    console.log('Data loaded:', data);
  } else {
    console.log('No data found.');
  }
};

loadData();
```
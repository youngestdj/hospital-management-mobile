import AsyncStorage from "@react-native-community/async-storage";

export const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};

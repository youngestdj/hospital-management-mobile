export const getUserType = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value.user !== null) {
      return value.user;
    }
  } catch (e) {
    console.error("Something went wrong");
  }
};

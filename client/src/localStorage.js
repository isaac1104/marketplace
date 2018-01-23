export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("user");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("user", serializedState);
  } catch (err) {
    console.log(err);
  }
}

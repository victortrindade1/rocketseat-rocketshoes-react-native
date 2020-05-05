import { CommonActions } from '@react-navigation/native';

let navigator;

function setNavigator(ref) {
  navigator = ref;
}

// Navegação comum
function navigate(routeName, params) {
  navigator.dispatch(
    CommonActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  setNavigator,
  navigate,
};

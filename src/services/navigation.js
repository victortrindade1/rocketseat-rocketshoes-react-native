import { CommonActions, StackActions } from '@react-navigation/native';

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

// Navegação sem botão de voltar
function replace(name) {
  navigator.dispatch(StackActions.replace(name));
}

export default {
  setNavigator,
  navigate,
  replace,
};

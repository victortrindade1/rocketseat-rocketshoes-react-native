# Rocketshoes - App

Código: https://github.com/Rocketseat/bootcamp-gostack-desafio-07

# Pendência:

Falta redirecionar p/ o carrinho no momento de adicionar.

- Lib do curso: react-navigation 4x
- Lib do app: react-navigation 5x

# Motivo:

Ao concluir a action `addToCartSuccess` de dentro do saga, deveria redirecionar
para a página `Cart` ainda dentro do saga, ou seja, o react-navigation dispara
action dispatch. Na versão 4x, usa `NavigationActions`, enquanto na versão 5x
usa `CommonActions`.

# Tentativas:

Foram 2 tipos de tentativas:

## Usando `yield put(CommonActions.navigate({ name: 'Cart' }));`

Este é o jeito da documentação + 1 fórum.

### src/store/modules/cart/sagas.js

```diff
+ import { CommonActions } from '@react-navigation/native';

  ...

    yield put(addToCartSuccess(data));

+   yield put(CommonActions.navigate({ name: 'Cart' }));
```

## Usando `src/services/navigation.js`

Este é o jeito do código do curso na versão 4x, criando o arquivo
`navigation`, com a diferença de trocar NavigationActions por CommonActions.

### src/index.js

```diff
+ import NavigationService from './services/navigation';

<Provider store={store}>
  <StatusBar barStyle="light-content" backgroundColor="#141419" />
+  <Routes
+    ref={(navigatorRef) => {
+      console.tron.log(navigatorRef);
+      return NavigationService.setNavigator(navigatorRef);
+    }}
+  />
-  <Routes />
</Provider>
```

### src/services/navigation.js

```javascript
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
```

### src/store/modules/cart/sagas.js

```diff
+ import NavigationService from '../../../services/navigation';

...

  yield put(addToCartSuccess(data));

+ NavigationService.navigate({ routeName: 'Cart' });
```

# Alta Performance App

Este é um app Expo React Native com uma tela simples para teste com Appium.

## Como executar o app

1. Instale as dependências: `npm install`
2. Execute o app: `npm start`
3. Para Android: `npm run android`
4. Para iOS: `npm run ios` (requer macOS)
5. Para web: `npm run web`

## Teste com Appium

Para executar o teste com Appium:

1. Instale o Appium: `npm install -g appium`
2. Instale o driver UiAutomator2: `appium driver install uiautomator2`
3. Construa o APK para desenvolvimento: `npx expo run:android --device` ou use EAS para build de produção.
4. Configure o caminho do APK no arquivo `appium-test.js` (variável APP_PATH).
5. **Inicie o servidor Appium** (certifique-se de que ANDROID_HOME esteja definido no ambiente):
   - No PowerShell: `$env:ANDROID_HOME = "C:\Users\Daniel\AppData\Local\Android\Sdk"; appium`
   - Ou defina ANDROID_HOME permanentemente nas variáveis de ambiente do Windows.
6. Execute o teste: `npm run test:appium`

Certifique-se de que um emulador Android ou dispositivo esteja conectado e o app esteja instalado.

Nota: Para testes precisos, use um build de desenvolvimento do Expo.

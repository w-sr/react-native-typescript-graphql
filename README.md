# React Native Boilerplate

![N|Solid](https://miro.medium.com/max/1024/1*DgaDlJD8Hoq1lj5vUV4KiA.png)

Boilerplate using React Native + Typescript + GraphQL

## Tech

- [Navigation] Routing and navigation
- [SVG Library] Allow to use SVGs in app
- [Toast Message] Toast message component for React Native
- [Styled components] Allow to write actual CSS code to style components
- [GraphQL] Data query and manipulation language for APIs
- [AppCenter CLI] A unified tool for running App Center services from the command line
- [JSON GraphQL Server] Full fake GraphQL API with zero coding

## Installation

```sh
cd react-native-typescript-graphql
yarn install && cd ios && pod install
yarn ios
```

For running graphql server

```sh
cd react-native-typescript-graphql
json-graphql-server graphql-server.json --p 5000
```

## Folder Structure

- assets/
- components/
- context/
- graphql/
- lib/
- routes/
- screens/
- theme/

The `assets` directory contains necessary assets like image, icon, svg files.
The `components` directory contains customized components like button, input, indicator to be used on multiple screens.
The `context` directory contains auth context that confirm if user login or not.
The `graphql` directory contains queries and mutations that can be used for API call.
The `lib` directory contains util functions to be used for dimension and layout staff.
The `routes` directory contains routes for navigation between screens.
The `screens` directory contains screen components like login, register, todolist, etc.
The `theme` directory contains colors, fonts, sizes to be used for overall looking.

Also, `graphql-server.json` is used for mocking fake Graphql APIs.

## Other features

### SVG

For displaying SVG files properly, add following code to `metro.config.js` file in root directory.

```
const {defaults: tsjPreset} = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  // This is the only part which you can keep
  // from the above linked tutorial's config:
  cacheDirectory: '.jest/cache',
  clearMocks: true,
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

```

For Typescript, add following code to `declarations.d.ts` in root directory.

```
declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

```

### AppCenter

Add following code into `package.json` to deploy app to appcenter

```
...
"deploy:ios": "npx appcenter codepush release-react -a vertex-g/test -d Production --plist-file ios/test/Info.plist --disable-duplicate-release-error --mandatory --description \"$(git reflog -1 | sed 's/^.*: //')\" --token $CODEPUSH_TOKEN",
"deploy:android": "npx appcenter codepush release-react -a vertex-g/test -d Production --disable-duplicate-release-error --mandatory --description \"$(git reflog -1 | sed 's/^.*: //')\" --token $CODEPUSH_TOKEN"
...
```

Also, install `react-native-code-push` package and following code.

```
const NavigatorWithCodePush = __DEV__
  ? Navigator
  : codePush({
      checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
      updateDialog: {
        mandatoryContinueButtonLabel: 'Continue',
        mandatoryUpdateMessage: 'An update is avaialble that must be installed',
        optionalIgnoreButtonLabel: 'Ignore',
        optionalInstallButtonLabel: 'Install',
        optionalUpdateMessage: 'An update is available. Would you like to install it?',
        title: 'Update available.',
      },
      mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
      installMode: codePush.InstallMode.ON_NEXT_RESUME,
    })(Navigator);

export default NavigatorWithCodePush;
```

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[navigation]: https://reactnavigation.org/
[svg library]: https://github.com/react-native-svg/react-native-svg
[toast message]: https://www.npmjs.com/package/react-native-toast-message
[styled components]: https://styled-components.com/
[appcenter cli]: https://github.com/microsoft/appcenter-cli
[graphql]: https://graphql.org/
[json graphql server]: https://github.com/marmelab/json-graphql-server

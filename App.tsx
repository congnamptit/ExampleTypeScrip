/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ButtonCustom} from './src/components/elements/ButtonCustom';
import {Column} from './src/components/elements/Column';
// import {Divider} from './src/components/elements/Divider';
import {TextField} from './src/components/elements/TextField';
import {FormTextField} from './src/components/elements/FormTextField';
import {isValidEmail, isValidPassword} from './src/constants/Validatios';
import {SizedBox} from './src/components/elements/SizedBox';
import WelcomePage from './src/pages/login/WelcomePage';
import LoginPage from './src/pages/login/LoginPage';

const App = () => <LoginPage />;
// {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   const [email, setEmail] = useState('');
//   const [errorEmail, setErrorEmail] = useState('');
//   const [pasword, setPassword] = useState('');
//   const [errorPassword, setErrorPassword] = useState('');

//   return (
//     <SafeAreaView>
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginTop: 20,
//           }}>
//           <SizedBox height={20} />
//           <TextField
//             colorText={'red'}
//             width={'90%'}
//             radius={30}
//             isShowText={false}
//             placeholderText="Example.gmail.com"
//             borderWidth={1}
//             height={40}
//             padding={10}
//             marginHorizontal={20}
//             marginVertical={5}
//             marginLeft={30}
//             placeholderColor={''}
//             backgroundColor={'azure'}
//             borderColor={'cyan'}
//             value={email}
//             textValidate={errorEmail}
//             onChangeText={text => {
//               setErrorEmail(
//                 isValidEmail(text) === true ? '' : 'Sai định dạng Email',
//               );
//               setEmail(text);
//             }}
//           />
//           <FormTextField
//             textName={'Password'}
//             width={'90%'}
//             marginLeft={20}
//             value={pasword}
//             isShowText={true}
//             textValidate={errorPassword}
//             onChangeText={text => {
//               setErrorPassword(
//                 isValidPassword(text) === true
//                   ? ''
//                   : 'Mật khẩu phải nhiều hơn 3 kí tự',
//               );
//               setPassword(text);
//             }}
//           />
//           <SizedBox height={20} />
//           <ButtonCustom
//             radius={20}
//             backGroundColor={'red'}
//             height={40}
//             textButton={'Button'}
//             colorText={'white'}
//             fontWeight={'bold'}
//             width={'90%'}
//           />
//           <SizedBox height={20} />
//           {/* <Divider indent={10} endIndent={10} height={6} colorDIV={'black'} /> */}
//           <Column
//             backgroundColor={'whitesmoke'}
//             height={200}
//             radius={10}
//             marginVertical={10}>
//             <ButtonCustom
//               width={'90%'}
//               radius={20}
//               backGroundColor={'azure'}
//               height={40}
//               textButton={'Button 1'}
//               marginHorizontal={20}
//               margin={20}
//               colorText={'black'}
//               fontWeight={'bold'}
//             />
//             <ButtonCustom
//               radius={20}
//               backGroundColor={'azure'}
//               height={40}
//               textButton={'Button 2'}
//               marginHorizontal={20}
//               marginVertical={10}
//               colorText={'black'}
//               fontWeight={'bold'}
//             />
//           </Column>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

export default App;

import React, {useContext} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {DefaultLayout} from '../layouts/default';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Button, Input} from '@ui-kitten/components';
import {IconButton} from '../components/IconButton';
import {UserContext} from '../contexts/UserContext';
import {useStackNavigation} from '../hooks/useNavigation';

type LoginProps = {};

const schema = yup.object().shape({
  email: yup.string().email('Enter a valid email').max(255).required(),
  password: yup.string().required(),
});

const initialValues = {
  email: 'hm_mostefa@esi.dz',
  password: 'Beebolt2022',
};

export const Login: React.FC<LoginProps> = ({}) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const {mainNavigation} = useStackNavigation();
  const {setUser} = useContext(UserContext);
  const login = (email: string, password: string) => {
    setUser({
      id: '1',
      email: email,
      accessToken: password,
      firstName: 'Bee',
      lastName: 'Bolt',
    });
    mainNavigation({reset: true});
  };
  return (
    <DefaultLayout>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Please login using your credientials and njoy the beebolt experience
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={values => {
            login(values?.email, values?.password);
          }}>
          {({handleSubmit, setFieldValue, values, touched, errors}) => (
            <>
              <Input
                style={styles.inputStyle}
                size="large"
                label="Email"
                value={values.email}
                onChange={(
                  event: NativeSyntheticEvent<TextInputChangeEventData>,
                ) => {
                  const {text} = event.nativeEvent;
                  setFieldValue('email', text);
                }}
                caption={touched.email && errors.email ? errors.email : ''}
              />
              <Input
                style={styles.inputStyle}
                size="large"
                label="Password"
                value={values.password}
                onChange={(
                  event: NativeSyntheticEvent<TextInputChangeEventData>,
                ) => {
                  const {text} = event.nativeEvent;
                  setFieldValue('password', text);
                }}
                caption={
                  touched.password && errors.password ? errors.password : ''
                }
                accessoryRight={
                  <IconButton
                    name={secureTextEntry ? 'eye-off' : 'eye'}
                    onClick={() => {
                      setSecureTextEntry(!secureTextEntry);
                    }}
                  />
                }
                secureTextEntry={secureTextEntry}
              />
              <Button style={styles.btnStyle} onPress={handleSubmit}>
                Login
              </Button>
            </>
          )}
        </Formik>
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  inputStyle: {
    marginVertical: 15,
  },
  btnStyle: {
    marginTop: 50,
    backgroundColor: '#2E3A8D',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginTop: 10,
    marginBottom: 20,
  },
});

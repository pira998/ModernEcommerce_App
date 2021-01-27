import React, { useRef } from 'react'


import { Box, Button, Container, Text, TextInput, Checkbox } from '../../components'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from '../components/Footer';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../../components/Navigation';
import { BorderlessButton } from 'react-native-gesture-handler';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
});
const Login = ({ navigation }: StackNavigationProp<Routes, "Login">) => {

  const footer = <Footer title="Don't have an account?" action="Sign Up here" onPress={() => navigation.navigate("SignUp")} />

  const {
    handleChange,
    handleBlur,
    values,
    handleSubmit,
    errors,
    touched,
    setFieldValue
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: '', password: '', remember: true },
    onSubmit: (values) => console.log(values)
  });

  const password = useRef<typeof TextInput>(null);


  return (
    <Container pattern={0} {...{ footer }}>

      <Box padding="l">

        <Text variant="title1" textAlign="center">Welcome back</Text>
        <Text variant="body" textAlign="center" marginBottom="l">Use your credentials below and login to your account</Text>


        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={()=>password.current?.focus()}
            />
          </Box>
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Enter your password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={errors.password}
            touched={touched.password}
            secureTextEntry 
            autoCapitalize="none"
            autoCompleteType="password"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={()=>handleSubmit()}
          />
          <Box flexDirection="row" justifyContent="space-between" marginTop="m" marginBottom="m">
            <Checkbox label="Remember me" checked={values.remember} onChange={() => setFieldValue("remember", !values.remember)} />
            <BorderlessButton onPress={() => navigation.navigate("ForgotPassword")}>
              <Text color="primary"> Forget password</Text>
            </BorderlessButton>
          </Box>
          <Box alignItems="center" justifyContent="center">
            <Button variant="primary" onPress={handleSubmit} label="Log into your account">

            </Button>
          </Box>
        </Box>
      </Box>


    </Container>
  )
}

export default Login

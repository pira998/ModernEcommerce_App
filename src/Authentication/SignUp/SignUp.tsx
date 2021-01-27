import React, { useRef } from 'react'
import { Box, Button, Container, Text, TextInput, Checkbox } from '../../components'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from '../components/Footer';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../../components/Navigation';

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")],"Passwords don't match")
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
});
const SignUp = ({ navigation }: StackNavigationProp<Routes, "SignUp">|any) => {

  const footer = <Footer title="Already have an account?" action="Login here" onPress={() => navigation.navigate("Login")} />

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
 
  } = useFormik({
    validationSchema: SignUpSchema,
    initialValues: { email: '', password: '', passwordConfirmation:'' },
    onSubmit: (values) => console.log(values)
  });

  const password = useRef<typeof TextInput>(null);
  const passwordConfirmation = useRef<typeof TextInput>(null);


  return (
    <Container pattern={1} {...{ footer }}>

      <Box padding="m">

        <Text variant="title1" textAlign="center">Create account</Text>
        <Text variant="body" textAlign="center" marginBottom="l">Let us know what your name,email,and your password</Text>


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
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
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
            returnKeyType="next"
            returnKeyLabel="next"
              onSubmitEditing={() => passwordConfirmation.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
        
          <TextInput
        
            ref={passwordConfirmation}
            icon="lock"
            placeholder="Confirm your password"
            onChangeText={handleChange('passwordConfirmation')}
            onBlur={handleBlur('passwordConfirmation')}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            secureTextEntry
            autoCapitalize="none"
            autoCompleteType="password"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />
          </Box>
          
          <Box alignItems="center" justifyContent="center">
            <Button variant="primary" onPress={handleSubmit} label="Create your account">

            </Button>
          </Box>
        </Box>
      </Box>


    </Container>
  )
}

export default SignUp

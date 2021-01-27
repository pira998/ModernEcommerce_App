import { StackNavigationProp } from '@react-navigation/stack'
import { useFormik } from 'formik'
import React from 'react'
import { View, Linking } from 'react-native'
import { Box, Button, Container,Text, TextInput } from '../../components'
import { Routes } from '../../components/Navigation'
import Footer from '../components/Footer'
import * as Yup from 'yup';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = ({ navigation }: StackNavigationProp<Routes, "ForgotPassword">|any) => {
  const footer = <Footer
    title="Don't work"
    action="Try another way"
    onPress={() => Linking.openURL("mailto:help@support.com")} />;
  
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    
  } = useFormik({
    validationSchema: ForgotPasswordSchema,
    initialValues: { email: '', password: '', remember: true },
    onSubmit: () => navigation.navigate("PasswordChanged")
  });
  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="l" flex={1} justifyContent="center">

        <Text variant="title1" textAlign="center">Forgot Password?</Text>
        <Text variant="body" textAlign="center" marginBottom="l">Enter the email address associated with your account</Text>


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
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={()=>handleSubmit()}
            />
          </Box>
          
         
          <Box alignItems="center" justifyContent="center">
            <Button variant="primary" onPress={handleSubmit} label="Reset password">

            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default ForgotPassword

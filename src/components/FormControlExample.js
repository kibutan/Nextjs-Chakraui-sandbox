import {FormControl,FormLabel,FormErrorMessage,FormHelperText,Input,
        RadioGroup,Radio,HStack,Select,NumberInput,NumberInputField,
        NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,Button} from '@chakra-ui/react'
import { useState } from 'react';
import { Formik,Form,Field } from 'formik';

export default function FromControlExample(){
    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''
    function validateName(value) {
        let error
        if (!value) {
          error = 'Name is required'
        } else if (value.toLowerCase() !== 'naruto') {
          error = "Jeez! You're not a fan 😱"
        }
        return error
    }
    return(
    <>
        <FormControl>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email' /><FormHelperText>We&apos;ll never share your email.</FormHelperText>
        </FormControl>

        <FormControl as='fieldset'>
            <FormLabel as='legend'>Favorite Naruto Character</FormLabel>
            <RadioGroup defaultValue='Itachi'>
                <HStack spacing='24px'>
                    <Radio value='Sasuke'>Sasuke</Radio>
                    <Radio value='Nagato'>Nagato</Radio>
                    <Radio value='Itachi'>Itachi</Radio>
                    <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
                </HStack>
            </RadioGroup>
            <FormHelperText>Select only if you&apos;re a fan.</FormHelperText>
        </FormControl>

        <FormControl isInvalid={isError}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input id='email' type='email' value={input} onChange={handleInputChange}/>
            {!isError ? ( 
            <FormHelperText>Enter the email you&apos;d like to receive the newsletter on.</FormHelperText>
            ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
        </FormControl>

        <FormControl isRequired>
            <FormLabel htmlFor='first-name'>First name</FormLabel>
            <Input id='first-name' placeholder='First name' />
        </FormControl>

        <FormControl>
            <FormLabel htmlFor='country'>Country</FormLabel>
            <Select id='country' placeholder='Select country'>
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
                <option>Japan</option>
                <option>Korea</option>
                <option>China</option>
            </Select>
        </FormControl>

        <FormControl>
            <FormLabel htmlFor='amount'>Amount</FormLabel>
            <NumberInput max={50} min={10}>
                <NumberInputField id='amount' />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>

        <Formik
      initialValues={{ name: 'Sasuke' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name='name' validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor='name'>First name</FormLabel>
                <Input {...field} id='name' placeholder='name' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
    </>
    )
}
import { Radio, RadioGroup,Stack,useRadio,useRadioGroup,Box,HStack } from '@chakra-ui/react'
import React from 'react'
export default function RadioExample() {
    const [value, setValue] = React.useState('1')
    function RadioCard(props) {
        const { getInputProps, getCheckboxProps } = useRadio(props)
      
        const input = getInputProps()
        const checkbox = getCheckboxProps()
      
        return (
          <Box as='label'>
            <input {...input} />
            <Box
              {...checkbox}
              cursor='pointer'
              borderWidth='1px'
              borderRadius='md'
              boxShadow='md'
              _checked={{
                bg: 'teal.600',
                color: 'white',
                borderColor: 'teal.600',
              }}
              _focus={{
                boxShadow: 'outline',
              }}
              px={5}
              py={3}
            >
              {props.children}
            </Box>
          </Box>
        )
      }
      
      // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
      function Example() {
        const options = ['react', 'vue', 'svelte']
      
        const { getRootProps, getRadioProps } = useRadioGroup({
          name: 'framework',
          defaultValue: 'react',
          onChange: console.log,
        })
      
        const group = getRootProps()
      
        return (
          <HStack {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ value })
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              )
            })}
          </HStack>
        )
      }
    return (
        <>
            <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row'>
                <Radio value='1'>First</Radio>
                <Radio value='2'>Second</Radio>
                <Radio value='3'>Third</Radio>
                </Stack>
            </RadioGroup>

            <RadioGroup defaultValue='2'>
                <Stack spacing={5} direction='row'>
                    <Radio colorScheme='red' value='1'>Radio</Radio>
                    <Radio colorScheme='green' value='2'>Radio</Radio>
                </Stack>
            </RadioGroup>

            <Stack>
                <Radio size='sm' name='1' colorScheme='red'>Radio</Radio>
                <Radio size='md' name='1' colorScheme='green'>Radio</Radio>
                <Radio size='lg' name='1' colorScheme='orange' defaultChecked>Radio</Radio>
            </Stack>

            <RadioGroup defaultValue='1'>
                <Stack>
                    <Radio value='1' isDisabled>Checked</Radio>
                    <Radio value='2'>Unchecked</Radio>
                    <Radio value='3'>Unchecked</Radio>
                </Stack>
            </RadioGroup>

            <RadioGroup defaultValue='1'>
                <Stack spacing={4} direction='row'>
                    <Radio value='1' isDisabled>Radio 1</Radio>
                    <Radio value='2'>Radio 2</Radio>
                    <Radio value='3'>Radio 3</Radio>
                </Stack>
            </RadioGroup>

            <Radio isInvalid>Radio</Radio>

            <Example />

            <RadioGroup name="form-name">
                <Radio>Radio 1</Radio>
                <Radio>Radio 2</Radio>
            </RadioGroup> 

            {/* Do not Do this 
            <RadioGroup >
                <Radio name="form-name">Radio 1</Radio>
                <Radio name="form-name">Radio 2</Radio>
            </RadioGroup> */}
        </>
    )
  }
import { memo } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { TUserForm } from '@react-monorepo/shared/types'
import { COLORS, REGEX, SHADOW } from '@react-monorepo/shared/utils'

export interface RegisterFormProps {
  onSubmit: (values: TUserForm) => void
}

export const RegisterForm = memo(({ onSubmit }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TUserForm>()

  return (
    <Box
      bgColor={COLORS.WHITE}
      border={`2px solid ${COLORS.GRAY}`}
      p={10}
      maxW={960}
      margin="0 auto"
      shadow={SHADOW.FORM}
    >
      <Box mb={4}>
        <Text fontWeight="bold" fontSize="3xl" textTransform="capitalize">
          Account info:
        </Text>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack>
          <FormControl isInvalid={!!errors.firstName}>
            <FormLabel htmlFor="firstName">First name</FormLabel>
            <Input
              id="firstName"
              placeholder="First name"
              {...register('firstName', {
                required: 'Please enter your first name',
                pattern: {
                  value: REGEX.NOT_CONTAIN_NUMBER,
                  message: 'First name should not contain number',
                },
                maxLength: { value: 30, message: 'Maximum length should be 30' },
              })}
            />
            <FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.lastName}>
            <FormLabel htmlFor="lastName">Last name</FormLabel>
            <Input
              id="lastName"
              placeholder="Last name"
              {...register('lastName', {
                required: 'Please enter your last name',
                pattern: {
                  value: REGEX.NOT_CONTAIN_NUMBER,
                  message: 'Last name should not contain number',
                },
                maxLength: { value: 30, message: 'Maximum length should be 30' },
              })}
            />
            <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
          </FormControl>
        </HStack>

        <HStack>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="Email"
              {...register('email', {
                required: 'Please enter your email',
                pattern: {
                  value: REGEX.EMAIL,
                  message: 'Please enter correct email pattern',
                },
              })}
            />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              autoComplete="off"
              placeholder="Password"
              type="password"
              {...register('password', {
                required: 'Please enter your password',
                maxLength: {
                  value: 30,
                  message: 'Please enter password equal or shorter than 30 characters',
                },
                minLength: {
                  value: 6,
                  message: 'Please enter password equal or longer than 6 characters',
                },
              })}
            />
            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          </FormControl>
        </HStack>

        <FormControl isInvalid={!!errors.phone}>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            id="phone"
            placeholder="Phone"
            {...register('phone', {
              required: 'Please enter your phone number',
              pattern: {
                value: REGEX.ONLY_NUMBER,
                message: 'Phone should not contain alphabet characters',
              },
              maxLength: { value: 10, message: 'Maximum length should be 10' },
            })}
          />
          <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          bgColor={COLORS.PRIMARY}
          isLoading={isSubmitting}
          type="submit"
          textTransform="capitalize"
          fontSize="24px"
          color={COLORS.WHITE}
          fontWeight="bold"
        >
          Start now
        </Button>
      </form>
    </Box>
  )
})

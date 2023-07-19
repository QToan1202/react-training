import { memo } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FiFile } from 'react-icons/fi'

import { COLORS, REGEX } from '@react-monorepo/shared/utils'
import { IBook } from '@react-monorepo/shared/types'

export interface BookFormProps {
  bookValues?: IBook
  onSubmit: (values: IBook) => void
}

export const BookForm = memo(({ onSubmit, bookValues }: BookFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IBook>({ defaultValues: bookValues })
  return (
    <Box bgColor={COLORS.WHITE} border={`2px solid ${COLORS.GRAY}`} p={10} maxW={960}>
      <Box mb={4}>
        <Text fontWeight="bold" fontSize="3xl" textTransform="capitalize">
          item information:
        </Text>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" rowGap={6}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="firstName">Name</FormLabel>
            <Input
              id="name"
              placeholder="Name"
              {...register('name', {
                required: 'Please enter book name',
                pattern: {
                  value: REGEX.NOT_CONTAIN_NUMBER,
                  message: 'Book should not contain number',
                },
              })}
            />
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.author}>
            <FormLabel htmlFor="author">Author</FormLabel>
            <Input
              id="author"
              placeholder="Author"
              {...register('author', {
                required: 'Please enter author name',
                pattern: {
                  value: REGEX.NOT_CONTAIN_NUMBER,
                  message: 'Author name should not contain number',
                },
                maxLength: { value: 30, message: 'Maximum length should be 30' },
              })}
            />
            <FormErrorMessage>{errors.author && errors.author.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.description}>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
              id="description"
              resize="vertical"
              rows={5}
              {...register('description', {
                required: 'Please enter your description',
              })}
            />
            <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
          </FormControl>

          <Flex rowGap={6} columnGap={2} flexDirection={{ base: 'column', md: 'row' }}>
            <FormControl isInvalid={!!errors.publish_date}>
              <FormLabel htmlFor="publish_date">Publish date</FormLabel>
              <Input
                id="publish_date"
                autoComplete="off"
                placeholder="publish_date"
                type="date"
                {...register('publish_date', {
                  required: 'Please enter publish date',
                })}
              />
              <FormErrorMessage>{errors.publish_date && errors.publish_date.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.quantity}>
              <FormLabel htmlFor="quantity">Quantity</FormLabel>
              <Input
                id="quantity"
                min={1}
                placeholder="Quantity"
                {...register('quantity', {
                  valueAsNumber: true,
                  required: 'Please enter book quantity',
                  max: {
                    value: 50,
                    message: 'Quantity value should not over 50',
                  },
                  min: {
                    value: 1,
                    message: 'Quantity value should over 1',
                  },
                })}
              />
              <FormErrorMessage>{errors.quantity && errors.quantity.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.cover}>
              <FormLabel htmlFor="cover">Cover</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FiFile />
                </InputLeftElement>
                <Input
                  id="cover"
                  placeholder="Cover"
                  {...register('cover', {
                    required: 'Please enter book quantity',
                  })}
                />
              </InputGroup>
              <FormErrorMessage>{errors.cover && errors.cover.message}</FormErrorMessage>
            </FormControl>
          </Flex>
          <Button
            mt={4}
            bgColor={COLORS.PRIMARY}
            color={COLORS.WHITE}
            isLoading={isSubmitting}
            type="submit"
            textTransform="capitalize"
            fontSize="20px"
          >
            complete
          </Button>
        </Flex>
      </form>
    </Box>
  )
})

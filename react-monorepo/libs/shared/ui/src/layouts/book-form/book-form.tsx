import { memo } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FiFile } from 'react-icons/fi'

import { COLORS, REGEX, SHADOW } from '@react-monorepo/shared/utils'
import { IBook } from '@react-monorepo/shared/types'

export interface BookFormProps {
  bookValues?: IBook
  onSubmit: (values: IBook) => void
}

const BookForm = memo(({ onSubmit, bookValues }: BookFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IBook>({ defaultValues: bookValues })
  return (
    <Box bgColor={COLORS.WHITE} border={`2px solid ${COLORS.GRAY}`} p={10} maxW={960} shadow={SHADOW.FORM}>
      <Box mb={4}>
        <Heading fontWeight="bold" fontSize="3xl" textTransform="capitalize">
          item information:
        </Heading>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" rowGap={6}>
          <FormControl isInvalid={!!errors.name} pos="relative">
            <FormLabel htmlFor="firstName" m={0}>
              Name
            </FormLabel>
            <Input
              id="name"
              placeholder="Enter the title"
              {...register('name', {
                required: 'Please enter book name',
                pattern: {
                  value: REGEX.NOT_CONTAIN_NUMBER,
                  message: 'Book should not contain number',
                },
              })}
            />
            <FormErrorMessage pos="absolute" mt={0}>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.author} pos="relative">
            <FormLabel htmlFor="author" m={0}>
              Author
            </FormLabel>
            <Input
              id="author"
              placeholder="Author of the book"
              {...register('author', {
                required: 'Please enter author name',
                pattern: {
                  value: REGEX.NOT_CONTAIN_NUMBER,
                  message: 'Author name should not contain number',
                },
                maxLength: { value: 30, message: 'Maximum length should be 30' },
              })}
            />
            <FormErrorMessage pos="absolute" mt={0}>
              {errors.author && errors.author.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.description} pos="relative">
            <FormLabel htmlFor="description" m={0}>
              Description
            </FormLabel>
            <Textarea
              id="description"
              resize="vertical"
              rows={5}
              placeholder="Enter your description about the book your wanna add!!!"
              {...register('description', {
                required: 'Please enter your description',
              })}
            />
            <FormErrorMessage pos="absolute" mt={0}>
              {errors.description && errors.description.message}
            </FormErrorMessage>
          </FormControl>

          <Flex rowGap={6} columnGap={2} flexDirection={{ base: 'column', md: 'row' }}>
            <FormControl isInvalid={!!errors.publish_date} m={0} pos="relative">
              <FormLabel htmlFor="publish_date" m={0}>
                Publish date
              </FormLabel>
              <Input
                id="publish_date"
                autoComplete="off"
                placeholder="publish_date"
                type="date"
                {...register('publish_date', {
                  required: 'Please enter publish date',
                })}
              />
              <FormErrorMessage pos="absolute" mt={0}>
                {errors.publish_date && errors.publish_date.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.quantity} pos="relative">
              <FormLabel htmlFor="quantity" m={0}>
                Quantity
              </FormLabel>
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
              <FormErrorMessage pos="absolute" mt={0}>
                {errors.quantity && errors.quantity.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.cover} pos="relative">
              <FormLabel htmlFor="cover" m={0}>
                Cover
              </FormLabel>
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
              <FormErrorMessage pos="absolute" mt={0}>
                {errors.cover && errors.cover.message}
              </FormErrorMessage>
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

export default BookForm

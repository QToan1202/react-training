import { AspectRatio, Box, Image, Text } from '@chakra-ui/react'
import { COLORS, SHADOW } from '@practice-three/modules/shared/utils'
import { motion } from 'framer-motion'

export interface CardProps {
  imageUrl: string
  name: string
  author: string
  alt: string
  fallbackImage?: string
}

export function Card({ imageUrl, name, author, alt, fallbackImage = '/assets/images/placeholder.png' }: CardProps) {
  return (
    <Box margin={5} maxW={200}>
      <AspectRatio maxW="inherit" ratio={2 / 3}>
        <Image
          objectFit="cover"
          src={imageUrl}
          fallbackSrc={fallbackImage}
          alt={alt}
          borderRadius="lg"
          as={motion.img}
          whileHover={{
            y: -10,
            filter: 'brightness(70%)',
            backgroundColor: COLORS.BLACK,
            boxShadow: SHADOW.BOOK_CARD,
          }}
          whileTap={{
            scale: 1.1,
          }}
        />
      </AspectRatio>
      <Box p={3} textAlign="center" textTransform="capitalize">
        <Text fontWeight="bold" noOfLines={2}>
          {name}
        </Text>
        <Text color="GrayText" noOfLines={2}>{author}</Text>
      </Box>
    </Box>
  )
}

export default Card

import {Box, Badge, StarIcon, Image} from "@chakra-ui/react"
// import Image from "next/image"
export default function CardAirBnB(){
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      }
  return (  
      <Image src={property.imageUrl} alt={property.imageAlt} />

  )
}
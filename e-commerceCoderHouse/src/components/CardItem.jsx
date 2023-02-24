import React from 'react'
import {Card, CardBody, CardFooter, SimpleGrid, Image, Stack, Heading, Text, Divider, Button, ButtonGroup} from '@chakra-ui/react'

const CardItem = (props) => {
  return (
    <div>
      <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={props.img}
      alt=' '
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.tituloProducto}</Heading>
      <Text>
      {props.descripcion}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       $ {props.precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='1'>
      <Button variant='solid' colorScheme='blue'>
        Añadir al carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

      </SimpleGrid>
    </div>
  )
}

export default CardItem

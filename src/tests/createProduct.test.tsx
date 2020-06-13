import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Products } from "../views/Products";

describe('app', () => {
  it('should have a button with text to create a product', () => {
    const { getByText } = setup()

    const newTodo = getByText('Crear Producto')
    expect(newTodo).toBeInTheDocument()
  })
  it('should create a product with name', () => {
    const { createProduct, getName } = setup()

    createProduct('Producto Nuevo','Description product', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 50, 100, 150, 'd@d.com')

    expect(getName()).toHaveValue('Producto Nuevo')
  })
  it('should create a product with description', () => {
    const { createProduct, getDescription } = setup()

    createProduct('Producto Nuevo','Description product', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 50, 100, 150, 'd@d.com')

    expect(getDescription()).toHaveValue('Description product')
  })
  it('should create a product with an image url', () => {
    const { createProduct, getImage } = setup()

    createProduct('Producto Nuevo','Description product', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 50, 100, 150, 'd@d.com')

    expect(getImage()).toHaveValue('https://homepages.cae.wisc.edu/~ece533/images/airplane.png')
  })
  it('should create a product with quantity', () => {
    const { createProduct, getQuantity } = setup()

    createProduct('Producto Nuevo','Description product', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 50, 100, 150, 'd@d.com')

    expect(getQuantity()).toHaveValue(50)
  })
  it('should create a product with price', () => {
    const { createProduct, getPrice } = setup()

    createProduct('Producto Nuevo','Description product', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 50, 100, 150, 'd@d.com')

    expect(getPrice()).toHaveValue(100)
  })
  it('should create a product with sell price', () => {
    const { createProduct, getSellPrice } = setup()

    createProduct('Producto Nuevo','Description product', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 50, 100, 150, 'd@d.com')

    expect(getSellPrice()).toHaveValue(150)
  })
  it('should create a product with an user associate', () => {
    const { createProduct, getUserAssoc } = setup()

    createProduct('Producto Nuevo','Description product', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 50, 100, 150, 'd@d.com')

    expect(getUserAssoc()).toHaveValue('d@d.com')
  })
  it('should create a product with all inputs filled', () => {
    const { createProduct, getName, getDescription, getImage, getQuantity, getPrice, getSellPrice, getUserAssoc } = setup()

    createProduct('Producto Nuevo','Description product', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', 50, 100, 150, 'd@d.com')

    expect(getName()).toHaveValue('Producto Nuevo')
    expect(getDescription()).toHaveValue('Description product')
    expect(getImage()).toHaveValue('https://homepages.cae.wisc.edu/~ece533/images/airplane.png')
    expect(getQuantity()).toHaveValue(50)
    expect(getPrice()).toHaveValue(100)
    expect(getSellPrice()).toHaveValue(150)
    expect(getUserAssoc()).toHaveValue('d@d.com')
  })
})

function setup() {

  const rendered = render(<Products />)

  function createProduct(name: string, description: string, image: string, quantity:number, price:number, sellPrice:number, userAssoc:string) {
    const inputName = getName()
    const inputDescription = getDescription()
    const inputImage = getImage()
    const inputQuantity = getQuantity()
    const inputPrice = getPrice()
    const inputSellPrice = getSellPrice()
    const inputUserAssoc = getUserAssoc()

    const form = rendered.getByRole('form')

    fireEvent.change(inputName, { target: { value: name } })
    fireEvent.change(inputDescription, { target: { value: description } })
    fireEvent.change(inputImage, { target: { value: image } })
    fireEvent.change(inputQuantity, { target: { value: quantity } })
    fireEvent.change(inputPrice, { target: { value: price } })
    fireEvent.change(inputSellPrice, { target: { value: sellPrice } })
    fireEvent.change(inputUserAssoc, { target: { value: userAssoc } })
    fireEvent.submit(form)
  }

  function getName() {
    return rendered.getByPlaceholderText('Nombre')
  }
  function getDescription() {
    return rendered.getByPlaceholderText('Descripción')
  }
  function getImage() {
    return rendered.getByPlaceholderText('URL de la imagen')
  }
  function getQuantity() {
    return rendered.getByPlaceholderText('Cantidad')
  }
  function getPrice() {
    return rendered.getByPlaceholderText('Precio unitario')
  }
  function getSellPrice() {
    return rendered.getByPlaceholderText('Precio de venta')
  }
  function getUserAssoc() {
    return rendered.getByPlaceholderText('Usuario del producto')
  }

  return {
    ...rendered,
    createProduct,
    getName,
    getDescription,
    getImage,
    getQuantity,
    getPrice,
    getSellPrice,
    getUserAssoc
  }
}

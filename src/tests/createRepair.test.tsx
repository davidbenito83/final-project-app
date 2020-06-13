import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Repairs } from "../views/Repairs";

//TODO: FALTAN DOS TESTS

describe('app', () => {
  it('should have a button with text to create a repair', () => {
    const { getByText } = setup()

    const newTodo = getByText('Crear Reparación')
    expect(newTodo).toBeInTheDocument()
  })
  it('should create a repair with name', () => {
    const { createRepair, getName } = setup()

    createRepair('Nueva Reparación','Description reparación', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', '4055FGH', 666666666, 10, 'd@d.com', { products: [{ name: "producto 1"}, { name:"producto 2" }] })

    expect(getName()).toHaveValue('Nueva Reparación')
  })
  it('should create a repair with description', () => {
    const { createRepair, getDescription } = setup()

    createRepair('Nueva Reparación','Description reparación', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', '4055FGH', 666666666, 10, 'd@d.com', { products: [{ name: "producto 1"}, { name:"producto 2" }] })

    expect(getDescription()).toHaveValue('Description reparación')
  })
  it('should create a repair with image and type', () => {
    const { createRepair, getImage } = setup()

    createRepair('Nueva Reparación','Description reparación', './images/cambio-aceite.png', '4055FGH', 666666666, 10, 'd@d.com', { products: [{ name: "producto 1"}, { name:"producto 2" }] })

    expect(getImage()).toHaveValue('./images/cambio-aceite.png')
  })
  it('should create a repair with car registration', () => {
    const { createRepair, getCarRegistration } = setup()

    createRepair('Nueva Reparación','Description reparación', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', '4055FGH', 666666666, 10, 'd@d.com', { products: [{ name: "producto 1"}, { name:"producto 2" }] })

    expect(getCarRegistration()).toHaveValue('4055FGH')
  })
  it('should create a repair with contact number', () => {
    const { createRepair, getContactNumber } = setup()

    createRepair('Nueva Reparación','Description reparación', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', '4055FGH', 666666666, 10, 'd@d.com', { products: [{ name: "producto 1"}, { name:"producto 2" }] })

    expect(getContactNumber()).toHaveValue('666666666')
  })
  it('should create a repair with execution time', () => {
    const { createRepair, getTime } = setup()

    createRepair('Nueva Reparación','Description reparación', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', '4055FGH', 666666666, 10, 'd@d.com', { products: [{ name: "producto 1"}, { name:"producto 2" }] })

    expect(getTime()).toHaveValue(10)
  })
  it('should create a repair with an associated products', () => {
    const { createRepair, getProductsAssoc } = setup()

    createRepair('Nueva Reparación','Description reparación', 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', '4055FGH', 666666666, 10, 'd@d.com', { products: [{ name: "producto 1"}, { name:"producto 2" }] })

    expect(getProductsAssoc()).toHaveValue([])
  })
})

function setup() {

  const rendered = render(<Repairs />)

  function createRepair(name: string, description: string, image: string, carRegistration:string, contactNumber:number, time:number, userAssoc:string, productsAssoc:object) {
    const inputName = getName()
    const inputDescription = getDescription()
    const inputImage = getImage()
    const inputCarRegistration = getCarRegistration()
    const inputContactNumber = getContactNumber()
    const inputTime = getTime()
    const inputUserAssoc = getUserAssoc()
    const inputProductsAssoc = getProductsAssoc()

    const form = rendered.getByRole('form')

    fireEvent.change(inputName, { target: { value: name } })
    fireEvent.change(inputDescription, { target: { value: description } })
    fireEvent.change(inputImage, { target: { value: image } })
    fireEvent.change(inputCarRegistration, { target: { value: carRegistration } })
    fireEvent.change(inputContactNumber, { target: { value: contactNumber } })
    fireEvent.change(inputTime, { target: { value: time } })
    fireEvent.change(inputUserAssoc, { target: { value: userAssoc } })
    fireEvent.change(inputProductsAssoc, { target: { value: productsAssoc } })
    fireEvent.submit(form)
  }

  function getName() {
    return rendered.getByPlaceholderText('Nombre')
  }
  function getDescription() {
    return rendered.getByPlaceholderText('Descripción')
  }
  function getImage() {
    return rendered.getByPlaceholderText('Tipo')
  }
  function getCarRegistration() {
    return rendered.getByPlaceholderText('Matrícula')
  }
  function getContactNumber() {
    return rendered.getByPlaceholderText('Número de contacto')
  }
  function getTime() {
    return rendered.getByPlaceholderText('Tiempo de ejecución')
  }
  function getUserAssoc() {
    return rendered.getByPlaceholderText('Usuario asignado')
  }
  function getProductsAssoc() {
    return rendered.getByLabelText('Productos asociados')
  }

  return {
    ...rendered,
    createRepair,
    getName,
    getDescription,
    getImage,
    getCarRegistration,
    getContactNumber,
    getTime,
    getUserAssoc,
    getProductsAssoc
  }
}

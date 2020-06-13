import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Users } from "../views/Users";

describe('app', () => {
  it('should have a button with text to create a user', () => {
    const { getByText } = setup()

    const newTodo = getByText('Crear Usuario')
    expect(newTodo).toBeInTheDocument()
  })
  it('should create a user with name', () => {
    const { createUser, getName } = setup()

    createUser('David','d@d.com', '1234', 'ADMIN_USER', true)

    expect(getName()).toHaveValue('David')
  })
  it('should create a user with email', () => {
    const { createUser, getEmail } = setup()

    createUser('David','d@d.com', '1234', 'ADMIN_USER', true)

    expect(getEmail()).toHaveValue('d@d.com')
  })
  it('should create a user with password', () => {
    const { createUser, getPassword } = setup()

    createUser('David','d@d.com', '1234', 'ADMIN_USER', true)

    expect(getPassword()).toHaveValue('1234')
  })
  it('should create a user with role', () => {
    const { createUser, getRole} = setup()

    createUser('David','d@d.com', '1234', 'ADMIN_USER', true)

    expect(getRole()).toHaveValue('ADMIN_USER')
  })
  it('should create a user with state', () => {
    const { createUser, getState } = setup()

    createUser('David','d@d.com', '1234', 'ADMIN_USER', true)

    expect(getState()).toHaveValue('true')
  })
})

function setup() {

  const rendered = render(<Users />)

  function createUser(name: string, email: string, password: string, role:string, state:boolean) {
    const inputName = getName()
    const inputPassword = getPassword()
    const inputEmail = getEmail()
    const inputRole = getRole()
    const inputState = getState()

    const form = rendered.getByRole('form')

    fireEvent.change(inputName, { target: { value: name } })
    fireEvent.change(inputPassword, { target: { value: password } })
    fireEvent.change(inputEmail, { target: { value: email } })
    fireEvent.change(inputRole, { target: { value: role } })
    fireEvent.change(inputState, { target: { value: state } })
    fireEvent.submit(form)
  }

  function getName() {
    return rendered.getByPlaceholderText('Nombre')
  }
  function getPassword() {
    return rendered.getByPlaceholderText('Password')
  }
  function getEmail() {
    return rendered.getByPlaceholderText('Email')
  }
  function getRole() {
    return rendered.getByPlaceholderText('Role')
  }
  function getState() {
    return rendered.getByDisplayValue('true')
  }

  return {
    ...rendered,
    createUser,
    getName,
    getPassword,
    getEmail,
    getRole,
    getState
  }
}

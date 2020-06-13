import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { TodoTaskApp } from './todoTaskApp'

describe('app', () => {
  it('should create a todo', () => {
    const { getByText, createTodo } = setup()

    createTodo('New todo')

    const newTodo = getByText('New todo')
    expect(newTodo).toBeInTheDocument()
  })

})

function setup() {
  const rendered = render(<TodoTaskApp />)

  function createTodo(text: string) {
    const input = getInput()
    const form = rendered.getByRole('form')

    fireEvent.change(input, { target: { value: text } })
    fireEvent.submit(form)
  }

  function getInput() {
    return rendered.getByLabelText('Todo')
  }

  return {
    ...rendered,
    createTodo,
    getInput
  }
}

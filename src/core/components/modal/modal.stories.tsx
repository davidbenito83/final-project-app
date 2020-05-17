import React from 'react'
import { Modal } from './modal'

export default {
  title: 'Button',
  component: Modal
}

export const primary = () => <Modal theme="primary">Click me</Modal>
export const secondary = () => <Modal theme="secondary">Click me</Modal>

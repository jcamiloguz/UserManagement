import React from 'react'
import { MdDelete, MdEdit, MdAdd } from 'react-icons/md'
import { Buttons } from './styles'

const typeButton = (type) => {
  let Info = {}
  switch (type) {
    case 'delete':
      Info = {
        icon: MdDelete,
        BgColor: '--red-primary',
        HoverColor: '--red-primary',
        FontColor: '--bg-primary',
        text: 'Delete',
      }
      break
    case 'edit':
      Info = {
        icon: MdEdit,
        BgColor: '--yellow-primary',
        HoverColor: '--yellow-dark',
        FontColor: '--bg-primary',
        text: 'Edit',
      }
      break
    case 'add':
      Info = {
        icon: MdAdd,
        BgColor: '--blue-primary',
        HoverColor: '--blue-dark',
        FontColor: '--bg-primary',
        text: 'Add New User',
      }
      break
    case 'save':
      Info = {
        icon: MdEdit,
        BgColor: '--blue-primary',
        HoverColor: '--blue-dark',
        FontColor: '--bg-primary',
        text: 'Save',
      }
      break
    default:
      return type
	}
	return Info
}

export const Button = ({ type }) => {
  const Info = typeButton(type)
  return (
    <>
      <Buttons Info={Info}>
        <Info.icon />
        {Info.text}
      </Buttons>
    </>
  )
}

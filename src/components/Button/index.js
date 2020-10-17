import React from 'react'
import { MdDelete, MdEdit, MdAdd } from 'react-icons/md'
import { Buttons } from './styles'

const typeButton = (type) => {
  let Info = {}
  switch (type) {
    case 'delete':
      Info = {
        icon: MdDelete,
        BgColor: '#E84118',
        HoverColor: '#C23616',
        FontColor: '#fefefe',
        text: 'Delete',
      }
      break
    case 'edit':
      Info = {
        icon: MdEdit,
        BgColor: '#FBC531',
        HoverColor: '#E1B12C',
        FontColor: '#fefefe',
        text: 'Edit',
      }
      break
    case 'add':
      Info = {
        icon: MdAdd,
        BgColor: '#273C75',
        HoverColor: '#192A56',
        FontColor: '#fefefe',
        text: 'Add New User',
      }
      break
    case 'save':
      Info = {
        icon: MdEdit,
        BgColor: '#273C75',
        HoverColor: '#192A56',
        FontColor: '#fefefe',
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

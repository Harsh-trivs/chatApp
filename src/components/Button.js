import React from 'react'

export default function Button({
    label="Button",
    type="button",
    className="",
}) {
  return (
    <>
    <button type={type} class={`text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800  ${className}`}>{label}</button>
    </>
  )
}

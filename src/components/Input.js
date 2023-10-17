import React from 'react'

export default function Input(
  {
    label='',
    name='',
    className='',
    parentClassName='',
    type='text',
    isrequired=true,
    placeholder='',
    value='',
    onChange=()=>{},
  }
) {
  return (
    <>
    <div className={`w-1/2 ${parentClassName}`}>
            <label for={name} className="block mb-2 text-sm font-medium text-gray-900 text-grey-800" >{label}</label>
            <input value={value} onChange={onChange} type={type} id={name}className={`bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${className}`} placeholder={placeholder} required={isrequired}/>
        </div>
    </>
  )
}

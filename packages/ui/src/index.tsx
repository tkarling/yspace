import React from 'react'

export const greeter = (name: string) => `Hello ${name}`

export const MyGreeter = ({ name }: { name: string }) => <div>Hello {name}</div>

import { KeyButton } from "../Box/KeyBox"


export const KeyPad = () => {

  return (
    <div>
      <KeyButton size="large" variant='secondary' txt="1" {... { type: 'button', value: 1, }} />
      <KeyButton size="large" variant='secondary' txt="2" {... { type: 'button', value: 2, }} />
      <KeyButton size="large" variant='secondary' txt="3" {... { type: 'button', value: 3, }} />
      <KeyButton size="large" variant='primary' txt="4" {... { type: 'button', value: 4, }} />
    </div>
  )
}
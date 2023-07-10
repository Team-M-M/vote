'use client'

import { CheckBox } from "@components/Common"
import { ProfileModal } from "@components/Common/Modal/Profile"
import { useState } from "react"

const ProfileContainer = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div onClick={() => setOpen(pre => !pre)}>클릭</div>
      <ProfileModal open={open} setOpen={setOpen} />
    </>
  )
}

export default ProfileContainer
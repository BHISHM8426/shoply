import React from 'react'

const page = ({params}:any) => {
    const {slug} =params;
    console.log("slugfghjk",slug)
  return (
    <div>
      {slug}
    </div>
  )
}

export default page

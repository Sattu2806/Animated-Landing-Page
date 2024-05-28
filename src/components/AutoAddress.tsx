import React, { useState } from 'react'

const AutoAddress = () => {
 const [source, setSource] = useState<any>("");

  return (
        <div className="lists">
      <div className="relative">
        <label className="text-gray-400">Where To?</label>
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="bg-white border-[1px] outline-none rounded-md w-full focus:border-yellow-300 p-1"
        />
        </div>
        </div>
  )
}

export default AutoAddress
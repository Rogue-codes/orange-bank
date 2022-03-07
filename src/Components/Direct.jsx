import React from 'react'

function Direct({id, tittle, actively, setSelected}) {
  return (
    <div>
        <li className={actively ? 'dir actively' :'dir'} onClick={()=>setSelected(id)}>
            {
                tittle
            }
        </li>
    </div>
  )
}

export default Direct
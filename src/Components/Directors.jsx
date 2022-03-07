import React, { useEffect, useState } from 'react'
import Direct from './Direct'
import {All,Directos,MGT} from './Views/DirectorsList'

function Directors() {
    const [selected, setSelected] = useState('all')
    const [data, setData] = useState([])
    const List =[
        {
            id:'all',
            tittle:'Show All'
        },
        {
            id:'directors',
            tittle:'Directors'
        },
        {
            id:'mgt',
            tittle:'Management Team'
        }
    ]
    useEffect(()=>{
        switch (selected) {
            case 'all':
                setData(All)
                break;

            case 'directors':
                setData(Directos)
                break;

            case 'mgt':
                setData(MGT)
                break;
        
            default:
                setData(All)
                break;
        }

    },[selected])
  return (
    <div className='directors'>
        <ul>
            {List.map((d)=>(
                <Direct actively={selected===d.id} tittle={d.tittle} setSelected={setSelected} id={d.id}/>
            ))}
        </ul>

        <div className="container" data-aos="fade-up">
                {data.map((d)=>(
                    <div className="cards">
                    <figure>
                    <img src={d.img} alt="" />
                    </figure>
                    <div className="overlay">
                        <h3>{d.name}</h3>
                        <p>{d.rank}</p>
                    </div>
                </div>
                ))}
        </div>
    </div>
  )
}

export default Directors
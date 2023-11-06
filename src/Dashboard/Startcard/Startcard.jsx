import React from 'react'
import style from'./Startcard.module.css'

const Startcard = ({props,amount}) => {
  return (
    <div className={style.boxs}>
        <>
        <div className={style.mainBox}>
            <div className={style.zebraImg}>
                <img src='../../public/brownZebraPrint (1).jpg' alt="" />
            </div>
            <div className={style.properties}>
                <p>{props}</p>
                <p>{amount}</p>
            </div>
        </div>
        </>
    </div>
  )
}

export default Startcard
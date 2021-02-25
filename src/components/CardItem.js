import React from 'react'
import { Link } from 'react-router-dom'

function CardItem({ path, src, text }) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap">
            <img src={src}
              alt="Travel Image"
              className="cards__item__img" />
          </figure>
          <div className="card__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem

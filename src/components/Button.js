import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ["btn--primary", "btn--outline"]

const SIZES = ["btn--medium", "btn--large"]

export const Button = ({ to, children, type, onClick, buttonStyle, ButtonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  const checkButtonSize = SIZES.includes(ButtonSize) ? ButtonSize : SIZES[0]

  return (
    <Link to={to} className="btn-mobile">
      <button className={`bt ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}>
        {children}
      </button>
    </Link>
  )
}

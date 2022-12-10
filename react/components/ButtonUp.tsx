import React from 'react'
import PropTypes from 'prop-types'
import { useCssHandles } from 'vtex.css-handles'

import './styles.css'

type Props = {
  icon: string
}

function scrollUp() {
  const currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp)
    window.scrollTo(0, currentScroll - currentScroll / 20)
  }
}

const ButtonUp = ({ icon }: Props) => {
  const CSS_HANDLES = ['buttonup-main', 'buttonup-icon']
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div onClick={scrollUp} className={handles['buttonup-main']}>
      <img className={handles['button-icon']} src={icon} alt="icon-img" />
    </div>
  )
}

// INFORMACION PARA BACKOFFICE
ButtonUp.propTypes = {
  icon: PropTypes.string.isRequired,
}

ButtonUp.defaultProps = {
  icon: 'mi_icon.png',
}

ButtonUp.schema = {
  title: 'Boton de Hacia arriba UP',
  type: 'object',
  properties: {
    icon: {
      title: 'icon que se relacione con el store theme',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },

    width: {
      title: 'Ancho',
      description: 'Ancho de medida',
      type: 'number',
    },
    heigth: {
      title: 'Altura',
      description: 'Altura de medida',
      type: 'number',
    },
  },
}

export default ButtonUp

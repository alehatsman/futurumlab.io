import { css } from 'styled-components'

function mediaQuery (...queryFeatures) {
  return (...rules) => css`
    @media ${css(...queryFeatures)} {
      ${css(...rules)}
    }
  `
}

function minWidth (width) {
  return mediaQuery`(min-width: ${width}px)`
}

export default {
  minWidth
}

import { css } from '@emotion/react'

const minWidth = (width: number) => (...rules: TemplateStringsArray) => {
  return css`
    @media (min-width: ${width}px) {
      ${css(...rules)}
    }
  `
}

export default {
  minWidth
}

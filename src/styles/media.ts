import css from '@emotion/css'

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

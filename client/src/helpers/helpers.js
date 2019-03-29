import { startCase, toLower } from 'lodash'

export const titleize = (name) => (
  startCase(toLower(name))
)



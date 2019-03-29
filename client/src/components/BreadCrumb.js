import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const CustomBreadcrumb = ({ crumbs }) => {
  const active = crumbs.pop()
  return (
  <Breadcrumb >
    { crumbs.map(c => (
      <React.Fragment key={c}>
        <Breadcrumb.Section key={c} >{c}</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle'/>
      </React.Fragment>
      ))
    }
    <Breadcrumb.Section active key={active} >{active}</Breadcrumb.Section>
  </Breadcrumb>
  )
}

export default CustomBreadcrumb

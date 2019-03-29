import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import { titleize } from '../helpers/helpers'
import Breadcrumb from './BreadCrumb'

const listGeneratorRecursive = (categories, handleClick, parentName) => (
  categories.map((category) => {
    const ancestries = parentName ? parentName + '/' + category.name : category.name
    return (
      <List.Item
        name={category.id}
        id={ancestries}
        key={category.id}
        onClick={handleClick}
      >{titleize(category.name)}
        {category.children.length > 0 &&
          <List.List>
            {listGeneratorRecursive(category.children, handleClick, ancestries)}
          </List.List>
        }
      </List.Item>
    )
  })
)

class CategoryFilter extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories, selectedCategories, handleClick } = this.props
    return (
      <div>
        {selectedCategories && <Breadcrumb
          crumbs={selectedCategories}
        />}
        <hr className='thick' />
        <List bulleted className='categories'>
          {listGeneratorRecursive(categories, handleClick, null)}
        </List>
      </div>
    )
  }
}

export default CategoryFilter

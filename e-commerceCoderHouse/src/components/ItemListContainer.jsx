import React from 'react'
import ItemList from './ItemList'
import CategoryMenu from './CategoryMenu'
const ItemListContainer = () => {
  return (
	<div>
		<CategoryMenu />
	  <ItemList></ItemList>
	</div>
  )
}

export default ItemListContainer

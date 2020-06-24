import React from 'react'
import PropTypes from 'prop-types'
import TableTemplate from '../../../../components/Tables/TableTemplate'

const ProductTable = ({
    selectedItems,
    items,
    handlePageChange,
    handleRowsPerPageChange,
    page
}) => {


    
    return (
        <TableTemplate 
            selectedItems={selectedItems}
            items={items}
            handlePageChange={handlePageChange}
            handleRowsPerPageChange={handleRowsPerPageChange}
            page={page}
        />
    )
}

ProductTable.propTypes = {

}

export default ProductTable
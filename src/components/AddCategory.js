import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handle_onChange = (e) => {
        setInputValue(e.target.value)
    };

    const handle_Sumit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2)
        {
            setCategories(cat => [inputValue,...cat]);
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handle_Sumit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange= {handle_onChange}
                />
            </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory

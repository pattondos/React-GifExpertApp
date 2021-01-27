import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const hadleInputChange = event => {
        setInputValue(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(categorie => [inputValue, ...categorie]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input
                type="text"
                value={inputValue}
                onChange={hadleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;

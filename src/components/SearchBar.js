import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        //console.log(event.target.value);
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        //console.log(searchTerm);

        onFormSubmit(searchTerm);

        event.preventDefault();
    }

    render() {
        return (
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}> 
                    <TextField fullwidth label="Search..." onChange={this.handleSubmit} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;
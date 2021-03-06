import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props) 

        this.state = {
            term: ''
        }
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form  onSubmit={e => { this.onFormSubmit(e) }} className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={e => {this.setState({ term: e.target.value })}}/>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;
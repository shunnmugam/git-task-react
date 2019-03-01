import React, { Component } from 'react';
import {searchUpdate} from "../redux/action";
import {connect} from "react-redux";

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword : props.keyword
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    /*
     * on update
     */
    onUpdate(v) {
        console.log(v);
        this.setState({
            keyword : v
        })
    }
    /*
     * on submit
     */
    onSubmit() {
        this.props.searchUpdate(this.state.keyword);
        //this.props.onSubmit(this.state.keyword);
    }

    render() {
        return (
            <div className="row mb-2 containers" id="search-container">
                <div className="col-12 title-bar pt-2 pb-1">
                    <h5>Git Repo Search Filter</h5>
                </div>
                <div className="col-12 p-2">
                    <input type="text" id="search-bar" className="form-control mr-4" name="search-bar"
                           onChange={(e) => this.onUpdate(e.target.value)}
                           value={this.state.keyword} />
                    <button type="button" id="search-button" onClick={this.onSubmit} className="btn">Search</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.keyword,
});

const mapDispatchToProps = {
    searchUpdate
};

const SearchbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Searchbar);

export default SearchbarContainer;
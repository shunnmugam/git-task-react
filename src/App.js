import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Searchbar from "./components/Searchbar";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas : [],
      currentPage : 1,
      keyword : "TEST"
    };

    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);

    this.getDatas();
    console.log(props.keyword)
  }

  getDatas() {

    const apiUrl = `https://api.github.com/search/repositories?q=${this.state.keyword}&per_page=12&page=${this.state.currentPage}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then((response) => {
          if(response.items) {
            this.setState({
                datas : response.items
            })
          }
      })
  }

  /*
   * on submit
   */
  onSubmit(keyword) {
    this.setState({
        currentPage : 1,
        keyword : keyword
    },this.getDatas);
  }

  goNext() {
    const currentPage = this.state.currentPage;
    console.log(currentPage);
    this.setState({
        currentPage : currentPage + 1
    },this.getDatas);
  }

  goPrev() {
      const currentPage = this.state.currentPage;
      if(currentPage>1) {
          this.setState({
              currentPage: currentPage - 1
          },this.getDatas);
      }
  }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.keyword !== this.props.keyword) {
            this.onSubmit(this.props.keyword)
        }
    }

  render() {
    return (
      <div id="main-container" className="container pt-2 pb-2">
        <Searchbar keyword={this.state.keyword}/>
        <div className="row containers" id="result-container">
          <div className="col-12 title-bar pt-2 pb-1">
            <h5>Repo Search Result</h5>
          </div>
          <div className="row m-0 pb-3 pt-3">
            <div className="result-groups row m-0 flex-wrap" id="result-group">
              {this.state.datas.map((data) => {
                return <Card key={data.id} data={data} />
              })}
            </div>
          </div>
          <div className="col-12 mb-2 pagination-container mt-2">
            <button type="button" className="btn btn-sm" id="prev-btn" onClick={this.goPrev}>Prev</button>
              <span>{this.state.currentPage}&nbsp;&nbsp;</span>
            <button type="button" className="btn btn-sm" id="next-btn" onClick={this.goNext}>Next</button>
          </div>
        </div>
    </div>
    );
  }
}
const mapStateToProps = (state) => ({
    keyword : state.keyword,
});



const AppContainer = connect(
    mapStateToProps
)(App);

export default AppContainer;


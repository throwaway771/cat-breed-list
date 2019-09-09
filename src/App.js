import React, {Component} from 'react';
import Breeds from './components/breeds';

class App extends Component {

  state = {
    value: '',
    allBreeds: [],
    visibleBreeds: [],
    dataSource: [],
    origins: [],
    selectValue: []
  }

  onChange = value => {
    this.setState({ searchValue: value });
  };

  onSearch = value => {
    let endpoint = 'http://localhost:3000/breeds/';
    if (value) {
      endpoint += 'name/'+value; 
    }
    fetch(endpoint)
    .then(res => res.json())
    .then((data) => {
      this.setState({visibleBreeds: data})
      this.setState({selectValue: []}) // Reset origin filter when doing a search
    })
    .catch(console.log)
  };

  filterByOrigin = origins => {
    this.setState({
      visibleBreeds : origins.length > 0 ? this.state.allBreeds.filter(breed => origins.includes(breed.origin)) : this.state.allBreeds,
      selectValue: origins,
      searchValue: null
    });
  }

  componentDidMount() {
    fetch('http://localhost:3000/breeds/')
    .then(res => res.json())
    .then((data) => {
      const origins = data.map(({ origin }) => origin);
      this.setState({ allBreeds: data });
      this.setState({ visibleBreeds: data });
      this.setState({ dataSource: data.map(({ name }) => name )});
      this.setState({ origins: [...new Set(origins)]});
    })
    .catch(console.log)
  }

  render () {
    return (
      <Breeds
        breeds={this.state.visibleBreeds}
        origins={this.state.origins}
        handleSearchChange={this.onChange}
        handleSearch={this.onSearch}
        handleSelectChange={this.filterByOrigin}
        selectValue={this.state.selectValue}
        searchValue={this.state.searchValue}
        />
    );
  }
}

export default App;

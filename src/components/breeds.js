import React from 'react';
import '../App.css';
import { Select } from 'antd';
import { Input } from 'antd';

const { Search } = Input;

const { Option } = Select;

const Breeds = ({ breeds, origins, handleSearch, handleSearchChange, handleSelectChange, selectValue, searchValue }) => {

  const children = [];
  origins.forEach(value => {
    children.push(<Option key={value}>{value}</Option>);
  });

  return (
    <div>
      <center><h1>Cat Breed List</h1></center>
        <div className="App">
          <div style={{padding:'5px'}}>
        <Select
            mode="multiple"
            value={selectValue}
            style={{ width: '30%' }}
            placeholder="Filter by origin"
            onChange={handleSelectChange}
        >
            {children}
        </Select>
        </div>
        <div style={{padding:'5px'}}>
        <Search
          value={searchValue}
          placeholder="Search by name"
          onChange={(evt) => handleSearchChange(evt.target.value)}
          onSearch={handleSearch}
          style={{ width: '30%' }}
        />
        </div>
      </div>
      <div style={{margin: 15}}>
      <table class="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Temperament</th>
                <th scope="col">Origin</th>
            </tr>
        </thead>
        <tbody>
            {breeds.map((breed) => (
            <tr>
                <td>{breed.name}</td>
                <td>{breed.description}</td>
                <td>{breed.temperament}</td>
                <td>{breed.origin}</td>
            </tr>
            ))}
        </tbody>
        </table>
        </div>
    </div>
  )
};

export default Breeds
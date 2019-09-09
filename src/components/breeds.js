import React from 'react';
import '../App.css';
import { Select, Input, Table } from 'antd';

const { Search } = Input;
const { Option } = Select;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  },
  {
    title: 'Origin',
    dataIndex: 'origin',
    key: 'origin'
  },
  {
    title: 'Temperament',
    dataIndex: 'temperament',
    key: 'temperament'
  }
];

const Breeds = ({ breeds, origins, handleSearch, handleSearchChange, handleSelectChange, selectValue, searchValue }) => {

  const children = [];
  origins.forEach(value => {
    children.push(<Option key={value}>{value}</Option>);
  });

  return (
    <div>
      <center><h1>Cat Breed List</h1></center>
        <div className="App">
        <Select
            mode="multiple"
            value={selectValue}
            style={{ width: '30%', margin: '1%' }}
            placeholder="Filter by origin"
            onChange={handleSelectChange}>
            {children}
        </Select>
        <Search
          value={searchValue}
          placeholder="Search by name"
          onChange={(evt) => handleSearchChange(evt.target.value)}
          onSearch={handleSearch}
          style={{ width: '30%', margin: '1%' }}
        />
        <Table columns={columns} dataSource={breeds} />
      </div>
    </div>
  )
};

export default Breeds
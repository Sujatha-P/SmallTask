import React, { useState } from 'react';

const TableData = () => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file !== '') {
      const newData = [...data];
      newData.push(file);
      setData(newData);
      setFile('');
    }
  };

  const handleRemove = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleEdit = (index, value) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const handleUpdate = () => {
    if (editIndex !== -1 && editValue !== '') {
      const newData = [...data];
      newData[editIndex] = editValue;
      setData(newData);
      setEditIndex(-1);
      setEditValue('');
    }
  };

  return (
    <div>
      <h2>Table Data</h2>
      <input type="file" onChange={handleFileChange} />
      <button className='btn btn-outline-primary' onClick={handleUpload}>Upload</button>

      <table className='table table-hover w-50'>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((file, index) => (
            <tr key={index}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                ) : (
                  file.name
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <button onClick={handleUpdate}>Update</button>
                ) : (
                  <>
                    <button className='btn btn-outline-primary' onClick={() => handleEdit(index, file.name)}>
                      Edit
                    </button>
                    <button  className='btn btn-outline-primary ms-2' onClick={() => handleRemove(index)}>
                      Remove
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;


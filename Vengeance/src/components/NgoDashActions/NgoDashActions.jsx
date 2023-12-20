import "./NgoDashActions.css"
import  { useState } from 'react';


function NgoDashActions(){
  const [ngoData, setNgoData] = useState([
    { id: 1, name: 'Sayan maity', address: '123 Main St', contact: '123-456-7890' },
    { id: 2, name: 'Tarpan Ghosh', address: '456 Elm St', contact: '987-654-3210' },
    { id: 3, name: 'Rittik Mondal', address: '123 Main St', contact: '123-456-7890' },
    { id: 4, name: 'pritam samanta', address: '456 Elm St', contact: '987-654-3210' },
    { id: 5, name: 'Tanmay ', address: '123 Main St', contact: '123-456-7890' },
    { id: 6, name: 'Chotu Mishra', address: '456 Elm St', contact: '987-654-3210' },
  ]);

  const [formData, setFormData] = useState({ id: null, name: '', address: '', contact: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.id) {
      const updatedData = ngoData.map((ngo) =>
        ngo.id === formData.id ? { ...ngo, ...formData } : ngo
      );
      setNgoData(updatedData);
    } else {
      setNgoData([...ngoData, { ...formData, id: ngoData.length + 1 }]);
    }

    setFormData({ id: null, name: '', address: '', contact: '' });
  };

  const handleEdit = (id) => {
    const selectedNgo = ngoData.find((ngo) => ngo.id === id);
    setFormData(selectedNgo);
  };

  const handleDelete = (id) => {
    const updatedData = ngoData.filter((ngo) => ngo.id !== id);
    setNgoData(updatedData);
  };

  
   return(
    <div>
<div className="dashboard-container">
  <div className="form-container">
  
    <form onSubmit={handleSubmit}>
    <h3>Enter Citizen</h3>
      <label htmlFor="name">Citizen Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="contact">Contact:</label>
      <input
        type="text"
        id="contact"
        name="contact"
        value={formData.contact}
        onChange={handleInputChange}
        required
      />

      <button className="addBtn" type="submit">{formData.id ? 'Update' : 'Add'}</button>
    </form>
  </div>

  <div className="table-container">
    <h3>Citizen List</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {ngoData.map((ngo) => (
          <tr key={ngo.id}>
            <td>{ngo.id}</td>
            <td>{ngo.name}</td>
            <td>{ngo.address}</td>
            <td>{ngo.contact}</td>
            <td>
              <button className="editBtn" onClick={() => handleEdit(ngo.id)}>Edit</button>
              <button className="deleteBtn" onClick={() => handleDelete(ngo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>
   )
}
export default NgoDashActions;
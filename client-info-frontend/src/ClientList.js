// src/ClientList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clients');
        console.log(`Response Status: ${response.status}`);
        console.log(response.data);
        console.log(1);
        setClients(response.data);
      } catch (error) {
        if (error.response) {
          console.log(`Error Status: ${error.response.status}`);
        } else {
          console.log('Error without response');
        }
        console.log(2);
        console.error('There was an error fetching the client data!', error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h1>Client List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client._id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.location}</td>
              <td>{client.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientList;

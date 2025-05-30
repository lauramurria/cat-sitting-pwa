import React, { useState } from 'react';
import './App.css';
import CatCard from './components/CatCard';
import AddressDisplay from './components/AddressDisplay';
import AddressForm from './components/AddressForm';

const cats = [
  {
    name: 'Whiskers',
    breed: 'Siamese',
    age: 3,
    personality: 'Playful and curious',
    image: '/cat-placeholder.jpg'
  },
  {
    name: 'Mittens',
    breed: 'Persian',
    age: 5,
    personality: 'Gentle and affectionate',
    image: '/cat-placeholder.jpg'
  },
  {
    name: 'Fluffy',
    breed: 'Maine Coon',
    age: 2,
    personality: 'Friendly and adventurous',
    image: '/cat-placeholder.jpg'
  }
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    alarmCode: '',
    keyLocation: '',
    parkingInfo: '',
    additionalInstructions: ''
  });

  const handleFormSubmit = (formData) => {
    setAddress(formData);
    setShowForm(false);
  };

  const handleEdit = () => {
    setShowForm(true);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Cat Sitting App</h1>
        <p>Find the perfect cat sitting experience</p>
      </header>
      
      <div className="address-section">
        {showForm ? (
          <AddressForm 
            onSubmit={handleFormSubmit}
            initialData={address}
          />
        ) : (
          <AddressDisplay 
            address={address}
            onEdit={handleEdit}
          />
        )}
      </div>

      <main className="cats-grid">
        {cats.map((cat, index) => (
          <CatCard key={index} cat={cat} />
        ))}
      </main>
    </div>
  );
}

export default App;

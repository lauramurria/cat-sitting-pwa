import React, { useState } from 'react';
import './AddressForm.css';

const AddressForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    street: initialData?.street || '',
    city: initialData?.city || '',
    state: initialData?.state || '',
    postalCode: initialData?.postalCode || '',
    country: initialData?.country || '',
    alarmCode: initialData?.alarmCode || '',
    keyLocation: initialData?.keyLocation || '',
    parkingInfo: initialData?.parkingInfo || '',
    additionalInstructions: initialData?.additionalInstructions || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="address-form">
      <h2>Address Information</h2>
      
      <div className="form-group">
        <label htmlFor="street">Street Address *</label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">City *</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State *</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code *</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country *</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <h2>Security Details</h2>
      
      <div className="form-group">
        <label htmlFor="alarmCode">Alarm Code</label>
        <input
          type="text"
          id="alarmCode"
          name="alarmCode"
          value={formData.alarmCode}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="keyLocation">Key Location</label>
        <textarea
          id="keyLocation"
          name="keyLocation"
          value={formData.keyLocation}
          onChange={handleChange}
          rows="3"
        ></textarea>
      </div>

      <h2>Parking Information</h2>
      
      <div className="form-group">
        <label htmlFor="parkingInfo">Parking Details</label>
        <textarea
          id="parkingInfo"
          name="parkingInfo"
          value={formData.parkingInfo}
          onChange={handleChange}
          rows="3"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="additionalInstructions">Additional Instructions</label>
        <textarea
          id="additionalInstructions"
          name="additionalInstructions"
          value={formData.additionalInstructions}
          onChange={handleChange}
          rows="4"
        ></textarea>
      </div>

      <button type="submit" className="submit-button">Save Address</button>
    </form>
  );
};

export default AddressForm;

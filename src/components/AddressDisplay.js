import React from 'react';
import './AddressDisplay.css';

const AddressDisplay = ({ address, onEdit }) => {
  const hasSecurityDetails = address.alarmCode || address.keyLocation;
  const hasParkingInfo = address.parkingInfo;

  return (
    <div className="address-display">
      <h2>Address Information</h2>
      <div className="address-info">
        <p>{address.street}</p>
        <p>{`${address.city}, ${address.state} ${address.postalCode}`}</p>
        <p>{address.country}</p>
      </div>

      {hasSecurityDetails && (
        <div className="security-details">
          <h3>Security Details</h3>
          {address.alarmCode && (
            <p><strong>Alarm Code:</strong> {address.alarmCode}</p>
          )}
          {address.keyLocation && (
            <p><strong>Key Location:</strong> {address.keyLocation}</p>
          )}
        </div>
      )}

      {hasParkingInfo && (
        <div className="parking-info">
          <h3>Parking Information</h3>
          <p>{address.parkingInfo}</p>
        </div>
      )}

      {address.additionalInstructions && (
        <div className="additional-info">
          <h3>Additional Instructions</h3>
          <p>{address.additionalInstructions}</p>
        </div>
      )}

      <button onClick={onEdit} className="edit-button">Edit Address</button>
    </div>
  );
};

export default AddressDisplay;

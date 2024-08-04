import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PropertyDetails.css';

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = React.useState(null);
    const [owner, setOwner] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        axios.get(`http://localhost:6013/api/Property_T5/${id}`)
            .then(response => {
                setProperty(response.data);
                console.log('Property Data:', response.data);  // Debugging
                return axios.get(`http://localhost:6013/api/Owner_T5/${response.data.ownerId}`);
            })
            .then(response => {
                setOwner(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching property or owner:', error); // Debugging
                if (error.response) {
                    setError(`Server Error: ${error.response.status} ${error.response.statusText}`);
                } else if (error.request) {
                    setError('Network Error: No response from server.');
                } else {
                    setError(`Error: ${error.message}`);
                }
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!property || !owner) return <p>No data found.</p>;

    return (
        <div className="property-details">
            <h1>{property.propertyName}</h1>
            <img src={property.images} alt={property.propertyName} className="property-image" />
            <p>Type: {property.propertyType}</p>
            <p>Location: {property.location}</p>
            <p>Status: {property.status}</p>
            <p>Price: ${property.amount}</p>
            <p>Date: {new Date(property.date).toLocaleDateString()}</p>
            <h2>Owner Details</h2>
            <p>Name: {owner.name}</p>
            <p>Email: {owner.email}</p>
            <p>Address: {owner.address}</p>
            <p>Phone: {owner.mobileNumber}</p>
        </div>
    );
};

export default PropertyDetails;

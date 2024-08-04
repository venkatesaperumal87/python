import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PropertyList.css';

const PropertyList = () => {
    const [properties, setProperties] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    React.useEffect(  ()=> {
       axios.get('http://localhost:6013/api/Property_T5')
            .then(response => {
                setProperties(response.data);
                console.log('Properties Data:', response.data); // Debugging
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching properties:', error); // Debugging
                if (error.response) {
                    setError(`Server Error: ${error.response.status} ${error.response.statusText}`);
                } else if (error.request) {
                    setError('Network Error: No response from server.');
                } else {
                    setError(`Error: ${error.message}`);
                }
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="property-list">
            <h1>Property List</h1>
            {properties.length === 0 ? (
                <p>No properties available.</p>
            ) : (
                properties.map(property => (
                    <div
                        key={property.propertyId}
                        className="property-card"
                        onClick={() => navigate(`/property/${property.propertyId}`)}
                    >
                        <img src={property.images} alt={property.propertyName} className="property-image" />
                        <div className="property-details">
                            <p>Property Type: {property.propertyType}</p>
                            <p>Location: {property.location}</p>
                            <p>Price: ${property.amount}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default PropertyList;

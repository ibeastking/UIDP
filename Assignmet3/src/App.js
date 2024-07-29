import './App.css';

import React, { useState } from 'react';
import Form from './Form';
import Uploader from './Uploader';

const App = () => {
    const [photos, setPhotos] = useState([]);

    const addPhoto = (photo) => {
        setPhotos([...photos, photo]);
    };

    const editPhoto = (index, newDescription) => {
        const updatedPhotos = photos.map((photo, i) => 
            i === index ? { ...photo, description: newDescription } : photo
        );
        setPhotos(updatedPhotos);
    };

    const removePhoto = (index) => {
        const updatedPhotos = photos.filter((_, i) => i !== index);
        setPhotos(updatedPhotos);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Photo Uploader</h1>
            <Form addPhoto={addPhoto} />
            <Uploader photos={photos} editPhoto={editPhoto} removePhoto={removePhoto} />
        </div>
    );
};

export default App;
import React, { useState } from 'react';

const Uploader = ({ photos, editPhoto, removePhoto }) => {
    const [editingIndex, setEditingIndex] = useState(null);
    const [newDescription, setNewDescription] = useState('');

    const handleEdit = (index, description) => {
        setEditingIndex(index);
        setNewDescription(description);
    };

    const handleSave = (index) => {
        editPhoto(index, newDescription);
        setEditingIndex(null);
        setNewDescription('');
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {photos.map((photo, index) => (
                <div 
                    key={index} 
                    style={{ 
                        border: '1px solid #ccc', 
                        padding: '10px', 
                        width: '200px', 
                        textAlign: 'center' 
                    }}
                >
                    <img 
                        src={photo.photo} 
                        alt={photo.description} 
                        style={{ maxWidth: '180px', maxHeight: '180px', marginBottom: '10px' }} 
                    />
                    {editingIndex === index ? (
                        <>
                            <input 
                                type="text" 
                                value={newDescription} 
                                onChange={(e) => setNewDescription(e.target.value)} 
                            />
                            <button onClick={() => handleSave(index)}>Save</button>
                        </>
                    ) : (
                        <>
                            <p>{photo.description}</p>
                            <button onClick={() => handleEdit(index, photo.description)}>Edit</button>
                        </>
                    )}
                    <button onClick={() => removePhoto(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Uploader;

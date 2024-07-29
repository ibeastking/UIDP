import React, { useState } from 'react';

const Form = ({ addPhoto }) => {
    const [photo, setPhoto] = useState(null);
    const [description, setDescription] = useState('');

    const handlePhotoChange = (e) => {
        setPhoto(URL.createObjectURL(e.target.files[0]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (photo && description) {
            addPhoto({ photo, description });
            setPhoto(null);
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <div>
                <input type="file" accept="image/*" onChange={handlePhotoChange} />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </div>
            <button type="submit">Add Photo</button>
        </form>
    );
};

export default Form;

// AddMovie.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovie.css';

const AddMovie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [posterUrl, setPosterUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, director, genre, year, synopsis, posterUrl });
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="add-movie">
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} required />
        <select value={genre} onChange={(e) => setGenre(e.target.value)} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
        </select>
        <input type="number" placeholder="Release Year" value={year} onChange={(e) => setYear(e.target.value)} required />
        <textarea placeholder="Synopsis" value={synopsis} onChange={(e) => setSynopsis(e.target.value)} required />
        <input type="url" placeholder="Poster URL" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} required />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovie;

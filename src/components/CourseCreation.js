import React, { useState } from 'react';
import axios from 'axios';
import './CreateCourse.css'; // استيراد ملف CSS

const CourseCreation = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('thumbnail', thumbnail);
    await axios.post('http://localhost:5000/courses', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  };

  return (
    <form className="create-course-form" onSubmit={handleSubmit}>
      <h1>Create a New Course</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Course Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Course Description"
        required
      />
      <input type="file" onChange={(e) => setThumbnail(e.target.files[0])} />
      <button type="submit">Create Course</button>
    </form>
  );
};

export default CourseCreation;

// BlogTopicList.jsx
import React from 'react';

const BlogTopicList = () => {
  // Replace this array with your actual list of blog topics
  const topics = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5'];

  return (
    <div className="blog-topic-list">
      <h3>Topics</h3>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogTopicList;
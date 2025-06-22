import React, { useState } from 'react';

const TweetBox = () => {
  const [tweet, setTweet] = useState('');
  const [tweetarray, setTweetarray] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const limit = 240;

  const handlePost = () => {
    if (tweet.trim() === '') return;

    if (editIndex === null) {
      setTweetarray([tweet, ...tweetarray]);
    } else {
      const updatedTweets = [
        ...tweetarray.slice(0, editIndex),
        tweet,
        ...tweetarray.slice(editIndex + 1),
      ];
      setTweetarray(updatedTweets);
      setEditIndex(null);
    }

    setTweet('');
  };

  const handleDelete = (indexToDelete) => {
    setTweetarray(tweetarray.filter((_, index) => index !== indexToDelete));
  };

  const handleEdit = (indexToEdit) => {
    setTweet(tweetarray[indexToEdit]);
    setEditIndex(indexToEdit);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Tweet Box</h2>

      <textarea
        rows={5}
        value={tweet}
        onChange={(e) => {
          if (e.target.value.length <= limit) {
            setTweet(e.target.value);
          }
        }}
        placeholder="What's happening?"
        className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="text-sm text-gray-600 mt-1 mb-3">
        {limit - tweet.length} characters remaining
      </div>

      <button
        onClick={handlePost}
        disabled={tweet.trim().length === 0}
        className={`px-4 py-2 rounded-md text-white font-medium ${
          editIndex === null
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-yellow-500 hover:bg-yellow-600'
        } disabled:opacity-50`}
      >
        {editIndex === null ? 'Tweet' : 'Update'}
      </button>

      <ul className="mt-6 space-y-4">
        {tweetarray.map((t, index) => (
          <li
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-gray-800 break-words mb-2 sm:mb-0">{t}</p>
            <div className="flex space-x-3 mt-2 sm:mt-0">
              <button
                onClick={() => handleEdit(index)}
                className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TweetBox;

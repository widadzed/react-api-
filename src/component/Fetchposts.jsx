import React, { useState, useEffect } from 'react';

  export function FetchPosts({ setData }) {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [setData]);

  return null; 
}



import React, { useState, useEffect } from 'react'

const TypedFetchRequest = () => {

const [posts, setPosts] = useState<Post[]>([]);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  if (!res.ok) throw new Error("Failed to fetch posts");

  const data: Post[] = await res.json();
  return data;
}

useEffect(() => {
  fetchPosts()
    .then(fetchedPosts => {
      setPosts(fetchedPosts);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
}, []);

// 4. JSX Rendering
if (loading) return <p>Lädt...</p>;
if (error) return <p>Fehler: {error}</p>;


  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>

            <div style={{ marginBottom: "12px"}}>
                <p style={{ fontWeight: "bold"}}>
                    Basic Example: Fetching Data from an API
                </p>
              <ul style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '16px', 
                listStyle: 'none', 
                padding: 0 
              }}>
                {posts.map(post => (
                  <li key={post.id} style={{ 
                    border: '1px solid #ccc', 
                    borderRadius: '8px', 
                    padding: '12px', 
                    backgroundColor: '#f9f9f9' 
                  }}>
                    <strong>{post.id}. {post.title}</strong>
                    <p style={{ fontSize: '0.9em', color: '#555' }}>{post.body}</p>
                  </li>
                ))}
              </ul>

            </div>
        </div>
    </>
  )
}

export default TypedFetchRequest
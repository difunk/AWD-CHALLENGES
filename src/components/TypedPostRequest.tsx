import React, { useState, useEffect } from 'react';
import type { NewPost, Post } from '../types/Interfaces';

async function createPost(post: NewPost): Promise<Post> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });

  const data: Post = await res.json();
  return data;
}

const TypedPostRequest = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState(1);

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);


    const handleCreatePost = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage(null);
        setErrorMessage(null);


    createPost({ title, body, userId })
        .then(post => {
            setSuccessMessage(
            `Post erfolgreich erstellt mit:
            ID: ${post.id}
            UserID: ${post.userId}
            Titel: ${post.title}
            Inhalt: ${post.body}`
            );
            setTitle('');
            setBody('');
        })
        .catch(error => {
            setErrorMessage(error.message);
        })
        .finally(() => {
            setLoading(false);
        });
    };

  return (
        <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>

            <div style={{ marginBottom: "12px"}}>
                <p style={{ fontWeight: "bold"}}>
                    Typing a POST Request (Sending Data)
                </p>

                <form onSubmit={handleCreatePost}>
                    <div>
                        <label>Titel:
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                            disabled={loading}
                            style={{ width: '100%', marginBottom: '8px', border: "2px solid black", borderRadius: "8px"}}
                            />
                        </label>
                    </div>

                    <div>
                        <label>Body:
                            <textarea
                            value={body}
                            onChange={e => setBody(e.target.value)}
                            required
                            disabled={loading}
                            style={{ width: '100%', marginBottom: '8px', border: "2px solid black", borderRadius: "8px" }}
                            />
                        </label>
                    </div>
                    <button style={{ backgroundColor: "lightblue", padding: "12px", border: "2px solid black", borderRadius: "8px" }} type="submit" disabled={loading}>
                        {loading ? 'Sende Post...' : 'Post erstellen'}
                    </button>
                </form>

                {successMessage && <p style={{ color: 'green', marginTop: '12px' }}>{successMessage}</p>}
                {errorMessage && <p style={{ color: 'red', marginTop: '12px' }}>{errorMessage}</p>}
            </div>
        </div>
    </>
  )
}

export default TypedPostRequest
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { z } from "zod"

const PostSchema = z.object({
    title: z.string().transform((title) => title.toUpperCase()),
    userId: z.number().default(0),
    id: z.number(),
    body: z.string().refine((value) => value.length > 10, {
      message: "Body is too short"
    }),
})

type Post = z.infer<typeof PostSchema>
const PostListSchema = z.array(PostSchema)

const TypedFetchRequest = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  async function getPosts(): Promise<Post[]> {
    const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10');

    const data = PostListSchema.safeParse(res.data)
      if (data.success){
        console.log(data)
        return data.data;
      } else {
        console.log(data)
        return [];
      }
  }

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then(retrievedPosts => {
        setPosts(retrievedPosts);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if(axios.isAxiosError(err)) {
          setError(err.message);
        }
        if(err instanceof z.ZodError){
          console.error(err.message)
        }
        
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Lädt...</p>;
  if (error) return <p>Fehler: {error}</p>;

    return (
      <>
          <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
              <div style={{ marginBottom: "12px"}}>
                  <p style={{ fontWeight: "bold"}}>
                      Basic Example: Fetching Data from an API && Typed GET Request with Axios
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
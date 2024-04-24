// Next.js API route
export default async function handler(req, res) {

    const fileUrl = "https://brrctpvbkaisfaohwokv.supabase.co/storage/v1/object/sign/forumNotes/fc825a68-1e45-4698-ac99-9d8445bc7d50/04f1f904-67c3-4363-b4bc-56d29edae819?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3J1bU5vdGVzL2ZjODI1YTY4LTFlNDUtNDY5OC1hYzk5LTlkODQ0NWJjN2Q1MC8wNGYxZjkwNC02N2MzLTQzNjMtYjRiYy01NmQyOWVkYWU4MTkiLCJpYXQiOjE2OTkyMTY3NzcsImV4cCI6MTY5OTgyMTU3N30.GIhdFqaTqWTa5WF11qsGCZCNv3jtk7-RcZ8BC7LECsA&t=2023-11-05T20%3A39%3A37.894Z";
    const interests = ["blockchain", "basketball"]; // Assuming interests is an array in the query parameters
    const topic = "Living Standards and Povery in Economics";

    const apiUrl = `http://127.0.0.1:5000/notes?file_url=${fileUrl}&interests=${interests}&topic=${topic}`;
    console.log(apiUrl);

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json' // Set the appropriate content type
          // Add any other necessary headers
        }
      });

      if (response.ok) {
        const data = response.json();
        res.status(200).json(data);
      } else {
        res.status(response.status).end();
      }

  } 

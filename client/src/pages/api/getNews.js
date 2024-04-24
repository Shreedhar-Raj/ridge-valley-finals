// pages/api/getNews.js

import {fetch} from 'node-fetch' // Ensure you have 'node-fetch' installed in your project

export default async (req, res) => {
  const { userInterests } = req.query; // Assuming user interests are passed as query parameters

  try {
    const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=${userInterests}&api_key=YOUR_RSS2JSON_API_KEY`;

    const response = await fetch(feedUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch news articles');
    }

    const data = await response.json();

    // Get the top 3 news articles
    const top3Articles = data.items.slice(0, 3);

    res.status(200).json({ articles: top3Articles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

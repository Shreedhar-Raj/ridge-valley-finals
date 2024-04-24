

---

# StudySage 🚀

## Running the Application

Make sure you have:

- Git
- Python 3.11.x or higher
- Node 19.x or higher
- NPM

First, you need to clone the repository:

```
git clone https://github.com/Shreedhar-Raj/nextjs-flask-boilerplate.git
```

```
cd nextjs-flask-boilerplate
```

### To run the client 🖥️

```
cd client && npm install
```

1. Build the App
   ```
   npm run build
   ```
2. Run in Dev mode
   ```
   npm run dev
   ```
3. Run in App mode
   ```
   npm run start
   ```

### To run the server 🖥️

```
cd server
```

1. Initiate a virtual environment
   ```
   python3 -m pip install --user virtualenv
   python3 -m venv venv
   source venv/bin/activate
   ```
2. Install dependencies

```
python3 -m pip install -r requirements.txt
```

3. Run the server with Flask

   ```
   flask run
   ```
   or
   ```
   flask run --debug
   ```

4. Run the server using Gunicorn

   ```
   gunicorn --config gunicorn_config.py app:app
   ```

## Features 📝

### AI-Based Note Generator 🤖
- Upload PDFs or notes to generate summaries, question banks, and mind maps via OCR and GPT-4 summarization.

### Optimized Scheduling 🗓️
- Enter test details, priorities for each chapter/topic, and available timings to receive AI-generated schedules tailored to your learning pace.
- Modifies schedules based on test scores and user-set preferences.

### Co-curriculars and Activities 🏅
- Balances academic performance with extracurricular activities for efficient scheduling.

### Curiosity and Exploration 🧐
- Integrates student interests with the school syllabus, providing engaging study materials and encouraging self-learning.

### Student Collaboration (Resource Hub) 🤝
- Allows users to upload and share study resources, possibly implementing a ticket system for specific requests.

### Peer Finder and Study Groups (Additional) 🎓
- Utilizes dimensionality reduction techniques to create collaborative study schedules for groups.

## Technology Stack 🛠️

- **NextJS** 🌐 - Frontend development
- **Supabase** 🗄️ - Cloud-hosted database and user management
- **Flask** 🐍 - Backend development
- **Python** 🐍 - Utilized for AI models
- **Tailwind CSS** 💻 - For frontend styling

---
# ridge-valley-finals

export default async function getNews(req, res) {
    const sampleData = {
    subjects: 'Math,Science,History',
    chapters: '1,2,3',
    daily_availability: '4',
    proficiency_scores: '80,75,90',
    extracurriculars: 'Music,Dance',
    upcoming_tests: 'Math,Science',
    learning_pace: 'Medium',
    daily_test_scores: '70,85,80'
};

const queryString = new URLSearchParams(sampleData).toString();
const apiUrl = `http://127.0.0.1:5000/schedule?${queryString}`;

fetch(apiUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});
}
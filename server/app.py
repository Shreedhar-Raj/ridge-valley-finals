from flask import Flask, request
from model import gen_schedule
from ainotes import gen_notes
from studyBuddy import find_similar_students
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/schedule', methods=['GET'])
def schedule():
    subjects = "Math, Science, History"
    chapters = "Algebra, Biology, World War II"
    daily_availability = "Monday, 8:00 AM - 5:00 PM; Tuesday, 8:00 AM - 5:00 PM; Wednesday, 8:00 AM - 5:00 PM; Thursday, 8:00 AM - 5:00 PM; Friday, 8:00 AM - 5:00 PM"
    proficiency_scores = "Math: 80, Science: 75, History: 60"
    extracurriculars = "Soccer: Monday 4:00 PM - 5:00 PM, Flexibility: 2; Piano: Wednesday 4:00 PM - 5:00 PM, Flexibility: 1"
    upcoming_tests = "Science: Unit Test on Friday; History: Midterm on next Monday"
    learning_pace = "Math: 1, Science: 2, History: 3"
    daily_test_scores = "Math: 85, Science: 78, History: 63"

    # subjects = request.args.get('subjects')
    # chapters = request.args.get('chapters')
    # daily_availability = request.args.get('daily_availability')
    # proficiency_scores = request.args.get('proficiency_scores')
    # extracurriculars = request.args.get('extracurriculars')
    # upcoming_tests = request.args.get('upcoming_tests')
    # learning_pace = request.args.get('learning_pace')
    # daily_test_scores = request.args.get('daily_test_scores')
    return {"status" : 200, "data" : gen_schedule( 
        subjects,
        chapters,
        daily_availability,
        proficiency_scores,
        extracurriculars,
        upcoming_tests,
        learning_pace,
        daily_test_scores                
                   )}
# works after this
@app.route('/notes', methods=['GET'])
def notes():
    file_url = request.args.get('file_url')
    interests = request.args.get('interests')
    topic = request.args.get('topic')
    return {"status" : 200, "data" : gen_notes("https://brrctpvbkaisfaohwokv.supabase.co/storage/v1/object/sign/forumNotes/fc825a68-1e45-4698-ac99-9d8445bc7d50/a7d6af2c-7455-4874-bcc4-e46069a3fd05?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3J1bU5vdGVzL2ZjODI1YTY4LTFlNDUtNDY5OC1hYzk5LTlkODQ0NWJjN2Q1MC9hN2Q2YWYyYy03NDU1LTQ4NzQtYmNjNC1lNDYwNjlhM2ZkMDUiLCJpYXQiOjE2OTkyMjUxMTMsImV4cCI6MTY5OTgyOTkxM30.fI18VnkwZEf3NrZ32SSB49eAoZBwUQwhUQolSBD7tcw&t=2023-11-05T22%3A58%3A33.163Z", ["travel, music"], ["Living Standards"])}
if __name__ == '__main__':
    app.run(debug=True)

@app.route('/study-buddy', methods=['GET'])
def studyBuddy():
    input_student_data = [85, 17, 20] 
    other_students = [
        [78, 16, 30],
        [92, 18, 15],
        [80, 17, 25],
        [79, 15, 17],
        [87, 16, 22],
        [83, 17, 18],
        [90, 18, 21],
        [81, 16, 28],
        [88, 17, 19],
        [82, 15, 23],
    ]

    return {"status" : 200, "data" : find_similar_students(input_student_data, other_students)}

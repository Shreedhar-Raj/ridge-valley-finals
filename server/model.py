import openai
import re
import os
from datetime import datetime, timedelta

openai.api_key = 'YOUR_API_KEY'

def gen_schedule(subjects, chapters, daily_availability, proficiency_scores, extracurriculars, upcoming_tests, learning_pace, daily_test_scores):

    def parse_schedule(day_schedule):
        day_num = None
        parsed_events = []
        session_counter = 1

        day_header_pattern = r'^DAY (\d+):$'
        time_range_pattern = r'(\d+:\d+\s*[APM]+)\s*-\s*(\d+:\d+\s*[APM]+)'

        for line in day_schedule:
            line = line.strip()

            if day_header_match := re.match(day_header_pattern, line, re.IGNORECASE):
                day_num = int(day_header_match.group(1))
                continue

            if time_match := re.search(time_range_pattern, line, re.IGNORECASE):
                start_time_str, end_time_str = time_match.groups()
                if ': ' in line:
                    event_type, subject_or_activity = line.split(': ', 1)
                    subject_or_activity = subject_or_activity.rsplit(', ', 1)[-1] if ',' in subject_or_activity else subject_or_activity
                else:
                    print(f"Warning: Line skipped, colon not found in line: '{line}'")
                    continue

                parsed_event = {
                    "session": session_counter,
                    "title": f"{event_type} ({subject_or_activity})" if subject_or_activity else event_type,
                    "from": start_time_str,
                    "to": end_time_str
                }
                parsed_events.append(parsed_event)
                session_counter += 1
            else:
                print(f"Warning: Line skipped, did not match expected format: '{line}'")

        if day_num is None:
            print("Error: Day not found in schedule")
            return {}

        return {"day": day_num, "sessions": parsed_events}

    prompt = f"""
    You are a scheduling assistant for school students. You will use information about the student's schedule such as their subjects, their chapters for each subject, their proficiency score in each subject, and their available times throughout the week as well as the times they are busy. You will also receive information about the student's extracurricular activities, and the timings and days, along with the level of flexibility from 1 to 3 where 1 is not flexible, 3 is most flexible. You will also receive information on the student's upcoming tests, the subject for the test and the topics tested, as well as the type of test, the types include revision tests, unit tests, midterms and final exams, in order of increasing priority. Next, you will receive information on the student's learning pace between 1 to 3 for different subjects, 1 being the fastest, 3 being the slowest. You should use all this information to create the best schedule possible on a weekly basis for the student. You will also be given a datapoint named daily test scores, this is based on daily testing the student will do, the scores will be fed to you for the student's subjects and should be factored in by you in the creation of the schedule, if the value of daily test scores is 0, ignore the datapoint. Here is the relevant information about the student's schedule:
    Subjects: {subjects}
    Chapters: {chapters}
    Daily Availability: {daily_availability}
    Proficiency Scores: {proficiency_scores}
    Extracurricular Activities: {extracurriculars}
    Upcoming Tests: {upcoming_tests}
    Learning Pace: {learning_pace}
    Daily Test Scores: {daily_test_scores}

    Based on the above information, create a weekly study schedule ensuring a balanced approach towards each subject, 
    factoring in the proficiency scores, extracurricular activities and their flexibility, upcoming tests and their priority, and the student's learning pace for each subject. Make sure to include breaks as well and schedule time everyday for small progress tests at the end of the work day based on the available timings. 
s
    Your answer should be in the following format:
    DAY 1:
    STUDY SESSION: start time - end time, TOPIC TO BE STUDIED
    BREAK: start time - end time
    EXTRACURRICULAR: start time - end time, NAME
    STUDY SESSION: start time - end time, TOPIC TO BE STUDIED
    END OF DAY TEST: start time - end time
    Repeat this for DAY 2-7. Make sure all the times are in HH:MM format.
    """

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=2000,
        n=1,
        temperature=0.5,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )

    generated_schedule = response['choices'][0]['text'].strip().split('\n\n')
    parsed_output = [] 
    for day_schedule in generated_schedule:
        day_schedule_lines = day_schedule.strip().split('\n')
        parsed_day_schedule = parse_schedule(day_schedule_lines)
        parsed_output.append(parsed_day_schedule)

    return parsed_output

# subjects = "Math, Science, History"
# chapters = "Algebra, Biology, World War II"
# daily_availability = "Monday, 8:00 AM - 5:00 PM; Tuesday, 8:00 AM - 5:00 PM; Wednesday, 8:00 AM - 5:00 PM; Thursday, 8:00 AM - 5:00 PM; Friday, 8:00 AM - 5:00 PM"
# proficiency_scores = "Math: 80, Science: 75, History: 60"
# extracurriculars = "Soccer: Monday 4:00 PM - 5:00 PM, Flexibility: 2; Piano: Wednesday 4:00 PM - 5:00 PM, Flexibility: 1"
# upcoming_tests = "Science: Unit Test on Friday; History: Midterm on next Monday"
# learning_pace = "Math: 1, Science: 2, History: 3"
# daily_test_scores = "Math: 85, Science: 78, History: 63"

# print(gen_schedule( 
#     subjects,
#     chapters,
#     daily_availability,
#     proficiency_scores,
#     extracurriculars,
#     upcoming_tests,
#     learning_pace,
#     daily_test_scores                
#                ))
import openai
import jsonlines

openai.api_key = "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"

file_name = "training_data.jsonl"

upload_response = openai.File.create(
    file=open(file_name, "rb"),
    purpose='fine-tune'
)
file_id = upload_response['id']

fine_tune_response = openai.FineTune.create(
    training_file=file_id,
    model="gpt-3.5-turbo"
)
fine_tuned_model = None
while fine_tuned_model is None:
    retrieve_response = openai.FineTune.retrieve(fine_tune_response['id'])
    fine_tuned_model = retrieve_response.get('fine_tuned_model')

def generate_questions(subject, unit, difficulty, num_questions):
    prompt = f"Create {num_questions} multiple choice questions for {subject}, {unit}. The questions should be evenly distributed among 3 difficulty levels: 1) Easy 2) Medium 3) Hard. Each question should be followed by four answer options and the difficulty level. The format should be: question, difficulty level, option 1, option 2, option 3, option 4, correct option out of the 4."
    response = openai.Completion.create(
        engine=fine_tuned_model,
        prompt=prompt,
        max_tokens=2000,
        n=1,
        temperature=0.5,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )
    questions_data = response['choices'][0]['text'].strip().split('\n')
    return questions_data

def create_exam(subject, unit, exam_duration):
    total_questions = exam_duration // 2
    questions_per_difficulty = total_questions // 3
    easy_questions = generate_questions(subject, unit, "easy", questions_per_difficulty)
    medium_questions = generate_questions(subject, unit, "medium", questions_per_difficulty)
    difficult_questions = generate_questions(subject, unit, "hard", questions_per_difficulty)
    exam = easy_questions + medium_questions + difficult_questions
    return exam


exam = create_exam("physics", "motion", 60)

for i, question in enumerate(exam, 1):
    print(f"{i}. {question}")
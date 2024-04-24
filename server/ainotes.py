import openai
import fitz

import os
import requests
def gen_notes(file_url, interests, topic):
    openai.api_key = "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"
    
    url = file_url

    
    response = requests.get(url)

    with open('document.pdf', 'wb') as f:
        f.write(response.content)

    def extract_text_from_pdf(file_path):
        doc = fitz.open(file_path) 
        for page in doc: 
            text = page.get_text() 


    def generate_notes(pdf_text, interests, topic):
        prompt = f"""
        teach me {topic} using {pdf_text} with the following interests: {interests} keep it extensive, detailed and use technical terms for a high school level student in order to teach them and make them capabale of teaching others ensure you are applyinc the concepts to my interests.
        """

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": "You are a AI notes generation student for a student focused ed-tech tool."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        return response['choices'][0]['message']['content']


    pdf_file_path = '/Users/aarush/Documents/Coding/shriteq-hackathon/server/document.pdf'

    pdf_text = extract_text_from_pdf(pdf_file_path)

    notes = generate_notes(pdf_text, interests, topic)


    return notes
    
# print()



import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

def find_similar_students(input_student_data, other_students):
    similar_students = []
    
 
    highest_similarity = -1
    most_similar_student = None
    
    for student in other_students:
      
        similarity = cosine_similarity([input_student_data], [student])[0][0]
        if similarity > highest_similarity:
            highest_similarity = similarity
            most_similar_student = student
            
    return most_similar_student



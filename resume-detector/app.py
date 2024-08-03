from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import PyPDF2
from io import BytesIO
import docx
import random

app = Flask(__name__)
CORS(app)

openai.api_key = 'sk-uGwU_I1Bc-cb2grluqtt5PF1T3aisjvaTo8ylC4GZhT3BlbkFJjfNyJM0glOka97d-Alkp85c4V8DGaFXyfN9LtsVvEA'

def extract_text_from_pdf(file):
    reader = PyPDF2.PdfReader(file)
    text = ''
    for page in reader.pages:
        text += page.extract_text()
    return text

def extract_text_from_docx(file):
    doc = docx.Document(file)
    text = '\n'.join([paragraph.text for paragraph in doc.paragraphs])
    return text

def analyze_content(content):
    ai_percentage = random.randint(30, 80) 
    self_percentage = 100 - ai_percentage   

    return {"aiContent": ai_percentage, "selfContent": self_percentage}

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'resume' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['resume']
    if file.filename.endswith('.pdf'):
        content = extract_text_from_pdf(file)
    elif file.filename.endswith('.docx'):
        content = extract_text_from_docx(file)
    else:
        return jsonify({"error": "Unsupported file type"}), 400

    result = analyze_content(content)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)

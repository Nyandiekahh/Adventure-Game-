from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow all origins by default

# Sample data
characters = [
    {
        'id': 1,
        'name': 'Armed Police',
        'strengths': ['High authority', 'Well-equipped'],
        'weaknesses': ['Public backlash', 'Limited mobility']
    },
    {
        'id': 2,
        'name': 'Protester',
        'strengths': ['Strong community support', 'High numbers'],
        'weaknesses': ['Limited resources', 'High risk of confrontation']
    },
    # Add more characters as needed
]

@app.route('/')
def index():
    return "Welcome to the Nairobi Protests API!"

@app.route('/characters', methods=['GET'])
def get_characters():
    return jsonify(characters)

@app.route('/characters/<int:char_id>', methods=['GET'])
def get_character(char_id):
    character = next((char for char in characters if char['id'] == char_id), None)
    if character is None:
        return jsonify({'error': 'Character not found'}), 404
    return jsonify(character)

@app.route('/actions', methods=['GET'])
def get_actions():
    actions = [
        {'id': 1, 'action': 'Calm the crowd'},
        {'id': 2, 'action': 'Deploy police presence'},
        {'id': 3, 'action': 'Engage in dialogue'},
        {'id': 4, 'action': 'Allow protest'}
    ]
    return jsonify(actions)

if __name__ == '__main__':
    app.run(debug=True)

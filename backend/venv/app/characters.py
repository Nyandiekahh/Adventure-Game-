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
    {
        'id': 3,
        'name': 'Media',
        'strengths': ['Public influence', 'Widespread reach'],
        'weaknesses': ['Limited control over events', 'Can be targeted']
    },
    {
        'id': 4,
        'name': 'Veteran Officer',
        'strengths': ['Experienced', 'Calm under pressure'],
        'weaknesses': ['Physical limitations', 'Distrust from public']
    },
    {
        'id': 5,
        'name': 'Rookie Officer',
        'strengths': ['Energetic', 'Flexible'],
        'weaknesses': ['Inexperienced', 'Easily influenced']
    }
]

def get_all_characters():
    return characters

def get_character_by_id(char_id):
    return next((char for char in characters if char['id'] == char_id), None)

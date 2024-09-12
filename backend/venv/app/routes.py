from flask import Blueprint, jsonify, request
from .characters import get_all_characters, get_character_by_id
from .multiplayer import MultiplayerSearch  # Import the multiplayer search class

main_routes = Blueprint('main_routes', __name__)

# Create an instance of MultiplayerSearch
multiplayer_search = MultiplayerSearch()

@main_routes.route('/')
def index():
    return "Welcome to the Nairobi Protests API!"

@main_routes.route('/characters', methods=['GET'])
def get_characters():
    return jsonify(get_all_characters())

@main_routes.route('/characters/<int:char_id>', methods=['GET'])
def get_character(char_id):
    character = get_character_by_id(char_id)
    if character is None:
        return jsonify({'error': 'Character not found'}), 404
    return jsonify(character)

@main_routes.route('/actions', methods=['GET'])
def get_actions():
    actions = [
        {'id': 1, 'action': 'Calm the crowd'},
        {'id': 2, 'action': 'Deploy police presence'},
        {'id': 3, 'action': 'Engage in dialogue'},
        {'id': 4, 'action': 'Allow protest'}
    ]
    return jsonify(actions)

# Multiplayer search endpoints

@main_routes.route('/searchPlayers', methods=['POST'])
def search_for_players():
    """Endpoint to add a player to the multiplayer search queue."""
    player_id = request.json.get('player_id')

    if not player_id:
        return jsonify({'error': 'Player ID is required'}), 400
    
    # Add player to the search queue and check for match
    result = multiplayer_search.add_player_to_search(player_id)
    return jsonify(result)

@main_routes.route('/removePlayerFromSearch', methods=['POST'])
def remove_player_from_search():
    """Endpoint to remove a player from the search queue."""
    player_id = request.json.get('player_id')

    if not player_id:
        return jsonify({'error': 'Player ID is required'}), 400
    
    result = multiplayer_search.remove_player_from_search(player_id)
    return jsonify(result)

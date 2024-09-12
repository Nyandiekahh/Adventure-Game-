class MultiplayerSearch:
    def __init__(self):
        # This will store players currently searching for a match
        self.waiting_players = []

    def add_player_to_search(self, player_id):
        """Add player to the search queue."""
        if player_id not in self.waiting_players:
            self.waiting_players.append(player_id)
        return self.check_for_match()

    def check_for_match(self):
        """Check if there are enough players to start a match."""
        if len(self.waiting_players) >= 2:
            # Start a match with the first two players
            player1 = self.waiting_players.pop(0)
            player2 = self.waiting_players.pop(0)
            return {'status': 'match_found', 'players': [player1, player2]}
        else:
            return {'status': 'searching', 'players_waiting': len(self.waiting_players)}

    def remove_player_from_search(self, player_id):
        """Remove a player from the search queue."""
        if player_id in self.waiting_players:
            self.waiting_players.remove(player_id)
        return {'status': 'removed'}

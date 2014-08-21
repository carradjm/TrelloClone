# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.(@board, :title, :user_id, :updated_at, :created_at)

json.members @board.members, :id, :email

json.lists @board.lists do |list|
  json.(list, :id, :title, :ord ,:updated_at, :created_at)
  json.partial! 'cards', cards: list.cards
end




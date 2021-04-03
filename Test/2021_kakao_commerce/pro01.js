function solution(gift_cards, wants) {
  const cards_count = {}
  gift_cards.forEach(card => {
    cards_count[card] = cards_count[card] === undefined ? 1 : cards_count[card] + 1
  })

  let result = 0
  wants.forEach(want => {
    if(cards_count[want]) {
      cards_count[want] -= 1
      return
    }
    result += 1
  })  

  return result
}

solution([4, 5, 3, 2, 1]	, [2, 4, 4, 5, 1]	)
solution([5, 4, 5, 4, 5]		, [1, 2, 3, 5, 4]	)
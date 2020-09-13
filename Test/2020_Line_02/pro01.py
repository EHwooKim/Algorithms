def solution(boxes):
  box_count = len(boxes)
  product_all = []
  for box in boxes:
    product_all += box
  product_all.sort() 
  
  pre_product = 0
  for product in product_all:
    if pre_product == product:
      box_count -= 1
      pre_product = 0
    else:
      pre_product = product

  return box_count

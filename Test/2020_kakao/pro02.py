def solution(orders, course):
  menus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  ordered = ''
  for menu in menus:
    menu_count = 0
    for order in orders: # A-Z 중 주문되었던 메뉴들
      if menu in order:
        menu_count += 1
    if menu_count >= 2:
      ordered += menu

  course_count = [0] * 11
  course_result = [[] for _ in range(11)]
  def make_new_menu(tmp, k):
    if len(tmp) >= 2 and len(tmp) in course: # 길이 2 이상의 조합에 대해 조건 체크
      ordered_count = 0
      for order in orders:
        ordered_all = True
        for t in tmp:
          if not t in order:
            ordered_all = False
        if ordered_all:
          ordered_count += 1

      if ordered_count >= 2:
        tmp = ''.join(sorted(list(tmp)))
        if ordered_count > course_count[len(tmp)]:
          course_result[len(tmp)] = [tmp]
          course_count[len(tmp)] = ordered_count
        elif ordered_count == course_count[len(tmp)]:
          course_result[len(tmp)].append(tmp)
        
    for i in range(k, len(ordered)):
      make_new_menu(tmp + ordered[i], i + 1)

  make_new_menu('', 0) # 새로운 메뉴 만들기
  
  result = []
  for course in course_result:
    result += course
  result.sort()
  return result

print(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]	, [2, 3, 4]))
print(solution(["XYZ", "XWY", "WXA"]		, [2, 3, 4]))
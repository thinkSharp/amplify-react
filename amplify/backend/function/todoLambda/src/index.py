def handler(event, context):
  print('received event:')
  print(event)
  todos = [{'id':1, 'name':'Eat'}, {'id':2, 'name':'Sleep'}, {'id':3, 'name':'Code'}]
  return  todos

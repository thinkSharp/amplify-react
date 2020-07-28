import json

def handler(event, context):
  print('received event:')
  print(event)
  todos = [{'id':1, 'name':'Eat'}, {'id':2, 'name':'Sleep'}, {'id':3, 'name':'Code'}]

  response = {
    'statusCode': 200,
    'body': json.dumps(todos),
    'headers': {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }

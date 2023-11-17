from instagrapi import Client

ACCOUNT_USERNAME='jose_alvert1'
ACCOUNT_PASSWORD='Andres180213'

def main(*args, arg ):
    cl = Client()
    cl.login(ACCOUNT_USERNAME, ACCOUNT_PASSWORD)
    cl.delay_range = [1,5]
    media_id = cl.media_id( cl.media_pk_from_url(arg[0] ) )
    comments = cl.media_comments( media_id ,0 ) #busca todos los comentarios
    for comment in comments:
        print(comment.text, end=" \n")
   
   
   
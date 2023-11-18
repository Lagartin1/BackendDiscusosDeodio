
import os
import argparse
from instagrapi import Client
import json
from dotenv import load_dotenv, dotenv_values

load_dotenv(dotenv_path="../.env.scrapping")

aCU = os.getenv("IACCOUNT_USERNAME")
aCP = os.getenv("IACCOUNT_PASSWORD")

def main(arg):
    cl = Client()
    cl.login(aCU, aCP)
    cl.delay_range = [1,5]
    media_id = cl.media_id( cl.media_pk_from_url(arg) )
    comments = cl.media_comments( media_id ,0 ) #busca todos los comentarios
    Listscommentarios =[]
    for comment in comments:
        Listscommentarios.append(comment.text)
    data = {'resultados':Listscommentarios}
    return data
    
if __name__ == "__main__":
    # Configurar el analizador de argumentos
    parser = argparse.ArgumentParser()

    # Agregar argumentos
    parser.add_argument('arg', type=str)
    args = parser.parse_args()

    # Llamar a la función principal con los argumentos proporcionados
    results = main(args.arg)
    # Imprimir los resultados como JSON para que la API en Node.js los lea
    print(json.dumps(results))
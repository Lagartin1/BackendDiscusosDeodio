
import os
import argparse
from instagrapi import Client
import json
from dotenv import load_dotenv, dotenv_values

load_dotenv(dotenv_path="../.env.scrapping")

aCU = os.getenv("IACCOUNT_USERNAME")
aCP = os.getenv("IACCOUNT_PASSWORD")



import re

def detectar_comentario_de_odio(texto):
    # se puede crear la lista vacia y que el usuario ingrese las palabras que para él sean de odio
    palabras_clave = ['comunistas', 'zurdos', 'homosexual']
    # pasamos a minuscula
    texto = texto.lower()

    # Usar expresiones regulares para eliminar caracteres especiales y puntuación
    texto = re.sub(r'[^a-zA-Z0-9\s]', '', texto)

    # verificar si alguna palabra clave está presente en el texto
    for palabra_clave in palabras_clave:
        if palabra_clave in texto:
            return True

    return False

def res(bol):
    if detectar_comentario_de_odio(bol):
        print("\nEste comentario es de odio.")
    else:
        print("\nEste comentario no es de odio.")


def main(arg):
    cl = Client()
    cl.login(aCU, aCP)
    cl.delay_range = [1,5]
    media_id = cl.media_id( cl.media_pk_from_url(arg) )
    comments = cl.media_comments( media_id ,0 ) #busca todos los comentarios
    Listscommentarios =[]
    print ("entrando")
    for comment in comments:
        print(f"..{comment.text}")
        #Listscommentarios.append(comment.text)
        #print(f"{comment.text}  {res(detectar_comentario_de_odio(comment.text))}")
    print("salliendo")
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
    ## print(json.dumps(results))
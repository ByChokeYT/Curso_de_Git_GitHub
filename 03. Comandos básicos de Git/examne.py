import random

def mostrar_mensaje_bienvenida():
    print("¡Bienvenido al examen de comandos básicos de Git!")
    print("Responde las siguientes preguntas seleccionando la opción correcta. ¡Buena suerte!\n")

def generar_pregunta(pregunta, opciones, respuesta_correcta):
    print(pregunta)
    for i, opcion in enumerate(opciones):
        print(f"{i + 1}. {opcion}")
    respuesta_usuario = int(input("Ingresa el número de tu respuesta: "))
    if respuesta_usuario == respuesta_correcta:
        return True
    else:
        return False

def mostrar_resultado(resultado):
    print("\n¡Examen completado!")
    if resultado >= 3:
        print(f"Has aprobado el examen con una puntuación de {resultado}/5. ¡Felicitaciones!")
    else:
        print(f"No has aprobado el examen. Obtuviste una puntuación de {resultado}/5. Intenta nuevamente.")

def repetir_examen():
    respuesta = input("¿Te gustaría repetir el examen? (s/n): ")
    if respuesta.lower() == "s":
        realizar_examen()
    else:
        print("¡Gracias por participar en el examen!")

def realizar_examen():
    mostrar_mensaje_bienvenida()

    preguntas = [
        {
            "pregunta": "1. ¿Cuál es el comando de Git utilizado para crear un nuevo repositorio local?",
            "opciones": ["a) git init", "b) git clone", "c) git add", "d) git commit"],
            "respuesta_correcta": 1
        },
        {
            "pregunta": "2. ¿Qué comando se utiliza para agregar cambios al área de preparación en Git?",
            "opciones": ["a) git clone", "b) git add", "c) git status", "d) git branch"],
            "respuesta_correcta": 2
        },
        {
            "pregunta": "3. ¿Cuál es el comando para confirmar los cambios en Git?",
            "opciones": ["a) git push", "b) git commit", "c) git pull", "d) git merge"],
            "respuesta_correcta": 2
        },
        {
            "pregunta": "4. ¿Cuál de los siguientes comandos muestra el historial de commits en Git?",
            "opciones": ["a) git push", "b) git log", "c) git status", "d) git checkout"],
            "respuesta_correcta": 2
        },
        {
            "pregunta": "5. ¿Cuál es el comando de Git utilizado para clonar un repositorio remoto?",
            "opciones": ["a) git add", "b) git branch", "c) git clone", "d) git revert"],
            "respuesta_correcta": 3
        }
    ]

    resultado = 0
    random.shuffle(preguntas)
    for pregunta in preguntas:
        if generar_pregunta(pregunta["pregunta"], pregunta["opciones"], pregunta["respuesta_correcta"]):
            resultado += 1

    mostrar_resultado(resultado)
    repetir_examen()

realizar_examen()

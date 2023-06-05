import random

def run_exam():
    score = 0
    questions = [
        {
            "question": "¿Qué comando se utiliza para clonar un repositorio remoto en tu máquina local?",
            "options": {
                "a": "git clone",
                "b": "git pull",
                "c": "git fetch"
            },
            "answer": "a"
        },
        {
            "question": "¿Cuál es la diferencia entre git pull y git fetch?",
            "options": {
                "a": "git pull obtiene los cambios y los aplica automáticamente, mientras que git fetch solo obtiene los cambios.",
                "b": "git pull obtiene los cambios y los aplica automáticamente, mientras que git fetch obtiene los cambios y los muestra sin aplicarlos.",
                "c": "git pull y git fetch hacen lo mismo y se pueden usar indistintamente."
            },
            "answer": "b"
        },
        {
            "question": "¿Qué comando se utiliza para enviar tus cambios locales al repositorio remoto?",
            "options": {
                "a": "git commit",
                "b": "git push",
                "c": "git merge"
            },
            "answer": "b"
        },
        {
            "question": "¿Cuál es el propósito del comando git fetch?",
            "options": {
                "a": "Obtener los cambios del repositorio remoto sin aplicarlos localmente.",
                "b": "Enviar tus cambios locales al repositorio remoto.",
                "c": "Combinar los cambios de una rama con otra rama."
            },
            "answer": "a"
        },
        {
            "question": "¿Qué comando se utiliza para fusionar cambios de una rama en otra rama?",
            "options": {
                "a": "git merge",
                "b": "git push",
                "c": "git pull"
            },
            "answer": "a"
        },
        {
            "question": "¿Cuál es el comando para obtener los cambios del repositorio remoto y aplicarlos automáticamente en tu rama local?",
            "options": {
                "a": "git fetch",
                "b": "git pull",
                "c": "git clone"
            },
            "answer": "b"
        }
    ]

    random.shuffle(questions)

    print("¡Bienvenido al examen sobre comandos para colaborar con otros desarrolladores en Git!")
    print("Responde las siguientes preguntas seleccionando la opción correcta.\n")

    for i, question in enumerate(questions):
        print(f"Pregunta {i+1}: {question['question']}")
        for option, answer in question['options'].items():
            print(f"{option}) {answer}")
        user_answer = input("Tu respuesta: ")
        if user_answer.lower() == question['answer']:
            print("¡Respuesta correcta!\n")
            score += 1
        else:
            print(f"Respuesta incorrecta. La respuesta correcta es {question['answer'].upper()}.\n")

    print(f"Tu puntaje final: {score}/{len(questions)}")
    if score == len(questions):
        print("¡Felicitaciones! Has aprobado el examen.")
    else:
        repeat_exam = input("No has aprobado el examen. ¿Deseas repetirlo? (s/n): ")
        if repeat_exam.lower() == "s":
            run_exam()
        else:
            print("Gracias por participar en el examen.")

run_exam()

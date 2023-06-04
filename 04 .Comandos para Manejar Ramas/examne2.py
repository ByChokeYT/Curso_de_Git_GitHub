print("¡Bienvenido al examen sobre Git: Branch, Checkout y Merge!")

preguntas = [
    {
        "pregunta": "¿Cuál es el comando utilizado para crear una nueva rama y cambiar a ella en un solo paso en Git?",
        "opciones": ["git branch", "git commit", "git merge", "git checkout -b"],
        "respuesta_correcta": "d"
    },
    {
        "pregunta": "¿Cómo se puede verificar la lista de ramas existentes en un repositorio Git?",
        "opciones": ["git branch", "git clone", "git push", "git pull"],
        "respuesta_correcta": "a"
    },
    {
        "pregunta": "¿Cuál es el comando utilizado para crear una nueva rama en Git sin cambiar a ella?",
        "opciones": ["git init", "git branch nombre_rama", "git clone", "git checkout"],
        "respuesta_correcta": "b"
    },
    {
        "pregunta": "¿Qué comando se utiliza para cambiar a una rama remota en Git?",
        "opciones": ["git branch", "git checkout nombre_rama_remota", "git push", "git pull"],
        "respuesta_correcta": "b"
    },
    {
        "pregunta": "¿Cuál es el comando utilizado para fusionar una rama con otra en Git y resolver automáticamente los conflictos si es posible?",
        "opciones": ["git add", "git merge --auto", "git commit", "git push"],
        "respuesta_correcta": "b"
    },
    {
        "pregunta": "¿Cuál es el comando utilizado para borrar una rama en Git?",
        "opciones": ["git branch -d nombre_rama", "git clone", "git checkout", "git push"],
        "respuesta_correcta": "a"
    }
]

puntaje = 0
respuestas_incorrectas = []

for i, pregunta in enumerate(preguntas, 1):
    print(f"\nPregunta {i}: {pregunta['pregunta']}")
    opciones = pregunta['opciones']
    respuesta_correcta = pregunta['respuesta_correcta']

    for j, opcion in enumerate(opciones, 1):
        print(f"{j}. {opcion}")

    respuesta = input("Ingresa tu respuesta (a, b, c, d): ")

    if respuesta.lower() == respuesta_correcta:
        puntaje += 1
    else:
        respuestas_incorrectas.append((pregunta['pregunta'], respuesta, respuesta_correcta))

# Mostrando el resultado
print(f"\nTu puntaje final es: {puntaje}/{len(preguntas)}")

if puntaje == len(preguntas):
    print("¡Felicitaciones! Has aprobado el examen.")
else:
    print("Respuestas incorrectas:")
    for pregunta, respuesta, respuesta_correcta in respuestas_incorrectas:
        print(f"Pregunta: {pregunta}")
        print(f"Tu respuesta: {respuesta}")
        print(f"Respuesta correcta: {respuesta_correcta}\n")

    repetir_examen = input("No has aprobado el examen. ¿Deseas repetirlo? (s/n): ")
    if repetir_examen.lower() == "s":
        print("\n¡Buena suerte en tu próximo intento!")
    else:
        print("\nTe deseamos éxito en tus futuros proyectos.")

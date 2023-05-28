# Preguntas del examen
preguntas = [
    {
        "pregunta": "¿Cuál es el primer paso para descargar Git en tu equipo?",
        "opciones": {
            "a": "Visitar el sitio web oficial de Git.",
            "b": "Ejecutar un comando en la línea de comandos.",
            "c": "Descargar el instalador desde un repositorio en línea."
        },
        "respuesta_correcta": "a"
    },
    {
        "pregunta": "¿Qué comando se utiliza para verificar si Git está instalado correctamente en la línea de comandos?",
        "opciones": {
            "a": "git --version",
            "b": "git verify",
            "c": "git check"
        },
        "respuesta_correcta": "a"
    },
    {
        "pregunta": "¿Cuál de las siguientes opciones NO es una configuración básica de Git en la línea de comandos?",
        "opciones": {
            "a": "Nombre de usuario",
            "b": "Dirección de correo electrónico",
            "c": "Editor de texto"
        },
        "respuesta_correcta": "c"
    },
    {
        "pregunta": "¿Cuál de las siguientes interfaces gráficas es una herramienta oficial proporcionada por Git?",
        "opciones": {
            "a": "Sourcetree",
            "b": "Git GUI",
            "c": "GitHub Desktop"
        },
        "respuesta_correcta": "b"
    },
    {
        "pregunta": "¿Cuál de las siguientes opciones permite establecer la configuración de Git en Sourcetree?",
        "opciones": {
            "a": "File > Settings",
            "b": "Edit > Options",
            "c": "Tools > Preferences"
        },
        "respuesta_correcta": "b"
    },
    {
        "pregunta": "¿Cuál es el comando correcto para abrir Git GUI desde la línea de comandos?",
        "opciones": {
            "a": "git gui",
            "b": "git start-gui",
            "c": "git open-gui"
        },
        "respuesta_correcta": "a"
    }
]

# Función para mostrar el examen
def mostrar_examen(preguntas):
    print("¡Bienvenido al examen sobre Git!\n")
    for i, pregunta in enumerate(preguntas, start=1):
        print(f"Pregunta {i}: {pregunta['pregunta']}")
        for opcion, texto in pregunta['opciones'].items():
            print(f"{opcion}) {texto}")
        print()

# Función para obtener las respuestas del usuario
def obtener_respuestas(preguntas):
    respuestas = {}
    for i, pregunta in enumerate(preguntas, start=1):
        opcion = input(f"Ingresa la respuesta para la pregunta {i}: ")
        respuestas[i] = opcion
    return respuestas

# Función para evaluar las respuestas y calcular el resultado
def evaluar_respuestas(preguntas, respuestas):
    total_preguntas = len(preguntas)
    respuestas_correctas = 0

    for i, pregunta in enumerate(preguntas, start=1):
        respuesta_usuario = respuestas[i]
        respuesta_correcta = pregunta['respuesta_correcta']

        if respuesta_usuario.lower() == respuesta_correcta.lower():
            respuestas_correctas += 1

    ponderacion = (respuestas_correctas / total_preguntas) * 100
    return respuestas_correctas, total_preguntas, ponderacion

# Mostrar el examen al usuario
mostrar_examen(preguntas)

# Obtener las respuestas del usuario
respuestas_usuario = obtener_respuestas(preguntas)

# Evaluar las respuestas y mostrar el resultado
respuestas_correctas, total_preguntas, ponderacion = evaluar_respuestas(preguntas, respuestas_usuario)

print("\n--- Resultado del examen ---")
print(f"Respuestas correctas: {respuestas_correctas}/{total_preguntas}")
print(f"Ponderación: {ponderacion}%")

# Verificar si el usuario aprobó el examen
if ponderacion >= 70:
    print("¡Felicidades! Has aprobado el examen.")
else:
    repetir_examen = input("No has aprobado el examen. ¿Deseas repetirlo? (s/n): ")
    if repetir_examen.lower() == "s":
        print("\n¡Vamos a repetir el examen!")
        mostrar_examen(preguntas)
        respuestas_usuario = obtener_respuestas(preguntas)
        respuestas_correctas, total_preguntas, ponderacion = evaluar_respuestas(preguntas, respuestas_usuario)
        print("\n--- Resultado del examen ---")
        print(f"Respuestas correctas: {respuestas_correctas}/{total_preguntas}")
        print(f"Ponderación: {ponderacion}%")
        if ponderacion >= 70:
            print("¡Felicidades! Has aprobado el examen.")
        else:
            print("No has aprobado el examen. Por favor, estudia más.")
    else:
        print("Gracias por participar. ¡Hasta la próxima!")

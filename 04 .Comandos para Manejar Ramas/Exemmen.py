print("¡Bienvenido al examen sobre Git: Branch, Checkout y Merge!")

# Pregunta 1
print("1. ¿Cuál es el comando utilizado para crear una nueva rama y cambiar a ella en un solo paso en Git?")
respuesta_1 = input("Ingresa tu respuesta: ")

# Pregunta 2
print("2. ¿Cómo se puede verificar la lista de ramas existentes en un repositorio Git?")
respuesta_2 = input("Ingresa tu respuesta: ")

# Pregunta 3
print("3. ¿Cuál es el comando utilizado para crear una nueva rama en Git sin cambiar a ella?")
respuesta_3 = input("Ingresa tu respuesta: ")

# Pregunta 4
print("4. ¿Qué comando se utiliza para cambiar a una rama remota en Git?")
respuesta_4 = input("Ingresa tu respuesta: ")

# Pregunta 5
print("5. ¿Cuál es el comando utilizado para fusionar una rama con otra en Git y resolver automáticamente los conflictos si es posible?")
respuesta_5 = input("Ingresa tu respuesta: ")

# Pregunta 6
print("6. ¿Cuál es el comando utilizado para borrar una rama en Git?")
respuesta_6 = input("Ingresa tu respuesta: ")

# Calculando el puntaje
puntaje = 0

if respuesta_1.lower() == "git checkout -b":
    puntaje += 1

if respuesta_2.lower() == "git branch":
    puntaje += 1

if respuesta_3.lower() == "git branch nombre_rama":
    puntaje += 1

if respuesta_4.lower() == "git checkout nombre_rama_remota":
    puntaje += 1

if respuesta_5.lower() == "git merge --auto":
    puntaje += 1

if respuesta_6.lower() == "git branch -d nombre_rama":
    puntaje += 1

# Mostrando el resultado
print(f"\nTu puntaje final es: {puntaje}/6")

if puntaje == 6:
    print("¡Felicitaciones! Has aprobado el examen.")
else:
    repetir_examen = input("No has aprobado el examen. ¿Deseas repetirlo? (s/n): ")
    if repetir_examen.lower() == "s":
        print("\n¡Buena suerte en tu próximo intento!")
    else:
        print("\nTe deseamos éxito en tus futuros proyectos.")

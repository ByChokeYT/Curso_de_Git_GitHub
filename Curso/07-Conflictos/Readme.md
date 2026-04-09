# Módulo 07: Resolución de Conflictos & Seguridad

En un sistema distribuido, las colisiones son inevitables. Un ingeniero de sistemas debe ver los conflictos no como errores, sino como puntos de decisión lógica.

---

## 🔬 El Algoritmo de Resolución de Conflictos

### ¿Por qué ocurren?
Git intenta mezclar cambios automáticamente usando un algoritmo de **combinación de 3 vías**. El conflicto ocurre cuando dos personas modifican exactamente la misma línea en el mismo archivo.

### Estrategia de Resolución Lógica
1.  **Analizar:** `<<<< HEAD` indica tu cambio local; `>>>> label` indica el cambio entrante.
2.  **Decidir:** ¿Cuál es la lógica correcta? ¿Ambas? ¿Una nueva?
3.  **Confirmar:** Una vez limpio, se ejecuta `git add` y `git commit`.

---

## ⚙️ Seguridad Avanzada: Firma y CODEOWNERS

### Firma Criptográfica de Commits
No basta con decir quién eres. Debes probarlo con **GPG** o **SSH**. Esto garantiza que el código en producción no ha sido inyectado por un tercero.

### CODEOWNERS (Propiedad de Código)
En repositorios grandes, este archivo define quién debe revisar qué parte del código automáticamente.
```text
# Solo los expertos en seguridad revisan el auth
/auth/ @ByChokeYT/security-team

# El equipo de frontend revisa los estilos
/styles/ @ByChokeYT/frontend-team
```

---

## ## Resumen (Ingeniería de Sistemas)

1.  **Conflictos como Oportunidad:** Úsalos para coordinar con tu equipo. A veces un conflicto revela que dos personas estaban resolviendo el mismo problema de formas distintas.
2.  **Trust no one:** Activa la firma obligatoria de commits en las configuraciones de rama protegida de GitHub.
3.  **Propiedad Clara:** Usa `CODEOWNERS` para evitar que código crítico llegue a producción sin la supervisión del experto en esa área.

[Examen: Módulo 07 - Conflictos y Seguridad](https://forms.gle/toiLYERfdE2BQT1V8)

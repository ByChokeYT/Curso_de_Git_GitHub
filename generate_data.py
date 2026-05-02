import os
import json
import logging

# Configuración de logging profesional
logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')

def generate_course_data():
    data = {}
    base_dir = 'Curso'
    
    if not os.path.exists(base_dir):
        logging.error(f"Error: Directorio base '{base_dir}' no encontrado.")
        return

    logging.info("Iniciando generación de base de datos del curso...")
    
    files_processed = 0
    try:
        for root, dirs, files in os.walk(base_dir):
            # Buscamos README.md (mayúsculas por estándar)
            if 'README.md' in files:
                path = os.path.join(root, 'README.md')
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    if not content.strip():
                        logging.warning(f"El archivo {path} está vacío. Saltando.")
                        continue
                        
                    # Normalizamos path para JS (siempre usar /)
                    key = path.replace('\\', '/')
                    data[key] = content
                    files_processed += 1
                    logging.info(f"✓ Procesado: {path}")
                except Exception as e:
                    logging.error(f"Error procesando {path}: {e}")

        # Generar el archivo de salida
        output_dir = 'assets/js'
        os.makedirs(output_dir, exist_ok=True)
        
        output_file = os.path.join(output_dir, 'data.js')
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('window.CourseData = ' + json.dumps(data, ensure_ascii=False) + ';')
            
        logging.info(f"Éxito: Se procesaron {files_processed} módulos.")
        logging.info(f"Archivo generado en: {output_file}")

    except Exception as e:
        logging.critical(f"Error fatal durante la ejecución: {e}")

if __name__ == "__main__":
    generate_course_data()

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
        # 1. Procesar módulos en el directorio 'Curso'
        for root, dirs, files in os.walk(base_dir):
            if 'README.md' in files:
                path = os.path.join(root, 'README.md')
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    if not content.strip():
                        continue
                        
                    key = path.replace('\\', '/')
                    data[key] = content
                    files_processed += 1
                    logging.info(f"✓ Procesado: {path}")
                except Exception as e:
                    logging.error(f"Error procesando {path}: {e}")

        # 2. Procesar archivos especiales fuera del directorio 'Curso'
        special_files = ['Examen-Final.md']
        for s_file in special_files:
            if os.path.exists(s_file):
                try:
                    with open(s_file, 'r', encoding='utf-8') as f:
                        data[s_file] = f.read()
                    files_processed += 1
                    logging.info(f"✓ Procesado archivo especial: {s_file}")
                except Exception as e:
                    logging.error(f"Error procesando {s_file}: {e}")

        # 3. Generar el archivo de salida
        output_dir = 'assets/js'
        os.makedirs(output_dir, exist_ok=True)
        
        output_file = os.path.join(output_dir, 'data.js')
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('window.CourseData = ' + json.dumps(data, ensure_ascii=False) + ';')
            
        logging.info(f"Éxito: Se procesaron {files_processed} elementos en total.")
        logging.info(f"Archivo generado en: {output_file}")

    except Exception as e:
        logging.critical(f"Error fatal durante la ejecución: {e}")

if __name__ == "__main__":
    generate_course_data()

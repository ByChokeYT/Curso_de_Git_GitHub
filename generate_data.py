import os, json

data = {}
base_dir = 'Curso'
for root, dirs, files in os.walk(base_dir):
    if 'Readme.md' in files:
        path = os.path.join(root, 'Readme.md')
        with open(path, 'r', encoding='utf-8') as f:
            key = path.replace('\\', '/')
            data[key] = f.read()

os.makedirs('assets/js', exist_ok=True)
with open('assets/js/data.js', 'w', encoding='utf-8') as f:
    f.write('window.CourseData = ' + json.dumps(data, ensure_ascii=False) + ';')
print("data.js regenerated")

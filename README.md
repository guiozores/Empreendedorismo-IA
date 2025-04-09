# Passos para Inicializar e Enviar o Projeto ao GitHub

1. Abra o terminal na pasta do projeto
2. Inicialize o repositório localmente usando git init.
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   ```
3. Associe o repositório local ao repositório remoto chamado “Empreendedorismo-IA”.
   ```sh
   git remote add origin <URL-do-repo-GitHub-Empreendedorismo-IA>
   git push -u origin main
   ```

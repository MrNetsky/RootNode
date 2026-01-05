# Instalación de Docusaurus con pnpm

<u>**Pasos a seguir:**</u>

1. Instalación de pnpm
2. Instalación de Docusaurus
3. Host en Github Pages

## Instalación de pnpm

Puede que ya lo tengas instalado, por lo que te recomiendo que primero, verifiques la versión. Si te devuelve la versión, podrás continuar con el siguiente paso, de lo contrario, haremos lo siguiente:

Supuestamente este paso no deberías hacerlo, pero mi equipo no reconocía a corepack, por ello hice lo siguiente:
```bash
sudo npm install -g corepack
```
Ya teniendo corepack, lo que hay que hacer es habilitarlo
```bash
sudo corepack enable
```
Ahora lo que hay que hacer es instalar la última version de pnpm.
```bash
corepack prepare pnpm@latest --activate
```
Para verificar que lo hemos hecho bien, verificamos la versión.
```bash
pnpm --version
```

# Instalación de Docusaurus

Yo lo crearé en una carpeta en particular, por lo que me dirigiré a ella y escribiré lo siguiente:

```bash
pnpm create docusaurus@latest . classic
```

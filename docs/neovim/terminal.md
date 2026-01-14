---
sidebar_position: 7
---

# Instalación de una terminal nueva

:::danger IMPORTANTE
Si no descargas alguna de estas dos terminales, deberás elegir otra, ya que soportan todos los colores e íconos de lazyvim y las nerdfonts. Se sugieren estas: alacritty, kitty(Linux y MacOS), wezterm, iterm2(MacOS) y ghostty(Linux y MacOS).
:::

## alacritty

Yo elegí esta ya que este proceso lo llevo a cabo en una notbook del 2008 y es la que menos recursos le significaban a mi equipo. 

El proceso es el siguiente:
```bash
sudo apt install alacritty 
```
Posteriormente corroboro la versión.
```bash
alacritty --version
```

## ghostty

Elegí esta terminal porque me gustó lo que vi, para probarla, ya que ahora quiero instalar nuevamente lazyvim pero en una notebook más actual, una Lenovo T470s con 256Gb NVMe, 16Gb de RAM y un procesador i5 7ma gen. El proceso es sencillo y es el siguiente:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/mkasberg/ghostty-ubuntu/HEAD/install.sh)"
```
Posteriormente corroboro la versión.
```bash
ghostty --version
```
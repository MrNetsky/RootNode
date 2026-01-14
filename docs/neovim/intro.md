---
sidebar_position: 1
---

# NeoVim y LazyVim

Mi motivación en aprender a usar esta herramienta surge desde la necesidad de utilizar una notebook vieja. Debido a sus limitaciones, pese a que puedo instalar y utilizar VSCode, no es práctico, por su extrema lentitud, obviamente por las limitaciones propias de este hardware.

Inicialmente este equipo tenía un HDD de 128Gb, con 2.5Gb de RAM y Windows 7. Actualmente tiene un SSD de 256Gb, con 4Gb de RAM y Linux Mint en su versión Mate. El procesador es un Intel Celeron M 520 @ 1.60GHz. Es el mismo, ya que por una limitacion de BIOS y de refrigeración, pero principalmente por mi completo desconocimiento no puedo cambiar de procesador (Por ahora. Igual tampoco hay muchas opciones que traigan una mejora significativa al funcionamiento de mi notebook)

Tiempo después cambié de equipo a una Lenovo T470s con un i5 7ma Gen, un nVME de 256Gb, 16Gb de RAM y con una Linux Mint en su versión Cinnamon, donde también uso esta herramienta pese a sus contrastables diferencias con VSCode, es realmente útil y más rápido, esto es debido a la manera de operar de cada uno, es increíble, pero el no tener que usar el mouse, hace una grandísima diferencia. No es sencillo de masterizar, yo no me considero en esa condición, pero a mi me gusta mucho y me es muy útil.

Esta guía esta destinada a gente, que como yo, son nuevos en Linux y su funcionamiento por lo que se especificará cada aspecto que inicialmente no supe y tuve que averiguar. 

:::danger IMPORTANTE
Este procedimiento fue realizado en distros basadas en Ubuntu que a su vez, está basado en Debian, por lo que si posees una distro diferente, puede que necesites utilizar tu propio sistema de gestión de paquetes. Para este sistema operativo se utilizará apt.
:::

Antes de empezar con todo esto, utilizar:
```bash
sudo apt update
```
Y luego:
```bash
sudo apt upgrade
```
Esto es porque update actualiza la información sobre qué software existe y dónde encontrarlo. Mientras que upgrade previene conflictos de dependencias, mantiene la seguridad y garantiza la estabilidad.
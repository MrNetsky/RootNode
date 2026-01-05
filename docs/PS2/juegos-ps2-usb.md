import useBaseUrl from '@docusaurus/useBaseUrl';

# Instalar juegos de ps2 p/OPL

## Descargar una ROM 

Puedes hacerlo desde alguna página dedicada a a esto o bien convertir tus juegos físicos, para poder usarlos desde un pendrive.

## Formatear pendrive

El formato que necesitamos es FAT32, pero en Windows tenemos 2 escenarios posibles.

- Menos de 32Gb: 

Puedes hacerlo desde el gestor de archivos. Aquí solo debes buscar el pendrive, dentro del sistema haces click derecho en él y luego verás la siguiente ventana, lo configuras de la menera que ves y le das a inicio. La etiqueta de volumen le puedes poner cualquier cosa, incluso dejarla vacía, la mía dice 'Ventoy' porque es mi pendrive donde flasheo las imágenes de los sistemas Linux para instalarlos en otras pc/notebook.

<div style={{ textAlign: 'center', marginBottom: '40px' }}>
  <img 
    src={useBaseUrl("/img/PS2/formateo-windows.png")}
    alt="Formateo desde Windows menores a 32Gb"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
</div>

Una vez finalizado el proceso, puedes empezar a grabar tus juegos.

- Más de 32 Gb:

Acá tenes dos opciones. Una es **particionar el usb** en espacios más pequeños, los que sean necesarios, dependiedo del tamaño de tu pendrive. Particularmente no he probado este método para correr los juegos, pero es sencillo particionarlo. Para elllo deberás hacer click derecho en inicio y seleccionas la opción 'Administración de discos', verás lo siguiente:
<div style={{ textAlign: 'center', marginBottom: '40px' }}>
  <img 
    src={useBaseUrl("/img/PS2/admin-discos.png")}
    alt="Administración de discos de Windows"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
</div>
Entonces aquí deberás seleccionar el disco, puedes ponerle nombre a la partición, aunque no es obligatorio. Si es importante que la cantidad que elijas NO supere los 30Gb y que el formato que elijas sea FAT32.

<div style={{ textAlign: 'center', marginBottom: '40px' }}>
  <img 
    src={useBaseUrl("/img/PS2/1.png")}
    alt="Partición del pendrive 1"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
</div>

<div style={{ textAlign: 'center', marginBottom: '40px' }}>
  <img 
    src={useBaseUrl("/img/PS2/3.png")}
    alt="Partición del pendrive 2"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
</div>

<div style={{ textAlign: 'center', marginBottom: '40px' }}>
  <img 
    src={useBaseUrl("/img/PS2/5.png")}
    alt="Partición del pendrive 3"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
</div>

<div style={{ textAlign: 'center', marginBottom: '40px' }}>
  <img 
    src={useBaseUrl("/img/PS2/6.png")}
    alt="Partición terminada."
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
</div>



  + **Formatearlo con Rufus**

## Grabar juegos

Tengo entendido que las ISOs menores a 4Gb no es necesario grabarlas con un programa en específico, copiando y pegando las ISOs en los lugares correspondientes, funcionarán; siendo menos de 700Mb en la carpeta CD y superando esta cantidad, pero siendo menos de 4Gb en la carpeta DVD. Esta limitación es debido al formato FAT32.

No obstante, no lo hice así, yo independientemente del tamaño lo grabo con USB Util 2.2, pero ustedes pueden probar lo anteriormente dicho y comentarme al respecto.

Mi proceso fue el siguiente: Abrir la aplicación, una vez que abierta se irán a 'Archivo' y una vez allí, seleccionarán 'Crear juego desde ISO'.

<div style={{ textAlign: 'center', marginBottom: '40px' }}>
  <img 
    src={useBaseUrl("/img/PS2/usbu1.png")}
    alt="USBUtil2.2 - 1"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
</div>

Aquí buscarán la carpeta en donde se encuentre alojado el juego y deberán seleccionar la ISO, es importante que lo hagan porque, la opción 'crear' solo estará disponible desdpues de ésto.

También deberán elegir dónde grabarán dicho juego, aquí pongan su pendrive o disco duro. No olviden hacer esto porque la aplicación NO lo hace por defecto y si no cambian la ruta, lo guardará en algún lugar no deseado. Igual no hay mayor problema, si se dan cuenta a mitad de procedimiento, lo cancelan y les dará la opción de eliminar todos los archivos qu haya grabado hasta ese momento.

<div style={{ textAlign: 'center', marginBottom: '40px' }}>
  <img 
    src={useBaseUrl("/img/PS2/usbu2.png")}
    alt="USBUtil2.2 - 2"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
</div>

## Desfragmentar

Este es proceso es vital porque, es probable que si no lo haces, cuando intentes ejecutar tu juego te diga que se encuentra fragmentado. Para ello usaremos el Defraggeler

## Gestión de Artes y Carátulas

:::warning
Este paso es opcional, si llegaste hasta el paso anterior, podrás disfrutar de tus juegos.
:::

OPL Manager nos permite modificar cómo se ve el juego dentro del OPL en la PS2. Si tienes la v24, además deberás tener instalado Microsoft Windows Desktop Runtime, el cual es un paquete esencial que permite ejecutar aplicaciones modernas de escritorio creadas con .NET en tu PC Windows. Descargarlo e instalarlo, es sumamente sencillo, por lo que no lo inluiremos dentro de este tutorial. Si tienes la v21.4 esta última instalación no será necesaria.

La primera vez que lo abras te pedirá una ruta de donde puede encontrar los juegos. Pon la de tu pendrive. Una vez aquí verás lo siguiente, donde abrirás el gestor de imágenes. Ten en cuenta que NO te apareceran estos juegos sino lo que vos tengas instalados.

<div style={{ textAlign: 'center', marginBottom: '40px' }}>
  <img 
    src={useBaseUrl("/img/PS2/OPLM1.png")}
    alt="OPL Manager - 1"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
</div>

Aquí selecionarás las imágenes que te gusten. Una vez que hayas terminado, cierra la ventana y listo. Luego verás las modificaciones dentro del OPL que se ejecuta en tu PS2. No es necesario que cierres y abras esta ventana para configurar cada juego, podrás navegar entre todos los que tengas disponibles con las flechas. 

<div style={{ textAlign: 'center', marginBottom: '40px' }}>
  <img 
    src={useBaseUrl("/img/PS2/OPLM2.png")}
    alt="OPL Manager - 2"
    style={{
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto'
    }}
  />
</div>

## Problemas y soluciones

Una de las cosas que solo me pasó una vez y con un solo juego es que no puedo guardar partidas. A mi me pasó con el Burnout 3 Takedown, por lo que podes crear una partida que se guarde dentro de una memory card virtual, alojada dentro del pendrive o bien cargar una partidas de otras personas. 

### Guardar partidas dentro de USB 

Lo que he hecho es lo siguiente:

1. Abrir el OPL en la PS2
2. Desplazate hasta el juego que quieras guardar en la VMC (virtual memory card).
3. Oprime triángulo, con el fin de entrar en las confguraciones.
4. Aquí seleccionas 'Configure VMC' y oprimes 'x'
5. En el slot 1, te desplazas hasta 'Use Generic', oprime 'x', verás que la opción cambia a 'Reset' debes dejarlo así. También verás que desde donde partiste decía 'not set', pero ahora dice 'generic_0', si oprimes 'x' sobre esta opción podrás modificar el tamaño de la VMC y su nombre, pero mi recomendación es que dejes todo como está por defecto.
6. Una vez terminado el proceso verás que se empezará crear la VMC, cuando termine, desplázate hasta 'ok'.
7. **Guarda los cambios**. Es importante que lo hagas antes de ejecutar un juego, solo desplázate hasta 'save changes' y oprime 'x'. Luego vuelve a la página inicial del OPL, donde están los juegos. 
7. Por último entra al juego en donde hiciste esta configuración y prueba si puedes guardar partida. Ten en cuenta que puede que demore un poco más de lo que demora habitalmente en guardar una partida en un una memory card real, sobretodo para el primer guardado.

:::tip nota
Haz este procedimiento con todos los juegos que desees, pero como la primera vez creaste la VMC, para los demás juegos solo deberás seleccionarla. No olvides que luego de hacer este procedimiento de **guardar los cambios.**
:::

### Subir partidas de terceros

Esto es con el fin de disfrutar un juego completo, sin estar atado a la necesidad de completar todo el contenido, si no tienes el tiempo o las ganas de hacerlo, yo lo explicaré con el Budokai Tenkaichi 3, ya que no me interesa el modo historia, pero si quiero jugar con otras personas y tener la libertad de elegir el personaje que desee y no al que yo quera dentro de un limitado pull. Por ello hice lo siguiente:

:::warning advertencia
El proceso que voy a llevar a cabo, es para guardar una partida dentro de la memory card física.
:::

**Parte 1: PC**
1. Conseguir una partida guardada. Acá no les voy a decir desde qué página, pero sí les voy a dar unos tips a tener en cuenta:
    - El archivo que descargues deberá ser de extensión .cbs
    - Deberás descargar la partida cuya región coincida con la de tu juego. ¿Pero cómo sabes esto? Con la siguiente guía:
      - SLUS/SCUS --> América
      - SLES/SCES --> Europa/Oceanía
      - SLPM/SLPS --> Japón
2. Una vez, que lo tengas, abres el PS2 Save Builder y busca tu archivo .cbs para abrirlo.
3. Aquí debes seleccionar todos los archivos existentes y le das al click derecho para porder extraer. 
4. Extraerás a una carpeta vacía y la renombrarás con el nombre del archivo, cuya extensión **NO SEA** .bin, .sys o .ico.
5. Copia la carpeta completa en la raiz de tu pendrive, de preferencia que se encuentre en formato FAT32.

**Parte 2: PS2**

1. Acceder al uLaunchELF:
    - Antes de encender la consola, aprieta R1.
    - Enciendela, mientras mantienes presionado R1 hasta que se abra el uLaunchELF.
    - No es la única forma de acceder a este menú, pero es el que yo usé.
2. Oprime círculo para acceder al browser.
3. Desplázate hasta MASS (acceso a los datos del pendrive) y oprime equis.
4. Busca la carpeta y oprime R1 para poder copiarla.
5. Vuelve hacia atras con triángulo y desplázate a MC0 (acceso a los datos de la Memory Card), selecionalo con equis.
6. Una vez aquí, oprimes R1 nuevamente para poder pegar.
7. Habiendo finalizado el proceso, reinicia la consola.

Podrás verificar, que el proceso ha sido completado con éxito, entrando a las partidas guardadas de la memory card y encontrar la partida que has cargado o entrando al juego en cuestión a verificar que haya una partida guardada.

---

Configurar un pendrive de gran capacidad para la PS2 es un proceso que requiere paciencia y precisión, especialmente por las limitaciones de los puertos USB 1.1 de la consola y la fragmentación de archivos. Sin embargo, una vez superada la barrera del formato y la carga de ISOs, tendrás en tus manos una librería portátil con cientos de horas de nostalgia y diversión.

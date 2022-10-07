# E-Commerce-Practicas-AP
Este es un repostorio para las practicas colaborativas de Argentina Programa. Comenzamos con una app para e-commerce simple y funcional.

## Lista de Requerimientos / características

* Plataforma de e-commerce genérica  

### Páginas
* Home (productos destacados, presentación de la tienda ...)
* Productos
* Detalle de productos (múltiples opciones de información - mínimo Precio - Foto - Detalle)
* Carrito de Compra (pasarela de compras también se le llama creo)
* Administrador de tienda
* Registro (iniciar sesión, cerrar sesión, loggearse)

### Tipos de Usuarios
* Admin (Cliente interno)
* User (Cliente final)
* Visitante (aún no se registra)

### Características Importantes
* CRUD de productos
* CRUD de categorías
* Filtros
* Buscador

### Otras Características
* Para este tipo de páginas es importante aparecer bien posicionado en google
* Es importante un diseño atractivo que llame al comprador y práctico para que finalice la compra 
* Envío de mails para confirmaciones de usuario, de pedido, etc
* Seguridad
* Gestión financiera (Opciones de pago)
* Opciones de envío 
* Sistema de recomendaciones, puntaje de los productos
* Promociones, descuentos, productos destacados
* Edición de filtros
* Etiquetas para facilitar búsqueda
* Historial de pedidos
* Stock de productos
* Data analitics
* Customización del diseño
* Gestión de atributos de productos (atributos de distinto tipo)

## Cómo colaborar en el proyecto (siendo colaborador)

### Consideraciones generales de flujo de GitHub
#### Principios

* Cualquier código en la rama principal debe ser implementable (deployable).
* Creoe nuevas ramas con nombres descriptivos a partir de la rama principal para nuevos trabajos, como  feature/add-new-payment-types.
* Commit regularmente el trabajo al repositorio local y regularmente push el trabajo al reporitorio remoto.
* Para solicitar comentarios o ayuda, o cuando crea que su trabajo está listo para fusionarse con la rama principal, abra una  pull request.
* Después de que su trabajo o función haya sido revisado y aprobado, puede fusionarse (merge) con la rama principal.
* Una vez que su trabajo se haya fusionado con la rama principal, debe implementarse de inmediato (deploy).

![image](https://user-images.githubusercontent.com/76185921/194557412-04c89fc3-e3a6-43a9-834b-bc6d8daf2ceb.png)



### Fork del repositorio
El primer paso es hacer "Fork" del repositorio. (no es indispensable )

### Clonar el repositorio
Después de tener el repositorio en nuestra cuenta, seleccionar la dirección del repositorio "SSH o HTTP" y clonar:

$ git clone https://github.com/User/NombreRepo.git

Dentro de la carpeta que genera, comprobar la URL del repositorio:

$ git remote -v

Antes de realizar modificaciones agregar la URL del repositorio original del proyecto:

$ git remote add upstream https://github.com/User/RepoOriginal(Forkeado)

Comprobar

$ git remote -v

Actualizar la rama Master
Antes de empezar a trabajar, obtener los últimos cambios del Repo Original:

$ git pull -r upstream master

### Crear una Rama
Para crear una rama usar la opción "checkout" de git:

$ git checkout -b feature-nombre-rama

### Hacer cambios
Realizar todos los cambios que se desea hacer al proyecto.

Agregar los archivos y hacer un commit

Después de realizar el commit hacer el push hacia nuestro repositorio indicando la rama que hemos creado.

$ git push origin feature-nombre-rama

### Hacer un Pull Request
Hacer click en "Compare & Pull Request"

### Escribir cambios del Pull Request.

Si todo está bien, enviar con el botón "Send Pull Request".

Esperar a que el duelo del repositorio lo revise, acepte y mezcle en la rama correspondiente.

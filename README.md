# ecommerce-api
Apis Rest Ecommerce
**### API REST Ecommerce**

Este proyecto se ha desarrollado utilizando Node.js y Express.js para la creación de una API REST que ofrece funcionalidades para un sistema de comercio electrónico.

En esta API, he implementado varias características importantes para asegurar su funcionamiento y seguridad:

Autenticación basada en tokens: He integrado la autenticación basada en tokens utilizando JsonWebToken (JWT). Esto nos permite verificar la identidad de los usuarios mediante la generación de tokens de autenticación, lo que garantiza que solo los usuarios autorizados puedan acceder a los recursos protegidos de la API.

** Envío de correos electrónicos**: Para la autenticacio de usuario, he incorporado el envío de correos electrónicos utilizando la biblioteca NodeMailer. Con esta configuracion se enviara un correo electronico al usuario para que posteriormente pueda autenticar su cuenta creada.

**Gestión de subida de archivos:** Para permitir a los usuarios cargar archivos, como imágenes de productos he utilizado la biblioteca Muter. Esta biblioteca simplifica la gestión de la subida de archivos en la API, lo que me permite recibir los archivos adjuntos en las solicitudes HTTP y guardarlos de manera segura en el sistema de archivos del servidor.

**Almacenamiento en la nube con Cloudinary:** Para optimizar el almacenamiento de los archivos subidos por los usuarios, he integrado Cloudinary. Esta plataforma en la nube me permite almacenar y administrar de manera eficiente imágenes y videos, aprovechando sus características avanzadas, como el redimensionamiento de imágenes, la generación de miniaturas y la aplicación de filtros.

Además de estas características, también he aplicado medidas adicionales de seguridad para proteger nuestra API. He utilizado las bibliotecas CORS y Helmet para fortalecer la seguridad:

**CORS (Cross-Origin Resource Sharing)**: He configurado CORS para controlar el acceso a la API desde diferentes dominios, evitando así posibles ataques de origen cruzado.

**Helmet:** Mediante la implementación de Helmet, he asegurado la API configurando encabezados HTTP relacionados con la seguridad. Esto incluye políticas de seguridad de contenido, protección contra ataques XSS y medidas para prevenir el secuestro de clics. Estas configuraciones nos permiten fortalecer la seguridad de nuestra API y mitigar vulnerabilidades comunes.

En resumen, este proyecto de API REST de comercio electrónico desarrollado con Node.js y Express.js ofrece una amplia gama de funcionalidades, incluyendo autenticación basada en tokens, envío de correos electrónicos, gestión de subida de archivos y almacenamiento en la nube con Cloudinary. Además, he reforzado la seguridad de la API mediante el uso de las bibliotecas CORS y Helmet. Estas medidas garantizan un entorno seguro y confiable para los usuarios y sus interacciones con la plataforma de comercio electrónico.

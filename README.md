# Integrador Codo A Codo
## Integrantes
1. Abraham Osco
2. Nicolas Mateo
3. Ana Sanchez

## Setup de la base de datos:  
Paso 1:
Crear una seccion en el **workbench** con los sgts datos:
1. Host: 127.0.0.1
1. Port: 3306
1. Login User:userToy
1. Password:123456
1. Current User:userToy@localhost

Paso 2: Iniciar el servicio copiar el sgt codigo: https://github.com/AbrahamOsco/Integrador-CodoACodo/blob/main/models/mysql/funkoShop.sql  abrir una query en el workbech y ejecutarlo. 

## Ejecutar el proyecto: 
Paso 1: Clonar el repo y en la misma ubicacion del index.js correr: **npm run dev**.

Paso 2: Ir a http://localhost:3000 para ver el desarollo. 

## Folder Structure

```txt
├── index.js
├── controllers/
├── models/
├── public/
│   └── css/
│   └── js/
│   └── img/
├── routes/
└── views/
    ├── pages/
    │   └── admin/
    │   └── shop/
    └── partials/
```
## Pages
### Main
home.html

`GET` `/home` (page)

---

other

`GET` `/contact` (text)

`GET` `/about` (text)

`GET` `/faqs` (text)

---

### Shop

shop.html

`GET` `/shop` (page)

---

item.html

`GET` `/shop/item/:id` (page)

`POST` `/shop/item/:id/add` (button add to cart)

---

cart.html

`GET` `/shop/cart` (page)

`DELETE` `/shop/cart` (button remove from cart)

`POST` `/shop/cart` (button pay)

---

### Admin

admin.html

`GET` `/admin` (page)

`DELETE` `/admin/delete/:id` (button delete product)

---

create.html

`GET` `/admin/create` (page)

`POST` `/admin/create` (button add product)

---

edit.html

`GET` `/admin/edit/:id` (page)

`PUT` `/admin/edit/:id` (button modify product)

---

### Auth

login.html

`GET` `/auth/login` (page)

`POST` `/auth/login` (button login)

---

register.html

`GET` `/auth/register` (page)

`POST` `/auth/register` (button register)

---

header in admin pages

`GET` `/auth/logout` (button logout)

---

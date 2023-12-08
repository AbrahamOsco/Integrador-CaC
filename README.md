
# Integrador Codo A Codo

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

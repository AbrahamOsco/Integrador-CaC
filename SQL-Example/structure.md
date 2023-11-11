
# Structure

## Folders

```txt
├── server.js
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

## Routes

home.html

`GET` `/home` (page)

---

shop.html

`GET` `/shop` (page)

---

item.html

`GET` `/shop/item/:id` (page)

---

cart.html

`GET` `/shop/cart` (page)

`POST` `/shop/cart` (button pay)

---

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

login.html

`GET` `/auth/login` (page)

`POST` `/auth/login` (button login)

---

register.html

`GET` `/auth/register` (page)

`POST` `/auth/register` (button register)

---

header in admin/

`GET` `/auth/logout` (button logout)

---

other

`GET` `/contact` (text)

`GET` `/about` (text)

`GET` `/faqs` (text)

---

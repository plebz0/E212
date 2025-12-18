# Bird_Project

School project about birds

---

## 1. Opis projektu

**Bird Project** to aplikacja internetowa zbudowana w oparciu o **Node.js**, **Express** oraz **MongoDB**.  
Renderowanie widoków po stronie serwera realizowane jest przy użyciu **EJS**.

Projekt został zaprojektowany w celu zarządzania stanem aplikacji, operacjami związanymi z użytkownikiem oraz funkcjonalnościami opartymi na bazie danych w sposób ustrukturyzowany i skalowalny.

Backend udostępnia endpointy HTTP do obsługi logiki aplikacji i współpracuje z bazą danych MongoDB, umożliwiając przechowywanie danych nawet po wyjściu ze strony.

---

## 2. Funkcjonalności

- Identyfikacja użytkownika oraz haszowanie haseł przy użyciu **bcrypt**
- Routing w **Express**
- Współdziałanie z bazą danych **MongoDB**
- Widoki renderowane po stronie serwera przy użyciu **EJS**
- Przejrzysta struktura projektu oparta na MVC:
  - **Controllers** – logika aplikacji
  - **Routes** – definicja endpointów HTTP
  - **Models** – schematy bazy danych / obsługa danych
  - **Views** – szablony EJS
- Łatwe zarządzanie aplikacją

---

## 3. Instrukcja instalacji i uruchomienia

### Wymagania wstępne

Zainstalowane elementy:

- **Node.js**
- **npm**
- **MongoDB** (MongoDB Compass lub Docker Desktop)

---

### Instalacja

W terminalu:

1. **Sklonuj repozytorium**

   git clone <repository-url>
   cd Bird_Project

Zainstaluj zależności:
 npm install
 npm install bcrypt,
 npm install ejs,
 npm install express,
 npm install mongodb

Stwórz bazę danych o nazwie birds

Upewnij się, że MongoDB działa

Uruchom aplikację wpisują w terminalu w odpowiedniej ścierzce: npm start

Po napisaniu w terminalu powinna się wyświetlić wiadomość. kliknij w http://localhost:3000 trzymając przycisk ctrl.


| Metoda | Endpoint          | Opis                         |
| ------ | ----------------- | ---------------------------- |
| GET    | `/`               | Główna strona aplikacji      |
| GET    | `/birds/:id/view` | Wyświetlenie opisu ptaka     |
| GET    | `/login`          | Strona logowania             |
| POST   | `/login`          | Identyfikacja użytkownika    |
| GET    | `/register`       | Strona rejestracji           |
| POST   | `/register`       | Tworzenie nowego użytkownika |




5.Użyte technologie:
Node.js
Express.js
MongoDB
EJS 
bcrypt
npm 

Struktura projektu:
```
Bird_Project/
│
├── src/
│   ├── controllers/
│   │   ├──birdsControllers.js
|   │   └──usersControllers.js
│   ├── routes/
|   │   └──birdsRouter.js
│   ├── models/
|   |   ├──birdsModels.js
|   │   └──usersModels.js
│   ├── views/
|   |   |
│   │   ├── pages/
│   │   │   ├── birds/
│   │   │   |   ├── edit.ejs
│   │   │   |   ├── new.ejs
│   │   │   |   └── view.ejs
│   │   │   ├── users/
│   │   │   |   ├── login.ejs
│   │   │   |   └── register.ejs
│   │   │   ├── error.ejs
│   │   │   └── index.ejs
│   │   │
│   │   └── partials/
│   │       ├── footer.ejs
│   │       └── header.ejs 
│   ├── data/
|   │   └──connection.js
│   ├── app.js
│   ├── server.js
│   └── state.js
│
├── node_modules/
├── package.json
└── README.md
```
Autor:
Dawid Kubik
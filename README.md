# Bird Project

---

## Opis projektu

Projekt aplikacji webowej umożliwiającej dodawanie, edycję, przeglądanie i usuwanie opisów ptaków oraz podstawową obsługę użytkowników (rejestracja i logowanie). Aplikacja korzysta z Node.js, Express oraz MongoDB, a widoki są renderowane za pomocą EJS. Apliokacja również korzysta ze stylowania css

---

## Wymagania

- **Node.js** (wersja **14** lub nowsza).
- **npm** (Node Package Manager) — do instalacji zależności (`npm install`).
- **MongoDB** — lokalna instancja (domyślnie `mongodb://localhost:27017`) lub **MongoDB Atlas**.
- **Zmienne środowiskowe** (opcjonalne):
  - `MONGODB_URI` — URI do bazy MongoDB (jeśli nie ustawione, używany jest `mongodb://localhost:27017`).
  - `PORT` — port serwera (domyślnie `3000`).
- **Git** (opcjonalnie) — do klonowania repozytorium.

---

## Funkcjonalności

- Rejestracja i logowanie użytkowników (hasła haszowane przy użyciu `bcrypt`)
- Dodawanie nowych wpisów o ptakach
- Edycja i usuwanie istniejących wpisów
- Przeglądanie szczegółów pojedynczego wpisu
- Filtrowanie listy ptaków (parametry zapytania `name`, `diet`)
- Sortowanie listy ptaków (parametry zapytania `createdAt`, `overallSize`)

---

## Instrukcja instalacji i uruchomienia

1. Sklonuj repozytorium:

```bash
git clone <repository-url>
cd Bird_Project
```

2. Zainstaluj zależności:

```bash
npm install
```

3. Upewnij się, że MongoDB działa (domyślnie: `mongodb://localhost:27017`, baza `birds`). Spójrz plik docker.txt

4. Uruchom aplikację:

```bash
npm start
```

Aplikacja będzie dostępna pod adresem `http://localhost:3000` (Po wpisaniu npm start w trminalu pojawi się wiadomość z `http://localhost:3000` wtedy możesz przytrzymać ctrl i kliknąć w link).

---

## Lista endpointów

| Metoda | Endpoint                  | Opis krótkiego działania |
| ------ | ------------------------ | --------------------------------------------------------------- |
| GET    | `/`                      | Strona główna — lista ptaków (filtrowanie i sortowanie)         |
| GET    | `/birds/new`             | Formularz dodawania nowego ptaka (widok)                        |
| POST   | `/birds/new`             | Zapis nowego ptaka (walidacja pól)                              |
| GET    | `/birds/:id/view`        | Widok szczegółów ptaka                                          |
| GET    | `/birds/:id/edit`        | Formularz edycji ptaka                                          |
| POST   | `/birds/:id/edit`        | Zapis zmian dla ptaka                                           |
| POST   | `/birds/:id/delete`      | Usunięcie ptaka                                                 |
| GET    | `/users/register`        | Formularz rejestracji użytkownika                               |
| POST   | `/users/register`        | Rejestracja użytkownika (walidacja hasła, redirect do login)    |
| GET    | `/users/login`           | Formularz logowania                                             |
| POST   | `/users/login`           | Logowanie (porównanie hasła z hashem)                           |

---

## Technologie

- Node.js
- Express
- MongoDB (sterownik `mongodb`)
- EJS
- bcrypt
- npm
- css
- javascript

---


## Struktura projektu

```
src/
├── controllers/
│   ├── birdsControllers.js
│   └── usersControllers.js
├── routes/
│   └── birdsRouter.js
├── models/
│   ├── birdsModels.js
│   └── usersModels.js
├── data/
│   └── connection.js
├── resources/
│   └── birdsRouter.js
├── views/
│   ├── pages/
│   │   ├── birds/
│   │   │   ├── edit.ejs
│   │   │   ├── new.ejs
│   │   │   └── view.ejs
│   │   ├── users/
│   │   │   ├── login.ejs
│   │   │   └── register.ejs
│   │   ├── index.ejs
│   │   └── error.ejs
│   └── partials/
│       ├── footer.ejs
│       └── header.ejs
├── app.js
├── server.js
└── state.js
```



## Autor

Dawid Kubik

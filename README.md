# Bird Project

Projekt aplikacji webowej do zarządzania opisami ptaków z użyciem Node.js, Express i MongoDB. Widoki renderowane są po stronie serwera przy użyciu EJS.

---

## Opis projektu

Projekt aplikacji webowej umożliwiającej dodawanie, edycję, przeglądanie i usuwanie opisów ptaków oraz podstawową obsługę użytkowników (rejestracja i logowanie). Aplikacja korzysta z Node.js, Express oraz MongoDB, a widoki są renderowane za pomocą EJS.

---

## Funkcjonalności

- Rejestracja i logowanie użytkowników (hasła haszowane przy użyciu `bcrypt`)
- Dodawanie nowych wpisów o ptakach
- Edycja i usuwanie istniejących wpisów
- Przeglądanie szczegółów pojedynczego wpisu
- Filtrowanie listy ptaków (parametry zapytania `name`, `diet`)

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

3. Upewnij się, że MongoDB działa (domyślnie: `mongodb://localhost:27017`, baza `birds`). Jeśli chcesz używać zmiennej środowiskowej, dodaj `MONGODB_URI` do pliku `.env` i skonfiguruj `src/data/connection.js`.

4. Uruchom aplikację:

```bash
npm start
```

Aplikacja będzie dostępna pod adresem `http://localhost:3000`.

---

## Lista endpointów

| Metoda | Endpoint                  | Opis krótkiego działania |
| ------ | ------------------------ | --------------------------------------------------------------- |
| GET    | `/`                      | Strona główna — lista ptaków (opcjonalne query: `name`, `diet`) |
| GET    | `/birds/new`             | Formularz dodawania nowego ptaka (widok)                        |
| POST   | `/birds/new`             | Zapis nowego ptaka (walidacja pól)                              |
| GET    | `/birds/:id/view`        | Widok szczegółów ptaka                                          |
| GET    | `/birds/:id/edit`        | Formularz edycji ptaka                                          |
| POST   | `/birds/:id/edit`        | Zapis zmian dla ptaka                                           |
| POST   | `/birds/:id/delete`      | Usunięcie ptaka                                                 |
| GET    | `/users/register`        | Formularz rejestracji użytkownika                               |
| POST   | `/users/register`        | Rejestracja użytkownika (walidacja hasła, redirect do login)    |
| GET    | `/users/login`           | Formularz logowania                                             |
| POST   | `/users/login`           | Logowanie (porównanie hasła z hashem, redirect do `/`)          |

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

# Plan stworzenia gry

- Pobranie wszystkich elemntów gry (połączenie z DOM) -klasa GAME JS
- Podanie początkowych statystyk gry:
    - stan portfela
    - ilość rozegranych gier
    - ilość gier wygranych
    - ilość gier przegranych
- Użytkownik podaje stawke
- Użytkownik klika przycisk Zakręć (start Game)
    - Następuje sprawdzenie czy użytkownik może zagrać podaną stawką
    - Następnie, stawka zostaje odjęta z portfela użytkownika
    - Następnie, następuje losowanie kolorów dla 3 pól gry
    - Sprawdzenie, czy użytkownik wygrał rundę (3 identyczne pola wygrywają, oraz 3 różne pola wygrywają)
    - Aktualizacja statystyk gry
    - Dodanie środków do porftela użytkownika (w przypadku przegranej dodane zostanie 0$)
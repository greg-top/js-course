## Hermetyzacja (encapsulation)

**Grupowanie** (zamykanie) metod i właściwości w obiekcie. <br><br>

**Integralność danych i ukrywanie danych.** Kontrolowaniem dostępu do danych ma zajmować się sam obiekt. <br><br>

Popularnym rozwiązanie jest używanie metod pobierających **(getter)** i dostępowych **(setter)** do danych w obiekcie.

**Implementacja** staje się ukryta a dostęp do danych w jednym obiekcie jest udostępniany innemu obiektowi za pomocą **interfejsu**. <br><br>

```
//Pseudokod hermetyzacji:

Samochód posiada silnik oraz więcej układów pozwalających na jazdę - IMPLEMENTACJA

Kierujący pojazdem może używać kierownicy, pedałów gazu i hamulca, itp. do sterowania pojazdem - INTERFEJS

Dla kierującego pojazdem ważny jest INTERFEJS.
```
```
//Inne przykłady hermetyzacji
Math.floor(2.22);
//Implementacja nas nie ochodzi i nie mamy do niej dostępu. Interfejsem dla obiektu math jest metoda obiektu w tym wypadku floor

//Przykład braku ukrycia danych (minimalna hermetyzacja związana z przestrzenią danych, bez ukrycia danych)

const user = {
    age: 20
}
user,age = 21; //zmiana
```

## Dziedziczenie (inheritance)

Dzięki dziedziczeniu redukujemy ilość powtarzanego kodu. Stworzenie relacji między obiektami i grupowanie obiektów. Zmniejszenie ilości potencjalnych błędów. 

## Dziedziczenie w JS

1. Instancje mają dostęp do wspólnych metod i właściwości konstruktora (klasy), oraz jego konstruktora, itd. (na szczycie jest prototyp konstruktora Object). Takie dziedziczenie odbywa się poprzez **prototype chain** (łańcuch prototypów).
2. Jedne klasy mogą przyjąc właściwości innych klas (i je rozszerzać). W klasie w JavaScript dzieje się to za pomocą eleganckiego słowa **extends**:

```
class Dog extends Animal{}
// docelowo to co ma klasa Animal plus właściwości i metody dodane w klasie Dog
//Dog jest podklasą (klasą potomną, subclass) klasy Animal (która jest klasą nadrzędną, superclass)
```

## Polimorfizm

Obiekt zachowuje się inaczej w zależności od dostarczonych danych. Polimorficzny w podstawowym znaczeniu to różne postacie tej samej rzeczy, zmiana kształtu.<br><br>

Przejawy polimorfizmu:<br>
- Implementacja metod, które zachwoują się inaczej w zależności od tego jakie/ile argumentów otrzymają.
- Różna implementacja tej samej metody w różnych obiektach.

## Polimorfizm - przykłady w JS

1. Mechanizm **przeciążania** w innych językach programowania, ale w JS też można uzyskać ten sam efekt, choć w inny sposób (jedna metoda obsługuje różne dane, lub/i różną liczbę danych).
2. Wykorzystanie łańucha dziedziczenia (prototyp). Metoda jednego obiektu o tej samej nazwie **przysłania** metodę innego obiektu (nadrzędnego).

## Abtstrakcja (abstraction)

**Model rzeczywistości**, który upraszcza złożoność i pozwala przedstawić problem (zadanie) za pomocą obiektów i relacji między nimi. <br><br>

Abstrakcja określa jakie **cechy** musi posiadać i jakie **zadanie** realizować obiekt. <br><br>

Abstrakcja to **umiejętność** pozwalająca na modelowanie programu/projektu. <br><br>

Abstrakcja jest to realizujący określone przez projekt zadania, uproszczony model rzeczywistości, oparty o obiekty. Obiekty te mają określoną budowę, interfejs i implementacje, cel, procesy, oraz co bardzo ważne posiadające relację z innymi obiektami.

## Przykładowe relacje między obiektami

Abstrakcja opisuje relacje między obiektami: <br>
- **Kompozycja** - obiekt zawierają inne obiekty. Kompozycja zakłada, że jeden jest wbudowany w inny obiekt. Przy czym obiekt wbudowany jest zależny od obiektu w którym się znajduje, a jego istnienie poza obiektem w którym jest wbudowany nie ma sensu. <br>

```
Pseudokod:
Komin (obiekt) jest potrzebny z punktu widzenia domu (inny obiekt). Istnienie komina (obiekt) bez domu (inny obiekt) nie ma sensu.
```
- **Asocjacja** - Każdy obiekt w tej relacji istnieje niezależnie. Pomimo to istnieje relacja (wiązanie) między obiektami. Istnienie jednego obiektu nie jest potrzebne do istnienia drugiego. <br>

```
Pseudokod:
Wujek (obiekt) i ciocia (inny obiekt) mają relacje rodzinne ze sobą ale mogą istnieć bez siebie.
```
- **Agregacja** - obiekt składa się z innych obiektów (agreguje je). Sens istnienia agregatu (obiektu głównego) polega na posiadaniu obiektów, które przechowuje (choć te obiekty mogą istnieć poza nim). <br>

```
Pseudokod:
Drużyna piłkarska (obiekt) posiada 11 piłkarzy (obiektów). Każdy piłkarz jest niezależnym obiektem (może istnieć bez drużyny) ale drużyna (obiekt) bez piłkarzy nie może istnieć (drużyna agreguje piłkarzy).
```
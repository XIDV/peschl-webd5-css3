# Dokumentation zur Lösung der ESA 8: CSS für Fortgeschrittene

Realisation der Praxisaufgabe in Form des Demo-Projekts "Tierrettung Essen e. V."

Sebastian Peschl | &copy; 2022

![Logo Tierrettund Essen e. V.](img/logo_icon.png)

## Inhalt

* [Basisinformationen](#basisinformationen)
* [Strukturierung der Seite (index.html)](#strukturierung-der-seite-indexhtml)
* [Gestaltung der Seite (style.css)](#gestaltung-der-seite-stylecss)
* [Erweiterte Funktionalität (script.js)](#erweiterte-funktionalität-scriptjs)

---

## Basisinformationen

Bei der Entwicklung der vorliegenden Webseite standen die Verwendung von Grid-, für die primären Komponenten und Flex-Layout, für die Positionierung von Subkomponenten (z. B. Elemente der Navigation) im Vordergrund. Diese Grundvoraussetzungen wurden durch responsives Verhalten, welches durch Media-Queries und die Verwendung relativer Größenangaben realisiert wurde, erweitert.

Ferner war die Verwendung eines Webfond gefordert, was via Google Fonts erfolgen sollte. In der vorliegenden Arbeit wurde von mir, neben der Einbindung via. `link`-Tag, bzw. `@import`-Anweisung, eine (optionale) DSGVO-konforme Variante implementiert welche die einzelnen Schriftvariationen via. `@font-face`-Anweisung einbindet, die im Verzeichnis `font` abgelegt sind.  
Als Schriftart wurde von mir der Font [Asap Condensed](https://fonts.google.com/specimen/Asap+Condensed?query=Asap) verwendet.

Weiter war die Erstellung und Gestaltung eines Login-Formulars gefordert. Die `input`-Elemente dieses Formulars sollten mit abgerundeten Ecken und, wenn das Element (z. B. durch Klick) den Focus erhält, mit einem Schlagschatten und einer anderen Rahmenfarbe versehen werden. Außerdem soll es mittels `transition` ein weicher Übergang realisiert werden.  
Hier habe ich das Verhalten erweitert. Das Login-Formular wird bei kleinen und mittleren VP automatisch ausgeblendet und kann vom User bei Bedarf angezeigt werden. Erst bei größeren VP wird das Formular direkt angezeigt.

Bzgl. des Login-Formulars, soll dieses auch über einen Senden-Button, also ein `button` vom Typ `submit` verfügen. Dieser soll ebenfalls mittels CSS, hinsichtlich Textfarbe, Farbverlauf (Hintergrund) und Rahmenfarbe, gestaltet werden. Hierbei soll die Selektierung über den Typ erfolgen.

## Strukturierung der Seite (index.html)

Im `head`-Bereich der Seite erfolgt die Einbindung des Google Font via `link`-Tag.

Der `body` beinhaltet als einziges Kind-Element (abgesehen von `<script>`) das `div` mit der ID `pageWrapper`. Dieser Container beinhaltet die primären Komponenten der Seite in folgender Reihenfolge:

1. [`main`](#main)
2. [`aside`](#aside)
3. [`nav`](#nav)
4. [`header`](#header-pageheader)
5. `footer`

Diese Reihenfolge der Implementierung wurde von mir als Ansatz zur SEO gewählt. Bei dieser befinden sich die wichtigsten Inhalte am Beginn des Dokuments.

Darüber hinaus findet sich zwischen `nav` und `header` eine sekundäre Komponente. Hierbei handelt es sich um ein `div` mit der ID [`importantContainer`](#importantcontainer). Diese soll dem / der User:in einen unmittelbaren Zugriff auf Informationen bzgl. der zur Verfügung stehenden Kommunikationswege ermöglichen, unabhängig davon wo er / sie sich auf der Seite befindet.

### `main`

Das `main`-Element gliedert sich in sechs thematische `section`s welche der Klasse `mainSection` zugehörig sind und jeweils über eine themenspezifische ID verfügen. Jede `section` gliedert sich wiederum in einen `header` der Klasse `sectionHeader` einem `div` der Klasse `sectionContent`. 

Bei der `section` mit der ID `services` wurde mit dem `div` der Klasse `articleContainer` eine weitere Gliederungsebene realisiert. Dieser Container enthält Elemente vom Typ `article`.  
Auch Diese verfügen jeweils über einen `header` und einen Content-Bereich (`div` mit der Klasse `articleContent`). Außerdem findet man hier ein weiters `div` mit der Klasse `expandButton`, eine animierte Schaltfläche. (Diese ist jedoch hier nicht funktional.)

Die letzte `section` (mit der ID `contact`) beinhaltet ein einfach gehaltenes Kontakt-Formular.

### `aside`

Das `aside`-Element beherbergt das in der Aufgabenstellung geforderte Login-Formular. Dieses wurde jedoch darüber hinaus in ein `details`-Element eingeschlossen. Hiermit kann ein programmatisches, bzw. usergesteuertes Ein-/Ausblenden realisiert werden.

### `nav`

Dieses Element beinhaltet neben der `ul` mit der ID `pageNav` zwei weitere Komponenten. Einerseits ein `div` mit der ID `navButton` und andererseits ein `header`-Element mit der ID `smallNavHeader`. Diese beiden Elemente werden in Abhängigkeit von der Breite des VP ein-, bzw. ausgeblendet. Bei kleinen und mittleren VP ermöglicht es `navButton` dem User die Seitennavigation anzuzeigen.

### `importantContainer`

Dieses `div` beherbergt zwei Bereiche (`div`s). Eine klickbare Fläche `impSwitch` und einen Content-Bereich `impContent`. Ob der Content-Bereich sichtbar ist, ist von VP bzw. von der Interaktion des / der User:in abhängig.

### `header` (`pageHeader`)

Dieses Element ist erst ab mittleren VP-Breiten sichtbar. `pageHeader` beinhaltet das Logo und den `pageTitle`.

## Gestaltung der Seite (style.css)

### Einbindung des Fonts

Mittels `@import`-Anweisung wird der Webfont von Google Fonts eingebunden. Alternativ kann die DSGVO-konforme Variante, bei der durch Verwendung von `@font-face` die im Verzeichnis `font` hinterlegten Schriftvarianten eingebunden werden, aktiviert werden.

### Basiskonfiguration

* In `:root` erfolgt die Deklaration einiger CSS Variablen. Hier werden einige Farben, Farbverläufe und ein default-Wert für `border-radius` definiert.
* In `html` wird das Box-Modell `border-box` spezifiziert.
* Im `body` wird der Font [Asap Condensed](https://fonts.google.com/specimen/Asap+Condensed?query=Asap), bzw. eine serifenlose Schrift festgelegt.

### Layout

Die Anordnung der primären Komponenten (`header`, `nav`, `main`, `aside` und `footer`) der Webseite wird mithilfe von Gridlayout realisiert. Das `div`-Element mit der ID `pageWrapper` ist der entsprechende Container. Dieser erlaubt eine maximale horizontale Ausdehnung von 1200px und wird horizontal zentriert ausgerichtet.  
Ferner wird hier ein Raster aus 2 Spalten und 5 Zeilen definiert. Die Spaltenaufteilung wird hier asymmetrisch gewählt. Spalte 1 erhält die dreifache (`3fr`) Breite von Spalte 2 (`1fr`).

Bei der nachfolgenden Gestaltung des Layouts wird nach dem Mobile First-Grundsatz verfahren. In diesem Zusammenhang wird der `#pageHeader` bei kleinen VP nicht angezeigt.

### Kleine Viewports

Die Seitennavigation ist bei diesen (und bei mittleren) VP kollabiert und ist über ein "Hamburger"-Button zugänglich.

Wie bereits oben bemerkt wird hier der `header` (`#pageHeader`) nicht angezeigt. Stattdessen wird innerhalb der Navigationosleiste, gegenüber vom "Hamburger"-Button der Seitentitel und das Logo in verkleinerter Form eingeblendet.

Das Layout ist bei diesen VP einspaltig gehalten. Alle primären Komponenten sind vertikal zueinander ausgerichtet. Dieses einspaltige Erscheinungsbild setzt sich auch innerhalb der einzelnen `section`s vom `main` fort. Textabsätze, Bilder, `article` und (die meisten) Formularelemente nehmen die volle Breite des zur Verfügung stehenden Raums ein.

Das Login-Formular, welches sich innerhalb eines `details`-Elements mit der ID `#loginContainer` befindet ist bei kleinen und mittleren VP standardmäßig ausgeblendet und kann via User-Interaktion angezeigt werden.

### Mittlere Viewports

Die einspaltige Anordnung der primären Komponenten bleibt auch hier erhalten. Innerhalb der `section`s von `main` wird diese jedoch aufgegeben.  
So werden hier Textabsätze und Bilder, bzw. `article` nebeneinander angeordnet. Realisiert wird dies durch ein weiters Gridlayout, bzw. durch Flex bei `.articleContainer`.  
Die Elemente (`div`s) mit der Klasse `.sectionContent` verwenden wie `#pageWrapper` ein asymmetrisches Gestaltungsraster. Hier ist jedoch das gewählte Verhältnis der Breite 2:1. Abhängig von dem darzustellenden Content wird jedoch von dieser zweispaltigen Aufteilung abgewichen. Beispielsweise bei den `article`- und dem `form`-Element in der `section#contact`.

### Große Viewports

Die Einträge der Seitennavigation werden nun angezeigt und der "Hamburger"-Button entfernt.

Die Aufteilung von `#pageWrapper` wird nun zweispaltig. Das Element `aside` welches zuvor oberhalb von `main` zu finden war befindet sich nun auf der rechten Seite. Das `details`-Element ist nun automatisch via JS geöffnet.

## Erweiterte Funktionalität (script.js)

Das dynamische, responsive Verhalten der Seite wird durch JS unterstützt. In diesem Zusammenhang werden ...

* `click`-,
* `touchstart`- und
* `resize`-Events 

verarbeitet.

Hierfür wurden als Callback die folgenden Funktionen implementiert:

| Funktion | Erläuterung |
| - | - |
| `setDynamicElements` | In Abhängigkeit von der inneren Breite des Fensters werden Attribute der Elemente...  <ul> <li>`#pagNav`</li> <li>`#loginContainer`</li> <li>`#pageFooter`</li> </ul> manipuliert.  |
| `toggleMenu` | In Abhängigkeit von der inneren Breite des Fensters **und** dem Wert der Variablen `navStatus` wird der Wert des `height`-Attribut von `#pageNav` manipuliert. Der Wert von `navStatus` wird invertiert. |
| `toggleICCB` | Abhängig vom Wert der Variablen `iccbStatus` wird der Wert des `right`-Attributes von `#importantContainer` manipuliert. Der Wert von `iccbStatus` wird invertiert. |

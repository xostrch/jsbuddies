const translations = {
    pl: {
        headerAuthor: "Autor",
        mainH2:"JavaScript w 10 etapach - bez spin, bez chaosu",
        mainH5:"Naucz sie z nami JavaScript - krok po kroku",
        desc1:"Od totalnych podstaw, po bardziej zaawansowane rzeczy",
        desc2:"Zero lania wody, same konkrety",
        desc3:"Wszystko za darmo ! ! !",
        btnMainDescRight:"Zacznijmy",
        btnNewsletter:"Zapisz sie",
        stage1:"Etap 1",
        stage2:"Etap 2",
        stage3:"Etap 3",
        stage4:"Etap 4",
        stage5:"Etap 5",
        stage6:"Etap 6",
        stage7:"Etap 7",
        stage8:"Etap 8",
        stage9:"Etap 9",
        stage10:"Etap 10",
        modal1title: "Etap 1: Podstawy JavaScript",
        modal2title: "Etap 2: Praca z obiektami i tablicami",
        modal3title: "Etap 3: Zaawansowane koncepcje JavaScript",
        modal4title: "Etap 4: Moduly i nowoczeny JavaScript (ES6+)",
        modal5title: "Etap 5: Praca z DOM i zdarzeniami",
        modal6title: "Etap 6: Zaawansowane operacje na kolekcjach",
        modal7title: "Etap 7: Programowanie funkcyjne w JavaScript",
        modal8title: "Etap 8: Debugowanie i testowanie",
        modal9title: "Etap 9: Praca z Web Apis",
        modal10title: "Etap 10: Optymalizacja zdarzen i wydajnosc",
        modal1content:`
                    <ol class="list-style-main">
                        <li>Co to jest JavaScript i do czego sluzy</li>
                        <li>Jak dolaczyc JS do strony</li>
                        <li>Zmienne - roznice i ich zakres</li>
                        <li>Typy danych:</li>
                            <ul class="list-style-notmain">
                                <li>Prymitywne</li>
                                <li>Referencyjne</li>
                            </ul>
                        <li>Operatory:</li>
                            <ul class="list-style-notmain">
                                <li>Arytmetyczne</li>
                                <li>Przypisania</li>
                                <li>Porownania</li>
                                <li>Logiczne</li>
                                <li>Ternary</li>
                            </ul>
                        <li>Instrukcje Warunkowe</li>
                        <li>Petle</li>
                        <li>Funkcje:</li>
                            <ul class="list-style-notmain">
                                <li>Deklaracje</li>
                                <li>Wyrazenia</li>
                                <li>Anonimowe</li>
                                <li>Funkcje strzalkowe</li>
                                <li>Parametry Domyslne</li>
                            </ul>
                    </ol>`,
        modal2content:`
            <ol class="list-style-main">
                <li>Obiekty:</li>
                    <ul class="list-style-notmain">
                        <li>Tworzenie</li>
                        <li>Dostep do wlasciwosci</li>
                        <li>Dodawanie i usuwanie</li>
                        <li>Metody Obiektow</li>
                    </ul>
                <li>Tablice:</li>
                    <ul class="list-style-notmain">
                        <li>Tworzenie</li>
                        <li>Dostep</li>
                        <li>Metody :</li>
                            <ul class="list-style-notnotmain">
                                <li>push</li>
                                <li>pop</li>
                                <li>shift</li>
                                <li>unshift</li>
                                <li>iteracja</li>
                                <li>forEach</li>
                            </ul>
                    </ul>
                <li>Zaawansowane metody tablic:</li>
                    <ul class="list-style-notmain">
                        <li>map()</li>
                        <li>filter()</li>
                        <li>reduce()</li>
                        <li>find()</li>
                        <li>some()</li>
                        <li>every()</li>
                        <li>flat()</li>
                        <li>flatMap()</li>
                    </ul>
            </ol>`,
        modal3content:`
            <ol class="list-style-main">
                <li>Zakres(scope) i Hoisting: </li>
                    <ul class="list-style-notmain">
                        <li>Globalny</li>
                        <li>Lokalny</li>
                        <li>Block scope</li>
                    </ul>
                <li>Closure:</li>
                    <ul class="list-style-notmain">
                        <li>Definicja</li>
                        <li>Przyklady</li>
                        <li>Zastosowanie</li>
                    </ul>
                <li>this:</li>
                    <ul class="list-style-notmain">
                        <li>Kontekst wykonania</li>
                        <li>Roznice miedzy funkcjami zwyklymi a arrow functions</li>
                    </ul>
                <li>Prototypy i dziedziczenie: </li>
                    <ul class="list-style-notmain">
                        <li>Prototypowy lancuch</li>
                        <li>Tworzenie prototypow</li>
                        <li>Klasy ES6</li>
                    </ul>
                <li>Funkcje wyzszego rzedu (higher-order functions) i callbacki: </li>
                    <ul class="list-style-notmain">
                        <li>Zasady dzialania</li>
                        <li>Pulapki</li>
                    </ul>
                <li>Promisy</li>
                    <ul class="list-style-notmain">
                        <li>Tworzenie</li>
                        <li>then</li>
                        <li>catch</li>
                        <li>finally</li>
                    </ul>
                <li>Async/await</li>
                    <ul class="list-style-notmain">
                        <li>asynchroniczny kod</li>
                        <li>obsluga bledow w async</li>
                    </ul>
                <li>Event Loop</li>
                    <ul class="list-style-notmain">
                        <li>call stack</li>
                        <li>event queue</li>
                        <li>microtask queue</li>
                    </ul>
                <li>Obluga bledow: try/catch/finally</li>
                    <ul class="list-style-notmain">
                        <li>synchronizacja i asynchronicznosc</li>
                    </ul>
                <li>Strict Mode</li>
                    <ul class="list-style-notmain">zalety i wplyw na kod</ul>
            </ol>
        `,
        modal4content:`<ol class="list-style-main">
            <li>Moduly ES6: </li>
                <ul class="list-style-notmain">
                    <li>import</li>
                    <li>export</li>
                </ul>
            <li>Modularnosc i izolacja kodu</li>
            <li>Dynamiczne importy</li>
            <li>Nowosci ES6+: </li>
                <ul class="list-style-notmain">
                    <li>Destrukturyzacja tablic i obiektow</li>
                    <li>Spread i rest operator</li>
                    <li>Template literals</li>
                    <li>Parametry domyslne</li>
                    <li>Optional chaining</li>
                    <li>Nullish coalescing</li>
                </ul>
        </ol>`,
        modal5content:`<ol class="list-style-main">
            <li>DOM API: </li>
            <ul class="list-style-notmain">
                <li>Co to jest DOM</li>
                <li>Selektory DOM</li>
            </ul>
            <li>Manipulacja DOM:</li>
            <ul class="list-style-notmain">
                <li>tworzenie</li>
                <li>dodawanie</li>
                <li>usuwanie elementow</li>
            </ul>
            <li>Zmiana tresci</li>
            <li>Zmiana atrybutow</li>
            <li>Zmiana stylow</li>
            <li>Praca z klasami CSS</li>
            <li>Obsluga zdarzen: </li>
            <ul class="list-style-notmain">
                <li>addEventListener</li>
                <li>Typy zdarzen</li>
            </ul>
            <li>Event Delegation:</li>
            <ul class="list-style-notmain">
                <li>Delegowanie zdarzen</li>
                <li>Zalety</li>
                <li>Przyklady</li>
            </ul>
            <li>Custom Events</li>
            <ul class="list-style-notmain">
                <li>Tworzenie i obsluga wlasnych eventow</li>
            </ul>
        </ol>`,
        modal6content:`<ol class="list-style-main">
            <li>Kolekcje:</li>
            <ul class="list-style-notmain">
                <li>Map</li>
                <li>Set</li>
                <li>WeakMap</li>
                <li>Roznice i ich zastosowania</li>
            </ul>
            <li>Generatory i iteratory</li>
                <ul class="list-style-notmain">
                    <li>Dzialanie</li>
                    <li>Zastosowanie</li>
                    <li>Tworzenie wlasnych</li>
                </ul>
        </ol>`,
        modal7content:`<ol class="list-style-main">
            <li>Pure functions</li>
            <ul class="list-style-notmain">
                <li>Definicje</li>
                <li>Korzysci</li>
            </ul>
            <li>Immutability</li>
            <ul class="list-style-notmain">
                <li>Praca z niezmiennymi danymi</li>
                <li>Kopiowanie obiektow i tablic</li>
            </ul>
            <li>Kompozycja funkcji</li>
            <ul class="list-style-notmain">
                <li>Laczenie funkcji</li>
                <li>pipes</li>
                <li>compose</li>
            </ul>
        </ol>`,
        modal8content:`<ol class="list-style-main">
            <li>Narzedzia developerskie w przegladarce:</li>
            <ul class="list-style-notmain">
                <li>Debugger</li>
                <li>Konsola</li>
                <li>Breakpointy</li>
            </ul>
            <li>Pisanie testow jednostkowych w czystym JS</li>
            <li>Wprowadzenie do TDD (Test-Driven Development)</li>
        </ol>`,
        modal9content:`<ol class="list-style-main">
            <li>Fetch API: </li>
            <ul class="list-style-notmain">
                <li>pobieranie i wysylanie danych</li>
                <li>Promise i async/await</li>
            </ul>
            <li>LocalStorage i SessionStorage: </li>
            <ul class="list-style-notmain">
                <li>Trwale przechowywanie danych</li>
            </ul>
            <li>History API: </li>
            <ul class="list-style-notmain">
                <li>Zarzadzanie historia przegladarki i nawigacja</li>
            </ul>
            <li>Web Workers:</li>
            <ul class="list-style-notmain">
                <li>Wielowatkowosc</li>
                <li>Wykonywanie kodu w tle</li>
            </ul>
            <li>Intersection Observer:</li>
            <ul class="list-style-notmain">
                <li>Wykrywanie widocznosci elementow</li>
            </ul>
        </ol>`,
        modal10content:`<ol class="list-style-main">
            <li>Debouncing</li>
            <li>Throttling</li>
            <li>Najlepsze praktyki optymalizacji i wydajnosci</li>
        </ol>`

    },
    en:{
        headerAuthor: "Author",
        mainH2: "JavaScript in 10 Steps – No Stress, No Chaos",
        mainH5: "Learn JavaScript with Us – Step by Step",
        desc1: "From absolute basics to more advanced topics",
        desc2: "No fluff, just the essentials",
        desc3: "All completely FREE!!!",
        btnMainDescRight:"Get Started",
        btnNewsletter:"Join now",
        stage1:"Stage 1",
        stage2:"Stage 2",
        stage3:"Stage 3",
        stage4:"Stage 4",
        stage5:"Stage 5",
        stage6:"Stage 6",
        stage7:"Stage 7",
        stage8:"Stage 8",
        stage9:"Stage 9",
        stage10:"Stage 10",
        modal1title: "Stage 1: JavaScript Basics",
        modal2title: "Stage 2: Working with Objects and Arrays",
        modal3title: "Stage 3: Advanced JavaScript Concepts",
        modal4title: "Stage 4: Modules and Modern JavaScript (ES6+)",
        modal5title: "Stage 5: Working with the DOM and Events",
        modal6title: "Stage 6: Advanced Collection Operations",
        modal7title: "Stage 7: Functional Programming in JavaScript",
        modal8title: "Stage 8: Debugging and Testing",
        modal9title: "Stage 9: Working with Web APIs",
        modal10title: "Stage 10: Event Optimization and Performance",
        modal1content: `<ol class="list-style-main">
                <li>What is JavaScript and what is it used for</li>
                <li>How to include JS in a webpage</li>
                <li>Variables – differences and scope</li>
                <li>Data Types:</li>
                    <ul class="list-style-notmain">
                        <li>Primitive</li>
                        <li>Reference</li>
                    </ul>
                <li>Operators:</li>
                    <ul class="list-style-notmain">
                        <li>Arithmetic</li>
                        <li>Assignment</li>
                        <li>Comparison</li>
                        <li>Logical</li>
                        <li>Ternary</li>
                    </ul>
                <li>Conditional Statements</li>
                <li>Loops</li>
                <li>Functions:</li>
                    <ul class="list-style-notmain">
                        <li>Declarations</li>
                        <li>Expressions</li>
                        <li>Anonymous</li>
                        <li>Arrow Functions</li>
                        <li>Default Parameters</li>
                    </ul>
            </ol>`,
        modal2content: `
            <ol class="list-style-main">
                <li>Objects:</li>
                    <ul class="list-style-notmain">
                        <li>Creation</li>
                        <li>Accessing properties</li>
                        <li>Adding and deleting</li>
                        <li>Object methods</li>
                    </ul>
                <li>Arrays:</li>
                    <ul class="list-style-notmain">
                        <li>Creation</li>
                        <li>Access</li>
                        <li>Methods:</li>
                            <ul class="list-style-notnotmain">
                                <li>push</li>
                                <li>pop</li>
                                <li>shift</li>
                                <li>unshift</li>
                                <li>Iteration</li>
                                <li>forEach</li>
                            </ul>
                    </ul>
                <li>Advanced array methods:</li>
                    <ul class="list-style-notmain">
                        <li>map()</li>
                        <li>filter()</li>
                        <li>reduce()</li>
                        <li>find()</li>
                        <li>some()</li>
                        <li>every()</li>
                        <li>flat()</li>
                        <li>flatMap()</li>
                    </ul>
            </ol>`,
        modal3content: `
            <ol class="list-style-main">
                <li>Scope and Hoisting:</li>
                    <ul class="list-style-notmain">
                        <li>Global</li>
                        <li>Local</li>
                        <li>Block scope</li>
                    </ul>
                <li>Closures:</li>
                    <ul class="list-style-notmain">
                        <li>Definition</li>
                        <li>Examples</li>
                        <li>Use cases</li>
                    </ul>
                <li>this:</li>
                    <ul class="list-style-notmain">
                        <li>Execution context</li>
                        <li>Differences between regular and arrow functions</li>
                    </ul>
                <li>Prototypes and Inheritance:</li>
                    <ul class="list-style-notmain">
                        <li>Prototype chain</li>
                        <li>Creating prototypes</li>
                        <li>ES6 Classes</li>
                    </ul>
                <li>Higher-Order Functions and Callbacks:</li>
                    <ul class="list-style-notmain">
                        <li>How they work</li>
                        <li>Common pitfalls</li>
                    </ul>
                <li>Promises:</li>
                    <ul class="list-style-notmain">
                        <li>Creating promises</li>
                        <li>then</li>
                        <li>catch</li>
                        <li>finally</li>
                    </ul>
                <li>Async/Await:</li>
                    <ul class="list-style-notmain">
                        <li>Asynchronous code</li>
                        <li>Error handling in async</li>
                    </ul>
                <li>Event Loop:</li>
                    <ul class="list-style-notmain">
                        <li>Call stack</li>
                        <li>Event queue</li>
                        <li>Microtask queue</li>
                    </ul>
                <li>Error Handling: try/catch/finally</li>
                    <ul class="list-style-notmain">
                        <li>Sync vs async handling</li>
                    </ul>
                <li>Strict Mode</li>
                    <ul class="list-style-notmain">
                        <li>Benefits and impact on code</li>
                    </ul>
            </ol>
        `,
        modal4content: `
            <ol class="list-style-main">
                <li>ES6 Modules:</li>
                    <ul class="list-style-notmain">
                        <li>import</li>
                        <li>export</li>
                    </ul>
                <li>Modularity and code isolation</li>
                <li>Dynamic imports</li>
                <li>ES6+ Features:</li>
                    <ul class="list-style-notmain">
                        <li>Array and object destructuring</li>
                        <li>Spread and rest operators</li>
                        <li>Template literals</li>
                        <li>Default parameters</li>
                        <li>Optional chaining</li>
                        <li>Nullish coalescing</li>
                    </ul>
            </ol>
        `,
        modal5content: `
            <ol class="list-style-main">
                <li>DOM API:</li>
                <ul class="list-style-notmain">
                    <li>What is the DOM</li>
                    <li>DOM selectors</li>
                </ul>
                <li>DOM Manipulation:</li>
                <ul class="list-style-notmain">
                    <li>Creating elements</li>
                    <li>Appending elements</li>
                    <li>Removing elements</li>
                </ul>
                <li>Changing content</li>
                <li>Changing attributes</li>
                <li>Changing styles</li>
                <li>Working with CSS classes</li>
                <li>Event Handling:</li>
                <ul class="list-style-notmain">
                    <li>addEventListener</li>
                    <li>Event types</li>
                </ul>
                <li>Event Delegation:</li>
                <ul class="list-style-notmain">
                    <li>Delegating events</li>
                    <li>Advantages</li>
                    <li>Examples</li>
                </ul>
                <li>Custom Events</li>
                <ul class="list-style-notmain">
                    <li>Creating and handling custom events</li>
                </ul>
            </ol>
        `,
        modal6content: `
            <ol class="list-style-main">
                <li>Collections:</li>
                <ul class="list-style-notmain">
                    <li>Map</li>
                    <li>Set</li>
                    <li>WeakMap</li>
                    <li>Differences and use cases</li>
                </ul>
                <li>Generators and Iterators:</li>
                <ul class="list-style-notmain">
                    <li>How they work</li>
                    <li>Use cases</li>
                    <li>Creating your own</li>
                </ul>
            </ol>
        `,
        modal7content: `
            <ol class="list-style-main">
                <li>Pure Functions</li>
                <ul class="list-style-notmain">
                    <li>Definition</li>
                    <li>Benefits</li>
                </ul>
                <li>Immutability</li>
                <ul class="list-style-notmain">
                    <li>Working with immutable data</li>
                    <li>Copying objects and arrays</li>
                </ul>
                <li>Function Composition</li>
                <ul class="list-style-notmain">
                    <li>Combining functions</li>
                    <li>pipes</li>
                    <li>compose</li>
                </ul>
            </ol>`,
        modal8content: `
            <ol class="list-style-main">
                <li>Browser Developer Tools</li>
                <ul class="list-style-notmain">
                    <li>Debugger</li>
                    <li>Console</li>
                    <li>Breakpoints</li>
                </ul>
                <li>Writing Unit Tests in Vanilla JS</li>
                <li>Introduction to TDD (Test-Driven Development)</li>
            </ol>
        `,
        modal9content: `
            <ol class="list-style-main">
                <li>Fetch API:</li>
                <ul class="list-style-notmain">
                    <li>Fetching and sending data</li>
                    <li>Promise and async/await</li>
                </ul>
                <li>LocalStorage and SessionStorage:</li>
                <ul class="list-style-notmain">
                    <li>Persistent data storage</li>
                </ul>
                <li>History API:</li>
                <ul class="list-style-notmain">
                    <li>Managing browser history and navigation</li>
                </ul>
                <li>Web Workers:</li>
                <ul class="list-style-notmain">
                    <li>Multithreading</li>
                    <li>Running code in the background</li>
                </ul>
                <li>Intersection Observer:</li>
                <ul class="list-style-notmain">
                    <li>Detecting element visibility</li>
                </ul>
            </ol>
        `,
        modal10content: `
            <ol class="list-style-main">
                <li>Debouncing</li>
                <li>Throttling</li>
                <li>Best practices for optimization and performance</li>
            </ol>
        `
    }
}
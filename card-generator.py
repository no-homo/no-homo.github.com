import random

def get_card(name, desc):
    return f"""<div class="card">
            <p class="description">{desc}</p>
            <input class="guess" placeholder="name" onkeydown="guess(this)" data-name="{name}">
        </div>"""

li = """Daria
Olligarchin

Sophia
"Es ist nicht Sexismus wenn es die Wahrheit ist"

Joseph
"Ich find Caro schön"

Hanna
Autismus

Viola
"Lasst ein Kooommie da"

Lia
🐴

Kaja
Dieb

Caro
Auf Skiwoche gegen eine Wand gefahren, 4 Jahre später auf Maturareise mit dem Rad nochmal 

Gigi
☀️

David
🍄

Maria
"aim higher!" 

Marie
Ich hab ein richtig hartes Leben :(

David
🧔🏼🍺

Lara
Kylie Jenner

Livia
hoch verschuldet

Isa
Der Alkoholiker der Gruppe

Timna
eine Schlange mit 'ner Schlange

Theresa
Der sportliche Nerd

Tobias
Megaspast

Cezanne
Datet nur gleichnamige Typen

Robert
Fährt alle an die Wand"""

cards = ""

li = li.split("\n\n") 
random.shuffle(li)

for c in li:
    c = c.split("\n")
    cards += get_card(c[0], c[1])

print(cards)
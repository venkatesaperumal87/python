import random
print(""" _                                             
| |                                            
| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  
| '_ \ / _` | '_ \ / _` | '_ ` _ \ / _` | '_ \ 
| | | | (_| | | | | (_| | | | | | | (_| | | | |
|_| |_|\__,_|_| |_|\__, |_| |_| |_|\__,_|_| |_|
                    __/ |                      
                   |___/   """)
words=["venkatesaperumal","kavi","sanjai","tamil"]
choosen_word=random.choice(words)
d=list(choosen_word)
display=[]
stage=['''
  +---+
  |   |
      |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========''']
for _ in range(len(choosen_word)):
    display+="_"
print(display)
lost=0
while d!=display:
    guess=input("guess the letter:")
    if guess in choosen_word:
        for position in range(len(choosen_word)):
            letter=choosen_word[position]
            if letter==guess:
                display[position]=letter
                print(display)
    else:
        print(stage[lost])
        lost+=1
        if lost==6:
            print("Game over")
            break
if (d==display):
    print("you win")


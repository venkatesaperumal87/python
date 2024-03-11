letter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
f=[]
def encrypt(text,shift):
    for x in text:
        s=letter.index(x)
        n=shift+s
        if n<=25:
            print(letter[n],end='')
        else:
            n=n-26
            print(letter[n],end='')
def decode(text_1,shift_2):
    for y in text:
        e=letter.index(y)
        b=e-shift
        print(letter[b],end="")
    
game="yes"
while game =="yes":
    word=input("what you want encode or decode:\n")
    if word=="encode":
        text=input("enter the word want to encode:\n")
        shift=int(input("no of shift:\n"))
        encrypt(text,shift)
    
    elif word=="decode":
        text=input("encoded word to decode:\n")
        shift=int(input("no of shift:\n"))
        decode(text_1=text,shift_2=shift)
    else:
        print("bye")
    game=input("\nyou want to play again?yes or no:\n")
    if game=="no":
        break

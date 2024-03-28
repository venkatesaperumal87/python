import random
r={'Stone':'''  
    _______
---'   ____)  
      (_____)  
      (_____)  
      (____)
---.__(___)  
'''
,
'Paper':'''  
    _______
---'   ____)____  
          ______)  
          _______)  
         _______)
---.__________)  
'''
,
'Scissors':'''  
    _______
---'   ____)____  
          ______)  
       __________)  
      (____)
---.__(___)  
'''  }

def game(com,ur_choice):
    if(com==ur_choice):
        print(r[ur_choice])
        print(f"Computer choice is {com}")
        print(r[com])
        print("Draw")
    elif (com=='Stone'and ur_choice=='Paper') or (com=='Paper'and ur_choice=='Scissors') or (com=='Scissors' and ur_choice=='Stone') :
        print(r[ur_choice])
        print(f"Computer choice is {com}")
        print(r[com])
        print("You Win")
    else:
        print(r[ur_choice])
        print(f"Computer choice is {com}")
        print(r[com])
        print("You Loss")
           
    
l=['Stone','Paper','Scissors']
again='yes'
while again=='yes':
    com=random.choice(l)
    ur_choice=input("Enter your choice---Stone?Paper?Scissors?:")
    game(com,ur_choice)
    again=input("if you want play again:'yes' or 'no':")
else:
    print('Bye....(^_^)')
    

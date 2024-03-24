import random
cards=[11,2,3,4,5,6,7,8,9,10,10,10,10]
YourCards=[]
com=[]
Sum=0
sum_1=0
s='yes'
def result(Sum,sum_1):
    if(Sum>21 and sum_1<=21):
        if 11 in YourCards:
            Sum=Sum-10
            if Sum>sum_1:
                print("You Win")
        else:
            print("you lose")
    else:
        if Sum==sum_1:
            print('Draw')
        elif Sum<21 and sum_1>21:
            print("Win")
        elif Sum>sum_1:
            print("You Win")
        else:
            print("you lose")
    

for i in range(2):
    r=random.choice(cards)
    s=random.choice(cards)
    YourCards.append(r)
    Sum=Sum+r
com.append(s)
sum_1=sum_1+s
def suma():
    print(f"Your Cards: {YourCards}, current score: {Sum} ")
    print(f"Computer's first card: {com}")
suma()
again=input("Type 'y' to get another card, type 'n' to pass:")
if again=="y":
    r=random.choice(cards)
    s=random.choice(cards)
    YourCards.append(r)
    Sum=Sum+r
    suma()
    com.append(s)
    sum_1=sum_1+s
    print(f"your final hand: {YourCards}, final score: {Sum}")
    print(f"Computer's final hand: {com}, final score:{sum_1}")
    result(Sum=Sum,sum_1=sum_1)
elif again=='n':
    s=random.choice(cards)
    com.append(s)
    sum_1=sum_1+s
    print(f"your final hand: {YourCards}, final score: {Sum}")
    print(f"Computer's final hand: {com}, final score:{sum_1}")
    result(Sum=Sum,sum_1=sum_1)
else:
    pass

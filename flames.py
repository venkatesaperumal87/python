import random
print("FLAMES")
game="yes"
while game=="yes":
    name1=input("enter your name:")
    name2=input("enter your girlfriend name:")
    l1=[]
    l2=[]
    l3=[]
    for name in name1:
        l1.append(name)
    
    for nam in name2:
        l2.append(nam)
 
    for n in l1:
        if n in l2:
          l1.remove(n)
          l2.remove(n)
        else:
            continue
    for n in l2:
        if n in l1:
          l1.remove(n)
          l2.remove(n)
        else:
            continue

    lenth=len(l1)
    length=len(l2)
    total=lenth+length
    f=[3,5,14,16,18]
    l=[10,19]
    a=[8,12,13,17]
    m=[6,11,15]
    e=[2,4,7,9,20]
    s=[1]
    choice=["Friend","Love","Affection","Enemy","Sister"]

    if total in f:
        print("Friend")
    elif total in l:
        print("Love")
    elif total in a:
        print("Affection")
    elif total in m:
        print("Marriage")
    elif total in e:
        print("Enemy")
    elif total in s:
        print("Sister")
    else:
        print(random.choice(choice))
    game=input("you want to play again? type 'yes' or 'no'")

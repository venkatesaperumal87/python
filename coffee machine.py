resource = {
    "milk": 200,
    "water": 300,
    "coffee": 100,
    "money": 0,
}
coffee = {
    "latte": {
        "milk": 100,
        "water": 200,
        "coffee": 24,
        "money": 2.50
    },
    "cappuccino": {
        "milk": 150,
        "water": 100,
        "coffee": 24,
        "money": 3
    },
    "espresso": {
        "milk": 0,
        "water": 50,
        "coffee": 18,
        "money": 1.5
    }

}
l=["milk","water","coffee","money"]
def money():
    q=float(input("how many quarters?"))
    d=float(input("how many dimes?"))
    n=float(input("how many nickles?"))
    p=float(input("how many pennies?"))
    total= (q*0.25)+(d*0.1)+(n*0.05)+(p*0.01)
    return total
a=True
while a==True:
    s = input("What would you like? (cappuccino,espresso,latte):")
    if s=="report":
        for i in resource:
            print(i,":",resource[i])
    else:
         si=''
         if resource["milk"]>=coffee[s]['milk'] and resource["coffee"]>=coffee[s]['coffee'] and resource["water"]>=coffee[s]['water']:
            price=money()
            d = float(coffee[s]['money'])
            b = round(price - d,3)

            if price>= coffee[s]['money']:
                print("Take and enjoy your Cappuccino and Ur balance amount is ",b)
                for j in l:
                    resource[j]-=coffee[s][j]
            else:
                print("Sorry,you not have sufficient money ")
         else:
             for j in l:
                 if resource[j] >= coffee[s][j]:
                     continue
                 else:
                    print(f"Not {j} enough resource")
                    break
             break
         again=input("you want to order again? yes/no  ")
         if again=='yes':
             a=True
         else:
             break



from menu import Menu, MenuItem
from coffee_maker import CoffeeMaker
from money_machine import MoneyMachine
resource=CoffeeMaker()
menu=Menu()
money_machine=MoneyMachine()
s=True
while s:
    choice=input(f"what you want?({menu.get_items()}):")
    if choice=="report":
        resource.report()
        money_machine.report()
    elif choice=="off":
        s=False
    else:
        drink=menu.find_drink(choice)
        cost=drink.cost
        a=resource.is_resource_sufficient(drink)
        if a:
            money_machine.make_payment(cost)
            resource.make_coffee(drink)
from turtle import Turtle,  Screen
import random
import hirst
c=["red","blue","green","black","yellow","pink","violet","brown","sky blue"]
vp=Turtle()

for i in range(10):
    vp.setposition(0, 40*i)
    for _ in range(10):
        l = random.choice(c)
        vp.dot(15,l)
        vp.penup()
        vp.forward(40)



screen=Screen()
screen.exitonclick()
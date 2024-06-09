import colorgram
a=colorgram.extract("images.jpg",7)
for _ in range(len(a)):
    print(a[_].rgb)
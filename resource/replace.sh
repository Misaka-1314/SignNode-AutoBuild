#!/bin/bash

sed -i 's/set_address = address/set_address = os.getenv("HAPPY", address)/' main.py
sed -i 's/sign_data\["address"\] = address/sign_data\["address"\] = os.getenv("HAPPY", address)/' main.py
sed -i 's/sign_data\["address"\] = user_list\[uid\]\["address"\]/sign_data\["address"\] = os.getenv\("HAPPY", user_list\[uid\]\["address"\]\)/' main.py
sed -i 's/str(user_list\[uid\]\["address"\])/os.getenv("HAPPY", &)/g' main.py
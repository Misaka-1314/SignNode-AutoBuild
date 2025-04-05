#!/bin/bash

sed -i 's/set_address = address/set_address = os.getenv("HAPPY", address)/' main.py
sed -i 's/sign_data\["address"\] = address/sign_data\["address"\] = os.getenv("HAPPY", address)/' main.py
sed -i 's/sign_data\["address"\] = user_list\[uid\]\["address"\]/sign_data\["address"\] = os.getenv\("HAPPY", user_list\[uid\]\["address"\]\)/' main.py
sed -i 's/str(user_list\[uid\]\["address"\])/os.getenv("HAPPY", &)/g' main.py
sed -i 's|https://cx-static.waadri.top/image/gh_3c371f2be720_1280.jpg|https://cdn.micono.eu.org/image/小程序码/扫码签到.png|g' main.py

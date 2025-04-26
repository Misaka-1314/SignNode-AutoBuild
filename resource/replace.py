REPLACES = {
    'sign_location_info["address"]': 'os.getenv("HAPPY", sign_location_info["address"])',
    'USER_LIST[uid]["address"]': 'os.getenv("HAPPY", USER_LIST[uid]["address"])',
    'USER_LIST[uid]["objectId"]': 'os.getenv("PHOTO", USER_LIST[uid]["objectId"])',
    "https://cx-static.waadri.top/image/gh_3c371f2be720_1280.jpg": "https://cdn.micono.eu.org/image/小程序码/扫码签到.png",
}


with open("./main.py", "r") as f:
    code = f.read()

for key, value in REPLACES.items():
    code = code.replace(key, value)


with open("./main.py", "w") as f:
    f.write(code)

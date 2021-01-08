import os
import time
import json

config = open('config.json')
confData = json.load(config)

curl = 'curl https://bekasi.siap-ppdb.com/seleksi/reguler/smp/1-22020013-0.json --output ' + os.path.join(confData['JSON_PATH'], confData['OUTPUT_FILE'])

if not os.path.exists(confData['JSON_PATH']):
    os.makedirs(confData['JSON_PATH'])

while True:
    time.sleep(confData['REFRESH_DATA'])
    os.system(curl)
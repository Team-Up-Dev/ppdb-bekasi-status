// import os
// import time
// import json

// dir_path = os.path.dirname(os.path.realpath(__file__))

// config = open(os.path.join(dir_path,'config.json'))
// confData = json.load(config)
// outputFile = os.path.join(dir_path, confData['JSON_PATH'], confData['OUTPUT_FILE'])

// curl = 'curl https://bekasi.siap-ppdb.com/seleksi/reguler/smp/1-22020013-0.json --output ' + outputFile

// if not os.path.exists(confData['JSON_PATH']):
//     os.makedirs(confData['JSON_PATH'])

// while True:
//     time.sleep(confData['REFRESH_DATA'])
//     os.system(curl)

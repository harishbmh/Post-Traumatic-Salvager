from flask import Flask, jsonify, json
from flask import render_template
from flask import Blueprint
import atexit
from flask import request
import requests
from cloudant.client import Cloudant
import re
#app.register_blueprint(simple_page)
app = Flask(__name__)




@app.route("/index.html")
def index():
    return render_template('index.html')

@app.route("/header.html")
def leftpane():
    return render_template('header.html')


@app.route("/home.html")
def rightpane1():
    return render_template('home.html')

client = Cloudant.iam(
          "9d6fe610-119d-4f6c-a065-a96144b35eb4-bluemix",
          "EDXD3cFKy97_PlI9-fY1QG9AHtILCdt7Uxf1frhEm-1k",
          connect=True
          )



@app.route('/records', methods=['GET', 'POST'])

def getCloudantDATA():
    x=str(request.args)
    print x
    matches=re.findall(r'\'(.+?)\'',x)
    print matches
    Table=str(matches[1])
    id=matches[3]
    callforcode=client['callforcode']
    all_documents=[ ]
    for document in callforcode:
       if document['table']==Table:
            if document['Unique_Id']==id:
               all_documents.append(document)
    return jsonify(all_documents)

@atexit.register
def shutdown():
   client.disconnect()
 

if __name__ == '__main__':
  app.debug = True

  app.run(host='9.199.148.63',port=5000) 

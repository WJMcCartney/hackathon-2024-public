from flask import Flask, send_from_directory, request, Response
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler
import json
import sys

app = Flask(__name__, static_url_path='', static_folder='../../build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

api.add_resource(HelloApiHandler, '/flask/hello')
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#get all users
@api.route('/user', methods=['GET']) 
def get_users():
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))
    return jsonify(all_users), 200


#falta arreglar la validacion ------------>>>>> POST
@api.route('/user', methods=['POST'])
def create_user():
    #request_body_user = request.get_json()
    name = request.json.get("name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    #Validaciones
    #if request_body_user is None:
     #   return jsonify({"msg": "Debe ingresar datos"}), 400
    print(email)
    # test es igual a texto en el input ---
    if name != "test" :
        return jsonify({"msg": "Debe ingresar nombre"}), 400
    print(name)    

    if email == None : 
        return jsonify({"msg": "Debe ingresar email"}), 400 
    print(email)

    if password != "test" :
        return jsonify({"msg": "Debe ingresar password"}), 400
    print(password)  

    user = User.query.filter_by(email=email).first() 
    print(email)
    if user:
        return jsonify({"msg": "Usuario ya existe"}), 401
    else: 
        user = User(name=name, email=email, password=password) 
        db.session.add(user)
        db.session.commit() 
        return jsonify({"msg": "Usuario registrado exitosamente"}), 200            
      
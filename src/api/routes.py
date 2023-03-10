"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Planet, Favorites, People
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import json
api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user=User.query.filter_by(email=email).first()
    if user is None: 
        return jsonify({"msg":"No existe el usuario"})
    if email != user.email or password != user.password:
        return jsonify({"msg": "Usuario o contrasena incorrecta"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token)

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

@api.route('/registro', methods=['POST'])
def addUser():
    body = json.loads(request.data)

    queryNewUser = User.query.filter_by(email=body["email"]).first()
    
    if queryNewUser is None:
        new_user = User(
        email=body["email"], 
        password=body["password"], 
        is_active=body["is_active"])
        
        db.session.add(new_user)
        db.session.commit()
        
        response_body = {
            "msg": "Nuevo usuario creado" 
        }
        return jsonify(new_user.serialize()), 200
    
    response_body = {"msg": "Usuario ya creado"}
    return jsonify(response_body), 400


@api.route('/admin/user', methods=['GET'])
def admin_con_user():
    user = User.query.all()
    list_user = list(map(lambda usuario : usuario.serialize(), user))
    print(list_user)
    response_body = {
        "msg": "Hello, this is your GET /user response ",
        "list_user":list_user
    }

    return jsonify(response_body), 200

#[GET]/user

@api.route('/admin/user/<int:user_id>',methods=['GET'])
def get_usuario(user_id):
    usuario = User.query.filter_by(id=user_id).first()
 #   print(usuario.serialize())
    if usuario is None: 
        response_body = {"msg": "No hay Usuario"}
        return response_body, 404
    return jsonify(usuario.serialize()), 200

#[GET]/user/favorites


@api.route('/favorites',methods=['GET'])
@jwt_required()
def get_favorites_user():
    current_user = get_jwt_identity()
    favorites_user = Favorites.query.filter_by(user_id=current_user).all()
    print(list(favorites_user))
    lis_fav=list(map(lambda favorito:favorito.serialize(), favorites_user))

    return jsonify(lis_fav), 200

#Favoritos 

@api.route('/favorites/<int:favorites_id>', methods=['GET'])
def get_favorito(favorites_id):
   favorito = Favorites.query.filter_by(id=favorites_id).first()
   #print(favorito.serialize())
  
  # if favorito is None:
  #  response_body = {"msg": "No hay favoritos"}
  #  return jsonify(response_body), 404
    
   return jsonify(favorito.serialize()), 200

#[POST] /favorite/planet/<int:planet_id>

@api.route('/favorites_planet/<int:planet_id>/<int:user_id>',methods=['POST'])
def add_favorites_planet(planet_id,user_id):
    planet_query = Planet.query.get(planet_id)
    favorites_planet = Favorites(user_id=int(user_id), planet_id=int(planet_id))
    db.session.add(favorites_planet)
    db.session.commit()
    response_body = {"msg": "Planeta agregado a favoritos correctamente"}
    
    return jsonify(response_body), 200

#[POST] /favorite/people/<int:people_id>

@api.route('/favorites_people/<int:people_id>/<int:user_id>',methods=['POST'])
def add_favorites_people(people_id,user_id):
    people_query = People.query.get(people_id)
    favorites_people = Favorites(user_id=int(user_id), people_id=int(people_id))
    db.session.add(favorites_people)
    db.session.commit()
    response_body = {"msg": "Persona agregado a favoritos correctamente"}
    
    return jsonify(response_body), 200

# this only runs if `$ python src/app.py` is executed

#[GET] /people

@api.route('/people', methods=['GET'])
def get_people():
    people = People.query.all()
    list_people = list(map(lambda person : person.serialize(), people))
    print(list_people)
    response_body = {
        "msg": "Hello from people",
        "list_people":list_people
    }

    return jsonify(response_body), 200

#[GET] /people/<int:people_id>

@api.route('/people/<int:people_id>',methods=['GET'])
def get_person(people_id):
    person = People.query.filter_by(id=people_id).first()
    print(person.serialize())
  

    return jsonify(person.serialize()), 200

#[GET] /planets

@api.route('/planet', methods=['GET'])
def get_planet():
    planet = Planet.query.all()
    list_planet = list(map(lambda planeta : planeta.serialize(), planet))
    print(list_planet)
    response_body = {
        "msg": "Hello from people",
        "list_planet":list_planet
    }

    return jsonify(response_body), 200

# [GET] /planets/<int:planet_id>

@api.route('/planet/<int:planet_id>',methods=['GET'])
def get_planeta(planet_id):
    planeta = Planet.query.filter_by(id=planet_id).first()
    print(planeta.serialize())
  

    return jsonify(planeta.serialize()), 200
  
# [DELETE] /favorite/planet/<int:planet_id>


@api.route('/favorites_planet/<int:planet_id>/<int:user_id>',methods=['DELETE'])
def remove_favorites_planet(planet_id,user_id):
    #planet_query = Planet.query.delete(planet_id)
    favorites_planet = Favorites(user_id=int(user_id), planet_id=int(planet_id))
    db.session.delete(favorites_planet)
#  db.session.delete()
    response_body = {"msg": "Planeta borrado a favoritos correctamente"}
    
    return jsonify(response_body), 200



# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)

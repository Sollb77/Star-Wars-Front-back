"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap

#from utils import APIException, generate_sitemap
from admin import setup_admin
from models import db, User, People, Planet, Favorites

from api.models import db, User
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands

#from admin import setup_admin
#from models import db, User

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager



app = Flask(__name__)
app.url_map.strict_slashes = False


#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response


@app.route("/login", methods=["POST"])
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

@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200




@app.route('/admin/user', methods=['GET'])
def handle_hello():
    user = User.query.all()
    list_user = list(map(lambda usuario : usuario.serialize(), user))
    print(list_user)
    response_body = {
        "msg": "Hello, this is your GET /user response ",
        "list_user":list_user
    }

    return jsonify(response_body), 200

#[GET]/user

@app.route('/admin/user/<int:user_id>',methods=['GET'])
def get_usuario(user_id):
    usuario = User.query.filter_by(id=user_id).first()
 #   print(usuario.serialize())
    if usuario is None: 
        response_body = {"msg": "No hay Usuario"}
        return response_body, 404
    return jsonify(usuario.serialize()), 200

#[GET]/user/favorites


@app.route('/user/<int:user_id>/favorites',methods=['GET'])
def get_favorites_user(user_id):
    favorites_user = favorites.query.filter_by(user_id=user_id).all()
    print(favorites_user.serialize())
  

    return jsonify(favorites_user.serialize()), 200

#Favoritos 

@app.route('/favorites/<int:favorites_id>', methods=['GET'])
def get_favorito(favorites_id):
   favorito = Favorites.query.filter_by(id=favorites_id).first()
   #print(favorito.serialize())
  
  # if favorito is None:
  #  response_body = {"msg": "No hay favoritos"}
  #  return jsonify(response_body), 404
    
   return jsonify(favorito.serialize()), 200

#[POST] /favorite/planet/<int:planet_id>

@app.route('/favorites_planet/<int:planet_id>/<int:user_id>',methods=['POST'])
def add_favorites_planet(planet_id,user_id):
    planet_query = Planet.query.get(planet_id)
    favorites_planet = Favorites(user_id=int(user_id), planet_id=int(planet_id))
    db.session.add(favorites_planet)
    db.session.commit()
    response_body = {"msg": "Planeta agregado a favoritos correctamente"}
    
    return jsonify(response_body), 200

#[POST] /favorite/people/<int:people_id>

@app.route('/favorites_people/<int:people_id>/<int:user_id>',methods=['POST'])
def add_favorites_people(people_id,user_id):
    people_query = People.query.get(people_id)
    favorites_people = Favorites(user_id=int(user_id), people_id=int(people_id))
    db.session.add(favorites_people)
    db.session.commit()
    response_body = {"msg": "Persona agregado a favoritos correctamente"}
    
    return jsonify(response_body), 200

# this only runs if `$ python src/app.py` is executed

#[GET] /people

@app.route('/people', methods=['GET'])
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

@app.route('/people/<int:people_id>',methods=['GET'])
def get_person(people_id):
    person = People.query.filter_by(id=people_id).first()
    print(person.serialize())
  

    return jsonify(person.serialize()), 200

#[GET] /planets

@app.route('/planet', methods=['GET'])
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

@app.route('/planet/<int:planet_id>',methods=['GET'])
def get_planeta(planet_id):
    planeta = Planet.query.filter_by(id=planet_id).first()
    print(planeta.serialize())
  

    return jsonify(planeta.serialize()), 200
  
# [DELETE] /favorite/planet/<int:planet_id>


@app.route('/favorites_planet/<int:planet_id>/<int:user_id>',methods=['DELETE'])
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

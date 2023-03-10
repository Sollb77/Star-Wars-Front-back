from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    favorites = db.relationship('Favorites', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active": self.is_active,

            # do not serialize the password, its a security breach
        }

#class Registro(db.Model):
#    id = db.Column(db.Integer, primary_key=True)
#    email = db.relationship('email', backref='user', lazy=True)
#    password = db.relationship('password', backref='user', lazy=True)
   

#    def __repr__(self):
#        return f'<Registro {self.email}>'

#    def serialize(self):
#        return {
#            "id": self.id,
#            "email": self.email,
           

            # do not serialize the password, its a security breach
#        }

class People(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    url = db.Column(db.String(250), unique=True, nullable=False)
    genero = db.Column(db.String(30), nullable=True)
    color_de_pelo = db.Column(db.String(30), nullable=True)
    peso = db.Column(db.String(30), nullable=True)
    birth_year = db.Column(db.String(100), nullable=True)
    height = db.Column(db.String(100), nullable=True)
    skin_color = db.Column(db.String(100), nullable=True)
    eye_color = db.Column(db.String(100), nullable=True)
    favorites = db.relationship('Favorites', backref='people', lazy=True)

    def __repr__(self):
        return '<People %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "url": self.url,
            "genero": self.genero,
            "color_de_pelo": self.color_de_pelo,
            "peso": self.peso,
            "birth_year": self.birth_year,
            "height": self.height,
            "skin_color": self.skin_color,
            "eye_color": self.eye_color,


            # do not serialize the password, its a security breach
        }

class Planet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    url = db.Column(db.String(250), unique=True, nullable=False)
    climate = db.Column(db.String(100), nullable=True)
    diameter = db.Column(db.String(100), nullable=True)
    population = db.Column(db.String(100), nullable=True)
    gravity = db.Column(db.String(100), nullable=True)
    terrain = db.Column(db.String(100), nullable=True)

    favorites = db.relationship('Favorites', backref='planet', lazy=True)

    def __repr__(self):
        return '<Planet %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "url": self.url,
            "climate": self.climate,
            "diameter": self.diameter,
            "population": self.population,
            "gravity": self.gravity,
            "terrain": self.terrain,

            # do not serialize the password, its a security breach
        }

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    people_id = db.Column(db.Integer, db.ForeignKey("people.id"), nullable=True)
    planet_id = db.Column(db.Integer, db.ForeignKey("planet.id"), nullable=True)

    def __repr__(self):
        return '<Favorites %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "people_id": self.people_id,
            "planet_id": self.planet_id,
            
            # do not serialize the password, its a security breach
        }

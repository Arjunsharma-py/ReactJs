from flask import Flask, request, jsonify
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash


app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017/')
db = client['login']
users_collection = db['users']


@app.route('/signup', methods=['POST'])
def signup():
    user_data = request.get_json()

    required_fields = ['username', 'email', 'password']
    
    if not all(field in user_data for field in required_fields):
        return jsonify({'error': 'Missing required fields'}), 400

    existing_user = users_collection.find_one({'email': user_data['email']})

    if existing_user:
        return jsonify({'error': 'Username or email already exists'}), 409

    # Hash the password before storing it
    user_data['password'] = generate_password_hash(user_data['password'])

    result = users_collection.insert_one(user_data)

    if result.inserted_id:
        return jsonify({'message': 'User created successfully', 'user_id': str(result.inserted_id)}), 201
    else:
        return jsonify({'error': 'Failed to create user'}), 500
    


@app.route('/login', methods=['POST'])
def login():
    login_data = request.get_json()

    if 'email' not in login_data or 'password' not in login_data:
        return jsonify({'error': 'Missing email address or password'}), 400

    emailAddress = users_collection.find_one({'email': login_data['email']})

    if emailAddress and check_password_hash(emailAddress['password'], login_data['password']):
        return jsonify({'message': 'Login successful', 'user_id': str(emailAddress['_id'])}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401


if __name__ == '__main__':
    app.run(debug=True)

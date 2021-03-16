from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/get', methods=['GET'])
def login():
    return jsonify({'elem': 5})

if __name__ == '__main__':
    app.run(debug=True)

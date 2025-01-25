from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/feed")
def feed():
    return render_template("feed.html")

@app.route("/food")
def food():
    return render_template("food.html")

@app.route("/insert")
def insert():
    return render_template("insert.html")

@app.route('/item.html')
def item():
    food = request.args.get('food')
    return render_template('item.html', food=food)

if __name__ == "__main__":
    app.run(debug=True)
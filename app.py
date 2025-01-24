from flask import Flask, render_template

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

if __name__ == "__main__":
    app.run(debug=True)
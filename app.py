from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/Feed")
def about():
    return render_template("about.html")

@app.route("/Food")
def contact():
    return render_template("food.html")

if __name__ == "__main__":
    app.run(debug=True)
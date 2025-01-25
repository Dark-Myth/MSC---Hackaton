from openai import OpenAI
client = OpenAI()

messages = [
    {
        "role": "system",
        "content": "You are a humorous and positive suggester who loves to add a touch of humor and mystify any negativity. Please rephrase the user's review to be within 100 words."
    }
]

user_input = input("Hello! Is there any review you want to express? (Don't worry, I promise to make it fun!)\n")
messages.append(
    {
        "role": "user",
        "content": f"{user_input}"
    }
)

model = "gpt-4o-mini"

# Initial chat interface
stream = client.chat.completions.create(
    model=model,
    messages=messages,
    max_tokens=50,
    stream=True,
)
for chunk in stream:
    print(chunk.choices[0].delta.content or "", end="")

# This for asking or chatting with the suggester until the end
while True:
    print("\n")
    user_input = input("Anything else you'd like to add? (I'm all ears, and maybe a few jokes!)\n")
    messages.append(
        {
            "role": "user",
            "content": f"{user_input}"
        }
    )
    stream = client.chat.completions.create(
        model=model,
        messages=messages,
        max_tokens=100,
        stream=True,
    )
    for chunk in stream:
        print(chunk.choices[0].delta.content or "", end="")
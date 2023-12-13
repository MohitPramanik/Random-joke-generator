let jokes = [`There’s a fine line between a numerator and a denominator. (…Only a fraction of people will get this clean joke.)`,

    `What do dentists call their x-rays?
Tooth pics!`,

    `Did you hear about the first restaurant to open on the moon?
It had great food, but no atmosphere.`,

    `What did one ocean say to the other ocean?
Nothing, it just waved.`,

    ` Do you want to hear a construction joke?
Sorry, I’m still working on it.`,

    `Did you hear about the fire at the circus?
It was in tents!`,

    `Why do ducks have feathers?
To cover their butt quacks!`,

    `What’s the difference between a hippo and a zippo?
One is really heavy and the other’s a little lighter.
What does a nosey pepper do?
It gets jalapeño business.`,

    `Why should you never trust stairs?
They’re always up to something.`,

    `When does a joke become a 'dad' joke?
When it becomes apparent.`,

    `Why did the bullet end up losing his job?
He got fired.`,

    `What kind of shorts do clouds wear?
Thunderpants`,

    `I entered ten puns in a contest to see which would win.
No pun in ten did.`,

    `How do you measure a snake?
In inches—they don’t have feet.`]

let jokeBox = document.getElementById("jokes");

const display = () => {
    let randomJokes = jokes[Math.floor(Math.random() * jokes.length)]

    jokeBox.innerHTML = randomJokes
}

Button = document.querySelector("button").addEventListener('click', display)
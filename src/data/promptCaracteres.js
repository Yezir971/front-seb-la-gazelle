const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
const promptCaracteres = {
    charly: [
        "Cartoon illustration of a cheerful green chameleon with white markings, expressive eyes, and Afro hair. Wearing a red-and-white casual outfit with beige tones. Standing in a friendly pose, one hand raised in greeting, smiling widely. Coiled tail adds a touch of motion. Colorful and vibrant style.",
        
        "Cartoon illustration of a cheerful green chameleon with white markings, expressive eyes, and Afro hair. Wearing a red-and-white casual outfit with beige tones. Sitting on a mossy tree stump, reading an open book. Slight smile, focused gaze, and coiled tail add a touch of motion. Colorful and vibrant style"
    ],
    sebi: [
        "Kawaii cartoon illustration of a cheerful anthropomorphic gazelle with a slender body and large head. Light brown coat with white markings on face, belly, and tail tip. Kind, luminous eyes, small curved horns, and pink inner ears. Leaping joyfully in mid-air with a dynamic, playful pose.",
        
        "Kawaii cartoon illustration of a cheerful anthropomorphic gazelle with a light brown coat and white accents on her face, belly, and tail tip. She has a large head, expressive eyes, and soft pink inner ears. Seated and reading a glowing book, her calm, absorbed expression adds to the fairytale atmosphere."
    ]
}
const generatePrompt = () => {
    const charlyPose = getRandomElement(promptCaracteres.charly)
    const sebiPose = getRandomElement(promptCaracteres.sebi)
    return {
        prompt:
            `Cartoon-style illustration with soft shapes and cute characters. The scene shows a magical forest with a winding dirt road through lush greenery. In the foreground, ${charlyPose} and ${sebiPose}, each in a simple pose, are positioned thoughtfully with attention to color, light, and balance. Style: fairytale atmosphere.`
    
        }
}


export default generatePrompt
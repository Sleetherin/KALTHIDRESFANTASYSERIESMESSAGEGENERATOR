const button_function = document.getElementById("generate_button");
const message_function = document.getElementById("message");


const generateMessage = (word1, word2,word3, word4, word5,word6, word7) =>
{
    const number = Math.floor(Math.random() * 3);
    switch(number)
    {
        case 0:
          return `${word1}, ${word2}, enchantment weaves, ${word3} dance, a fantasy realm alive, secrets in shadows whisper.`;
        case 1:
          return `${word4} emerged from the shadows together with a sorceress of ${word5} powers, casting spells that wove fantasy into the fabric of reality.`;
        case 2:
          return `${word6}, captivated by a mysterious mirror, discovered a portal to realms where ${word7}.`;
    }
    
}


const generateWord1 = () =>
{
    const number = Math.floor(Math.random() * 6);

    switch(number)
    {
        case 0:
          return `Earthlit castle`;
        case 1:
          return `Moonlit skies`;
        case 2:
          return `Moonlit castle`;
        case 3:
            return `Starlit glass palace`;
        case 4:
            return `Starlit forest`;
        case 5:
            return `Earthlit forest`;        
    }
}

const generateWord2 = () =>
{
    const number = Math.floor(Math.random() * 6);

    switch(number)
    {
        case 0:
          return `silver trees`;
        case 1:
          return `ancient woods`;
        case 2:
          return `trees that make eggs`;
        case 3:
            return `doors leading underground`;
        case 4:
            return `pink-leaved trees`;
        case 5:
            return `gigantic trees`;        
    }
}

const generateWord3 = () =>
{
    const number = Math.floor(Math.random() * 3);

    switch(number)
    {
        case 0:
          return `dragons`;
        case 1:
          return `post-birds`;
        case 2:
          return `egg-fruits birds`;     
    }
}

const generateWord4 = () =>
{
    const number = Math.floor(Math.random() * 5);

    switch(number)
    {
        case 0:
          return `Hannah D'Angelo`;
        case 1:
          return `Lunaria O Feniksi`;
        case 2:
          return `Persephone O Skajperia`;
        case 3:
          return `Artemisa O Feniksi`;
        case 4:
          return `Amalthea O Feniksi`;     
             
    }
}

const generateWord5 = () =>
{
    const number = Math.floor(Math.random() * 5);

    switch(number)
    {
        case 0:
          return `lunary`;
        case 1:
          return `ghosty`;
        case 2:
          return `kalty`;
        case 3:
          return `cristaly`;
        case 4:
          return `seraphiney`;     
             
    }
}

const generateWord6 = () =>
{
    const number = Math.floor(Math.random() * 5);

    switch(number)
    {
        case 0:
          return `Emmanuel Rosseti`;
        case 1:
          return `Jak Hana`;
        case 2:
          return `Vincent Bluehouse`;
        case 3:
          return `Giuseppe Contella`;
        case 4:
          return `Giuseppe D'Angelo`;     
             
    }
}

const generateWord7 = () =>
{
    const number = Math.floor(Math.random() * 9);

    switch(number)
    {
        case 0:
          return `dragons serve coffee and wear aprons`;
        case 1:
          return `there are floating islands with waterfalls in the sky`;
        case 2:
          return `there are sirens with bat wings flying around`;
        case 3:
          return `there are trees with eggs, out of which birds are hatched.`;
        case 4:
          return `there's a talking black cat.`; 
        case 5:
          return `black flamingos deliver the post.`;
        case 6:
          return `a dragon with nine heads is drinking coffee.`;
        case 7:
          return `there is a woman inside another mirror.`;
        case 8:
          return `he is underground and the roads are lit up by green light.`;
        
    }
}

const showMessage = () => 
{
    let w1 = generateWord1();
    let w2 = generateWord2();
    let w3 = generateWord3();
    let w4 = generateWord4();
    let w5 = generateWord5();
    let w6 = generateWord6();
    let w7 = generateWord7();
    let message = generateMessage(w1,w2,w3,w4,w5,w6,w7);
    message_function.innerHTML = `<p id="message">${message}</p>` 
}


//button_function.addEventListener("click", showMessage());






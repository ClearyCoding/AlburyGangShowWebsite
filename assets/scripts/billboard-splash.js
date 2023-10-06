const subtitleSplashes = [
    'Est. 1965',
    '\"Harley here from First National Real Estate\"',
    'NOOOOOAH',
    '*Laughs Maniacally*',
    'Alexander Hamilton!',
    'You’re an actor, ACT!',
    'My Daddy\'s gonna hear about this!',
    'Don\'t forget to SMILE',
    'Petition to burn the tight pants...',
    'Dehydrated Water!',
    'Gangity Gangiest Gang Show Gang',
    'Cool & Creamy',
    'Super-Trustworthy Steve & Drew Studios',
    'OH NO! I\'ve lost my Mojo!',
    'I\'ve got a dream!',
    'For the Republic, FOR DEMOCRACY!',
    '1300655506',
    'Flying Monkeys!',
    'The Bird Is The Word',
    'Don\'t disturb the costume department!',
    'Check out the RAG!',
    'DEFINITELY not a cult...',
    'Sorry, need to edit the script again...',
    'Making kids voices hurt since \'65',
    'Birds of a Feather!',
    'This is the best... This is the best night...',
    'Encore!',
    'What were the moves to Macarena again??',
    'Wait! Why are we different cast members?',
    '\"GO TO BED\" - Drew',
    'Better than (insert show name)!',
    'Free Range Cast!',
    'Thx 2nd Albury!',
    '\"Albury Town Is Our Home!\"',
    "TWO, THREE, FOUR!",
    'You were AMAZING!',
    'alburygangshow.com.au/old',
    'Win an Oscar!.... the grouch',
    'This is a splash text, reload the page!',
    'A  Lizard forced me to add this...',
    'The Show Must Go On!',
    'Speak Louder!',
    'The better \"AGS\"'
]
rollSplash()
function rollSplash(splash) {
    if(splash === undefined) {
        document.querySelector('#pageHome-section-billboard-container-splash-text').innerText = subtitleSplashes[Math.floor(Math.random() * subtitleSplashes.length)]
    } else {
        document.querySelector('#pageHome-section-billboard-container-splash-text').innerText = subtitleSplashes[splash]
    }
}
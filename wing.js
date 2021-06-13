var html = document.getElementById('word')

function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}




selected = []

words = ['Love', 'Saying I love you','Work Culture','Girl Friend','Politics','Political Ideology',
'Gali', 'Pani Puri', 'Passion', 'IIT', 'Purpose of Life', 'Marriage', 'Relationship',
'Physical Health', 'Mental Health', 'History', 'Friends', 'Money', 'Books',
'Social Media', 'Happiness', 'Family', 'Your interest in what you do', 'Degrees',
'Crypto', 'Artificial Intelligence', 

]

html.innerHTML = 'Click the button below'

function handle() {
    let word = get_random(words)

    if (selected.includes(word)){
        handle()
    }
    else{
    selected.push(word)
    console.log(selected)
    html.innerHTML = word
    }
}
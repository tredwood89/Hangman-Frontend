Hangman React is a classic hangman game built on React JS.

Classic rules apply. Guess the word correctly before the hang-man is completed.
If you need help, select the hint option for the word definition and part of speech.
Streak Tracker: keeps track of who has the longest streak of correctly guessed words.


Can you beat the longest streak?


# HangMan #

**Classic rules apply. Guess the word correctly before the hang-man is completed.
Hint option provides word definition and part of speech.
Streak Tracker: keeps track of who has the longest streak of correctly guessed words**

 - Hangman Frontend repo:https://github.com/tredwood89/Hangman-Frontend 

 - Hangman Backend repo: https://github.com/tredwood89/Hangman-Backend


## How to Use ##

* Must have API key to access Words API. Once key is obtained:
  - create .env file with the following keys:
  - REACT_APP_HOST = [localhost url for dev]
  - REACT_APP_WORDS_HOST = [words api url]
  - REACT_APP_keycode =[words api key
  
* Fork and clone repos front and back end

  - to access words: [http://localhost:4000/api/v1/words]
  
  - to access to streak holders: [http://localhost:4000/api/v1/topscores]

* START GAME : starts Hangman game by randomly selecting a word to guess
* LETTERS : guess a letter by clicking the asscoiated letter button
* HINT : provides definition and part of speech

* If you beat the current streak you will be prompted to enter your name. *

## Technical Points ##


* **Frontend**: React. JS
* **Styled**: Semantic UI and raw CSS
* **Backend**: Ruby on Rails
* **Dictionary API**: Words API powered through Rapid API. https://rapidapi.com/wordsapi/api/WordsAPI

## Live Demo ##

https://hangmanreact2.surge.sh





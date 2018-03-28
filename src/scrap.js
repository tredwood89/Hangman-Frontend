// letter space- iterate thru word make a dash for each lett

let dashArr = []
for (let i = 0; i < wordArr.length; i++) {
      dashArr.push( <div key={uuid()}className="dash">A</div>)
  }
  return dashArr


gamecontainer function

  // changeDashToLetter = (letter) => {
  //   let letterNodes = document.querySelectorAll(`#${letter}`)
  //     for (let i = 0 ; i < letterNodes.length ; i++) {
  //       letterNodes[i].classList.replace("dash","noDash")
  //       console.log(letterNodes[i]);
  //     }
  // }

letterSpace 
  // showDash = () => {
  //   let word = this.props.gameWord
  //   let wordArr = word.split("")
  //     // console.log(wordArr);
  //   return wordArr.map((letter)=> {
  //     return <div key={uuid()}className="dash">{letter}</div>
  //   })
  // }

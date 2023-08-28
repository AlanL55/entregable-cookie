import getRandomElementArray from "../utils/getRandomElementArray"

const BtnFortune = ({ setFortune, phrases, setNumberBg}) => {

    const handleRandomPhrase = () => {
        setFortune(getRandomElementArray(phrases))
        setNumberBg(getRandomElementArray([1, 2, 3, 4]))
    }
  return (
    <button className="button_container" onClick={handleRandomPhrase}>🥠</button>
  )
}

export default BtnFortune
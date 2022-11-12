import { useState, useEffect } from 'react'
import './App.css'
import { answer, pickRandomNameForCPU , getProbability } from './util/util'

/* Start : SpeechRecognition */
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const speech = new SpeechRecognition()
speech.continuous = false
speech.interimResults = true
speech.lang = 'tr-TR'
/* End : SpeechRecognition */

function App() {
  const [isReadyToPlay, setIsReadyToPlay] = useState<boolean>(false)
  const [whosTurn, setWhosTurn] = useState<string>('cpu')
  const [isListening, setIsListening] = useState<boolean>(false)
  const [spokenName, setSpokenName] = useState<string>('')
  const [usedNames, setUsedNames] = useState<string[]>([])
  const [answerIsTrue, setAnswerIsTrue] = useState<boolean>(false)
  const [showNamesChain, setShowNamesChain] = useState<boolean>(false)
  const [timerStart, setTimerStart] = useState<number>(8)
  
  useEffect(() => {
    const timerId = setInterval(() => countDown(), 1000)
    return () => clearInterval(timerId)
  })

  const countDown = () => {
    if (timerStart === 0) return
    else setTimerStart(timerStart - 1 )
  }

  useEffect(() => {
    if (whosTurn === 'user') {
      setIsListening(true);
      setTimerStart(8);
    } else {
      setIsListening(false);
      setTimerStart(8);
    }
  }, [whosTurn])
  

  useEffect(() => {
    handleListen()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isListening])

  const controlAnswer = (name: string, transcript: string) => {
    if (
      name[name.length - 1] === transcript[0] &&
      !usedNames?.includes(transcript)
    ) {
      return true
    } else {
      return false
    }
  }

  const startGame = () => {
    setShowNamesChain(false);
    checkNavigatorPermissions()
    const firstName = pickRandomNameForCPU()
    setSpokenName(firstName)
    setUsedNames([firstName])
    setWhosTurn('user')
    setIsListening(true)
    setTimerStart(8);
    
  }

  const checkNavigatorPermissions = () => {
    const permissionName = 'microphone' as PermissionName

    navigator.permissions.query({ name: permissionName }).then((result) => {
      if (result.state === 'granted') {
        setIsReadyToPlay(true)
      } else if (result.state === 'prompt') {
        accessMicrophone()
        setIsReadyToPlay(true)
      } else if (result.state === 'denied') {
        alert('Oyunu oynamak için lütfen mikrafona izin verin. Ve daha browser ayarlarını güncelleyin.')
        accessMicrophone()
        setIsReadyToPlay(false)
      }
      result.onchange = () => {
        console.log(result.state)
      }
    })
  }

  const accessMicrophone = () => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        window.localStream = stream
        window.localAudio.srcObject = stream
        window.localAudio.autoplay = true
      })
      .catch((err) => {
        console.error(`error: ${err}`)
      })
  }

  const handleListen = () => {
    if (isListening) {
      speech.start()
      speech.onaudioend = () => {
        console.log('audio end')
        speech.stop()
        setIsListening((prevState) => !prevState)
      }
    } else {
      speech.stop()
      speech.onend = () => {
        console.log('Stopped Microphone')
      }
    }

    speech.onstart = () => {
      setTimeout(() => {
        setAnswerIsTrue(false);
        console.log('calismaya devam ediyor.')
      }, timerStart * 1000);
    }

    speech.onspeechstart = () => {
      console.log('onspeechstart on')
    }

    speech.onresult = (event: any) => {
      let transcript = event.results[0][0].transcript.toLowerCase()

      speech.onspeechend = () => {
        speech.stop()
        let trueAnswer = controlAnswer(spokenName, transcript)
        if (trueAnswer) {
          setSpokenName(transcript)
          setAnswerIsTrue(true)
          setUsedNames([...usedNames, transcript])
          transcript = ''
        } else {
          setAnswerIsTrue(false)
        }
      }
      speech.onerror = (event: { error: any }) => {
        console.log(event.error)
      }
    }

    speech.onend = async () => {
      if (answerIsTrue) { // User answer
        setWhosTurn('cpu')
        const getProbable = getProbability() // Our util
        
        if (getProbable === true ) { // CPU answer

          const randomAnswerTime = (Math.floor(Math.random() * 6) + 1) * 1000
          setTimeout(async () => {
            const result = await answer(spokenName) // Our Util...
            setUsedNames([...usedNames, result])
            setSpokenName(result)
            callTheName(result)
            setWhosTurn('user')
          }, randomAnswerTime)

        } else if (getProbable === 'wrongAnswer') {

          alert('Kazandınız Bilgisayar yanlış cevap verdi.')
          setShowNamesChain(true)
          setIsReadyToPlay(false)
          setWhosTurn('user')
          return

        } else if (getProbable === 'timesUp') {

          setTimeout(() => {
            alert('Kazandınız Bilgisayar bir cevap bulamadı.')
            setShowNamesChain(true)
            setIsReadyToPlay(false)
            setWhosTurn('user')
            return
          }, timerStart * 1000);

        }
        
      } else {
        alert('Oyunu Kaybettiniz... Lütfen tekrar deneyin.')
        setShowNamesChain(true)
        setIsReadyToPlay(false)
        setWhosTurn('cpu')
        return
      }
    }
  }

  const callTheName = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    let voicesArray = speechSynthesis.getVoices()
    utterance.voice = voicesArray[2]
    utterance.lang = 'tr-TR'
    utterance.rate = 0.8
    utterance.pitch = 0.8
    speechSynthesis.speak(utterance)
  }

  return (
    <div className="App">
      <div className="game-wrapper">
        { showNamesChain && 
          <div className="name-chains">
            <ul>
              Kullanılmış İsimler:
              {usedNames.map((name: string, index: number) => (
                <li key={index}>{name} </li>
              ))}
            </ul>
          </div>
        }

        <div className="play-section">
          {!isReadyToPlay && (
            <button className='button button-primary button-primary-active' onClick={() => startGame()}>Başla! </button>
          )}
          {isReadyToPlay && (
            <div className="play-section">
              <h1>
                Kimde Sıra : <span style={{ color: 'red' }}>{whosTurn} </span>{' '}
              </h1>
              <div className="container">
                <div className="box">
                  <p className = { timerStart < 4 ? 'time textRed' : 'time'}>{timerStart}</p>
                  <h2>Current Name : {spokenName} </h2>

                  <div className='mics-wrapper'>
                    {isListening ? (
                      <span>⏺️ - 🎙️ Konuşmanız Bekleniyor...</span>
                    ) : (
                      <span>🛑 - 🎙️ Bilgisayar Konuşuyor...</span>
                    )}
                    { whosTurn === 'user' && (
                        <button
                        disabled={isListening}
                        onClick={() => setIsListening((prevState) => !prevState)}> Konuş </button>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default App

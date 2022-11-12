// import { useEffect } from 'react'

// import { speech } from '../util/speech'
// import { answer, getProbability } from '../util/util'
// import { useGameState } from './useGameState'

// const useSpeechToText = () => {
//   const {
//     state: { isListening, usedNames, spokenName, answerIsTrue },
//     setIsListening,
//     setIsAnswerTrue,
//     setResultTrue,
//     setResultFalse,
//     setLostGame,
//     setWinGame,
//     setCPUAnswerTrue,
//     setChangeTurn,
//   } = useGameState()

//   const accessMicrophone = () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: false, audio: true })
//       .then((stream) => {
//         window.localStream = stream
//         window.localAudio.srcObject = stream
//         window.localAudio.autoplay = true
//       })
//       .catch((err) => {
//         console.error(`you got an error: ${err}`)
//       })
//   }

//   const controlAnswer = (name: string, transcript: string) => {
//     if (
//       name[name.length - 1] === transcript[0] &&
//       !usedNames?.includes(transcript)
//     ) {
//       return true
//     } else {
//       return false
//     }
//   }

//   const handleListen = () => {
//     if (isListening) {
//       speech.start()
//       speech.onaudioend = () => {
//         console.log('audio end')
//         speech.stop()
//         setIsListening(!isListening)
//       }
//     } else {
//       speech.stop()
//       speech.onend = () => {
//         console.log('Stopped Microphone')
//       }
//     }

//     speech.onstart = () => {
//       setTimeout(() => {
//         setIsAnswerTrue(false)
//       }, 8000)
//     }

//     speech.onspeechstart = () => {
//       // silinecek
//       console.log('onspeechstart on')
//     }

//     speech.onresult = (event: any) => {
//       let transcript = event.results[0][0].transcript.toLowerCase()
//       let trueAnswer = controlAnswer(spokenName, transcript)

//       if (trueAnswer) {
//         setResultTrue(transcript, [...usedNames, transcript])
//         transcript = ''
//       } else {
//         setResultFalse()
//       }

//       speech.onerror = (event: { error: any }) => {
//         console.log(event.error)
//       }
//     }

//     speech.onspeechend = () => {
//       speech.stop()
//     }

//     speech.onend = async () => {
//       if (answerIsTrue) {
//         // User answer is true
//         setChangeTurn('cpu')
//         const getProbable = getProbability()

//         if (getProbable === true) {
//           const randomAnswerTime = (Math.floor(Math.random() * 6) + 1) * 1000
//           setTimeout(async () => {
//             const result = await answer(spokenName)
//             callTheName(result)
//             setCPUAnswerTrue(result, [...usedNames, result])
//           }, randomAnswerTime)
//         } else if (getProbable === 'wrongAnswer') {
//           alert('Kazandınız Bilgisayar yanlış cevap verdi.')
//           setWinGame()
//           return
//         } else if (getProbable === 'timesUp') {
//           setTimeout(() => {
//             alert('Kazandınız Bilgisayar bir cevap bulamadı.')
//             setWinGame()
//             return
//           }, 8000)
//         }
//       } else {
//         alert('Oyunu Kaybettiniz... Lütfen tekrar deneyin.')
//         setLostGame()
//         return
//       }
//     }
//   }

//   const callTheName = (text: string) => {
//     const utterance = new SpeechSynthesisUtterance(text)
//     let voicesArray = speechSynthesis.getVoices()
//     utterance.voice = voicesArray[2]
//     utterance.lang = 'tr-TR'
//     utterance.rate = 0.8
//     utterance.pitch = 0.8
//     speechSynthesis.speak(utterance)
//   }

//   return {
//     accessMicrophone,
//     handleListen,
//   }
// }

// export default useSpeechToText


export {}
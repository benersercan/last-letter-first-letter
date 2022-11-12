// import React from 'react'

// import { useGameState } from './useGameState'
// import useSpeechToText from './useSpeechToText'

// export const useGame = () => {
//   const { state, setTimer, startGame, setReadyToPlay } = useGameState()
//   const { handleListen } = useSpeechToText()
//   const { whosTurn, isListening, timerStart } = state

//   React.useEffect(() => {
//     const timerId = setInterval(() => countDown(), 1000)
//     return () => clearInterval(timerId)
//   })

//   const countDown = () => {
//     if (timerStart === 0) return
//     else setTimer(undefined, timerStart - 1)
//   }

//   React.useEffect(() => {
//     if (whosTurn === 'user') {
//       setTimer(true)
//     } else {
//       setTimer(false)
//     }
//   }, [whosTurn])

//   React.useEffect(() => {
//     handleListen()
//   }, [isListening])

//   return {
//     state,
//     startGame,
//     setReadyToPlay,
//   }
// }

export {}
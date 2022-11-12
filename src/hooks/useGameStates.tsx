// import { useReducer } from 'react'

// enum ActionType {
//   UPDATE = 'UPDATE',
//   CPU_ANSWER_TRUE = 'CPU_ANSWER_TRUE',
//   START_GAME = 'START_GAME',
//   SET_LISTENING = 'SET_LISTENING',
//   SET_READY_TO_PLAY = 'SET_READY_TO_PLAY',
//   SET_RESULT_TRUE = 'SET_RESULT_TRUE',
//   SET_RESULT_FALSE = 'SET_RESULT_FALSE',
//   SET_WIN_GAME = 'SET_WIN_GAME',
//   SET_LOST_GAME = 'SET_LOST_GAME',
// }

// type State = {
//   isReadyToPlay: boolean
//   whosTurn: 'cpu' | 'user'
//   isListening?: boolean
//   spokenName?: string
//   usedNames?: string[]
//   answerIsTrue: boolean
//   showNamesChain: boolean
//   timerStart: number
// }

// type Action = Partial<{ type: ActionType } & State>

// const initialState = {
//   isReadyToPlay: false,
//   whosTurn: 'cpu',
//   isListening: false,
//   spokenName: '',
//   usedNames: [],
//   answerIsTrue: false,
//   showNamesChain: false,
//   timerStart: 8,
// }

// const reducer = (state: any, action: any): any => {
//   switch (action.type) {
//     case ActionType.UPDATE:
//       return {
//         ...state,
//         ...action,
//       }
//     case ActionType.START_GAME:
//       return {
//         ...state,
//         showNamesChain: false,
//         spokenName: action.spokenName,
//         usedNames: action.usedNames,
//         whosTurn: 'user',
//         isListening: true,
//       }
//     case ActionType.SET_LISTENING:
//       return {
//         ...state,
//         isListening: action.isListening,
//       }
//     case ActionType.SET_READY_TO_PLAY:
//       return {
//         ...state,
//         isListening: action.isListening,
//       }
//     case ActionType.SET_RESULT_TRUE:
//       return {
//         ...state,
//         isListening: action.isListening,
//       }
//     case ActionType.SET_RESULT_FALSE:
//       return {
//         ...state,
//         isListening: action.isListening,
//       }
//     case ActionType.SET_WIN_GAME:
//       return {
//         ...state,
//         showNamesChain: true,
//         isReadyToPlay: false,
//         whosTurn: 'USER',
//       }
//     case ActionType.SET_LOST_GAME:
//       return {
//         ...state,
//         showNamesChain: true,
//         isReadyToPlay: false,
//         whosTurn: 'cpu',
//       }
//     case ActionType.CPU_ANSWER_TRUE:
//       return {
//         ...state,
//         usedNames: true,
//         isReadyToPlay: false,
//         whosTurn: 'cpu',
//       }
//     default:
//       return state
//   }
// }

// export const useGameState = () => {
//   const [state, dispatch] = useReducer(reducer, initialState)

//   const setIsListening = (listeningState: boolean) => {
//     dispatch({ type: ActionType.SET_LISTENING })
//   }

//   const setIsAnswerTrue = (answer: boolean) => {
//     dispatch({ type: ActionType.SET_LISTENING, isAnswerTrue: answer })
//   }

//   const setResultTrue = (_spokenName: string, _usedNames: string[]) => {
//     dispatch({
//       type: ActionType.SET_RESULT_TRUE,
//       isAnswerTrue: true,
//       usedNames: _usedNames,
//       spkenName: _spokenName,
//     })
//   }

//   const setResultFalse = () => {
//     dispatch({
//       type: ActionType.SET_RESULT_FALSE,
//       isAnswerTrue: false,
//     })
//   }

//   const startGame = (_spokenName: string) => {
//     dispatch({
//       type: ActionType.UPDATE,
//       showNamesChain: false,
//       isListening: true,
//       whosTurn: 'user',
//       spokenName: _spokenName,
//       usedNames: [_spokenName],
//       timerStart: 8,
//     })
//   }

//   const setReadyToPlay = (isReady: boolean) => {
//     dispatch({ type: ActionType.UPDATE, isReadyToPlay: isReady })
//   }

//   const setWinGame = () => {
//     dispatch({
//       type: ActionType.UPDATE,
//     })
//   }

//   const setLostGame = () => {
//     dispatch({
//       type: ActionType.UPDATE,
//     })
//   }

//   const setCPUAnswerTrue = (_spokenName: string, _usedNames: string[]) => {
//     dispatch({
//       type: ActionType.UPDATE,
//       whosTurn: 'user',
//       usedNames: _usedNames,
//       spkenName: _spokenName,
//     })
//   }

//   const setChangeTurn = (_turn: 'user' | 'cpu') => {
//     dispatch({
//       type: ActionType.UPDATE,
//       whosTurn: _turn,
//     })
//   }

//   const setTimer = (_isListening?: boolean, _timer: number = 8) => {
//     dispatch({
//       type: ActionType.UPDATE,
//       isListening:
//         _isListening === undefined ? state.isListening : _isListening,
//       timerStart: _timer,
//     })
//   }

//   return {
//     state,
//     setIsListening,
//     setIsAnswerTrue,
//     setReadyToPlay,
//     setResultTrue,
//     setResultFalse,
//     setCPUAnswerTrue,
//     setChangeTurn,
//     setLostGame,
//     setWinGame,
//     startGame,
//     setTimer,
//   }
// }


export {}
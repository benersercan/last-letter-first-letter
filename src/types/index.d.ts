export {};

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
    localStream: any;
    localAudio: any;
    window : any;
  }
}
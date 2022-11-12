# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Son harfinden kelime türetme oyunu

Merhaba, görüşmeye katıldığın için çok teşekkür ederiz. Aşağıda görüşme sonunda konuştuğumuz oyunun detaylarını bulabilirsin.

Oyun, kelimenin son harfinden yeni bir kelime türeterek oynanıyor. Kelime içeriğimizin Türkçe isimler olduğunu varsayarsak şöyle bir sequence oluşuyor;

**Hasan -> Niyazi -> İbrahim -> Mustafa -> Ahmet -> …**

Tabii ki yarışmacıların da daha önce söylenen terimleri tekrar söylemesi yasak ve belirli bir süre içinde zinciri devam ettirmesi gerekiyor. Senden de bunu JavaScript ve webkitin Speech Recognition ile Speech Synthesis Utterance özelliklerini kullanarak geliştirmeni bekliyoruz.

Mikrofon ve hoparlör sayesinde kişi bilgisayar ile bu oyunu oynayabilecek. Belirttiğimiz gibi İki tarafın da aynı kelimeleri tekrar kullanmaları yasak. Oyunun daha keyifli olabilmesi için bilgisayara da %30 (bu sayı bir config'te durabilir) oranında kelime bulamama rastgeleliği eklersen harika olur.

Tasarım burada hiç önemli değil. Sadece oynayan kullanıcının kelimeyi türeteceği son kelimenin ekranda yazması ve kaç saniye içinde zinciri devam ettirmesi gerektiğini gösteren bir timer koyman yeterli olacak.

Oyunun akışı şu şekilde olacak;

- Oyuna başla
- Mikrofon kullanımı için izin iste
- Bilgisayar için rastgele bir kelime seç ve ekranda göster (Örnek: Ahmet)
- Kullanıcının mikrofonunu dinle ve 8 saniye içinde ondan T harfi ile başlayan bir isim bekle
Kullanıcı doğru bir isim söylediyse; tekrar bilgisayarın seçtiği kelimeyi ekranda göster ve timerı başlat. (Burada istersen bilgisayara rastgele bir düşünme aralığı ayarlayabilirsin, kelime anında ekranda gözükmeyebilir.)
- Kullanıcı yanlış bir isim söylediyse; oyunu kaybettin diye göster ve zincirde kaç kelime ilerlerdiklerini göster,
- Kullanıcı daha önce söylenmiş bir isim söylediyse; oyunu kaybettin diye göster ve zincirde kaç kelime ilerlerdiklerini göster,
- Bilgisayar da %30 oranında kelime hatırlayamayabilir dolayısıyla oyuncu oyunu kazanabilir. Bu durumda oyunu kazandın diye göster ve zincirde kaç kelime ilerlerdiklerini göster.

Kullanacağın isim veritabanını repo içinde bulabilirsin.

> Cevabın hazır olduğu zaman bu repo'ya çözümü `push` edebilirsin. Böylece çözümün bize ulaşmış olacak ve biz de inceleyip sonucu seninle paylaşacağız.

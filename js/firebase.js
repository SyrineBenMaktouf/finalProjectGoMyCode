 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyA60Z59FAkhANldjFM5YiRc4k6Kfuyfzkw",
    authDomain: "gomycode-2b03f.firebaseapp.com",
    databaseURL: "https://gomycode-2b03f.firebaseio.com",
    projectId: "gomycode-2b03f",
    storageBucket: "gomycode-2b03f.appspot.com",
    messagingSenderId: "404696416357"
  };
  firebase.initializeApp(config);


  document.getElementById('contactForm').addEventListener('submit' , contact)

  function contact(e){
      e.preventDefault()

    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value
    var rating = document.getElementById('input-21e').value

    sendData(name , email , message , rating)

  document.getElementById('contactForm').reset()
    

  }

  var table = firebase.database().ref('feedbacks')

  function sendData (name , email , message , rating) {
      var feedback = table.push()

      feedback.set({
          name : name , 
          email : email , 
          message : message , 
          rating : rating
      })
  }
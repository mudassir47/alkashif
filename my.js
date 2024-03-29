
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get, update ,push ,set} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBbVekVpyDLCiTggbB0sqDhNuTSR_ykLUs",
    authDomain: "alkashif-enterprices.firebaseapp.com",
    databaseURL: "https://alkashif-enterprices-default-rtdb.firebaseio.com",
    projectId: "alkashif-enterprices",
    storageBucket: "alkashif-enterprices.appspot.com",
    messagingSenderId: "602766717795",
    appId: "1:602766717795:web:bd6ebb37d1ed8473085956",
    measurementId: "G-RXR523SQ1B"
  };

 
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    
    var web1Ref = ref(database, 'web/web1/detail');

    // Retrieve the 'amount' value
    get(web1Ref).then(function(snapshot) {
        var amountValue = snapshot.val();
        
        // Update the HTML element with the id 'amount1'
        document.getElementById('detail1').textContent =  amountValue;
    }).catch(function(error) {
        console.error('Error retrieving data:', error);
    });
   
    var web1Ref = ref(database, 'web/web2/detail');

    // Retrieve the 'amount' value
    get(web1Ref).then(function(snapshot) {
        var amountValue = snapshot.val();
        
        // Update the HTML element with the id 'amount1'
        document.getElementById('detail2').textContent =  amountValue;
    }).catch(function(error) {
        console.error('Error retrieving data:', error);
    });

    var web1Ref = ref(database, 'web/web3/detail');

    // Retrieve the 'amount' value
    get(web1Ref).then(function(snapshot) {
        var amountValue = snapshot.val();
        
        // Update the HTML element with the id 'amount1'
        document.getElementById('detail3').textContent =  amountValue;
    }).catch(function(error) {
        console.error('Error retrieving data:', error);
    });

    var web1Ref = ref(database, 'web/web3/day');

    // Retrieve the 'amount' value
    get(web1Ref).then(function(snapshot) {
        var amountValue = snapshot.val();
        
        // Update the HTML element with the id 'amount1'
        document.getElementById('day3').textContent =  amountValue;
    }).catch(function(error) {
        console.error('Error retrieving data:', error);
    });
    var web1Ref = ref(database, 'web/web2/day');

    // Retrieve the 'amount' value
    get(web1Ref).then(function(snapshot) {
        var amountValue = snapshot.val();
        
        // Update the HTML element with the id 'amount1'
        document.getElementById('day2').textContent =  amountValue;
    }).catch(function(error) {
        console.error('Error retrieving data:', error);
    });
    var web1Ref = ref(database, 'web/web1/day');

    // Retrieve the 'amount' value
    get(web1Ref).then(function(snapshot) {
        var amountValue = snapshot.val();
        
        // Update the HTML element with the id 'amount1'
        document.getElementById('day1').textContent =  amountValue;
    }).catch(function(error) {
        console.error('Error retrieving data:', error);
    });

    var web1Ref = ref(database, 'web/web3/amount');

    // Retrieve the 'amount' value
    get(web1Ref).then(function(snapshot) {
        var amountValue = snapshot.val();
        
        // Update the HTML element with the id 'amount1'
        document.getElementById('amount3').textContent = 'Rs: ' + amountValue;
    }).catch(function(error) {
        console.error('Error retrieving data:', error);
    });

    var web1Ref = ref(database, 'web/web2/amount');

    // Retrieve the 'amount' value
    get(web1Ref).then(function(snapshot) {
        var amountValue = snapshot.val();
        
        // Update the HTML element with the id 'amount1'
        document.getElementById('amount2').textContent = 'Rs: ' + amountValue;
    }).catch(function(error) {
        console.error('Error retrieving data:', error);
    });

    var web1Ref = ref(database, 'web/web1/amount');

    // Retrieve the 'amount' value
    get(web1Ref).then(function(snapshot) {
        var amountValue = snapshot.val();
        
        // Update the HTML element with the id 'amount1'
        document.getElementById('amount1').textContent = 'Rs: ' + amountValue;
    }).catch(function(error) {
        console.error('Error retrieving data:', error);
    });



    const mkaero = document.getElementById("mkaero");

mkaero.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputAddress1 = document.getElementById("inputAddress1").value;
    const inputAddress2 = document.getElementById("inputAddress2").value;
    const inputdateOne = document.getElementById("inputdateOne").value;
    
    const inputPersonOne = document.getElementById("inputPersonOne").value;  //aironumber
    const aironumber = document.getElementById("aironumber").value;
    if (
        !inputAddress1.trim() ||
        !inputAddress2.trim() ||
        !inputdateOne.trim() ||
        !inputPersonOne.trim() ||
        !aironumber.trim()
    ) {
        // Display an error message
        alert("Text should not be null. Please fill in all fields.");
        return;
    }
    const textRef = ref(database, "airo");
    const newTextRef = push(textRef);
    const uniqueKey = newTextRef.key; // Retrieve the unique key generated by push()

    set(newTextRef, {
        start: inputAddress1,
        destination: inputAddress2,
        date: inputdateOne,
        uid: "web",
        key: uniqueKey, // Add the unique key to the data
        guest: inputPersonOne,
        number: aironumber,
    })
        .then(() => {
            console.log("Text data uploaded successfully!");
        })
        .catch((error) => {
            console.error("Error uploading text data: ", error);
        });

    // Clear the input fields after submission
    document.getElementById("inputAddress1").value = "";
    document.getElementById("inputAddress2").value = "";
    document.getElementById("inputdateOne").value = "";
   
    document.getElementById("inputPersonOne").value = "";
    document.getElementById("aironumber").value = "";
});
 



// const app = initializeApp(firebaseConfig);
    // const database = getDatabase(app);
            const passdata = document.getElementById("passdata");

passdata.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullname = document.getElementById("fullname").value;
   
    const emailadress = document.getElementById("emailadress").value;
    const number = document.getElementById("number").value;
    const fulladress = document.getElementById("fulladress").value;
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;
    const passportnumber = document.getElementById("passportnumber").value;
    const pancardnumber = document.getElementById("pancardnumber").value;
    if (
        !fullname.trim() ||
        !emailadress.trim() ||
        !number.trim() ||
        !fulladress.trim() ||
        !state.trim() ||
        !city.trim() ||
        !passportnumber.trim() ||
        !pancardnumber.trim()
    ) {
        // Display an error message
        alert("Text should not be null. Please fill in all fields.");
        return;
    }
    const textRef = ref(database, "viza");
    const newTextRef = push(textRef);
    const uniqueKey = newTextRef.key; 
    set(newTextRef, {
        fullname: fullname,
       
        emailadress: emailadress,
        number: number,
        fulladress: fulladress,
        key:uniqueKey,
        state: state,
        uid:"web",
        city: city,
        passportnumber: passportnumber,
        pancardnumber: pancardnumber,
    })
        .then(() => {
            console.log("Text data uploaded successfully!");
        })
        .catch((error) => {
            console.error("Error uploading text data: ", error);
        });

    // Clear the input fields after submission
    document.getElementById("fullname").value = "";
   
    document.getElementById("emailadress").value = "";
    document.getElementById("number").value = "";
    document.getElementById("fulladress").value = "";
    document.getElementById("state").value = "";
    document.getElementById("city").value = "";
    document.getElementById("passportnumber").value = "";
    document.getElementById("pancardnumber").value = "";
});



            const mkhotel = document.getElementById("mkhotel");

mkhotel.addEventListener("submit", (e) => {
    e.preventDefault();
    const checkindate = document.getElementById("checkindate").value;
    const checkoutdate = document.getElementById("checkoutdate").value;
    const guest = document.getElementById("guest").value;
    const city = document.getElementById("mkcity").value;
    const numberofroom = document.getElementById("numberofroom").value; 
    const mnumber = document.getElementById("mkknumber").value;
    const textRef = ref(database, "hotel");
    const newTextRef = push(textRef);
    const uniqueKey = newTextRef.key; 
    set(newTextRef, {
        checkindate: checkindate,
        checkoutdate: checkoutdate,
        guest: guest,
        number:mnumber,
        uid:"web",
        key:uniqueKey,
        city: city,
        numberofroom: numberofroom,
       
    })
        .then(() => {
            console.log("Text data uploaded successfully!");
        })
        .catch((error) => {
            console.error("Error uploading text data: ", error);
        });

    // Clear the input fields after submission
    document.getElementById("checkindate").value = "";
    document.getElementById("checkoutdate").value = "";
    document.getElementById("guest").value = "";
    document.getElementById("mkcity").value = "";
    document.getElementById("numberofroom").value = "";
    document.getElementById("mkknumber").value = "";
});


            const mkinquary = document.getElementById("mkinquary");

mkinquary.addEventListener("submit", (e) => {
    e.preventDefault();
    const inqnumber = document.getElementById("inqnumber").value;
    const indetail = document.getElementById("indetail").value;
    if (!inqnumber.trim() || !indetail.trim()) {
        // Display an error message
        alert("Text should not be null. Please fill in all fields.");
        return;
    }
    const textRef = ref(database, "enquire");
    const newTextRef = push(textRef);
   
    const unniqueKey = newTextRef.key; 
    set(newTextRef, {
      key:unniqueKey,
        number: inqnumber,
        inquire:indetail,
        uid:"web",
    })
        .then(() => {
            console.log("Text data uploaded successfully!");
        })
        .catch((error) => {
            console.error("Error uploading text data: ", error);
        });

    // Clear the input fields after submission
    document.getElementById("inqnumber").value = "";
    document.getElementById("indetail").value = "";
});


// passportdata




        const passadata = document.getElementById("passadata");

passadata.addEventListener("submit", (e) => {
e.preventDefault();
const aplicationtype = document.getElementById("aplicationtype").value;
const type = document.getElementById("type").value;
const inname = document.getElementById("inname").value;
const pob = document.getElementById("pob").value;
const dob = document.getElementById("dob").value;
const ddd = document.getElementById("ddd").value;
const mstate = document.getElementById("mstate").value;
const marital = document.getElementById("marital").value;
const employtype = document.getElementById("employtype").value;
const educationQuallification = document.getElementById("educationQuallification").value;
const fathername = document.getElementById("fathername").value;
const mothername = document.getElementById("mothername").value;
const spousename = document.getElementById("spousename").value;
const policestation = document.getElementById("policestation").value;
const number1 = document.getElementById("number1").value;
const number2 = document.getElementById("number2").value;
if (!aplicationtype || !type || !inname || !pob || !dob || !ddd || !mstate || !marital || !employtype || !educationQuallification || !fathername || !mothername || !policestation || !number1) {
    // Display an error message
    alert("Add data should not be null. Please fill in all fields.");
    return;
}
const textRef = ref(database, "passport");
const newTextRef = push(textRef);
const uniqueKeys = newTextRef.key;
set(newTextRef, {
    key:uniqueKeys,
    applying: aplicationtype,
    type: type,
    name: inname,
    pob: pob,
    dob: dob,
    district: ddd,
    state: mstate,
    marital: marital,
    employtype: employtype,
    education: educationQuallification,
    father: fathername,
    mother: mothername,
    spouse: spousename,
    police: policestation,
    number1: number1,
    number2: number2,
uid:"web,"
})

    .then(() => {
        console.log("Text data uploaded successfully!");
    })
    .catch((error) => {
        console.error("Error uploading text data: ", error);
    });

// Clear the input fields after submission
document.getElementById("aplicationtype").value = "";
document.getElementById("type").value = "";
document.getElementById("inname").value = "";
document.getElementById("pob").value = "";
document.getElementById("dob").value = "";
document.getElementById("ddd").value = "";
document.getElementById("mstate").value = "";
document.getElementById("marital").value = "";
document.getElementById("employtype").value = "";
document.getElementById("educationQuallification").value = "";
document.getElementById("fathername").value = "";
document.getElementById("mothername").value = "";
document.getElementById("spousename").value = "";
document.getElementById("policestation").value = "";
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
});
const tabButtons = document.querySelectorAll('.nav-tabs button');
const backgroundImage = document.getElementById('backgroundImage');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-bs-target');
        updateBackgroundImage(tabId);
    });
});

function updateBackgroundImage(tabId) {
    backgroundImage.classList.add('slide-left'); // Add the slide-left class
    setTimeout(() => {
        switch (tabId) {
            case '#nav-inq':
                backgroundImage.style.backgroundImage = 'url(assets/img/inquary.png)';
                break;
            case '#nav-home':
                backgroundImage.style.backgroundImage = 'url(assets/img/newaero.png)';
                break;
            case '#nav-passs':
                backgroundImage.style.backgroundImage = 'url(assets/img/passport.png)';
                break;
            case '#nav-profile':
                backgroundImage.style.backgroundImage = 'url(assets/img/viza.webp)';
                break;
            case '#nav-contact':
                backgroundImage.style.backgroundImage = 'url(assets/img/hotel.webp)';
                break;
            default:
                // Default background image
                backgroundImage.style.backgroundImage = 'url(assets/img/newaero.png)';
        }
        backgroundImage.classList.remove('slide-left'); // Remove the slide-left class
    }, 500); // Match this with the transition duration
}







    function setBackgroundImage(imageUrl) {
        // Set the background image and size
        backgroundImage.style.backgroundImage = imageUrl;
        backgroundImage.style.backgroundSize = '150px'; // Set the size to 150px
    }
   
    

const pw = document.getElementById('pw');
const confirmpw = document.getElementById('confirmpw');

function checkPasswordMatch() {
    const password = pw.value;
    const confirmPassword = confirmpw.value;
  
    if (password !== confirmPassword) {
      // Les mots de passe ne correspondent pas, appliquer le style rouge
    pw.style.color = "red";
    pw.style.backgroundColor = "#f8d7da"; 
    pw.style.border="1px solid red";
    confirmpw.style.color = "red";
    confirmpw.style.backgroundColor = "#f8d7da";
    confirmpw.style.border="1px solid red";
    } else {
      // Les mots de passe correspondent, réinitialiser les styles
      pw.style.color = " #174caf";
      pw.style.backgroundColor = "rgba(92, 150, 226, 0.25)"; // Arrière-plan rouge clair
      pw.style.border="1px solid #1a3cac";
      confirmpw.style.color = " #174caf";
      confirmpw.style.backgroundColor =  "rgba(92, 150, 226, 0.25)"; 
      confirmpw.style.border="1px solid #1a3cac";  
    }
  }

pw.addEventListener("input", checkPasswordMatch);
confirmpw.addEventListener("input", checkPasswordMatch);
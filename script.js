const Input = document.getElementById('input');
const charMessage = document.getElementById('charMessage');
const maxChars = 200;

Input.addEventListener('input', function() {
  const entered = Input.value.length;
  const remaining = maxChars - entered;

  charMessage.textContent = ` Entered characters: ${entered}/ `+`Remainingcharacters: ${remaining} `;
  
  if (remaining < 0) {
    charMessage.style.color = "red";
    charMessage.textContent = `Warning:Character limit exceeded by ${Math.abs(remaining)}`;
  } else if (remaining < 15) {
    charMessage.style.color = "orange";
  } else {
    charMessage.style.color = "black";
  }
});

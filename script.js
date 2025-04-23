// Page navigation
function showSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(sec => {
      sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  // Magic button click
  document.getElementById('magicBtn').addEventListener('click', () => {
    alert("You're magical, just like Orí Essentials ✨");
  });
  
  // Accordion
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      body.style.display = body.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  // Long press Easter Egg
  let pressTimer;
  document.getElementById('magicBtn').addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
      alert("🌟 You discovered the hidden secret of radiant hair!");
    }, 1500);
  });
  
  document.getElementById('magicBtn').addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
  });
  
  // Form Validation
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pwd = document.getElementById('password').value;
    const msg = document.getElementById('formMessage');
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      msg.textContent = "Invalid email format.";
      msg.style.color = "red";
      return;
    }
  
    if (pwd.length < 8) {
      msg.textContent = "Password must be at least 8 characters.";
      msg.style.color = "red";
      return;
    }
  
    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";
  });
  
  // Keypress detection
  document.addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });

 
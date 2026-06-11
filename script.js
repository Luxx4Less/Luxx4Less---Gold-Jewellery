// Product modal functionality
document.querySelectorAll('.open-product').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const name = card.dataset.name;
    const price = card.dataset.price;
    const desc = card.dataset.desc;

    document.getElementById('modalName').textContent = name;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('productModal').hidden = false;
  });
});

// Close modal
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('productModal').hidden = true;
});

// Close modal when clicking outside
document.getElementById('productModal').addEventListener('click', (e) => {
  if (e.target.id === 'productModal') {
    document.getElementById('productModal').hidden = true;
  }
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const formMsg = document.getElementById('formMsg');

  // Basic validation
  if (!name || !email || !message) {
    formMsg.textContent = 'Please fill in all fields.';
    formMsg.style.color = '#ff6b6b';
    return;
  }

  // Simulate form submission (replace with your backend endpoint)
  formMsg.textContent = 'Sending...';
  formMsg.style.color = '#d4af37';

  setTimeout(() => {
    formMsg.textContent = 'Thank you for contacting Luxx4Less! We\'ll be in touch soon.';
    formMsg.style.color = '#51cf66';
    document.getElementById('contactForm').reset();
  }, 1000);
});

// Smooth scroll for "Sign Up" button in the dropdown
const menuLinks = document.querySelectorAll('.dropdown-content a[href^="#"]');

menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Food and anatomy dynamic content loader (if applicable in the future)
window.addEventListener('DOMContentLoaded', () => {
  const bodyPartButtons = document.querySelectorAll('.body-part');
  const infoBox = document.getElementById('info-box');

  bodyPartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const part = button.getAttribute('data-part');
      const data = {
        brain: "The brain controls the body's functions and interprets information from the outside world. It is the center of intelligence, behavior, memory, and emotion.",
        heart: "The heart pumps oxygenated blood throughout the body and plays a central role in the circulatory system.",
        lungs: "The lungs are responsible for exchanging gases — bringing in oxygen and expelling carbon dioxide.",
        stomach: "The stomach helps digest food through enzymes and acid before it's passed into the intestines.",
        liver: "The liver detoxifies chemicals, metabolizes drugs, and secretes bile that ends up back in the intestines."
      };

      infoBox.textContent = data[part] || "Click on a body part to learn more.";
    });
  });

  // Food item interactivity (optional future feature)
  const foodItems = document.querySelectorAll('.food-item');
  foodItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
});

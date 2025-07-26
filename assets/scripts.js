// Demo data for listings and users
const demoListings = [
  { title: "Sunrise PG", location: "Bangalore", rating: 4.5 },
  { title: "Green Villa", location: "Pune", rating: 4.2 },
  { title: "City Comforts", location: "Delhi", rating: 4.7 },
  { title: "Blue Nest", location: "Hyderabad", rating: 4.3 }
];
const demoPending = [
  { title: "Lakeview PG", location: "Chennai", owner: "Amit" },
  { title: "Urban Stay", location: "Mumbai", owner: "Priya" }
];
const demoProfile = {
  name: "Riya Sharma",
  role: "PG Resident",
  listings: ["Sunrise PG", "Blue Nest"],
  reviews: ["Great stay at Green Villa!", "Loved the food at City Comforts."]
};

// Dashboard: Load listings
document.addEventListener('DOMContentLoaded', () => {
  const listingsGrid = document.getElementById('listingsGrid');
  if (listingsGrid) {
    listingsGrid.innerHTML = demoListings.map(l => `
            <div class="pg-card">
                <div class="pg-title">${l.title}</div>
                <div class="pg-location">${l.location}</div>
                <div class="pg-rating">${'★'.repeat(Math.round(l.rating))} <span style="color:var(--muted);font-size:0.95rem;">(${l.rating})</span></div>
                <div class="pg-actions">
                    <button onclick="alert('Viewing details for ${l.title}')">View</button>
                    <button onclick="alert('Rate ${l.title}')">Rate</button>
                </div>
            </div>
        `).join('');
  }
  // Profile: Load user info
  if (document.getElementById('profileName')) {
    document.getElementById('profileName').textContent = demoProfile.name;
    document.getElementById('profileRole').textContent = demoProfile.role;
    document.getElementById('myListings').innerHTML = demoProfile.listings.map(l => `<li>${l}</li>`).join('');
    document.getElementById('myReviews').innerHTML = demoProfile.reviews.map(r => `<li>${r}</li>`).join('');
  }
  // Admin: Load pending listings
  const pendingListings = document.getElementById('pendingListings');
  if (pendingListings) {
    pendingListings.innerHTML = demoPending.map(p => `
            <div class="pending-card">
                <div>
                    <div class="pg-title">${p.title}</div>
                    <div class="pg-location">${p.location}</div>
                    <div class="pg-owner" style="color:var(--muted);font-size:0.95rem;">Owner: ${p.owner}</div>
                </div>
                <div class="actions">
                    <button onclick="alert('Verified ${p.title}')">Verify</button>
                    <button onclick="alert('Rejected ${p.title}')" style="background:#d32f2f;">Reject</button>
                </div>
            </div>
        `).join('');
  }
  // Login: Form validation
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      let valid = true;
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const emailError = document.getElementById('emailError');
      const passwordError = document.getElementById('passwordError');
      emailError.textContent = '';
      passwordError.textContent = '';
      if (!email.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        emailError.textContent = 'Enter a valid email.';
        valid = false;
      }
      if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        valid = false;
      }
      if (!valid) e.preventDefault();
    });
  }
});

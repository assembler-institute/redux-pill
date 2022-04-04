export function saveNewUser(userData) {
  localStorage.setItem("User", JSON.stringify(userData));
}

export function clearLS() {
  localStorage.removeItem("User");
}

export function checkSession() {
  return JSON.parse(localStorage.getItem("User"));
}

function clearCookie() {
  document.cookie = `login_token=; SameSite=Strict`;
}

export default clearCookie;

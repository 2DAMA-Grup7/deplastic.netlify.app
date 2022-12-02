module.exports = function send_error(res, err) {
  if (err) {
    res.send(JSON.stringify({ success: false }));
  } else {
    res.send(JSON.stringify({ success: true }));
  }
};

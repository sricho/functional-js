function getMessage(object) {
  return object.message;
}

function shortMessage(message) {
  return message.length < 50;
}

function getShortMessages(messages) {
  return messages.map(getMessage).filter(shortMessage);
}

module.exports = getShortMessages

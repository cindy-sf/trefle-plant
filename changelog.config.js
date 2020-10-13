module.exports = {
  "disableEmoji": true,
  "list": [
    "test",
    "feat",
    "fix",
    "refactor",
    "style",
  ],
  "maxMessageLength": 64,
  "minMessageLength": 3,
  "questions": [
    "type",
    "subject",
    "body",
  ],
  "types": {
    "feat": {
      "description": "A new feature",
      "value": "feat"
    },
    "fix": {
      "description": "A bug fix",
      "value": "fix"
    },
    "refactor": {
      "description": "A code change that neither fixes a bug or adds a feature",
      "value": "refactor"
    },
    "style": {
      "description": "Markup, white-space, formatting, missing semi-colons...",
      "value": "style"
    },
    "test": {
      "description": "Adding missing tests",
      "value": "test"
    }
  }
}

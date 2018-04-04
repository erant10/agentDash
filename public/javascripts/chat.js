
class Chat {

  init() {
    this.cacheDOM();
    //this.bindEvents();
    this.render();
  }

  cacheDOM() {
    this.$chatHistory = $('.chat-history');
    this.$button = $('button');
    this.$textarea = $('#message-to-send');
    this.$chatHistoryList =  this.$chatHistory.find('ul');
  }

  bindEvents() {
    this.$button.on('click', this.addMessage.bind(this));
    this.$textarea.on('keyup', this.addMessageEnter.bind(this));
  }

  render() {
    this.scrollToBottom();
    if (this.messageToSend.trim() !== '') {
      var template = Handlebars.compile( $("#message-template").html());
      var context = {
        messageOutput: this.messageToSend,
        time: this.getCurrentTime()
      };

      this.$chatHistoryList.append(template(context));
      this.scrollToBottom();
      this.$textarea.val('');

      // responses
      var templateResponse = Handlebars.compile( $("#message-response-template").html());
      var contextResponse = {
        response: this.getRandomItem(this.messageResponses),
        time: this.getCurrentTime()
      };

      setTimeout(function() {
        this.$chatHistoryList.append(templateResponse(contextResponse));
        this.scrollToBottom();
      }.bind(this), 1500);

    }

  }

  addMessage() {
    this.messageToSend = this.$textarea.val()
    this.render();
  }

  addMessageEnter(event) {
      // enter was pressed
      if (event.keyCode === 13) {
        this.addMessage();
      }
  }
  scrollToBottom() {
     this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
  }

  getCurrentTime() {
    return new Date().toLocaleTimeString().
            replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  }
  getRandomItem(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
  }
    
}

module.exports = Chat;
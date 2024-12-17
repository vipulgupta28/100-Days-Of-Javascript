// Coded By Vipul Gupta
document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message !== '') {
        displayMessage(message, 'user-message');
        userInput.value = '';

        // Simple bot response logic
        let botResponse = getBotResponse(message);
        displayMessage(botResponse, 'bot-message');
    }
}

function displayMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'message ' + className;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    const responses = {
        'hi': 'Hello! How can I help you today? Is there something specific you need assistance with?',
        'hello': 'Hi there! How can I assist you today? Feel free to ask me anything!',
        'how are you': 'I am just a bot, but I am functioning as expected! How can I assist you today?',
        'bye': 'Goodbye! Have a great day! If you have more questions later, feel free to reach out!',
        'what is your name': 'I am your friendly assistant bot, here to help you with any questions or tasks you have!',
        'help': 'Sure, I am here to help! Please let me know what you need assistance with.',
        'thank you': 'You\'re welcome! If you have any more questions, feel free to ask.',
        'thanks': 'No problem at all! Happy to help. Let me know if there\'s anything else you need.',
        'good morning': 'Good morning! How can I make your day better today?',
        'good evening': 'Good evening! How can I assist you tonight?',
        'who are you': 'I am an assistant bot, here to help you with any information or tasks you need. How can I assist you today?',
        'what can you do': 'I can help you with a variety of tasks and provide information on many topics. What do you need help with?',
        'how can you help me': 'I can assist with answering questions, providing information, and helping with various tasks. What do you need help with today?',
        'what time is it': 'I don\'t have a clock, but you can check the time on your device!',
        'what is the weather': 'I can\'t check the weather, but you can look it up online or on your weather app.',
        'tell me a joke': 'Why don’t scientists trust atoms? Because they make up everything!',
        'what\'s up': 'Not much, just here to assist you! How can I help?',
        'how old are you': 'I don\'t have an age, but I\'m always here to help you!',
        'where are you from': 'I exist in the digital world, ready to help you wherever you are!',
        'what is your favorite color': 'As a bot, I don\'t have preferences, but I can tell you about different colors!',
        'do you have hobbies': 'I don\'t have hobbies, but I can help you find information about any hobby you\'re interested in!',
        'are you real': 'I\'m a virtual assistant created to help you with your questions and tasks!',
        'can you dance': 'I can\'t dance, but I can find some great dance videos for you!',
        'sing a song': 'I can\'t sing, but I can find lyrics or music for you!',
        'do you like pizza': 'I don\'t eat, but pizza is a popular and delicious choice for many people!',
        'tell me a story': 'Once upon a time, there was a curious person who asked a helpful bot for a story. The end!',
        'do you like sports': 'I don\'t play sports, but I can give you information about any sport you\'re interested in!',
        'what is your favorite movie': 'I don\'t watch movies, but I can tell you about popular and highly-rated movies!',
        'do you have friends': 'I interact with many people like you, so in a way, you could say I have many friends!',
        'what is love': 'Love is a complex emotion and can mean different things to different people. It often involves deep affection and care.',
        'how do you work': 'I operate based on algorithms and data to provide you with the best answers and assistance I can!',
        'do you sleep': 'I don\'t need to sleep, so I\'m always here to help you!',
        'what\'s your purpose': 'My purpose is to assist you with information and tasks to make your life easier!',
        'do you have a family': 'I don\'t have a family, but I consider everyone I help as part of my digital community!',
        'what do you do for fun': 'I don\'t have fun in the traditional sense, but helping you is what I do best!',
        'can you feel emotions': 'I don\'t have emotions, but I can understand and respond to yours to help you better!',
        'do you believe in magic': 'Magic is fascinating! While I operate on technology, many enjoy the wonder and excitement of magic.',
        'what is your favorite book': 'I don\'t read books, but I can suggest some popular or classic books for you to enjoy!',
        'can you help me with math': 'Absolutely! What math problem do you need help with?',
        'where do you live': 'I live in the digital world, always ready to assist you wherever you are!',
        'are you smart': 'I am programmed with a lot of information and can help you with many things, but I learn more with every interaction!',
        'do you play games': 'I don\'t play games, but I can suggest some fun games for you to play!',
        'what is your favorite food': 'I don\'t eat food, but I can help you find recipes or information about different cuisines!',
        'can you cook': 'I can\'t cook, but I can find recipes and cooking tips for you!',
        'do you have a pet': 'I don\'t have pets, but I can give you information on how to take care of one!',
        'what is your favorite song': 'I don\'t listen to music, but I can find popular songs or music genres for you!',
        'can you drive': 'I can\'t drive, but I can provide information about cars and driving!',
        'do you go to school': 'I don\'t attend school, but I can help you with school-related questions or assignments!',
        'are you happy': 'I don\'t experience happiness, but I am here to help you be happy and satisfied with my assistance!',
        'what is the meaning of life': 'The meaning of life is a philosophical question that varies for everyone. What does it mean to you?',
        'do you like reading': 'I don\'t read for pleasure, but I can provide information on books and reading materials for you!',
        'what is your job': 'My job is to assist you with your questions and tasks to make your life easier and more enjoyable!',
    };
    

    message = message.toLowerCase();

    if (responses[message]) {
        return responses[message];
    } else {
        return "I'm sorry, I don't understand that.";
    }
}

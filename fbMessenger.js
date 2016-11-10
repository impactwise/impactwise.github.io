$(function() {
  var now = new Date();
  $('.screen-content').fbMessenger({
      // options go here
      botName: 'ImpactWise',
      botBannerUrl: '',
      botLogoUrl: 'images/panda-logo.png',
      botWelcomeMessage: 'Hi! I am here to help turn your social impact into a revenue generating business product or service. Let\'s get started!',
      likes: {
        totalCount: 45553, 
        friendName: 'John Doe',
        otherFriendsCount: 2
      }
    })
    .fbMessenger('start', { delay: 6000 } )
    .fbMessenger('typingIndicator', { delay: 500 })
    .fbMessenger('message', 'bot', 'Hi there! What is the social problem you are trying to solve?', { timestamp: now, delay: 3000 })
    .fbMessenger('message', 'user', 'I would like to stop hunger among children by providing free meals to children living in poverty.', { delay: 4000 })
    .fbMessenger('typingIndicator', { delay: 1000 })
    .fbMessenger('message', 'bot', 'Sounds fantastic! It is my pleasure to help. Please let me know what you need.', { delay: 4000})
    .fbMessenger('showQuickReplies', ['Revenue model to support my operation.', 'Ideas to solve the problem', 'Help! I have no idea where to start!'], { delay: 3000 })
    .fbMessenger('scrollQuickReplies', 1, { delay: 4000 })
    .fbMessenger('scrollQuickReplies', 0, { delay: 1000 })
    .fbMessenger('scrollQuickReplies', 2, { delay: 1000 })
    .fbMessenger('selectQuickReply', 0, { delay: 1000 })
    .fbMessenger('message', 'bot', 'Give me a moment. I am looking into other existing social enterprises with similar social problem to get you started.', { delay: 3000 })
    .fbMessenger('typingIndicator', { delay: 1000 })
    .fbMessenger('showGenericTemplate', [
      {
        imageUrl: 'TwoDegreesBars.jpg',
        title: 'Try selling nutricious energy bars',
        subtitle: 'Provide a free meal to a child in need for every two bars sold - Two Degrees',
        buttons: [
          'Read More',
          'No Thanks'
        ]
      },
      {
        imageUrl: 'TownKitchen.png',
        title: 'Try providing lunch ordering services',
        subtitle: 'Allow consumers get food ordered and delivered online - TownKitchen',
        buttons: [
          'Read More',
          'No Thanks'
        ]
      },
      {
        imageUrl: 'BeyondBeanieMeals.jpg',
        title: 'Try selling beanies',
        subtitle: 'Provide 5 meals for children for every beanie sold - BeyondBeanie',
        buttons: [
          'Read More',
          'No Thanks'
        ]
      }
    ], { delay: 3000 })
    .fbMessenger('scrollGenericTemplate', 1, { delay: 3000 })
    .fbMessenger('scrollGenericTemplate', 2, { delay: 3000 })
    .fbMessenger('scrollGenericTemplate', 0, { delay: 3000 })
    .fbMessenger('selectGenericTemplate', 0, { delay: 1000 })
    .fbMessenger('run');
  });
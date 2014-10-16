if (Meteor.isClient) {
  Template.hello.events({
    'click button': function () {
      Meteor.call('test', NaN, function (error) {
        if (error) {
          alert("This should not be an error");
        }
        else {
          alert("Hm, no bug?");
        }
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    'test': function (test) {
      check(test, Number);
    }
  });
}

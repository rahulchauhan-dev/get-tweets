



function search() {
  document.getElementById('twitter-container').innerHTML = ""
  var user = document.getElementById("username").value;
  var link = document.getElementsByClassName('twitter-timeline').href = "https://twitter.com/" + user;



  twttr.widgets.createTimeline(
    {
      sourceType: "url",
      url: link,

    },
    document.getElementById('twitter-container'),
    {
      theme: 'dark',
      chrome: 'noheader, nofooter'
    }
  );








}

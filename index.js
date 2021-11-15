



function search(){

          var user = document.getElementById("username").value;
          var link = document.getElementsByClassName('twitter-timeline').href="https://twitter.com/" + user ;

          twttr.widgets.createTimeline(
            {
              sourceType:"list",
              url: link,
              ownerScreenName: "TwitterDev",
              slug: "national-parks"
            },
            document.getElementById('twitter-container'),
            {
                theme:'dark',
                chrome:'noheader, nofooter'
              }
          );


          





}

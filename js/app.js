$(document).ready(function () {
  let { index } = state;
  const { greetings, projects, skills, social } = state;

  const changeGreetings = () => {
    $(".greeting").text(greetings[index]);
    index < greetings.length - 1 ? index++ : (index = 0);
  };
  changeGreetings();
  setInterval(changeGreetings, 2000);

  skills.forEach((e) => {
    $(".skills").append(`<span class='skill'>${e}</span>`);
  });

  const projectSource = $("#projects-template").html();
  const projectTemplate = Handlebars.compile(projectSource);
  $(".projects").append(projectTemplate({ projects }));

  const socialSource = $("#social-template").html();
  const socialTemplate = Handlebars.compile(socialSource);
  $(".social").append(socialTemplate({ social }));

  $(window).scroll(function (event) {
    $(".module").each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });
  });

  const win = $(window);
  const allMods = $(".module");

  // Already visible modules
  allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible");
    }
  });

  win.scroll(function (event) {
    allMods.each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");
      }
    });
  });


  $("#contact-form").on("submit", async function (event) {
    event.preventDefault();
    const form = new FormData(this);

    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        'Accept' : 'application.json'
      }
    })

    if (response.ok) {
      $(this)[0].reset()
      alert("Thank you for contacting me, I'll write to you soon.")
    }
  });
});

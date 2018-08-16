$(document).ready(function() {
  $(".js-typeahead").typeahead({
    minLength: 3,
    maxlength: 15,
    maxItem: 7,
    order: "asc",
    offset: true,
    hint: true,
    dynamic: true,
    delay: 200,

    emptyTemplate: 'No result for "{{query}}"',
    template: "{{title}}",
    display: ["title", "link"],
    source: {
      ajax: function(query) {
        return {
          type: "post",
          url: "https://coderstrust.codingplatform.pl/application/request.php",
          data: {
            search: query
          },
          callback: {
            done: function(respons) {
              var tab = respons["response"]["channels"];
              return tab;
            }
          }
        };
      }
    },
    callback: {
      onClick: function(item) {
        window.open(item.link, "_blank");
      },
      onSubmit: function(item) {
        event.preventDefault();
        window.open(item.link, "_blank");
      }
    }
  });
});

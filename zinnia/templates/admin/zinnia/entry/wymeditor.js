$(document).ready(function() {
  $("#id_content").wymeditor({
      basePath: '{{ STATIC_URL }}zinnia/js/wymeditor/',
      skin: "django", lang: "{{ lang }}",
      stylesheet: "{{ STATIC_URL }}zinnia/css/wymeditor_styles.css",
      updateSelector: "input:submit", updateEvent: "click",
      postInit: function(wym) {
          wym.hovertools();
      }
      });
    });

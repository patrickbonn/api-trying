class XkcdComic {
    constructor() {
      this.addCorsHeader();
      $.getJSON("http://xkcd.com/info.0.json")
      .done((data) => {
      console.log(data);
      document.getElementById('description').innerHTML = data.title;
      document.getElementById('pic').src = data.img;
    })

}
  
  addCorsHeader() {
    jQuery.ajaxPrefilter(function(options) {
      if (options.crossDomain && jQuery.support.cors) {
          options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
      }
    });
  }
}
var bla = new XkcdComic();


  
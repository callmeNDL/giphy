
// var gip1 = $(".giphy1");
// function funcGip(gip1) {
$(document).ready(function () {
  var container = $(".giphy1");;
  const btnSearch = container.find(".btn--search");
  const btnRemove = container.find(".btn--remove");
  var giphyName = container.find(".txt--name");
  const giphyContent = container.find(".get_giphy");
  var giphy = [];
  initGiphy()

  function initGiphy() {
    handleAction();
  }

  function handleAction() {
    btnSearch.on("click", function () {
      handleSearch();
    })
    btnRemove.on("click", function () {
      handleRemove();
    });
  }

  function handleSearch(params) {
    var gifName = giphyName.val();
    if (!gifName) {
      alert("Missing parameter!");
      return;
    }
    handleGetGiphy(gifName);
    giphyName.val("");
  }
  function handleGetGiphy(gifName) {
    $.ajax({
      type: 'GET',
      url: 'https://api.giphy.com/v1/gifs/search',
      data: `q=${gifName}&rating=g&api_key=dc6zaTOxFJmzC`,
      dataType: 'json',
      beforeSend: function () {
        giphyContent.html('<div class="loading"><img src="../image/gif/loading.gif" /></div>');
      }
    }).done(function (data) {
      Array.prototype.push.apply(giphy, data.data);
      handleAddGiphy({ data: giphy });
    });
  }
  function handleAddGiphy(data) {
    giphyContent.find(".loading").html('');
    var giphySource = $(".artists-template").html();
    var resultHandle = Handlebars.compile(giphySource);
    giphyContent.append(resultHandle(data));
  }
  function handleRemove() {
    giphyContent.html('');
    giphyName.val("");
    giphy = [""];
  }
});
// }
$(document).ready(function () {
  var container = $(".giphy2");;
  const btnSearch = container.find(".btn--search");
  const btnRemove = container.find(".btn--remove");
  var giphyName = container.find(".txt--name");
  const giphyContent = container.find(".get_giphy");
  var giphy = [];
  initGiphy()

  function initGiphy() {
    handleAction();
  }

  function handleAction() {
    btnSearch.on("click", function () {
      handleSearch();
    })
    btnRemove.on("click", function () {
      handleRemove();
    });
  }

  function handleSearch(params) {
    var gifName = giphyName.val();
    if (!gifName) {
      alert("Missing parameter!");
      return;
    }
    handleGetGiphy(gifName);
    giphyName.val("");
  }
  function handleGetGiphy(gifName) {
    $.ajax({
      type: 'GET',
      url: 'https://api.giphy.com/v1/gifs/search',
      data: `q=${gifName}&rating=g&api_key=dc6zaTOxFJmzC`,
      dataType: 'json',
      beforeSend: function () {
        giphyContent.html('<div class="loading"><img src="../image/gif/loading.gif" /></div>');
      }
    }).done(function (data) {
      Array.prototype.push.apply(giphy, data.data);
      handleAddGiphy({ data: giphy });
    });
  }
  function handleAddGiphy(data) {
    giphyContent.find(".loading").html('');
    var giphySource = $(".artists-template").html();
    var resultHandle = Handlebars.compile(giphySource);
    giphyContent.append(resultHandle(data));
  }
  function handleRemove() {
    giphyContent.html('');
    giphyName.val("");
    giphy = [];
  }
});




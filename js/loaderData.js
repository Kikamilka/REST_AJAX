(function () {
    var root = 'http://jsonplaceholder.typicode.com';
    $(document).ready(function () {
        $.ajax({
            url: root + '/albums',
            method: 'GET'
        }).then(function (albums) {
            for (var ind_album = 0; ind_album < albums.length; ind_album++) {
                $("<div>").attr("id", ind_album + 1).append(albums[ind_album].title).appendTo("#albums");
            }
            $("#albums>div").click(function () {
                $("#albums>div").css("color", "black");
                $(this).css("color", "crimson");
                var curAlbum = this;
                $.ajax({
                    url: root + '/photos',
                    method: 'GET'
                }).then(function (photos) {
                    $("#photos").empty();
                    for (var i = 0; i < photos.length; i++) {
                        if (photos[i].albumId == curAlbum.id) {
                            $("<img>").attr("src", photos[i].url).appendTo("#photos");
                        }
                    }
                });
            });
        });
    });
})();



if (typeof(document) === "undefined") {
  // @ts-ignore
  import { clientId, clientSecret, playlistsBearer } from "./apiKeys";
}
const playlist_ids = [
  "2Er6xZyUuBjJ0EampHFXAi" // neofolk, 5
  /*
  ,"7fTtYmlOBNF0il5uO2ASsk" // metal, 12
  "5XzdEnf4vS8P65LuH3KPe3"
  ,"0Rl2z73VCbedUqlUdfMYLl"
  ,"1TeDuy22c4LK1JFfWu0qqc"
  ,"5Mo0ErzMKoU4hkypC1s8eN"
  ,"1GGZiLw5ikiuI53SUpEpE3"
  ,"7EWSrxZKDblyqJNsGPdcE2"
  ,"6fnDyrD6TKhLOBHNGKly7A"
  ,"0LnXqBleqs03495fxBG7tQ"
  ,"4lDwIvpsF958rL0Ie70sFc"
  ,"7gOlNz6Wna7OgwCuUg3zsu"
  ,"2ZvsCrwOO0js3SWnnATySS"
  ,"2Hv8K6boAVV84aDRlRhld6"
  ,"37i9dQZF1E37KQt2pRBjiA"
  ,"37i9dQZF1E3ae9kMM8775l"
  ,"37i9dQZF1E38Dw56RK9OzB"
  ,"37i9dQZF1E36BtIH8f7J3t"
  ,"37i9dQZF1E36ETMTCrXn3A"
  ,"37i9dQZF1E35yrakc5Nwnj"
  ,"37i9dQZF1EuIZT9ld5Mt6G"
  ,"37i9dQZEVXcK7y3h1FCkQe"
  ,"37i9dQZEVXbwjjk3st35Mj"
  ,"1yPKRK04fvqUpxBC7fPPOf"
  ,"4mVU35niLAB7OCVlY99sJD"
  ,"6pV8WR1UUTR0kyF5BgAvn9"
  ,"37i9dQZF1DWY7uXxMycXfq"
  ,"37i9dQZF1DWXmlLSKkfdAk"
  ,"37i9dQZF1DX4E3UdUs7fUx"
  ,"37i9dQZF1DX2SK4ytI2KAZ"
  ,"37i9dQZF1DX82GYcclJ3Ug"
  ,"5rBnPOG2GizWe2tyHfphyK"
  ,"0OoH9VKKOkMmFVShSdGI5I"
  ,"5vVrbml6UejX5sH2lpe4nN"
  ,"5YKAOByESNNvNKqCucbEKk"
  ,"1UTcRHzI48gchisauLl3LY"
  ,"64kGNTzaPcy6LcPpq4yGOi"
  ,"37i9dQZF1DXd0RRszxFFrw"
  ,"2rN3mSrzUcgjlj1TcEDTX7"
  ,"37i9dQZF1DWWQp0YMTvpD3"
  ,"37i9dQZF1DX0r3x8OtiwEM"
  ,"2nNRqtIUJSXtbiYno8oxNH"
  ,"37i9dQZF1DX4sWSpwq3LiO"
  ,"37i9dQZF1DXcjpPPxCzYRE"
  ,"4G2i4dbrD5KUYKyIwI6wsY"
  ,"37qanRa2o6oa2l0TkMNdnD"
  ,"0xzpsVjnE6OSjdBC4iIzqe"
  ,"11sIaL1E2OmGhrXW4abKME"
  ,"38PvuUgACQT0tZdXZcQJkT"
  ,"1qs6xDV67CMFqLQelIkzPb"
  ,"3BGJOT0AYU2EenKL2Qzsyz"
  ,"37i9dQZF1DWW7RgkOJG32Y"
  ,"1ILsIHUzrJFM87B7BrKAkI"
  ,"37i9dQZF1DWU2LcZVHsTdv"
  ,"37i9dQZF1DWYiR2Uqcon0X"
  ,"37i9dQZF1DWYnwbYQ5HnZU"
  ,"37i9dQZF1DWWH0izG4erma"
  ,"37i9dQZF1DX1lVhptIYRda"
  ,"37i9dQZF1DX24Kh15JFQJ0"
  ,"37i9dQZF1DX3Ee0ngF5ZVQ"
  ,"37i9dQZF1DX5mB2C8gBeUM"
  ,"6DJVyi2GuuoHZc7lOoCNZs"
  ,"1PJXkdtu1jV5YGQrmoNWNp"
  ,"6R79E8waYpueh314vOE1qW"
  ,"7mrmrI9K8ooGYEL5BJjYNl"
  ,"37i9dQZF1DX5trt9i14X7j"
  ,"4W8iH7I6zQB7n4SCjUTrkg"
  ,"3KGfSFPFDkUc440NkmJx7b"
  ,"37i9dQZF1DWXLeA8Omikj7"
  ,"4mxY0dw8OU00UnOQeq9OFx"
  ,"4YJoN3ChDJ4gBBgSDy4jmK"
  ,"2nf10oPPudKAFgWE0oESkD"
  ,"7lfls6vQ6X2qdVW0aaCSvN"
  ,"4UtwJhIoevoqyvFXBX9qsb"
  ,"4pMUqKVbwkudmHCYTkVvu5"
  ,"6ZNqBjtmRBjXBG2BW0QYCA"
  ,"1fnRhcHLaBfBH1FvufckuQ"
  ,"38eoBQuwCw2PIVUw7n54zz"
  ,"4LuYScRRsP3JeycMFzqrEb"
  ,"2Er6xZyUuBjJ0EampHFXAi"
  ,"1rCOOjod3pe2uBZ0yxhwHg"
  ,"14wTJv3u383K0fDr0TK6qs"
  ,"37i9dQZF1DWXhcuQw7KIeM"
  ,"37i9dQZF1DX0aSJooo0zWR"
  ,"4PCTXMZ22Iup2ztEQO6YRX"
  ,"37i9dQZF1DX0SM0LYsmbMT"
  ,"3aCjMq3zibs1US60n0KRpA"
  ,"0p1A1zk9KpQshtx0eo6cLK"
  ,"3NDootlTJJtUk2CE5nrJIP"
  ,"0DGusKA7sgydJdLzsQ5LX2"
  ,"17YgqGi4HoEeUmr0i46MtI"
  ,"7BCPxG1lV5OOj9AjqJbHwG"
  ,"6ujmZh1yRhJ6V2kd01Oam6"
  ,"36finQ0m3T8BSJEG5evvts"
  ,"3whsc6dyGxN7NVyC03T4Ym"
  ,"4KmcCHDDXJCuzQ7mZ2QrdC"
  ,"1rLuENR0J3kQ2DNXJ0bp6x"
  ,"1tSiAQFOOBZqaCJyhTqzWz"
  ,"2hQAt2YURJrIKazMgeeuKu"
  ,"6Og2Rbo3vbtszoh9hDpgYm"
  ,"0JTPjSEZTvQ79JGTNUKkt4"
  ,"0fWlkBVUHtyxDS6gDYaMpH"
  ,"2t9dCmNfRTlwlw6OVpn79a"
  ,"7bmuxrTn8HFmZtf6k02I3K"
  ,"7c8QlR8DDkS9C8RMyptjV9"
  ,"55YmcZmEGMizDOqDW1MT1x"
  ,"74LfVudz7NnQ6d52JPQ96Y"
  ,"07wSebvK3mFMN2GarWEvC5"
  ,"06mtEUIM4CpBqF4oElDJpW"
  ,"6ISUsoRzMgLKYBncV8M7QC"
  ,"05a3A3cxTTsA5EGaeH9d84"
  ,"2rdaFJVoePT8Kvy1CZHroA"
  ,"6GI99T5H3jpQEaUWQ2vmeD"
  ,"2qM0uxKXly5lPt2Oz9OtY4"
  ,"4KTsFiKMofMcPq1NfcVcTf"
  ,"6vggIuBpdbnmFpTpPqmKDD"
  ,"37i9dQZF1EpsK6X4kS3onB"
  ,"37i9dQZF1EpRhYOp3FoNIW"
  ,"37i9dQZF1Ea4lg4gbnEMrF"
  ,"37i9dQZF1EO43F3oLz6Blf"
  ,"4T1Vy1cDTcVaHjnF9g2GS1"
  ,"1jp02ptLgAPjln0PLmqMtq"
  ,"0HT1dRgf3pVIiHALH6BNjB"
  ,"613Yk321dYgOTBgDG6CzhU"
  ,"7C4SrESDdkXjkEptii8uLI"
  ,"6CGpHyavPK9veP0dczpayD"
  ,"37i9dQZF1DX7alvT6zKWrM"
  ,"4YjL9eid4XzuBuD4sVwnWK"
  ,"1GhdMcrTHKa5Cr5jg7VZVF"
  ,"6avegIhf0svAJsTHLawAkR"
  ,"3P5ixdSW2lxRoY5ispOvX7"
  ,"4wEaDTErbKD1i5P1bism0A"
  ,"3gNVyIKGAs73MtGIJxVaZS"
  ,"45TPl91k54EkittWdMgmBc"
  ,"26VTGmh1fvdhsDLERQOLVk"
  ,"7clLc8JDkAIVR1echZA7UK"
  ,"38JBJSuuXeqxEup7n00F3H"
  ,"2uCSRkqlE6N1DDn5oYKuLx"
  ,"0nVIjopvbFXGe9pR8UIRbX"
  ,"37i9dQZF1DWZtZ8vUCzche"
  ,"3Z5adiHffSXbfnKWB6i3MC"
  ,"37i9dQZF1EiXCEQoq8apTK"
  ,"0cOnXqMwCKzet6DVxnemQT"
  ,"37i9dQZF1E9EAX0P1zf4fi"
  ,"7BzyCHKrQVa5996GUwcXlW"
  ,"37i9dQZF1EjyNu3Ke3uO7K"
  ,"0niLz0LjBO0jWKNip5qBmO"
  ,"37i9dQZF1EtpDxTSMePeLk"
  ,"37i9dQZF1EM7tybjyjV3X1"
  ,"37i9dQZF1CAt6oiKPqfsVm"
  ,"2YPgwLHGvvMe24mpff2zBW"
  ,"5OcyxOwPqr95pakOzOcQj7"
  ,"4Oc1ZexTGTB5aDu84SinKj"
  ,"2bv7kKnsGORaL6HzBvursW"
  ,"3F2JwPNKmpKoDl6LSOf861"
  ,"2ef7s32Nw3IofvIxUDiCMD"
  ,"5TmJWKtvSkouhuyF6NoOM2"
  ,"4HkyP64jhC3e9XB0nPtQM7"
  ,"4Dwck10XLcVXo3UNJZItJ6"
  ,"4EceU0eUPVtT3pUjfEfGfi"
  ,"588ZnCsRPpMJsWJvuBHBT9"
  ,"5ON8yYeluERottLBDk7BZJ"
  ,"4cJl42dHGrqlacaRHGp6UN"
  ,"5m0A0D9nQf8dklPK3haher"
  ,"5dICky5qk3EPaccyJD9aJC"
  ,"6hqnMgfGYuLvYXzat0xqMZ"
  ,"2l2TG8WBvCEjaMyVJm2A1k"
  ,"3zy4ZVnuPPsmnqhPMLfZgp"
  ,"7qcfJUerjjvyzPvDwJfAhN"
  ,"0T6qPt9zJAdfBnagGyzOl4"
  ,"37i9dQZF1DX37bXS7EGI3f"
  ,"37i9dQZF1DWUJiNTfqDwyS"
  ,"37i9dQZF1DWUrdml94k1Rt"
  ,"37i9dQZF1DWUnhhRs5u3TO"
  ,"5gQcpV3OAkC7q9EvDBditZ"
  ,"4Ejo3TTef5cPk5uzCioczd"
  ,"25D0EPtxOiE2OorXLzgkYi"
  ,"37i9dQZF1DX5wgKYQVRARv"
  ,"3erptMyjJ4bZ4xgYTnlCm6"
  ,"400q8jH8cXg2QCPV1O2CQr"
  ,"7fTtYmlOBNF0il5uO2ASsk"
  ,"7scJCQCep5TxUJgyQ7ix5J"
  ,"77Qj45GmNS6xo20FVCc6ci"
  ,"0ITx338BH3GM8VGYXPxyy2"
  ,"29d0uoa0ua8fFBkN1WwqUG"
  ,"607ys9TpDSMlsx5U7NcbdP"
  ,"394VB5yjTUPPahW7qhGku3"
  ,"37i9dQZF1DWUk47CLxI4Uo"
  ,"3HfK25gBYUV1OD2S45KiCi"
  ,"0X1tlUL6P7bKSvlR5enSHq"
  ,"0KSBZ75lHr9Yi7ol6EXnq6"
  ,"5IiIr54Z4ybxg3yiueHqBQ"
  ,"3fhtT4O4ITdY7I7mCNnDwi"
  ,"6NpOS1if15xMPzsmE3erzh"
  ,"4W2kSk1mp5sSE9aTkIkqWH"
  ,"3e3kWn88c8JyzYXvcFa9Bs"
  ,"6Gq5P2XbP5uVWzCsT6FVXg"
  ,"37i9dQZF1DX6GRSnGELn7L"
  ,"37i9dQZF1DWXgtgITTKvYl"
  ,"4TOAesAQqrMS4U2NuUi1RT"
  ,"00diRu0wMKH2YpTHLQjJ7F"
  ,"3CiPI46QLPVSRfm5UieqHR"
  ,"37i9dQZF1DX4qKWGR9z0LI"
  ,"6kuH8qWr4EJRpJrLURKTYT"
  ,"42DlHWPRZKgJTKMcg5uYlI"
  */
];
function getSongsJSONPayload(jsonizedResult) {
  console.log("getSongsJSONPayload");
  const playlist_metadata = {
    "visibility": (
      jsonizedResult.collaborative?"collaborative":
      (jsonizedResult.public?"public":
      "private"
    )),
    "description": jsonizedResult.description,
    "n_followers": jsonizedResult?.followers?.total??0,
    "image": jsonizedResult?.images?.[0]?.url??"",
    "name": jsonizedResult.name,
    "owner": jsonizedResult?.owner?.id??"",
    "n_tracks": jsonizedResult?.tracks?.total??-1,
    "id": jsonizedResult.id
  };
  const trackSetPayload = (jsonizedResult?.items??jsonizedResult?.tracks?.items).map(track => {
    return {
      "added_by": track?.added_by?.id??'',
      "added_date": track?.added_at??'',
      "duration": Math.round(
        (track?.track?.duration_ms??0)/1000
      ),
      "album": track?.track?.album?.name??'',
      "artist": track?.track?.artists?.[0]?.name??'',
      "id": track?.track?.id??'',
      "popularity": track?.track?.popularity??0,
      "release_date": track?.track?.album?.release_date??'',
      "track": track?.track?.name??'',
    }
  });
  return [playlist_metadata, trackSetPayload];
}

const spotifyHandler = {
  getToken: function(callback) {
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
    }).then(
      result => result.json()
    ).then(jsonizedResult => {
      callback(jsonizedResult.access_token);
    });
  },
  getMyPlaylists: function() {
    const iterations = 6;
    let playlistPayload = [];
    for(let k = 0; k < iterations; k++) {
      setTimeout(function(){
        fetch(
        'https://api.spotify.com/v1/me/playlists?offset='+String(40*k)+'&limit=40',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + playlistsBearer
          }
        }
      )
        .then(
          result => result.json()
        )
        .then(
          function getPlaylistsJSONPayload(jsonizedResult) {
            document.getElementById("number_of_playlists").innerText = jsonizedResult.total;
            const playlistSetPayload = jsonizedResult.items.map(playlist => {
              return {
                "img": playlist.images[0].url,
                "name": playlist.name,
                "owner": playlist.owner.id,
                "tracks_number": playlist.tracks.total,
                "tracks_url": playlist.tracks.href
              }
            });
            console.trace(playlistSetPayload);
            playlistPayload.push.apply(playlistPayload, playlistSetPayload);
            if(k===(iterations-1)) {
              document.getElementById("my_playlists").innerText = JSON.stringify(playlistPayload);
            }
          }
        )
      }, k*500);
    }
  },
  oldGetMySongs: function() {
    let playlists_metadata = [];
    let tracks_payload = [];
    playlist_ids.map((playlist_id,k)=>{
      //if(k<3){
      setTimeout(function(){
        fetch(
          'https://api.spotify.com/v1/playlists/'+playlist_id,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + playlistsBearer
            }
          }
        )
        .then(
          result => result.json()
        )
        .then(
          jsonizedResult => {
            let playlist_metadata, track_set_payload;
            [playlist_metadata, track_set_payload] = getSongsJSONPayload(jsonizedResult);
            // playlists_metadata.push.apply(playlists_metadata, [playlist_metadata]);
            document.getElementById("playlist_metadata").innerText += JSON.stringify([playlist_metadata]) + "\n\n";
            document.getElementById("my_songs").innerText += JSON.stringify(track_set_payload) + "\n\n";
          }
        )
      }, k*500);
      //}
    })
  },
  getMySongs: function() {
    let playlists_metadata = [];
    let tracks_payload = [];
    const playlist_id = '2Er6xZyUuBjJ0EampHFXAi'; // neofolk
    [...Array(5).keys()]/*playlist_ids*/.map((/*playlist_id,*/k)=>{
      //if(k<3){
      setTimeout(function(){
        fetch(
          'https://api.spotify.com/v1/playlists/'+playlist_id+'/tracks?offset='+(k*100).toString(),
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + playlistsBearer
            }
          }
        )
        .then(
          result => result.json()
        )
        .then(
          jsonizedResult => {
            let playlist_metadata, track_set_payload;
            [playlist_metadata, track_set_payload] = this.getSongsJSONPayload(jsonizedResult);
            // playlists_metadata.push.apply(playlists_metadata, [playlist_metadata]);
            document.getElementById("playlist_metadata").innerText += JSON.stringify([playlist_metadata]) + "\n\n";
            document.getElementById("my_songs").innerText += JSON.stringify(track_set_payload) + "\n\n";
          }
        )
      }, k*500);
      //}
    })
  }
}
